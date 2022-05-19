import {
  // SET_LOADING,
  GET_REG_ALL,
  GET_REG_BY_ID,
  GET_TEAM_DATA_BY_ID,
  SET_TEAM_DATA_LOADING,
  GET_PLAYERS_DATA,
  SET_REMOVE_PLAYER_LOADING,
  REMOVE_PLAYER_FROM_TEAM,
  SET_ADD_PLAYER_LOADING,
  ADD_PLAYER_TO_TEAM,
  SET_REG_STATUS_TO_LOADING,
  SET_REG_TEAM_STATUS,
  REMOVE_EDIT_PLAYER_FROM_TEAM,
  GET_PLAYERS_DATA_LOADING,
  GET_REG_ALL_ERR,
  GET_REG_BY_ID_ERR,
  GET_PLAYERS_DATA_ERROR,
  EXCEL_ERROR,
  EXCEL_ERROR_CLEAR,
  GET_REGISTERED_DIVISIONS,
  GET_REGISTERED_DIVISIONS_TO_NULL,
  GET_REGISTERED_DIVISIONS_LOADING,
  CHANGE_DIVISION_FOR_TEAM_RESPONSE,
  CHANGE_DIVISION_FOR_TEAM_RESPONSE_NULL,
  CHANGE_DIVISION_FOR_TEAM_RESPONSE_LOADING,
  GENERATE_INVOICE_MESSAGE,
  GENERATE_INVOICE_MESSAGE_NULL,
  REG_TEAM_PLAYER_STATUS_LOADING,
  REMIND_PAYMENT_FOR_TEAM_LOADING,
  REG_LOADING_TYPE,
  REG_TEAM__STATUS_LOADING,
  GET_TEAM_PAID_AMOUNT
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_REG_ALL:
      return {
        ...state,
        regListData: action.payload,
        regLoading: false,
        regAllErr: null,
      };
    case GET_REG_ALL_ERR:
      return {
        ...state,
        regLoading: false,
        regAllErr: action.payload,
      };
    case REG_LOADING_TYPE:
      return {
        ...state,
        regLoading:action.payload,
      }
    case GET_REG_BY_ID:
      return {
        ...state,
        regDataById: action.payload,
        teamDataLoading: false,
        regByIdErr: null,
        teamPlayerStatusLoading: false,
        remindPaymentForTeamLoading: false,
        teamAttendanceStatusLoading:false,
        teamPaymentDataAmount:null,
      };
    case GET_REG_BY_ID_ERR:
      return {
        ...state,
        teamDataLoading: false,
        regByIdErr: action.payload,
      };
    case GET_TEAM_DATA_BY_ID:
      return {
        ...state,
        teamDataById: action.payload,
        teamDataLoading: false,
      };
    case SET_TEAM_DATA_LOADING:
      return {
        ...state,
        teamDataLoading: true,
      };
    case GET_PLAYERS_DATA:
      return {
        ...state,
        playersData: action.payload,
        playersDataLoading: false,
        playersDataError: null,
      };
    case GET_PLAYERS_DATA_ERROR:
      return {
        ...state,
        playersDataError: action.payload,
        playersDataLoading: false,
      };

    case GET_PLAYERS_DATA_LOADING:
      return {
        ...state,
        playersDataLoading: true,
      };
    case GET_TEAM_PAID_AMOUNT :
      console.log(action.payload)
      return {
        ...state,
        teamPaymentDataAmount:action.payload,

      }

    case REMOVE_PLAYER_FROM_TEAM:
      return {
        ...state,
        removePlayerLoading: false,
      };
    case SET_REMOVE_PLAYER_LOADING:
      return {
        ...state,
        removePlayerLoading: true,
      };
    case ADD_PLAYER_TO_TEAM:
      return {
        ...state,
        addPlayerLoading: false,
      };
    case REMOVE_EDIT_PLAYER_FROM_TEAM:
      return {
        ...state,
        editAddPlayerLoading: false,
      };
    case SET_ADD_PLAYER_LOADING:
      return {
        ...state,
        addPlayerLoading: true,
        editAddPlayerLoading: true,
      };
    case SET_REG_TEAM_STATUS:
      return {
        ...state,
        regStatusLoading: false,
      };
    case SET_REG_STATUS_TO_LOADING:
      return {
        ...state,
        regStatusLoading: true,
      };
    case REG_TEAM__STATUS_LOADING:
      return {
        ...state,
        teamAttendanceStatusLoading:true,
      }
    case EXCEL_ERROR:
      return {
        ...state,
        excel_error: action.payload,
      };
    case EXCEL_ERROR_CLEAR:
      return {
        ...state,
        excel_error: null,
      };
    case GET_REGISTERED_DIVISIONS:
      return {
        ...state,
        registeredDivisionsData: action.payload,
        registeredDivisionsDataLoading: false,
      };
    case GET_REGISTERED_DIVISIONS_TO_NULL:
      return {
        ...state,
        registeredDivisionsData: action.payload,
        registeredDivisionsDataLoading: false,
      };
    case GET_REGISTERED_DIVISIONS_LOADING:
      return {
        ...state,
        registeredDivisionsDataLoading: true,
      };
    case CHANGE_DIVISION_FOR_TEAM_RESPONSE:
      return {
        ...state,
        changeDivisionResponse: action.payload,
        changeDivisionResponseLoading: false,
      };
    case CHANGE_DIVISION_FOR_TEAM_RESPONSE_NULL:
      return {
        ...state,
        changeDivisionResponse: null,
        changeDivisionResponseLoading: false,
      };
    case CHANGE_DIVISION_FOR_TEAM_RESPONSE_LOADING:
      return {
        ...state,
        changeDivisionResponseLoading: true,
      };
    case GENERATE_INVOICE_MESSAGE:
      return {
        ...state,
        invoiceMessage: action.payload,
      };
    case GENERATE_INVOICE_MESSAGE_NULL:
      return {
        ...state,
        invoiceMessage: null,
      };
    case REG_TEAM_PLAYER_STATUS_LOADING:
      return {
        ...state,
        teamPlayerStatusLoading: action.payload,
      };
    case REMIND_PAYMENT_FOR_TEAM_LOADING:
      return {
        ...state,
        remindPaymentForTeamLoading: action.payload,
      };
    default:
      return state;
  }
};
