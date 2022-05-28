import React, { useState, useContext } from "react";
import { useEffect } from "react";
import profilePic from "../../assets/images/profilepic.jpg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PoolsDropdown from "./PoolsDropdown";
import { DatePicker } from "antd";
import calenderIconRight from "../../assets/images/icon-menu-calendar.svg";
import moment from "moment";
import PoolContext from "../../context/pools/poolsContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Header from "../../components/header/Header";
import backIcon from "../../assets/images/icon-menu-back.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import upIcon from "../../assets/images/up-arrow.png";
import downIcon from "../../assets/images/down-arrow.png";
import { TimePicker } from "antd";
import PoolsScheduleDropdown from "./PoolsScheduleDropdown";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // padding: grid * 2,
  // margin: `0 0 ${grid}px 0`,
  margin: 2,

  // change background colour if dragging
  background: isDragging ? "grey" : "#f9fafc",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#ffd420" : "#f9fafc",
  // padding: grid,
  width: 220,
});

const PoolsScreen = (props) => {
  //context
  const poolContext = useContext(PoolContext);
  const {
    getEventPoolSchedule,
    eventPoolScheduleData,
    editEventPoolSchedule,
    eventPollScheduleLoading,
    getEventPoolScheduleLoading,
    getLivescore,
    updateLivescore,
  } = poolContext;

  useEffect(() => {
    getEventPoolSchedule(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    if (
      eventPoolScheduleData !== null &&
      eventPoolScheduleData.schedule.length !== 0
    ) {
      console.log(eventPoolScheduleData.schedule);

      setDropdown1({
        index: 0,
        id: eventPoolScheduleData.schedule[0].id,
        name: eventPoolScheduleData.schedule[0].name,
        gender: eventPoolScheduleData.schedule[0].gender,
        color: colors[0],
        match_time: eventPoolScheduleData.schedule[0].match_time,
        start_time: moment(eventPoolScheduleData.schedule[0].start_time, [
          "YYYY-MM-DD HH:mm:ss",
        ]).format("hh:mm a"),
      });
    }
  }, []);

  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [editedData, setEditedData] = useState(null);
  const [editedArray, setEditedArray] = useState(null);

  const [dummyData, setDummyData] = useState({
    statusCode: "200",
    status: "success",
    tournament_name: "Fort Express",
    schedule: [
      {
        id: 15860,
        name: "Mens Pro",
        gender: "Mens",
        match_time: 60,
        start_time: "2021-04-02 10:00:00",
        courtsInfo: [
          {
            court: 1,
            information: [
              {
                match_id: 4399,
                content: {
                  game: "A 1",
                  start_play_time: "2021-04-02 01:00:00",
                  end_play_time: "2021-04-02 02:10:00",
                  diff: 70,
                  team1_rank: 1,
                  team1_name: "Gould, Parish",
                  team1_winning_count: 0,
                  team2_rank: 4,
                  team2_name: "Cox, Foo",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Zoeckler, Miller",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
              {
                match_id: 4400,
                content: {
                  game: "B 1",
                  start_play_time: "2021-04-02 02:10:00",
                  end_play_time: "2021-04-02 03:10:00",
                  diff: 60,
                  team1_rank: 2,
                  team1_name: "Fritz, Wang",
                  team1_winning_count: 0,
                  team2_rank: 5,
                  team2_name: "Forthaus, Reyes",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Taormina, ",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
              {
                match_id: 4403,
                content: {
                  game: "A 6",
                  start_play_time: "2021-04-02 03:10:00",
                  end_play_time: "2021-04-02 04:10:00",
                  diff: 60,
                  team1_rank: 7,
                  team1_name: "Taormina, ",
                  team1_winning_count: 0,
                  team2_rank: 1,
                  team2_name: "Gould, Parish",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Forthaus, Reyes",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
              {
                match_id: 4404,
                content: {
                  game: "B 6",
                  start_play_time: "2021-04-02 04:10:00",
                  end_play_time: "2021-04-02 05:10:00",
                  diff: 60,
                  team1_rank: 8,
                  team1_name: "Zoeckler, Miller",
                  team1_winning_count: 0,
                  team2_rank: 2,
                  team2_name: "Fritz, Wang",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Cox, Foo",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
            ],
          },
          {
            court: 2,
            information: [
              {
                match_id: 4402,
                content: {
                  game: "B 2",
                  start_play_time: "2021-04-02 01:00:00",
                  end_play_time: "2021-04-02 02:20:00",
                  diff: 80,
                  team1_rank: 5,
                  team1_name: "Forthaus, Reyes",
                  team1_winning_count: 0,
                  team2_rank: 8,
                  team2_name: "Zoeckler, Miller",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Ledig, Dentler",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
            ],
          },
        ],
      },
      {
        id: 15861,
        name: "Womens Pro",
        gender: "Womens",
        match_time: 60,
        start_time: "2021-04-02 01:00:00",
        courtsInfo: [
          {
            court: 1,
            information: [
              {
                match_id: 4405,
                content: {
                  game: "A 1",
                  start_play_time: "2021-04-02 01:00:00",
                  end_play_time: "2021-04-02 02:00:00",
                  diff: 60,
                  team1_rank: 1,
                  team1_name: "Bispham, Ekstrom",
                  team1_winning_count: 0,
                  team2_rank: 4,
                  team2_name: "Greene, Krause",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Wetton, Nowak",
                  profile_pics1: ["/images/avp/image9.jpg"],
                  profile_pics2: ["/images/avp/image9.jpg"],
                },
              },
              {
                match_id: 4409,
                content: {
                  game: "A 6",
                  start_play_time: "2021-04-02 06:00:00",
                  end_play_time: "2021-04-02 07:00:00",
                  diff: 60,
                  team1_rank: 7,
                  team1_name: "Gauna, Miller",
                  team1_winning_count: 0,
                  team2_rank: 1,
                  team2_name: "Bispham, Ekstrom",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Rodriguez, Fachin",
                  profile_pics1: [
                    "/images/avp/image8.jpg",
                    "/images/avp/image9.jpg",
                  ],
                  profile_pics2: ["/images/avp/image9.jpg"],
                },
              },
            ],
          },
          {
            court: 2,
            information: [
              {
                match_id: 4406,
                content: {
                  game: "B 1",
                  start_play_time: "2021-04-02 01:00:00",
                  end_play_time: "2021-04-02 02:00:00",
                  diff: 60,
                  team1_rank: 2,
                  team1_name: "Rowell, Nichols",
                  team1_winning_count: 0,
                  team2_rank: 5,
                  team2_name: "Rodriguez, Fachin",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Gauna, Miller",
                  profile_pics1: ["/images/avp/image9.jpg"],
                  profile_pics2: ["/images/avp/image9.jpg"],
                },
              },
              {
                match_id: 4408,
                content: {
                  game: "B 2",
                  start_play_time: "2021-04-02 02:00:00",
                  end_play_time: "2021-04-02 03:00:00",
                  diff: 60,
                  team1_rank: 5,
                  team1_name: "Rodriguez, Fachin",
                  team1_winning_count: 0,
                  team2_rank: 8,
                  team2_name: "Wetton, Nowak",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "radell, Butters",
                  profile_pics1: ["/images/avp/image9.jpg"],
                  profile_pics2: ["/images/avp/image9.jpg"],
                },
              },
              {
                match_id: 4410,
                content: {
                  game: "B 6",
                  start_play_time: "2021-04-02 06:00:00",
                  end_play_time: "2021-04-02 07:00:00",
                  diff: 60,
                  team1_rank: 8,
                  team1_name: "Wetton, Nowak",
                  team1_winning_count: 0,
                  team2_rank: 2,
                  team2_name: "Rowell, Nichols",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Greene, Krause",
                  profile_pics1: ["/images/avp/image9.jpg"],
                  profile_pics2: ["/images/avp/image9.jpg"],
                },
              },
            ],
          },
        ],
      },
      {
        id: 15860,
        name: "Mens Pro example 2",
        gender: "Mens",
        match_time: 60,
        start_time: "2021-04-02 16:00:00",
        courtsInfo: [
          {
            court: 1,
            information: [
              {
                match_id: 11,
                content: {
                  game: "A 1",
                  start_play_time: "2021-04-02 01:00:00",
                  end_play_time: "2021-04-02 02:10:00",
                  diff: 70,
                  team1_rank: 1,
                  team1_name: "Gould, Parish",
                  team1_winning_count: 0,
                  team2_rank: 4,
                  team2_name: "Cox, Foo",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Zoeckler, Miller",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
              {
                match_id: 22,
                content: {
                  game: "B 1",
                  start_play_time: "2021-04-02 02:10:00",
                  end_play_time: "2021-04-02 03:10:00",
                  diff: 60,
                  team1_rank: 2,
                  team1_name: "Fritz, Wang",
                  team1_winning_count: 0,
                  team2_rank: 5,
                  team2_name: "Forthaus, Reyes",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Taormina, ",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
              {
                match_id: 33,
                content: {
                  game: "A 6",
                  start_play_time: "2021-04-02 03:10:00",
                  end_play_time: "2021-04-02 04:10:00",
                  diff: 60,
                  team1_rank: 7,
                  team1_name: "Taormina, ",
                  team1_winning_count: 0,
                  team2_rank: 1,
                  team2_name: "Gould, Parish",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Forthaus, Reyes",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
              {
                match_id: 44,
                content: {
                  game: "B 6",
                  start_play_time: "2021-04-02 04:10:00",
                  end_play_time: "2021-04-02 05:10:00",
                  diff: 60,
                  team1_rank: 8,
                  team1_name: "Zoeckler, Miller",
                  team1_winning_count: 0,
                  team2_rank: 2,
                  team2_name: "Fritz, Wang",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Cox, Foo",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
            ],
          },
          {
            court: 2,
            information: [
              {
                match_id: 55,
                content: {
                  game: "B 2",
                  start_play_time: "2021-04-02 01:00:00",
                  end_play_time: "2021-04-02 02:20:00",
                  diff: 80,
                  team1_rank: 5,
                  team1_name: "Forthaus, Reyes",
                  team1_winning_count: 0,
                  team2_rank: 8,
                  team2_name: "Zoeckler, Miller",
                  team2_winning_count: 0,
                  reffing_team_rank: null,
                  reffing_team: "Ledig, Dentler",
                  profile_pics1: ["/images/avp/image8.jpg"],
                  profile_pics2: ["/images/avp/image8.jpg"],
                },
              },
            ],
          },
        ],
      },
    ],
  });

  // console.log(dummyData);

  // useEffect(() => {
  //   console.log(dropdown1);
  // }, [dropdown1]);

  const [state, setState] = useState(null);

  function onDragEnd(result) {
    const { source, destination } = result;
    // console.log(source);
    // console.log(destination);

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(
        state[sInd].information,
        source.index,
        destination.index
      );
      // console.log(items);
      const newState = [...state];
      newState[sInd].information = items;
      // console.log('destination', newState[sInd].information[source.index]);
      // console.log('source', newState[dInd].information[destination.index]);
      setEditedData((prevState) => {
        prevState = {};
        prevState[newState[dInd].information[destination.index].match_id] = {
          court_id: newState[dInd].court,
          time:
            newState[dInd].information[destination.index].content
              .start_play_time,
        };
        prevState[newState[sInd].information[source.index].match_id] = {
          court_id: newState[sInd].court,
          time:
            newState[sInd].information[source.index].content.start_play_time,
        };
        return prevState;
      });
      // setEditedArray((prevState) => {
      //   prevState = newState[sInd].information;
      //   return prevState;
      // });
      // console.log(newState);
      setState(newState);
      console.log(state[sInd]);
      changeStateFunction(state, sInd, null);
    } else {
      const result = move(
        state[sInd].information,
        state[dInd].information,
        source,
        destination
      );
      // console.log(result[sInd]);
      const exampleState = [...state];
      // console.log(exampleState[sInd].information[source.index]);
      // console.log(exampleState[dInd].information[destination.index]);
      // setEditedData((prevState) => {
      //   prevState = {};
      //   prevState[
      //     exampleState[dInd].information[destination.index].match_id
      //   ] = {
      //     court_id: exampleState[dInd].court,
      //     time:
      //       exampleState[dInd].information[destination.index].content
      //         .start_play_time,
      //   };
      //   prevState[exampleState[sInd].information[source.index].match_id] = {
      //     court_id: exampleState[sInd].court,
      //     time:
      //       exampleState[sInd].information[source.index].content
      //         .start_play_time,
      //   };
      //   return prevState;
      // });
      exampleState[sInd].information = result[sInd];
      exampleState[dInd].information = result[dInd];
      // console.log(source);
      // console.log(destination);
      // console.log(exampleState[sInd].information);
      // console.log(exampleState[dInd].information);
      setEditedArray((prevState) => {
        prevState = {
          1: exampleState[sInd].information,
          2: exampleState[dInd].information,
        };
        return prevState;
      });
      changeStateFunction(state, sInd, dInd);
      // console.log(exampleState);
      // const newState = [...state];
      // newState[sInd].information = result[sInd].information;
      // newState[dInd].information = result[dInd].information;
      // console.log(newState);

      setState(exampleState);
    }
  }

  // useEffect(() => {
  //   if (editedData !== null) {
  //     console.log(editedData);
  //   }
  // }, [editedData]);

  // useEffect(() => {
  //   if (editedArray !== null) {
  //     console.log(editedArray);
  //   }
  // }, [editedArray]);

  // useEffect(() => {
  //   console.log(state);
  //   console.log(exampleState);
  // }, [state]);

  useEffect(() => {
    // console.log(dropdown1);
    if (eventPoolScheduleData !== null) {
      eventPoolScheduleData.schedule.map((data) => {
        if (data.id === dropdown1.id) {
          setState(data.courtsInfo);
        }
      });
    }
  }, [dropdown1, eventPoolScheduleData]);

  useEffect(() => {
    console.log(dropdown1);
  }, [dropdown1]);

  useEffect(() => {
    // console.log(eventPoolScheduleData);
    if (eventPoolScheduleData !== null) {
      if (eventPoolScheduleData.schedule.length !== 0) {
        setDropdown1({
          index: 0,
          id: eventPoolScheduleData.schedule[0].id,
          name: eventPoolScheduleData.schedule[0].name,
          gender: eventPoolScheduleData.schedule[0].gender,
          color: colors[0],
          match_time: eventPoolScheduleData.schedule[0].match_time,
          start_time: moment(eventPoolScheduleData.schedule[0].start_time, [
            "YYYY-MM-DD HH:mm:ss",
          ]).format("hh:mm a"),
        });
      }
    }
  }, [eventPoolScheduleData]);

  useEffect(() => {
    if (state !== null) {
      console.log(state);
    }
  }, [state]);

  const timeDots = (before, after) => {
    var format = "hh:mm a";

    const bef = moment(before).format("hh:mm a");
    const aft = moment(after).format("hh:mm a");

    // var time = moment() gives you current time. no format required.
    var time = moment(),
      beforeTime = moment(bef, format),
      afterTime = moment(aft, format);
    //console.log(beforeTime, afterTime);

    //console.log(beforeTime, afterTime);

    if (time.isBetween(beforeTime, afterTime)) {
      return <div className="dot bg-success"></div>;
    } else if (time.isBefore(beforeTime)) {
      return <div className="dot bg-warning"></div>;
    } else if (time.isAfter(afterTime)) {
      return <div className="dot bg-danger"></div>;
    }
  };
  const changeStateFunction = (state, sInd, dInd) => {
    if (state !== null) {
      // console.log(state);
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].information.length; j++) {
          if (j === 0) {
            // console.log(state[i].information[j]);

            setState((prevState) => {
              prevState[i].information[
                j
              ].content.start_play_time = moment(dropdown1.start_time, [
                "h:mm a",
              ]).format("YYYY-MM-DD HH:mm:ss");
              prevState[i].information[j].content.end_play_time = moment(
                moment(
                  prevState[i].information[j].content.start_play_time
                ).format("YYYY-MM-DD HH:mm:ss")
              )
                .add(prevState[i].information[j].content.diff, "minutes")
                .format("YYYY-MM-DD HH:mm:ss");
              if (sInd !== null && dInd === null) {
                // console.log(prevState[sInd]);
                setFinalArray(prevState[sInd]);
              } else if (sInd !== null && dInd !== null) {
                // console.log([prevState[sInd], prevState[dInd]]);
                setFinalArray([prevState[sInd], prevState[dInd]]);
              }
              return prevState;
            });
          }
          if (j !== 0) {
            // console.log(state[i].information[j].content.start_play_time);
            // console.log(state[i].information[j - 1].content.end_play_time);
            setState((prevState) => {
              prevState[i].information[j].content.start_play_time =
                prevState[i].information[j - 1].content.end_play_time;
              prevState[i].information[j].content.end_play_time = moment(
                moment(
                  prevState[i].information[j].content.start_play_time
                ).format("YYYY-MM-DD HH:mm:ss")
              )
                .add(prevState[i].information[j].content.diff, "minutes")
                .format("YYYY-MM-DD HH:mm:ss");

              // prevState[i].information[j].content.end_play_time =
              //   prevState[i].information[j - 1].content.end_play_time;
              if (sInd !== null && dInd === null) {
                // console.log(prevState[sInd]);
                setFinalArray(prevState[sInd]);
              } else if (sInd !== null && dInd !== null) {
                // console.log([prevState[sInd], prevState[dInd]]);
                setFinalArray([prevState[sInd], prevState[dInd]]);
              }
              return prevState;
            });
          }
        }
      }
      console.log(state);
    }
  };

  const [finalArray, setFinalArray] = useState(null);

  useEffect(() => {
    if (finalArray !== null) {
      if (!Array.isArray(finalArray)) {
        // console.log(finalArray);
        // console.log(JSON.stringify(finalArray));
        //getEventPoolSchedule(props.match.params.id);
        setFinalArray((prevState) => {
          //console.log(prevState);
          for (let i = 0; i < prevState.information.length; i++) {
            // let date = '2021-02-22';
            // console.log(
            //   date.concat(
            //     moment(prevState.information[i].content.start_play_time, [
            //       'h:mm A',
            //     ]).format('HH:mm')
            //   )
            // );
            // console.log(prevState.information[i]['content']);
            // console.log(prevState.court.toString());
            prevState.court = prevState.court.toString();
            // console.log(
            //   moment(prevState.information[i].content.start_play_time).format(
            //     'YYYY-MM-DD HH:mm:ss'
            //   )
            // );
            // console.log(
            //   moment(prevState.information[i].content.end_play_time).format(
            //     'YYYY-MM-DD HH:mm:ss'
            //   )
            // );
            prevState.information[i].content.start_play_time = moment(
              prevState.information[i].content.start_play_time
            ).format("YYYY-MM-DD HH:mm:ss");
            prevState.information[i].content.end_play_time = moment(
              prevState.information[i].content.end_play_time
            ).format("YYYY-MM-DD HH:mm:ss");
            //delete prevState.information[i]['content'];
          }

          console.log([].concat(prevState));
          console.log(dropdown1.index);
          getEventPoolScheduleLoading();
          setTimeout(() => {
            console.log(JSON.stringify([].concat(prevState)));
            editEventPoolSchedule(
              JSON.stringify([].concat(prevState)),
              props.match.params.id
            );
          }, [2000]);

          return prevState;
        });
      } else {
        setFinalArray((prevState) => {
          for (let i = 0; i < prevState.length; i++) {
            prevState[i].court = prevState[i].court.toString();
          }
          return prevState;
        });
        console.log(finalArray);
        console.log(JSON.stringify(finalArray));
        getEventPoolScheduleLoading();
        editEventPoolSchedule(
          JSON.stringify(finalArray),
          props.match.params.id
        );
      }
    }
  }, [finalArray]);

  // useEffect(() => {
  //   changeStateFunction(state);
  // }, [state]);

  const [colors, setColors] = useState([
    "#ff20f4",
    "#9f20ff",
    "#2092ff",
    "#20f6ff",
    "#20ffb7",
    "#91ff20",
    "#ff20f4",
    "#9f20ff",
    "#2092ff",
    "#20f6ff",
  ]);

  // useEffect(() => {
  //   var format = 'hh:mm a';

  //   const bef = moment('2021-03-31 10:00:00').format('hh:mm a');
  //   const aft = moment('2021-03-31 10:50:00').format('hh:mm a');

  //   // var time = moment() gives you current time. no format required.
  //   var time = moment(),
  //     beforeTime = moment(bef, format),
  //     afterTime = moment(aft, format);
  //   //console.log(beforeTime, afterTime);

  //   if (time.isBetween(beforeTime, afterTime)) {
  //     console.log('is between');
  //   } else if (time.isBefore(beforeTime)) {
  //     console.log('is before');
  //   } else if (time.isAfter(afterTime)) {
  //     console.log('is after');
  //   }
  // }, []);
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [liveScore, setLiveScore] = React.useState({});
  const [teameScores, setTeamScores] = React.useState({
    team1: 0,
    team2: 0,
  });

  const handleGetLiveScore = async (match_id, set) => {
    const response = await getLivescore(match_id, set);
    if (response?.status === 200) {
      console.log({
        hhabsjdb: response?.data?.liveScore?.team1_score,
      });
      setLiveScore(response?.data);
      setTeamScores({
        team2: response?.data?.liveScore?.team2_score,
        team1: response?.data?.liveScore?.team1_score,
      });

      setOpenFirst(true);
    }
  };
  const handleClickupdateTeamScore = (
    teamNo,
    type,
    data = {
      team1_score_incqty: 0,
      team1_score_decqty: 0,
      team2_score_incqty: 0,
      team2_score_decqty: 0,
    }
  ) => {
    let value = teameScores[teamNo];
    switch (type) {
      case "plus":
        value++;
        break;
      case "minus":
        value--;
        break;
    }
    setTeamScores({ ...teameScores, [teamNo]: value });
    console.log({ data });
    updateLivescore(
      liveScore?.liveScore?.match_id,
      liveScore?.liveScore?.set,
      data
    );
  };

  return (
    <div className="pools min-vh-100">
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>

          <li
            className="nav-item"
            onClick={() => props.history.push("/ScoresTable")}
          >
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={listIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      {eventPoolScheduleData === null || eventPollScheduleLoading ? (
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {/* header 2nd */}
          <div className="row header-2 p-0 m-0">
            <div className="col my-auto">
              <DatePicker
                format="DD/MM/YYYY"
                bordered={false}
                suffixIcon={<img src={calenderIconRight} alt="" />}
                className="pr-0 text-uppercase p-0 input-styling date_picker"
                allowClear={false}
                placeholder=""
                defaultValue={moment(new Date(), "DD/MM/YYYY")}
                // popupStyle={{height:467 , width:343}}
              />
            </div>
            <div className="col my-auto header-heading">
              {eventPoolScheduleData !== null &&
                eventPoolScheduleData.tournament_name}
            </div>

            {/* 3rd col */}
            <div className="col my-auto header-heading text-right">
              <div className="row p-0 m-0 mr-2">
                <div className="col-11 p-0 m-0">
                  <div
                    className="dot mr-2"
                    style={{ backgroundColor: dropdown1.color }}
                  ></div>{" "}
                  {dropdown1.name}
                </div>
                <div className="col-1 m-0 p-0">
                  {eventPoolScheduleData.schedule.length !== 0 && (
                    <PoolsScheduleDropdown>
                      {eventPoolScheduleData !== null &&
                        eventPoolScheduleData.schedule.map(
                          (individualSchedule, i) => (
                            <li
                              key={i}
                              onClick={() =>
                                setDropdown1({
                                  index: i,
                                  name: individualSchedule.name,
                                  id: individualSchedule.id,
                                  gender: individualSchedule.gender,
                                  color: colors[i],
                                  match_time: individualSchedule.match_time,
                                  start_time: moment(
                                    individualSchedule.start_time
                                  ).format("hh:mm a"),
                                })
                              }
                            >
                              <div className="row p-0 m-0">
                                <div className="col-2 m-0 p-0">
                                  <div
                                    className="dot mr-1"
                                    style={{ backgroundColor: colors[i % 10] }}
                                  ></div>
                                </div>
                                <div className="col-10 m-0 p-0">
                                  {individualSchedule.name}
                                </div>
                              </div>
                            </li>
                          )
                        )}
                    </PoolsScheduleDropdown>
                  )}
                </div>
              </div>
            </div>
          </div>
          {eventPoolScheduleData.schedule.length === 0 ? (
            <h3 className="text-center mt-4" style={{ color: "#ff2072" }}>
              No Data to be Displayed
            </h3>
          ) : (
            <div className="table-responsive">
              <div
                className="p-0 header-2"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {state !== null &&
                  state.map((el, ind) => (
                    <div
                      className="p-0 text-center my-auto"
                      style={{ minWidth: 220 }}
                      key={ind}
                      onClick={() => console.log(el)}
                    >
                      COURT {el.court}
                    </div>
                  ))}
              </div>
              <div
                className=" p-0 m-0"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <DragDropContext onDragEnd={onDragEnd}>
                  {state !== null &&
                    state.map((el, ind) => (
                      <Droppable key={ind} droppableId={`${ind}`}>
                        {(provided, snapshot) => (
                          <div
                            className="min-vh-100"
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                          >
                            {el.information.map((item, index) => (
                              <Draggable
                                key={item.match_id.toString()}
                                draggableId={item.match_id.toString()}
                                index={index}
                                disableInteractiveElementBlocking={false}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <div className=" p-0">
                                      <div className="row p-0 m-0">
                                        <div
                                          className="col-12 p-1"
                                          // style={{ height: 182 }}
                                        >
                                          <div
                                            className="card"
                                            // style={{ height: 182 }}
                                          >
                                            <div
                                              className="card-header header-bg pl-1 p-0"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                              }}
                                            >
                                              <div
                                                className="my-auto"
                                                style={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  justifyContent: "flex-start",
                                                  alignItems: "center",
                                                }}
                                              >
                                                <div>
                                                  {moment(
                                                    item.content.start_play_time
                                                  ).format("hh:mm a")}
                                                  {/* {item.content.start_play_time} */}
                                                </div>
                                                <div className="mt-1">
                                                  <PoolsDropdown>
                                                    <li
                                                      onClick={() => {
                                                        setState(
                                                          (prevState) => {
                                                            prevState[
                                                              ind
                                                            ].information[
                                                              index
                                                            ].content.diff =
                                                              prevState[ind]
                                                                .information[
                                                                index
                                                              ].content.diff +
                                                              10;
                                                            return prevState;
                                                          }
                                                        );
                                                        setTimeout(() => {
                                                          changeStateFunction(
                                                            state,
                                                            ind,
                                                            null
                                                          );
                                                        }, 2000);
                                                      }}
                                                    >
                                                      10
                                                    </li>
                                                    <li
                                                      onClick={() => {
                                                        setState(
                                                          (prevState) => {
                                                            prevState[
                                                              ind
                                                            ].information[
                                                              index
                                                            ].content.diff =
                                                              prevState[ind]
                                                                .information[
                                                                index
                                                              ].content.diff +
                                                              20;
                                                            return prevState;
                                                          }
                                                        );
                                                        setTimeout(() => {
                                                          changeStateFunction(
                                                            state,
                                                            ind,
                                                            null
                                                          );
                                                        }, 2000);
                                                      }}
                                                    >
                                                      20
                                                    </li>
                                                    <li
                                                      onClick={() => {
                                                        setState(
                                                          (prevState) => {
                                                            prevState[
                                                              ind
                                                            ].information[
                                                              index
                                                            ].content.diff =
                                                              prevState[ind]
                                                                .information[
                                                                index
                                                              ].content.diff +
                                                              30;
                                                            return prevState;
                                                          }
                                                        );
                                                        setTimeout(() => {
                                                          changeStateFunction(
                                                            state,
                                                            ind,
                                                            null
                                                          );
                                                        }, 2000);
                                                      }}
                                                    >
                                                      30
                                                    </li>
                                                    <li
                                                      onClick={() => {
                                                        setState(
                                                          (prevState) => {
                                                            prevState[
                                                              ind
                                                            ].information[
                                                              index
                                                            ].content.diff =
                                                              prevState[ind]
                                                                .information[
                                                                index
                                                              ].content.diff +
                                                              40;
                                                            return prevState;
                                                          }
                                                        );
                                                        setTimeout(() => {
                                                          changeStateFunction(
                                                            state,
                                                            ind,
                                                            null
                                                          );
                                                        }, 2000);
                                                      }}
                                                    >
                                                      40
                                                    </li>
                                                  </PoolsDropdown>
                                                </div>
                                              </div>
                                              <div></div>
                                              <div
                                                className="mr-1"
                                                style={{ alignSelf: "center" }}
                                              >
                                                {timeDots(
                                                  item.content.start_play_time,
                                                  item.content.end_play_time
                                                )}
                                              </div>
                                            </div>
                                            <div className="card-body p-0">
                                              <div
                                                className="row m-0 h-100"
                                                style={{ minHeight: 130 }}
                                              >
                                                <div
                                                  className={`col-2 p-0 body-left text-center`}
                                                  style={{
                                                    backgroundColor:
                                                      dropdown1.gender ===
                                                        "Mens" ||
                                                      dropdown1.gender ===
                                                        "Boys"
                                                        ? "#ffd420"
                                                        : dropdown1.gender ===
                                                            "Womens" ||
                                                          dropdown1.gender ===
                                                            "Girls"
                                                        ? "#4a4a4a"
                                                        : "#f7981f",
                                                  }}
                                                >
                                                  <div
                                                    className="h-100"
                                                    style={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      justifyContent: "center",
                                                    }}
                                                  >
                                                    {item.content.game}
                                                  </div>
                                                </div>
                                                <div className="col-10 p-0 body-right">
                                                  <div
                                                    className="h-100"
                                                    style={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      justifyContent:
                                                        "space-around",
                                                    }}
                                                  >
                                                    <div className="body-right-text pt-2 px-1">
                                                      <div className="row m-0 p-0 w-100">
                                                        <div className="col-3 m-0 p-0 text-center">
                                                          {item.content
                                                            .profile_pics1 !==
                                                            null &&
                                                            item.content.profile_pics1.map(
                                                              (
                                                                imageSrc,
                                                                imgIndex
                                                              ) => (
                                                                <img
                                                                  key={imgIndex}
                                                                  src={`${process.env.REACT_APP_PLAYER_COURT_URL}${imageSrc}`}
                                                                  onError={(
                                                                    e
                                                                  ) =>
                                                                    (e.target.src = profilePic)
                                                                  }
                                                                  className="card-img mr-1"
                                                                  alt=""
                                                                />
                                                              )
                                                            )}
                                                        </div>
                                                        <div className="col-1 m-0 p-0">
                                                          <div>
                                                            {
                                                              item.content
                                                                .team1_rank
                                                            }
                                                          </div>
                                                        </div>
                                                        <div className="col-7 m-0 p-0">
                                                          <div>
                                                            {
                                                              item.content
                                                                .team1_name
                                                            }
                                                            {/* {item.content.team1_name.substring(
                                                              0,
                                                              15
                                                            ) + '...'} */}
                                                            {/* {item.content.team1_name} */}
                                                          </div>
                                                        </div>
                                                        <div className="col-1 m-0 p-0">
                                                          <div>
                                                            {
                                                              item.content
                                                                .team1_winning_count
                                                            }
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="body-right-text py-2 px-1">
                                                      <div className="row m-0 p-0 w-100">
                                                        <div className="col-3 m-0 p-0 text-center">
                                                          {item.content
                                                            .profile_pics2 !==
                                                            null &&
                                                            item.content.profile_pics2.map(
                                                              (
                                                                imageSrc,
                                                                imgIndex
                                                              ) => (
                                                                <img
                                                                  key={imgIndex}
                                                                  src={`${process.env.REACT_APP_PLAYER_COURT_URL}${imageSrc}`}
                                                                  onError={(
                                                                    e
                                                                  ) =>
                                                                    (e.target.src = profilePic)
                                                                  }
                                                                  className="card-img mr-1"
                                                                  alt=""
                                                                />
                                                              )
                                                            )}
                                                        </div>
                                                        <div className="col-1 m-0 p-0">
                                                          {
                                                            item.content
                                                              .team2_rank
                                                          }
                                                        </div>
                                                        <div className="col-7 m-0 p-0">
                                                          {
                                                            item.content
                                                              .team2_name
                                                          }
                                                          {/* {item.content.team2_name.substring(
                                                            0,
                                                            15
                                                          ) + '...'} */}
                                                          {/* {item.content.team2_name} */}
                                                        </div>
                                                        <div className="col-1 m-0 p-0">
                                                          {
                                                            item.content
                                                              .team2_winning_count
                                                          }
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* <div
                                                    className="body-right-text bg-warning"
                                                    style={{
                                                      height:
                                                        item.content.diff ===
                                                        dropdown1.match_time
                                                          ? 0
                                                          : item.content
                                                              .diff ===
                                                            dropdown1.match_time +
                                                              10
                                                          ? 10
                                                          : item.content
                                                              .diff ===
                                                            dropdown1.match_time +
                                                              20
                                                          ? 20
                                                          : 30,
                                                    }}
                                                    onClick={() =>
                                                      console.log(
                                                        item.content.diff
                                                      )
                                                    }
                                                  ></div> */}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="row p-0 m-0"
                                                style={{
                                                  height:
                                                    item.content.diff ===
                                                    dropdown1.match_time
                                                      ? 0
                                                      : item.content.diff ===
                                                        dropdown1.match_time +
                                                          10
                                                      ? 10
                                                      : item.content.diff ===
                                                        dropdown1.match_time +
                                                          20
                                                      ? 20
                                                      : 30,
                                                }}
                                              >
                                                <div
                                                  className="col-2"
                                                  style={{
                                                    backgroundColor:
                                                      dropdown1.gender ===
                                                        "Mens" ||
                                                      dropdown1.gender ===
                                                        "Boys"
                                                        ? "#ffd420"
                                                        : dropdown1.gender ===
                                                            "Womens" ||
                                                          dropdown1.gender ===
                                                            "Girls"
                                                        ? "#4a4a4a"
                                                        : "#f7981f",
                                                  }}
                                                ></div>
                                                <div className="col-10 bg-danger"></div>
                                              </div>
                                            </div>
                                            {console.log({ jhhajsd: el })}
                                            {/* <div className="row p-0 m-0">
                                            <div className="col-12">Hey</div>
                                          </div> */}
                                            <div className="card-footer p-0">
                                              <div className="row m-0 p-0">
                                                <div className="col-2 p-0 footer-left pt-2">
                                                  REF
                                                </div>
                                                <div className="col-10 p-0 footer-right px-1 pt-1">
                                                  {
                                                    item.content
                                                      .reffing_team_rank
                                                  }{" "}
                                                  {item.content.reffing_team}
                                                  <button
                                                    className="live-btn float-right"
                                                    onClick={() =>
                                                      handleGetLiveScore(
                                                        item?.match_id,
                                                        el?.court
                                                      )
                                                    }
                                                  >
                                                    Live score
                                                  </button>
                                                  <Modal
                                                    open={openFirst}
                                                    onClose={() =>
                                                      setOpenFirst(false)
                                                    }
                                                    center
                                                    styles={{
                                                      modal: {
                                                        borderRadius: 12,
                                                        background: "#EEE",
                                                      },
                                                    }}
                                                  >
                                                    <h3>Match #4</h3>
                                                    <div
                                                      className="text-center"
                                                      style={{
                                                        marginTop: 0,
                                                        fontFamily: "Futura",
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        fontStretch: "normal",
                                                        fontStyle: "normal",
                                                        letterSpacing: "normal",
                                                        color: "#4a4a4a",
                                                      }}
                                                    >
                                                      Copy this URL into your
                                                      streaming software (like
                                                      OBS to add a live-updating
                                                      scorebaord to the stream)
                                                    </div>
                                                    <p
                                                      className="text-center"
                                                      style={{
                                                        marginTop: 8,
                                                        fontFamily: "Futura",
                                                        fontWeight: "bold",
                                                        fontStretch: "normal",
                                                        fontStyle: "normal",
                                                        letterSpacing: "normal",
                                                        color: "#9b9b9b",
                                                      }}
                                                    >
                                                      <input
                                                        type="text"
                                                        style={{
                                                          border:
                                                            "1px solid #000",
                                                          color: "#9b9b9b",
                                                        }}
                                                        defaultValue="https://live.bracketpal.com/streaming/match_YFtut"
                                                        className="form-control"
                                                      />
                                                    </p>
                                                    <div
                                                      className="row container"
                                                      style={{ marginTop: 79 }}
                                                    >
                                                      <div className="col-12 text-center m-auto">
                                                        <button
                                                          type="button"
                                                          className="btn-sm ml-5"
                                                          onClick={() => {
                                                            setOpenSecond(true);
                                                            setOpenFirst(false);
                                                          }}
                                                          style={{
                                                            border:
                                                              "1px solid yellow",
                                                            borderRadius: 15,
                                                            width: 112,
                                                            height: 30,
                                                            backgroundColor:
                                                              "#ffd420",
                                                            outline: 0,
                                                          }}
                                                        >
                                                          OK
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </Modal>
                                                  <Modal
                                                    open={openSecond}
                                                    onClose={() =>
                                                      setOpenSecond(false)
                                                    }
                                                    center
                                                    styles={{
                                                      modal: {
                                                        borderRadius: 12,
                                                        background: "#EEE",
                                                      },
                                                    }}
                                                  >
                                                    <h4>Game ScoreSheet</h4>
                                                    <div
                                                      className="text-center"
                                                      style={{
                                                        marginTop: 0,
                                                        fontFamily: "Futura",
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        fontStretch: "normal",
                                                        fontStyle: "normal",
                                                        letterSpacing: "normal",
                                                        color: "#4a4a4a",
                                                      }}
                                                    >
                                                      <div className="row mt-4 mb-2">
                                                        <div className="col">
                                                          <h5>Brammer/Conno</h5>
                                                        </div>
                                                        <div className="col">
                                                          <h5>Ripley/Conno</h5>
                                                        </div>
                                                      </div>
                                                      <div className="row">
                                                        <div className="col">
                                                          <button
                                                            type="button"
                                                            className="btn up-btn"
                                                            onClick={() => {
                                                              handleClickupdateTeamScore(
                                                                "team1",
                                                                "plus",
                                                                {
                                                                  team1_score_incqty: 1,
                                                                }
                                                              );
                                                            }}
                                                          >
                                                            <img
                                                              alt="upicon"
                                                              src={upIcon}
                                                            />
                                                          </button>
                                                        </div>
                                                        <div className="col">
                                                          <button
                                                            type="button"
                                                            className="btn up-btn"
                                                            onClick={() => {
                                                              handleClickupdateTeamScore(
                                                                "team2",
                                                                "plus",
                                                                {
                                                                  team2_score_incqty: 1,
                                                                }
                                                              );
                                                            }}
                                                          >
                                                            <img
                                                              alt="upicon"
                                                              src={upIcon}
                                                            />
                                                          </button>
                                                        </div>
                                                      </div>

                                                      <div className="row mt-3">
                                                        <div className="col">
                                                          <h3>
                                                            {teameScores.team1}
                                                          </h3>
                                                        </div>
                                                        <div className="col">
                                                          <h3>
                                                            {teameScores.team2}
                                                          </h3>
                                                        </div>
                                                      </div>

                                                      <div className="row ">
                                                        <div className="col">
                                                          <button
                                                            type="button"
                                                            className="btn down-btn"
                                                            onClick={() => {
                                                              handleClickupdateTeamScore(
                                                                "team1",
                                                                "minus",
                                                                {
                                                                  team1_score_decqty: 1,
                                                                }
                                                              );
                                                            }}
                                                          >
                                                            <img
                                                              alt="downicon"
                                                              src={downIcon}
                                                            />
                                                          </button>
                                                        </div>
                                                        <div className="col">
                                                          <button
                                                            type="button"
                                                            className="btn down-btn"
                                                            onClick={() => {
                                                              handleClickupdateTeamScore(
                                                                "team2",
                                                                "minus",
                                                                {
                                                                  team2_score_decqty: 1,
                                                                }
                                                              );
                                                            }}
                                                          >
                                                            <img
                                                              alt="downicon"
                                                              src={downIcon}
                                                            />
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <p
                                                      className="text-center"
                                                      style={{
                                                        marginTop: 8,
                                                        fontFamily: "Futura",
                                                        fontWeight: "bold",
                                                        fontStretch: "normal",
                                                        fontStyle: "normal",
                                                        letterSpacing: "normal",
                                                        color: "#9b9b9b",
                                                      }}
                                                    ></p>
                                                    <div
                                                      className="row container"
                                                      style={{ marginTop: 50 }}
                                                    >
                                                      <div className="col-12 text-center m-auto">
                                                        <button
                                                          type="button"
                                                          className="btn-md ml-3"
                                                          onClick={() =>
                                                            setOpenSecond(false)
                                                          }
                                                          style={{
                                                            border:
                                                              "1px solid yellow",
                                                            borderRadius: 15,
                                                            width: 112,
                                                            height: 30,
                                                            backgroundColor:
                                                              "#ffd420",
                                                            outline: 0,
                                                          }}
                                                        >
                                                          UPDATE
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </Modal>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    ))}
                </DragDropContext>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PoolsScreen;
