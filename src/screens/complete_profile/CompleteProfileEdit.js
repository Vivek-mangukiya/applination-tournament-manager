import React, { useState, useEffect, useContext } from "react";
import "../../assets/styles/CompleteProfile.css";
import clearIcon from "../../assets/images/icons-x-input.svg";
import location from "../../assets/images/icon-orange-map.svg";
import phone from "../../assets/images/icon-orange-phone.svg";
import mail from "../../assets/images/icon-orange-mail.svg";
// import Footer from '../components/footer/Footer';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Header from "../../components/header/Header";
import backIcon from "../../assets/images/icon-menu-back.svg";
import cardIcon from "../../assets/images/icon-menu-cards-disable.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import NewManagerProfileContext from "../../context/newManagerProfile/newManagerProfileContext";
import NumberFormat from "react-number-format";
// import photoAddIcon from '../assets/images/group.svg';
// import { sha256 } from 'js-sha256';
import iconLock from "../../assets/images/lock.svg";
import md5 from "js-md5";
// import DefaultImage from '../assets/images/DefaultImage.jpg';
import defaultIcon2 from "../../assets/images/defaultIcon2.png";
import AuthContext from "../../context/auth/authContext";

const algorithm = "aes-256-cbc";
const key = "LM@098765_AVPAppLM@098765_AVPApp";
const iv = "e95a3d73fe601926";
const crypto = require("crypto");

