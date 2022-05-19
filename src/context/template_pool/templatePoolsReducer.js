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
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case CREATE_POOLS_TEMPLATE:
      return {
        ...state,
        createPoolsTemplateLoading: false,
        createdPoolId: action.payload,
        createPoolTemplateError: null,
      };
    case CREATE_POOLS_TEMPLATE_ERROR:
      return {
        ...state,
        createPoolTemplateError: action.payload,
        createPoolsTemplateLoading: false,
      };
    case CREATE_POOLS_TEMPLATE_LOADING:
      return {
        ...state,
        createPoolsTemplateLoading: true,
        templatePoolsDataById: null,
      };
    case CREATE_POOLS_TEMPLATE_LOADING_FALSE:
      return {
        ...state,
        createPoolsTemplateLoading: false,
      };
    case GET_POOLS_TEMPLATE_BY_ID:
      return {
        ...state,
        templatePoolsDataById: action.payload,
        createPoolsTemplateLoading: false,
        getPoolsByIdError: null,
      };
    case GET_POOLS_TEMPLATE_BY_ID_ERROR:
      return {
        ...state,
        getPoolsByIdError: action.payload,
        templatePoolsDataById: null,
        createPoolsTemplateLoading: false,
      };
    case UPDATE_POOL_TEMPLATE_LOADING:
      return {
        ...state,
        updatePoolsTemplateLoading: true,
      };
    case UPDATE_POOL_TEMPLATE:
      return {
        ...state,
        updatePoolsTemplateLoading: false,
        updatePoolByIdError: null,
      };
    case UPDATE_POOL_TEMPLATE_ERROR:
      return {
        ...state,
        updatePoolsTemplateLoading: false,
        updatePoolByIdError: action.payload,
      };
    case POOLS_TAKEN_TEMPLATE:
      return {
        ...state,
        templatePoolsNameError: true,
      };
    case POOLS_NOT_TAKEN_TEMPLATE:
      return {
        ...state,
        templatePoolsNameError: false,
      };
    default:
      return {
        ...state,
      };
  }
};
