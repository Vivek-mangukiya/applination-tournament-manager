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
} from "../Types";
import PlayerProfileContext from "./playerProfileContext";
import playerProfileReducer from "./playerProfileReducer";
import React, { useReducer } from "react";
import { API, API2 } from "../../Utils/API";

const PlayerProfileState = (props) => {
  const initialState = {
    dummyHistoryData: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Tallah123",
        date: "Dominik",
        division: "AVP87385",
        finish: "tallahdominik@gmail.com",
        points: "Los Angeles, CA",
        partner: "Available",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Jane",
        date: "Smith",
        division: "AVP94832",
        finish: "janesmith@gmail.com",
        points: "New York, NY",
        partner: "Available",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Abagail",
        date: "Akachi",
        division: "AVP04940",
        finish: "abagailakachi@gmail.com",
        points: "Los Angeles, CA",
        partner: "Inactive",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Mo",
        date: "Campos",
        division: "AVP39593",
        finish: "mocampos@gmail.com",
        points: "Miami, FL",
        partner: "Pending",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Mark",
        date: "Togol",
        division: "AVP87385",
        finish: "marktogol@gmail.com",
        points: "Los Angeles, CA",
        partner: "Available",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Tim",
        date: "Datoulmen",
        division: "AVP94832",
        finish: "timdatoulmen@gmail.com",
        points: "New York, NY",
        partner: "Available",
      },
    ],
    filteredHistoryData: null,
    playerInfo: null,
    PlayerListItemData: [],
    playerLoading: false,
    playerData: null,
    getPlayerLoading: true,
    playerId: null,
    playerHistory: [],
    historyListLoading: true,
    getAllPlayersError: null,
  };
  const [state, dispatch] = useReducer(playerProfileReducer, initialState);

  //actions
  const saveData = (data) => {
    const actualData = new FormData();
    actualData.append("data", JSON.stringify(data));
    API2.post(`/addPlayerByPromoter`, actualData).then((response) => {
      if (response) {
        // console.log(response);
        dispatch({
          type: SAVED_PLAYER_DATA,
          payload: data,
        });
      }
    });
  };

  const filteredHistoryDataFun = (text) => {
    dispatch({
      type: FILTERED_PROFILE_DATA,
      payload: text,
    });
  };

  const clearFilteredHistoryDataFun = () => {
    dispatch({
      type: CLEAR_FILTERED_PROFILE_DATA,
    });
  };

  const sortDataByTitle = () => {
    dispatch({
      type: SORT_PROFILE_DATA_TITLE,
    });
  };

  const sortDataByDivision = () => {
    dispatch({
      type: SORT_PROFILE_DATA_DIVISION,
    });
  };

  const sortDataByFinish = () => {
    dispatch({
      type: SORT_PROFILE_DATA_FINISH,
    });
  };

  const sortDataByPoints = () => {
    dispatch({
      type: SORT_PROFILE_DATA_POINTS,
    });
  };

  const sortDataByPartner = () => {
    dispatch({
      type: SORT_PROFILE_DATA_PARTNER,
    });
  };

  const sortDataByDate = () => {
    dispatch({
      type: SORT_PROFILE_DATA_DATE,
    });
  };

  const unsortedData = () => {
    dispatch({
      type: UNSORTED_PROFILE_DATA,
    });
  };

  const getAllPlayers = async () => {
    // await API.get('/getAllPlayers/3751')
    // console.log("consoled")
    setLoading();
    await API.get("/getAllPlayers")
      .then((response) => {
        console.log(response.data.players);
        dispatch({
          type: GET_ALL_PLAYERS,
          payload: response.data.players,
        });
      })
      .catch((error) => {
        console.log("Error", error.response);
        dispatch({
          type: GET_ALL_PLAYERS_ERROR,
          payload: error,
        });
      });
  };

  const setLoading = () => {
    // console.log()
    dispatch({
      type: PLAYER_LOADING_TYPE,
      payload: true,
    });
  };

  const getPlayerById = async (id) => {
    console.log("Player id in reducer:", id);
    await API.get(`getPlayer/${id}`).then((res) => {
      // await API.get(`getPlayer/1058304`).then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_PLAYER_BY_ID,
        payload: res.data,
      });
    });
  };

  const updatePlayerId = (id) => {
    // await API.get(`getPromoterManager/${id}`).then((res) => {
    //   console.log("GET_MANAGER_BY_ID_LIST",res.data);
    console.log("NEW PLAYER ID IN STATE:", id);
    dispatch({
      type: UPDATE_PLAYER_ID,
      payload: id,
    });
    // });
  };

  const playerByPromoter = (data) => {
    API2.post(`/editPlayerByPromoter`, data).then((response) => {
      if (response) {
        console.log(response);
        dispatch({
          type: SAVED_PLAYER_DATA,
          payload: data,
        });
      }
    });
  };

  const getPlayerHistory = async (id) => {
    console.log("Player Id sent to getPlayerHistory:", id);
    await API.get(`getPlayerHistory?avpId=${id}`).then((res) => {
      // await API.get(`getPlayerHistory?avpId=1000489`).then((res) => {
      console.log("Response of getPlayerHistory", res.data);
      dispatch({
        type: GET_PLAYER_HISTORY,
        payload: res.data,
      });
    });
  };

  return (
    <PlayerProfileContext.Provider
      value={{
        playerInfo: state.playerInfo,
        dummyHistoryData: state.dummyHistoryData,
        filteredHistoryData: state.filteredHistoryData,
        PlayerListItemData: state.PlayerListItemData,
        playerLoading: state.playerLoading,

        playerData: state.playerData,
        getPlayerLoading: state.getPlayerLoading,
        playerId: state.playerId,
        playerHistory: state.playerHistory,
        historyListLoading: state.historyListLoading,
        getAllPlayersError: state.getAllPlayersError,
        saveData,
        filteredHistoryDataFun,
        clearFilteredHistoryDataFun,
        sortDataByTitle,
        unsortedData,
        sortDataByDivision,
        sortDataByFinish,
        sortDataByPoints,
        sortDataByPartner,
        sortDataByDate,

        getAllPlayers,
        getPlayerById,
        updatePlayerId,
        getPlayerHistory,
        playerByPromoter,
        setLoading,
      }}
    >
      {props.children}
    </PlayerProfileContext.Provider>
  );
};

export default PlayerProfileState;
