import {
  // SET_LOADING,
  GET_REG_ALL,
  GET_REG_BY_ID,
  GET_TEAM_DATA_BY_ID,
  SET_TEAM_DATA_LOADING,
  GET_PLAYERS_DATA,
  SET_REMOVE_PLAYER_LOADING,
  REMOVE_PLAYER_FROM_TEAM,
  SET_ADD_PLAYER_LOADING,
  ADD_PLAYER_TO_TEAM,
  SET_REG_STATUS_TO_LOADING,
  SET_REG_TEAM_STATUS,
  REMOVE_EDIT_PLAYER_FROM_TEAM,
  GET_PLAYERS_DATA_LOADING,
  GET_REG_ALL_ERR,
  GET_REG_BY_ID_ERR,
  GET_PLAYERS_DATA_ERROR,
  EXCEL_ERROR,
  EXCEL_ERROR_CLEAR,
  GET_REGISTERED_DIVISIONS,
  GET_REGISTERED_DIVISIONS_TO_NULL,
  GET_REGISTERED_DIVISIONS_LOADING,
  CHANGE_DIVISION_FOR_TEAM_RESPONSE,
  CHANGE_DIVISION_FOR_TEAM_RESPONSE_NULL,
  CHANGE_DIVISION_FOR_TEAM_RESPONSE_LOADING,
  GENERATE_INVOICE_MESSAGE,
  GENERATE_INVOICE_MESSAGE_NULL,
  REG_TEAM_PLAYER_STATUS_LOADING,
  REMIND_PAYMENT_FOR_TEAM_LOADING,
  REG_LOADING_TYPE,
  REG_TEAM__STATUS_LOADING,
  GET_TEAM_PAID_AMOUNT
  // GET_PLAYERS_DATA_TO_NULL,
} from '../Types';

import RegContext from './RegContext';
import regReducer from './regReducer';
import React, { useReducer } from 'react';
import API from '../../Utils/API';

