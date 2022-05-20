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
} from "../Types";
import DashboardContext from "./dashboardContext";
import dashboardReducer from "./dashboardReducer";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";

const DashboardState = (props) => {
  const initialState = {
    dashboardTypeOneData: null,
    dashboardTypeTwoData: null,
    dashboardTypeThreeData: null,
    dashboardTypeFourData: null,
    dashboardTypeFiveData: null,
    dashboardTypeSixData: null,
    dashboardTypeSevenData: null,
    dashBoardLoading: false,
    dashboardError: null,
  };

  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  //actions

  // 1st
  const getDashboardTypeOne = async (type) => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=${type}`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_1,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.response.data.errorMessage);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //2nd
  const getDashboardTypeTwo = async () => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=2`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_2,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //3nd
  const getDashboardTypeThree = async () => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=3`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_3,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //4nd
  const getDashboardTypeFour = async () => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=4`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_4,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //5nd
  const getDashboardTypeFive = async () => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=5`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_5,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //6nd
  const getDashboardTypeSix = async () => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=6`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_6,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //5nd
  const getDashboardTypeSeven = async () => {
    dashboardTypeLoading();
    await API.get(`/promoterDashboard?type=7`)
      .then((response) => {
        dispatch({
          type: DASHBOARD_TYPE_7,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: DASHBOARD_TYPE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  const dashboardTypeLoading = () => {
    dispatch({
      type: DASHBOARD_TYPE_LOADING,
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardTypeOneData: state.dashboardTypeOneData,
        dashboardTypeTwoData: state.dashboardTypeTwoData,
        dashboardTypeThreeData: state.dashboardTypeThreeData,
        dashboardTypeFourData: state.dashboardTypeFourData,
        dashboardTypeFiveData: state.dashboardTypeFiveData,
        dashboardTypeSixData: state.dashboardTypeSixData,
        dashboardTypeSevenData: state.dashboardTypeSevenData,
        dashBoardLoading: state.dashBoardLoading,
        dashboardError: state.dashboardError,
        getDashboardTypeOne,
        getDashboardTypeTwo,
        getDashboardTypeThree,
        getDashboardTypeFour,
        getDashboardTypeFive,
        getDashboardTypeSix,
        getDashboardTypeSeven,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
