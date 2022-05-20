import {
  GET_SCORE_TOURNAMENTS,
  GET_SCORES_BY_ID,
  SCORE_EDIT_ERROR,
  CLEAR_SCORE_ERROR,
  GET_SCORE_TOURNAMENTS_ERROR,
  SCORE_LOADING_TYPE,
} from "../Types";

import ScoresContext from "../scores/ScoresContext";
import scoresReducer from "../scores/scoresReducer";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";

const ScoresState = (props) => {
  const initialState = {
    scoresListData: [],
    scoreLoading: false,
    tournamentScores: null,
    scoreEditError: null,
    getAllScoresError: null,
  };
  const [state, dispatch] = useReducer(scoresReducer, initialState);

  const getScoreTournaments = async () => {
    setScoreLoading();
    await API.get(
      `${process.env.REACT_APP_BASE_URL}/api/getAllTournaments?flag=1`
    )
      .then((response) => {
        console.log("getTournamentsWithFlag response: ", response);
        dispatch({
          type: GET_SCORE_TOURNAMENTS,
          payload: response.data.tournaments,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: GET_SCORE_TOURNAMENTS_ERROR,
          payload: error,
        });
      });
  };

  const setScoreLoading = () => {
    dispatch({
      type: SCORE_LOADING_TYPE,
      payload: true,
    });
  };

  const getScoresById = async (id) => {
    await API.get(
      `${process.env.REACT_APP_BASE_URL}/api/getEventScore?id=${id}`
    ).then((response) => {
      console.log("getScoresById response:", response);
      dispatch({
        type: GET_SCORES_BY_ID,
        payload: response.data,
      });
    });
  };

  const editScore = async (formData) => {
    console.log("formData in editScore:", formData);
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(`/editEventScore`, actualData).catch((err) => {
      console.log("Score edit error:", err, err.response);
      dispatch({
        type: SCORE_EDIT_ERROR,
        payload: err,
      });
    });
    console.log("editScore response:", res);
  };

  const clearScoreEditError = () => {
    dispatch({
      type: CLEAR_SCORE_ERROR,
    });
  };

  return (
    <ScoresContext.Provider
      value={{
        scoresListData: state.scoresListData,
        scoreLoading: state.scoreLoading,
        tournamentScores: state.tournamentScores,
        scoreEditError: state.scoreEditError,
        getAllScoresError: state.getAllScoresError,
        getScoreTournaments,
        getScoresById,
        editScore,
        clearScoreEditError,
      }}
    >
      {props.children}
    </ScoresContext.Provider>
  );
};

export default ScoresState;
