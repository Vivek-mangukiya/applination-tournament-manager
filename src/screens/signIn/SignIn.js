import React, { useContext, useEffect, useState } from "react";
import "./SignIn.css";
import logo from "../../assets/images/logo_login.svg";
import mailIcon from "../../assets/images/mail.svg";
import lockIcon from "../../assets/images/lock.svg";
import loginIcon from "../../assets/images/cta.svg";
import AuthContext from "../../context/auth/authContext";
import ManagerProfileContext from "../../context/newManagerProfile/newManagerProfileContext";
import md5 from "js-md5";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const authContext = useContext(AuthContext);
  const {
    token,
    error,
    login,
    isAuthenticated,
    profileStatus,
    newManager,
    loginFailMessage,
    setLoginFailMessage,
    loginTextContext,
    forgotPassMsg,
    role_id,
  } = authContext;
  const activeHistoryContext = useContext(ManagerProfileContext);
  const { managerListData, getManagerById, getManagerByIdList } =
    activeHistoryContext;
  var managerMatched = "";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginText, setLoginText] = useState(false);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    var emailTest = new RegExp(/\S+@\S+\.\S+/);
    if (emailTest.test(email)) {
      setEmailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length !== 0) {
      setPasswordError(false);
    }
  }, [password]);

  const onSubmit = () => {
    var emailTest = new RegExp(/\S+@\S+\.\S+/);
    const MD5_encrypted_password = md5(password);
    if (emailTest.test(email) === false) {
      setEmailError(true);
    } else if (password === "") {
      setPasswordError(true);
    } else if (emailError === false && passwordError === false) {
      setLoginText(true);
      setLoginFailMessage();
      login({
        email,
        password: MD5_encrypted_password,
      });
      // managerMatched=managerListData.map((manager)=>{
      //   if(email===manager.email){
      //     return manager.id;
      //   }
      // })
    }

    // if(email===managerListData.map((manager)=>{
    //   return(manager.email_id);
    // }))
    // {
    //   console.log("Matched manager id: ",)
    // }
  };

  useEffect(async () => {
    // if (token !== null) {
    //   console.log(token);
    // }
    // if (localStorage.getItem('token')) {
    //   props.history.push('/dashboard');
    // }
    console.log("profileStatus:", profileStatus);
    if (isAuthenticated && profileStatus === 1) {
      localStorage.setItem("dashboard", JSON.stringify(true));
      localStorage.setItem("managers", JSON.stringify(false));
      localStorage.setItem("members", JSON.stringify(false));
      localStorage.setItem("players", JSON.stringify(false));
      localStorage.setItem("events", JSON.stringify(false));
      localStorage.setItem("registration", JSON.stringify(false));
      localStorage.setItem("scores", JSON.stringify(false));
      localStorage.setItem("templates", JSON.stringify(false));
      localStorage.setItem("payments", JSON.stringify(false));
      localStorage.setItem("settings", JSON.stringify(false));
      props.history.push("/dashboard");
    }
    if (isAuthenticated && profileStatus === 2) {
      // console.log("Matched manager id: ",managerMatched)
      await getManagerByIdList(newManager);
      console.log("manageID WANTED:", newManager);
      await getManagerById(newManager);
      localStorage.setItem("dashboard", JSON.stringify(false));
      localStorage.setItem("managers", JSON.stringify(false));
      localStorage.setItem("members", JSON.stringify(false));
      localStorage.setItem("players", JSON.stringify(false));
      localStorage.setItem("events", JSON.stringify(false));
      localStorage.setItem("registration", JSON.stringify(false));
      localStorage.setItem("scores", JSON.stringify(false));
      localStorage.setItem("templates", JSON.stringify(false));
      localStorage.setItem("payments", JSON.stringify(false));
      localStorage.setItem("settings", JSON.stringify(false));
      props.history.push("/completeProfile");
    }
  }, [props.history, profileStatus, isAuthenticated]);

  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       onSubmit();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  // useEffect(() => {
  //   md5('Message to hash');
  //   var hash = md5.create();
  //   hash.update('Message to hash');
  //   hash.hex();
  // }, [])

  const something = (event) => {
    if (event.keyCode === 13) {
      console.log("enter");
      onSubmit();
    }
  };

  useEffect(() => {
    setLoginFailMessage();
  }, []);

  useEffect(() => {
    if (loginFailMessage !== null) {
      setLoginText(false);
    }
  }, [loginFailMessage]);

  return (
    <>
      <div
        id="sign-in"
        className="container-fluid"
        style={{ position: "relative", zIndex: 1000 }}
      >
        <div className="sign-in-form">
          <img src={logo} alt="" />
          {loginFailMessage !== null || emailError || passwordError ? (
            <div
              className="heading"
              style={{ fontFamily: "FuturaPTBold", color: "black" }}
            >
              OOPS!
            </div>
          ) : (
            <div className="heading" style={{ fontFamily: "FuturaPTBold" }}>
              HELLO!
            </div>
          )}
          {loginFailMessage !== null && !emailError && !passwordError && (
            <div
              className="text-center error-message"
              style={{ fontFamily: "FuturaPTBold", color: "#ff2072" }}
            >
              {loginFailMessage}
            </div>
          )}
          {emailError && (
            <div
              className="text-center error-message"
              style={{ fontFamily: "FuturaPTBold", color: "#ff2072" }}
            >
              Please enter a valid email.
            </div>
          )}
          {passwordError && !emailError && (
            <div
              className="text-center error-message"
              style={{ fontFamily: "FuturaPTBold", color: "#ff2072" }}
            >
              Please enter a password.
            </div>
          )}
          {forgotPassMsg !== null && (
            <div
              className="text-center error-message"
              style={{ fontFamily: "FuturaPTBold", color: "#ff2072" }}
            >
              {forgotPassMsg}
            </div>
          )}
          <div className="signin-inputs">
            <div className="signin-input email-input">
              <img src={mailIcon} alt="" />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                autoFocus
                onChange={onChange}
                required
              />
            </div>
            <div className="signin-input password-input">
              <img src={lockIcon} alt="" />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                required
                onKeyDown={(e) => something(e)}
              />
            </div>
            {/* <img
              style={{ cursor: 'pointer' }}
              className="signin-button"
              src={loginIcon}
              alt=""
              onClick={onSubmit}
            /> */}
            <div
              className="LoginButton"
              onClick={onSubmit}
              style={{ cursor: "pointer" }}
            >
              <div className="LoginButtonText">
                {/* {loginTextContext ? 'LOADING...':'LOGIN'} */}
                {loginText ? "LOADING..." : "LOGIN"}
              </div>
            </div>
          </div>
          <div
            id="forget-password"
            style={{ cursor: "pointer", fontFamily: "FuturaPTBold" }}
            onClick={() => props.history.push("/forgotPassword")}
          >
            Forgot Password?
          </div>
        </div>
        <div
          className="terms-signin"
          style={{
            cursor: "pointer",
            fontFamily: "FuturaPTMedium",
            marginTop: 0,
          }}
        >
          <Link to={"/terms-and-condition"}>Terms and conditions</Link>
          {""} / <Link to={"/privacy-policy"}> Privacy policy </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
