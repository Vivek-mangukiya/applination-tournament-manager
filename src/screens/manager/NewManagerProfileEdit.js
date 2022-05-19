import React, { useState, useEffect, useContext, useRef } from 'react';
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
import DefaultImage from '../../assets/images/DefaultImage.jpg';
import NewManagerProfileContext from '../../context/newManagerProfile/newManagerProfileContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import NumberFormat from 'react-number-format';
import photoAddIcon from '../../assets/images/group.svg';
import defaultIcon2 from '../../assets/images/defaultIcon2.png';
import SimpleReactValidator from 'simple-react-validator';
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

const NewManagerProfileEdit = (props) => {
  // context
  const newManagerProfileContext = useContext(NewManagerProfileContext);
  const {
    saveData,
    managerInfo,
    //get manager data
    getManagerData,
    //manager Id
    managerId,
    //edit manager function
    editManager,
    managerListData,
    getManagerById,
    getAllManagers,
    editManagerError,
  } = newManagerProfileContext;

  useEffect(() => {
    console.log(managerInfo);
  }, [managerInfo]);

  useEffect(() => {
    if (getManagerData !== null) {
      console.log('edit screen', getManagerData);
    }
  }, [getManagerData]);

  useEffect(() => {
    console.log('Manager id by url:', parseInt(props.match.params.id));
    getManagerById(parseInt(props.match.params.id));
  }, []);

  useEffect(() => {
    if (getManagerData !== null) console.log('getManagerdata', getManagerData);
  }, [getManagerData]);

  const [saveLoading, setSaveLoading] = useState(false);

  const [firstName, setFirstName] = useState(
    getManagerData !== null ? getManagerData[0].first_name : ''
  );
  const [lastName, setLastName] = useState(
    getManagerData !== null ? getManagerData[0].last_name : ''
  );
  const [loc, setLoc] = useState(
    getManagerData !== null
      ? getManagerData[0].city + ',' + getManagerData[0].state_code
      : ''
    // getManagerData !== null ? getManagerData[0].zip : ''
  );
  const [contact, setContact] = useState(
    getManagerData !== null ? getManagerData[0].contact_no : ''
  );
  const [email, setEmail] = useState(
    getManagerData !== null ? getManagerData[0].email_id : ''
  );
  const [emailCounter, setEmailCounter] = useState(
    getManagerData !== null ? getManagerData[0].email_id : ''
  );
  // image upload
  const [file, setFile] = useState(
    getManagerData !== null
      ? {
          preview: `${process.env.REACT_APP_PLAYER_COURT_URL}/${getManagerData[0].profile_pic}`,
          raw: '',
        }
      : { preview: '', raw: '' }
  );
  const [profile_PicPreview, setProfile_PicPreview] = useState(false);
  //first duplicate state
  const [firstDuplicateState, setFirstDuplicateState] = useState('');

  //last duplicate state
  const [lastDuplicateState, setLastDuplicateState] = useState('');

  //loc duplicate state
  const [locDuplicateState, setLocDuplicateState] = useState('');

  //phone duplicate state
  const [phoneDuplicateState, setPhoneDuplicateState] = useState('');

  //email duplicate state
  const [emailDuplicateState, setEmailDuplicateState] = useState('');

  useEffect(() => {
    console.log(firstDuplicateState);
  }, [firstDuplicateState]);

  //imageUpload function
  // const handleChange = (event) => {
  //   setFile({
  //     preview: URL.createObjectURL(event.target.files[0]),
  //     // preview:file.preview,
  //     raw: event.target.files[0],
  //   });
  // };
  //imageUpload function
  const handleChange = (event) => {
    console.log('EVENET OBJ', URL.createObjectURL(event.target.files[0]));
    setFile({
      preview: URL.createObjectURL(event.target.files[0]),
      // preview:file.preview,
      raw: event.target.files[0],
    });
    setProfile_PicPreview(true);
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  const [contactError, setContactError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailTakenError, setEmailTakenError] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [emailChecked, setEmailChecked] = useState(false);
  const [locClicked, setLocClicked] = useState(false);
  const [phoneClicked, setPhoneClicked] = useState(false);

  const [checkLoc, setCheckLoc] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    console.log('Manager Id in Edit Screen', managerId);
  }, [managerId]);

  useEffect(() => {
    if (firstName.length !== 0) {
      setFirstNameError(false);
    }
  }, [firstName]);

  useEffect(() => {
    if (file.raw !== '' && file.raw.size < 210000) {
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
    var contactWithoutSpaces = decrypt(contact).replace(/\s/g, '');
    if (contactWithoutSpaces.length === 10) {
      setContactError(false);
    }
  }, [contact]);

  useEffect(() => {
    var emailTest = new RegExp(/\S+@\S+\.\S+/);
    if (emailTest.test(email)) {
      setEmailValidError(false);
    }
    console.log('EMAIL COUNTERRRRRRRRRRRRR', emailCounter, email);
  }, [email]);

  useEffect(() => {
    getAllManagers();
    var found = managerListData.find((manager) => manager.email_id === email);
    console.log('Found email:', found);
    if (found === null || found === undefined || email === emailCounter) {
      setEmailTakenError(false);
    }
  }, [email]);

  const onSave = async () => {
    var found = managerListData.find((manager) => manager.email_id === email);
    console.log('FOund manager email:', found);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    var can2 = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var contactWithoutSpaces = decrypt(contact).replace(/\s/g, '');
    var emailTest = new RegExp(/\S+@\S+\.\S+/);

    if (firstName === '') {
      setFirstNameError(true);
    } else if (file.raw !== '' && file.raw.size > 210000) {
      setImageError(true);
      // event_name_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (lastName === '') {
      setLastNameError(true);
    } else if (!us.test(loc) && !can2.test(loc) && locClicked === true) {
      setZipcodeError(true);
    } else if (
      contactWithoutSpaces.length !== 10 ||
      contactWithoutSpaces.length === 0
    ) {
      console.log('contact without spaces:', contactWithoutSpaces);
      setContactError(true);
    } else if (emailTest.test(email) === false && emailChecked === true) {
      console.log('EMAIL COUNTERRRRRRRRRRRRR', emailCounter);
      setEmailValidError(true);
    } else if (found && emailChecked === true && email !== emailCounter) {
      setEmailTakenError(true);
    } else {
      if (parseInt(props.match.params.id) !== null) {
        setSaveLoading(true);

        const data = {};
        if (firstDuplicateState !== '') {
          // data['first_name'] = firstDuplicateState;
          data.first_name = firstDuplicateState;
        }
        if (lastDuplicateState !== '') {
          data.last_name = lastDuplicateState;
        }
        if (locDuplicateState !== '') {
          data.zip = locDuplicateState;
        }
        if (phoneDuplicateState !== '') {
          var phoneDuplicateStateWithoutSpaces = phoneDuplicateState.replace(
            /\s/g,
            ''
          );
          data.contact_no = encrypt(phoneDuplicateStateWithoutSpaces);
        }
        if (emailDuplicateState !== '') {
          data.email_id = emailDuplicateState;
        }
        console.log('Manager data to be edited', data);
        console.log('Manager Image to be edited', file.raw);
        await editManager(
          parseInt(props.match.params.id),
          {
            data: JSON.stringify(data),
            profile_pic: file.raw,
          },
          props
        );
        setSaveLoading(false);
        // await props.history.push(
        //   `/newManagerProfileSaved/${parseInt(props.match.params.id)}`
        // );
      }
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

  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

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
      {getManagerData === null ? (
        <div className="col-12 text-center loading_height">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="new-manager-profile container p-0">
          <div className="row" style={{ marginTop: 85 }}>
            <div className="col-6 m-auto text-center p-0">
              <div className="row main-width">
                <div className="col-12 text-left">
                  {imageError && (
                    <div
                      className="contact-title"
                      style={{
                        color: '#ff2072',
                        fontSize: 12,
                        border: 0,
                      }}
                    >
                      Add Image less than 2048KB
                    </div>
                  )}
                  <div id="active-profile" style={{ marginBottom: 180 }}>
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
                        {file.preview !== null ? (
                          <img
                            onError={(e) => (e.target.src = defaultIcon2)}
                            src={file.preview}
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
                            onError={(e) => (e.target.src = defaultIcon2)}
                            src={defaultIcon2}
                            alt=""
                            className="m-auto d-block pt-3 pb-2"
                            style={{
                              objectFit: 'contain',
                              height: 80,
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <div className="input-container">
                          <input
                            type="text"
                            // onFocus={() => setFirstName('')}
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                              setFirstDuplicateState(e.target.value);
                            }}
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
                            className="contact-title"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              marginLeft: 155,
                              border: 0,
                            }}
                          >
                            Please enter your first name
                          </div>
                        )}
                        <div>
                          <input
                            type="text"
                            // onFocus={() =>setLastName('')}
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                              setLastDuplicateState(e.target.value);
                            }}
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
                            className="contact-title"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              marginLeft: 155,
                              border: 0,
                            }}
                          >
                            Please enter your last name
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pdf-upload edit-manager-photo text-center col-12">
                      <label htmlFor="file-input">EDIT PHOTO</label>

                      <input
                        id="file-input"
                        accept="image/png, image/jpeg"
                        type="file"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Contact */}
                    <div id="contact">
                      <div className="contact-title">Contact</div>
                      {zipcodeError && (
                        <div
                          className="contact-title"
                          style={{
                            color: '#ff2072',
                            fontSize: 12,
                            marginLeft: 290,
                          }}
                        >
                          Please enter a valid zipcode
                        </div>
                      )}
                      <div className="box">
                        <div className={zipcodeError ? 'red_highlight' : ''}>
                          <img src={location} alt="" />
                          <div className="first-div">Location</div>
                          <div className="last-div ml-auto mr-3">
                            <input
                              type="text"
                              // onFocus={() => setLoc('')}
                              value={loc}
                              onChange={(e) => {
                                setLoc(e.target.value);
                                setLocDuplicateState(e.target.value);
                                setLocClicked(true);
                              }}
                              className="form-control profile-form p-0"
                              placeholder={loc}
                            />
                          </div>
                        </div>
                        {contactError && (
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              marginLeft: 260,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            Please enter a valid phone number
                          </div>
                        )}
                        <div
                          className={contactError ? 'red_highlight' : ''}
                          style={{
                            height: 32,
                          }}
                        >
                          <img src={phone} alt="" />
                          <div className="first-div">Phone</div>
                          <div className="last-div ml-auto mr-3">
                            <NumberFormat
                              format="### ### ####"
                              displayType="input"
                              // customInput={contact}
                              placeholder="555 555 5555"
                              className={`form-control p-0 ml-2 usa-number-format`}
                              name="leagueCost"
                              onChange={(e) => {
                                setContact(encrypt(e.target.value));
                                setPhoneDuplicateState(e.target.value);
                                setPhoneClicked(true);
                              }}
                              // onFocus={(e) => (e.target.value = '')}
                              value={decrypt(contact)}
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
                              marginLeft: 260,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            This email id is already taken
                          </div>
                        )}
                        {emailValidError && (
                          <div
                            className="contact-title d-flex justify-content-end"
                            style={{
                              color: '#ff2072',
                              fontSize: 12,
                              marginLeft: 260,
                              boxShadow: 'none',
                              backgroundColor: '#f9fafc',
                            }}
                          >
                            Please enter valid email
                          </div>
                        )}
                        <div
                          className={
                            emailValidError === true || emailTakenError === true
                              ? 'red_highlight'
                              : ''
                          }
                          style={{
                            height: 32,
                          }}
                        >
                          <img src={mail} alt="" />
                          <div className="first-div">Email</div>
                          <div className="last-div email_div ml-auto mr-3">
                            <input
                              type="text"
                              // onFocus={(e) => (e.target.value = '')}
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailDuplicateState(e.target.value);
                                setEmailChecked(true);
                              }}
                              className="form-control profile-form p-0"
                              placeholder="timbreezy@gmail.com"
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
            className="btn-sm mr-2"
            id="white-button-hover"
            style={{
              border: '1px solid yellow',
              borderRadius: 15,
              width: 112,
              fontSize: 10,
              height: 24,
              backgroundColor: '#f9fafc',
              outline: 0,
            }}
            onClick={onOpenModal}
          >
            CANCEL
          </button>
          {/* <div className="on_save_manager_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Creating Manager...</div></div> */}
          {saveLoading && editManagerError === null ? (
            <div className="on_save_manager_message d-flex justify-content-center align-items-center">
              <LoadingSpinner />
              <div className="pl-2">Editing Manager...</div>
            </div>
          ) : (
            <div className="on_save_manager_error">
              {editManagerError && editManagerError}
            </div>
          )}
          <button
            className="btn-sm pb-1"
            id="yellow-button-hover"
            style={{
              border: '1px solid yellow',
              borderRadius: 15,
              width: 112,
              fontSize: 10,
              height: 24,
              backgroundColor: '#ffd420',
              outline: 0,
            }}
            onClick={onSave}
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
          Are you sure you want to cancel?
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
              onClick={() => props.history.go(-2)}
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

export default NewManagerProfileEdit;
