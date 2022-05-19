import React from 'react';
import './Profile.css';
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
// import clearIcon from '../../assets/images/icons-x-input.svg';
import location from '../../assets/images/icon-orange-map.svg';
import phone from '../../assets/images/icon-orange-phone.svg';
import star from '../../assets/images/icon-orange-star.svg';
import mail from '../../assets/images/icon-orange-mail.svg';
import level from '../../assets/images/icon-orange-level.svg';
import points from '../../assets/images/icon-orange-points.svg';
import iconorangeid from '../../assets/images/id.png';
const algorithm = 'aes-256-cbc';
const key = 'LM@098765_AVPAppLM@098765_AVPApp';
const iv = 'e95a3d73fe601926';
const crypto = require('crypto');

const ActiveProfile = (props) => {
  const { playerInfo, playerData } = props;

  function encrypt(text) {
    let _cipher = crypto.createCipheriv(algorithm, key, iv);
    let _encrypted = _cipher.update(text, 'utf8', 'base64');
    _encrypted += _cipher.final('base64');
    return _encrypted.toString('base64');
  }

  function decrypt(text) {
    var _encrypted;
    if (text) _encrypted = Buffer.from(text, 'base64');
    const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(key),
      Buffer.from(iv)
    );

    decipher.setAutoPadding(true);
    let decrypt = decipher.update(_encrypted, 'base64');
    decrypt += decipher.final();
    return decrypt;
  }

  return (
    <div className="mb-5" style={{paddingTop:"40px"}}>
      <div id="active-profile" className="m-auto">
        {/* Hamburger */}
        {/* <a href="#/" id="score-hamburger">
          <div>
            <img src={hamburgerIcon} alt="" />
            <span
              style={{ padding: 0 }}
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
              id="profile-tooltip"
            >
              <ul>
                <li onClick={props.edit}>Edit</li>
                <li>Active</li>
                <li style={{ color: '#ff2072' }}>Delete</li>
              </ul>
            </span>
          </div>
        </a> */}

        {/* image and input area */}
        <div id="images-and-input-area" style={{ marginTop: 0 }}>
          <img
            src="https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
            alt=""
          />
          <div>
            <div className="input-container">
              <div className="first-and-last-name">
                {/* {playerInfo && playerInfo.firstName} */}
                {playerData !== null && playerData.first_name}
              </div>
            </div>
            <div>
              <div className="first-and-last-name">
                {/* {playerInfo && playerInfo.lastName} */}
                {playerData !== null && playerData.last_name}
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact">
          <div className="contact-title">Contact</div>
          {/* <div className="shadow-box-saved-screen">
            <div>
              <img src={location} alt="" />
              <div className="box-shadow-text">Location</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.loc}
                </div>
              </div>
            </div>
            <div>
              <img src={phone} alt="" />
              <div className="first-div">Phone</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.contact}
                </div>
              </div>
            </div>
            <div>
              <img src={mail} alt="" />
              <div className="first-div">Email</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.email}
                </div>
              </div>
            </div>
          </div> */}
          <div className="shadow-box-saved-screen">
            <div className="container">
              <div className="row mt-0 box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={location} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Location
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.loc} */}
                  {playerData !== null &&
                    playerData.city + ' , ' + playerData.state_code}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={phone} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Phone
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.contact} */}
                  {playerData !== null &&
                  playerData.contact_no !== 'NULL' &&
                  playerData.contact_no !== ''
                    ? decrypt(playerData.contact_no)
                    : ''}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={mail} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Email
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.email} */}
                  {playerData !== null && playerData.email_id}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img
                    src={iconorangeid}
                    alt=""
                    className="img-fluid"
                    style={{ width: 20, height: 20 }}
                  />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  ID
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.email} */}
                  {playerData !== null && playerData.avp_id}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div id="contact">
          <div className="contact-title">Details</div>
          {/* <div className="shadow-box">
            <div>
              <img src={points} alt="" />
              <div className="first-div">Points</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.points1}
                </div>
              </div>
            </div>
            <div>
              <img src={level} alt="" />
              <div className="first-div">Level</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.levelState}
                </div>
              </div>
            </div>
          </div> */}
          <div className="shadow-box-saved-screen">
            <div className="container">
              <div className="row mt-0 box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={points} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Points
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.points1} */}
                  {playerData !== null && playerData.points}
                </div>
              </div>
            </div>
            {/* Purse Amount */}
            <div className="container">
              <div className="row box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={level} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Level
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.levelState} */}
                  {playerData !== null && playerData.division}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newest Results */}
        <div id="contact">
          <div className="contact-title">Newest Results</div>
          {/* <div className="shadow-box">
            <div>
              <img src={points} alt="" />
              <div className="first-div">Points</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.points2}
                </div>
              </div>
            </div>
            <div>
              <img src={star} alt="" />
              <div className="first-div">Placement</div>
              <div className="last-div ml-auto mr-3">
                <div className="form-control profile-form p-0">
                  {playerInfo && playerInfo.placement}
                </div>
              </div>
            </div>
          </div> */}
          <div className="shadow-box-saved-screen">
            <div className="container">
              <div className="row mt-0 box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={points} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Points
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.points2} */}
                  {playerData !== null && playerData.newestScore}
                </div>
              </div>
            </div>
            {/* Purse Amount */}
            <div className="container">
              <div className="row box-saved-screen">
                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                  <img src={star} alt="" className="img-fluid" />
                </div>
                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                  Placement
                </div>

                <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                  {/* {playerInfo && playerInfo.placement} */}
                  {playerData !== null && playerData.newestPlacement}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  );
};

export default ActiveProfile;
