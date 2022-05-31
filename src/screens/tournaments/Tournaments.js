import orangedownarrow from "../../assets/images/icon-filter-arrow.svg";
import orangeuparrow from "../../assets/images/orange-up-arrow.png";
import greyuparrow from "../../assets/images/orange-up-arrow-grey.png";
import greydownarrow from "../../assets/images/grey-down-arrow.png";
import Header from "../../components/header/Header";

import pointsIcon from "../../assets/images/icon-orange-points.svg";
import Footer from "../../components/footer/Footer";
import backIcon from "../../assets/images/icon-menu-back.svg";
import cardIcon from "../../assets/images/icon-menu-cards-disable.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import RegEventDropDown from "../../components/RegEventDropDown";
import menuchevrondownicon from "../../assets/images/icon-menu-chevron-down.svg";
import { useContext, useEffect, useState } from "react";
import tournamentsContext from "../../context/tournaments/tournamentsContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./Tournaments.css";

const imagesPath = {
  orange: orangedownarrow,
  white: orangeuparrow,
  greyup: greyuparrow,
  greydown: greydownarrow,
};

const Tournaments = () => {
  const TournamentContext = useContext(tournamentsContext);
  const { tournamentList, tournamentLoading, tournamentError, getTournaments } =
    TournamentContext;

  const ListItems = ({ list }) => {
    console.log({ list });
    const listItems = list.map((items, index) => {
      return (
        <li
          className="row mx-0 px-0 rectangleTable"
          key={index}
          style={{
            cursor: "context-menu",
            padding: "0px",
            margin: "0px",
            height: 40,
          }}
        >
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            <img
              src={
                process.env.REACT_APP_PLAYER_COURT_URL + items.tournament_pic
              }
              style={{
                width: "5px",
              }}
            />
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.name}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.team_size}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.start_date}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center break_word">
            {items.end_date}
          </div>

          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.address}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.NoOfTeams}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.status_lable}
          </div>
        </li>
      );
    });
    return listItems;
  };

  useEffect(() => {
    getTournaments();
  }, []);
  return (
    <div>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item"
            // onClick={() => props.history.goBack()}
          >
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              {/* <img alt="menu" src={backIcon} className="profile-image" /> */}
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
            onClick={() => props.history.push("/DashboardScores")}
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
      <div className="container-fluid text-center px-0 pb-2 m-2">
        <div className="row mx-0 px-0">
          <div className="col-11 text-center m-auto px-0">
            <div className="row m-0 p-0 table-width">
              <div className="col-6 m-0 pt-2 d-flex justify-content-start">
                <h6>Tournaments</h6>
              </div>

              <div className="col-6 m-0 p-2 d-flex justify-content-start">
                <input
                  className="Box-Search"
                  placeholder="Search"
                  onChange={(e) => {
                    //   let searched = e.target.value.split(" ");
                    //   let values = commonState.searchedItem;
                    //   values[index] = e.target.value.split(" ");
                    //   setCommonState((prevState) => ({
                    //     ...prevState,
                    //     searchedItem: values,
                    //   }));
                    return;
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
                <div className="row m-0 p-0 headerTable tournament-headerTable">
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-6"
                      //   src={imagesPath[getMatchWinPercentImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onMatchWinPercentSort(
                        //     commonState.MatchWinPercentsortType[index],
                        //     index
                        //   )
                      }
                      alt=""
                    ></img>
                    IMAGE
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-2"
                      //   src={imagesPath[getFNImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onFNSort(commonState.FNsortType[index], index)
                      }
                      alt=""
                    />
                    NAME
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-3"
                      //   src={imagesPath[getRankImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onRankSort(commonState.RankType[index], index)
                      }
                      alt=""
                    />
                    TEAM SIZE
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-3"
                      //   src={imagesPath[getLNImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onLNSort(commonState.LNsortType[index], index)
                      }
                      alt=""
                    />
                    START DATE
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-4"
                      //   src={imagesPath[getIDImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onIDSort(commonState.IDsortType[index], index)
                      }
                      alt=""
                    ></img>
                    END DATE
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-5"
                      //   src={imagesPath[getPointsImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onPointsSort(commonState.PointssortType[index], index)
                      }
                      alt=""
                    ></img>
                    ADDRESS
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-6"
                      //   src={imagesPath[getLocImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onLocSort(commonState.LocsortType[index], index)
                      }
                      alt=""
                    ></img>
                    NO OF TEAMS
                  </div>
                  <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
                    <img
                      className="table-arrow-6"
                      //   src={imagesPath[getStatusImageName(index)]}
                      onClick={
                        () => {
                          return;
                        }
                        //   onStatusSort(commonState.StatussortType[index], index)
                      }
                      alt=""
                    ></img>
                    STATUS
                  </div>
                </div>
              </div>

              <div className="col-12 m-0 p-0 tournament-tbl">
                {/* {tournamentLoading ||
                tournamentList === null ||
                tournamentList === undefined ||
                tournamentList?.length === 0 ? (
                  <LoadingSpinner />
                ) : (
                    )} */}
                <ListItems list={tournamentList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
