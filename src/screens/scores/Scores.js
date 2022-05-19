import React, { useState, useEffect, useContext } from 'react';
import './Scores.css';
import divisionImage from '../../assets/images/division.svg';
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';
import pointsIcon from '../../assets/images/icon-orange-points.svg';
import Footer from '../../components/footer/Footer';
import backIcon from '../../assets/images/icon-menu-back.svg';
import cardIcon from '../../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../../assets/images/icon-menu-list.svg';
import Header from '../../components/header/Header';
import RegEventDropDown from '../../components/RegEventDropDown';
import menuchevrondownicon from '../../assets/images/icon-menu-chevron-down.svg';
import { Collapse } from 'antd';
import ScoresContext from '../../context/scores/ScoresContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import defaultIcon3 from '../../assets/images/defaultIcon3.png';
import DropdownModals from '../../components/DropdownModals';
import PoolsSummary from '../pools/PoolsSummary';
import BracketContext from '../../context/bracket/BracketContext';
import BracketState from '../../context/bracket/BracketState';
import { GET_BRACKET } from '../../context/Types';

import profilePic from '../../assets/images/profilepic.jpg';
import DefaultImage from '../../assets/images/DefaultImage.jpg';
import zoomButton from '../../assets/images/icon-menu-fullscreen.svg';
import tournamentIcon from '../../assets/images/bracket icon.png';
import '../bracket/Bracket.css';
import BracketMatchBox from '../../components/BracketMatchBox/BracketMatchBox';
import BracketMatchTeam from '../../components/BracketMatchBox/BracketMatchTeam';
import { DatePicker, TimePicker } from 'antd';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
import moment from 'moment';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import defaultIcon2 from '../../assets/images/defaultIcon2.png';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <g fill="none" fillRule="evenodd">
      <g fill="#333">
        <g>
          <path
            d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
            transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
          />
        </g>
      </g>
    </g>
  </svg>
);

const { Panel } = Collapse;

