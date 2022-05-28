import {
  GENERATE_BRACKET,
  GENERATE_BRACKET_ERROR,
  GET_BRACKET,
  RESET_BRACKET_MESSAGES,
  EDIT_BRACKET_ERROR,
  EDIT_BRACKET,
  SET_DIVISION_DATA,
  CLOSE_BRACKET,
  CLOSE_BRACKET_ERROR,
} from "../Types";

import BracketContext from "../bracket/BracketContext";
import bracketReducer from "../bracket/bracketReducer";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";

const BracketState = (props) => {
  const initialState = {
    generateBracketError: null,
    generateBracketMessage: null,
    bracketData: null,
    screenOpaque: false,
    divName: null,
    divId: null,
    divIdx: 0,
    completeBracketError: null,
    completeBracketResponse: null,
  };
  const [state, dispatch] = useReducer(bracketReducer, initialState);

  const generateBracket = async (id) => {
    await API.post(
      `${process.env.REACT_APP_BASE_URL}/api/generateBracket?tournamentId=${id}`
    )
      .then((response) => {
        console.log("generateBracket response: ", response);
        dispatch({
          type: GENERATE_BRACKET,
          payload: response,
        });
      })
      .catch((error) => {
        console.log("Error", error.response);
        dispatch({
          type: GENERATE_BRACKET_ERROR,
          payload: error,
        });
      });
  };

  const getBracket = async (id) => {
    await API.get(
      `${process.env.REACT_APP_BASE_URL}/api/getBracket?tournamentId=${id}`
    )
      .then((response) => {
        console.log("getBracket response: ", response);
        dispatch({
          type: GET_BRACKET,
          payload: response,
        });
      })
      .catch((error) => {
        console.log("getBracket error", error.response);
        dispatch({
          type: GET_BRACKET,
          payload: error,
        });
      });
  };

  const resetBracketMessages = () => {
    dispatch({
      type: RESET_BRACKET_MESSAGES,
    });
  };

  const editBracket = async (formData) => {
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(`/editBracket`, actualData)
      .then((response) => {
        console.log("editBracket response: ", response);
        dispatch({
          type: EDIT_BRACKET,
          payload: response,
        });
      })
      .catch((err) => {
        console.log("editBracket error:", err, err.response);
        dispatch({
          type: EDIT_BRACKET_ERROR,
          payload: err,
        });
      });
    console.log("editBracket response:", res);
  };

  const setDivisionData = (data) => {
    console.log("divData in reducer:", data);
    dispatch({
      type: SET_DIVISION_DATA,
      payload: data,
    });
  };

  const completeBracket = async (formData) => {
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(`/closeBracket`, actualData)
      .then((response) => {
        console.log("closeBracket response: ", response);
        dispatch({
          type: CLOSE_BRACKET,
          payload: response,
        });
      })
      .catch((err) => {
        console.log("closeBracket error:", err, err.response);
        dispatch({
          type: CLOSE_BRACKET_ERROR,
          payload: err,
        });
      });
    console.log("closeBracket response:", res);
  };

  return (
    <BracketContext.Provider
      value={{
        generateBracketError: state.generateBracketError,
        bracketData: state.bracketData,
        generateBracketMessage: state.generateBracketMessage,
        screenOpaque: state.screenOpaque,
        divName: state.divName,
        divId: state.divId,
        divIdx: state.divIdx,
        completeBracketError: state.completeBracketError,
        completeBracketResponse: state.completeBracketResponse,
        setDivisionData,
        generateBracket,
        getBracket,
        resetBracketMessages,
        editBracket,
        completeBracket,
      }}
    >
      {props.children}
    </BracketContext.Provider>
  );
};

export default BracketState;
