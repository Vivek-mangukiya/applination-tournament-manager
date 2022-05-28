import {
  CREATE_POOLS_TEMPLATE,
  CREATE_POOLS_TEMPLATE_ERROR,
  CREATE_POOLS_TEMPLATE_LOADING,
  CREATE_POOLS_TEMPLATE_LOADING_FALSE,
  GET_POOLS_TEMPLATE_BY_ID,
  GET_POOLS_TEMPLATE_BY_ID_ERROR,
  POOLS_NOT_TAKEN_TEMPLATE,
  POOLS_TAKEN_TEMPLATE,
  UPDATE_POOL_TEMPLATE,
  UPDATE_POOL_TEMPLATE_ERROR,
  UPDATE_POOL_TEMPLATE_LOADING,
} from "../Types";
import TemplatePoolsContext from "./templatePoolsContext";
import templatePoolsReducer from "./templatePoolsReducer";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";

const TemplatePoolsState = (props) => {
  const initialState = {
    createPoolsTemplateLoading: false,
    templatePoolsDataById: null,
    createdPoolId: null,
    updatePoolsTemplateLoading: false,
    templatePoolsNameError: false,
    getPoolsByIdError: null,
    updatePoolByIdError: null,
    createPoolTemplateError: null,
  };

  const [state, dispatch] = useReducer(templatePoolsReducer, initialState);

  //actions

  //create pool
  const createPoolsTemplate = async (data, propsData) => {
    createTemplateLoading();
    const actualData = new FormData();
    actualData.append("data", data);
    for (var key of actualData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    await API.post("/createTemplate", actualData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: CREATE_POOLS_TEMPLATE,
          payload: res.data.pool_template,
        });
        propsData.push(`/templatePoolsSaved/${res.data.pool_template.id}`);
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
        dispatch({
          type: CREATE_POOLS_TEMPLATE_ERROR,
          payload: error.response.data.message,
        });
      });
  };

  const createTemplateLoading = () => {
    dispatch({
      type: CREATE_POOLS_TEMPLATE_LOADING,
    });
  };

  const createTemplateLoadingFalse = () => {
    dispatch({
      type: CREATE_POOLS_TEMPLATE_LOADING_FALSE,
    });
  };

  //get pool
  const getTemplatePoolById = async (id) => {
    await API.get(`/getTemplate?templateId=${id}&type=pools`)
      .then((res) => {
        console.log(res.data);
        let values = res.data.templateDetails;
        if (values.schedules === null) values.schedules = [];

        dispatch({
          type: GET_POOLS_TEMPLATE_BY_ID,
          payload: values,
        });
      })
      .catch((error) => {
        console.log("error", error.response.data.errorMessage);
        dispatch({
          type: GET_POOLS_TEMPLATE_BY_ID_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //update points
  const updatePoolsTemplate = async (data, propsData) => {
    updateTemplateLoading();
    const actualData = new FormData();
    actualData.append("data", JSON.stringify(data));
    // for (var key of actualData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    await API.post("/updatePoolTemplate", actualData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: UPDATE_POOL_TEMPLATE,
        });
        propsData.push(`/templatePoolsSaved/${data.id}`);
      })
      .catch((error) => {
        console.log("error", error.response);
        dispatch({
          type: UPDATE_POOL_TEMPLATE_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  // table of automatic field
  const getPoolScheduleData = async (team_size) => {
    let data = [];
    await API.get(`/getPoolSchedule?team_size=${team_size}`)
      .then((res) => {
        console.log(res.data.data);
        data = res.data.data;
      })
      .catch((error) => {
        console.log("error", error.response.data.errorMessage);
        data = null;
      });
    return data;
  };

  const updateTemplateLoading = () => {
    dispatch({
      type: UPDATE_POOL_TEMPLATE_LOADING,
    });
  };

  //check pools name
  const checkPoolsName = async (data, teams, pools, courts, propsData) => {
    const actualData = new FormData();
    actualData.append("data", JSON.stringify(data));
    for (var key of actualData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    await API.post("/checkPoolPointTemplate", actualData).then((res) => {
      console.log(res.data);
      if (res.data.message === "Sorry,the name is already taken") {
        dispatch({
          type: POOLS_TAKEN_TEMPLATE,
        });
      } else if (res.data.message === "Template name can be used") {
        dispatch({
          type: POOLS_NOT_TAKEN_TEMPLATE,
        });
        if (courts < pools)
          propsData.push(
            `/templatePools/${teams}/${pools}/${courts}/${data.name}/0`
          );
        else {
          propsData.push(
            `/templatePools/${teams}/${pools}/${courts}/${data.name}`
          );
        }
      }
    });
  };

  return (
    <TemplatePoolsContext.Provider
      value={{
        createPoolsTemplateLoading: state.createPoolsTemplateLoading,
        templatePoolsDataById: state.templatePoolsDataById,
        createdPoolId: state.createdPoolId,
        updatePoolsTemplateLoading: state.updatePoolsTemplateLoading,
        templatePoolsNameError: state.templatePoolsNameError,
        getPoolsByIdError: state.getPoolsByIdError,
        updatePoolByIdError: state.updatePoolByIdError,
        createPoolTemplateError: state.createPoolTemplateError,
        createPoolsTemplate,
        getTemplatePoolById,
        createTemplateLoading,
        createTemplateLoadingFalse,
        updatePoolsTemplate,
        checkPoolsName,
        getPoolScheduleData,
      }}
    >
      {props.children}
    </TemplatePoolsContext.Provider>
  );
};

export default TemplatePoolsState;
