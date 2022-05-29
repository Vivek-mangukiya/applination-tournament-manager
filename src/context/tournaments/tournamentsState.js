import {
  GET_SCORE_TOURNAMENTS,
  GET_SCORES_BY_ID,
  SCORE_EDIT_ERROR,
  CLEAR_SCORE_ERROR,
  GET_SCORE_TOURNAMENTS_ERROR,
  TOURNAMENT_LOADING_TYPE,
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
} from "../Types";

import TournamentContext from "../tournaments/tournamentsContext";
import tournamentReducer from "../tournaments/tournamentsReducer";
import React, { useReducer } from "react";
import { API, API2 } from "../../Utils/API";

const TournamentState = (props) => {
  const initialState = {
    tournamentList: [],
    tournamentLoading: false,
    tournamentError: null,
  };
  const [state, dispatch] = useReducer(tournamentReducer, initialState);

  const getTournaments = async () => {
    setTournamentLoading();
    await API.get(`${process.env.REACT_APP_BASE_URL2}/getPromotersTournaments`)
      .then((response) => {
        dispatch({
          type: GET_TOURNAMENTS,
          payload: response.data.tournaments,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TOURNAMENTS_ERROR,
          payload: error,
        });
      });
  };

  const setTournamentLoading = () => {
    dispatch({
      type: TOURNAMENT_LOADING_TYPE,
      payload: true,
    });
  };
  return (
    <TournamentContext.Provider
      value={{
        tournamentList: state.tournamentList,
        tournamentLoading: state.tournamentLoading,
        tournamentError: state.tournamentError,
        getTournaments,
      }}
    >
      {props.children}
    </TournamentContext.Provider>
  );
};

export default TournamentState;
