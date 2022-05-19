import {
  DASHBOARD_TYPE_1,
  DASHBOARD_TYPE_2,
  DASHBOARD_TYPE_3,
  DASHBOARD_TYPE_4,
  DASHBOARD_TYPE_5,
  DASHBOARD_TYPE_6,
  DASHBOARD_TYPE_7,
  DASHBOARD_TYPE_ERROR,
  DASHBOARD_TYPE_LOADING,
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case DASHBOARD_TYPE_1:
      return {
        ...state,
        dashboardTypeOneData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_2:
      return {
        ...state,
        dashboardTypeTwoData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_3:
      return {
        ...state,
        dashboardTypeThreeData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_4:
      return {
        ...state,
        dashboardTypeFourData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_5:
      return {
        ...state,
        dashboardTypeFiveData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_6:
      return {
        ...state,
        dashboardTypeSixData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_7:
      return {
        ...state,
        dashboardTypeSevenData: action.payload,
        dashBoardLoading: false,
        dashboardError: null,
      };
    case DASHBOARD_TYPE_LOADING:
      return {
        ...state,
        dashBoardLoading: true,
      };
    case DASHBOARD_TYPE_ERROR:
      return {
        ...state,
        dashBoardLoading: false,
        dashboardError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
