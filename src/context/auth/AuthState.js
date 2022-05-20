import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  PROFILE_STATUS,
  SET_SIDEBAR_DISABLED,
  SET_DISABLED_MESSAGE,
  LOGIN_FAIL_MESSAGE,
  SET_SIDEBAR_MAX,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASS_MSG_NULL,
} from "../Types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import React, { useReducer } from "react";
import { API, API2 } from "../../Utils/API";
// import jwt from 'jsonwebtoken';

const AuthState = (props) => {
  const initialState = {
    token: null,
    isAuthenticated: null,
    loading: false,
    user: null,
    error: false,
    profileStatus: null,
    newManager: "",
    sidebarDisabled: false,
    disabledMessage: null,
    loginFailMessage: null,
    loginTextContext: false,
    sidebarMax: true,
    managerPic: null,
    forgotPassMsg: null,
    forgotPassLoading: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //actions (state)
  //Login User
  const login = async (formData) => {
    let accessToken = "";
    console.log(formData);
    const actualData = new FormData();
    actualData.append("data", JSON.stringify(formData));
    API.post(`/loginPromoter`, actualData)
      .then((response) => {
        if (response) {
          console.log(response);
          accessToken = response.data.data.token;
          localStorage.setItem("token", accessToken);
          // console.log(jwt.decode(accessToken));
          console.log("source_status", response.data.completeProfileStatus);
          dispatch({
            type: PROFILE_STATUS,
            payload: response.data,
          });
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        // if(response.data.success==='fail') {
        console.log("error:", error.response);
        console.log(error.response.status);
        console.log(
          error.response.data.errorMessage[
            Object.keys(error.response.data.errorMessage)[0]
          ]
        );
        if (error.response.status === 410) {
          dispatch({
            type: LOGIN_FAIL,
            payload:
              error.response &&
              error.response.data.errorMessage[
                Object.keys(error.response.data.errorMessage)[0]
              ],
          });
        } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.errorMessage,
          });
        }

        // }
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
    });
  };

  const setSideBarDisabled = (data) => {
    //console.log('sidebarDisabled, data', initialState.sidebarDisabled, data);
    dispatch({
      type: SET_SIDEBAR_DISABLED,
      payload: data,
    });
  };
  const setDisabledMessage = (data) => {
    //console.log('sidebarDisabled, data', initialState.sidebarDisabled);
    dispatch({
      type: SET_DISABLED_MESSAGE,
      payload: data,
    });
  };

  const setLoginFailMessage = () => {
    dispatch({
      type: LOGIN_FAIL_MESSAGE,
    });
  };

  const setSideBarMax = () => {
    //console.log('Inside setSidebarMax');
    dispatch({
      type: SET_SIDEBAR_MAX,
    });
  };

  const forgotPass = async (formData, props) => {
    forgotPassLoad();
    console.log(formData);
    const actualData = new FormData();
    actualData.append("email_id", formData);
    API.post(`/forgotPassword`, actualData)
      .then((response) => {
        if (response) {
          console.log(response.data.message);

          dispatch({
            type: FORGOT_PASSWORD,
            payload: response.data.message,
          });
          setTimeout(() => {
            dispatch({
              type: FORGOT_PASS_MSG_NULL,
            });
          }, [5000]);
          props.history.push("/");
        }
      })
      .catch((error) => {
        console.log(error.response);

        if (error.response.status === 410) {
          Object.values(error.response.data.errorMessage).map(
            (err, errIndex) => {
              setTimeout(() => {
                dispatch({
                  type: FORGOT_PASS_MSG_NULL,
                });
              }, [5000]);
              console.log(err[0]);
              return dispatch({
                type: FORGOT_PASSWORD,
                payload: err[0],
              });
            }
          );
        } else {
          dispatch({
            type: FORGOT_PASSWORD,
            payload: error.response.data.errorMessage,
          });
          setTimeout(() => {
            dispatch({
              type: FORGOT_PASS_MSG_NULL,
            });
          }, [5000]);
        }
      });
  };

  const forgotPassLoad = () => {
    dispatch({
      type: FORGOT_PASSWORD_LOADING,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        profileStatus: state.profileStatus,
        newManager: state.newManager,
        sidebarDisabled: state.sidebarDisabled,
        disabledMessage: state.disabledMessage,
        loginFailMessage: state.loginFailMessage,
        loginTextContext: state.loginTextContext,
        sidebarMax: state.sidebarMax,
        managerPic: state.managerPic,
        forgotPassMsg: state.forgotPassMsg,
        forgotPassLoading: state.forgotPassLoading,
        login,
        logout,
        setSideBarDisabled,
        setDisabledMessage,
        setLoginFailMessage,
        setSideBarMax,
        forgotPass,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
