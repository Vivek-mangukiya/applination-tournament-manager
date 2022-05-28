import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  createRef,
} from "react";
import "./Scores.css";
import divisionImage from "../../assets/images/division.svg";
import hamburgerIcon from "../../assets/images/icon-menu-hamburger.svg";
import downArrow from "../../assets/images/icon-menu-chevron-down.svg";
import pointsIcon from "../../assets/images/icon-orange-points.svg";
import Footer from "../../components/footer/Footer";
import backIcon from "../../assets/images/icon-menu-back.svg";
import cardIcon from "../../assets/images/icon-menu-cards-disable.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import Header from "../../components/header/Header";
import RegEventDropDown from "../../components/RegEventDropDown";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import menuchevrondownicon from "../../assets/images/icon-menu-chevron-down.svg";
import { Collapse } from "antd";
import ScoresContext from "../../context/scores/ScoresContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import defaultIcon3 from "../../assets/images/defaultIcon3.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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

const ScoresEdit = (props) => {
  const scoreContext = useContext(ScoresContext);
  const {
    tournamentScores,
    editScore,
    getScoresById,
    scoreEditError,
    clearScoreEditError,
  } = scoreContext;

  const [adandum1, setAdandum1] = useState(false);
  const [adandum2, setAdandum2] = useState(false);
  const [adandum3, setAdandum3] = useState(false);

  useEffect(() => {
    console.log("Scores id by url:", parseInt(props.match.params.id));
    getScoresById(parseInt(props.match.params.id));
  }, []);

  useEffect(() => {
    if (tournamentScores !== null)
      console.log("tournamentScores", tournamentScores);
  }, [tournamentScores]);

  let divisions = [];
  let games = [];
  let scoresArray = [];
  let scoresIndividual = [];
  let scoreInitialState = [];
  let firstScoreArray2 = [];
  let changedScores = [];
  let gamesIndividual = [];
  let refsIndividual = [];
  let errorsIndividual = [];
  let numErrorsIndividual = [];
  // let changedScores = {};

  if (tournamentScores !== null) {
    for (let i = 0; i < tournamentScores.gameDetail.length; i++) {
      divisions.push(tournamentScores.gameDetail[i]);
      gamesIndividual.push([]);
      refsIndividual.push([]);

      for (let j = 0; j < tournamentScores.gameDetail[i].game.length; j++) {
        games.push(tournamentScores.gameDetail[i].game[j]);
        scoresArray.push(tournamentScores.gameDetail[i].game[j].scoreDetail);
        gamesIndividual[i].push(
          tournamentScores.gameDetail[i].game[j].scoreDetail
        );
        refsIndividual[i].push(createRef());
        // errorsIndividual.push(tournamentScores.gameDetail[i].game[j].match_id)
        errorsIndividual.push({
          id: tournamentScores.gameDetail[i].game[j].match_id,
          errVal: null,
        });
        numErrorsIndividual.push({
          id: tournamentScores.gameDetail[i].game[j].match_id,
          errVal: null,
        });

        for (
          let k = 0;
          k < tournamentScores.gameDetail[i].game[j].scoreDetail.length;
          k++
        ) {
          scoresIndividual.push(
            tournamentScores.gameDetail[i].game[j].scoreDetail[k]
          );
          firstScoreArray2.push(
            tournamentScores.gameDetail[i].game[j].scoreDetail[k]
          );
        }
      }
    }
  }

  const [oneNullError, setOneNullError] = useState(null);
  const [oneNullErr, setOneNullErr] = useState(errorsIndividual);
  const [numberErr, setNumberErr] = useState(numErrorsIndividual);

  const updateItem = (id, whichvalue, newvalue, array) => {
    let index = array.findIndex((x) => x.id === parseInt(id));
    if (index !== -1) {
      let temporaryarray = array.slice();
      temporaryarray[index].errVal = newvalue;
      setOneNullErr(temporaryarray);
      console.log("temporaryArray:", temporaryarray);
    } else {
      console.log("no match");
    }
  };

  const elementsRef = useRef(games.map(() => createRef()));
  const eRef = useRef(
    gamesIndividual.map((game) => game.map(() => createRef()))
  );
  console.log("oneNuke:", errorsIndividual);

  console.log("eRef:", eRef);
  // const [scoreData, setScoreData] = useState(gamesIndividual?gamesIndividual:"gamesIndividual is null!");
  const [scoreData, setScoreData] = useState([]);
  const [updatedScore2, setUpdatedScore2] = useState([]);
  console.log("scoreData", scoreData);
  console.log("gamesIndividual", gamesIndividual);
  console.log("games", games);
  console.log("scoresArray", scoresArray);

  const [team1Score, setTeam1Score] = useState(null);
  const [team2Score, setTeam2Score] = useState(null);

  useEffect(() => {
    setScoreData(gamesIndividual);
  }, [tournamentScores]);

  const handleScoreChange = (e) => {
    const updatedScores = [...scoreData];
    console.log("e.target.dataset.index", e.target.dataset.index);
    updatedScores[e.target.dataset.index][e.target.dataset.idx].map((obj) => {
      if (parseInt(obj.set) === parseInt(e.target.dataset.set)) {
        obj[e.target.dataset.input] = isNaN(parseInt(e.target.value))
          ? null
          : parseInt(e.target.value);

        var selectedInput = {};
        selectedInput.match_id = e.target.dataset.match.toString();
        selectedInput.score_id = obj.score_id.toString();
        selectedInput.set = obj.set.toString();
        selectedInput.team1_score =
          obj.team1_score !== null ? obj.team1_score.toString() : null;
        selectedInput.team2_score =
          obj.team2_score !== null ? obj.team2_score.toString() : null;
        if (e.target.dataset.input === "team1_score") {
          selectedInput.team1_score = e.target.value.toString();
        } else if (e.target.dataset.input === "team2_score") {
          selectedInput.team2_score = e.target.value.toString();
        }
        const updatedScore3 = [...updatedScore2];
        updatedScore3.push(selectedInput);
        setUpdatedScore2(updatedScore3);
        console.log("selectedInput:", selectedInput);
        console.log("updatedScore2:", updatedScore2);
      }
    });
    setScoreData(updatedScores);
  };

  const [saveLoading, setSaveLoading] = useState(false);

  const onSave = async () => {
    console.log("Save clicked");

    //Filtering objects with same match_id, score_id and set, which ensures that only the latest version of object is passed.
    const cat = updatedScore2
      .slice()
      .reverse()
      .filter(
        (v, i, a) =>
          a.findIndex(
            (t) =>
              t.match_id === v.match_id &&
              t.score_id === v.score_id &&
              t.set === v.set
          ) === i
      )
      .reverse();
    // const updatedScoresWithOneNull= cat.filter(score=>score.team1_score===null || score.team2_score===null)
    // const updatedScoresWithOneNull= cat.filter(score=>(score.team1_score===null && score.team2_score!=='')|| (score.team2_score===null && score.team1_score!==''))

    const updatedScoresWithOneNull = cat.filter(
      (score) =>
        (score.team1_score === null && score.team2_score !== "") ||
        (score.team2_score === null && score.team1_score !== "") ||
        (score.team1_score === "" && isNaN(score.team2_score)) ||
        (score.team2_score === "" && isNaN(score.team1_score))
    );

    const updatedScoresWithNoNull = cat.filter(
      (score) => score.team1_score !== null && score.team2_score !== null
    );
    if (updatedScoresWithOneNull.length > 0) {
      console.log("updatedScoresWithOneNull:", updatedScoresWithOneNull);

      scroller.scrollTo(`card_${updatedScoresWithOneNull[0].match_id}`, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });

      oneNullErr.map((err) => {
        if (err.id === parseInt(updatedScoresWithOneNull[0].match_id)) {
          console.log("INNNNNNNN");
          updateItem(
            updatedScoresWithOneNull[0].match_id,
            "errVal",
            "Please enter both score teams",
            oneNullErr
          );
        }
      });
    } else if (updatedScoresWithOneNull.length === 0) {
      setSaveLoading(true);
      await clearScoreEditError();
      const data = { ...updatedScoresWithNoNull };
      console.log("Data sent to backend:", data);
      console.log("updatedScoresWithOneNull:", updatedScoresWithOneNull);
      await editScore({ data: JSON.stringify(data) });
      await props.history.push(`/scores/${parseInt(props.match.params.id)}`);
    }
  };

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div style={{ minHeight: "100vh" }}>
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
      {tournamentScores === null ? (
        <LoadingSpinner />
      ) : (
        <div className="new-event-profile container p-0 m-0 ">
          <div
            className="row px-0 mx-0"
            style={{ marginTop: 142, marginBottom: 73, paddingBottom: 130 }}
          >
            <div className="col-6 m-auto text-center">
              <div className="row p-0 m-0">
                <div className="col-12 p-0 example m-0">
                  {/* image and event name */}
                  <div className="container">
                    <div className="row p-0 m-0">
                      <div className="col-3 p-0 text-left">
                        <img
                          onError={(e) => (e.target.src = defaultIcon3)}
                          src={
                            tournamentScores.tournament_pic !== null
                              ? `${process.env.REACT_APP_BASE_URL}/${tournamentScores.tournament_pic}`
                              : divisionImage
                          }
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
                          style={{ display: "flex", flexDirection: "column" }}
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

                  {tournamentScores.gameDetail.map((division, index) => (
                    <Collapse
                      key={index}
                      expandIconPosition="right"
                      bordered={true}
                      ghost
                      className="p-0"
                      expandIcon={({ isActive }) => (
                        <span
                          className={
                            isActive ? "reg-rotate mt-2" : "reg-no-rotate mt-2"
                          }
                        >
                          <img src={menuchevrondownicon} alt="" />
                        </span>
                      )}
                      className=" reg-padding mb-3"
                    >
                      <Panel
                        className="px-0 pb-0 mb-5"
                        header={
                          <div className="row">
                            <div className="col-sm-2 my-auto m-0 p-0">
                              {division.division_name}
                            </div>
                            <div className="col-sm-10">
                              <hr
                                style={{
                                  height: 1,
                                  backgroundColor: "#333333",
                                  border: 0,
                                }}
                              />
                            </div>
                          </div>
                        }
                      >
                        {division.game.map((card, idx) => {
                          const team1set1 = `team1set1-${idx}`;
                          const team1set2 = `team1set2-${idx}`;
                          const team1set3 = `team1set3-${idx}`;
                          const team2set1 = `team2set1-${idx}`;
                          const team2set2 = `team2set2-${idx}`;
                          const team2set3 = `team2set3-${idx}`;

                          return (
                            <div className="row text-left" key={idx}>
                              <div className="col-12 p-0">
                                <Element name={`card_${card.match_id}`}>
                                  <div className="one_null_error">
                                    {oneNullErr.find(
                                      (err) => err.id === card.match_id
                                    ) &&
                                      oneNullErr.find(
                                        (err) => err.id === card.match_id
                                      ).errVal}
                                  </div>
                                </Element>
                                <div className="one_null_error">
                                  {numberErr.find(
                                    (err) => err.id === card.match_id
                                  ) &&
                                    numberErr.find(
                                      (err) => err.id === card.match_id
                                    ).errVal}
                                </div>
                                <div className="box-shadow-header-text pb-1">
                                  Game{` `}
                                  {card.game}
                                </div>
                                <div
                                  className="container row shadow-box p-0 m-0"
                                  style={{ height: 140 }}
                                >
                                  <div className="col-12 p-0">
                                    <div className="container row p-0 m-0 score_row_1">
                                      <div className="col-1 p-0 text-left pl-2 d-flex align-items-end">
                                        <img
                                          src={pointsIcon}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div className="col-6 p-0 d-flex box-shadow-text mt-auto mb-0">
                                        <div className="pr-4">
                                          {card.team1_rank && card.team1_rank}
                                        </div>
                                        <div>
                                          {card.Team1_name !== null
                                            ? card.Team1_name.replace(",", " /")
                                            : ""}
                                        </div>
                                      </div>
                                      <div className="col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-0">
                                        <div className="container row p-0 m-0 d-flex justify-content-end">
                                          <div className="score_points_total">
                                            {scoreData &&
                                              scoreData[index] &&
                                              scoreData[index][idx].reduce(
                                                function (tot, arr) {
                                                  // return the sum with previous value
                                                  return tot + arr.team1_score;
                                                  // set initial value as 0
                                                },
                                                0
                                              )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="container row p-0 m-0 score_row">
                                      <div className="col-1 p-0 text-left pl-2 d-flex align-items-center"></div>
                                      {/* <div className={scoreData[index][idx].length ===3?`col-6 p-0 text-left box-shadow-text mt-auto mb-auto`:(scoreData[index][idx].length ===2?`col-8 p-0 text-left box-shadow-text mt-auto mb-auto`:`col-9 p-0 text-left box-shadow-text mt-auto mb-auto`)}></div>
                                      <div className={scoreData[index][idx].length ===3?`col-5 p-0 text-right box-shadow-text mt-auto mb-auto`:(scoreData[index][idx].length ===2?`col-3 p-0 text-right box-shadow-text mt-auto mb-auto`:`col-2 p-0 text-right box-shadow-text mt-auto mb-auto`)}> */}
                                      <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto"></div>
                                      <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                                        <div className="container row p-0 m-0 d-flex justify-content-end">
                                          <div className="pr-4 score_sets d-flex align-items-center"></div>
                                        </div>
                                        <div className="container row p-0 m-0">
                                          {scoreData &&
                                            scoreData[index] &&
                                            scoreData[index][idx].length ===
                                              3 && (
                                              <>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets d-flex justify-content-center">
                                                    Set 1
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team1set1}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team1_score"
                                                      data-set="1"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team1set1}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 1 &&
                                                              obj.team1_score !==
                                                                null
                                                            )
                                                              return obj.team1_score;
                                                            else return;
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets  d-flex justify-content-center">
                                                    Set 2
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team1set2}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team1_score"
                                                      data-set="2"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team1set2}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 2 &&
                                                              obj.team1_score !==
                                                                null
                                                            ) {
                                                              return obj.team1_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 pr-1 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets  d-flex justify-content-center">
                                                    Set 3
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team1set3}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team1_score"
                                                      data-set="3"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team1set3}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 3 &&
                                                              obj.team1_score !==
                                                                null
                                                            ) {
                                                              return obj.team1_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                          {scoreData &&
                                            scoreData[index] &&
                                            scoreData[index][idx].length ===
                                              2 && (
                                              <>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets d-flex justify-content-center">
                                                    Set 1
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team1set1}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team1_score"
                                                      data-set="1"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team1set1}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 1 &&
                                                              obj.team1_score !==
                                                                null
                                                            )
                                                              return obj.team1_score;
                                                            else return;
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets  d-flex justify-content-center">
                                                    Set 2
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team1set2}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team1_score"
                                                      data-set="2"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team1set2}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 2 &&
                                                              obj.team1_score !==
                                                                null
                                                            ) {
                                                              return obj.team1_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                          {scoreData &&
                                            scoreData[index] &&
                                            scoreData[index][idx].length ===
                                              1 && (
                                              <>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets d-flex justify-content-center">
                                                    Set 1
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team1set1}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team1_score"
                                                      data-set="1"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team1set1}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 1 &&
                                                              obj.team1_score !==
                                                                null
                                                            )
                                                              return obj.team1_score;
                                                            else return;
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                          {/* <div className="col-1 m-0 p-0"/> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 p-0">
                                    <div className="container row p-0 m-0 score_row_1">
                                      <div className="col-1 p-0 text-left pl-2 d-flex align-items-end">
                                        <img
                                          src={pointsIcon}
                                          alt=""
                                          className="img-fluid "
                                        />
                                      </div>
                                      <div className="col-6 p-0 d-flex box-shadow-text mt-auto mb-0">
                                        <div className="pr-4">
                                          {card.team2_rank && card.team2_rank}
                                        </div>
                                        <div>
                                          {card.Team2_name !== null
                                            ? card.Team2_name.replace(",", " /")
                                            : ""}
                                        </div>
                                      </div>
                                      <div className="col-5 p-0 text-right box-shadow-text pr-2 mt-auto mb-0">
                                        <div className="container row p-0 m-0 d-flex justify-content-end">
                                          <div className="pr-4 score_sets d-flex align-items-center"></div>
                                          <div className="score_points_total">
                                            {scoreData &&
                                              scoreData[index] &&
                                              scoreData[index][idx].reduce(
                                                function (tot, arr) {
                                                  return tot + arr.team2_score;
                                                },
                                                0
                                              )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="container row p-0 m-0 score_row">
                                      <div className="col-1 p-0 text-left pl-2 d-flex align-items-center"></div>
                                      <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto"></div>
                                      <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                                        <div className="container row p-0 m-0 d-flex justify-content-end">
                                          <div className="pr-4 score_sets d-flex align-items-center"></div>
                                        </div>
                                        <div className="container row p-0 m-0">
                                          {scoreData &&
                                            scoreData[index] &&
                                            scoreData[index][idx].length ===
                                              3 && (
                                              <>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets  d-flex justify-content-center">
                                                    Set 1
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team2set1}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team2_score"
                                                      data-set="1"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team2set1}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 1 &&
                                                              obj.team2_score !==
                                                                null
                                                            ) {
                                                              return obj.team2_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                    {/* </u> */}
                                                  </div>
                                                </div>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets d-flex justify-content-center">
                                                    Set 2
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team2set2}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team2_score"
                                                      data-set="2"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team2set2}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 2 &&
                                                              obj.team2_score !==
                                                                null
                                                            ) {
                                                              return obj.team2_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                    {/* </u> */}
                                                  </div>
                                                </div>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 pr-1 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets d-flex justify-content-center">
                                                    Set 3
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team2set3}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team2_score"
                                                      data-set="3"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team2set3}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 3 &&
                                                              obj.team2_score !==
                                                                null
                                                            ) {
                                                              return obj.team2_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                    {/* </u> */}
                                                  </div>
                                                </div>
                                              </>
                                            )}

                                          {scoreData &&
                                            scoreData[index] &&
                                            scoreData[index][idx].length ===
                                              2 && (
                                              <>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets  d-flex justify-content-center">
                                                    Set 1
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team2set1}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team2_score"
                                                      data-set="1"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team2set1}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 1 &&
                                                              obj.team2_score !==
                                                                null
                                                            ) {
                                                              return obj.team2_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                    {/* </u> */}
                                                  </div>
                                                </div>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets d-flex justify-content-center">
                                                    Set 2
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team2set2}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team2_score"
                                                      data-set="2"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team2set2}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 2 &&
                                                              obj.team2_score !==
                                                                null
                                                            ) {
                                                              return obj.team2_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                    {/* </u> */}
                                                  </div>
                                                </div>
                                              </>
                                            )}

                                          {scoreData &&
                                            scoreData[index] &&
                                            scoreData[index][idx].length ===
                                              1 && (
                                              <>
                                                <div className="col-1 m-0 p-0" />
                                                <div className="col-3 row p-0 m-0 d-flex justify-content-end flex-column">
                                                  <div className="score_sets  d-flex justify-content-center">
                                                    Set 1
                                                  </div>
                                                  <div className="score_points">
                                                    <input
                                                      type="text"
                                                      name={team2set1}
                                                      data-idx={idx}
                                                      data-index={index}
                                                      data-input="team2_score"
                                                      data-set="1"
                                                      data-match={card.match_id}
                                                      className="team1_score form-control p-auto"
                                                      id={team2set1}
                                                      autoComplete="off"
                                                      value={
                                                        scoreData &&
                                                        scoreData[index] &&
                                                        scoreData[index][idx]
                                                          .map((obj) => {
                                                            if (
                                                              obj.set === 1 &&
                                                              obj.team2_score !==
                                                                null
                                                            ) {
                                                              return obj.team2_score;
                                                            }
                                                          })
                                                          .join("")
                                                      }
                                                      onChange={
                                                        handleScoreChange
                                                      }
                                                      maxLength="2"
                                                    />
                                                    {/* </u> */}
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="scores_ref">
                                  REF{` `}
                                  {card.reffing_team_rank}
                                  {` `}
                                  {card.reffing_team_name}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Panel>
                    </Collapse>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer>
            <div className="m-0 col-auto ml-auto mt-3">
              <div className="lower-back-button-cancel" onClick={onOpenModal}>
                <span className="lower-back-button-text">CANCEL</span>
              </div>
            </div>
            <div className="m-0 col-auto mt-3" style={{ position: "relative" }}>
              {saveLoading ? (
                scoreEditError === null ? (
                  <div className="on_save_message d-flex justify-content-center align-items-center">
                    <LoadingSpinner />
                    <div className="pl-2">Editing Score...</div>
                  </div>
                ) : (
                  <div className="on_save_error">
                    {scoreEditError && scoreEditError.message}
                  </div>
                )
              ) : (
                <></>
              )}
              <div className="lower-back-button" onClick={onSave}>
                <span className="lower-back-button-text">SAVE</span>
              </div>
            </div>
          </Footer>
          {/* modal */}
          <Modal
            open={open}
            onClose={onCloseModal}
            closeIcon={closeIcon}
            center
            styles={{
              modal: {
                borderRadius: 12,
                boxShadow: "0 1 2 0 rgba(0,0,0,0.2",
                margin: 0,
                padding: 0,
              },
            }}
          >
            <div
              className="text-center"
              style={{
                marginTop: 62,
                fontFamily: "Futura",
                fontSize: 14,
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                letterSpacing: "normal",
                color: "#4a4a4a",
              }}
            >
              Are your sure you want to cancel?
            </div>
            <p
              className="text-center"
              style={{
                width: 398,
                marginTop: 8,
                fontSize: 10,
                fontFamily: "Futura",
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                letterSpacing: "normal",
                color: "#9b9b9b",
              }}
            >
              All changes will not be saved and progress will be lost.
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
                    border: "1px solid yellow",
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: "#ffffff",
                    outline: 0,
                    color: "#4a4a4a",
                  }}
                >
                  NO, CONTINUE
                </button>
                <button
                  className="btn-sm pb-1 ml-3"
                  id="yellow-button-hover"
                  onClick={() => props.history.goBack()}
                  style={{
                    border: "1px solid yellow",
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: "#ffd420",
                    outline: 0,
                    color: "#4a4a4a",
                  }}
                >
                  YES, CANCEL
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ScoresEdit;