const Scores = (props) => {
  const scoreContext = useContext(ScoresContext);
  const { tournamentScores, getScoresById } = scoreContext;

  const bracketContext = useContext(BracketContext);
  const {
    generateBracket,
    generateBracketError,
    generateBracketMessage,
    getBracket,
    bracketData,
    resetBracketMessages,
    editBracket,
    screenOpaque,
    setDivisionData,
    divName,
    divId,
    divIdx,
    completeBracketResponse,
    completeBracketError,
    completeBracket,
  } = bracketContext;

  const [scoreActive, setScoreActive] = useState(true);
  const [poolActive, setPoolActive] = useState(false);
  const [bracketActive, setBracketActive] = useState(false);

  const scoreTabClicked = () => {
    setScoreActive(true);
    setPoolActive(false);
    setBracketActive(false);
    setSaveLoading(false);
    resetBracketMessages();
  };

  const poolTabClicked = () => {
    setPoolActive(true);
    setScoreActive(false);
    setBracketActive(false);
    setSaveLoading(false);
    resetBracketMessages();
  };

  const bracketTabClicked = () => {
    setScoreActive(false);
    setPoolActive(false);
    setBracketActive(true);
  };

  useEffect(() => {
    if (scoreActive) {
      let profileStyle = document.getElementById('profile-button');
      profileStyle.style.borderBottom = '2px solid #f1dd8b';
      // profileStyle.style.color="#4a4a4a";
      let profilePstyle = document.getElementById('active-heading-color');
      profilePstyle.style.color = '#4a4a4a';

      let historyStyle = document.getElementById('history-button');
      historyStyle.style.borderBottom = '2px solid #9b9b9b';
      // historyStyle.style.color="#4a4a4a";
      let historyPstyle = document.getElementById('history-heading-color');
      historyPstyle.style.color = '#9b9b9b';

      let bracketStyle = document.getElementById('bracket-button');
      bracketStyle.style.borderBottom = '2px solid #9b9b9b';
      // historyStyle.style.color="#4a4a4a";
      let bracketPstyle = document.getElementById('bracket-heading-color');
      bracketPstyle.style.color = '#9b9b9b';
    }
    if (poolActive) {
      let historyStyle = document.getElementById('history-button');
      historyStyle.style.borderBottom = '2px solid #f1dd8b';
      let historyPstyle = document.getElementById('history-heading-color');
      historyPstyle.style.color = '#4a4a4a';

      let profileStyle = document.getElementById('profile-button');
      profileStyle.style.borderBottom = '2px solid #9b9b9b';
      let profilePstyle = document.getElementById('active-heading-color');
      profilePstyle.style.color = '#9b9b9b';

      let bracketStyle = document.getElementById('bracket-button');
      bracketStyle.style.borderBottom = '2px solid #9b9b9b';
      let bracketPstyle = document.getElementById('bracket-heading-color');
      bracketPstyle.style.color = '#9b9b9b';
    }
    if (bracketActive) {
      let bracketStyle = document.getElementById('bracket-button');
      bracketStyle.style.borderBottom = '2px solid #f1dd8b';
      let bracketPstyle = document.getElementById('bracket-heading-color');
      bracketPstyle.style.color = '#4a4a4a';

      let historyStyle = document.getElementById('history-button');
      historyStyle.style.borderBottom = '2px solid #9b9b9b';
      let historyPstyle = document.getElementById('history-heading-color');
      historyPstyle.style.color = '#9b9b9b';

      let profileStyle = document.getElementById('profile-button');
      profileStyle.style.borderBottom = '2px solid #9b9b9b';
      let profilePstyle = document.getElementById('active-heading-color');
      profilePstyle.style.color = '#9b9b9b';
    }
  }, [scoreActive, poolActive, bracketActive]);

  // const [adandum1, setAdandum1] = useState(false);
  // const [adandum2, setAdandum2] = useState(false);
  // const [adandum3, setAdandum3] = useState(false);

  // useEffect(() => {
  //   console.log("tournamentScores",tournamentScores)
  // }, [tournamentScores])

  useEffect(() => {
    console.log('Scores id by url:', parseInt(props.match.params.id));
    getScoresById(parseInt(props.match.params.id));
    resetBracketMessages();
  }, []);

  useEffect(() => {
    if (tournamentScores !== null)
      console.log('tournamentScores', tournamentScores);
  }, [tournamentScores]);

  useEffect(() => {
    if (
      props.history.location.state &&
      props.history.location.state.from === '/bde'
    ) {
      setBracketActive(true);
      setScoreActive(false);
      setPoolActive(false);
    }
  }, []);

  var arrr = [];
  var counter = 0;

  // const [arrr, setArrr] = useState([]);

  if (bracketData) {
    for (let i = 0; i < bracketData.division.length; i++) {
      arrr.push([]);
    }
    for (let i = 0; i < bracketData.division.length; i++) {
      Object.keys(bracketData.division[i]).map(function (key, index) {
        if (Array.isArray(bracketData.division[i][key])) {
          if (bracketData.division[i][key].length > 0)
            arrr[i].push(bracketData.division[i][key]);
        }
      });
    }
    counter = 1;
    // counter=counter+1;
  }

  let teams = [];
  if (arrr.length > 0) {
    for (let i = 0; i < arrr.length; i++) {
      // teams.push([]);
      for (let j = 0; j < arrr[i].length; j++) {
        // teams[i].push([]);
        for (let k = 0; k < arrr[i][j].length; k++) {
          // teams[i][j].push([]);
          var matchId, team1, team2;
          Object.keys(arrr[i][j][k]).map(function (key, index) {
            if (Object.keys(arrr[i][j][k])[index] === 'match_id') {
              matchId = arrr[i][j][k][key];
            }
            if (Object.keys(arrr[i][j][k])[index] === 'team1Player') {
              team1 = arrr[i][j][k][key];
            }
            if (Object.keys(arrr[i][j][k])[index] === 'team2Player') {
              team2 = arrr[i][j][k][key];
            }
          });
          // arrr[i][j][k].teamPlayers={id:matchId,t1:team1,t2:team2}
          arrr[i][j][k].teamPlayers = [team1, team2];
        }
      }
    }
  }

  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    setMatchData(arrr);
    console.log('matchData:', matchData);
  }, [bracketData]);

  const [updatedScores2, setUpdatedScores2] = useState([]);
  const [updatedCourt, setUpdatedCourt] = useState([]);
  const [updatedTime, setUpdatedTime] = useState([]);

  useEffect(() => {
    console.log('updatedScores2', updatedScores2);
  }, [updatedScores2]);

  const handleScoreChange = (e) => {
    if (
      e.target.dataset.sett !== '1' &&
      matchData[divisionDropdown.idx][e.target.dataset.column][
        e.target.dataset.matchno
      ][`team${e.target.dataset.teamno}_score`][
        parseInt(e.target.dataset.sett - 1).toString()
      ][`team${e.target.dataset.teamno}_score`] === null
    ) {
      // matchData[divisionDropdown.idx][e.target.dataset.column][e.target.dataset.matchno][`team${e.target.dataset.teamno}_score`][(parseInt(e.target.dataset.sett)).toString()][`team${e.target.dataset.teamno}_score`]=null
      console.log(
        'Handling edge case',
        parseInt(e.target.dataset.sett - 1).toString()
      );
    }

    const updatedScores = [...matchData];
    updatedScores[divisionDropdown.idx][e.target.dataset.column][
      e.target.dataset.matchno
    ][`team${e.target.dataset.teamno}_score`][e.target.dataset.setno][
      `team${e.target.dataset.teamno}_score`
    ] = e.target.value;
    // setMatchData(updatedScores)
    var selectedInput = {};
    selectedInput.match_id = e.target.dataset.matchid.toString();
    selectedInput.team1_id = e.target.dataset.teamoneid.toString();
    selectedInput.team2_id = e.target.dataset.teamtwoid.toString();
    selectedInput.division_id = divisionDropdown.id.toString();
    selectedInput.score_id =
      updatedScores[divisionDropdown.idx][e.target.dataset.column][
        e.target.dataset.matchno
      ][`team${e.target.dataset.teamno}_score`][
        e.target.dataset.setno
      ].score_id.toString();
    selectedInput.set = e.target.dataset.sett.toString();
    selectedInput.game = 'Bracket';
    selectedInput.bracket_type = (
      parseInt(e.target.dataset.column) + 1
    ).toString();
    selectedInput.team1_score =
      updatedScores[divisionDropdown.idx][e.target.dataset.column][
        e.target.dataset.matchno
      ].team1_score[e.target.dataset.setno].team1_score;
    selectedInput.team2_score =
      updatedScores[divisionDropdown.idx][e.target.dataset.column][
        e.target.dataset.matchno
      ].team2_score[e.target.dataset.setno].team2_score;
    if (e.target.dataset.teamno === '1') {
      selectedInput.team1_score = e.target.value.toString();
    } else if (e.target.dataset.teamno === '2') {
      selectedInput.team2_score = e.target.value.toString();
    }
    const updatedScores3 = [...updatedScores2];
    updatedScores3.push(selectedInput);
    setUpdatedScores2(updatedScores3);
    setMatchData(updatedScores);
    // console.log('selectedInput:', selectedInput);
    // console.log('updatedScores2:', updatedScores2);
  };

  const handleDateChange = (e, date, matchId, column, matchNo) => {
    const updatedScores = [...matchData];
    var date2 = date + ' ';
    var time = moment(e).format('hh:mm:ss');
    var dateTime = date2.concat(time);
    updatedScores[divisionDropdown.idx][column][matchNo].start_time = dateTime;
    // console.log(dateTime)
    var selectedTime = {};
    selectedTime.match_id = matchId;
    selectedTime.start_play_time = dateTime;
    const updatedTime2 = [...updatedTime];
    updatedTime2.push(selectedTime);
    setUpdatedTime(updatedTime2);
    setMatchData(updatedScores);
    // console.log('selectedTime:', selectedTime);
  };

  const handleCourtChange = (e) => {
    const updatedScores = [...matchData];
    updatedScores[divisionDropdown.idx][e.target.dataset.column][
      e.target.dataset.matchno
    ].court = e.target.value === '' ? 0 : parseInt(e.target.value);
    var selectedCourt = {};
    // selectedCourt.match_id=e.target.dataset.matchid.toString();
    selectedCourt.match_id = e.target.dataset.matchid.toString();
    // selectedCourt.court_id=e.target.value===''?0:parseInt(e.target.value);
    selectedCourt.court_id =
      updatedScores[divisionDropdown.idx][e.target.dataset.column][
        e.target.dataset.matchno
      ].court;
    const updatedCourt2 = [...updatedCourt];
    updatedCourt2.push(selectedCourt);
    setUpdatedCourt(updatedCourt2);
    setMatchData(updatedScores);
    // console.log('selectedCourt:', selectedCourt);
    // console.log('updatedTime:', updatedTime);
  };

  //888

  const onSaveBracket = async () => {
    // console.log("editBracket HIT")
    const cat = updatedScores2
      .slice()
      .reverse()
      .filter(
        (v, i, a) =>
          a.findIndex(
            (t) =>
              t.match_id === v.match_id &&
              t.score_id === v.score_id &&
              t.set === v.set &&
              t.team1_id === v.team1_id &&
              t.team2_id === v.team2_id
          ) === i
      )
      .reverse();
    const updatedScoreWithNoNull = cat.filter(
      (score) =>
        score.team1_score !== null &&
        score.team2_score !== null &&
        score.team1_score !== '' &&
        score.team2_score !== ''
    );
    if (updatedScoreWithNoNull.length > 0 && bracketCounter === true) {
      var divData = {};
      divData.divName = divisionDropdown.div;
      divData.divId = divisionDropdown.id;
      divData.divIdx = divisionDropdown.idx;
      await setBracketCounter(false);
      console.log('editBracket HIT');
      console.log('nonDuplicateScores', cat);
      console.log('updatedScoreWithNoNull', updatedScoreWithNoNull);
      const data = { ...updatedScoreWithNoNull };
      console.log('Data sent to backend:', data);
      await editBracket({ data: JSON.stringify(data) });
      await setUpdatedScores2([]);
      await setBracketCounter(true);
      await setDivisionData(divData);
      // await props.history.push(`/scores/${parseInt(props.match.params.id)}`)
      await getBracket(parseInt(props.match.params.id));
    }
    const uniqueCourt = updatedCourt
      .slice()
      .reverse()
      .filter((v, i, a) => a.findIndex((t) => t.match_id === v.match_id) === i)
      .reverse();
    if (uniqueCourt.length > 0 && bracketCounter === true) {
      // console.log('Non Duplicate courts:', uniqueCourt);
      var divData = {};
      divData.divName = divisionDropdown.div;
      divData.divId = divisionDropdown.id;
      divData.divIdx = divisionDropdown.idx;
      await setBracketCounter(false);
      const data = { ...uniqueCourt };
      console.log('Data sent to backend:', data);
      await editBracket({ data: JSON.stringify(data) });
      await setUpdatedCourt([]);
      await setBracketCounter(true);
      await setDivisionData(divData);
      await getBracket(parseInt(props.match.params.id));
    }
    const uniqueTime = updatedTime
      .slice()
      .reverse()
      .filter((v, i, a) => a.findIndex((t) => t.match_id === v.match_id) === i)
      .reverse();
    if (updatedTime.length > 0 && bracketCounter === true) {
      // console.log('Non duplicate time:', uniqueTime);
      var divData = {};
      divData.divName = divisionDropdown.div;
      divData.divId = divisionDropdown.id;
      divData.divIdx = divisionDropdown.idx;
      await setBracketCounter(false);
      const data = { ...uniqueTime };
      console.log('Data sent to backend:', data);
      await editBracket({ data: JSON.stringify(data) });
      await setUpdatedTime([]);
      await setBracketCounter(true);
      await setDivisionData(divData);
      await getBracket(parseInt(props.match.params.id));
    }
  };

  //   useEffect(() => {
  // console.log(screenOpaque)
  //   }, [screenOpaque])

  // const editBracketBlur = async () => {
  //   await editBracket({data:JSON.stringify(data)});
  //   awai
  // }

  const [bracketCounter, setBracketCounter] = useState(true);

  const Adandum = (props) => {
    const { game1, game2, game3 } = props;
    return (
      <div className="row text-left">
        <div className="col-12 p-0">
          <div className="box-shadow-header-text mb-1">Game {game1.game}</div>
          <div
            className="container row shadow-box p-0 m-0"
            style={{ height: 140 }}
          >
            <div className="col-12 p-0">
              <div className="container row p-0 m-0 score_row_1">
                <div className="col-1 p-0 justify-content-center d-flex align-items-end">
                  <img src={pointsIcon} alt="" className="img-fluid" />
                </div>
                {/* <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-0">
                  {game1.team_1_rank} {game1.firstGame}
                </div> */}
                <div className="col-1 p-0 text-center box-shadow-text mt-auto mb-0">
                  {game1.team_1_rank}
                </div>
                <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-0">
                  {game1.firstGame}
                </div>
                <div className="col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-0">
                  <div className="container row p-0 m-0 d-flex justify-content-end">
                    <div className="score_points_total">{game1.firstScore}</div>
                  </div>
                </div>
              </div>
              <div className="container row p-0 m-0 score_row">
                <div
                  className={`col-1 p-0 text-left pl-2 d-flex align-items-center`}
                ></div>
                <div
                  className={
                    game1.scoreDetail.length === 3
                      ? `col-6 p-0 text-left box-shadow-text mt-auto mb-auto`
                      : game1.scoreDetail.length === 2
                      ? `col-8 p-0 text-left box-shadow-text mt-auto mb-auto`
                      : `col-10 p-0 text-left box-shadow-text mt-auto mb-auto`
                  }
                ></div>
                <div
                  className={
                    game1.scoreDetail.length === 3
                      ? `col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-auto`
                      : game1.scoreDetail.length === 2
                      ? `col-3 p-0 text-right box-shadow-text pr-2 mt-auto mb-auto`
                      : `col-1 p-0 text-right box-shadow-text mt-auto mb-auto`
                  }
                >
                  <div className="container row p-0 m-0 d-flex justify-content-end">
                    <div className="pr-4 score_sets d-flex align-items-center"></div>
                  </div>
                  <div className="container row p-0 m-0">
                    {/* {game1.firstSet1[0] !== undefined && game1.firstSet2[0] !== undefined && game1.firstSet3[0] !== undefined && ( */}
                    {game1.scoreDetail.length === 3 && (
                      <>
                        <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 1</div>
                          <div className="score_points_saved">
                            {game1.firstSet1}
                          </div>
                        </div>
                        <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 2</div>
                          <div className="score_points_saved">
                            {game1.firstSet2}
                          </div>
                        </div>
                        <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 3</div>
                          <div className="score_points_saved">
                            {game1.firstSet3}
                          </div>
                        </div>
                      </>
                    )}
                    {/* {game1.firstSet1[0] !== undefined && game1.firstSet2[0] !== undefined && game1.firstSet3[0] === undefined && ( */}
                    {game1.scoreDetail.length === 2 && (
                      <>
                        <div className="col-6 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 1</div>
                          <div className="score_points_saved">
                            {game1.firstSet1}
                          </div>
                        </div>
                        <div className="col-6 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 2</div>
                          <div className="score_points_saved">
                            {game1.firstSet2}
                          </div>
                        </div>
                        {/* <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                      <div className="score_sets">Set 3</div>
                      <div className="score_points_saved">
                        {game1.firstSet3}
                      </div>
                    </div> */}
                      </>
                    )}
                    {/* {game1.firstSet1[0] !== undefined && game1.firstSet2[0] === undefined && game1.firstSet3[0] === undefined && ( */}
                    {game1.scoreDetail.length === 1 && (
                      <>
                        <div className="col-12 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 1</div>
                          <div className="score_points_saved">
                            {game1.firstSet1}
                          </div>
                        </div>
                        {/* <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                      <div className="score_sets">Set 2</div>
                      <div className="score_points_saved">
                        {game1.firstSet2}
                      </div>
                    </div>
                    <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                      <div className="score_sets">Set 3</div>
                      <div className="score_points_saved">
                        {game1.firstSet3}
                      </div>
                    </div> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-0">
              <div className="container row p-0 m-0 score_row_1">
                <div className="col-1 p-0 text-left pl-2 d-flex align-items-end">
                  <img src={pointsIcon} alt="" className="img-fluid " />
                </div>
                {/* <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-0">
                  {game1.team_2_rank}
                  {`  `}
                  {game1.secondGame}
                </div> */}
                <div className="col-1 p-0 text-center box-shadow-text mt-auto mb-0">
                  {game1.team_2_rank}
                </div>
                <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-0">
                  {game1.secondGame}
                </div>
                <div className="col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-0">
                  <div className="container row p-0 m-0 d-flex justify-content-end">
                    <div className="pr-4 score_sets d-flex align-items-center"></div>
                    <div className="score_points_total">
                      {game1.secondScore}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container row p-0 m-0 score_row">
                <div className="col-1 p-0 text-left pl-2 d-flex align-items-center"></div>
                {/* <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto"></div>
                <div className="col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-auto"> */}
                <div
                  className={
                    game1.scoreDetail.length === 3
                      ? `col-6 p-0 text-left box-shadow-text mt-auto mb-auto`
                      : game1.scoreDetail.length === 2
                      ? `col-8 p-0 text-left box-shadow-text mt-auto mb-auto`
                      : `col-10 p-0 text-left box-shadow-text mt-auto mb-auto`
                  }
                ></div>
                <div
                  className={
                    game1.scoreDetail.length === 3
                      ? `col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-auto`
                      : game1.scoreDetail.length === 2
                      ? `col-3 p-0 text-right box-shadow-text pr-2 mt-auto mb-auto`
                      : `col-1 p-0 text-right box-shadow-text mt-auto mb-auto`
                  }
                >
                  <div className="container row p-0 m-0 d-flex justify-content-end">
                    <div className="pr-4 score_sets d-flex align-items-center"></div>
                  </div>
                  <div className="container row p-0 m-0">
                    {/* {game1.secondSet1[0] !== undefined && game1.secondSet2[0] !== undefined && game1.secondSet3[0] !== undefined && ( */}
                    {game1.scoreDetail.length === 3 && (
                      <>
                        <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 1</div>
                          <div className="score_points_saved">
                            {game1.secondSet1}
                          </div>
                        </div>
                        <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 2</div>
                          <div className="score_points_saved">
                            {game1.secondSet2}
                          </div>
                        </div>
                        <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 3</div>
                          <div className="score_points_saved">
                            {game1.secondSet3}
                          </div>
                        </div>
                      </>
                    )}
                    {/* {game1.secondSet1[0] !== undefined && game1.secondSet2[0] !== undefined && game1.secondSet3[0] === undefined && ( */}
                    {game1.scoreDetail.length === 2 && (
                      <>
                        <div className="col-6 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 1</div>
                          <div className="score_points_saved">
                            {game1.secondSet1}
                          </div>
                        </div>
                        <div className="col-6 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 2</div>
                          <div className="score_points_saved">
                            {game1.secondSet2}
                          </div>
                        </div>
                        {/* <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                      <div className="score_sets">Set 3</div>
                      <div className="score_points_saved">
                        {game1.secondSet3}
                      </div>
                    </div> */}
                      </>
                    )}
                    {/* {game1.secondSet1[0] !== undefined && game1.secondSet2[0] === undefined && game1.secondSet3[0] === undefined && ( */}
                    {game1.scoreDetail.length === 1 && (
                      <>
                        <div className="col-12 row p-0 m-0 d-flex justify-content-end flex-column">
                          <div className="score_sets">Set 1</div>
                          <div className="score_points_saved">
                            {game1.secondSet1}
                          </div>
                        </div>
                        {/* <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                      <div className="score_sets">Set 2</div>
                      <div className="score_points_saved">
                        {game1.secondSet2}
                      </div>
                    </div>
                    <div className="col-4 row p-0 m-0 d-flex justify-content-end flex-column">
                      <div className="score_sets">Set 3</div>
                      <div className="score_points_saved">
                        {game1.secondSet3}
                      </div>
                    </div> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scores_ref">
            REF {game1.ref_rank} {game1.ref}
          </div>
        </div>
      </div>
    );
  };

  // const bracketContext = useContext(BracketContext);
  // const {
  //     getBracket,
  //     bracketData,
  // } = bracketContext;

  useEffect(() => {
    console.log('Event id by url:', parseInt(props.match.params.id));
    getBracket(parseInt(props.match.params.id));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (bracketData !== null) console.log('bracketData', bracketData);
  }, [bracketData]);

  // modal states
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [messageModal, setMessageModal] = useState(false);

  // const [divisionDropdown, setDivisionDropdown] = useState(bracketData && bracketData.division && bracketData.division[0].div_id);
  const [divisionDropdown, setDivisionDropdown] = useState({
    div: null,
    id: null,
    idx: 0,
    color: '#ffffff',
  });
  // const [divisionDropdown, setDivisionDropdown] = useState(bracketData?{div:bracketData.division[0].divName,id:bracketData.division[0].div_id,idx:0}:{div:null,id:null,idx:0});
  const [metal, setMetal] = useState('Gold');

  function disabledStartDate(current) {
    return current < moment().startOf('day');
  }

  // 888
  useEffect(() => {
    // setDivisionDropdown({
    //   div: bracketData && bracketData.division[0].divName,
    //   id: bracketData && bracketData.division[0].div_id,
    //   idx: 0,
    //   color: colors[0],
    // });
    if (divName === null) {
      setDivisionDropdown({
        div: bracketData && bracketData.division[0].divName,
        id: bracketData && bracketData.division[0].div_id,
        idx: 0,
        color: colors[0],
      });
    } else {
      setDivisionDropdown({
        div: divName,
        id: divId,
        idx: divIdx,
        color: colors[divIdx],
      });
    }
  }, [bracketData]);

  // var divData={};
  // divData.divName=divisionDropdown.div;
  // divData.divId=divisionDropdown.id;
  // divData.divIdx=divisionDropdown.idx;

  const [date1, setDate1] = useState();
  const [fullscreen, setFullscreen] = useState(false);
  const [dropdown, setDropdown] = useState('Division 1');

  const getItems = (count, j) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k}-${j}`,
      content: `item ${k}`,
    }));

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    // console.log(source, destination);
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    var dropDest = droppableDestination.index;

    // const earlyResult ={};
    // earlyResult[droppableSource.droppableId] = sourceClone;
    // earlyResult[droppableDestination.droppableId] = destClone;
    const earlyResult = [];
    earlyResult[0] = sourceClone;
    earlyResult[1] = destClone;
    // console.log("Early result",earlyResult)

    if (droppableDestination.index === 2) {
      dropDest = 1;
    }
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    const [removedFromDest] = destClone.splice(dropDest, 1);

    destClone.splice(dropDest, 0, removed);
    sourceClone.splice(droppableSource.index, 0, removedFromDest);

    // const result = {};
    // result[droppableSource.droppableId] = sourceClone;
    // result[droppableDestination.droppableId] = destClone;
    const result = [];
    result[0] = sourceClone;
    result[1] = destClone;
    // console.log("Move result",result)

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? 'lightblue' : 'lightgrey',
    background: isDraggingOver ? 'lightblue' : 'none',
    padding: grid,
    width: fullscreen ? '' : 250,
  });

  const [lists, setLists] = useState({
    droppable_0: getItems(2, 0),
    droppable_1: getItems(2, 1),
    droppable_2: getItems(2, 2),
    droppable_3: getItems(2, 3),
    droppable_4: getItems(2, 4),
    droppable_5: getItems(2, 5),
    droppable_6: getItems(2, 6),
    droppable_7: getItems(2, 7),
  });

  const [matches, setMatches] = useState({
    matchList1: getItems(8),
    matchList2: getItems(4),
    matchList3: getItems(2),
    matchList4: getItems(1),
  });

  const onDragEnd = async (result) => {
    const { source, destination } = result;
    // console.log('source', source);
    // console.log('destination', destination);

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // console.log(source, destination)
      // const items = reorder(
      //     lists[source.droppableId],
      //     source.index,
      //     destination.index
      // );

      // setLists((prevState)=>({
      //   ...prevState,
      //   [source.droppableId]:items
      // }))
      let column = matchData[divisionDropdown.idx].findIndex((col) =>
        col.map((match) => match.match_id === parseInt(source.droppableId))
      );
      let obj_index = matchData[divisionDropdown.idx][column].findIndex(
        (o) => o.match_id === parseInt(source.droppableId)
      );
      // console.log('column', column);
      let obj = matchData[divisionDropdown.idx][column].find(
        (o) => o.match_id === parseInt(source.droppableId)
      );
      const items = reorder(obj.teamPlayers, source.index, destination.index);
      // console.log("items",items);
      // let changedTeams=[...matchData];
      // console.log(changedTeams[divisionDropdown.idx][column][obj_index].teamPlayers);
      // changedTeams[divisionDropdown.idx][column][obj_index].teamPlayers=items;
      // // setMatchData(...changedTeams);
      // setMatchData((prevState)=>({
      //   // ...prevState,
      //   // matchData:changedTeams,
      //   ...changedTeams
      // }))
      setMatchData((prevState) => {
        prevState[divisionDropdown.idx][column][obj_index].teamPlayers = items;
        return prevState;
      });
      // console.log(changedTeams[divisionDropdown.idx][column][obj_index].teamPlayers);

      var dragObj = {};
      dragObj.match_id =
        matchData[divisionDropdown.idx][column][obj_index].match_id;
      dragObj.team1_id = items[0][0].teamId;
      dragObj.team2_id = items[1][0].teamId;
      var teamArr = [];
      teamArr.push(dragObj);
      const data = { ...teamArr };
      console.log('Data sent to backend:', data);
      await editBracket({ data: JSON.stringify(data) });
      await getBracket(parseInt(props.match.params.id));
    } else {
      // let column=arrr[divisionDropdown.idx].find(o=>o.forEach((match=>match.match_id === parseInt(source.droppableId))?true:false))
      // let column = arrr[divisionDropdown.idx].findIndex((match)=>match.match_id===parseInt(source.droppableId))
      // let column = arrr[divisionDropdown.idx].findIndex(col=>col.length<2);
      let column = arrr[divisionDropdown.idx].findIndex((col) =>
        col.map((match) => match.match_id === parseInt(source.droppableId))
      );
      let source_obj_index = arrr[divisionDropdown.idx][column].findIndex(
        (o) => o.match_id === parseInt(source.droppableId)
      );
      let dest_obj_index = arrr[divisionDropdown.idx][column].findIndex(
        (o) => o.match_id === parseInt(destination.droppableId)
      );

      // console.log('column', column);

      let source_obj = arrr[divisionDropdown.idx][column].find(
        (o) => o.match_id === parseInt(source.droppableId)
      );
      let dest_obj = arrr[divisionDropdown.idx][column].find(
        (o) => o.match_id === parseInt(destination.droppableId)
      );
      const result = move(
        source_obj.teamPlayers,
        dest_obj.teamPlayers,
        source,
        destination
      );
      // let changedMatches = [...matchData];
      // changedMatches[divisionDropdown.idx][column][source_obj_index].teamPlayers=result[0];
      // changedMatches[divisionDropdown.idx][column][dest_obj_index].teamPlayers=result[1];
      // setMatchData(prevData => ([...prevData, ...changedMatches]));
      // setMatchData([...changedMatches]);
      setMatchData((prevState) => {
        prevState[divisionDropdown.idx][column][source_obj_index].teamPlayers =
          result[0];
        prevState[divisionDropdown.idx][column][dest_obj_index].teamPlayers =
          result[1];
        return prevState;
      });
      // console.log("source_obj,dest_obj",source_obj.teamPlayers,dest_obj.teamPlayers)

      // console.log("^^^^^^^^^^^^^",changedMatches[divisionDropdown.idx][column][source_obj_index].teamPlayers,matchData[divisionDropdown.idx][column][source_obj_index].teamPlayers);
      // console.log("result:",result)
      // console.log("*********",matchData[divisionDropdown.idx][column][source_obj_index].teamPlayers, changedMatches[divisionDropdown.idx][column][source_obj_index].teamPlayers);

      var dragObj1 = {};
      dragObj1.match_id =
        matchData[divisionDropdown.idx][column][source_obj_index].match_id;
      dragObj1.team1_id =
        matchData[divisionDropdown.idx][column][
          source_obj_index
        ].teamPlayers[0][0].teamId;
      dragObj1.team2_id =
        matchData[divisionDropdown.idx][column][
          source_obj_index
        ].teamPlayers[1][0].teamId;

      var dragObj2 = {};
      dragObj2.match_id =
        matchData[divisionDropdown.idx][column][dest_obj_index].match_id;
      dragObj2.team1_id =
        matchData[divisionDropdown.idx][column][
          dest_obj_index
        ].teamPlayers[0][0].teamId;
      dragObj2.team2_id =
        matchData[divisionDropdown.idx][column][
          dest_obj_index
        ].teamPlayers[1][0].teamId;

      var dragArray = [];
      dragArray.push(dragObj1);
      dragArray.push(dragObj2);
      const data = { ...dragArray };
      console.log('Data sent to backend:', data);
      await editBracket({ data: JSON.stringify(data) });
      await getBracket(parseInt(props.match.params.id));
    }
  };

  // useEffect(() => {
  //   console.log('matchData', matchData);
  // }, [matchData]);

  const [startTime, setStartTime] = useState();
  // console.log(divisionDropdown);

  const [saveLoading, setSaveLoading] = useState(false);
  const [closeBracketLoading, setCloseBracketLoading] = useState(false);

  const onGenerateClick = async () => {
    {
      // console.log(generateBracketError, generateBracketMessage);
    }
    // console.log('gbr2', generateBracketError);
    if (generateBracketError !== null) {
      await setTimeout(() => {
        onCloseModal();
      }, 5000);
    } else if (generateBracketError === null) {
      await setTimeout(async () => {
        await getBracket(parseInt(props.match.params.id));
        await setBracketActive(true);
        await onCloseModal();
      }, 3000);
    }
    // await setTimeout(
    //   async() => {
    //     if(generateBracketError !==null)
    //     onCloseModal();
    //     else{
    //       await getBracket(parseInt(props.match.params.id));
    //       await setBracketActive(true);
    //       await onCloseModal();
    //     }
    //   },
    //   5000
    // );
  };

  // useEffect(() => {
  //   console.log('generateBracketError:', generateBracketError);
  // }, [generateBracketError]);

  const [colors, setColors] = useState([
    '#ff20f4',
    '#9f20ff',
    '#2092ff',
    '#20f6ff',
    '#20ffb7',
    '#91ff20',
    '#ff20f4',
    '#9f20ff',
    '#2092ff',
    '#20f6ff',
  ]);

  // useEffect(() => {
  //   if(matchData!==null && matchData[0]!==undefined && matchData[0][0]!==undefined)
  //   console.log("COl 1",matchData[0][0])
  // }, [matchData])

  return (
    <div style={{ minHeight: '100vh' }}>
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
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={cardIcon} className="profile-image" />
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => props.history.push('/ScoresTable')}
            // onClick={async() => {await getScoresById(Id);await props.history.push('/ScoresTable');}}
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

      <div
        className="new-event-profile p-0"
        style={{ paddingTop: 32, backgroundColor: '#f9fafc' }}
      >
        <div>
          <div className="wrapper ml-auto mr-auto" style={{ marginTop: 32 }}>
            <div
              tabIndex="1"
              className="profile text-decoration-none"
              id="profile-button"
              onClick={scoreTabClicked}
              style={{ outline: 0 }}
            >
              <p
                className="p active-profile-subheading"
                id="active-heading-color"
                style={{ maxWidth: 120 }}
              >
                Score
              </p>
            </div>
            <div
              tabIndex="1"
              className="history text-decoration-none"
              id="history-button"
              onClick={poolTabClicked}
              style={{ outline: 0 }}
            >
              <p
                className="p active-profile-subheading"
                id="history-heading-color"
                style={{ maxWidth: 120 }}
              >
                Pool
              </p>
            </div>
            <div
              tabIndex="1"
              className="history text-decoration-none"
              id="bracket-button"
              onClick={bracketTabClicked}
              style={{ outline: 0 }}
            >
              <p
                className="p active-profile-subheading"
                id="bracket-heading-color"
                style={{ maxWidth: 120 }}
              >
                Bracket
              </p>
            </div>
          </div>

          {/* menu button */}

          {tournamentScores === null ? (
            <LoadingSpinner />
          ) : (
            scoreActive && (
              <div className="new-event-profile container p-0 ">
                <div
                  className="row"
                  style={{ marginTop: 142, paddingBottom: 130 }}
                >
                  <div className="col-6 m-auto text-center">
                    <div className="row">
                      <div className="col-12 p-0 example">
                        {/* <DropdownModals> */}
                        <RegEventDropDown>
                          <li
                            onClick={() =>
                              props.history.push(
                                `/scoresEdit/${parseInt(props.match.params.id)}`
                              )
                            }
                          >
                            Edit
                          </li>
                          {/* <li>Revert</li> */}
                        </RegEventDropDown>
                        {/* </DropdownModals> */}

                        {/* image and event name */}
                        <div className="container">
                          <div className="row">
                            <div className="col-3 p-0 text-left">
                              <img
                                src={
                                  tournamentScores.tournament_pic !== null
                                    ? `${process.env.REACT_APP_BASE_URL}/${tournamentScores.tournament_pic}`
                                    : divisionImage
                                }
                                onError={(e) => (e.target.src = defaultIcon3)}
                                alt=""
                                className="img-fluid"
                                style={{
                                  width: 100,
                                  height: 100,
                                  borderRadius: 50,
                                }}
                              />
                            </div>
                            <div className="col-9 m-auto p-0">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="event-input border-bottom text-left"
                                  id="scores_event_name"
                                >
                                  {tournamentScores.tournament_name}
                                </div>
                                <div className="event-input-bottom-text ml-0 mb-auto text-left mt-2">
                                  {tournamentScores.date}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Mens 2v2 */}
                        {tournamentScores.gameDetail.map((division, index) => (
                          <Collapse
                            expandIconPosition="right"
                            bordered={true}
                            key={index}
                            ghost
                            className="p-0"
                            defaultActiveKey={['0']}
                            expandIcon={({ isActive }) => (
                              <span
                                className={
                                  isActive
                                    ? 'reg-rotate mt-2'
                                    : 'reg-no-rotate mt-2'
                                }
                              >
                                <img src={menuchevrondownicon} alt="" />
                              </span>
                            )}
                            className=" reg-padding"
                          >
                            <Panel
                              key={index}
                              className="px-0 pb-0"
                              header={
                                <div className="row">
                                  <div className="col-sm-2 my-auto m-0 p-0">
                                    {division.division_name}
                                  </div>
                                  <div className="col-sm-10">
                                    <hr
                                      style={{
                                        height: 1,
                                        backgroundColor: '#333333',
                                        border: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                              }
                            >
                              {division.game.map((card, idx) => (
                                <Adandum
                                  key={idx}
                                  // game1={{
                                  //   firstGame: ' 1 Kimchi / Willis',
                                  //   firstScore: 32,
                                  //   secondGame: '8   Madula / Siminz',
                                  //   secondScore: 16,
                                  //   ref: 'REF 3 Suzi, Kelli',
                                  // }}
                                  game1={{
                                    firstGame:
                                      card.Team1_name !== null
                                        ? card.Team1_name.replace(',', ' /')
                                        : '',
                                    firstScore:
                                      card.team1_total_score !== null
                                        ? card.team1_total_score
                                        : '',
                                    // firstSet1: card.scoreDetail[0] && card.scoreDetail[0].team1_score !==null? card.scoreDetail[0].team1_score : '',
                                    firstSet1: card.scoreDetail.map((obj) => {
                                      if (
                                        obj.set === 1 &&
                                        obj.team1_score !== null
                                      ) {
                                        return obj.team1_score;
                                      }
                                    }),
                                    // firstSet2: card.scoreDetail[1] && card.scoreDetail[1].team1_score !==null? card.scoreDetail[1].team1_score : '',
                                    firstSet2: card.scoreDetail.map((obj) => {
                                      if (
                                        obj.set === 2 &&
                                        obj.team1_score !== null
                                      ) {
                                        return obj.team1_score;
                                      }
                                    }),
                                    // firstSet3: card.scoreDetail[2] && card.scoreDetail[2].team1_score !==null? card.scoreDetail[2].team1_score : '',
                                    firstSet3: card.scoreDetail.map((obj) => {
                                      if (
                                        obj.set === 3 &&
                                        obj.team1_score !== null
                                      ) {
                                        return obj.team1_score;
                                      }
                                    }),
                                    secondGame:
                                      card.Team2_name !== null
                                        ? card.Team2_name.replace(',', ' /')
                                        : '',
                                    secondScore:
                                      card.team2_total_score !== null
                                        ? card.team2_total_score
                                        : '',
                                    // secondSet1: card.scoreDetail[0] && card.scoreDetail[0].team2_score !==null? card.scoreDetail[0].team2_score : '',
                                    secondSet1: card.scoreDetail.map((obj) => {
                                      if (
                                        obj.set === 1 &&
                                        obj.team2_score !== null
                                      ) {
                                        return obj.team2_score;
                                      }
                                    }),
                                    // secondSet2: card.scoreDetail[1] && card.scoreDetail[1].team2_score !==null? card.scoreDetail[1].team2_score : '',
                                    secondSet2: card.scoreDetail.map((obj) => {
                                      if (
                                        obj.set === 2 &&
                                        obj.team2_score !== null
                                      ) {
                                        return obj.team2_score;
                                      }
                                    }),
                                    // secondSet3: card.scoreDetail[2] && card.scoreDetail[2].team2_score !==null? card.scoreDetail[2].team2_score : '',
                                    secondSet3: card.scoreDetail.map((obj) => {
                                      if (
                                        obj.set === 3 &&
                                        obj.team2_score !== null
                                      ) {
                                        return obj.team2_score;
                                      }
                                    }),
                                    ref: card.reffing_team_name,
                                    game: card.game,
                                    ref_rank: card.reffing_team_rank,
                                    team_1_rank: card.team1_rank,
                                    team_2_rank: card.team2_rank,
                                    scoreDetail: card.scoreDetail,
                                  }}
                                />
                              ))}
                            </Panel>
                          </Collapse>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          {poolActive && <PoolsSummary location={props.match.params.id} />}

          {/* Bracket code: */}

          {bracketActive && (
            <>
              {bracketData === null ||
              (bracketData !== null && matchData.length < 0) ? (
                <div className="col-12 text-center loading_height">
                  <LoadingSpinner />
                </div>
              ) : (
                <>
                  <div className="bracket_header container-fluid m-0 p-0 mt-4">
                    <div className="row m-0 p-0">
                      <div className="bracket_header_title col-12 m-0 p-0 d-flex justify-content-between align-items-center">
                        <div style={{ width: 200 }}></div>
                        {bracketData && bracketData.tournamentName}
                        <div className="pr-3 d-flex ">
                          {/* {divisionDropdown.div} */}
                          {/* <div className="col-11 p-0 m-0"> */}
                          <div className="d-flex align-items-center">
                            <div
                              className="dot mr-2"
                              style={{
                                backgroundColor: divisionDropdown.color,
                              }}
                            />
                          </div>{' '}
                          {divisionDropdown.div}
                          {/* </div> */}
                          <DropdownModals>
                            {bracketData &&
                              bracketData.division &&
                              bracketData.division.map((division, i) => (
                                <li
                                  key={i}
                                  onClick={() =>
                                    setDivisionDropdown({
                                      div: division.divName,
                                      id: division.div_id,
                                      idx: i,
                                      color: colors[i],
                                    })
                                  }
                                >
                                  <div className="row p-0 m-0">
                                    <div className="col-2 m-0 p-0">
                                      <div
                                        className="dot mr-1"
                                        style={{
                                          backgroundColor: colors[i % 10],
                                        }}
                                      ></div>
                                    </div>
                                    <div className="col-10 m-0 p-0">
                                      {division.divName}
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </DropdownModals>
                          <div className="d-flex align-items-center">
                            <div
                              className="dot mr-2"
                              style={{
                                backgroundColor:
                                  metal === 'Gold'
                                    ? '#ffd700'
                                    : metal === 'Silver'
                                    ? '#c0c0c0'
                                    : '#cd7f32',
                              }}
                            />
                          </div>{' '}
                          {metal}
                          <DropdownModals>
                            <li
                              onClick={() => {
                                setMetal('Gold');
                              }}
                            >
                              <div className="row p-0 m-0">
                                <div className="col-2 m-0 p-0">
                                  <div
                                    className="dot mr-1"
                                    style={{ backgroundColor: '#ffd700' }}
                                  ></div>
                                </div>
                                <div className="col-10 m-0 p-0">Gold</div>
                              </div>
                            </li>
                            <li
                              onClick={() => {
                                setMetal('Silver');
                              }}
                            >
                              <div className="row p-0 m-0">
                                <div className="col-2 m-0 p-0">
                                  <div
                                    className="dot mr-1"
                                    style={{ backgroundColor: '#c0c0c0' }}
                                  ></div>
                                </div>
                                <div className="col-10 m-0 p-0">Silver</div>
                              </div>
                            </li>
                            <li
                              onClick={() => {
                                setMetal('Bronze');
                              }}
                            >
                              <div className="row p-0 m-0">
                                <div className="col-2 m-0 p-0">
                                  <div
                                    className="dot mr-1"
                                    style={{ backgroundColor: '#cd7f32' }}
                                  ></div>
                                </div>
                                <div className="col-10 m-0 p-0">Bronze</div>
                              </div>
                            </li>
                          </DropdownModals>
                        </div>
                      </div>
                      <div className="bracket_header_date col-12 m-0 d-flex justify-content-start align-items-center">
                        <DatePicker
                          format="MM/DD/YYYY"
                          style={{
                            //  width: 150,
                            color: '#747474',
                            cursor: 'pointer',
                          }}
                          className="date_bracket"
                          bordered={false}
                          suffixIcon={null}
                          allowClear={false}
                          onChange={(e) => setDate1(e)}
                          placeholder={
                            bracketData &&
                            bracketData.division[divisionDropdown.idx] &&
                            bracketData.division[divisionDropdown.idx].startTime
                          }
                          popupStyle={{}}
                          disabledDate={disabledStartDate}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      fullscreen
                        ? 'container-fluid bracket_body_fullscreen m-0 p-0'
                        : // ? 'container-fluid bracket_body m-0 p-0'
                          'container-fluid bracket_body m-0 p-0'
                    }
                    style={screenOpaque ? { opacity: 0.5 } : {}}
                  >
                    <img
                      className="bracket_zoom"
                      src={zoomButton}
                      alt=""
                      onClick={() => {
                        setFullscreen(!fullscreen);
                      }}
                    />
                    {closeBracketLoading === true &&
                      completeBracketResponse && (
                        <div className="bracket_complete">
                          {completeBracketResponse.data.bracket}
                        </div>
                      )}
                    {closeBracketLoading === true && completeBracketError && (
                      <div className="bracket_complete">
                        {completeBracketError.bracket}
                      </div>
                    )}
                    {closeBracketLoading ? (
                      completeBracketResponse === null ? (
                        <div className="on_bracket_save d-flex justify-content-start align-items-center">
                          <LoadingSpinner />
                          <div className="pl-2" style={{ fontSize: 12 }}>
                            Closing Bracket...
                          </div>
                        </div>
                      ) : (
                        <div className="bracket_complete">
                          {completeBracketResponse.data.bracket}
                        </div>
                      )
                    ) : (
                      <></>
                    )}
                    <button
                      className="bracket_save"
                      id="yellow-button-hover"
                      style={{ outline: 'none' }}
                      onClick={async () => {
                        await setCloseBracketLoading(true);
                        await completeBracket({
                          data: JSON.stringify({
                            tournamentId: `${parseInt(props.match.params.id)}`,
                          }),
                        });
                        // await setCloseBracketLoading(false);
                        await setTimeout(() => {
                          setCloseBracketLoading(false);
                        }, [5000]);
                      }}
                    >
                      <span className="lower-back-button-text button_opacity">
                        COMPLETE BRACKET
                      </span>
                    </button>
                    {matchData.length > 0 &&
                      matchData[divisionDropdown.idx].map((div, id) => (
                        <DragDropContext onDragEnd={onDragEnd}>
                          <div
                            className={
                              fullscreen
                                ? 'bracket_body_column_fullscreen d-flex flex-column m-0 p-0'
                                : 'bracket_body_column d-flex flex-column m-0 p-0'
                            }
                            // style={{ backgroundColor: '#f3f4f6' }}
                          >
                            {div &&
                              div.length > 0 &&
                              div.map((match, i) => (
                                <div
                                  className={
                                    fullscreen
                                      ? `bracket_match_box${
                                          id + 1
                                        }_fullscreen d-flex flex-column m-0 p-0 pr-2 pl-2`
                                      : // match.teamCount%2===1 && div.length === i+1?
                                        // `bracket_match_box${
                                        //   id===0?1:id
                                        // } d-flex flex-column m-0 p-0 pr-2 pl-2`
                                        //   :
                                        //     match.teamCount%2===1 && div.length-1 === i+1?
                                        //       `bracket_match_boxX${
                                        //         id + 1
                                        //       } d-flex flex-column m-0 p-0 pr-2 pl-2`
                                        //       :
                                        `bracket_match_box${
                                          id + 1
                                        } d-flex flex-column m-0 p-0 pr-2 pl-2`
                                  }
                                  onMouseLeave={onSaveBracket}
                                >
                                  {match.match_id === 'null' ? (
                                    <>
                                      <div className="bracket_match_header d-flex justify-content-between align-items-center mr-0 ml-0 mb-0 p-0">
                                        <div className="bracket_match_index">
                                          {/* #{` `}{id === 0 ? i + 1 : arrr[divisionDropdown.idx][id - 1].length + i + 1} */}
                                          {/* {console.log("$$$$$$$$$$$$$$$$$$$",id)} */}
                                          #{` `}
                                          {id === 0
                                            ? i + 1
                                            : id === 1
                                            ? arrr[divisionDropdown.idx][0]
                                                .length +
                                              i +
                                              1
                                            : id === 2
                                            ? arrr[divisionDropdown.idx][0]
                                                .length +
                                              arrr[divisionDropdown.idx][1]
                                                .length +
                                              i +
                                              1
                                            : id === 3
                                            ? arrr[divisionDropdown.idx][0]
                                                .length +
                                              arrr[divisionDropdown.idx][1]
                                                .length +
                                              arrr[divisionDropdown.idx][2]
                                                .length +
                                              i +
                                              1
                                            : id === 4
                                            ? arrr[divisionDropdown.idx][0]
                                                .length +
                                              arrr[divisionDropdown.idx][1]
                                                .length +
                                              arrr[divisionDropdown.idx][2]
                                                .length +
                                              arrr[divisionDropdown.idx][3]
                                                .length +
                                              i +
                                              1
                                            : id === 5
                                            ? arrr[divisionDropdown.idx][0]
                                                .length +
                                              arrr[divisionDropdown.idx][1]
                                                .length +
                                              arrr[divisionDropdown.idx][2]
                                                .length +
                                              arrr[divisionDropdown.idx][3]
                                                .length +
                                              arrr[divisionDropdown.idx][4]
                                                .length +
                                              i +
                                              1
                                            : i + 1}
                                        </div>
                                        <div className="bracket_match_court_date d-flex">
                                          Court
                                          <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{ fontSize: 12, width: 20 }}
                                          >
                                            00
                                          </div>
                                          |
                                          <div
                                            className="d-flex align-items-center justify-content-center"
                                            id="bracket_timepicker"
                                          >
                                            00:00 AM
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="bracket_match_header d-flex justify-content-between align-items-center mr-0 ml-0 mb-0 p-0">
                                      <div className="bracket_match_index">
                                        {/* #{` `}
                                    {id === 0
                                      ? i + 1
                                      : arrr[divisionDropdown.idx][id - 1]
                                          .length +
                                        i +
                                        1} */}
                                        #{` `}
                                        {id === 0
                                          ? i + 1
                                          : id === 1
                                          ? arrr[divisionDropdown.idx][0]
                                              .length +
                                            i +
                                            1
                                          : id === 2
                                          ? arrr[divisionDropdown.idx][0]
                                              .length +
                                            arrr[divisionDropdown.idx][1]
                                              .length +
                                            i +
                                            1
                                          : id === 3
                                          ? arrr[divisionDropdown.idx][0]
                                              .length +
                                            arrr[divisionDropdown.idx][1]
                                              .length +
                                            arrr[divisionDropdown.idx][2]
                                              .length +
                                            i +
                                            1
                                          : id === 4
                                          ? arrr[divisionDropdown.idx][0]
                                              .length +
                                            arrr[divisionDropdown.idx][1]
                                              .length +
                                            arrr[divisionDropdown.idx][2]
                                              .length +
                                            arrr[divisionDropdown.idx][3]
                                              .length +
                                            i +
                                            1
                                          : id === 5
                                          ? arrr[divisionDropdown.idx][0]
                                              .length +
                                            arrr[divisionDropdown.idx][1]
                                              .length +
                                            arrr[divisionDropdown.idx][2]
                                              .length +
                                            arrr[divisionDropdown.idx][3]
                                              .length +
                                            arrr[divisionDropdown.idx][4]
                                              .length +
                                            i +
                                            1
                                          : i + 1}
                                      </div>
                                      <div className="bracket_match_court_date d-flex">
                                        Court
                                        <input
                                          className="form-control m-0 p-0 pl-1 text-center d-flex align-items-start"
                                          type="text"
                                          maxLength="2"
                                          placeholder={match.court}
                                          data-column={match.bracket_type - 1}
                                          data-matchno={i}
                                          data-matchid={match.match_id}
                                          value={
                                            match.court !== 'null'
                                              ? match.court
                                              : '00'
                                          }
                                          onChange={handleCourtChange}
                                          style={{
                                            width: 20,
                                            height: 16,
                                            direction: 'rtl',
                                            backgroundColor: 'transparent',
                                            outline: 'none',
                                            border: 'none',
                                            fontSize: 12,
                                            height: 16,
                                          }}
                                        />
                                        |
                                        <TimePicker
                                          format="h:mm A"
                                          style={{
                                            width: 45,
                                            height: 18,
                                            cursor: 'pointer',
                                          }}
                                          bordered={false}
                                          suffixIcon={null}
                                          className="pr-0 text-uppercase p-0"
                                          allowClear={false}
                                          data-column={match.bracket_type - 1}
                                          data-matchno={i}
                                          data-matchid={match.match_id}
                                          data-date={
                                            match.start_time !== 'null'
                                              ? match.start_time.substr(
                                                  0,
                                                  match.start_time.indexOf(' ')
                                                )
                                              : '2021-03-08'
                                          }
                                          onChange={(e) =>
                                            handleDateChange(
                                              e,
                                              match.start_time.substr(
                                                0,
                                                match.start_time.indexOf(' ')
                                              ),
                                              match.match_id,
                                              match.bracket_type - 1,
                                              i
                                            )
                                          }
                                          // placeholder={
                                          //   match.start_time !== 'null'
                                          //     ? match.start_time.substr(
                                          //         match.start_time.indexOf(' ') + 1
                                          //       )
                                          //     : '00:00:AM'
                                          // }
                                          // defaultValue={moment(moment("12:15 AM", ["h:mm A"]).format("HH:mm"),'HH:mm:ss')}
                                          value={
                                            match.start_time !== 'null'
                                              ? moment(
                                                  moment(
                                                    match.start_time.slice(
                                                      match.start_time.length -
                                                        8
                                                    ),
                                                    ['h:mm A']
                                                  ).format('HH:mm'),
                                                  'HH:mm:ss'
                                                )
                                              : '00:00:AM'
                                          }
                                          id="bracket_timepicker"
                                        />
                                      </div>
                                    </div>
                                  )}

                                  {match.match_id === 'null' ? (
                                    match.teamCount % 2 === 1 &&
                                    div.length === i + 1 ? (
                                      <>
                                        <div className="m-0 p-0">
                                          {/* {[...Array(2)].map((item, index) => ( */}
                                          <div
                                            className={
                                              fullscreen
                                                ? 'bracket_match_team_1_fs row m-0 p-0 mb-1'
                                                : 'bracket_match_team_1 row m-0 p-0 mb-1'
                                            }
                                          >
                                            <div className="bracket_match_team_no_0 col-2 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                            <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center"></div>
                                            <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                                              <div className="row m-0 p-0 d-flex flex-column">
                                                <div className="bracket_match_player_1 m-auto text-truncate"></div>
                                                <div className="bracket_match_player_2 m-auto text-truncate"></div>
                                              </div>
                                            </div>
                                            <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                          </div>
                                          {/* ))} */}
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="m-0 p-0">
                                          {[...Array(2)].map((item, index) => (
                                            <div
                                              className={
                                                fullscreen
                                                  ? 'bracket_match_team_1_fs row m-0 p-0 mb-1'
                                                  : 'bracket_match_team_1 row m-0 p-0 mb-1'
                                              }
                                            >
                                              <div className="bracket_match_team_no_0 col-2 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                              <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center"></div>
                                              <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                                                <div className="row m-0 p-0 d-flex flex-column">
                                                  <div className="bracket_match_player_1 m-auto text-truncate"></div>
                                                  <div className="bracket_match_player_2 m-auto text-truncate"></div>
                                                </div>
                                              </div>
                                              <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                            </div>
                                          ))}
                                        </div>
                                      </>
                                    )
                                  ) : (
                                    <>
                                      <Droppable
                                        droppableId={
                                          match.hasOwnProperty('match_id')
                                            ? match.match_id.toString()
                                            : Math.floor(
                                                Math.random() * 1000 + 1
                                              ).toString()
                                        }
                                      >
                                        {(provided, snapshot) => (
                                          <div
                                            className={
                                              fullscreen
                                                ? `row draggable_card_fs m-0 p-0`
                                                : ` draggable_card m-0 p-0`
                                            }
                                            ref={provided.innerRef}
                                            style={getListStyle(
                                              snapshot.isDraggingOver
                                            )}
                                          >
                                            {match.teamPlayers.map(
                                              (item, index) => (
                                                <>
                                                  {/* {match[`team${index + 1}_id`]===null?( */}
                                                  {/* {console.log(item[0].teamId)} */}

                                                  {match[
                                                    `team${index + 1}_id`
                                                  ] === null &&
                                                  div.length !== i + 1 ? (
                                                    <>
                                                      <div className="m-0 p-0">
                                                        <div
                                                          className={
                                                            fullscreen
                                                              ? 'bracket_match_team_1_fs row m-0 p-0 mb-1'
                                                              : 'bracket_match_team_1 row m-0 p-0 mb-1'
                                                          }
                                                        >
                                                          <div className="bracket_match_team_no_0 col-2 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                                          <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center"></div>
                                                          <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                                                            <div className="row m-0 p-0 d-flex flex-column">
                                                              <div className="bracket_match_player_1 m-auto text-truncate"></div>
                                                              <div className="bracket_match_player_2 m-auto text-truncate"></div>
                                                            </div>
                                                          </div>
                                                          <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                                        </div>
                                                      </div>
                                                    </>
                                                  ) : match[
                                                      `team${index + 1}_id`
                                                    ] === null &&
                                                    div.length === i + 1 ? (
                                                    match.teamCount % 2 ===
                                                    1 ? (
                                                      <></>
                                                    ) : (
                                                      <div className="m-0 p-0">
                                                        <div
                                                          className={
                                                            fullscreen
                                                              ? 'bracket_match_team_1_fs row m-0 p-0 mb-1'
                                                              : 'bracket_match_team_1 row m-0 p-0 mb-1'
                                                          }
                                                        >
                                                          <div className="bracket_match_team_no_0 col-2 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                                          <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center"></div>
                                                          <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                                                            <div className="row m-0 p-0 d-flex flex-column">
                                                              <div className="bracket_match_player_1 m-auto text-truncate"></div>
                                                              <div className="bracket_match_player_2 m-auto text-truncate"></div>
                                                            </div>
                                                          </div>
                                                          <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center"></div>
                                                        </div>
                                                      </div>
                                                    )
                                                  ) : (
                                                    <Draggable
                                                      key={
                                                        match[
                                                          `team${index + 1}_id`
                                                        ]
                                                      }
                                                      draggableId={
                                                        match[
                                                          `team${index + 1}_id`
                                                        ] &&
                                                        match[
                                                          `team${index + 1}_id`
                                                        ].toString()
                                                      }
                                                      index={index}
                                                    >
                                                      {(provided, snapshot) => (
                                                        <div
                                                          className={
                                                            fullscreen
                                                              ? 'bracket_match_team_1_fs row m-0 p-0 mb-1'
                                                              : 'bracket_match_team_1 row m-0 p-0 mb-1'
                                                          }
                                                          ref={
                                                            provided.innerRef
                                                          }
                                                          {...provided.draggableProps}
                                                          {...provided.dragHandleProps}
                                                        >
                                                          {/* {console.log(div.length)} */}
                                                          <div
                                                            className={
                                                              div.length === 1
                                                                ? match.wining_team ===
                                                                  item[0].teamId
                                                                  ? `bracket_match_team_winner_0 col-2 m-0 p-0 d-flex justify-content-center align-items-center`
                                                                  : `bracket_match_team_winner_1 col-2 m-0 p-0 d-flex justify-content-center align-items-center`
                                                                : `bracket_match_team_no_${
                                                                    item[0] &&
                                                                    item[0]
                                                                      .wining_team_id
                                                                  } col-2 m-0 p-0 d-flex justify-content-center align-items-center`
                                                            }
                                                          >
                                                            {/* {match[
                                                        `team${index + 1}_rank`
                                                      ] === null
                                                        ? ''
                                                        : match[
                                                            `team${
                                                              index + 1
                                                            }_rank`
                                                          ]} */}
                                                            {
                                                              match[
                                                                `team${
                                                                  index + 1
                                                                }Player`
                                                              ][0][
                                                                `team${
                                                                  index + 1
                                                                }Rank`
                                                              ]
                                                            }
                                                          </div>
                                                          <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center">
                                                            {/* <div className="row m-0 p-0">
                                                          <div className="col-12 m-0 p-0"> */}
                                                            {item[0] && (
                                                              <img
                                                                src={
                                                                  item[0]
                                                                    .profilePic ===
                                                                  ''
                                                                    ? `${defaultIcon2}`
                                                                    : `${process.env.REACT_APP_PLAYER_COURT_URL}/${item[0].profilePic}`
                                                                }
                                                                className={
                                                                  fullscreen
                                                                    ? `img-fluid bracket_match_player_1_img_fs`
                                                                    : `img-fluid bracket_match_player_1_img`
                                                                }
                                                                // id="bracket_match_player_1_img_2v2"
                                                                alt=""
                                                                onError={(e) =>
                                                                  (e.target.src =
                                                                    defaultIcon2)
                                                                }
                                                              />
                                                            )}
                                                            {item[1] && (
                                                              <img
                                                                src={
                                                                  item[1]
                                                                    .profilePic ===
                                                                  ''
                                                                    ? `${defaultIcon2}`
                                                                    : `${process.env.REACT_APP_PLAYER_COURT_URL}/${item[1].profilePic}`
                                                                }
                                                                className={
                                                                  fullscreen
                                                                    ? `img-fluid bracket_match_player_2_img_fs`
                                                                    : `img-fluid bracket_match_player_2_img`
                                                                }
                                                                alt=""
                                                                onError={(e) =>
                                                                  (e.target.src =
                                                                    defaultIcon2)
                                                                }
                                                              />
                                                            )}
                                                            {/* </div>
                                                        </div> */}

                                                            {/* {item[2] && (<img src={item[2].profilePic===""?`${defaultIcon2}`:`http://fanwins.in/${item[2].profilePic}`} className="bracket_match_player_2_img" alt=""/>)}
                                                          {item[3] && (<img src={item[3].profilePic===""?`${defaultIcon2}`:`http://fanwins.in/${item[3].profilePic}`} className="bracket_match_player_2_img" alt=""/>)}
                                                          {item[4] && (<img src={item[4].profilePic===""?`${defaultIcon2}`:`http://fanwins.in/${item[4].profilePic}`} className="bracket_match_player_2_img" alt=""/>)}
                                                          {item[5] && (<img src={item[5].profilePic===""?`${defaultIcon2}`:`http://fanwins.in/${item[5].profilePic}`} className="bracket_match_player_2_img" alt=""/>)} */}

                                                            {/* {item.map((img,imgIdx)=>
                                                            <img src={item[imgIdx].profilePic===null?`${defaultIcon2}`:`http://fanwins.in/${item[imgIdx].profilePic}`} className={`bracket_match_player_${imgIdx+1}_img`} alt=""/>
                                                          )} */}
                                                          </div>
                                                          <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                                                            <div className="row m-0 p-0 d-flex flex-column">
                                                              <div
                                                                className={
                                                                  fullscreen
                                                                    ? `bracket_match_player_1_fs m-auto text-truncate`
                                                                    : `bracket_match_player_1 m-auto text-truncate`
                                                                }
                                                              >
                                                                {item[0] &&
                                                                  item[0]
                                                                    .firstName}
                                                                {` `}
                                                                {item[0] &&
                                                                  item[0].lastName.charAt(
                                                                    0
                                                                  )}
                                                                {' .'}
                                                              </div>
                                                              <div
                                                                className={
                                                                  fullscreen
                                                                    ? `bracket_match_player_2_fs m-auto text-truncate`
                                                                    : `bracket_match_player_2 m-auto text-truncate`
                                                                }
                                                              >
                                                                {item[1] &&
                                                                  item[1]
                                                                    .firstName}
                                                                {` `}
                                                                {item[1] &&
                                                                  item[1].lastName.charAt(
                                                                    0
                                                                  )}
                                                                {' .'}
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className={
                                                              fullscreen
                                                                ? `bracket_match_team_score_fs col-4 m-0 p-0 d-flex justify-content-center align-items-center`
                                                                : `bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center`
                                                            }
                                                          >
                                                            <div className="row m-0 p-0">
                                                              {match[
                                                                `team${
                                                                  index + 1
                                                                }_score`
                                                              ][0] && (
                                                                <input
                                                                  type="text"
                                                                  className={
                                                                    fullscreen
                                                                      ? `col-3 m-0 bracket_score_fs form-control pl-1 pr-1`
                                                                      : `col-3 m-0 bracket_score form-control pl-1 pr-1`
                                                                  }
                                                                  autoComplete="off"
                                                                  data-column={
                                                                    match.bracket_type -
                                                                    1
                                                                  }
                                                                  data-matchno={
                                                                    i
                                                                  }
                                                                  data-teamno={
                                                                    index + 1
                                                                  }
                                                                  data-matchid={
                                                                    match.match_id
                                                                  }
                                                                  data-teamoneid={
                                                                    match.team1_id
                                                                  }
                                                                  data-teamtwoid={
                                                                    match.team2_id
                                                                  }
                                                                  data-setno="0"
                                                                  data-sett="1"
                                                                  maxLength="2"
                                                                  value={
                                                                    match[
                                                                      `team${
                                                                        index +
                                                                        1
                                                                      }_score`
                                                                    ][0][
                                                                      `team${
                                                                        index +
                                                                        1
                                                                      }_score`
                                                                    ]
                                                                  }
                                                                  placeholder="00"
                                                                  onChange={
                                                                    handleScoreChange
                                                                  }
                                                                  disabled={
                                                                    match[
                                                                      `team${
                                                                        index +
                                                                        1
                                                                      }_id`
                                                                    ] ===
                                                                      null &&
                                                                    div.length ===
                                                                      i + 1
                                                                      ? true
                                                                      : false
                                                                  }
                                                                />
                                                              )}
                                                              {match[
                                                                `team${
                                                                  index + 1
                                                                }_score`
                                                              ][1] && (
                                                                <>
                                                                  <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                                                                    -
                                                                  </div>
                                                                  <input
                                                                    type="text"
                                                                    className={
                                                                      fullscreen
                                                                        ? `col-3 m-0 bracket_score_fs form-control pl-1 pr-1`
                                                                        : `col-3 m-0 bracket_score form-control pl-1 pr-1`
                                                                    }
                                                                    autoComplete="off"
                                                                    data-column={
                                                                      match.bracket_type -
                                                                      1
                                                                    }
                                                                    data-matchno={
                                                                      i
                                                                    }
                                                                    data-teamno={
                                                                      index + 1
                                                                    }
                                                                    data-matchid={
                                                                      match.match_id
                                                                    }
                                                                    data-teamoneid={
                                                                      match.team1_id
                                                                    }
                                                                    data-teamtwoid={
                                                                      match.team2_id
                                                                    }
                                                                    data-setno="1"
                                                                    data-sett="2"
                                                                    maxLength="2"
                                                                    value={
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][1][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ]
                                                                    }
                                                                    placeholder="00"
                                                                    onChange={
                                                                      handleScoreChange
                                                                    }
                                                                    disabled={
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][0][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ] ===
                                                                        null ||
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][0][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ] === ''
                                                                        ? true
                                                                        : false
                                                                    }
                                                                    // disabled={((match[`team${index + 1}_id`]===null && div.length === i+1) || (match[`team${index + 1}_score`[0][`team${index + 1}_score`] === null]))?true:false}
                                                                  />
                                                                </>
                                                              )}
                                                              {match[
                                                                `team${
                                                                  index + 1
                                                                }_score`
                                                              ][2] && (
                                                                <>
                                                                  <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">
                                                                    -
                                                                  </div>
                                                                  <input
                                                                    type="text"
                                                                    className={
                                                                      fullscreen
                                                                        ? `col-3 m-0 bracket_score_fs form-control pl-1 pr-1`
                                                                        : `col-3 m-0 bracket_score form-control pl-1 pr-1`
                                                                    }
                                                                    autoComplete="off"
                                                                    data-column={
                                                                      match.bracket_type -
                                                                      1
                                                                    }
                                                                    data-matchno={
                                                                      i
                                                                    }
                                                                    data-teamno={
                                                                      index + 1
                                                                    }
                                                                    data-matchid={
                                                                      match.match_id
                                                                    }
                                                                    data-teamoneid={
                                                                      match.team1_id
                                                                    }
                                                                    data-teamtwoid={
                                                                      match.team2_id
                                                                    }
                                                                    data-setno="2"
                                                                    data-sett="3"
                                                                    maxLength="2"
                                                                    value={
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][2][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ]
                                                                    }
                                                                    placeholder="00"
                                                                    onChange={
                                                                      handleScoreChange
                                                                    }
                                                                    disabled={
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][1][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ] ===
                                                                        null ||
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][1][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ] ===
                                                                        '' ||
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][0][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ] ===
                                                                        null ||
                                                                      match[
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ][0][
                                                                        `team${
                                                                          index +
                                                                          1
                                                                        }_score`
                                                                      ] === ''
                                                                        ? true
                                                                        : false
                                                                    }
                                                                    // disabled={match[`team${index + 1}_id`]===null && div.length === i+1?true:false}
                                                                  />
                                                                </>
                                                              )}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      )}
                                                    </Draggable>
                                                  )}
                                                </>
                                              )
                                            )}
                                            {provided.placeholder}
                                          </div>
                                        )}
                                      </Droppable>
                                    </>
                                  )}
                                </div>
                              ))}
                          </div>
                        </DragDropContext>
                      ))}

                    <div
                      className={
                        fullscreen
                          ? 'bracket_body_column_fullscreen d-flex flex-column m-0 p-0'
                          : 'bracket_body_column d-flex flex-column m-0 p-0'
                      }
                      style={{
                        //  backgroundColor: '#f3f4f6',
                        width: 300,
                        height: 300,
                      }}
                    >
                      <div style={{ width: 300, height: 300 }}>
                        <img
                          //  className={`bracket_event_icon${matchData[divisionDropdown.idx].length + 1} pl-3 img-fluid`}
                          className={`bracket_event_icon${
                            matchData &&
                            matchData[divisionDropdown.idx] &&
                            matchData[divisionDropdown.idx].length + 1
                          } pl-3`}
                          src={
                            bracketData &&
                            bracketData.tournamentPic !== null &&
                            bracketData.tournamentPic !== ''
                              ? `${process.env.REACT_APP_BASE_URL}/${bracketData.tournamentPic}`
                              : defaultIcon3
                          }
                          alt=""
                          onError={(e) => (e.target.src = defaultIcon3)}
                          style={{ width: 300, height: 300 }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {(scoreActive || poolActive) && (
        <>
          <Footer>
            <div className="m-0 col-auto d-flex align-items-center ml-auto">
              {/* {saveLoading?((generateBracketError === null || generateBracketError === undefined)?<div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Generating Bracket...</div></div>:<div className="on_save_error">{generateBracketError}</div>):<></>} */}
              <div
                className="NEW_TEMPLATE"
                id="yellow-button-hover"
                // onClick={onOpenModal}
                onClick={() =>
                  props.history.push(
                    `/bracketDivisionEdit/${parseInt(props.match.params.id)}`
                  )
                }
              >
                <div className="NewTemplateButtonText">INITIATE BRACKET</div>
              </div>
            </div>
          </Footer>
          <Modal
            open={open}
            onClose={onCloseModal}
            closeIcon={closeIcon}
            center
            styles={{
              modal: {
                borderRadius: 12,
                boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
                margin: 0,
                padding: 0,
              },
            }}
          >
            {saveLoading ? (
              <div className="profile_successfully_deleted">
                {saveLoading ? (
                  generateBracketError === null ||
                  generateBracketError === undefined ? (
                    generateBracketMessage === null ? (
                      <div className="on_save_message_brackets d-flex justify-content-center align-items-center">
                        <LoadingSpinner />
                      </div>
                    ) : (
                      <div className="on_save_message_brackets d-flex justify-content-center align-items-center">
                        <div className="pl-2">{generateBracketMessage}</div>
                      </div>
                    )
                  ) : (
                    <div className="on_save_error_brackets">
                      {generateBracketError}
                    </div>
                  )
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <>
                <div
                  className="text-center"
                  style={{
                    marginTop: 62,
                    fontFamily: 'Futura',
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 'normal',
                    color: '#4a4a4a',
                  }}
                >
                  The bracket may have already been initaied,
                </div>
                <p
                  className="text-center"
                  style={{
                    width: 398,
                    marginTop: 8,
                    fontSize: 10,
                    fontFamily: 'Futura',
                    fontWeight: 'bold',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 'normal',
                    color: '#9b9b9b',
                  }}
                >
                  Do you want to continue?
                </p>
                <div
                  className="row container"
                  style={{ marginTop: 79, marginBottom: 24 }}
                >
                  <div className="col-12 text-center m-auto">
                    <button
                      type="button"
                      className="btn-sm ml-5"
                      id="white-button-hover"
                      onClick={onCloseModal}
                      style={{
                        border: '1px solid yellow',
                        borderRadius: 15,
                        width: 112,
                        height: 24,
                        fontSize: 10,
                        backgroundColor: '#ffffff',
                        outline: 0,
                        color: '#4a4a4a',
                      }}
                    >
                      NO, CANCEL
                    </button>
                    <button
                      className="btn-sm pb-1 ml-3"
                      id="yellow-button-hover"
                      onClick={async () => {
                        await setSaveLoading(true);
                        await generateBracket(parseInt(props.match.params.id));
                        await onGenerateClick();
                        // if(generateBracketError !==null){
                        //   setBracketActive(false);
                        //   await setTimeout(
                        //     () => {
                        //       onCloseModal();
                        //     },
                        //     5000
                        //   );
                        // }
                        // else if(generateBracketError ===null){
                        //   await setTimeout(
                        //     async () => {
                        //       await getBracket(parseInt(props.match.params.id));
                        //       await setBracketActive(true);
                        //       await onCloseModal();
                        //     },
                        //     3000
                        //   );
                        // }
                      }}
                      style={{
                        border: '1px solid yellow',
                        borderRadius: 15,
                        width: 112,
                        height: 24,
                        fontSize: 10,
                        backgroundColor: '#ffd420',
                        outline: 0,
                        color: '#4a4a4a',
                      }}
                    >
                      YES, CONTINUE
                    </button>
                  </div>
                </div>
              </>
            )}
          </Modal>
        </>
      )}
    </div>
  );
};

export default Scores;
