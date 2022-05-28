import {
  FILTERED_TEMPLATE_LIST_DATA,
  CLEAR_FILTERED_TEMPLATE_LIST_DATA,
  SORT_TEMPLATE_LIST_DATA_TITLE,
  UNSORTED_TEMPLATE_LIST_DATA,
  SORT_TEMPLATE_LIST_DATA_DIVISION,
  SORT_TEMPLATE_LIST_DATA_FINISH,
  SORT_TEMPLATE_LIST_DATA_POINTS,
  SORT_TEMPLATE_LIST_DATA_PARTNER,
  SORT_TEMPLATE_LIST_DATA_DATE,
  GET_TEMP_ALL,
  TEMPLATE_LOADING_TYPE,
} from "../Types";
import TemplateListContext from "./templateListContext";
import templateListReducer from "./templateReducer";
import React, { useReducer } from "react";
import { API } from "../../Utils/API";

const TemplateListState = (props) => {
  const initialState = {
    dummyHistoryData: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Sample 1 - 6 pools of 4 on 4 courts",
        date: "Pools",
        division: "3 pools of 4 on Two Courts",
        finish: "9/03/2020",
        points: "In Use",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Pro Points",
        date: "Points",
        division: "Mens and Womans 2v2, 4v4 and 6v6",
        finish: "9/03/2020",
        points: "Not Used",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Best of the Best",
        date: "Division",
        division: "Adult, Mens, Womens, 36 Teams, Round Robin",
        finish: "9/03/2020",
        points: "In Use",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Sample 1 - 6 pools of 4 on 4 courts",
        date: "Pools",
        division: "3 pools of 4 on Two Courts",
        finish: "9/03/2020",
        points: "In Use",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Pro Points",
        date: "Points",
        division: "Mens and Womans 2v2, 4v4 and 6v6",
        finish: "9/03/2020",
        points: "Not Used",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
        title: "Best of the Best",
        date: "Division",
        division: "Adult, Mens, Womens, 36 Teams, Round Robin",
        finish: "9/03/2020",
        points: "In Use",
      },
    ],
    filteredHistoryData: null,
    tempListData: [],
    templateLoading: false,
  };
  const [state, dispatch] = useReducer(templateListReducer, initialState);

  //actions (functions)
  const filteredHistoryDataFun = (text) => {
    dispatch({
      type: FILTERED_TEMPLATE_LIST_DATA,
      payload: text,
    });
  };

  const clearFilteredHistoryDataFun = () => {
    dispatch({
      type: CLEAR_FILTERED_TEMPLATE_LIST_DATA,
    });
  };

  const sortDataByTitle = () => {
    dispatch({
      type: SORT_TEMPLATE_LIST_DATA_TITLE,
    });
  };

  const sortDataByDivision = () => {
    dispatch({
      type: SORT_TEMPLATE_LIST_DATA_DIVISION,
    });
  };

  const sortDataByFinish = () => {
    dispatch({
      type: SORT_TEMPLATE_LIST_DATA_FINISH,
    });
  };

  const sortDataByPoints = () => {
    dispatch({
      type: SORT_TEMPLATE_LIST_DATA_POINTS,
    });
  };

  const sortDataByPartner = () => {
    dispatch({
      type: SORT_TEMPLATE_LIST_DATA_PARTNER,
    });
  };

  const sortDataByDate = () => {
    dispatch({
      type: SORT_TEMPLATE_LIST_DATA_DATE,
    });
  };

  const unsortedData = () => {
    dispatch({
      type: UNSORTED_TEMPLATE_LIST_DATA,
    });
  };

  //get all reg list
  const getAllTemplates = async () => {
    setTemplateLoading();
    await API.get("/getAllTemplate")
      .then((response) => {
        console.log(response.data.templates);
        dispatch({
          type: GET_TEMP_ALL,
          payload: response.data.templates,
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const setTemplateLoading = () => {
    dispatch({
      type: TEMPLATE_LOADING_TYPE,
      payload: true,
    });
  };
  return (
    <TemplateListContext.Provider
      value={{
        dummyHistoryData: state.dummyHistoryData,
        filteredHistoryData: state.filteredHistoryData,
        tempListData: state.tempListData,
        templateLoading: state.templateLoading,
        filteredHistoryDataFun,
        clearFilteredHistoryDataFun,
        sortDataByTitle,
        unsortedData,
        sortDataByDivision,
        sortDataByFinish,
        sortDataByPoints,
        sortDataByPartner,
        sortDataByDate,
        getAllTemplates,
      }}
    >
      {props.children}
    </TemplateListContext.Provider>
  );
};

export default TemplateListState;
