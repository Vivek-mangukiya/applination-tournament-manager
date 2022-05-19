import React, { useState, useEffect, useRef, useContext } from 'react';
import '../manager/NewManagerProfile.css';
import location from '../../assets/images/icon-orange-map.svg';
import phone from '../../assets/images/icon-orange-phone.svg';
import mail from '../../assets/images/icon-orange-mail.svg';
import Footer from '../../components/footer/Footer';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import cardIcon from '../../assets/images/icon-menu-cards.svg';
import listIcon from '../../assets/images/icon-menu-list.svg';
import NewManagerProfileContext from '../../context/newManagerProfile/newManagerProfileContext';
import defaultIcon2 from '../../assets/images/defaultIcon2.png';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import RegEventDropDown from '../../components/RegEventDropDown';
const algorithm = 'aes-256-cbc';
const key = 'LM@098765_AVPAppLM@098765_AVPApp';
const iv = 'e95a3d73fe601926';
const crypto = require('crypto');

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <g fill="none" fillRule="evenodd">
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

const CompleteProfileInfo = (props) => {
  // context
  const newManagerProfileContext = useContext(NewManagerProfileContext);
  const {
    managerInfo,
    //manager Id
    managerId,
    //get manager data
    getManagerById,
    //manager data
    getManagerData,
    //loading counter
    getPromoterManagerLoading,
    deleteManager,
  } = newManagerProfileContext;

  // useEffect(() => {
  //   if (managerInfo === null) {
  //     props.history.push('/newManagerProfileEdit');
  //   }
  // }, [managerInfo, props.history]);

  useEffect(() => {
    // if (managerId !== null) {
    // console.log('Manager Id in saved screen:', managerId);
    console.log('Manager id by url:', parseInt(localStorage.getItem('id')));
    getManagerById(parseInt(localStorage.getItem('id')));
    // }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (getManagerData !== null) console.log('getManagerdata', getManagerData);
  }, [getManagerData]);

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openHamburger, setOpenHamburger] = useState(false);
  //dropdown states
  const [inactive, setInactive] = useState(false);

  // const onInactive = () => setInactive(true);

  const [deleteModal, setDeleteModal] = useState(false);

  const onDelete = async () => {
    if (parseInt(props.match.params.id) !== null) {
      console.log(
        "Manager to be deleted's id:",
        parseInt(props.match.params.id)
      );
      const data = { status: '0' };
      await deleteManager(parseInt(props.match.params.id), {
        data: JSON.stringify(data),
      });
      await setDeleteModal(true);
      await setTimeout(
        () => {
          props.history.push('/managers');
        },
        //  onCloseModal().bind(this),
        //  props.history.push('/dashboard').bind(this),
        3000
      );
      // await onCloseModal();
    }
  };

  const onInactive = async () => {
    setInactive(true);
    if (managerId !== null) {
      console.log("Manager to be MADE INACTIVE's id:", managerId);
      const data = { status: '0' };
      await deleteManager(managerId, {
        data: JSON.stringify(data),
      });
      // await onCloseModal();
    }
  };

  useEffect(() => {
    if (getManagerData !== null) {
      console.log(getManagerData);
    }
  }, [getManagerData]);

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

  const refSelect = useRef();
  useOnClickOutside(refSelect, () => setOpenHamburger(false));

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }

          handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  return (
    <>
      <Header />

      {getManagerData === null ? (
        <div className="col-12 text-center loading_height">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="manager-profile container p-0">
          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-6 m-auto text-center p-0">
              <div className="row main-width">
                <div className="col-12 text-left">
                  {inactive && <div className="">Account Inactive</div>}

                  <div
                    id="active-profile"
                    style={{ marginBottom: 195, marginTop: 80 }}
                  >
                    {/* Hamburger */}
                    {/* <a
                      // href="#/"
                      id="score-hamburger"
                      ref={refSelect}
                      onClick={() => {
                        setOpenHamburger(!openHamburger);
                      }}
                      className={
                        openHamburger ? 'tri_top_visible' : 'tri_top_hidden'
                      }
                    >
                      <div>
                        <img src={hamburgerIcon} alt="" />
                        {openHamburger && (
                          // <span style={{ width: 142, height: 89, padding: 0, marginTop:7, right:-10 }}>
                          <span
                            // className="dropdown_animation"
                            style={{
                              width: 142,
                              height: 60,
                              padding: 0,
                              marginTop: 7,
                              right: -10,
                            }}
                          >
                            <ul>
                              <li
                                id="hamburger_item"
                                onClick={() => {
                                  // getManagerById(managerId);
                                  // props.history.push('/newManagerProfileEdit');
                                  props.history.push(
                                    `/newManagerProfileEdit/${parseInt(
                                      props.match.params.id
                                    )}`
                                  );
                                }}
                              >
                                Edit
                              </li>
                              <li
                                style={{ color: '#ff2072' }}
                                onClick={onOpenModal}
                                id="hamburger_item"
                              >
                                Delete
                              </li>
                            </ul>
                          </span>
                        )}
                      </div>
                    </a> */}
                    <RegEventDropDown>
                      {/* <li
                            onClick={() =>
                              props.history.push(
                                `/scoresEdit/${parseInt(props.match.params.id)}`
                              )
                            }
                          >
                            Edit
                          </li> */}
                      <li
                        id="hamburger_item"
                        onClick={() => {
                          // getManagerById(managerId);
                          props.history.push('/completeProfileEdit');
                          // props.history.push(
                          //   `/completeProfile/${parseInt(
                          //     props.match.params.id
                          //   )}`
                          // );
                        }}
                      >
                        Edit
                      </li>

                      {/* <li>Revert</li> */}
                    </RegEventDropDown>

                    {/* image and input area */}
                    <div id="images-and-input-area" style={{ marginTop: 0 }}>
                      <div
                        style={{
                          // border: '2px solid black',
                          // height: 100,
                          // width: 100,
                          // borderRadius: '50%',
                          // backgroundColor: '#d8d8d8',
                          // overflow: 'visible',
                          // display: 'block',
                          // marginLeft: 0,
                          // objectFit:'cover',
                          height: 100,
                          width: 100,
                          borderRadius: '50%',
                          backgroundColor: '#d8d8d8',
                          overflow: 'visible',
                          display: 'inline-block',
                          marginLeft: 0,
                          // paddingTop:15,
                        }}
                      >
                        <img
                          className={
                            getManagerData !== null
                              ? 'manager_profile_image'
                              : 'manager_profile_image_default'
                          }
                          style={
                            {
                              // objectFit: 'contain',
                              // height: 100,
                              // width:150,
                              // borderRadius: '50%',
                              // backgroundColor: '#d8d8d8'
                              // height: 100,
                              // width: 100,
                              // borderRadius: '50%',
                              // backgroundColor: '#d8d8d8',
                              // overflow: 'visible',
                              // display: 'inline-block',
                              // marginLeft: 0,
                              // padding:15
                            }
                          }
                          onError={(e) => (e.target.src = defaultIcon2)}
                          // onError={(e)=>{console.error(e);}}
                          src={
                            getManagerData !== null
                              ? getManagerData.map(
                                  (data) =>
                                    `${process.env.REACT_APP_PLAYER_COURT_URL}/${data.profile_pic}`
                                )
                              : `${process.env.REACT_APP_PLAYER_COURT_URL}/${defaultIcon2}`
                            // getManagerData !== null || undefined
                            // ? `http://fanwins.in${getManagerData.profile_pic}`
                            // : 'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg'
                          }
                          alt=""
                        />
                      </div>

                      {/* <div
                        style={{
                          // border: '2px solid black',
                          height: 100,
                          width: 100,
                          borderRadius: '50%',
                          backgroundColor: '#d8d8d8',
                          overflow: 'visible',
                          display: 'inline-block',
                          marginLeft: 0,
                        }}
                        // className="d-inline"
                      >
                        {getManagerData[0].profile_pic !== null ? (
                          <img
                            src={
                              getManagerData !== null &&
                              getManagerData.map(
                                (data) =>
                                  `http://fanwins.in/${data.profile_pic}`
                              )
                            }
                            alt=""
                            className="m-auto d-block"
                            style={{
                              objectFit: 'cover',
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                            }}
                          />
                        ) : (
                          <img
                            src={photoAddIcon}
                            alt=""
                            className="m-auto d-block pt-3 pb-2"
                            style={{
                              objectFit: 'contain',
                              height: 80,
                            }}
                          />
                        )}
                      </div> */}

                      {inactive && <div className="inactive_dot" />}

                      <div>
                        <div className="input-container">
                          {/* {managerInfo && managerInfo.firstName} */}
                          {getManagerData !== null &&
                            getManagerData.map((data, index) => (
                              <div
                                key={index}
                                className="first-and-last-name"
                                style={{ color: '#4a4a4a' }}
                              >
                                {data.first_name}
                              </div>
                            ))}
                        </div>
                        <div>
                          {getManagerData !== null &&
                            getManagerData.map((data, index) => (
                              <div
                                key={index}
                                className="first-and-last-name"
                                style={{ color: '#4a4a4a' }}
                              >
                                {data.last_name}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                      <div className="contact-title">Contact</div>
                      <div className="shadow-box">
                        <div>
                          <img src={location} alt="" />
                          <div className="first-div">Location</div>
                          <div className="last-div ml-auto mr-3">
                            {getManagerData !== null &&
                              getManagerData.map((data, index) => (
                                <div
                                  className="form-control profile-form p-0"
                                  key={index}
                                >
                                  {data.city + ' , ' + data.state_code}
                                </div>
                              ))}
                          </div>
                        </div>
                        <div>
                          <img src={phone} alt="" />
                          <div className="first-div">Phone</div>
                          <div className="last-div ml-auto mr-3">
                            {getManagerData !== null &&
                              getManagerData.map((data, index) => (
                                <div
                                  className="form-control profile-form p-0"
                                  key={index}
                                >
                                  {/* {console.log([data.contact_no])} */}
                                  {/* {decrypt(data.contact_no)} */}
                                  {decrypt(data.contact_no).slice(6, 10) +
                                    ' ' +
                                    decrypt(data.contact_no).slice(3, 6) +
                                    ' ' +
                                    decrypt(data.contact_no).slice(0, 3)}
                                </div>
                              ))}
                          </div>
                        </div>
                        <div>
                          <img src={mail} alt="" />
                          <div className="first-div">Email</div>
                          <div className="last-div ml-auto mr-3">
                            {getManagerData !== null &&
                              getManagerData.map((data, index) => (
                                <div
                                  className="form-control profile-form p-0"
                                  key={index}
                                >
                                  {data.email_id}
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* footer */}
      <Footer>
        <div className="col-12 text-right m-auto">
          <button
            type="button"
            className="btn-sm mr-2"
            id="yellow-button-hover"
            style={{
              border: '1px solid yellow',
              borderRadius: 15,
              width: 112,
              height: 24,
              backgroundColor: '#ffd420',
              outline: 0,
              fontSize: 10,
            }}
            // onClick={() => props.history.goBack()}
            onClick={() => props.history.goBack()}
          >
            BACK
          </button>
        </div>
      </Footer>

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
        {deleteModal ? (
          <div className="profile_successfully_deleted">
            Profile Successfully Deleted
          </div>
        ) : (
          <>
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
              Are you sure you want to
              <span className="modal-delete-text"> delete</span>?
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
              Admin profile and all information will be erased!
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
                    border: '1px solid #ffd420',
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
                  className="btn-sm pb-1 ml-3"
                  id="yellow-button-hover"
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffd420',
                    outline: 0,
                  }}
                  onClick={onDelete}
                >
                  YES, DELETE
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default CompleteProfileInfo;
