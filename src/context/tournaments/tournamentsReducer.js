import { GET_TOURNAMENTS, GET_TOURNAMENTS_ERROR, TOURNAMENT_LOADING_TYPE } from "../Types";

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS:
      return {
        ...state,
        getAllScoresError: null,
        tournamentList: action.payload,
        tournamentLoading: false,
      };
    case TOURNAMENT_LOADING_TYPE:
      return {
        ...state,
        tournamentLoading: action.payload,
      };
    case GET_TOURNAMENTS_ERROR:
      return {
        ...state,
        getAllScoresError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
