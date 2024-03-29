import orangedownarrow from "../../assets/images/icon-filter-arrow.svg";
import orangeuparrow from "../../assets/images/orange-up-arrow.png";
import greyuparrow from "../../assets/images/orange-up-arrow-grey.png";
import greydownarrow from "../../assets/images/grey-down-arrow.png";
import Header from "../../components/header/Header";
import defaultImage from "../../assets/images/default.jpeg";
import DataTable from "react-data-table-component";

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
  const {
    tournamentList,
    tournamentLoading,
    tournamentError,
    getTournaments,
  } = TournamentContext;

  const [filteredList, setFilteredList] = useState(tournamentList);

  useEffect(() => {
    setFilteredList(tournamentList);
  }, [tournamentList]);

  const filter = (event) => {
    const { value } = event.target;
    const list = tournamentList.filter((items) => {
      return (
        items.name.includes(value) ||
        items.address.includes(value) ||
        items.NoOfTeams.includes(value) ||
        items.start_date.includes(value) ||
        items.end_date.includes(value)
      );
    });
    setFilteredList(list);
  };

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
                items.tournament_pic
                  ? process.env.REACT_APP_PLAYER_COURT_URL +
                    items.tournament_pic
                  : defaultImage
              }
              style={{
                width: "35px",
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

  const columns = [
    {
      id: 1,
      name: "IMAGE",
      selector: (row) => {
        return (
          <img
            src={
              row.tournament_pic
                ? process.env.REACT_APP_PLAYER_COURT_URL + row.tournament_pic
                : defaultImage
            }
            style={{
              width: "35px",
            }}
          />
        );
      },
      sortable: false,
    },
    {
      id: 2,
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      id: 3,
      name: "TEAM SIZE",
      selector: (row) => row.team_size,
      sortable: true,
    },
    {
      id: 4,
      name: "START DATE",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      id: 5,
      name: "END DATE",
      selector: (row) => row.end_date,
      sortable: true,
    },
    {
      id: 6,
      name: "ADDRESS",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      id: 7,
      name: "NO OF TEAMS",
      selector: (row) => row.NoOfTeams,
      sortable: true,
    },
    {
      id: 8,
      name: "STATUS",
      selector: (row) => row.status_lable,
      sortable: true,
    },
  ];
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
                <h6>Reports</h6>
              </div>

              <DataTable
                columns={columns}
                data={filteredList}
                defaultSortFieldId={1}
                // sortIcon={<SortIcon />}
                pagination
                subHeaderComponent={
                  <input
                    className="Box-Search"
                    placeholder="Search"
                    onChange={(event) => filter(event)}
                    style={{
                      padding: "0px",
                      margin: "0px",
                      paddingLeft: 50,
                    }}
                    // style={{ paddingLeft: 50 }}
                  />
                }
                subHeader
              />

              {/* <div className="col-12 m-0 p-0">
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
                    )}
                <ListItems list={filteredList} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
