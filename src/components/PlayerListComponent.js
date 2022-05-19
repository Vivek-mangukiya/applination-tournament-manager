import React, { useEffect, useContext, useState } from 'react';
import '../assets/styles/PlayerListComponent.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import backIcon from '../assets/images/icon-menu-back.svg';
import cardIcon from '../assets/images/icon-menu-cards.svg';
import listIcon from '../assets/images/icon-menu-list-disable.svg';
// import searchicon from '../assets/images/icon-sidemenu-search.svg';
import filterarrow from '../assets/images/icon-filter-arrow.svg';
import avatar from '../assets/images/defaultIcon2.png';
import PlayerContext from '../context/playerProfile/playerProfileContext';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const PlayerListComponent = (props) => {
  const activeHistoryContext = useContext(PlayerContext);
  const {
    getAllPlayers,
    PlayerListItemData,
    getAllPlayersError,
    playerLoading,
  } = activeHistoryContext;

  // const [commonState, setCommonState] = useState({
  //   PlayerListItemData: [],
  // });
  const [searchTerm, setSearchTerm] = useState('');
  const [managersDataInfo, setManagersDataInfo] = useState(null);
  // const [isLoading,setisLoading] = useState(!playerLoading)
  // console.log(isLoading)

  useEffect(() => {
    getAllPlayers();
    // console.log('PlyerListItemDatac', PlayerListItemData);
  }, []);

  // useEffect(() => {
  //   setLoading(!playerLoading)
  //   console.log(playerLoading)
  // },[])

  // useEffect(() => {
  //   setCommonState((prevState) => ({ ...prevState, PlayerListItemData }));
  //   console.log('PlyerListItemData', PlayerListItemData);
  // }, [PlayerListItemData]);

  useEffect(() => {
    if (PlayerListItemData !== null) {
      // console.log(PlayerListItemData);
      setManagersDataInfo(PlayerListItemData);
    }
  }, [PlayerListItemData]);

  // useEffect(() => {
  //   console.log(getAllPlayersError);

  // }, [getAllPlayersError]);

  const firstSort = () => {
    document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('icon')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('icon').classList.remove('switch');
      // console.log(mdata);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.first_name.toLowerCase() < y.first_name.toLowerCase()) return -1;
        if (x.first_name.toLowerCase() > y.first_name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    } else {
      document.getElementById('icon').classList.add('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.first_name.toLowerCase() > y.first_name.toLowerCase()) return -1;
        if (x.first_name.toLowerCase() < y.first_name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const lastSort = () => {
    document.getElementById('icon').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('last')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('last').classList.remove('switch');

      // console.log(mdata);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.last_name.toLowerCase() < y.last_name.toLowerCase()) return -1;
        if (x.last_name.toLowerCase() > y.last_name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    } else {
      document.getElementById('last').classList.add('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.last_name.toLowerCase() > y.last_name.toLowerCase()) return -1;
        if (x.last_name.toLowerCase() < y.last_name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const emailSort = () => {
    document.getElementById('icon').classList.remove('switch');
    document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('mail')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('mail').classList.remove('switch');
      // console.log(mdata);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.self_description.toLowerCase() < y.self_description.toLowerCase())
          return -1;
        if (x.self_description.toLowerCase() > y.self_description.toLowerCase())
          return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    } else {
      document.getElementById('mail').classList.add('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.self_description.toLowerCase() > y.self_description.toLowerCase())
          return -1;
        if (x.self_description.toLowerCase() < y.self_description.toLowerCase())
          return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const idSort = () => {
    document.getElementById('icon').classList.remove('switch');
    document.getElementById('last').classList.remove('switch');
    document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('numb')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('numb').classList.remove('switch');
      // console.log(mdata);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.player_avp_id < y.player_avp_id) return -1;
        if (x.player_avp_id > y.player_avp_id) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    } else {
      document.getElementById('numb').classList.add('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.player_avp_id > y.player_avp_id) return -1;
        if (x.player_avp_id < y.player_avp_id) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const locationSort = () => {
    document.getElementById('icon').classList.remove('switch');
    document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    document.getElementById('mail').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('location')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('location').classList.remove('switch');
      // console.log(mdata);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.city.toLowerCase() < y.city.toLowerCase()) return -1;
        if (x.city.toLowerCase() > y.city.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    } else {
      document.getElementById('location').classList.add('switch');
      // console.log(mdata);
      let obj = [...PlayerListItemData];

      obj.sort((x, y) => {
        if (x.city.toLowerCase() > y.city.toLowerCase()) return -1;
        if (x.city.toLowerCase() < y.city.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const statusSort = () => {
    document.getElementById('icon').classList.remove('switch');
    document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('status')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('status').classList.remove('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];
      //  console.log(obj)
      obj.sort((x, y) => {
        if (x.status < y.status) return -1;
        if (x.status > y.status) return 1;
        else return 0;
      });
      // console.log(obj)
      setManagersDataInfo(obj);
    } else {
      document.getElementById('status').classList.add('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];
      // console.log(obj)
      obj.sort((x, y) => {
        if (x.status > y.status) return -1;
        if (x.status < y.status) return 1;
        else return 0;
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const scoreSort = () => {
    document.getElementById('icon').classList.remove('switch');
    document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    document.getElementById('mail').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');

    let classInfo = document
      .getElementById('score')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('score').classList.remove('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];
      //  console.log(obj)
      obj.sort((x, y) => {
        return x.final_score.replace(',', '') - y.final_score.replace(',', '');
      });
      // console.log(obj)
      setManagersDataInfo(obj);
    } else {
      document.getElementById('score').classList.add('switch');
      // console.log(PlayerListItemData);
      let obj = [...PlayerListItemData];
      console.log(obj);
      obj.sort((x, y) => {
        return y.final_score.replace(',', '') - x.final_score.replace(',', '');
      });
      // console.log(obj);
      setManagersDataInfo(obj);
    }
  };

  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    let info = PlayerListItemData.filter((data) => {
      if (searchTerm === '') {
        return data;
      } else if (
        data.first_name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.last_name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.self_description
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.city.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.player_avp_id
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.status
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.final_score
          .toString()
          .replace(',', '')
          .includes(searchTerm.toString().replace(',', '').trim())
      ) {
        return data;
      }
    });
    // console.log(info)
    if (event.target.value !== '') {
      setManagersDataInfo(info);
    } else {
      setManagersDataInfo(PlayerListItemData);
    }
  };

  const openProfile = async (playerId) => {
    await props.history.push(`/profile/${playerId}#/`);
  };

  return (
    <div className="min-vh-100 player-list-component">
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
            onClick={() => props.history.push('/DashboardPlayers')}
          >
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={cardIcon} className="profile-image" />
            </a>
          </li>
          <li className="nav-item">
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

      {managersDataInfo !== null && (
        <div style={{ marginTop: '1%', marginLeft: '10%', marginRight: '5%' }}>
          <div className="container p-0 m-0">
            {/* searchbar  */}
            <div className="col-12 m-0 p-0 d-flex justify-content-start">
              <input
                className="Box-Search"
                placeholder="Search"
                id="search"
                name=""
                onChange={handleChange}
                style={{ paddingLeft: 50 }}
              ></input>
            </div>

            <div className="col-12 m-0 p-0">
              <div className="row m-0 p-0 headerTable">
                <div className="col-1  m-0 p-0 d-flex  align-items-center "></div>

                <div className="col-1  m-0 p-0 d-flex  align-items-center">
                  <img
                    id="icon"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    onClick={firstSort}
                    width="13px"
                  />
                  <span className="p-1">FIRST</span>
                </div>

                <div className="col-1  m-0 p-0 d-flex  align-items-center">
                  <img
                    id="last"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={lastSort}
                  />
                  <span className="p-1">LAST</span>
                </div>

                <div className="col-2 m-0 p-0 d-flex align-items-center">
                  <img
                    id="numb"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={idSort}
                  />
                  <span className="p-1">ID</span>
                </div>

                <div className="col-2  m-0 p-0 d-flex  align-items-center">
                  <img
                    id="mail"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={emailSort}
                  />
                  <span className="p-1">Description</span>
                </div>

                <div className="col-2  m-0 p-0 d-flex  align-items-center">
                  <img
                    id="score"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={scoreSort}
                  />
                  <span className="p-1">Score</span>
                </div>

                <div className="col-2   m-0 p-0 d-flex  align-items-center ">
                  <img
                    id="location"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={locationSort}
                  />
                  <span className="p-1">LOCATION</span>
                </div>

                <div className="col-1 m-0 p-0 d-flex  align-items-center">
                  <img
                    id="status"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={statusSort}
                  />
                  <span className="p-1">STATUS</span>
                </div>
              </div>
            </div>

            {playerLoading ? (
              <div className="text-center loading-player-stying">
                <div className="my-auto py-2">
                  <LoadingSpinner />
                </div>
              </div>
            ) : getAllPlayersError !== null &&
              getAllPlayersError !== undefined ? (
              <div className="text-center loading-player-stying">
                <div className="my-auto py-2" style={{ color: '#ff2072' }}>
                  {getAllPlayersError}
                </div>
              </div>
            ) : PlayerListItemData.length > 0 ? (
              <div className="col-12 p-0 m-0 customData">
                <AutoSizer>
                  {({ height, width }) => (
                    <List
                      width={width}
                      height={height}
                      rowHeight={55}
                      className="obj-container"
                      rowCount={managersDataInfo.length}
                      rowRenderer={({ key, index, style, parent }) => {
                        let info = managersDataInfo[index];
                        return (
                          <div
                            key={key}
                            style={{ ...style }}
                            className="row mx-0 px-0 my-1  rectangleTable"
                            onClick={() => {
                              openProfile(info.player_avp_id);
                            }}
                          >
                            <div className="col-1 d-flex justify-content-center align-items-center">
                              <img
                                src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${info.profile_pic}`}
                                onError={(e) => (e.target.src = avatar)}
                                alt=""
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                }}
                              />
                            </div>
                            <div className="col-1 d-flex justify-content-start align-items-center">
                              {info.first_name}
                            </div>
                            <div className="col-1  d-flex justify-content-start align-items-center">
                              {info.last_name}
                            </div>
                            <div className="col-2 d-flex justify-content-start align-items-center">
                              {info.player_avp_id}
                            </div>
                            <div className="col-2 d-flex justify-content-start align-items-center">
                              {info.self_description}
                            </div>
                            <div className="col-2 d-flex justify-content-start align-items-center">
                              {info.final_score}
                            </div>
                            <div className="col-2  d-flex justify-content-start align-items-center">
                              {info.city + ' , ' + info.state_code}
                            </div>
                            <div className="col-1 d-flex justify-content-start align-items-center">
                              {info.status}
                            </div>
                          </div>
                        );
                      }}
                    />
                  )}
                </AutoSizer>
              </div>
            ) : (
              <div
                style={{
                  fontFamily: 'FuturaMedium',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                {getAllPlayersError}
              </div>
            )}
          </div>
        </div>
      )}
      {/* 
      <Footer>
        <div className="m-0 col-auto d-flex align-items-center ml-auto">
          <div
            className="lower-back-button-manager"
            onClick={() => props.history.push('/newProfile')}
          >
            <span className="lower-back-button-text">NEW PLAYER</span>
          </div>
        </div>
      </Footer> */}
    </div>
  );
};

export default PlayerListComponent;
