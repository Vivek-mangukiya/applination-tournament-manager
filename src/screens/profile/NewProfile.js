import React, { useEffect, useState, useContext } from 'react';
import './Profile.css';
import clearIcon from '../../assets/images/icons-x-input.svg';
import location from '../../assets/images/icon-orange-map.svg';
import phone from '../../assets/images/icon-orange-phone.svg';
import star from '../../assets/images/icon-orange-star.svg';
import mail from '../../assets/images/icon-orange-mail.svg';
import level from '../../assets/images/icon-orange-level.svg';
import points from '../../assets/images/icon-orange-points.svg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import PlayerProfileContext from '../../context/playerProfile/playerProfileContext';
import { Modal } from 'react-responsive-modal';
import NumberFormat from 'react-number-format';
import PhoneInput from 'react-phone-number-input';

const NewProfile = (props) => {
  //context
  const playerProfileContext = useContext(PlayerProfileContext);
  const { saveData, playerInfo } = playerProfileContext;

  const [firstName, setFirstName] = useState(
    playerInfo ? playerInfo.firstName : ''
  );
  const [lastName, setLastName] = useState(
    playerInfo ? playerInfo.lastName : ''
  );
  const [loc, setLoc] = useState(playerInfo ? playerInfo.loc : '');
  const [contact, setContact] = useState(playerInfo ? playerInfo.contact : '');
  const [email, setEmail] = useState(playerInfo ? playerInfo.email : '');
  const [points1, setPoints1] = useState(playerInfo ? playerInfo.points1 : '');
  const [levelState, setLevelState] = useState(
    playerInfo ? playerInfo.levelState : ''
  );
  const [points2, setPoints2] = useState(playerInfo ? playerInfo.points2 : '');
  const [placement, setPlacement] = useState(
    playerInfo ? playerInfo.placement : ''
  );
  const [contactError, setContactError] = useState(false);

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <g fill="#333">
          <g>
            <path
              d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
              transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    if (loc === '' || contact === '' || email === '') {
      setContactError(true);
    }
    if (loc.length !== 0 && contact.length !== 0 && email.length !== 0) {
      setContactError(false);
    }
  }, [loc, contact, email]);

  const onSave = () => {
    console.log({
      firstName,
      lastName,
      loc,
      contact,
      email,
      points1,
      points2,
      levelState,
      placement,
    });
    saveData({
      firstName,
      lastName,
      loc,
      contact,
      email,
      points1,
      points2,
      levelState,
      placement,
    });
    if (
      saveData !== null &&
      firstName !== '' &&
      lastName !== '' &&
      loc !== '' &&
      contact !== '' &&
      email !== '' &&
      points1 !== '' &&
      levelState !== '' &&
      points2 !== '' &&
      placement !== ''
    ) {
      props.history.push('/profile');
    }
  };

  return (
    <>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      <div>
        <div id="active-profile" className="m-auto pb-5">
          {/* image and input area */}
          <div id="images-and-input-area" style={{ marginTop: 142 }}>
            <img
              src="https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
              alt=""
            />
            <div>
              <div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="FIRST NAME"
                  className="player-profile-input"
                />
                <img src={clearIcon} alt="" onClick={() => setFirstName('')} />
              </div>
              <div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="LAST NAME"
                  className="player-profile-input"
                />
                <img src={clearIcon} alt="" onClick={() => setLastName('')} />
              </div>
            </div>
          </div>

          <div className="pdf-upload edit-manager-photo text-left  col-12">
            <label htmlFor="file-input">EDIT PHOTO</label>
            <input id="file-input" type="file" />
          </div>

          {/* Contact */}
          <div id="contact">
            <div className="contact-title">Contact</div>
            {contactError && (
              <div className="contact-title" style={{ color: '#ff2072' }}>
                Please enter all details
              </div>
            )}
            <div className="box">
              <div className="profile-labels">
                <img src={location} alt="" />
                <div className="first-div">Location</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="zip code"
                  />
                </div>
              </div>
              <div className="profile-labels">
                <img src={phone} alt="" />
                <div className="first-div">Mobile</div>
                <div className="last-div ml-auto mr-3">
                  <NumberFormat
                    format="#### ### ###"
                    displayType="input"
                    // customInput={contact}
                    placeholder="5555 555 555"
                    className={`form-control p-0 ml-2 usa-number-format`}
                    name="leagueCost"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    // onKeyUp="rtl(this);"
                    // onKeyDown="rtl(this)"
                    style={{
                      height: 'inherit',
                      // direction: 'rtl',
                      textAlign: 'right',
                      fontSize: 14,
                      outline: 'none',
                      border: 0,
                      boxShadow: '0px 0px 0px 0px',
                      fontFamily: 'FuturaMedium',
                      fontWeight: 500,
                      marginRight: 0,
                      paddingRight: 0,
                    }}
                  />
                  {/* <PhoneInput
                country="US"
                  placeholder="5555 555 555"
                  className={`form-control p-0 ml-2 usa-number-format`}
                  name="leagueCost"
                  onChange={setContact}
                  value={contact}
                  style={{
                    height: 'inherit',
                    // direction: 'rtl',
                    textAlign:'right',
                    fontSize: 14,
                    outline: 'none',
                    border: 0,
                    boxShadow: '0px 0px 0px 0px',
                    fontFamily:'FuturaMedium',
                    fontWeight:500,
                    marginRight:0,
                    paddingRight:0
                  }}
                /> */}
                  {/* <input 
                  placeholder="5555 555 555"
                  className={`form-control p-0 ml-2 usa-number-format`}
                  name="leagueCost"
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  style={{
                    height: 'inherit',
                    // direction: 'rtl',
                    // textAlign:'right',
                    fontSize: 14,
                    outline: 'none',
                    border: 0,
                    boxShadow: '0px 0px 0px 0px',
                    fontFamily:'FuturaMedium',
                    fontWeight:500,
                    marginRight:0,
                    paddingRight:0
                  }}
                /> */}
                </div>
              </div>
              <div className="profile-labels">
                <img src={mail} alt="" />
                <div className="first-div">Email</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="name@email.com"
                  />
                </div>
              </div>
              <div className="profile-labels">
                <img src={mail} alt="" />
                <div className="first-div">ID</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="name@email.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div id="contact">
            <div className="contact-title">Details</div>
            <div className="box">
              <div className="profile-labels">
                <img src={points} alt="" />
                <div className="first-div">Points</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={points1}
                    onChange={(e) => setPoints1(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="1,240"
                  />
                </div>
              </div>
              <div className="profile-labels">
                <img src={level} alt="" />
                <div className="first-div">Level</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={levelState}
                    onChange={(e) => setLevelState(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="Pro"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Newest Results */}
          <div id="contact" style={{ marginBottom: 100 }}>
            <div className="contact-title">Newest Results</div>
            <div className="box">
              <div className="profile-labels">
                <img src={points} alt="" />
                <div className="first-div">Points</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={points2}
                    onChange={(e) => setPoints2(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="300+"
                  />
                </div>
              </div>
              <div className="profile-labels">
                <img src={star} alt="" />
                <div className="first-div">Placement</div>
                <div className="last-div ml-auto mr-3">
                  <input
                    type="text"
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    className="form-control profile-form p-0"
                    placeholder="2nd"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer>
          <div className="m-0 col-auto ml-auto mt-3" onClick={onOpenModal}>
            <div className="lower-back-button-cancel" id="white-button-hover">
              <span className="lower-back-button-text">CANCEL</span>
            </div>
          </div>
          <div className="m-0 col-auto mt-3" onClick={onSave}>
            <div className="lower-back-button" id="yellow-button-hover">
              <span className="lower-back-button-text">SAVE</span>
            </div>
          </div>
        </Footer>
      </div>
      {/* modal */}
      <Modal
        open={open}
        onClose={onCloseModal}
        closeIcon={closeIcon}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
            margin: 0,
            padding: 0,
          },
          closeIcon: {
            outline: 0,
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          Are your sure you want to cancel?
        </div>
        <p
          className="text-center"
          style={{
            width: 398,
            fontSize: 10,
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          All changes will not be saved and progress will be lost.
        </p>
        <div
          className="row container"
          style={{ marginTop: 79, marginBottom: 24 }}
        >
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              id="white-button-hover"
              onClick={onCloseModal}
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 24,
                fontSize: 10,
                backgroundColor: '#ffffff',
                outline: 0,
              }}
            >
              NO, CONTINUE
            </button>
            <button
              className="btn-sm pb-1 ml-5"
              id="yellow-button-hover"
              onClick={() => props.history.goBack()}
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 24,
                fontSize: 10,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              YES, CANCEL
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewProfile;