const CompleteProfile = (props) => {
  // context
  const newManagerProfileContext = useContext(NewManagerProfileContext);
  const {
    saveData,
    managerInfo,
    //create manager post request
    createManager,
    // manager id
    managerId,
    createNewManager,
    getManagerById,
    getManagerData,
    getAllManagers,
    managerListData,
    newManagerError,
  } = newManagerProfileContext;

  const authContext = useContext(AuthContext);
  const { setSideBarDisabled, disabledMessage } = authContext;

  useEffect(() => {
    if (managerId !== null) {
      console.log(managerId);
    }
  }, [managerInfo, managerId]);

  useEffect(() => {
    if (getManagerData !== null) {
      console.log("edit screen", getManagerData);
    }
  }, [getManagerData]);

  const [firstName, setFirstName] = useState(
    getManagerData !== null ? getManagerData[0].first_name : ""
  );
  const [lastName, setLastName] = useState(
    getManagerData !== null ? getManagerData[0].last_name : ""
  );
  const [loc, setLoc] = useState(
    // getManagerData !== null ? getManagerData[0].zip : ''
    getManagerData !== null
      ? getManagerData[0].city + "," + getManagerData[0].state_code
      : ""
  );
  const [contact, setContact] = useState(
    getManagerData !== null ? decrypt(getManagerData[0].contact_no) : ""
  );
  const [email, setEmail] = useState(
    getManagerData !== null ? getManagerData[0].email_id : ""
  );
  const [newPassword, setnewPassword] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState("");
  // image upload
  const [file, setFile] = useState({ preview: "", raw: "" });

  //first duplicate state
  const [firstDuplicateState, setFirstDuplicateState] = useState("");

  //last duplicate state
  const [lastDuplicateState, setLastDuplicateState] = useState("");

  //loc duplicate state
  const [locDuplicateState, setLocDuplicateState] = useState("");

  //phone duplicate state
  const [phoneDuplicateState, setPhoneDuplicateState] = useState("");

  //email duplicate state
  const [emailDuplicateState, setEmailDuplicateState] = useState("");

  const [newPasswordDuplicate, setNewPasswordDuplicate] = useState("");

  const [confirmedPasswordDuplicate, setConfirmedPasswordDuplicate] =
    useState("");

  // error states
  const [contactError, setContactError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(false);
  const [firstLetterError, setFirstLetterError] = useState(false);
  const [locClicked, setLocClicked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailTakenError, setEmailTakenError] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);

  //   useEffect(() => {
  //     if (managerId !== null) {
  //       console.log('Manager Id in saved screen:', managerId);
  //       getManagerById(managerId);
  //     }
  //   }, [managerId]);

  useEffect(() => {
    // if (managerId !== null) {
    // console.log('Manager Id in saved screen:', managerId);
    console.log("Manager id by url:", parseInt(localStorage.getItem("id")));
    getManagerById(parseInt(localStorage.getItem("id")));
    // }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (getManagerData !== null) console.log("getManagerdata", getManagerData);
  }, [getManagerData]);

  //imageUpload function
  const handleChange = (event) => {
    setFile({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  useEffect(() => {
    if (firstName.length !== 0) {
      setFirstNameError(false);
    }
  }, [firstName]);

  useEffect(() => {
    if (lastName.length !== 0) {
      setLastNameError(false);
    }
  }, [lastName]);

  useEffect(() => {
    var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    if (can.test(loc.toString()) || us.test(loc.toString())) {
      setZipcodeError(false);
    }
  }, [loc]);

  useEffect(() => {
    var contactWithoutSpaces = contact.replace(/\s/g, "");
    if (contactWithoutSpaces.length === 10) {
      setContactError(false);
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
    console.log("Found email:", found);
    if (found === null || found === undefined) {
      setEmailTakenError(false);
    }
  }, [email]);

  useEffect(() => {
    if (newPassword === confirmedPassword) {
      setPasswordError(false);
    }
  }, [newPassword, confirmedPassword]);

  useEffect(() => {
    // var ltr = newPassword.match(/[a-zA-Z]/).pop();
    var ltr = newPassword.match(/[a-zA-Z]/);
    if (ltr) {
      var firstLetter = ltr.pop();
      if (!firstLetter.match(/[A-Z]/)) {
        setFirstLetterError(false);
      }
    }
  }, [newPassword, confirmedPassword]);

  useEffect(() => {
    var passwordReg = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{2})(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (passwordReg.test(newPassword.toString())) {
      setPasswordStrong(false);
    }
  }, [newPassword, confirmedPassword]);

  const onSave = async () => {
    var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    var contactWithoutSpaces = contact.replace(/\s/g, "");
    var emailTest = new RegExp(/\S+@\S+\.\S+/);
    var found = managerListData.find((manager) => manager.email_id === email);
    // var ltr = newPassword.match(/[a-zA-Z]/).pop();
    var ltr = newPassword.match(/[a-zA-Z]/);
    var passwordReg = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9].*?[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    console.log("Found manager email:", found);

    if (firstName === "") {
      setFirstNameError(true);
    } else if (lastName === "") {
      setLastNameError(true);
    } else if (!us.test(loc) && !can.test(loc) && locClicked === true) {
      setZipcodeError(true);
    } else if (
      contactWithoutSpaces === "" ||
      contactWithoutSpaces.length !== 10
    ) {
      setContactError(true);
    } else if (emailTest.test(email) === false && emailChecked === true) {
      setEmailValidError(true);
    } else if (found && emailChecked === true) {
      setEmailTakenError(true);
    } else if (
      newPassword.length &&
      confirmedPassword.length &&
      newPassword !== confirmedPassword
    ) {
      setPasswordError(true);
    }
    // else if(newPassword.match(/[a-zA-Z]/)){
    //   var ltr = newPassword.match(/[a-zA-Z]/).pop();
    //   console.log("ltr: ", ltr);
    //   if(ltr){
    //     if (ltr.match(/[A-Z]/)) {
    //       setFirstLetterError(true);
    //     }
    //   }
    // }
    else if (
      newPassword.match(/[a-zA-Z]/) &&
      newPassword
        .match(/[a-zA-Z]/)
        .pop()
        .match(/[A-Z]/)
    ) {
      console.log("ltr: ", newPassword.match(/[a-zA-Z]/).pop());
      setFirstLetterError(true);
    } else if (
      newPassword.match(/[a-zA-Z]/) &&
      passwordReg.test(newPassword.toString()) === false
    ) {
      setPasswordStrong(true);
    } else {
      console.log("In else!");
      var MD5_encryptedPassword = md5(newPassword);
      console.log({
        firstName,
        lastName,
        loc,
        contact,
        email,
        MD5_encryptedPassword,
        file: file.raw,
      });

      const data1 = {};
      if (firstDuplicateState !== "") {
        data1.first_name = firstDuplicateState;
      }
      if (lastDuplicateState !== "") {
        data1.last_name = lastDuplicateState;
      }
      if (locDuplicateState !== "") {
        data1.zip = locDuplicateState;
      }
      if (phoneDuplicateState !== "") {
        var phoneDuplicateStateWithoutSpaces = phoneDuplicateState.replace(
          /\s/g,
          ""
        );
        data1.contact = encrypt(phoneDuplicateStateWithoutSpaces);
      }
      if (emailDuplicateState !== "") {
        data1.email_id = emailDuplicateState;
      }
      if (newPassword !== "") {
        data1.password = MD5_encryptedPassword;
      }
      const data = JSON.stringify(data1);
      console.log("Optional data sent to backend", data);
      console.log(
        "Manager Id sent to backend",
        parseInt(localStorage.getItem("id"))
      );
      await createNewManager(
        {
          data: data,
          profile_pic: file.raw,
          managerId: parseInt(localStorage.getItem("id")),
        },
        props
      );

      await setSideBarDisabled(false);
    }
  };

  function encrypt(text) {
    let _cipher = crypto.createCipheriv(algorithm, key, iv);
    let _encrypted = _cipher.update(text, "utf8", "base64");
    _encrypted += _cipher.final("base64");
    return _encrypted.toString("base64");
  }

  function decrypt(text) {
    var _encrypted;
    if (text) _encrypted = Buffer.from(text, "base64");
    const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(key),
      Buffer.from(iv)
    );

    decipher.setAutoPadding(true);
    let decrypt = decipher.update(_encrypted, "base64");
    decrypt += decipher.final();
    return decrypt;
  }

  // console.log("Profile pic", getManagerData[0].profile_pic);

  useEffect(() => {
    setSideBarDisabled(true);
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      // props.history.goBack()
      console.log("load");
      return false;
    };

    return () => {
      console.log("unload");
      window.onbeforeunload = null;
    };
  }, []);

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
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={cardIcon} className="profile-image" />
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => props.history.push("/managers")}
          >
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={listIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      <div
        className="new-manager-profile container p-0"
        style={{ height: "100vh" }}
      >
        <div className="row" style={{ marginTop: 85 }}>
          <div className="col-6 m-auto text-center p-0">
            {newManagerError !== null && (
              <h4 className="text-left" style={{ color: "#ff2072" }}>
                {newManagerError}
              </h4>
            )}
            <div className="row main-width">
              {
                <div
                  className="contact-title d-flex justify-content-end mr-auto ml-5 mb-3"
                  style={{
                    color: "#ff2072",
                    fontSize: 12,
                    boxShadow: "none",
                    backgroundColor: "#f9fafc",
                  }}
                >
                  {disabledMessage}
                </div>
              }
              <div className="col-12 text-left">
                <div id="active-profile">
                  {/* image and input area */}
                  <div id="images-and-input-area" style={{ marginTop: 0 }}>
                    <div
                      style={{
                        // border: '2px solid black',
                        height: 100,
                        width: 100,
                        borderRadius: "50%",
                        backgroundColor: "#d8d8d8",
                        overflow: "visible",
                        display: "inline-block",
                        marginLeft: 0,
                      }}
                      // className="d-inline"
                    >
                      {file.preview !== "" ? (
                        <img
                          src={file.preview}
                          alt=""
                          className="m-auto d-block"
                          style={{
                            objectFit: "cover",
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          onError={(e) => (e.target.src = defaultIcon2)}
                          src={
                            // getManagerData[0].profile_pic === "images/promoters/"
                            //   // ? `http://fanwins.in/${photoAddIcon}`
                            //   ? {DefaultImage}
                            //   : `http://fanwins.in/${getManagerData[0].profile_pic}`
                            //   // :{DefaultImage}
                            getManagerData !== null &&
                            getManagerData[0].profile_pic !== ""
                              ? `${process.env.REACT_APP_PLAYER_COURT_URL}/${getManagerData[0].profile_pic}`
                              : // : `${photoAddIcon}`
                                `${defaultIcon2}`
                          }
                          alt=""
                          className="m-auto d-block"
                          style={{
                            objectFit: "cover",
                            height: 100,
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
                          // onChange={(e) => setFirstName(e.target.value)}
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
                          style={{ cursor: "pointer" }}
                          onClick={() => setFirstName("")}
                        />
                      </div>
                      {firstNameError && (
                        <div
                          className="contact-title"
                          style={{
                            color: "#ff2072",
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
                          // onFocus={(e) => e.target.value = ""}
                          onFocus={() => {
                            setLastName("");
                            setLastDuplicateState("");
                          }}
                          value={lastName}
                          // onChange={(e) => setLastName(e.target.value)}
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
                          style={{ cursor: "pointer" }}
                          onClick={() => setLastName("")}
                        />
                      </div>
                      {lastNameError && (
                        <div
                          className="contact-title"
                          style={{
                            color: "#ff2072",
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
                    {/* {contactError && (
                      <div
                        className="contact-title"
                        style={{ color: '#ff2072', fontSize: 12 }}
                      >
                        Please enter all details
                      </div>
                    )} */}
                    {zipcodeError && (
                      <div
                        className="contact-title"
                        style={{
                          color: "#ff2072",
                          fontSize: 12,
                          marginLeft: 290,
                        }}
                      >
                        Please enter a valid zipcode
                      </div>
                    )}
                    <div className="box">
                      <div
                        style={{
                          borderColor: "black",
                          borderWidth: 1,
                          height: 32,
                        }}
                      >
                        <img src={location} alt="" />
                        <div className="first-div">Location</div>
                        <div className="last-div ml-auto mr-3">
                          <input
                            type="text"
                            // onFocus={(e) => e.target.value = ""}
                            onFocus={() => {
                              setLoc("");
                              setLocDuplicateState("");
                            }}
                            value={loc}
                            // onChange={(e) => {
                            //   setLoc(e.target.value);
                            //   setLocClicked(true);
                            // }}
                            onChange={(e) => {
                              var isValidZip =
                                /^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/;
                              var isValidZip2 = /(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/;
                              console.log(
                                isValidZip.test(e.target.value),
                                isValidZip2.test(e.target.value)
                              );
                              setLoc(e.target.value);
                              setLocDuplicateState(e.target.value);
                              setLocClicked(true);
                            }}
                            className="form-control profile-form p-0 manager-profile-created-number-input ml-2"
                            style={{
                              direction: "ltr",
                              borderBottom: "1px solid black",
                              borderRadius: 0,
                              textAlign: "right",
                            }}
                            // placeholder="Enter Zip"
                          />
                        </div>
                      </div>
                      {contactError && (
                        <div
                          className="contact-title d-flex justify-content-end"
                          style={{
                            color: "#ff2072",
                            fontSize: 12,
                            marginLeft: 260,
                            boxShadow: "none",
                            backgroundColor: "#f9fafc",
                          }}
                        >
                          Please enter a valid phone number
                        </div>
                      )}
                      <div
                        style={{
                          borderColor: "black",
                          borderWidth: 1,
                          height: 32,
                        }}
                      >
                        <img src={phone} alt="" />
                        <div className="first-div">Phone</div>
                        <div className="last-div ml-auto mr-3">
                          {/* <input
                            type="tel"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="form-control profile-form p-0"
                            placeholder="555 555 5555"
                          /> */}
                          <NumberFormat
                            format="### ### ####"
                            displayType="input"
                            // customInput={contact}
                            placeholder="_____-_____-_____"
                            className={`form-control p-0 ml-2 usa-number-format`}
                            name="leagueCost"
                            // onChange={(e) => setContact(e.target.value)}
                            onChange={(e) => {
                              setContact(e.target.value);
                              setPhoneDuplicateState(e.target.value);
                            }}
                            onFocus={(e) => setContact("")}
                            value={contact}
                            style={{
                              height: "inherit",
                              // direction: 'rtl',
                              textAlign: "right",
                              fontSize: 14,
                              outline: "none",
                              border: 0,
                              boxShadow: "0px 0px 0px 0px",
                              fontFamily: "FuturaMedium",
                              fontWeight: 500,
                            }}
                          />
                        </div>
                      </div>

                      {emailTakenError && (
                        <div
                          className="contact-title d-flex justify-content-end"
                          style={{
                            color: "#ff2072",
                            fontSize: 12,
                            marginLeft: 260,
                            boxShadow: "none",
                            backgroundColor: "#f9fafc",
                          }}
                        >
                          This email id is already taken
                        </div>
                      )}
                      {emailValidError && (
                        <div
                          className="contact-title d-flex justify-content-end"
                          style={{
                            color: "#ff2072",
                            fontSize: 12,
                            marginLeft: 260,
                            boxShadow: "none",
                            backgroundColor: "#f9fafc",
                          }}
                        >
                          Please enter valid email
                        </div>
                      )}
                      <div
                        style={{
                          borderColor: "black",
                          borderWidth: 1,
                          height: 32,
                        }}
                      >
                        <img src={mail} alt="" />
                        <div className="first-div">Email</div>
                        <div className="last-div ml-auto email_div mr-3">
                          <input
                            type="email"
                            // onFocus={(e) => e.target.value = ""}
                            // onFocus={()=>{setEmail("");setEmailDuplicateState("")}}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setEmailDuplicateState(e.target.value);
                              setEmailChecked(true);
                            }}
                            className="form-control profile-form p-0"
                            placeholder="yourinfo@gmail.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security */}

                  <div id="contact">
                    <div className="contact-title" style={{ marginTop: 0 }}>
                      Security
                    </div>
                    {passwordError && (
                      <div
                        className="contact-title"
                        style={{ color: "#ff2072", fontSize: 12, width: 400 }}
                      >
                        Please enter matching passwords
                      </div>
                    )}
                    {passwordStrong && (
                      <div
                        className="contact-title"
                        style={{ color: "#ff2072", fontSize: 12, width: 420 }}
                      >
                        Please enter minimum 1 capital letters, 1 special
                        character, 2 digits.
                      </div>
                    )}
                    {firstLetterError && (
                      <div
                        className="contact-title"
                        style={{ color: "#ff2072", fontSize: 12, width: 420 }}
                      >
                        First letter cannot be capital.
                      </div>
                    )}
                    <div className="box">
                      <div
                        style={{
                          borderColor: "black",
                          borderWidth: 1,
                          height: 32,
                        }}
                      >
                        <img src={iconLock} alt="" />
                        <div className="first-div">New Password</div>
                        <div className="last-div ml-auto mr-3">
                          <input
                            type="password"
                            value={newPassword}
                            // onFocus={(e) => e.target.value = ""}
                            // onChange={(e) => setnewPassword(e.target.value)}
                            onChange={(e) => {
                              setnewPassword(e.target.value);
                              setNewPasswordDuplicate(e.target.value);
                            }}
                            className="form-control profile-form p-0 manager-profile-created-number-input"
                            placeholder="_________________"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          borderColor: "black",
                          borderWidth: 1,
                          height: 32,
                        }}
                      >
                        <img src={iconLock} alt="" />
                        <div className="first-div">Confirm Password</div>
                        <div className="last-div ml-auto mr-3">
                          <input
                            type="password"
                            value={confirmedPassword}
                            // onChange={(e) => setconfirmedPassword(e.target.value)}
                            onChange={(e) => {
                              setconfirmedPassword(e.target.value);
                              setConfirmedPasswordDuplicate(e.target.value);
                            }}
                            // onFocus={(e) => e.target.value = ""}
                            className="form-control profile-form p-0"
                            placeholder="_________________"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-end p-0">
                    <div className="">
                      <button
                        className="btn-sm pb-1 "
                        id="yellow-button-hover"
                        style={{
                          border: "1px solid yellow",
                          borderRadius: 15,
                          width: 112,
                          height: 24,
                          fontSize: 10,
                          backgroundColor: "#ffd420",
                          outline: 0,
                          color: "#4a4a4a",
                          marginTop: 30,
                        }}
                        onClick={onSave}
                      >
                        DONE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
