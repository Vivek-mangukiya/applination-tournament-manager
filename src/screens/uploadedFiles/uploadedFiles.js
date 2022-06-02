import orangedownarrow from "../../assets/images/icon-filter-arrow.svg";
import orangeuparrow from "../../assets/images/orange-up-arrow.png";
import greyuparrow from "../../assets/images/orange-up-arrow-grey.png";
import greydownarrow from "../../assets/images/grey-down-arrow.png";
import Header from "../../components/header/Header";

import cardIcon from "../../assets/images/icon-menu-cards-disable.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import { useContext, useEffect, useState } from "react";
import "./uploadedFiles.css";
import UplodedFilesContext from "../../context/uplodedFiles/uplodedFilesContext";

const imagesPath = {
  orange: orangedownarrow,
  white: orangeuparrow,
  greyup: greyuparrow,
  greydown: greydownarrow,
};

const UploadedFiles = () => {
  const uplodedFilesContext = useContext(UplodedFilesContext);
  const { errors, fileList, isLoading, getFileList } = uplodedFilesContext;

  const [filteredList, setFilteredList] = useState(fileList);

  useEffect(() => {
    setFilteredList(fileList);
  }, [fileList]);

  const filter = (event) => {
    const { value } = event.target;
    const list = fileList.filter((items) => {
      return items.title.includes(value);
    });
    setFilteredList(list);
  };

  const ListItems = ({ list }) => {
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
            {items.file_id}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.title}
          </div>
          <div className="tournament-tbl-col m-0 p-0 d-flex justify-content-center align-items-center">
            <img
              src={process.env.REACT_APP_PLAYER_COURT_URL + items.file_name}
              style={{
                width: "50px",
              }}
            />
          </div>
        </li>
      );
    });
    return listItems;
  };

  useEffect(() => {
    getFileList();
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
                <h6>Uploaded Files</h6>
              </div>

              <div className="col-6 m-0 p-2 d-flex justify-content-start">
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
                    ID
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
                    TITLE
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
                    FILE
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
                <ListItems list={filteredList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedFiles;
