import {
  CREATE_POINTS_TEMPLATE,
  CREATE_POINTS_TEMPLATE_ERROR,
  CREATE_POINTS_TEMPLATE_LOADING,
  GET_POINTS_TEMPLATE_BY_ID,
  GET_POINTS_TEMPLATE_BY_ID_ERROR,
  POINTS_NOT_TAKEN_TEMPLATE,
  POINTS_TAKEN_TEMPLATE,
  POOLS_NOT_TAKEN_TEMPLATE,
  POOLS_TAKEN_TEMPLATE,
  UPDATE_POINTS_TEMPLATE,
  UPDATE_POINTS_TEMPLATE_ERROR,
} from "../Types";
import TemplatePointsContext from "./templatePointsContext";
import templatePointsReducer from "./templatePointsReducer";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";

const TemplatePointsState = (props) => {
  const initialState = {
    createPointsTemplateLoading: false,
    templatePointsDataById: null,
    createdPointsId: null,
    templatePointsNameError: false,
    createPointsTempError: null,
    getPointsTempByIdError: null,
    updatePointsTempError: null,
  };

  const [state, dispatch] = useReducer(templatePointsReducer, initialState);
  //actions

  //create points
  const createPointsTemplate = async (data, propsData) => {
    createTemplatePointsLoading();
    const actualData = new FormData();
    actualData.append("data", data);
    for (var key of actualData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    await API.post("/createTemplate", actualData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: CREATE_POINTS_TEMPLATE,
          payload: res.data.templateDetails,
        });
        propsData.push(`/templatePointsSaved/${res.data.templateDetails.id}`);
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: CREATE_POINTS_TEMPLATE_ERROR,
          payload: error.response.data.message,
        });
      });
  };

  const createTemplatePointsLoading = () => {
    dispatch({
      type: CREATE_POINTS_TEMPLATE_LOADING,
    });
  };

  //get points
  const getTemplatePointsById = async (id) => {
    await API.get(`/getTemplate?templateId=${id}&type=points`)
      .then((res) => {
        dispatch({
          type: GET_POINTS_TEMPLATE_BY_ID,
          payload: res.data.templateDetails,
        });
      })
      .catch((error) => {
        console.log("error", error.response);
        dispatch({
          type: GET_POINTS_TEMPLATE_BY_ID_ERROR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  //update points
  const updatePointsTemplate = async (data, propsData) => {
    createTemplatePointsLoading();
    const actualData = new FormData();
    actualData.append("data", JSON.stringify(data));
    for (var key of actualData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    await API.post("/updatePointTemplate", actualData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: UPDATE_POINTS_TEMPLATE,
        });
        propsData.push(`/templatePointsSaved/${data.id}`);
      })
      .catch((error) => {
        console.log("Error", error.response);
        dispatch({
          type: UPDATE_POINTS_TEMPLATE_ERROR,
          payload: error.response.data.message,
        });
      });
  };

  const deleteData = async (id, type, propsData) => {
    //console.log(id, type);
    await API.get(`/setTemplateStatus?templateId=${id}&type=${type}`).then(
      () => {
        propsData.push(`/TemplateTable`);
      }
    );
  };

  //check points name
  const checkPointsName = async (data, spots, propsData) => {
    const actualData = new FormData();
    actualData.append("data", JSON.stringify(data));
    for (var key of actualData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    await API.post("/checkPoolPointTemplate", actualData).then((res) => {
      console.log(res.data);
      if (res.data.message === "Sorry,the name is already taken") {
        dispatch({
          type: POINTS_TAKEN_TEMPLATE,
        });
      } else if (res.data.message === "Template name can be used") {
        dispatch({
          type: POINTS_NOT_TAKEN_TEMPLATE,
        });
        propsData.push(`/templatePoints/${spots}/${data.name}`);
      }
    });
  };

  return (
    <TemplatePointsContext.Provider
      value={{
        templatePointsDataById: state.templatePointsDataById,
        createPointsTemplateLoading: state.createPointsTemplateLoading,
        templatePointsNameError: state.templatePointsNameError,
        createPointsTempError: state.createPointsTempError,
        getPointsTempByIdError: state.getPointsTempByIdError,
        updatePointsTempError: state.updatePointsTempError,
        createPointsTemplate,
        getTemplatePointsById,
        createTemplatePointsLoading,
        updatePointsTemplate,
        deleteData,
        checkPointsName,
      }}
    >
      {props.children}
    </TemplatePointsContext.Provider>
  );
};

export default TemplatePointsState;
