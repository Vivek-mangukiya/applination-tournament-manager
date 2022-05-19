import React, { useReducer } from 'react';
import {
  SAVED_MANAGER_DATA,
  FILTERED_MANAGER_DATA,
  CLEAR_FILTERED_MANAGER_DATA,
  SORT_MANAGER_DATA_TITLE,
  UNSORTED_MANAGER_DATA,
  SORT_MANAGER_DATA_DIVISION,
  SORT_MANAGER_DATA_FINISH,
  SORT_MANAGER_DATA_POINTS,
  SORT_MANAGER_DATA_PARTNER,
  SORT_MANAGER_DATA_DATE,

  // post manager profile
  CREATE_MANAGER,

  // get manager by id (data)
  GET_MANAGER_BY_ID,

  //get all managers
  GET_MANAGERS_ALL,
  CREATE_PROMOTER_LOADING,
  GET_MANAGER_BY_ID_LIST,
  CREATE_MANAGER_ERROR,
  EDIT_MANAGER_ERROR,
  GET_MANAGERS_ALL_ERROR,
  GET_MANAGER_ERROR,
  MANGER_LOADING_TYPE,
  CREATE_NEW_MANAGER_ERROR,
} from '../Types';
import NewManagerProfileContext from './newManagerProfileContext';
import newManagerProfileReducer from './newManagerProfileReducer';
import axios from 'axios';
import API from '../../Utils/API';

