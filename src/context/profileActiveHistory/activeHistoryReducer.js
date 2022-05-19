import {
  FILTERED_ACTIVE_HISTORY_DATA,
  CLEAR_FILTERED_ACTIVE_HISTORY_DATA,
  SORT_ACTIVE_HISTORY_DATA_TITLE,
  UNSORTED_ACTIVE_HISTORY_DATA,
  SORT_ACTIVE_HISTORY_DATA_DIVISION,
  SORT_ACTIVE_HISTORY_DATA_FINISH,
  SORT_ACTIVE_HISTORY_DATA_POINTS,
  SORT_ACTIVE_HISTORY_DATA_PARTNER,
  SORT_ACTIVE_HISTORY_DATA_DATE,
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case FILTERED_ACTIVE_HISTORY_DATA:
      return {
        ...state,
        filteredHistoryData: state.dummyHistoryData.filter((data) => {
          const regExp = new RegExp(`${action.payload}`, 'gi');
          return (
            data.title.match(regExp) ||
            data.date.match(regExp) ||
            data.division.match(regExp) ||
            data.finish.match(regExp) ||
            data.points.match(regExp) ||
            data.partner.match(regExp)
          );
        }),
      };
    case CLEAR_FILTERED_ACTIVE_HISTORY_DATA:
      return {
        ...state,
        filteredHistoryData: null,
      };
    case SORT_ACTIVE_HISTORY_DATA_TITLE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_ACTIVE_HISTORY_DATA_DIVISION:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.division < b.division) {
            return -1;
          }
          if (a.division > b.division) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_ACTIVE_HISTORY_DATA_FINISH:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.finish < b.finish) {
            return -1;
          }
          if (a.finish > b.finish) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_ACTIVE_HISTORY_DATA_POINTS:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.points < b.points) {
            return -1;
          }
          if (a.points > b.points) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_ACTIVE_HISTORY_DATA_PARTNER:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.partner < b.partner) {
            return -1;
          }
          if (a.partner > b.partner) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_ACTIVE_HISTORY_DATA_DATE:
      return {
        ...state,
        dummyHistoryData: state.dummyHistoryData.sort(function (a, b) {
          if (a.date < b.date) {
            return -1;
          }
          if (a.date > b.date) {
            return 1;
          }
          return 0;
        }),
      };
    case UNSORTED_ACTIVE_HISTORY_DATA:
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
    default:
      return state;
  }
};
