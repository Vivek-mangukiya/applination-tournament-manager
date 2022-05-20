import {
  FILTER_ADDRESSES,
  FILTER_ADDRESSES_CLEAR,
  FILTER_CONTACTS,
  FILTER_CONTACTS_CLEAR,
  SET_LOADING,
  EVENT_PROFILE_DATA,
  SAVED_EVENT_DATA,

  // table
  FILTERED_EVENT_DATA,
  CLEAR_FILTERED_EVENT_DATA,
  SORT_EVENT_DATA_NAME,
  UNSORTED_EVENT_DATA,
  SORT_EVENT_DATA_STARTS_ON,
  SORT_EVENT_DATA_STATUS_LABLE,
  SORT_EVENT_DATA_ADDRESS,

  //event format
  SAVED_EVENT_FORMAT_DATA,

  // dropdown
  CALL_EVENT_DROPDOWN_DATA,
  // create tournament
  CREATE_TOURNAMENT,

  // event addresses
  GET_EVENT_ADDRESSES,

  //set address id
  SET_ADDRESS_ID,

  //get tournament by id
  GET_TOURNAMENT_BY_ID,

  //get all tournaments
  GET_TOURNAMENT_ALL,
  SORT_EVENT_DATA_NAME_REVERSE,
  SORT_EVENT_DATA_STARTS_ON_REVERSE,
  SORT_EVENT_DATA_STATUS_LABLE_REVERSE,
  SORT_EVENT_DATA_ADDRESS_REVERSE,
  SEND_DIVISION_DATA_TO_EVENT,
  GET_TOURNAMENT_DIVISIONS,
  UPDATE_EVENT_ID,
  ON_EDIT_DIVISION_SAVE,
  TEMPLATE_NAME_TAKEN,
  TEMPLATE_NAME_AVAILABLE,
  CLEAR_TOURNAMENT_DATA,
  CLEAR_TEMPLATE_NAME,
  CREATE_TOURNAMENT_ERROR,
  GENERATE_SCHEDULE_RESPONSE,
  GENERATE_SCHEDULE_ERROR,
  CLEAR_SCHEDULE_MESSAGE,
  GENERATE_SCHEDULE_DIV_RESPONSE,
  GENERATE_SCHEDULE_DIV_ERROR,
  CLEAR_DIV_SCHEDULE_MESSAGE,
  EDIT_EVENT_ERROR,
  EDIT_DIVISION_ERROR,
  GET_TOURNAMENT_ALL_ERROR,
  UPLOAD_EXCEL,
  EXCEL_LOADING,
  EVENT_LOADING_TYPE,
  SET_ADDRESS_ID_ERROR,
  ADD_TO_TEMPLATE_DATA,
  REMOVE_FROM_TEMPLATE_DATA,
  TEMPLATE_DATA_TO_NULL,
  ADD_TO_DIVISION_DATA,
  REMOVE_FROM_DIVISION_DATA,
  DIVISION_DATA_TO_NULL,
  CHANGE_EARLY_BIRD_DATE,
  TEMPLATE_NAME_TAKEN_FALSE,
} from "../Types";
import EventContext from "./eventContext";
import eventReducer from "./eventReducer";
import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";
import { ToastContainer, toast } from "react-toastify";

