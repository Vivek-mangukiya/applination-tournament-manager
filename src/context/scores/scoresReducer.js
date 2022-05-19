import { GET_SCORE_TOURNAMENTS, GET_SCORES_BY_ID, SCORE_EDIT_ERROR, CLEAR_SCORE_ERROR, GET_SCORE_TOURNAMENTS_ERROR,SCORE_LOADING_TYPE } from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_SCORE_TOURNAMENTS:
      return {
        ...state,
        getAllScoresError:null,
        scoresListData: action.payload,
        scoreLoading: false,
      };
    case GET_SCORE_TOURNAMENTS_ERROR:
      return {
        ...state,
        getAllScoresError:action.payload.response.data.Message,
        scoreLoading: false,
      }
    case SCORE_LOADING_TYPE:
      return{
        ...state,
        scoreLoading:action.payload,
      }
    case GET_SCORES_BY_ID:
      return {
        ...state,
        tournamentScores: action.payload,
      };
    case SCORE_EDIT_ERROR:
      return {
        ...state,
        scoreEditError: action.payload,
      }
    case CLEAR_SCORE_ERROR:
      return {
        ...state,
        scoreEditError: null
      }
    default:
      return {
        ...state,
      };
  }
};
