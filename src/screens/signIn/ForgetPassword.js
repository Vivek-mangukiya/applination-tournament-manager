import React, { useContext, useEffect, useState } from 'react';
import './SignIn.css';
import logo from '../../assets/images/logo_login.svg';
import mailIcon from '../../assets/images/mail.svg';
import AuthContext from '../../context/auth/authContext';

const ForgetPassword = (props) => {
  const authContext = useContext(AuthContext);
  const { forgotPass, forgotPassMsg, forgotPassLoading } = authContext;

  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    if (email !== '') {
      console.log(email);
      forgotPass(email, props);
    }
  };
  return (
    <>
      <div
        id="sign-in"
        className="container-fluid"
        style={{ position: 'relative', zIndex: 1000 }}
      >
        <div className="sign-in-form">
          <img src={logo} alt="" />
          <div className="heading" style={{ fontFamily: 'FuturaPTBold' }}>
            HELLO!
          </div>

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
            {forgotPassMsg !== null && (
              <div
                className="mt-2 mb-0"
                style={{
                  fontFamily: 'FuturaPTBold',
                  fontSize: '0.84em',
                  textAlign: 'center',
                  color: '#ff2072',
                  marginBottom: '1em',
                }}
              >
                {forgotPassMsg}
              </div>
            )}

            <div
              className="LoginButton"
              onClick={onSubmit}
              // onClick={() => console.log(email)}
              style={{ cursor: 'pointer' }}
            >
              <div className="LoginButtonText">
                {/* SEND PASSWORD */}
                {/* {loginTextContext ? 'LOADING...':'LOGIN'} */}
                {/* {loginText ? 'LOADING...' : 'LOGIN'} */}
                {forgotPassLoading ? 'LOADING...' : 'SEND PASSWORD'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
