import {
  GET_EVENT_POOL_SCHEDULE,
  GET_EVENT_POOL_SCHEDULE_LOADING,
  GET_POOLS_ALL,
} from '../Types';
import PoolsContext from './poolsContext';
import poolsReducer from './poolsReducer';
import React, { useReducer } from 'react';
import API from '../../Utils/API';

const PoolsState = (props) => {
  const initialState = {
    eventPoolScheduleData: null,
    eventPollScheduleLoading: false,
    poolListData: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(poolsReducer, initialState);

  //actions

  //get all pools list
  const getAllPools = async (id) => {
    await API.get(`/getEventTeamsPlaySummary?tournamentId=${id}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_POOLS_ALL,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('Error', error.message);
      });
  };

  const getEventPoolSchedule = (id) => {
    getEventPoolScheduleLoading();
    API.get(`/getEventPoolSchedule?tournamentId=${id}`)
      .then((res) => {
        dispatch({
          type: GET_EVENT_POOL_SCHEDULE,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('Error', error.message);
      });
  };

  const getEventPoolScheduleLoading = () => {
    dispatch({
      type: GET_EVENT_POOL_SCHEDULE_LOADING,
    });
  };

  const editEventPoolSchedule = async (data, id) => {
    let actualData = new FormData();

    console.log(data);
    // setTimeout(async () => {
    //console.log(JSON.stringify(data));
    actualData.append('data', data);
    await API.post('/editEventPoolSchedule', actualData).then((res) => {
      console.log(res);
      getEventPoolSchedule(id);
      console.clear();
      // dispatch({
      //   type: ADD_PLAYER_TO_TEAM,
      // });
    });
    // }, [2000]);
    // for (var key of actualData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
  };

  return (
    <PoolsContext.Provider
      value={{
        eventPoolScheduleData: state.eventPoolScheduleData,
        eventPollScheduleLoading: state.eventPollScheduleLoading,
        poolListData: state.poolListData,
        loading: state.loading,
        getEventPoolSchedule,
        getAllPools,
        editEventPoolSchedule,
        getEventPoolScheduleLoading,
      }}
    >
      {props.children}
    </PoolsContext.Provider>
  );
};

export default PoolsState;
