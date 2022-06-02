import {
  GET_UPLOADED_FILES,
  GET_UPLOADED_FILES_ERRORS,
  UPLOADEDFILES_LOADING_TYPE,
} from "../Types";

import UplodedFilesContext from "./uplodedFilesContext";
import uplodedFilesReducer from "./uplodedFilesReducer";
import React, { useReducer } from "react";
import { API, API2 } from "../../Utils/API";

const FilesState = (props) => {
  const initialState = {
    errors: null,
    fileList: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(uplodedFilesReducer, initialState);

  const getFileList = async () => {
    setFilesLoading();
    await API.get(`${process.env.REACT_APP_BASE_URL2}/getPrmotersFiles`)
      .then((response) => {
        dispatch({
          type: GET_UPLOADED_FILES,
          payload: response.data.FileList,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_UPLOADED_FILES_ERRORS,
          payload: error,
        });
      });
  };

  const setFilesLoading = () => {
    dispatch({
      type: UPLOADEDFILES_LOADING_TYPE,
      payload: true,
    });
  };
  return (
    <UplodedFilesContext.Provider
      value={{
        fileList: state.fileList,
        isLoading: state.isLoading,
        errors: state.errors,
        getFileList,
      }}
    >
      {props.children}
    </UplodedFilesContext.Provider>
  );
};

export default FilesState;
