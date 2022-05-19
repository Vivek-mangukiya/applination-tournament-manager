import { SAVED_DIVISION_DATA,
   SAVED_POOLS_DATA,
   GET_TEMPLATE_BY_ID,
   UPDATE_TEMPLATE_ID,
   CREATE_DIVISION_TEMPLATE,
   DUPLICATE_DIV_TEMPLATE_ERROR,
   EDIT_DIV_TEMPLATE_ERROR,
    } from '../Types';

//eslint-disable-next-line
export default (state, actions) => {
  switch (actions.type) {
    case SAVED_DIVISION_DATA:
      return {
        ...state,
        divisionInfo: actions.payload,
      };
    case SAVED_POOLS_DATA:
      return {
        ...state,
        templatePoolsInfo: actions.payload,
      };
    case GET_TEMPLATE_BY_ID:
      console.log("getTemplate reducer:",actions.payload.templateDetails[0])
      return {
        ...state,
        templateData: actions.payload.templateDetails[0],
      }
    case UPDATE_TEMPLATE_ID:
      return{
        ...state,
        templateId:actions.payload,
      }
    case CREATE_DIVISION_TEMPLATE:
      return{
        ...state,
        templateId: actions.payload,
      }
    case DUPLICATE_DIV_TEMPLATE_ERROR:
      return{
        ...state,
        duplicateDivTemplateError:actions.payload,
      }
    case EDIT_DIV_TEMPLATE_ERROR:
      return{
        ...state,
        editDivTemplateError:actions.payload,
      }
    default:
      return state;
  }
};