const NewManagerProfileState = (props) => {
  const initialState = {
    dummyHistoryData: [
      {
        id: 1,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Tallah',
        date: 'Dominik',
        division: 'AVP87385',
        finish: 'tallahdominik@gmail.com',
        points: 'Los Angeles, CA',
        partner: 'Available',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Jane',
        date: 'Smith',
        division: 'AVP94832',
        finish: 'janesmith@gmail.com',
        points: 'New York, NY',
        partner: 'Available',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Abagail',
        date: 'Akachi',
        division: 'AVP04940',
        finish: 'abagailakachi@gmail.com',
        points: 'Los Angeles, CA',
        partner: 'Inactive',
      },
      {
        id: 4,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Mo',
        date: 'Campos',
        division: 'AVP39593',
        finish: 'mocampos@gmail.com',
        points: 'Miami, FL',
        partner: 'Pending',
      },
      {
        id: 5,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Mark',
        date: 'Togol',
        division: 'AVP87385',
        finish: 'marktogol@gmail.com',
        points: 'Los Angeles, CA',
        partner: 'Available',
      },
      {
        id: 6,
        image:
          'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg',
        title: 'Tim',
        date: 'Datoulmen',
        division: 'AVP94832',
        finish: 'timdatoulmen@gmail.com',
        points: 'New York, NY',
        partner: 'Available',
      },
    ],
    filteredHistoryData: null,
    managerInfo: null,
    // manager id
    managerId: null,
    // get manager data
    getManagerData: null,
    managerListData: [],
    managerLoading: false,
    createPromoterLoading: false,
    getPromoterManagerLoading: true,
    managerMatched: null,
    createManagerError: null,
    editManagerError: null,
    getAllManagersError: null,
    getManagerError: null,
    newManagerError: null,
  };
  const [state, dispatch] = useReducer(newManagerProfileReducer, initialState);

  //actions

  //token
  const token =
    // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjA4NjE0NjA5LCJleHAiOjE2MDkyMTk0MDksIm5iZiI6MTYwODYxNDYwOSwianRpIjoiaXRWV2VsbVpOZVVHM0xweiIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.WSC_-88QNoviKiA9Ah-tLWKnYzls8yJ5JDX96V1oElI';
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjA4ODE0MzE4LCJleHAiOjE2MDk0MTkxMTgsIm5iZiI6MTYwODgxNDMxOCwianRpIjoiTHNJNm83UzhVSklCTFpjWSIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.tEvD_j9TNYD7YFCcYbd05LlONBqk_xv3udnlA-XPxPU';
  const saveData = (data) => {
    dispatch({
      type: SAVED_MANAGER_DATA,
      payload: data,
    });
  };

  const filteredHistoryDataFun = (text) => {
    dispatch({
      type: FILTERED_MANAGER_DATA,
      payload: text,
    });
  };

  const clearFilteredHistoryDataFun = () => {
    dispatch({
      type: CLEAR_FILTERED_MANAGER_DATA,
    });
  };

  const sortDataByTitle = () => {
    dispatch({
      type: SORT_MANAGER_DATA_TITLE,
    });
  };

  const sortDataByDivision = () => {
    dispatch({
      type: SORT_MANAGER_DATA_DIVISION,
    });
  };

  const sortDataByFinish = () => {
    dispatch({
      type: SORT_MANAGER_DATA_FINISH,
    });
  };

  const sortDataByPoints = () => {
    dispatch({
      type: SORT_MANAGER_DATA_POINTS,
    });
  };

  const sortDataByPartner = () => {
    dispatch({
      type: SORT_MANAGER_DATA_PARTNER,
    });
  };

  const sortDataByDate = () => {
    dispatch({
      type: SORT_MANAGER_DATA_DATE,
    });
  };

  const unsortedData = () => {
    dispatch({
      type: UNSORTED_MANAGER_DATA,
    });
  };

  const setCreatePromoterLoading = () => {
    dispatch({
      type: CREATE_PROMOTER_LOADING,
    });
  };

  //post manager profile (create)
  const createManager = async (formData, history) => {
    const actualData = new FormData();
    actualData.append('data', formData.data);
    actualData.append('profile_pic', formData.profile_pic);
    await API.post(`createPromoterManager`, actualData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: CREATE_MANAGER,
          payload: res.data,
        });
        history.push(`/newManagerProfileSaved/${res.data.id}`);
      })
      .catch((error) => {
        console.log('Create manager error:', error.response);
        dispatch({
          type: CREATE_MANAGER_ERROR,
          payload: error.response.data.errorMessage,
        });

        setTimeout(() => {
          dispatch({
            type: CREATE_MANAGER_ERROR,
            payload: null,
          });
        }, 2000);
      });
  };

  // get manager
  const getManagerById = async (id) => {
    await API.get(`getPromoterManager/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_MANAGER_BY_ID,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('get manager error:', error.response.data.message);
        dispatch({
          type: GET_MANAGER_ERROR,
          payload: error.response.data.message,
        });
      });
  };

  const getManagerByIdList = (id) => {
    console.log('NEWID IN STATE:', id);
    dispatch({
      type: GET_MANAGER_BY_ID_LIST,
      payload: id,
    });
  };

  //put request edit manager by id
  const editManager = async (id, formData, propsData) => {
    console.log(formData);
    const actualData = new FormData();
    actualData.append('data', formData.data);
    if (formData.profile_pic !== '') {
      actualData.append('profile_pic', formData.profile_pic);
    }
    //actualData.append('profile_pic', formData.profile_pic);
    console.log('formdata', actualData);
    const res = await API.post(
      `/updatePromoterManager/${id}`,
      actualData
      // config
    )
      .then((res) => {
        propsData.history.push(`/newManagerProfileSaved/${id}`);
      })
      .catch((error) => {
        console.log('eDIT manager error:', error);
        dispatch({
          type: EDIT_MANAGER_ERROR,
          payload: error.response.data.errorMessage,
        });

        setTimeout(() => {
          dispatch({
            type: EDIT_MANAGER_ERROR,
            payload: null,
          });
        }, 2000);
      });
    console.log('In editmanager()', res && res.data);
  };

  //get all managers list
  const getAllManagers = async () => {
    setLoader();
    await API.get('/getAllPromoterManagers')
      .then((response) => {
        // console.log(response.data.managersList);
        dispatch({
          type: GET_MANAGERS_ALL,
          payload: response.data.managersList,
          // managerLoading:false,
        });
      })
      .catch((error) => {
        console.log('Error', error.message);
        dispatch({
          type: GET_MANAGERS_ALL_ERROR,
          payload: error,
          // managerLoading:false,
        });
      });
  };

  const setLoader = () => {
    // console.log()

    dispatch({
      type: MANGER_LOADING_TYPE,
      payload: true,
    });
  };

  const deleteManager = async (id, formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const actualData = new FormData();
    actualData.append('data', formData.data);
    const res = await API.post(
      `/PromoterManagerStatus/${id}`,
      actualData,
      config
    );
    console.log(res.data);
  };

  const createNewManager = async (formData, propsData) => {
    console.log('Api cll mid', formData.managerId);
    const actualData = new FormData();
    actualData.append('data', formData.data);
    actualData.append('profile_pic', formData.profile_pic);
    await API.post(`/completePromoterProfile/${formData.managerId}`, actualData)
      .then((res) => {
        console.log('createNewManager:', res.data);
        dispatch({
          type: CREATE_MANAGER,
          payload: res.data,
        });
        propsData.history.push({
          pathname: '/dashboard',
          state: { from: '/completeProfile' },
        });
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage);
        dispatch({
          type: CREATE_NEW_MANAGER_ERROR,
          payload: error.response.data.errorMessage,
        });
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
          dispatch({
            type: CREATE_NEW_MANAGER_ERROR,
            payload: null,
          });
        }, 2000);
      });
  };

  return (
    <NewManagerProfileContext.Provider
      value={{
        managerInfo: state.managerInfo,
        dummyHistoryData: state.dummyHistoryData,
        filteredHistoryData: state.filteredHistoryData,
        // manager id
        managerId: state.managerId,
        // get manager data
        getManagerData: state.getManagerData,
        managerListData: state.managerListData,
        managerLoading: state.managerLoading,
        createPromoterLoading: state.createPromoterLoading,
        getPromoterManagerLoading: state.getPromoterManagerLoading,
        managerMatched: state.managerMatched,
        createManagerError: state.createManagerError,
        editManagerError: state.editManagerError,
        getAllManagersError: state.getAllManagersError,
        getManagerError: state.getManagerError,
        newManagerError: state.newManagerError,
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

        // post manager api
        createManager,
        // get manager data
        getManagerById,

        // edit manager screen
        editManager,

        //get all managers function
        getAllManagers,

        //set createpromoter api managerLoading
        setCreatePromoterLoading,

        deleteManager,
        createNewManager,
        getManagerByIdList,
      }}
    >
      {props.children}
    </NewManagerProfileContext.Provider>
  );
};

export default NewManagerProfileState;
