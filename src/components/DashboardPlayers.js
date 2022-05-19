import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../assets/styles/DashboardPlayers.css';
// import iconorangemanager from '../assets/images/icon-orange-manager.png';
// import iconorangeteams from '../assets/images/icon-orange-teams.svg';
// import iconorangemap from '../assets/images/icon-orange-map.png';
// import iconorangecalendar from '../assets/images/icon-orange-calender.png';
// import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import cardIcon from '../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../assets/images/icon-menu-list.svg';
import iconorangeplayer from '../assets/images/icon-orange-player.svg';
// import iconorangeplayer from '../assets/images/icon-orange-player.svg';
// import iconorangeteams from '../assets/images/icon-orange-teams.svg';
import iconOrangeLevel from '../assets/images/icon-orange-level.svg';
import iconOrangePoints from '../assets/images/icon-orange-points.svg';
// import iconOrangeDuration from '../assets/images/icon-orange-duration.svg';
import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import iconOrangeDuration from '../assets/images/icon-orange-duration.svg';
import DashboardContext from '../context/dashboard/dashboardContext';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/defaultIcon2.png';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import { Collapse } from 'antd';
import PlayerNone from '../components/PlayerNone';

const { Panel } = Collapse;

const DashboardPlayers = (props) => {
  //context
  const dashboardContext = useContext(DashboardContext);
  const {
    getDashboardTypeFour,
    dashboardTypeFourData,
    dashBoardLoading,
    dashboardError,
  } = dashboardContext;

  useEffect(() => {
    getDashboardTypeFour();
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   if (dashboardTypeFourData === null) {
  //     console.log('hey');
  //   } else {
  //     console.log(dashboardTypeFourData);
  //   }
  // }, [dashboardTypeFourData]);

  if (
    dashboardTypeFourData !== null &&
    dashboardTypeFourData.recentlyCreatedPlayers.length === 0
  ) {
    return <PlayerNone />;
  } else {
    return (
      <div className="dashboard-player">
        <Header>
          <ul className="navbar-nav mr-auto">
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
              onClick={() => props.history.push('/PlayerTable')}
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

        <div className="container">
          <div className="row" style={{ paddingBottom: 20 }}>
            <div className="col-12 text-left quick-start invisible">
              Quick Start
            </div>
            {/* Three sections */}
            {/* <div className="col-12 text-center new-icons-content invisible">
              <div className="container row">
                <div
                  tabIndex="1"
                  className="col-md-3 text-decoration-none"
                  style={{ outline: 0 }}
                >
                  <div
                    className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
                    onClick={() => props.history.push('/newProfile')}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={iconorangeplayer}
                      alt=""
                      className="img-quick-start"
                      onClick={() => props.history.push('/newProfile')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div
                    className="upper-box-tile"
                    onClick={() => props.history.push('/newProfile')}
                    style={{ cursor: 'pointer' }}
                  >
                    + New Player
                  </div>
                </div>
              </div>
            </div> */}

            {dashboardTypeFourData === undefined || dashBoardLoading ? (
              <div className="mx-auto mt-5">
                <LoadingSpinner />
              </div>
            ) : dashboardError !== null || dashboardTypeFourData === null ? (
              <div className="mt-5 text-center mx-auto">
                <h4 style={{ color: '#ff2072' }}>{dashboardError}</h4>
              </div>
            ) : (
              <>
                {/* recently created */}
                <div className="col-12" style={{ marginTop: 60 }}>
                  {/* ongoing events header */}
                  <Collapse
                    defaultActiveKey={[0]}
                    expandIconPosition="right"
                    bordered={true}
                    ghost
                    expandIcon={({ isActive }) => (
                      <span
                        className={
                          isActive ? 'dash-rotate mt-2' : 'dash-no-rotate mt-2'
                        }
                      >
                        <img src={menuchevrondownicon} alt="" />
                      </span>
                    )}
                    className="col-12 mx-auto reg-padding"
                  >
                    <Panel
                      className="px-0"
                      header={
                        <div className="row">
                          <div className="col-sm-2 my-auto p-0">
                            Recently Created
                          </div>
                          <div className="col-sm-10 ">
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
                      {/* ongoing events data */}
                      <div className="container row" style={{ marginTop: 40 }}>
                        {dashboardTypeFourData.recentlyCreatedPlayers.map(
                          (onGoing, onGoingIndex) => (
                            <div
                              key={onGoingIndex}
                              tabIndex="1"
                              className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                onGoing.action === 'Go to Profile' &&
                                  props.history.push(
                                    `/profile/${onGoing.player_avp_id}#/`
                                  );
                                onGoing.action === 'Close Registration' &&
                                  props.history.push(
                                    `/regEvent/${onGoing.tournament_id}`
                                  );
                              }}
                            >
                              <div className="container row">
                                {/* img */}
                                <div className="col-3 m-auto p-0">
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}/${onGoing.tournament_pic}`}
                                    alt=""
                                    className="img-fluid"
                                    style={{
                                      width: 100,
                                      height: 100,
                                      borderRadius: 50,
                                      marginTop: 10,
                                    }}
                                    onError={(e) =>
                                      (e.target.src = photoAddIcon)
                                    }
                                  />
                                </div>
                                {/* data */}
                                <div className="col-8 p-0 m-auto">
                                  <div className="rectangle-heading">
                                    {onGoing.player_name}
                                  </div>
                                  <div className="rectangle-content">
                                    <img src={iconOrangeLevel} alt="" />
                                    <span className="span-1">
                                      {`${onGoing.div_name} `} |
                                    </span>{' '}
                                    <img src={iconOrangePoints} alt="" />
                                    <span className="span-2">
                                      {` ${onGoing.points}`}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-12 text-right rectangle-footer"
                                onClick={() => {
                                  onGoing.action === 'Go to Profile' &&
                                    props.history.push(
                                      `/profile/${onGoing.player_avp_id}`
                                    );
                                  onGoing.action === 'Close Registration' &&
                                    props.history.push(
                                      `/regEvent/${onGoing.tournament_id}`
                                    );
                                }}
                              >
                                {onGoing.action}{' '}
                                <img src={iconmenuchevronclose} alt="" />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardPlayers;
