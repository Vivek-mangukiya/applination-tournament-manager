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
import ScoresContext from '../context/scores/ScoresContext';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const ScoresListComponent = (props) => {
  const activeHistoryContext = useContext(ScoresContext);
  const { getScoreTournaments, 
          scoresListData, 
          getAllScoresError,
          scoreLoading,
        } = activeHistoryContext;

    
  // const [commonState, setCommonState] = useState({
  //   scoresListData: [],
  // });

  const [searchTerm, setSearchTerm] = useState('');
  const [information, setinformation] = useState(null);

 
  useEffect(() => {
    getScoreTournaments();
    // console.log('PlyerListItemDatac', scoresListData);
  }, []);






  // useEffect(() => {
  //   setCommonState((prevState) => ({ ...prevState, scoresListData }));
  //   console.log('PlyerListItemData', scoresListData);
  // }, [scoresListData]);

  useEffect(() => {
    if (scoresListData !== null) {
      // console.log(scoresListData);
      setinformation(scoresListData);
    }
  }, [scoresListData]);

  // useEffect(() => {
  //   console.log(getAllScoresError);
  
  // }, [getAllScoresError]);

  const nameSort = () => {
    // document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('icon')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('icon').classList.remove('switch');
      // console.log(mdata);
      let obj = [...scoresListData];

      obj.sort((x, y) => {
        if (x.name.toLowerCase() < y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() > y.name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    } else {
      document.getElementById('icon').classList.add('switch');
      // console.log(scoresListData);
      let obj = [...scoresListData];

      obj.sort((x, y) => {
        if (x.name.toLowerCase() > y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() < y.name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };


  const dateSort = () => {
    document.getElementById('icon').classList.remove('switch');
    // document.getElementById('last').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('numb')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('numb').classList.remove('switch');
      // console.log(mdata);
      let obj = [...scoresListData];

      obj.sort((x, y) => {
        if (x.start_date.replace('/', '') < y.start_date.replace('/', '')) return -1;
        if (x.start_date.replace('/', '') > y.start_date.replace('/', '')) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    } else {
      document.getElementById('numb').classList.add('switch');
      // console.log(scoresListData);
      let obj = [...scoresListData];

      obj.sort((x, y) => {
        if (x.start_date.replace('/', '') > y.start_date.replace('/', '')) return -1;
        if (x.start_date.replace('/', '') < y.start_date.replace('/', '')) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };

  const locationSort = () => {
    document.getElementById('icon').classList.remove('switch');
    // document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('location')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('location').classList.remove('switch');
      // console.log(mdata);
      let obj = [...scoresListData];

      obj.sort((x, y) => {
        if (x.address.toLowerCase() < y.address.toLowerCase()) return -1;
        if (x.address.toLowerCase() > y.address.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    } else {
      document.getElementById('location').classList.add('switch');
      // console.log(mdata);
      let obj = [...scoresListData];

      obj.sort((x, y) => {
        if (x.address.toLowerCase() > y.address.toLowerCase()) return -1;
        if (x.address.toLowerCase() < y.address.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };

  const statusSort = () => {
    document.getElementById('icon').classList.remove('switch');
    // document.getElementById('last').classList.remove('switch');
    document.getElementById('numb').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('location').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('status')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('status').classList.remove('switch');
      // console.log(scoresListData);
      let obj = [...scoresListData];
      //  console.log(obj)
      obj.sort((x, y) => {
        if (x.status_lable < y.status_lable) return -1;
        if (x.status_lable > y.status_lable) return 1;
        else return 0;
      });
      // console.log(obj)
      setinformation(obj);
    } else {
      document.getElementById('status').classList.add('switch');
      // console.log(scoresListData);
      let obj = [...scoresListData];
      // console.log(obj)
      obj.sort((x, y) => {
        if (x.status_lable > y.status_lable) return -1;
        if (x.status_lable < y.status_lable) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };



  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    let info = scoresListData.filter((data) => {
      if (searchTerm === '') {
        return data;
      } else if (
        data.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.address.toString().toLowerCase().includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.start_date
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.status_lable
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } 
    });
    // console.log(info)
    if (event.target.value !== '') {
      setinformation(info);
    } else {
      setinformation(scoresListData);
    }
  };



  const openProfile = async (Id) => {
    console.log('List Item Clicked!');
    // await getScoresById(Id);
    // await getManagerByIdList(managerId);
    // // await console.log("Selected Manager:",getManagerData)
    // await props.history.push(`/scores/${Id}`);
    await props.history.push(`/scores/${Id}`);
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
            onClick={() => props.history.push('/DashboardScores')}
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

      {information !== null && (
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

                <div className="col-3  m-0 p-0 d-flex  align-items-center">
                  <img
                    id="icon"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    onClick={nameSort}
                    width="13px"
                  />
                  <span className="p-1">NAME</span>
                </div>


                <div className="col-4   m-0 p-0 d-flex  align-items-center ">
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

                <div className="col-2 m-0 p-0 d-flex  align-items-center">
                  <img
                    id="numb"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={dateSort}
                  />
                  <span className="p-1">STARTS ON</span>
                </div>

                <div className="col-2 m-0 p-0 d-flex  align-items-center">
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

            {scoreLoading ?(
               <div className="text-center loading-player-stying">
               <div className="my-auto py-2">
                 <LoadingSpinner/>
               </div>
             </div>
            ) : getAllScoresError !== null && getAllScoresError !== undefined ? (
            <div className="text-center loading-player-stying">
              <div className="my-auto py-2" style={{ color: '#ff2072'}}>
                 {getAllScoresError}
              </div>
            </div>
            ) : scoresListData.length > 0  ? (
              <div className="col-12 p-0 m-0 customData">
                <AutoSizer>
                  {({ height, width }) => (
                    <List
                      width={width}
                      height={height}
                      rowHeight={55}
                      className="obj-container"
                      rowCount={information.length}
                      rowRenderer={({ key, index, style, parent }) => {
                        let info = information[index];
                        return (
                          <div
                            key={key}
                            style={{ ...style }}
                            className="row mx-0 px-0 my-1  rectangleTable"
                            onClick={() => {
                              openProfile(info.id);
                            }}
                          >
                            <div className="col-1 d-flex justify-content-center align-items-center">
                              <img
                                src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${info.tournament_pic}`}
                                onError={(e) => (e.target.src = avatar)}
                                alt=""
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: '50%',
                                }}
                              />
                            </div>
                            <div className="col-3 d-flex justify-content-start align-items-center">
                              {info.name}
                            </div>
                            <div className="col-4  d-flex justify-content-start align-items-center">
                              {info.address}
                            </div>
                            <div className="col-2  d-flex justify-content-start align-items-center">
                              {info.start_date}
                            </div>
                            <div className="col-1 d-flex justify-content-start align-items-center">
                              {info.status_lable}
                            </div>
                          </div>
                        );
                      }}
                    />
                  )}
                </AutoSizer>
              </div>
            ) :  (
              <div
                style={{
                  fontFamily: 'FuturaMedium',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
               {getAllScoresError}
              </div>
            )
          }
          </div>
        </div>
      )}

    </div>
  );
};

export default ScoresListComponent;

