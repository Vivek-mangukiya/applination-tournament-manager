import {
  SAVED_MANAGER_DATA,
  FILTERED_MANAGER_DATA,
  CLEAR_FILTERED_MANAGER_DATA,
  SORT_MANAGER_DATA_TITLE,
  UNSORTED_MANAGER_DATA,
  SORT_MANAGER_DATA_DIVISION,
  SORT_MANAGER_DATA_FINISH,
  SORT_MANAGER_DATA_POINTS,
  SORT_MANAGER_DATA_PARTNER,
  SORT_MANAGER_DATA_DATE,
  // create manager
  CREATE_MANAGER,
  // get manager by id (data)
  GET_MANAGER_BY_ID,

  //get all managers data
  GET_MANAGERS_ALL,
  CREATE_PROMOTER_LOADING,
  GET_MANAGER_BY_ID_LIST,
  CREATE_MANAGER_ERROR,
  EDIT_MANAGER_ERROR,
  GET_MANAGERS_ALL_ERROR,
  GET_MANAGER_ERROR,
  MANGER_LOADING_TYPE,
  CREATE_NEW_MANAGER_ERROR,
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SAVED_MANAGER_DATA:
      return {
        ...state,
        managerInfo: action.payload,
      };
    case FILTERED_MANAGER_DATA:
      return {
        ...state,
        filteredHistoryData: state.dummyHistoryData.filter((data) => {
          const regExp = new RegExp(`${action.payload}`, 'gi');
          return (
            data.first_name.match(regExp) ||
            data.last_name.match(regExp) ||
            data.email_id.match(regExp) ||
            data.street_address.match(regExp) ||
            data.status.match(regExp)
            // data.partner.match(regExp)
          );
        }),
      };
    case CLEAR_FILTERED_MANAGER_DATA:
      return {
        ...state,
        filteredHistoryData: null,
      };
    case SORT_MANAGER_DATA_TITLE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.first_name < b.first_name) {
            return -1;
          }
          if (a.first_name > b.first_name) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_MANAGER_DATA_DIVISION:
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
    case SORT_MANAGER_DATA_FINISH:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.email_id < b.email_id) {
            return -1;
          }
          if (a.email_id > b.email_id) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_MANAGER_DATA_POINTS:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.street_address < b.street_address) {
            return -1;
          }
          if (a.street_address > b.street_address) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_MANAGER_DATA_PARTNER:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.status < b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_MANAGER_DATA_DATE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.last_name < b.last_name) {
            return -1;
          }
          if (a.last_name > b.last_name) {
            return 1;
          }
          return 0;
        }),
      };
    case UNSORTED_MANAGER_DATA:
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
    case CREATE_MANAGER:
      return {
        ...state,
        managerId: action.payload.id,
        createPromoterLoading: true,
      };
    case CREATE_NEW_MANAGER_ERROR:
      return {
        ...state,
        newManagerError: action.payload,
      };
    case GET_MANAGER_BY_ID:
      // console.log("HERE")
      return {
        ...state,
        getManagerData: action.payload.promoterManager,
        getPromoterManagerLoading: false,
      };
    case GET_MANAGER_BY_ID_LIST:
      console.log('HERE', action.payload);
      return {
        ...state,
        managerId: action.payload,
        // getPromoterManagerLoading:false,
      };
    case GET_MANAGERS_ALL:
      return {
        ...state,
        // dummyHistoryData: action.payload,
        managerLoading: false,
        getAllManagersError: null,
        managerListData: action.payload,

        // getManagerData:action.payload
        // getAllTournamentsData: action.payload,
      };
    case GET_MANAGERS_ALL_ERROR:
      return {
        ...state,
        getAllManagersError: action.payload.response.data.Message,
        managerLoading: false,
      };
    case MANGER_LOADING_TYPE:
      return {
        ...state,
        managerLoading: action.payload,
      };
    case CREATE_PROMOTER_LOADING:
      return {
        ...state,
        createPromoterLoading: false,
      };
    case CREATE_MANAGER_ERROR:
      return {
        ...state,
        createManagerError: action.payload,
      };
    case EDIT_MANAGER_ERROR:
      return {
        ...state,
        editManagerError: action.payload,
      };
    case GET_MANAGER_ERROR:
      return {
        ...state,
        getManagerError: action.payload,
      };
    default:
      return state;
  }
};