const EventState = (props) => {
  const initialState = {
    eventAddresses: [],
    filteredAddresses: null,
    filteredContacts: null,
    eventLoading: false,
    eventProfileData: null,
    eventInfo: null,
    templateDataArray: [],
    divisionDataArray: [],
    earlyBirdDateState: null,
    saveAsTemplateMsg: null,
    dummyHistoryData: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Tallah123",
        date: "Dominik",
        division: "AVP87385",
        finish: "tallahdominik@gmail.com",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Jane",
        date: "Smith",
        division: "AVP94832",
        finish: "janesmith@gmail.com",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Abagail",
        date: "Akachi",
        division: "AVP04940",
        finish: "abagailakachi@gmail.com",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Mo",
        date: "Campos",
        division: "AVP39593",
        finish: "mocampos@gmail.com",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Mark",
        date: "Togol",
        division: "AVP87385",
        finish: "marktogol@gmail.com",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Tim",
        date: "Datoulmen",
        division: "AVP94832",
        finish: "timdatoulmen@gmail.com",
      },
    ],
    filteredHistoryData: null,

    // event format
    eventFormatInfo: null,

    // dropdown data
    eventDropdownData: null,
    //eventid
    eventId: null,
    //address id
    addressId: null,
    addressIdError: null,

    //get tournament data
    getTournamentData: null,

    // get all  tournaments data
    getAllTournamentsData: [],

    template_id: "",
    age_bracket: "",
    div_name: "",
    early_bird: "Yes",
    early_bird_date: "",
    early_bird_amount: "",
    late_amount: "",
    registration_amount: "",
    age_range: [],
    gender: [],
    skill_level: [],
    discount_amount: "",
    discount_text: "",
    discount_applied: 1,
    discount_voucher: 1,
    format: "",
    team_size: "",
    save_as_template: "",
    eventListLoading: false,
    divisionData: "",
    selectedTemplateName: "",
    changedDivisionData: {},
    templateNameCounter: false,

    teamSizeMap: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
      42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
      60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
      78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
      96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
      111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
    ],
    teamSizeMapDiv: [
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
      42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,
      78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110,
      112, 114, 116, 118, 120, 122, 124,
    ],

    createTournamentError: null,
    generateScheduleError: null,
    generateScheduleResponse: null,
    generateScheduleDivResponse: null,
    generateScheduleError: null,
    editEventError: null,
    editDivisionError: null,
    getAllTournamentsError: null,
    uploadExcelStatement: null,
    excelLoading: false,
  };
  const [state, dispatch] = useReducer(eventReducer, initialState);

  //actions

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjA4MTI3MzgxLCJleHAiOjE2MDg3MzIxODEsIm5iZiI6MTYwODEyNzM4MSwianRpIjoiS3ZlVkVQUkVIN080MjhicCIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.0ZikdrseCohegUk0vzcg-ln7h_R3qRNbxd1AXIEwIWg";

  const eventAddressesFun = async () => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // const res = await axios.get('http://fanwins.in/api/getCourts', config);
    API.get(`/getCourts?zip=`)
      .then((res) => {
        console.log("res.data Courts", res.data);
        dispatch({
          type: GET_EVENT_ADDRESSES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Error".error);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addressFilter = async (text) => {
    // setLoading();
    // dispatch({
    //   type: FILTER_ADDRESSES,
    //   payload: text,
    // });
    // console.log(state.filteredAddresses);

    await API.get(`/getCourts?zip=${text}`)
      .then((res) => {
        console.log("res.data Courts", res.data);
        dispatch({
          type: FILTER_ADDRESSES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addressFilterClear = () => {
    dispatch({
      type: FILTER_ADDRESSES_CLEAR,
    });
  };

  const contactFilter = (text) => {
    setLoading();
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  const contactFilterClear = () => {
    dispatch({
      type: FILTER_CONTACTS_CLEAR,
    });
  };

  const setEventProfileData = (data) => {
    dispatch({
      type: EVENT_PROFILE_DATA,
      payload: data,
    });
  };

  const saveData = (data) => {
    dispatch({
      type: SAVED_EVENT_DATA,
      payload: data,
    });
  };

  const filteredHistoryDataFun = (text) => {
    dispatch({
      type: FILTERED_EVENT_DATA,
      payload: text,
    });
  };

  const clearFilteredHistoryDataFun = () => {
    dispatch({
      type: CLEAR_FILTERED_EVENT_DATA,
    });
  };

  const sortDataByName = () => {
    dispatch({
      type: SORT_EVENT_DATA_NAME,
    });
  };

  const sortDataByStartsOn = () => {
    dispatch({
      type: SORT_EVENT_DATA_STARTS_ON,
    });
  };

  const sortDataByStatusLable = () => {
    dispatch({
      type: SORT_EVENT_DATA_STATUS_LABLE,
    });
  };

  const sortDataByAddress = () => {
    dispatch({
      type: SORT_EVENT_DATA_ADDRESS,
    });
  };

  const unsortedData = () => {
    dispatch({
      type: UNSORTED_EVENT_DATA,
    });
  };

  const sortDataByNameReverse = () => {
    dispatch({
      type: SORT_EVENT_DATA_NAME_REVERSE,
    });
  };

  const sortDataByStartsOnReverse = () => {
    dispatch({
      type: SORT_EVENT_DATA_STARTS_ON_REVERSE,
    });
  };

  const sortDataByStatusLableReverse = () => {
    dispatch({
      type: SORT_EVENT_DATA_STATUS_LABLE_REVERSE,
    });
  };

  const sortDataByAddressReverse = () => {
    dispatch({
      type: SORT_EVENT_DATA_ADDRESS_REVERSE,
    });
  };

  // event format
  const saveEventFormatData = (data) => {
    dispatch({
      type: SAVED_EVENT_FORMAT_DATA,
      payload: data,
    });
  };

  const UpdateEventId = (id) => {
    console.log("EVENTID IN STATE:", id);
    dispatch({
      type: UPDATE_EVENT_ID,
      payload: id,
    });
    // });
  };

  const clearTournamentData = () => {
    console.log("Clearing tournamentData:", initialState.getTournamentData);
    dispatch({
      type: CLEAR_TOURNAMENT_DATA,
    });
  };

  const clearTemplateName = () => {
    console.log("Clearing templateName:", initialState.selectedTemplateName);
    dispatch({
      type: CLEAR_TEMPLATE_NAME,
    });
  };

  // api-integration
  const dropDownFun = async () => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    setLoading();
    // const res = await axios.get('http://fanwins.in/api/eventDropDowns', config);
    // console.log(res.data);
    API.get(`/eventDropDowns`)
      .then((res) => {
        console.log("res.data eventDropDowns", res.data);
        dispatch({
          type: CALL_EVENT_DROPDOWN_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Error".error);
      });
  };

  //create tournament
  const createTournament = async (formData, history) => {
    const actualData = new FormData();
    actualData.append("data", formData.data);
    actualData.append("tournament_pic", formData.tournament_pic);
    actualData.append("cover_photo", formData.cover_photo);
    actualData.append("tournament_doc", formData.tournament_doc);

    await API.post("/createTournament", actualData)
      .then((response) => {
        // if (!response.ok)
        // {
        //   console.log('GenerateSchedule api thrown response:',response.data);
        //   dispatch({
        //     type: GENERATE_SCHEDULE_RESPONSE,
        //     payload:response.data,
        //   })
        //   throw response
        // }
        console.log("Create tournament api response", response.data);
        dispatch({
          type: CREATE_TOURNAMENT,
          payload: response.data,
        });
        history.push(`/eventProfileSaved/${response.data.TournamentId}`);
      })
      .catch((error) => {
        console.log("Error", error.response);
        dispatch({
          type: CREATE_TOURNAMENT_ERROR,
          payload: error.response && error.response.data.errorMessage,
        });
      });
  };

  //get tournament
  const getTournamentById = async (id) => {
    await API.get(`/getTournament?tournamentId=${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_TOURNAMENT_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  // put request edit tournamant by id
  const editTournament = async (id, formData) => {
    const actualData = new FormData();
    actualData.append("data", formData.data);
    if (formData.tournament_pic !== "") {
      actualData.append("tournament_pic", formData.tournament_pic);
    }
    if (formData.cover_photo !== "") {
      actualData.append("cover_photo", formData.cover_photo);
    }
    if (formData.tournament_doc !== "") {
      actualData.append("tournament_doc", formData.tournament_doc);
    }

    await API.post(`/updateTournament/${id}`, actualData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Error in Update tournament", error.response);
        dispatch({
          type: EDIT_EVENT_ERROR,
          payload: error.response && error.response.data.errorMessage,
        });
      });
  };

  // save external address
  const saveAddress = async (formData) => {
    // const actualData = new FormData();
    // actualData.append('data',formData.data);
    await API.post("/createCourt", formData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SET_ADDRESS_ID,
          payload: res.data,
        });
        toast.dark("Court Added Successfully!!");
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage);
        dispatch({
          type: SET_ADDRESS_ID_ERROR,
          payload: {
            errMsg: error.response.data.errorMessage,
            addressId: null,
          },
        });

        setTimeout(() => {
          dispatch({
            type: SET_ADDRESS_ID_ERROR,
            payload: {
              errMsg: error.response.data.errorMessage,
              addressId: "",
            },
          });
        }, 2000);
      });
  };

  //add division data
  const addDivision = async (data) => {
    const actualData = new FormData();
    actualData.append("data", data);
    await API.post("/addDivisions", actualData)
      .then((res) => {
        console.log("addDivisions response", res.data);
      })
      .catch((error) => {
        console.log("Error in addDivision", error);
      });
  };

  //get all tournaments list
  const getAllTournaments = async () => {
    setEventLoading();
    await API.get("/getAllTournaments")
      .then((response) => {
        //console.log(response.data.tournaments);
        dispatch({
          type: GET_TOURNAMENT_ALL,
          payload: response.data.tournaments,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch({
          type: GET_TOURNAMENT_ALL_ERROR,
          payload: error,
        });
      });
  };

  const setEventLoading = () => {
    dispatch({
      type: EVENT_LOADING_TYPE,
      payload: true,
    });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const sendDivisionDataToEvent = (data) => {
    console.log("data before calling reducer", data);
    dispatch({
      type: SEND_DIVISION_DATA_TO_EVENT,
      payload: data,
    });
  };

  const getDivisions = async (id) => {
    console.log("tournament id is division edit screen:", id);
    await API.get(`/getTournamentDivisions?tournament_id=${id}`)
      // await API.get(`/getTournamentDivisions?tournament_id=3978`)
      .then((response) => {
        console.log("GetDivision:", response.data);
        dispatch({
          type: GET_TOURNAMENT_DIVISIONS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  const editDivisions = async (formData, history, id) => {
    const actualData = new FormData();
    console.log("Formdata in reducer", formData);
    actualData.append("data", formData);
    await API.post(`/updateDivisions`, actualData)
      .then((res) => {
        console.log("editDivisions response:", res);
        // history.goBack();
        history.push(`/TemplateDivisionSavedMain/${id}`);
      })
      .catch((error) => {
        console.log("Error in Update Division", error.response);
        dispatch({
          type: EDIT_DIVISION_ERROR,
          payload: error.response && error.response.data.errorMessage,
        });
      });
  };

  const editDivisionsBracket = async (formData, history, id) => {
    const actualData = new FormData();
    console.log("Formdata in reducer", formData);
    actualData.append("data", formData);
    await API.post(`/updateDivisions`, actualData)
      .then((res) => {
        console.log("editDivisions response:", res);
        // history.push(`/scores/${id}`);
      })
      .catch((error) => {
        console.log("Error in Update Division", error.response);
        dispatch({
          type: EDIT_DIVISION_ERROR,
          payload: error.response && error.response.data.errorMessage,
        });
      });
  };

  const onEditDivisionSave = (data) => {
    console.log("Data in onEditDivisionsSave:", data);
    dispatch({
      type: ON_EDIT_DIVISION_SAVE,
      payload: data,
    });
  };

  const tournamentStatus = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(
      `/setTournamentStatus`,
      actualData
      // config
    );
    console.log("setTournamentStatus response:", res.data.message);
  };

  const checkTemplateName = async (formData) => {
    const actualData = new FormData();
    actualData.append("data", formData.data);
    const res = await API.post(`/checkDivTemplate`, actualData);
    console.log("Response from checkTemplateName:", res);
    console.log("setTournamentStatus response:", res.data.message);
    if (res.data.message === "Sorry,the name is already taken") {
      dispatch({
        type: TEMPLATE_NAME_TAKEN,
      });
      setTimeout(() => {
        dispatch({
          type: TEMPLATE_NAME_TAKEN_FALSE,
        });
      }, [4000]);
    }
    if (res.data.message === "template name can be used") {
      dispatch({
        type: TEMPLATE_NAME_AVAILABLE,
      });
      setTimeout(() => {
        dispatch({
          type: TEMPLATE_NAME_TAKEN_FALSE,
        });
      }, [4000]);
    }
  };

  // const generateSchedule = async (id) => {
  //   await API.post(`/generateSchedule?tournamentId=${id}`)
  //   .then((res) => {
  //     console.log('GenerateSchedule api response',res.data);
  //     dispatch({
  //       type: GENERATE_SCHEDULE_RESPONSE,
  //       payload:res.data,
  //     })
  //   })
  //   .catch((err,res)=>{
  //     console.log("Generate schedule error:",err,err.error);
  //     dispatch({
  //       type: GENERATE_SCHEDULE_ERROR,
  //       payload:err,
  //     })
  //   })
  // }

  const generateSchedule = async (id) => {
    await API.post(`/generateSchedule?tournamentId=${id}`)
      // .then((res) => {
      //   console.log('GenerateSchedule api response',res.data);
      //   dispatch({
      //     type: GENERATE_SCHEDULE_RESPONSE,
      //     payload:res.data,
      //   })
      // })
      // .catch((err,res)=>{
      //   console.log("Generate schedule error:",err,err.error);
      //   dispatch({
      //     type: GENERATE_SCHEDULE_ERROR,
      //     payload:err,
      //   })
      // })
      .then((res) => {
        if (!res.ok) {
          console.log("GenerateSchedule api thrown response:", res.data);
          dispatch({
            type: GENERATE_SCHEDULE_RESPONSE,
            payload: res.data,
          });
          throw res;
        }
        console.log("GenerateSchedule api response:", res.data);
        // return response.json()  //we only get here if there is no error
        dispatch({
          type: GENERATE_SCHEDULE_RESPONSE,
          payload: res.data,
        });
      })
      .then((json) => {
        // this.props.dispatch(doSomethingWithResult(json))
        // dispatch({
        //   type: GENERATE_SCHEDULE_RESPONSE,
        //   payload:json,
        // })
      })
      .catch((err) => {
        console.log("Generate schedule error:", err, err.response);
        dispatch({
          type: GENERATE_SCHEDULE_ERROR,
          payload: err,
        });
        // err.text().then( errorMessage => {
        //   // this.props.dispatch(displayTheError(errorMessage))
        //   console.log("Error with internet method:",errorMessage)
        // })
      });
  };

  const clearScheduleMessage = () => {
    dispatch({
      type: CLEAR_SCHEDULE_MESSAGE,
    });
  };

  const generateScheduleForDivision = async (id) => {
    await API.post(`/generateSchedule?divisionId=${id}`)
      .then((res) => {
        if (!res.ok) {
          console.log(
            "GenerateScheduleForDivision api thrown response:",
            res.data
          );
          dispatch({
            type: GENERATE_SCHEDULE_DIV_RESPONSE,
            payload: res.data,
          });
          throw res;
        }
        console.log("GenerateScheduleForDivision api response:", res.data);
        dispatch({
          type: GENERATE_SCHEDULE_DIV_RESPONSE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Generate schedule division error:", err, err.response);
        dispatch({
          type: GENERATE_SCHEDULE_DIV_ERROR,
          payload: err,
        });
      });
  };

  const clearDivScheduleMessage = () => {
    dispatch({
      type: CLEAR_DIV_SCHEDULE_MESSAGE,
    });
  };

  //uploadExcel tournament
  const uploadExcel = async (formData) => {
    const actualData = new FormData();
    actualData.append("excel", formData);

    dispatch({
      type: EXCEL_LOADING,
    });

    await API.post("/admin/uploadDivisionTeam", actualData)
      .then((response) => {
        // if (!response.ok)
        // {
        //   console.log('GenerateSchedule api thrown response:',response.data);
        //   dispatch({
        //     type: GENERATE_SCHEDULE_RESPONSE,
        //     payload:response.data,
        //   })
        //   throw response
        // }
        console.log("Create tournament api response", response.data);
        dispatch({
          type: UPLOAD_EXCEL,
          payload: "File Uploaded Successfully",
        });
        setTimeout(() => {
          dispatch({
            type: UPLOAD_EXCEL,
            payload: null,
          });
        }, 8000);
        // history.push(`/eventProfileSaved/${response.data.TournamentId}`);
      })
      .catch((error) => {
        dispatch({
          type: UPLOAD_EXCEL,
          payload:
            error.response && error.response.status === 405
              ? error.response.data.errorMessage
              : error.response.data.status,
        });
        setTimeout(() => {
          dispatch({
            type: UPLOAD_EXCEL,
            payload: null,
          });
        }, 8000);
      });
  };

  const addToTemplateData = (templateData) => {
    console.log(templateData);
    dispatch({
      type: ADD_TO_TEMPLATE_DATA,
      payload: templateData,
    });
  };

  const removeFromTemplateData = (id) => {
    dispatch({
      type: REMOVE_FROM_TEMPLATE_DATA,
      payload: id,
    });
  };

  const templateDataToNull = () => {
    dispatch({
      type: TEMPLATE_DATA_TO_NULL,
    });
  };

  const addToDivisionData = (divisionData) => {
    console.log(divisionData);
    dispatch({
      type: ADD_TO_DIVISION_DATA,
      payload: divisionData,
    });
  };

  const removeFromDivisionData = (id) => {
    dispatch({
      type: REMOVE_FROM_DIVISION_DATA,
      payload: id,
    });
  };

  const divisionDataToNull = () => {
    dispatch({
      type: DIVISION_DATA_TO_NULL,
    });
  };

  const earlyBirdDateStateFun = (date) => {
    dispatch({
      type: CHANGE_EARLY_BIRD_DATE,
      payload: date,
    });
  };

  return (
    <EventContext.Provider
      value={{
        eventAddresses: state.eventAddresses,
        filteredAddresses: state.filteredAddresses,
        eventLoading: state.eventLoading,
        // eventContacts: state.eventContacts,
        filteredContacts: state.filteredContacts,
        eventProfileData: state.eventProfileData,
        eventInfo: state.eventInfo,
        dummyHistoryData: state.dummyHistoryData,
        filteredHistoryData: state.filteredHistoryData,
        eventFormatInfo: state.eventFormatInfo,
        // eventdoropdown data
        eventDropdownData: state.eventDropdownData,

        //event id
        eventId: state.eventId,

        //address id
        addressId: state.addressId,
        addressIdError: state.addressIdError,

        //get tournament by id
        getTournamentData: state.getTournamentData,

        //get all tournament data
        getAllTournamentsData: state.getAllTournamentsData,

        template_id: state.template_id,
        age_bracket: state.age_bracket,
        div_name: state.div_name,
        early_bird: state.early_bird,
        early_bird_amount: state.early_bird_amount,
        late_amount: state.late_amount,
        registration_amount: state.registration_amount,
        age_range: state.age_range,
        gender: state.gender,
        skill_level: state.skill_level,
        discount_amount: state.discount_amount,
        discount_text: state.discount_text,
        discount_applied: state.discount_applied,
        discount_voucher: state.discount_voucher,
        format: state.format,
        team_size: state.team_size,
        save_as_template: state.save_as_template,
        eventListLoading: state.eventListLoading,
        // eventLoading:state.eventLoading,
        divisionData: state.divisionData,
        selectedTemplateName: state.selectedTemplateName,
        changedDivisionData: state.changedDivisionData,
        templateNameCounter: state.templateNameCounter,
        teamSizeMap: state.teamSizeMap,
        createTournamentError: state.createTournamentError,
        generateScheduleResponse: state.generateScheduleResponse,
        generateScheduleError: state.generateScheduleError,
        generateScheduleDivResponse: state.generateScheduleDivResponse,
        generateScheduleDivError: state.generateScheduleDivError,
        editEventError: state.editEventError,
        editDivisionError: state.editDivisionError,
        teamSizeMapDiv: state.teamSizeMapDiv,
        getAllTournamentsError: state.getAllTournamentsError,
        // uploadExcelStatement
        uploadExcelStatement: state.uploadExcelStatement,
        // excel eventLoading
        excelLoading: state.excelLoading,
        // template data array
        templateDataArray: state.templateDataArray,
        // division data array
        divisionDataArray: state.divisionDataArray,
        // early bird date state
        earlyBirdDateState: state.earlyBirdDateState,
        // save as template msg
        saveAsTemplateMsg: state.saveAsTemplateMsg,
        addressFilter,
        addressFilterClear,
        contactFilter,
        contactFilterClear,
        setLoading,
        setEventProfileData,
        saveData,
        // table
        filteredHistoryDataFun,
        clearFilteredHistoryDataFun,
        sortDataByName,
        unsortedData,
        sortDataByStartsOn,
        sortDataByStatusLable,
        sortDataByAddress,
        sortDataByNameReverse,
        sortDataByStartsOnReverse,
        sortDataByStatusLableReverse,
        sortDataByAddressReverse,

        // event format
        saveEventFormatData,

        // dropdown
        dropDownFun,

        // create tournament
        createTournament,

        // get event addresses
        eventAddressesFun,

        //save address
        saveAddress,

        //get tournament by id
        getTournamentById,

        //edit tournament
        editTournament,

        //add division
        addDivision,

        //get all tournaments
        getAllTournaments,

        sendDivisionDataToEvent,

        getDivisions,

        UpdateEventId,

        editDivisions,

        tournamentStatus,
        onEditDivisionSave,
        checkTemplateName,
        clearTournamentData,
        clearTemplateName,
        generateSchedule,
        clearScheduleMessage,
        generateScheduleForDivision,
        clearDivScheduleMessage,
        editDivisionsBracket,
        // upload Excel
        uploadExcel,
        addToTemplateData,
        removeFromTemplateData,
        templateDataToNull,
        addToDivisionData,
        removeFromDivisionData,
        divisionDataToNull,
        earlyBirdDateStateFun,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
