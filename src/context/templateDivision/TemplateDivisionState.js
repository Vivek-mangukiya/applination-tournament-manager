import {
  SAVED_DIVISION_DATA,
  SAVED_POOLS_DATA,
  GET_TEMPLATE_BY_ID,
  UPDATE_TEMPLATE_ID,
  CREATE_DIVISION_TEMPLATE,
  DUPLICATE_DIV_TEMPLATE_ERROR,
  EDIT_DIV_TEMPLATE_ERROR,
} from "../Types";
import TemplateDivisionContext from "./templateDivisionContext";
import templateDivisionReducer from "./templateDivisionReducer";
import { API } from "../../Utils/API";
import React, { useReducer } from "react";

const TemplateDivisionState = (props) => {
  const initialState = {
    divisionInfo: null,
    templatePoolsInfo: null,
    templateData: null,
    templateId: null,
    duplicateDivTemplateError: null,
    editDivTemplateError: null,
  };

  const [state, dispatch] = useReducer(templateDivisionReducer, initialState);

  //actions (functions)

  const saveDivisionData = (data) => {
    dispatch({
      type: SAVED_DIVISION_DATA,
      payload: data,
    });
  };

  const saveTemplatePoolsData = (data) => {
    dispatch({
      type: SAVED_POOLS_DATA,
      payload: data,
    });
  };

  const getTemplate = async (id, type) => {
    // await API.get(`getTemplate?templateId=${id}&type=${type}`).then((res) => {
    await API.get(`getTemplate?templateId=${id}&type=divisions`).then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_TEMPLATE_BY_ID,
        payload: res.data,
      });
    });
  };

  const updateTemplateId = (id) => {
    console.log("NEWID IN STATE:", id);
    dispatch({
      type: UPDATE_TEMPLATE_ID,
      payload: id,
    });
  };

  const editTemplate = async (id, formData) => {
    console.log("formData in editTemplate:", formData);
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(
      `/updateDivisionTemplate?tempId=${id}`,
      actualData
    ).catch((err) => {
      console.log("Div template edit error:", err, err.response);
      dispatch({
        type: EDIT_DIV_TEMPLATE_ERROR,
        payload: err,
      });
    });
    console.log("editTemplate() response:", res && res.data);
  };

  const createDivisionTemplate = async (formData, history) => {
    console.log("formData in createTemplate:", formData);
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(`/createTemplate`, actualData)
      .then((res) => {
        console.log("CreateDivisionTemplate() response:", res.data.templateId);
        dispatch({
          type: CREATE_DIVISION_TEMPLATE,
          payload: res.data.templateId,
        });
        history.push(`/templateSaved/${res.data.templateId}`);
      })
      .catch((err) => {
        console.log("Create division error:", err, err.response);
        dispatch({
          type: DUPLICATE_DIV_TEMPLATE_ERROR,
          payload: err,
        });
      });
    // console.log('createDivisionTemplate() response:', res.data);
  };

  const setTemplateStatus = async (formData) => {
    console.log("formdata in setTemplateStatus:", formData);
    await API.get(
      `/setTemplateStatus?templateId=${formData.data}&type=divisions`
    );
    // .then(
    // () => {
    //   propsData.push(`/TemplateTable`);
    // }
    // );
  };

  return (
    <TemplateDivisionContext.Provider
      value={{
        divisionInfo: state.divisionInfo,
        templatePoolsInfo: state.templatePoolsInfo,
        templateData: state.templateData,
        templateId: state.templateId,
        duplicateDivTemplateError: state.duplicateDivTemplateError,
        editDivTemplateError: state.editDivTemplateError,
        saveDivisionData,
        saveTemplatePoolsData,
        getTemplate,
        editTemplate,
        updateTemplateId,
        createDivisionTemplate,
        setTemplateStatus,
      }}
    >
      {props.children}
    </TemplateDivisionContext.Provider>
  );
};

export default TemplateDivisionState;
