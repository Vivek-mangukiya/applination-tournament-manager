import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/header/Header";
import "./PoolsScreen.css";
import backIcon from "../../assets/images/icon-menu-back.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import profilePic from "../../assets/images/profilepic.jpg";
import orangedownarrow from "../../assets/images/icon-filter-arrow.svg";
import orangeuparrow from "../../assets/images/orange-up-arrow.png";
import greyuparrow from "../../assets/images/orange-up-arrow-grey.png";
import greydownarrow from "../../assets/images/grey-down-arrow.png";
import PoolsContext from "../../context/pools/poolsContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PoolsDropdown from "./PoolsDropdown";
import PoolsScheduleDropdown from "./PoolsScheduleDropdown";

const imagesPath = {
  orange: orangedownarrow,
  white: orangeuparrow,
  greyup: greyuparrow,
  greydown: greydownarrow,
};

const PoolsSummary = (props) => {
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState("Bronze");

  const [dummyData, setDummyData] = useState(null);

  const poolsContext = useContext(PoolsContext);
  const { getAllPools, poolListData } = poolsContext;

  useEffect(() => {
    //call at starting
    getAllPools(props.location);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let poolNameList = [];
    let poolName = [];
    if (poolListData !== null && dropdown1 !== null) {
      console.log("data : " + poolListData.summary);

      poolListData.summary.map((list, index) => {
        if (dropdown1.id === list.id) {
          Object.keys(list).map((pool, index) => {
            if (pool !== "div_name" && pool !== "id") {
              console.log(pool, list[pool].players);
              poolName.push(pool);
              poolNameList.push([...list[pool].players]);

              setCommonState((prevState) => ({
                ...prevState,
                poolListData: poolNameList,
                poolNames: poolName,
              }));
            }
          });
        }
      });

      // console.log('POOL LIST DATA', poolListData);
      // console.log('MANAGER LIST DATA', poolListData);
      // console.log(dropdown1);
      // poolListData.summary.map((summaryInfo, i) => {
      //   if (dropdown1.id === summaryInfo.id) {
      //     setCommonState((prevState) => ({
      //       ...prevState,
      //       poolListData: summaryInfo.players,
      //     }));
      //   }
      // });

      // setCommonState((prevState) => ({
      //   ...prevState,
      //   poolListData: poolListData,
      // }));
    }
  }, [poolListData, dropdown1]);

  // useEffect(() => {
  //   console.log(dropdown1);
  //   dummyData.summary.map((summaryInfo, i) => {
  //     if (dropdown1.id === summaryInfo.id) {
  //       setCommonState((prevState) => ({
  //         ...prevState,
  //         poolListData: summaryInfo.players,
  //       }));
  //     }
  //   });
  // }, [dropdown1]);

  console.log(dummyData);

  useEffect(() => {
    if (poolListData !== null && poolListData.summary.length > 0) {
      setDropdown1({
        name: poolListData.summary[0].div_name,
        id: poolListData.summary[0].id,
        color: colors[0],
      });
    }
  }, [poolListData]);

  const [commonState, setCommonState] = useState(() => {
    let TrueArray = [];
    let FalseArray = [];
    let searchValues = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < 100; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
      searchValues.push("");
    }

    return {
      // PlayerListItemData:poolListData,
      poolListData: [],
      poolNames: [],
      searchedItem: searchValues,
      FNsortType: TrueArray,
      LNsortType: TrueArray,
      IDsortType: TrueArray,
      PointssortType: TrueArray,
      LocsortType: TrueArray,
      StatussortType: TrueArray,
      MatchWinPercentsortType: TrueArray,
      PointsForsortType: TrueArray,
      AgainstsortType: TrueArray,
      PointPercentsortType: TrueArray,
      RankType: TrueArray,
      FNopen: TrueArray,
      LNopen: TrueArray,
      IDopen: TrueArray,
      Pointsopen: TrueArray,
      Locopen: TrueArray,
      Statusopen: TrueArray,
      MatchWinPercentopen: TrueArray,
      PointsForopen: TrueArray,
      Againstopen: TrueArray,
      PointPercentopen: TrueArray,
      Rankopen: TrueArray,
      FNclicked: FalseArray,
      LNclicked: FalseArray,
      IDclicked: FalseArray,
      Pointsclicked: FalseArray,
      Locclicked: FalseArray,
      Statusclicked: FalseArray,
      MatchWinPercentclicked: FalseArray,
      PointsForclicked: FalseArray,
      Againstclicked: FalseArray,
      PointPercentclicked: FalseArray,
      Rankclicked: FalseArray,
    };
  });

  const onFNSort = (FNsortType, index) => {
    let fn = [...commonState.FNsortType];
    fn[index] = !FNsortType;
    let fnOpen = commonState.FNopen;
    fnOpen[index] = !commonState.FNopen[index];
    let FnClick = commonState.FNclicked;
    FnClick[index] = true;

    console.log(fn, commonState.FNsortType);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let matchWinClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    // lnClick[index] = false;
    // idClick[index] = false;
    // pointsClick[index] =false
    // locClick[index] =  false
    // statusClick[index] =  false
    // matchWinClick[index] = false
    // pointsForClick[index] =  false
    // againClick[index] = false
    // pointPerClick[index] =  false
    // rankClick[index] = false

    setCommonState((prevState) => ({
      ...prevState,
      FNsortType: fn,
      FNopen: fnOpen,
      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onLNSort = (LNsortType, index) => {
    let ln = [...commonState.LNsortType];
    ln[index] = !LNsortType;
    let lnOpen = commonState.LNopen;
    lnOpen[index] = !commonState.LNopen[index];
    let lnClick = commonState.LNclicked;
    lnClick[index] = true;

    console.log(ln, commonState.LNsortType);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let matchWinClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,
      LNsortType: ln,
      LNopen: lnOpen,
      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onIDSort = (IDsortType, index) => {
    let id = [...commonState.IDsortType];
    id[index] = !IDsortType;
    let idOpen = commonState.IDopen;
    idOpen[index] = !commonState.IDopen[index];
    let idClick = commonState.IDclicked;
    idClick[index] = true;

    console.log(id, commonState.IDsortType);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let pointsClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let matchWinClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,
      IDsortType: id,
      IDopen: idOpen,
      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onPointsSort = (PointssortType, index) => {
    let points = [...commonState.PointssortType];
    points[index] = !PointssortType;
    let pointsOpen = commonState.Pointsopen;
    pointsOpen[index] = !commonState.Pointsopen[index];
    let pointsClick = commonState.Pointsclicked;
    pointsClick[index] = true;

    console.log(points, commonState.PointssortType);
    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let matchWinClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,
      PointssortType: points,
      Pointsopen: pointsOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onLocSort = (LocsortType, index) => {
    let loc = [...commonState.LocsortType];
    loc[index] = !LocsortType;
    let locOpen = commonState.Locopen;
    locOpen[index] = !commonState.Locopen[index];
    let locClick = commonState.Locclicked;
    locClick[index] = true;

    console.log(loc, commonState.LocsortType);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let statusClick = FalseArray;
    let matchWinClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,

      LocsortType: loc,
      Locopen: locOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onStatusSort = (StatussortType, index) => {
    let status = [...commonState.StatussortType];
    status[index] = !StatussortType;
    let statusOpen = commonState.Statusopen;
    statusOpen[index] = !commonState.Statusopen[index];
    let statusClick = commonState.Statusclicked;
    statusClick[index] = true;
    console.log(status, commonState.StatussortType);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let locClick = FalseArray;
    let matchWinClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,
      StatussortType: status,
      Statusopen: statusOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onMatchWinPercentSort = (MatchWinPercentsortType, index) => {
    let matchWin = [...commonState.MatchWinPercentsortType];
    matchWin[index] = !MatchWinPercentsortType;
    let matchWinOpen = commonState.MatchWinPercentopen;
    matchWinOpen[index] = !commonState.MatchWinPercentopen[index];
    let matchWinClick = commonState.MatchWinPercentclicked;
    matchWinClick[index] = true;
    console.log(matchWin, commonState.MatchWinPercentclicked);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let pointsForClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,

      MatchWinPercentsortType: matchWin,
      MatchWinPercentopen: matchWinOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onPointsForSort = (PointsForsortType, index) => {
    let pointsFor = [...commonState.PointsForsortType];
    pointsFor[index] = !PointsForsortType;
    let pointsForOpen = commonState.PointsForopen;
    pointsForOpen[index] = !commonState.PointsForopen[index];
    let pointsForClick = commonState.PointsForclicked;
    pointsForClick[index] = true;
    console.log(commonState.PointsForclicked);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let matchWinClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let againClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;

    setCommonState((prevState) => ({
      ...prevState,
      PointsForsortType: pointsFor,
      PointsForopen: pointsForOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onAgainstSort = (AgainstsortType, index) => {
    let against = [...commonState.AgainstsortType];
    against[index] = !AgainstsortType;
    let againstOpen = commonState.Againstopen;
    againstOpen[index] = !commonState.Againstopen[index];
    let againstClick = commonState.Againstclicked;
    againstClick[index] = true;
    console.log(againstClick, commonState.PointsForclicked);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let matchWinClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let pointsForClick = FalseArray;
    let pointPerClick = FalseArray;
    let rankClick = FalseArray;
    setCommonState((prevState) => ({
      ...prevState,

      AgainstsortType: against,
      Againstopen: againstOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againstClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onPointPercentSort = (PointPercentsortType, index) => {
    let pointsPer = [...commonState.PointPercentsortType];
    pointsPer[index] = !PointPercentsortType;
    let pointsPerOpen = commonState.PointPercentopen;
    pointsPerOpen[index] = !commonState.PointPercentopen[index];
    let pointPerClick = commonState.PointPercentclicked;
    pointPerClick[index] = true;
    console.log(pointPerClick, commonState.PointsForclicked);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let matchWinClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let pointsForClick = FalseArray;
    let againstClick = FalseArray;
    let rankClick = FalseArray;
    setCommonState((prevState) => ({
      ...prevState,
      PointPercentsortType: pointsPer,
      PointPercentopen: pointsPerOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againstClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const onRankSort = (RankType, index) => {
    let rank = [...commonState.RankType];
    rank[i] = !RankType;
    let rankOpen = commonState.Rankopen;
    rankOpen[index] = !commonState.Rankopen[index];
    let rankClick = commonState.Rankclicked;
    rankClick[index] = true;
    console.log(rankClick, commonState.PointsForclicked);

    let TrueArray = [];
    let FalseArray = [];
    let len =
      poolListData !== undefined &&
      poolListData !== null &&
      poolListData.summary !== null &&
      poolListData.summary !== undefined
        ? poolListData.summary.length
        : 0;

    console.log(len);
    for (var i = 0; i < len; i++) {
      TrueArray.push(true);
      FalseArray.push(false);
    }

    let FnClick = FalseArray;
    let lnClick = FalseArray;
    let idClick = FalseArray;
    let pointsClick = FalseArray;
    let matchWinClick = FalseArray;
    let locClick = FalseArray;
    let statusClick = FalseArray;
    let pointsForClick = FalseArray;
    let againstClick = FalseArray;
    let pointPerClick = FalseArray;
    setCommonState((prevState) => ({
      ...prevState,
      RankType: !RankType,
      Rankopen: !commonState.Rankopen,
      MatchWinPercentclicked: false,
      Statusclicked: false,
      FNclicked: false,
      LNclicked: false,
      IDclicked: false,
      Pointsclicked: false,
      Locclicked: false,
      PointsForclicked: false,
      Againstclicked: false,
      PointPercentclicked: false,
      Rankclicked: true,

      RankType: rank,
      Rankopen: rankOpen,

      FNclicked: FnClick,
      LNclicked: lnClick,
      IDclicked: idClick,
      Pointsclicked: pointsClick,
      Locclicked: locClick,
      Statusclicked: statusClick,
      MatchWinPercentclicked: matchWinClick,
      PointsForclicked: pointsForClick,
      Againstclicked: againstClick,
      PointPercentclicked: pointPerClick,
      Rankclicked: rankClick,
    }));
  };

  const getFNImageName = (index) => {
    if (commonState.FNclicked[index] === true) {
      if (commonState.FNopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getLocImageName = (index) => {
    if (commonState.Locclicked[index] === true) {
      if (commonState.Locopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getLNImageName = (index) => {
    if (commonState.LNclicked[index] === true) {
      if (commonState.LNopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getIDImageName = (index) => {
    if (commonState.IDclicked[index] === true) {
      if (commonState.IDopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getPointsImageName = (index) => {
    if (commonState.Pointsclicked[index] === true) {
      if (commonState.Pointsopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getStatusImageName = (index) => {
    if (commonState.Statusclicked[index] === true) {
      if (commonState.Statusopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getMatchWinPercentImageName = (index) => {
    if (commonState.MatchWinPercentclicked[index] === true) {
      if (commonState.MatchWinPercentopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };

  const getPointsForImageName = (index) => {
    if (commonState.PointsForclicked[index] === true) {
      if (commonState.PointsForopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };

  const getAgainstImageName = (index) => {
    if (commonState.Againstclicked[index] === true) {
      if (commonState.Againstopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };

  const getPointPercentImageName = (index) => {
    if (commonState.PointPercentclicked[index] === true) {
      if (commonState.PointPercentopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };
  const getRankImageName = (index) => {
    if (commonState.Rankclicked[index] === true) {
      if (commonState.Rankopen[index] === true) {
        return "orange";
      }
      return "white";
    } else {
      return "greydown";
    }
  };

  const LNimageName = getLNImageName();
  const LocimageName = getLocImageName();
  const IDimageName = getIDImageName();
  const PointsimageName = getPointsImageName();
  const FNimageName = getFNImageName();
  const StatusimageName = getStatusImageName();
  const MatchWinPercentimageName = getMatchWinPercentImageName();
  const PointsForimageName = getPointsForImageName();
  const AgainstimageName = getAgainstImageName();
  const PointPercentimageName = getPointPercentImageName();
  const RankimageName = getRankImageName();

  let options = commonState.poolListData;
  commonState.poolListData.map((values, i) => {
    console.log(commonState.searchedItem[i]);
    if (
      commonState.searchedItem[i].length &&
      commonState.searchedItem[i][0] !== ""
    ) {
      let s = commonState.poolListData[i].filter((data) => {
        const regExp = new RegExp(
          commonState.searchedItem[i].map((term) => `(?=.*${term})`).join(""),
          "i"
        );
        console.log("MATCH", data.team_name);
        return (
          data !== null &&
          ((data.team_name !== null &&
            data.team_name.toString().match(regExp)) ||
            (data.rank !== null && data.rank.toString().match(regExp)) ||
            (data.match_wins !== null &&
              data.match_wins.toString().match(regExp)) ||
            (data.match_losses !== null &&
              data.match_losses.toString().match(regExp)) ||
            (data.game_win_percent !== null &&
              data.game_win_percent.toString().match(regExp)) ||
            (data.game_wins !== null &&
              data.game_wins.toString().match(regExp)) ||
            (data.game_losses !== null &&
              data.game_losses.toString().match(regExp)) ||
            (data.match_win_percent !== null &&
              data.match_win_percent.toString().match(regExp)) ||
            (data.points_for !== null &&
              data.points_for.toString().match(regExp)) ||
            (data.against !== null && data.against.toString().match(regExp)) ||
            (data.point_percent !== null &&
              data.point_percent.toString().match(regExp)))
        );
      });

      options[i] = s;
    } else {
      options[i] = commonState.poolListData[i];
    }
  });

  let sortedList;
  let {
    FNsortType,
    LNsortType,
    IDsortType,
    PointssortType,
    LocsortType,
    StatussortType,
    MatchWinPercentsortType,
    PointsForsortType,
    AgainstsortType,
    PointPercentsortType,
    RankType,
  } = commonState;

  let len = options.length;
  sortedList = options;
  console.log(len, sortedList);

  for (var i = 0; i < len; i = i + 1) {
    if (FNsortType[i] === true && commonState.FNclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort((a, b) =>
        a.team_name.localeCompare(b.team_name)
      );
      sortedList[i] = sorted;
    }

    if (FNsortType[i] === false && commonState.FNclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => -1 * a.team_name.localeCompare(b.team_name)
      );
      sortedList[i] = sorted;
    }

    if (RankType[i] === true && commonState.Rankclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          (a.rank === null
            ? "null".match(/\d+/)
            : a.rank.toString().match(/\d+/)) -
          (b.rank === null
            ? "null".match(/\d+/)
            : b.rank.toString().match(/\d+/))
      );
      sortedList[i] = sorted;
    }
    if (RankType[i] === false && commonState.Rankclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          (b.rank === null
            ? "null".match(/\d+/)
            : b.rank.toString().match(/\d+/)) -
          (a.rank === null
            ? "null".match(/\d+/)
            : a.rank.toString().match(/\d+/))
      );
      sortedList[i] = sorted;
    }
  }
  for (var i = 0; i < len; i = i + 1) {
    if (LNsortType[i] === true && commonState.LNclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          a.match_wins.toString().match(/\d+/) -
          b.match_wins.toString().match(/\d+/)
      );
      sortedList[i] = sorted;
    }
    if (LNsortType[i] === false && commonState.LNclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          b.match_wins.toString().match(/\d+/) -
          a.match_wins.toString().match(/\d+/)
      );
      sortedList[i] = sorted;
    }

    if (IDsortType[i] === true && commonState.IDclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          a.match_losses.toString().match(/\d+/) -
          b.match_losses.toString().match(/\d+/)
      );
      sortedList[i] = sorted;
    }
    if (IDsortType[i] === false && commonState.IDclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          b.match_losses.toString().match(/\d+/) -
          a.match_losses.toString().match(/\d+/)
      );
      sortedList[i] = sorted;
    }
  }

  for (var i = 0; i < len; i = i + 1) {
    if (PointssortType[i] === true && commonState.Pointsclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          a.match_win_percent.match(/\d+/) - b.match_win_percent.match(/\d+/)
      );
      sortedList[i] = sorted;
    }
    if (PointssortType[i] === false && commonState.Pointsclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          b.match_win_percent.match(/\d+/) - a.match_win_percent.match(/\d+/)
      );
      sortedList[i] = sorted;
    }

    if (LocsortType[i] === true && commonState.Locclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort((a, b) => a.game_wins - b.game_wins);
      sortedList[i] = sorted;
    }
    if (LocsortType[i] === false && commonState.Locclicked === true) {
      sortedList = options;
      let sorted = options[i].sort((a, b) => b.game_wins - a.game_wins);
      sortedList[i] = sorted;
    }
  }

  for (var i = 0; i < len; i = i + 1) {
    if (StatussortType[i] === true && commonState.Statusclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort((a, b) => a.game_losses - b.game_losses);
      sortedList[i] = sorted;
    }
    if (StatussortType[i] === false && commonState.Statusclicked === true) {
      sortedList = options;
      let sorted = options[i].sort((a, b) => b.game_losses - a.game_losses);
      sortedList[i] = sorted;
    }
    if (
      MatchWinPercentsortType[i] === true &&
      commonState.MatchWinPercentclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          a.game_win_percent.match(/\d+/) - b.game_win_percent.match(/\d+/)
      );

      sortedList[i] = sorted;
    }
    if (
      MatchWinPercentsortType[i] === false &&
      commonState.MatchWinPercentclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) =>
          b.game_win_percent.match(/\d+/) - a.game_win_percent.match(/\d+/)
      );
      sortedList[i] = sorted;
    }
  }

  for (var i = 0; i < len; i = i + 1) {
    if (
      PointsForsortType[i] === true &&
      commonState.PointsForclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => a.points_for.toString() - b.points_for.toString()
      );
      sortedList[i] = sorted;
    }
    if (
      PointsForsortType[i] === false &&
      commonState.PointsForclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => b.points_for.toString() - a.points_for.toString()
      );
      sortedList[i] = sorted;
    }

    if (AgainstsortType[i] === true && commonState.Againstclicked[i] === true) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => a.against.toString() - b.against.toString()
      );
      sortedList[i] = sorted;
    }
    if (
      AgainstsortType[i] === false &&
      commonState.Againstclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => b.against.toString() - a.against.toString()
      );
      sortedList[i] = sorted;
    }
  }

  for (var i = 0; i < len; i = i + 1) {
    if (
      PointPercentsortType[i] === true &&
      commonState.PointPercentclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => a.point_percent.match(/\d+/) - b.point_percent.match(/\d+/)
      );
      sortedList[i] = sorted;
    }
    if (
      PointPercentsortType[i] === false &&
      commonState.PointPercentclicked[i] === true
    ) {
      sortedList = options;
      let sorted = options[i].sort(
        (a, b) => b.point_percent.match(/\d+/) - a.point_percent.match(/\d+/)
      );
      sortedList[i] = sorted;
    }
  }
  // else sortedList = options;

  // useEffect(() => {
  //   console.log(    "GETALLMANAGERS"  ,  getAllRegistration());

  // }, )

  useEffect(() => {
    console.log("SortedList", sortedList);
  });

  const openProfile = async (regId) => {
    // await getRegById(regId);
    // await getManagerByIdList(managerId);
    // await console.log("Selected Manager:",getManagerData)
    await props.history.push(`/regEvent/3751`);
  };

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

  const ListItems = ({ first, second }) => {
    console.log(
      "sortedvalueList : " + sortedList,
      "second :" + second,
      "first" + first
    );

    const listItems = sortedList.map((items, index) => {
      if (index === second)
        return items.map((item, i) => {
          // if(second===i)
          return (
            <li
              className="row mx-0 px-0 rectangleTable"
              key={item.tournament_id}
              style={{
                cursor: "context-menu",
                padding: "0px",
                margin: "0px",
                height: 40,
              }}
              // onClick={() => {
              //   openProfile(item.tournament_id);
              //   console.log(item.tournament_id);
              // }}
            >
              {/* <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
          <img
            className="Playerteam-logo"
            src={`http://fanwins.in/${item.tournament_pic}`}
            onError={(e) => (e.target.src = profilePic)}
            alt=""
          ></img>
        </div> */}
              <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center">
                <span className="px-2">{i + 1}</span>

                <div className="pool_summary_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center mr-2">
                  {/* {examplePics.map((pic, indexPic) => (
              <img
                key={indexPic}
                src={`http://fanwins.in/${indexPic}`}
                onError={(e) => (e.target.src = profilePic)}
                className="pool_summary_match_player_1_img"
                alt=""
              />
            ))} */}
                  <img
                    src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${item.profile_pics[0]}`}
                    className="pool_summary_match_player_1_img"
                    alt=""
                  />
                  <img
                    src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${item.profile_pics[1]}`}
                    className="pool_summary_match_player_2_img"
                    alt=""
                  />
                </div>
                <span className="pl-2">
                  {item.team_name.length <= 12
                    ? item.team_name
                    : `${item.team_name.slice(0, 13)}...`}
                </span>
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {/* {item.rank !== null ? item.rank : 'null'} */}
                {item.rank}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.match_wins}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.match_losses}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center break_word">
                {item.match_win_percent}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center break_word">
                {item.game_wins}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.game_losses}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.game_win_percent}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.points_for}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.against}
              </div>
              <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                {item.point_percent}
              </div>
            </li>
          );
        });
    });
    return listItems;
  };
  return (
    <div className="pools pt-4" style={{ paddingBottom: "100px" }}>
      {/* <Header>
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
            // onClick={() => props.history.push('/managers')}
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
      </Header> */}
      {/* header 2nd */}
      {/* <div className="row header-2 p-0 m-0">
        <div className="col"></div>
        <div className="col my-auto header-heading">
          {poolListData !== null && poolListData.tournament_name}
        </div>

        <div className="col my-auto header-heading">
          <div className="col-6 side-heading p-0 m-0 row ml-auto">
            <div className="col-8 p-0">
              {dropdown1 !== null && dropdown1.name}
            </div>
            <PoolsScheduleDropdown>
              {poolListData !== null &&
                poolListData.summary.map((individualSummary, i) => (
                  <li
                    key={i}
                    onClick={() =>
                      setDropdown1({
                        name: individualSummary.div_name,
                        id: individualSummary.id,
                      })
                    }
                  >
                    {individualSummary.div_name}
                  </li>
                ))}
            </PoolsScheduleDropdown>
          </div>
        </div>

        <div className="col my-auto header-heading">
          <div className="col-6 side-heading p-0 m-0 row ml-auto">
            <div className="col-8 p-0">{dropdown2}</div>
            <PoolsScheduleDropdown>
              <li onClick={() => setDropdown2('Bronze')}>Bronze</li>
              <li onClick={() => setDropdown2('Silver')}>Silver</li>
              <li onClick={() => setDropdown2('Gold')}>Gold</li>
            </PoolsScheduleDropdown>
          </div>
        </div>
      </div> */}

      {/* example heading area */}
      {console.log({ poolListData })}
      <div className="row header-2 p-0 m-0">
        <div className="col"></div>
        <div className="col my-auto header-heading">
          {poolListData !== null && poolListData.tournament_name}
        </div>
        <div className="col my-auto header-heading text-right">
          <div className="row p-0 m-0">
            <div className="col-6 p-0 m-0">
              <div className="row p-0 m-0 mr-2">
                <div className="col-11 p-0 m-0">
                  <div
                    className="dot mr-2"
                    style={{
                      backgroundColor: dropdown1 !== null && dropdown1.color,
                    }}
                  ></div>{" "}
                  {dropdown1 !== null && dropdown1.name}
                </div>
                <div className="col-1 m-0 p-0">
                  <PoolsScheduleDropdown>
                    {poolListData !== undefined &&
                      poolListData !== null &&
                      poolListData.summary !== null &&
                      poolListData.summary !== undefined &&
                      poolListData.summary.length > 0 &&
                      poolListData.summary.map((individualSummary, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            setDropdown1({
                              name: individualSummary.div_name,
                              id: individualSummary.id,
                              color: colors[i],
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
                              {individualSummary.div_name}
                            </div>
                          </div>
                        </li>
                      ))}
                  </PoolsScheduleDropdown>
                </div>
              </div>
            </div>
            <div className="col-6 p-0 m-0">
              <div className="row p-0 m-0 mr-2">
                <div className="col-11 p-0 m-0">
                  <div
                    className="dot mr-2 bg-success"
                    //style={{ backgroundColor: dropdown1.color }}
                  ></div>{" "}
                  {dropdown2}
                </div>
                <div className="col-1 m-0 p-0">
                  <PoolsScheduleDropdown>
                    <li onClick={() => setDropdown2("Bronze")}>Bronze</li>
                    <li onClick={() => setDropdown2("Silver")}>Silver</li>
                    <li onClick={() => setDropdown2("Gold")}>Gold</li>
                  </PoolsScheduleDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table */}

      {/* table */}

      {/* table */}

      {commonState.poolListData !== null &&
        commonState.poolListData !== undefined &&
        commonState.poolListData.length > 0 &&
        commonState.poolListData.map((individualSummary, index) => {
          if (individualSummary !== null && dropdown1 !== null) {
            return (
              <div className="container-fluid text-center px-0 pb-2 m-2">
                <div className="row mx-0 px-0">
                  <div className="col-11 text-center m-auto px-0">
                    <div className="row m-0 p-0 table-width">
                      <div className="col-6 m-0 pt-2 d-flex justify-content-start">
                        <h6>
                          {" "}
                          Pool {index + 1}: {commonState.poolNames[index]}
                        </h6>
                        <button className="btn-pool float-right">
                          Print Score Sheet
                        </button>
                      </div>

                      <div className="col-3 m-0 p-2 d-flex justify-content-start"></div>
                      <div className="col-3 m-0 p-2 d-flex justify-content-end">
                        <input
                          className="Box-Search"
                          placeholder="Search"
                          onChange={(e) => {
                            let searched = e.target.value.split(" ");
                            let values = commonState.searchedItem;
                            values[index] = e.target.value.split(" ");
                            setCommonState((prevState) => ({
                              ...prevState,
                              searchedItem: values,
                            }));
                          }}
                          style={{
                            padding: "0px",
                            margin: "0px",
                            paddingLeft: 50,
                          }}
                          // style={{ paddingLeft: 50 }}
                        ></input>
                      </div>

                      <div className="col-12 m-0 p-0">
                        <div className="row m-0 p-0 headerTable">
                          {/* <div className="col-2 m-0 p-0 d-flex justify-content-end align-items-center">
                                                <img
                                                  className="table-arrow-1"
                                                  src={imagesPath[FNimageName]}
                                                  onClick={() => onFNSort(commonState.FNsortType)}
                                                  alt=""
                                                />
                                              </div> */}
                          <div className="col-2 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-2"
                              // src={imagesPath[FNimageName]}
                              src={imagesPath[getFNImageName(index)]}
                              onClick={() =>
                                onFNSort(commonState.FNsortType[index], index)
                              }
                              alt=""
                            />
                            TEAM
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-3"
                              src={imagesPath[getRankImageName(index)]}
                              onClick={() =>
                                onRankSort(commonState.RankType[index], index)
                              }
                              alt=""
                            />
                            RANK
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-3"
                              src={imagesPath[getLNImageName(index)]}
                              onClick={() =>
                                onLNSort(commonState.LNsortType[index], index)
                              }
                              alt=""
                            />
                            MATCH WINS
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-4"
                              src={imagesPath[getIDImageName(index)]}
                              onClick={() =>
                                onIDSort(commonState.IDsortType[index], index)
                              }
                              alt=""
                            ></img>
                            LOSSES
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-5"
                              src={imagesPath[getPointsImageName(index)]}
                              onClick={() =>
                                onPointsSort(
                                  commonState.PointssortType[index],
                                  index
                                )
                              }
                              alt=""
                            ></img>
                            WIN %
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-6"
                              src={imagesPath[getLocImageName(index)]}
                              onClick={() =>
                                onLocSort(commonState.LocsortType[index], index)
                              }
                              alt=""
                            ></img>
                            GAMES WINS
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-6"
                              src={imagesPath[getStatusImageName(index)]}
                              onClick={() =>
                                onStatusSort(
                                  commonState.StatussortType[index],
                                  index
                                )
                              }
                              alt=""
                            ></img>
                            LOSSES
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-6"
                              src={
                                imagesPath[getMatchWinPercentImageName(index)]
                              }
                              onClick={() =>
                                onMatchWinPercentSort(
                                  commonState.MatchWinPercentsortType[index],
                                  index
                                )
                              }
                              alt=""
                            ></img>
                            WIN %
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-6"
                              src={imagesPath[getPointsForImageName(index)]}
                              onClick={() =>
                                onPointsForSort(
                                  commonState.PointsForsortType[index],
                                  index
                                )
                              }
                              alt=""
                            ></img>
                            POINTS FOR
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-6"
                              src={imagesPath[getAgainstImageName(index)]}
                              onClick={() =>
                                onAgainstSort(
                                  commonState.AgainstsortType[index],
                                  index
                                )
                              }
                              alt=""
                            ></img>
                            AGAINST
                          </div>
                          <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                            <img
                              className="table-arrow-6"
                              src={imagesPath[getPointPercentImageName(index)]}
                              onClick={() =>
                                onPointPercentSort(
                                  commonState.StatussortType[index],
                                  index
                                )
                              }
                              alt=""
                            ></img>
                            POINT %
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-12 m-0 p-0 table"
                        style={{ maxHeight: 160 }}
                      >
                        {poolListData === null || poolListData === undefined ? (
                          <LoadingSpinner />
                        ) : (
                          <ListItems first={i} second={index} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            {
              /* } */
            }
            {
              /* }) */
            }
          }
        })}
    </div>
  );
};

export default PoolsSummary;
