import orangedownarrow from "../../assets/images/icon-filter-arrow.svg";
import orangeuparrow from "../../assets/images/orange-up-arrow.png";
import greyuparrow from "../../assets/images/orange-up-arrow-grey.png";
import greydownarrow from "../../assets/images/grey-down-arrow.png";
import Header from "../../components/header/Header";
import fileIcon from "../../assets/images/icons8-folder.svg";
import DataTable from "react-data-table-component";
import downloadIcon from "../../assets/images/download-solid.svg";
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

  const getFilePreView = (url) => {
    const ext = url.substring(url.lastIndexOf(".") + 1, url.length);
    switch (ext) {
      case "jpg":
        return (
          <img
            src={url}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        );
      case "jpeg":
        return (
          <img
            src={url}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        );
      case "png":
        return (
          <img
            src={url}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        );
      case "gif":
        return (
          <img
            src={url}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        );
      // case "pdf":
      //   return <iframe src={url} style={{
      //     width: "50px",
      //     height: "50px",
      //   }} />
      default:
        return (
          <img
            src={fileIcon}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        );
    }
  };

  const ListItems = ({ list }) => {
    const listItems = list.map((items, index) => {
      return (
        <li
          className="row mx-0 px-0 rectangleTable py-4"
          key={index}
          style={{
            cursor: "context-menu",
            padding: "0px",
            margin: "0px",
            height: 40,
          }}
        >
          <div className="uploaded-file-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.file_id}
          </div>
          <div className="uploaded-file-col m-0 p-0 d-flex justify-content-center align-items-center">
            {items.title}
          </div>
          <div className="uploaded-file-col m-0 p-0 d-flex justify-content-center align-items-center">
            <a
              href={process.env.REACT_APP_PLAYER_COURT_URL + items.file_name}
              download={items.file_name.substring(
                items.file_name.lastIndexOf("/") + 1,
                items.file_name.length
              )}
              target="_blank"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <img
                src={downloadIcon}
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
            </a>
          </div>
        </li>
      );
    });
    return listItems;
  };

  const columns = [
    {
      id: 1,
      name: "ID",
      selector: (row) => row.file_id,
      sortable: true,
    },
    {
      id: 2,
      name: "TITLE",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      id: 3,
      name: "FILE",
      selector: (row) => {
        return (
          <a
            href={process.env.REACT_APP_PLAYER_COURT_URL + row.file_name}
            download={row.file_name.substring(
              row.file_name.lastIndexOf("/") + 1,
              row.file_name.length
            )}
            target="_blank"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={downloadIcon}
              style={{
                width: "15px",
                height: "15px",
              }}
            />
          </a>
        );
      },
    },
  ];
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
      <div className="container-fluid text-center px-0 pb-2 m-2 uploaded-files-container">
        <div className="row mx-0 px-0">
          <div className="col-11 text-center m-auto px-0">
            <div className="row m-0 p-0 table-width">
              <div className="col-6 m-0 pt-2 d-flex justify-content-start">
                <h6>Guidelines</h6>
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
                  <div className="uploaded-file-col m-0 p-0 d-flex justify-content-center align-items-center">
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
                  <div className="uploaded-file-col m-0 p-0 d-flex justify-content-center align-items-center">
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
                  <div className="uploaded-file-col m-0 p-0 d-flex justify-content-center align-items-center">
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
              </div> */}

              {/* <div className="col-12 m-0 p-0 tournament-tbl">
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

export default UploadedFiles;
