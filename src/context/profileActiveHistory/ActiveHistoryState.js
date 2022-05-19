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
import ActiveHistoryContext from './activeHistoryContext';
import activeHistoryReducer from './activeHistoryReducer';
import React, { useReducer } from 'react';

const ActiveHistoryState = (props) => {
  const initialState = {
    dummyHistoryData: [
      {
        id: 1,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Bosten Open 2020',
        date: '7/11/2020',
        division: 'Mens AA',
        finish: '1st',
        points: '75',
        partner: 'Tuck Qundur',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Super Spike 11',
        date: '6/24/2020',
        division: 'Over 50',
        finish: '2st',
        points: '50',
        partner: 'Duke Nukem',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Kiwi Punch 2020',
        date: '5/14/2020',
        division: 'Co 4v4',
        finish: '1st',
        points: '75',
        partner: 'Tuck Qundur',
      },
      {
        id: 4,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Alaska Burrr Open',
        date: '4/05/2020',
        division: 'Mens AA',
        finish: '2st',
        points: '50',
        partner: 'Nuna Bizniz',
      },
      {
        id: 5,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'AVP Mens 4v4',
        date: '3/12/2020',
        division: 'Mens AA',
        finish: '1st',
        points: '75',
        partner: 'Eoger Danger',
      },
      {
        id: 6,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'VP Mens 4v4',
        date: '3/12/2020',
        division: 'Mens AA',
        finish: '1st',
        points: '75',
        partner: 'Roger Danger',
      },
    ],
    filteredHistoryData: null,
  };

  const [state, dispatch] = useReducer(activeHistoryReducer, initialState);

  //actions
  const filteredHistoryDataFun = (text) => {
    dispatch({
      type: FILTERED_ACTIVE_HISTORY_DATA,
      payload: text,
    });
  };

  const clearFilteredHistoryDataFun = () => {
    dispatch({
      type: CLEAR_FILTERED_ACTIVE_HISTORY_DATA,
    });
  };

  const sortDataByTitle = () => {
    dispatch({
      type: SORT_ACTIVE_HISTORY_DATA_TITLE,
    });
  };

  const sortDataByDivision = () => {
    dispatch({
      type: SORT_ACTIVE_HISTORY_DATA_DIVISION,
    });
  };

  const sortDataByFinish = () => {
    dispatch({
      type: SORT_ACTIVE_HISTORY_DATA_FINISH,
    });
  };

  const sortDataByPoints = () => {
    dispatch({
      type: SORT_ACTIVE_HISTORY_DATA_POINTS,
    });
  };

  const sortDataByPartner = () => {
    dispatch({
      type: SORT_ACTIVE_HISTORY_DATA_PARTNER,
    });
  };

  const sortDataByDate = () => {
    dispatch({
      type: SORT_ACTIVE_HISTORY_DATA_DATE,
    });
  };

  const unsortedData = () => {
    dispatch({
      type: UNSORTED_ACTIVE_HISTORY_DATA,
    });
  };

  return (
    <ActiveHistoryContext.Provider
      value={{
        dummyHistoryData: state.dummyHistoryData,
        filteredHistoryData: state.filteredHistoryData,
        filteredHistoryDataFun,
        clearFilteredHistoryDataFun,
        sortDataByTitle,
        unsortedData,
        sortDataByDivision,
        sortDataByFinish,
        sortDataByPoints,
        sortDataByPartner,
        sortDataByDate,
      }}
    >
      {props.children}
    </ActiveHistoryContext.Provider>
  );
};

export default ActiveHistoryState;
