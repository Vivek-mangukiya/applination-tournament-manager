import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  PROFILE_STATUS,
  SET_SIDEBAR_DISABLED,
  SET_DISABLED_MESSAGE,
  LOGIN_FAIL_MESSAGE,
  SET_SIDEBAR_MAX,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASS_MSG_NULL,
} from '../Types';

//eslint-disable-next-line
export default (state, actions) => {
  switch (actions.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('authenticated', true);
      // localStorage.setItem('token', actions.payload.data.token);
      console.log('actions.payload', actions.payload.data.profile_pic);

      return {
        ...state,
        // token: actions.payload.data.token,
        isAuthenticated: true,
        loading: false,
        loginTextContext: true,
        managerPic: actions.payload.data.profile_pic,
      };
    case LOGIN_FAIL:
      localStorage.removeItem('authenticated');
      // localStorage.removeItem('token');
      console.log('actions.payload', actions.payload);
      return {
        ...state,
        // token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: true,
        loginFailMessage: actions.payload,
        loginTextContext: true,
      };
    case LOGOUT:
      localStorage.removeItem('authenticated');
      localStorage.removeItem('profile_pic');
      localStorage.removeItem('id');
      localStorage.removeItem('name');
      // localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: actions.payload,
      };
    case PROFILE_STATUS:
      console.log('reducer', actions.payload);
      localStorage.setItem(
        'profile_pic',
        `${process.env.REACT_APP_PLAYER_COURT_URL}/${actions.payload.profile_pic}`
      );
      localStorage.setItem('id', actions.payload.manager_id);
      localStorage.setItem('name', actions.payload.first_name);
      localStorage.setItem('role_id', actions.payload.role_id);

      return {
        ...state,
        profileStatus: actions.payload.completeProfileStatus,
        newManager: actions.payload.manager_id,
        role_id: actions.payload.role_id,
      };
    case SET_SIDEBAR_DISABLED:
      // console.log("reducer",actions.payload.completeProfileStatus)
      return {
        ...state,
        sidebarDisabled: actions.payload,
      };
    case SET_DISABLED_MESSAGE:
      // console.log("reducer",actions.payload.completeProfileStatus)
      return {
        ...state,
        disabledMessage: actions.payload,
      };
    case LOGIN_FAIL_MESSAGE:
      return {
        ...state,
        loginFailMessage: null,
      };
    case SET_SIDEBAR_MAX:
      return {
        ...state,
        sidebarMax: !state.sidebarMax,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassMsg: actions.payload,
        forgotPassLoading: false,
      };
    case FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        forgotPassLoading: true,
      };
    case FORGOT_PASS_MSG_NULL:
      return {
        ...state,
        forgotPassMsg: null,
      };
    default:
      return state;
  }
};
