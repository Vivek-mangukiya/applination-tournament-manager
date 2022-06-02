import {
  GET_UPLOADED_FILES,
  GET_UPLOADED_FILES_ERRORS,
  UPLOADEDFILES_LOADING_TYPE,
} from "../Types";

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_UPLOADED_FILES:
      return {
        ...state,
        errors: null,
        fileList: action.payload,
        isLoading: false,
      };
    case UPLOADEDFILES_LOADING_TYPE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_UPLOADED_FILES_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
