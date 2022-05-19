import {
  SAVED_PLAYER_DATA,
  FILTERED_PROFILE_DATA,
  CLEAR_FILTERED_PROFILE_DATA,
  SORT_PROFILE_DATA_TITLE,
  UNSORTED_PROFILE_DATA,
  SORT_PROFILE_DATA_DIVISION,
  SORT_PROFILE_DATA_FINISH,
  SORT_PROFILE_DATA_POINTS,
  SORT_PROFILE_DATA_PARTNER,
  SORT_PROFILE_DATA_DATE,

  GET_ALL_PLAYERS,
  GET_PLAYER_BY_ID,
  UPDATE_PLAYER_ID,
  GET_PLAYER_HISTORY,
  GET_ALL_PLAYERS_ERROR,
  PLAYER_LOADING_TYPE,
} from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      console.log("Player list in reducer:",action.payload)
      return {
        ...state,
        playerLoading:false,
        getAllPlayersError:null,
        PlayerListItemData:action.payload,
      };
    case GET_ALL_PLAYERS_ERROR:
      return {
        ...state,
        getAllPlayersError:action.payload.response.data.errorMessage,
        playerLoading:false,
        
      }
    case GET_PLAYER_BY_ID:
      // console.log("HERE")
        return {
          ...state,
          playerData: action.payload.player,
          getPlayerLoading:false,
        };
    case PLAYER_LOADING_TYPE:
      return {
        ...state,
        playerLoading: action.payload,
      };
    case UPDATE_PLAYER_ID:
      console.log("Player id in idUpdate reducer:",action.payload)
      return {
        ...state,
        playerId: action.payload,
      };
    case GET_PLAYER_HISTORY:
      console.log("PlayerHistory in reducer:",action.payload.playerHistory)
      return{
        ...state,
        playerHistory: action.payload.playerHistory,
        historyListLoading:false,
      }
    case SAVED_PLAYER_DATA:
      return {
        ...state,
        playerInfo: action.payload,
      };
    case FILTERED_PROFILE_DATA:
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
    case CLEAR_FILTERED_PROFILE_DATA:
      return {
        ...state,
        filteredHistoryData: null,
      };
    case SORT_PROFILE_DATA_TITLE:
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
    case SORT_PROFILE_DATA_DIVISION:
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
    case SORT_PROFILE_DATA_FINISH:
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
    case SORT_PROFILE_DATA_POINTS:
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
    case SORT_PROFILE_DATA_PARTNER:
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
    case SORT_PROFILE_DATA_DATE:
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
    case UNSORTED_PROFILE_DATA:
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