const RegState = (props) => {
  const initialState = {
    regListData: [],
    regDataById: null,
    regLoading: false,
    teamDataById: null,
    teamDataLoading: false,
    playersData: null,
    playersDataLoading: false,
    removePlayerLoading: false,
    addPlayerLoading: false,
    regStatusLoading: false,
    editAddPlayerLoading: false,
    regAllErr: null,
    regByIdErr: null,
    playersDataError: null,
    excel_error: null,
    registeredDivisionsData: null,
    registeredDivisionsDataLoading: false,
    changeDivisionResponse: null,
    changeDivisionResponseLoading: false,
    invoiceMessage: null,
    teamPlayerStatusLoading: false,
    remindPaymentForTeamLoading: false,
    teamAttendanceStatusLoading:false,
    teamPaymentDataAmount:null,
  };
  const [state, dispatch] = useReducer(regReducer, initialState);

  //get all reg list
  const getAllRegistration = async () => {

    setRegLoading();
    await API.get('/getEventsForRegistration')
      .then((response) => {
        //console.log(response.data.eventsForRegistration);
        dispatch({
          type: GET_REG_ALL,
          payload: response.data.eventsForRegistration,
        });
      })
      .catch((error) => {
        //console.log('Error', error.response.data.errMessage);
        dispatch({
          type: GET_REG_ALL_ERR,
          payload: error.response.data.errorMessage,
        });
      });
  };

  const setRegLoading = () => {

     dispatch({
        type:REG_LOADING_TYPE,
        payload: true,
    })
  }

  // get reg
  const getRegById = async (id) => {
    await API.get(`/getEventRegistrationDetail?id=${id}`)
      .then((res) => {
        dispatch({
          type: GET_REG_BY_ID,
          payload: res.data.tournament,
        });
      })
      .catch((error) => {
        console.log('Error', error.response.data);
        dispatch({
          type: GET_REG_BY_ID_ERR,
          payload:
            error.response.data.message !== undefined
              ? error.response.data.message
              : error.response.data.errorMessage,
        });
      });
  };

  //get reg Team details
  const getTeamDetails = async (id, propsData) => {
    setTeamDataLoading();
    await API.get(`/getRegistrationTeam/${id}`)
      .then((res) => {
        // console.log(res.data.Player);
        dispatch({
          type: GET_TEAM_DATA_BY_ID,
          payload: res.data.Player,
        });
      })
      .catch((error) => {
        console.log(error.response);
        if (
          error.response.data.errorMessage.id[0] ===
          'The selected id is invalid.'
        ) {
          propsData.history.push(`/RegTable`);
        } else {
          console.log(error);
        }
      });
  };

  //team data loading
  const setTeamDataLoading = () => {
    dispatch({
      type: SET_TEAM_DATA_LOADING,
    });
  };

  const playersList = async (value) => {
    await setPlayersLoading();
    console.log('divisionId', value);
    // await API.get(`/getPlayersListForTeam/11849?f_name`).then((res) => {

    await API.get(`/getPlayersListForTeam/${value}?f_name`)
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_PLAYERS_DATA,
          payload: res.data.player,
        });
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: GET_PLAYERS_DATA_ERROR,
          payload: error.response.data.message,
        });
      });
  };

  const setPlayersLoading = () => {
    dispatch({
      type: GET_PLAYERS_DATA_LOADING,
    });
  };

  const removePlayerFromTeam = async (data) => {
    setRemovePlayerLoading();
    // console.log(data);
    let actualData = new FormData();
    actualData.append('data', JSON.stringify(data));
    // for (var key of actualData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    await API.post('/removeTeamPlayer', actualData).then((res) => {
      console.log(res.data);
      dispatch({
        type: REMOVE_PLAYER_FROM_TEAM,
      });
    });
  };

  //player remove loading
  const setRemovePlayerLoading = () => {
    dispatch({
      type: SET_REMOVE_PLAYER_LOADING,
    });
  };

  //add player to team
  const addPlayerToTeam = async (data) => {
    let info;
    setAddPlayerLoading();
    // console.log(JSON.stringify(data));
    let actualData = new FormData();
    actualData.append('data', JSON.stringify(data));
    // for (var key of actualData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    await API.post('/addPlayersToTeam', actualData).then((res) => {
      // console.log(res.data);
      dispatch({
        type: ADD_PLAYER_TO_TEAM,
      });
      info = res;
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_EDIT_PLAYER_FROM_TEAM,
      });
    }, 3000);
    return info;
  };

  //add player to team loading
  const setAddPlayerLoading = () => {
    dispatch({
      type: SET_ADD_PLAYER_LOADING,
    });
  };

  //setTeam Attendance reg present/absent
  // teamAttendanceStatusLoading:false,

  const setTeamAttendanceStatus = async(data)=>{
    dispatch({
      type: REG_TEAM__STATUS_LOADING,
      payload: true,
    });
    let actualData = new FormData();
    actualData.append('data', JSON.stringify(data));
    await API.post(`/setTeamAttendance`, actualData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
  }

  //setTeamStatus reg
  const setTeamStatusReg = async (id, data) => {
    setRegStatusToLoading();
    console.log(id);
    let actualData = new FormData();
    actualData.append('data', JSON.stringify(data));
    for (var key of actualData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    await API.post(`/setTeamstatus/${id}`, actualData).then((res) => {
      console.log(res.data);
      dispatch({
        type: SET_REG_TEAM_STATUS,
      });
    });
  };

  //set reg status to loading
  const setRegStatusToLoading = () => {
    dispatch({
      type: SET_REG_STATUS_TO_LOADING,
    });
  };

  const addTeamToReg = async (data) => {
    let actualData = new FormData();
    actualData.append('data', JSON.stringify({ divisionId: data }));
    for (var key of actualData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    await API.post('/addNewTeam', actualData).then((res) => {
      // console.log(res.data);
      // dispatch({
      //   type: ADD_PLAYER_TO_TEAM,
      // });
    });
  };

  const excelDownload = async (id) => {
    await API.get(`/admin/downloadDivisionTeam?id=${id}`).catch((error) => {
      console.log('Error', error.response.data.errorMessage[0]);
      dispatch({
        type: EXCEL_ERROR,
        payload: Array.isArray(error.response.data.errorMessage)
          ? error.response.data.errorMessage[0]
          : error.response.data.errorMessage,
      });

      setTimeout(() => {
        dispatch({
          type: EXCEL_ERROR_CLEAR,
        });
      }, [5000]);
    });
  };

  const getRegisteredDivisions = async (id) => {
    dispatch({
      type: GET_REGISTERED_DIVISIONS_LOADING,
    });
    await API.get(`/getRegisteredDivisions?teamId=${id}`)
      .then((response) => {
        dispatch({
          type: GET_REGISTERED_DIVISIONS,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getRegisteredDivisionsToNull = () => {
    dispatch({
      type: GET_REGISTERED_DIVISIONS_TO_NULL,
      payload: null,
    });
  };

  const changeDivisionForTeam = async (formData) => {
    let actualData = new FormData();
    actualData.append('data', JSON.stringify(formData));
    dispatch({
      type: CHANGE_DIVISION_FOR_TEAM_RESPONSE_LOADING,
    });
    await API.post(`/changeDivisionForTeam`, actualData)
      .then((response) => {
        console.log(response);
        dispatch({
          type: CHANGE_DIVISION_FOR_TEAM_RESPONSE,
          payload: 'Team Added Sucessfully',
        });
        setTimeout(() => {
          dispatch({
            type: CHANGE_DIVISION_FOR_TEAM_RESPONSE_NULL,
          });
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: CHANGE_DIVISION_FOR_TEAM_RESPONSE,
          payload: error.response.data.errorMessage,
        });
        setTimeout(() => {
          dispatch({
            type: CHANGE_DIVISION_FOR_TEAM_RESPONSE_NULL,
          });
        }, 3000);
      });
  };

  const generateInvoice = async (avp_id, team_id) => {
    await API.get(`/generateInvoice?avp_id=${avp_id}&team_id=${team_id}`)
      .then((res) => {
        console.log(res.data.Message);
        dispatch({
          type: GENERATE_INVOICE_MESSAGE,
          payload: res.data.Message,
        });
        setTimeout(() => {
          dispatch({
            type: GENERATE_INVOICE_MESSAGE_NULL,
          });
        }, [2000]);
      })
      .catch((error) => {
        console.log('Error', error.response);
        dispatch({
          type: GENERATE_INVOICE_MESSAGE,
          payload: error.response.data.errorMessage,
        });

        setTimeout(() => {
          dispatch({
            type: GENERATE_INVOICE_MESSAGE_NULL,
          });
        }, [2000]);
      });
  };


  const setTeamPlayerStatus = async (formData) => {
    dispatch({
      type: REG_TEAM_PLAYER_STATUS_LOADING,
      payload: true,
    });
    let actualData = new FormData();
    actualData.append('data', JSON.stringify(formData));
    await API.post(`/setTeamPlayerStatus`, actualData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const remindPaymentForTeam = async (team_id) => {
    dispatch({
      type: REMIND_PAYMENT_FOR_TEAM_LOADING,
      payload: true,
    });
    await API.get(`/remindPaymentForTeam?team_id=${team_id}`)
      .then((res) => {
        console.log(res.data.Message);
        // dispatch({
        //   type: GENERATE_INVOICE_MESSAGE,
        //   payload: res.data.Message,
        // });
        // setTimeout(() => {
        //   dispatch({
        //     type: GENERATE_INVOICE_MESSAGE_NULL,
        //   });
        // }, [2000]);
      })
      .catch((error) => {
        console.log('Error', error.response);
        // dispatch({
        //   type: GENERATE_INVOICE_MESSAGE,
        //   payload: error.response.data.errorMessage,
        // });

        // setTimeout(() => {
        //   dispatch({
        //     type: GENERATE_INVOICE_MESSAGE_NULL,
        //   });
        // }, [2000]);
      });
  };

  // http://fanwins.in/api/getRefundDetail
  const getTeamPaymentDetails = async (id) => {
    let paidAmount =0;
    
    await API.get(`/getRefundDetail?id=${id}`)
      .then((res) => {

        console.log(res.data.data.paid_amount);
        // paidAmount=
        dispatch({
          type: GET_TEAM_PAID_AMOUNT,
          payload: res.data.data.paid_amount,
        });

      })
      .catch((error) => {
        console.log('Error', error.response);
      });
  };


  return (
    <RegContext.Provider
      value={{
        playerList: state.playerList,
        filteredPlayers: state.filteredPlayers,
        regLoading: state.regLoading,
        regListData: state.regListData,
        regDataById: state.regDataById,
        teamDataById: state.teamDataById,
        teamDataLoading: state.teamDataLoading,
        playersData: state.playersData,
        removePlayerLoading: state.removePlayerLoading,
        addPlayerLoading: state.addPlayerLoading,
        regStatusLoading: state.regStatusLoading,
        editAddPlayerLoading: state.editAddPlayerLoading,
        playersDataLoading: state.playersDataLoading,
        regAllErr: state.regAllErr,
        regByIdErr: state.regByIdErr,
        playersDataError: state.playersDataError,
        excel_error: state.excel_error,
        // registered Divisions Data
        registeredDivisionsData: state.registeredDivisionsData,
        // registered Divisions Data Loading
        registeredDivisionsDataLoading: state.registeredDivisionsDataLoading,
        // change Division Response
        changeDivisionResponse: state.changeDivisionResponse,
        // change Division Response Loading
        changeDivisionResponseLoading: state.changeDivisionResponseLoading,
        // invoice Message
        invoiceMessage: state.invoiceMessage,
        // team PlayerStatus Loading
        teamPlayerStatusLoading: state.teamPlayerStatusLoading,
        // remind Payment For Team Loading
        remindPaymentForTeamLoading: state.remindPaymentForTeamLoading,
        // Attendance For Team Loading
        teamAttendanceStatusLoading:state.teamAttendanceStatusLoading,
        //Team Payment Data Amount by id
        teamPaymentDataAmount:state.teamPaymentDataAmount,

        getAllRegistration,
        getRegById,
        getTeamDetails,
        playersList,
        removePlayerFromTeam,
        addPlayerToTeam,
        setTeamStatusReg,
        setTeamDataLoading,
        // setPlayersToNullData,
        addTeamToReg,
        excelDownload,
        // get Registered Divisions
        getRegisteredDivisions,
        // get Registered Divisions  To Null
        getRegisteredDivisionsToNull,
        // change Division For Team
        changeDivisionForTeam,
        // generate Invoice
        generateInvoice,
        // set Team Player Status
        setTeamPlayerStatus,
        // remind Payment For Team
        remindPaymentForTeam,
        //Attendance
        setTeamAttendanceStatus,
        //Get team Payment details
        getTeamPaymentDetails
      }}
    >
      {props.children}
    </RegContext.Provider>
  );
};

export default RegState;
