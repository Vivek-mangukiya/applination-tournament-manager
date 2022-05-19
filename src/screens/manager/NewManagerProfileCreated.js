import React, {
  useState,
  useEffect,
  useContext,
  Component,
  useRef,
} from 'react';
import './NewManagerProfile.css';
import clearIcon from '../../assets/images/icons-x-input.svg';
import location from '../../assets/images/icon-orange-map.svg';
import phone from '../../assets/images/icon-orange-phone.svg';
import mail from '../../assets/images/icon-orange-mail.svg';
import Footer from '../../components/footer/Footer';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import cardIcon from '../../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../../assets/images/icon-menu-list.svg';
import NewManagerProfileContext from '../../context/newManagerProfile/newManagerProfileContext';
import NumberFormat from 'react-number-format';
import photoAddIcon from '../../assets/images/group.svg';
import CryptoJS from 'crypto-js';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// import sha256 from 'crypto-js/sha256';
// import sha256 from 'crypto-js/sha256';
import aesCbc from 'aes-js';
import aesjs from 'aes-js';
import aes256 from 'aes256';
import { GET_MANAGER_BY_ID } from '../../context/Types';
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

const NewManagerProfileCreated = (props) => {
  // context
  const newManagerProfileContext = useContext(NewManagerProfileContext);
  const {
    saveData,
    managerInfo,
    //create manager post request
    createManager,
    // manager id
    managerId,
    createPromoterLoading,
    setCreatePromoterLoading,
    getAllManagers,
    managerListData,
    getManagerById,
    getManagerByIdList,
    createManagerError,
  } = newManagerProfileContext;

  useEffect(() => {
    if (managerId !== null) {
      console.log(managerId);
    }
  }, [managerId]);

  //for email validation:
  // useEffect(() => {
  //   getAllManagers();
  // }, []);

  // useEffect(()=>{
  //   console.log("MANAGER LIST DATA",managerListData);
  // },[managerListData])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loc, setLoc] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  // image upload
  const [file, setFile] = useState({ preview: '', raw: '' });

  const [contactError, setContactError] = useState(null);
  const [zipcodeError, setZipcodeError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [emailTakenError, setEmailTakenError] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [imageError, setImageError] = useState(false);

  // const [emailClicked, setEmailClicked] = useState(false);
  const [locClicked, setLocClicked] = useState(false);

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [saveLoading, setSaveLoading] = useState(false);

  // const [saveClicked, setSaveClicked] = useState(false);
  // useEffect(() => {
  //   if (loc === '' || contact === '' || email === '') {
  //     setContactError(true);
  //   }
  //   if (loc.length !== 0 && contact.length !== 0 && email.length !== 0) {
  //     setContactError(false);
  //   }
  // }, [loc, contact, email]);

  // useEffect(()=>{

  //   // loc = loc.toString().trim();

  //   var us = new RegExp(/^\d{5}(-\d{4})?$/);
  //   var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

  //   if (us.test(loc.toString()) || ca.test(loc.toString().replace(/\W+/g, ''))) {
  //       setZipcodeError(false);

  //   }
  //   else{
  //     setZipcodeError(true);
  //   }

  // },[loc]);

  useEffect(() => {
    if (firstName.length !== 0) {
      setFirstNameError(false);
    }
  }, [firstName]);

  useEffect(() => {
    if (file.raw !== '' && file.raw.size < 2048000) {
      setImageError(false);
    }
  }, [file.raw]);

  useEffect(() => {
    if (lastName.length !== 0) {
      setLastNameError(false);
    }
  }, [lastName]);

  useEffect(() => {
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    var can2 = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    if (us.test(loc.toString())) {
      setZipcodeError(null);
    }
    if (can2.test(loc.toString())) {
      setZipcodeError(null);
    }
  }, [loc]);

  useEffect(() => {
    var contactWithoutSpaces = contact.replace(/\s/g, '');
    if (contactWithoutSpaces.length === 10) {
      setContactError(null);
    }
  }, [contact]);

  useEffect(() => {
    var emailTest = new RegExp(/\S+@\S+\.\S+/);
    if (emailTest.test(email)) {
      setEmailValidError(false);
    }
  }, [email]);

  useEffect(() => {
    getAllManagers();
    var found = managerListData.find((manager) => manager.email_id === email);
    if (found === null) {
      setEmailTakenError(false);
    }
  }, [email]);

  useEffect(() => {
    setCreatePromoterLoading();
    setEmailTakenError(false);
    // setEmailClicked(false);
  }, []);

  //imageUpload function
  const handleChange = (event) => {
    setFile({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  let saveBtnRef = useRef();

  const onSave = async () => {
    // setSaveLoading(false);
    // setSaveClicked(true);
    // console.log("SaveClicked?", saveClicked);
    // getAllManagers();
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    var can2 = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var contactWithoutSpaces = contact.replace(/\s/g, '');
    var emailTest = new RegExp(/\S+@\S+\.\S+/);
    var found = managerListData.find((manager) => manager.email_id === email);
    console.log('Found manager email:', found);

    if (firstName === '') {
      setFirstNameError(true);
    } else if (file.raw !== '' && file.raw.size > 2048000) {
      setImageError(true);
      // event_name_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (lastName === '') {
      setLastNameError(true);
    } else if (!us.test(loc) && !can2.test(loc)) {
      setZipcodeError('Please enter valid zipcode');
    } else if (
      contactWithoutSpaces === '' ||
      contactWithoutSpaces.length !== 10
    ) {
      setContactError('Please enter a valid contact');
    } else if (emailTest.test(email) === false) {
      setEmailValidError(true);
    } else if (found) {
      setEmailTakenError(true);
    } else {
      setSaveLoading(true);
      console.log('emailValidError', emailValidError);
      console.log('contactError', contactError);
      console.log('zipcodeError', zipcodeError);
      var contact_without_spaces = contact.replace(/\s/g, '');
      var encrypted_contact = encrypt(contact_without_spaces);
      console.log({
        firstName,
        lastName,
        loc,
        encrypted_contact,
        email,
        file: file.raw,
      });
      const data = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        contact: encrypted_contact,
        email_id: email,
        zip: loc,
      });
      await createManager({ data: data, profile_pic: file.raw }, props.history);
      setSaveLoading(false);
      // if (managerId !== null) {
      //   await props.history.push(`/newManagerProfileSaved/${managerId}`);
      // }
    }
  };

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

  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              // href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              // href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={cardIcon} className="profile-image" />
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => props.history.push('/managers')}
          >
            <a
              className="nav-link disabled"
              // href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={listIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>

      {createPromoterLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          className="new-manager-profile container p-0"
          style={{ height: '100vh' }}
        >
          <div className="row" style={{ marginTop: 85 }}>
            <div className="col-6 m-auto text-center p-0">
              <div className="row main-width">
                <div className="col-12 text-left">
                  {imageError && (
                    <div
                      className="contact-title d-flex justify-content-start"
                      style={{
                        color: '#ff2072',
                        fontSize: 12,
                        border: 0,
                      }}
                    >
                      Add Image less than 2048KB
                    </div>
                  )}
                  <div id="active-profile">
                    {/* image and input area */}
                    <div id="images-and-input-area" style={{ marginTop: 0 }}>
                      <div
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
                        {file.preview !== '' ? (
                          <img
                            src={file.preview}
                            alt=""
                            className="m-auto d-block"
                            style={{
                              objectFit: 'cover',
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                            }}
                            onClick={() => console.log(file)}
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
                      </div>
                      {/* <img
                      // src="https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
                      src={file.preview}
                      alt=""
                      style={{ width: 100, height: 100, borderRadius: '50%' }}
                    /> */}
                      <div>
                        <div className="input-container">
                          <input
                            type="text"
                            // onFocus={(e) => e.target.value = ""}
                            value={firstName}
                            onChange={(e) =>
                              setFirstName(
                                e.target.value.replace(/[^\w\s]/gi, '')
                              )
                            }
                            placeholder="FIRST NAME"
                            className="first-and-last-name"
                          />
                          <img
                            src={clearIcon}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            onClick={() => setFirstName('')}
                          />
                        </div>
                        {firstNameError && (
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              border: 0,
                            }}
                          >
                            Please enter your first name
                          </div>
                        )}
                        <div>
                          <input
                            type="text"
                            // onFocus={(e) => e.target.value = ""}
                            value={lastName}
                            onChange={(e) =>
                              setLastName(
                                e.target.value.replace(/[^\w\s]/gi, '')
                              )
                            }
                            placeholder="LAST NAME"
                            className="first-and-last-name"
                          />
                          <img
                            src={clearIcon}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            onClick={() => setLastName('')}
                          />
                        </div>
                        {lastNameError && (
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              border: 0,
                            }}
                          >
                            Please enter your last name
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pdf-upload edit-manager-photo text-center col-12">
                      <label htmlFor="file-input">ADD PHOTO</label>

                      <input
                        id="file-input"
                        accept="image/png, image/jpeg"
                        type="file"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Contact */}
                    <div id="contact">
                      <div className="contact-title" style={{ marginTop: 0 }}>
                        Contact
                      </div>

                      <div className="box">
                        {
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            {/* Please enter a valid zipcode */}
                            {zipcodeError}
                          </div>
                        }
                        <div
                          className={
                            zipcodeError === null ? '' : 'red_highlight'
                          }
                          style={{
                            // borderColor: 'black',
                            // borderWidth: 1,
                            height: 32,
                          }}
                        >
                          <img src={location} alt="" />
                          <div className="first-div">Location</div>
                          <div className="last-div ml-auto mr-3">
                            <input
                              type="text"
                              // onFocus={()=>setLoc('')}
                              value={loc}
                              onChange={(e) => {
                                setLoc(e.target.value);
                                setLocClicked(true);
                              }}
                              className="form-control profile-form p-0 manager-profile-created-number-input pr-1"
                              placeholder="zip code"
                            />
                          </div>
                        </div>

                        {contactError && (
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            {/* Please enter a valid phone number */}
                            {contactError}
                          </div>
                        )}
                        <div
                          className={
                            contactError === null ? '' : 'red_highlight'
                          }
                          style={{
                            height: 32,
                          }}
                        >
                          <img src={phone} alt="" />
                          <div className="first-div">Mobile</div>
                          <div
                            className="last-div ml-auto mr-3"
                            id="number_formatt"
                            style={{ position: 'relative' }}
                          >
                            <NumberFormat
                              format="### ### ####"
                              displayType="input"
                              // customInput={contact}
                              placeholder="555 555 5555"
                              className={`form-control p-0 ml-2 usa-number-format pr-1`}
                              name="leagueCost"
                              onChange={(e) => setContact(e.target.value)}
                              // onFocus={()=>{setContact('')}}
                              value={contact}
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
                              }}
                            />
                          </div>
                        </div>

                        {emailTakenError && (
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            This email id is already taken
                          </div>
                        )}
                        {emailValidError && (
                          <div
                            className="contact-title error_margin d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            Please enter valid email
                          </div>
                        )}
                        <div
                          className={
                            emailError === true ||
                            emailValidError === true ||
                            emailTakenError === true
                              ? 'red_highlight'
                              : ''
                          }
                          style={{
                            // borderColor: 'black',
                            // borderWidth: 1,
                            height: 32,
                          }}
                        >
                          <img src={mail} alt="" />
                          <div className="first-div">Email</div>
                          <div className="last-div email_div ml-auto mr-3">
                            <input
                              type="email"
                              // onFocus={()=>setEmail('')}
                              value={email}
                              // onChange={(e) => }
                              onChange={(e) => {
                                setEmail(e.target.value);
                                // setEmailClicked(true);
                              }}
                              className="form-control profile-form p-0 pr-1"
                              // style={{width:300}}
                              placeholder="name@email.com"
                              style={{
                                textAlign: 'right',
                                direction: 'ltr',
                              }}
                              id="manager_email"
                            />
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
        <div
          className="col-12 text-right m-auto"
          style={{ position: 'relative' }}
        >
          <button
            type="button"
            id="white-button-hover"
            className="btn-sm mr-2"
            style={{
              border: '1px solid #ffd420',
              borderRadius: 15,
              width: 112,
              fontSize: 10,
              height: 24,
              backgroundColor: '#f9fafc',
              outline: 0,
              color: '4a4a4a',
            }}
            onClick={onOpenModal}
          >
            CANCEL
          </button>
          {/* <div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Creating Manager...</div></div> */}
          {saveLoading && createManagerError === null ? (
            <div className="on_save_manager_message d-flex justify-content-center align-items-center">
              <LoadingSpinner />
              <div className="pl-2">Creating Manager...</div>
            </div>
          ) : (
            <div className="on_save_manager_error">
              {createManagerError && createManagerError}
            </div>
          )}
          <button
            className="btn-sm pb-1 "
            id="yellow-button-hover"
            style={{
              border: '1px solid yellow',
              borderRadius: 15,
              width: 112,
              height: 24,
              fontSize: 10,
              backgroundColor: '#ffd420',
              outline: 0,
              color: '#4a4a4a',
            }}
            onClick={onSave}
            ref={saveBtnRef}
          >
            SAVE
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
            marginTop: 8,
            fontSize: 10,
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
                color: '#4a4a4a',
              }}
            >
              NO, CONTINUE
            </button>
            <button
              className="btn-sm pb-1 ml-3"
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
                color: '#4a4a4a',
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

export default NewManagerProfileCreated;
