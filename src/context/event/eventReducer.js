import { act } from 'react-dom/test-utils';
import {
  FILTER_ADDRESSES,
  FILTER_ADDRESSES_CLEAR,
  FILTER_CONTACTS,
  FILTER_CONTACTS_CLEAR,
  SET_LOADING,
  EVENT_PROFILE_DATA,
  SAVED_EVENT_DATA,

  // table
  FILTERED_EVENT_DATA,
  CLEAR_FILTERED_EVENT_DATA,
  SORT_EVENT_DATA_NAME,
  UNSORTED_EVENT_DATA,
  SORT_EVENT_DATA_STARTS_ON,
  SORT_EVENT_DATA_STATUS_LABLE,
  SORT_EVENT_DATA_ADDRESS,
  SAVED_EVENT_FORMAT_DATA,

  // dropdown
  CALL_EVENT_DROPDOWN_DATA,

  //create tournament
  CREATE_TOURNAMENT,

  //event addresses
  GET_EVENT_ADDRESSES,

  //set address id
  SET_ADDRESS_ID,

  //get tournament by id
  GET_TOURNAMENT_BY_ID,

  //get all tournaments data
  GET_TOURNAMENT_ALL,
  SORT_EVENT_DATA_NAME_REVERSE,
  SORT_EVENT_DATA_STARTS_ON_REVERSE,
  SORT_EVENT_DATA_STATUS_LABLE_REVERSE,
  SORT_EVENT_DATA_ADDRESS_REVERSE,
  SEND_DIVISION_DATA_TO_EVENT,
  GET_TOURNAMENT_DIVISIONS,
  UPDATE_EVENT_ID,
  ON_EDIT_DIVISION_SAVE,
  TEMPLATE_NAME_AVAILABLE,
  TEMPLATE_NAME_TAKEN,
  CLEAR_TOURNAMENT_DATA,
  CLEAR_TEMPLATE_NAME,
  CREATE_TOURNAMENT_ERROR,
  GENERATE_SCHEDULE_RESPONSE,
  GENERATE_SCHEDULE_ERROR,
  CLEAR_SCHEDULE_MESSAGE,
  GENERATE_SCHEDULE_DIV_RESPONSE,
  GENERATE_SCHEDULE_DIV_ERROR,
  CLEAR_DIV_SCHEDULE_MESSAGE,
  EDIT_EVENT_ERROR,
  EDIT_DIVISION_ERROR,
  GET_TOURNAMENT_ALL_ERROR,
  UPLOAD_EXCEL,
  EXCEL_LOADING,
  EVENT_LOADING_TYPE,
  SET_ADDRESS_ID_ERROR,
  ADD_TO_TEMPLATE_DATA,
  REMOVE_FROM_TEMPLATE_DATA,
  TEMPLATE_DATA_TO_NULL,
  ADD_TO_DIVISION_DATA,
  REMOVE_FROM_DIVISION_DATA,
  DIVISION_DATA_TO_NULL,
  CHANGE_EARLY_BIRD_DATE,
  TEMPLATE_NAME_TAKEN_FALSE,
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case FILTER_ADDRESSES:
      console.log('Filtered courts in reducer', action.payload.courtList);

      // return {
      //   ...state,
      //   filteredAddresses: state.eventAddresses.filter((address) => {
      //     const regExp = RegExp(`${action.payload}`, 'gi');
      //     const zip = address.zip.toString();
      //     return zip.match(regExp);

      //     // return address;
      //   }),
      //   eventLoading: false,
      // };
          var s =true;
          if(action.payload.courtList==='No courts found'){
              s = false;
          }

      return {
        ...state,
        filteredAddresses: s? action.payload.courtList:null,
        // eventAddresses: action.payload.courtList,
        eventLoading: false,
      };
    case FILTER_ADDRESSES_CLEAR:
      return {
        ...state,
        filteredAddresses: null,
        eventLoading: false,
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: state.eventDropdownData.managers.filter((contact) => {
          const regExp = RegExp(`${action.payload}`, 'gi');
          return contact.promoter_name.match(regExp);
        }),
        eventLoading: false,
      };
    case FILTER_CONTACTS_CLEAR:
      return {
        ...state,
        filteredContacts: null,
        eventLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        eventLoading: true,
      };
    case EVENT_PROFILE_DATA:
      return {
        ...state,
        eventLoading: false,
        eventProfileData: action.payload,
      };
    case SAVED_EVENT_DATA:
      return {
        ...state,
        eventInfo: action.payload,
      };

    // table
    case FILTERED_EVENT_DATA:
      return {
        ...state,
        filteredHistoryData: state.dummyHistoryData.filter((data) => {
          const regExp = new RegExp(`${action.payload}`, 'gi');
          return (
            data.name.match(regExp) ||
            data.address.match(regExp) ||
            data.start_date.match(regExp) ||
            data.status_lable.match(regExp)
            // data.points.match(regExp) ||
            // data.partner.match(regExp)
          );
        }),
      };
    case CLEAR_FILTERED_EVENT_DATA:
      return {
        ...state,
        filteredHistoryData: null,
      };
    case SORT_EVENT_DATA_NAME:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_NAME_REVERSE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_STARTS_ON:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.start_date < b.start_date) {
            return -1;
          }
          if (a.start_date > b.start_date) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_STARTS_ON_REVERSE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.start_date < b.start_date) {
            return 1;
          }
          if (a.start_date > b.start_date) {
            return -1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_STATUS_LABLE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.status_lable < b.status_lable) {
            return -1;
          }
          if (a.status_lable > b.status_lable) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_STATUS_LABLE_REVERSE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.status_lable < b.status_lable) {
            return 1;
          }
          if (a.status_lable > b.status_lable) {
            return -1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_ADDRESS:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.address < b.address) {
            return -1;
          }
          if (a.address > b.address) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_EVENT_DATA_ADDRESS_REVERSE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.address < b.address) {
            return 1;
          }
          if (a.address > b.address) {
            return -1;
          }
          return 0;
        }),
      };
    case UNSORTED_EVENT_DATA:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        }),
      };
    case SAVED_EVENT_FORMAT_DATA:
      return {
        ...state,
        eventFormatInfo: action.payload,
      };

    case CALL_EVENT_DROPDOWN_DATA:
      return {
        ...state,
        eventLoading: false,
        eventDropdownData: action.payload,
      };
    case CREATE_TOURNAMENT:
      return {
        ...state,
        eventId: action.payload.TournamentId,
      };
    case GET_EVENT_ADDRESSES:
      return {
        ...state,
        eventAddresses: action.payload.courtList,
        eventLoading: false,
      };

    case SET_ADDRESS_ID:
      return {
        ...state,
        addressId: action.payload.id,
        addressIdError: 'Court Added Successfully',
      };
    case SET_ADDRESS_ID_ERROR:
      return {
        ...state,
        addressId: action.payload.addressId,
        addressIdError: action.payload.errMsg,
      };
    case GET_TOURNAMENT_BY_ID:
      return {
        ...state,
        getTournamentData: action.payload,
      };
    case GET_TOURNAMENT_ALL:
      return {
        ...state,
        // dummyHistoryData: action.payload,
        getAllTournamentsData: action.payload,
        getAllTournamentsError: null,
        eventLoading: false,
      };
    case GET_TOURNAMENT_ALL_ERROR:
      return {
        ...state,
        getAllTournamentsError: action.payload.response.data.Message,
        eventLoading: false,
      };
    case EVENT_LOADING_TYPE:
      return {
        ...state,
        eventLoading: action.payload,
      };
    case SEND_DIVISION_DATA_TO_EVENT:
      console.log('Data in reducer', action.payload);
      console.log('Discount Amount', action.payload.discount_amount);
      return {
        ...state,
        template_id: action.payload.template_id,
        age_bracket: action.payload.age_bracket,
        div_name: action.payload.div_name,
        early_bird: action.payload.early_bird,
        early_bird_amount: action.payload.early_bird_amount,
        late_amount: action.payload.late_amount,
        registration_amount: action.payload.registration_amount,
        age_range: action.payload.age_range,
        gender: action.payload.gender,
        skill_level: action.payload.skill_level,
        format: action.payload.format,
        team_size: action.payload.team_size,
        save_as_template: action.payload.save_as_template,
        selectedTemplateName: action.payload.selectedTemplateName,
        discount_amount: action.payload.discount_amount,
        discount_text: action.payload.discount_text,
        discount_applied: action.payload.discount_applied,
        discount_voucher: action.payload.discount_voucher,
      };
    case GET_TOURNAMENT_DIVISIONS:
      console.log('divisionData:', action.payload);
      return {
        ...state,
        divisionData: action.payload,
      };
    case UPDATE_EVENT_ID:
      console.log('eventId in reducer of UPDATE_EVENT_ID:', action.payload);
      return {
        ...state,
        eventId: action.payload,
      };
    case ON_EDIT_DIVISION_SAVE:
      console.log('Adding into changed division data:', action.payload);
      return {
        ...state,
        // changedDivisionData:{changedDivisionData,action.payload},
        changedDivisionData: action.payload,
      };
    case TEMPLATE_NAME_TAKEN:
      return {
        ...state,
        templateNameCounter: true,
      };
    case TEMPLATE_NAME_TAKEN_FALSE:
      return {
        ...state,
        templateNameCounter: false,
        saveAsTemplateMsg: null,
      };
    case TEMPLATE_NAME_AVAILABLE:
      return {
        ...state,
        templateNameCounter: false,
        saveAsTemplateMsg: 'Division Template Created',
      };
    case CLEAR_TOURNAMENT_DATA:
      return {
        ...state,
        getTournamentData: null,
      };
    case CLEAR_TEMPLATE_NAME:
      return {
        ...state,
        selectedTemplateName: null,
        template_id: '',
      };
    case CREATE_TOURNAMENT_ERROR:
      return {
        ...state,
        createTournamentError: action.payload,
      };
    case GENERATE_SCHEDULE_RESPONSE:
      return {
        ...state,
        generateScheduleResponse: action.payload,
      };
    case GENERATE_SCHEDULE_ERROR:
      return {
        ...state,
        generateScheduleError: action.payload,
      };
    case CLEAR_SCHEDULE_MESSAGE:
      return {
        ...state,
        generateScheduleResponse: null,
        generateScheduleError: null,
      };
    case GENERATE_SCHEDULE_DIV_RESPONSE:
      return {
        ...state,
        generateScheduleDivResponse: action.payload,
      };
    case GENERATE_SCHEDULE_DIV_ERROR:
      return {
        ...state,
        generateScheduleDivError: action.payload,
      };
    case CLEAR_DIV_SCHEDULE_MESSAGE:
      return {
        ...state,
        generateScheduleDivResponse: null,
        generateScheduleDivError: null,
      };
    case EDIT_EVENT_ERROR:
      return {
        ...state,
        editEventError: action.payload,
      };
    case EDIT_DIVISION_ERROR:
      return {
        ...state,
        editDivisionError: action.payload,
      };
    case UPLOAD_EXCEL:
      return {
        ...state,
        uploadExcelStatement: action.payload,
        excelLoading: false,
      };
    case EXCEL_LOADING:
      return {
        ...state,
        excelLoading: true,
      };
    case ADD_TO_TEMPLATE_DATA:
      return {
        ...state,
        templateDataArray: [...state.templateDataArray, action.payload],
      };
    case REMOVE_FROM_TEMPLATE_DATA:
      return {
        ...state,
        templateDataArray: state.templateDataArray.filter(
          (tempData) => tempData.template_id !== action.payload
        ),
      };
    case TEMPLATE_DATA_TO_NULL:
      return {
        ...state,
        templateDataArray: [],
      };

    case ADD_TO_DIVISION_DATA:
      return {
        ...state,
        divisionDataArray: [...state.divisionDataArray, action.payload],
      };
    case REMOVE_FROM_DIVISION_DATA:
      return {
        ...state,
        divisionDataArray: state.divisionDataArray.filter(
          (divData) => divData.division_id !== action.payload
        ),
      };
    case DIVISION_DATA_TO_NULL:
      return {
        ...state,
        divisionDataArray: [],
      };
    case CHANGE_EARLY_BIRD_DATE:
      return {
        ...state,
        earlyBirdDateState: action.payload,
      };
    default:
      return state;
  }
};
