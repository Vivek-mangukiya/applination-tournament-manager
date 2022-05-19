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
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case CREATE_POINTS_TEMPLATE:
      return {
        ...state,
        // templatePointsDataById: action.payload,
        createPointsTemplateLoading: false,
        createPointsTempError: null,
      };
    case CREATE_POINTS_TEMPLATE_ERROR:
      return {
        ...state,
        createPointsTempError: action.payload,
        createPointsTemplateLoading: false,
      };
    case CREATE_POINTS_TEMPLATE_LOADING:
      return {
        ...state,
        createPointsTemplateLoading: true,
      };
    case GET_POINTS_TEMPLATE_BY_ID:
      return {
        ...state,
        templatePointsDataById: action.payload,
        createPointsTemplateLoading: false,
        getPointsTempByIdError: null,
      };
    case GET_POINTS_TEMPLATE_BY_ID_ERROR:
      return {
        ...state,
        getPointsTempByIdError: action.payload,
        createPointsTemplateLoading: false,
        templatePointsDataById: null,
      };
    case UPDATE_POINTS_TEMPLATE:
      return {
        ...state,
        createPointsTemplateLoading: false,
        updatePointsTempError: null,
      };
    case UPDATE_POINTS_TEMPLATE_ERROR:
      return {
        ...state,
        updatePointsTempError: action.payload,
        createPointsTemplateLoading: false,
      };
    case POINTS_TAKEN_TEMPLATE:
      return {
        ...state,
        templatePointsNameError: true,
      };
    case POINTS_NOT_TAKEN_TEMPLATE:
      return {
        ...state,
        templatePointsNameError: false,
      };
    default:
      return {
        ...state,
      };
  }
};
