import React, { useContext, useEffect } from 'react';
import '../assets/styles/DashboardComponent.css';
import iconorangemanager from '../assets/images/icon-orange-manager.png';
import iconorangeplayer from '../assets/images/icon-orange-player.svg';
import iconorangeteams from '../assets/images/icon-orange-teams.svg';
import iconorangemap from '../assets/images/icon-orange-map.png';
import iconorangecalendar from '../assets/images/icon-orange-calender.png';
import iconOrangeLevel from '../assets/images/icon-orange-level.svg';
import iconOrangePoints from '../assets/images/icon-orange-points.svg';
import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import Header from './header/Header';
import DashboardContext from '../context/dashboard/dashboardContext';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/defaultIcon2.png';
import photoAddIcon2 from '../assets/images/defaultIcon3.png';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import AuthContext from '../context/auth/authContext';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Dashboard = (props) => {
  //context
  const dashboardContext = useContext(DashboardContext);
  const {
    getDashboardTypeOne,
    dashboardTypeOneData,
    dashBoardLoading,
    dashboardError,
  } = dashboardContext;

  const authContext = useContext(AuthContext);
  const { setSideBarDisabled, disabledMessage, setSideBarMax, sidebarMax } =
    authContext;

  useEffect(() => {
    getDashboardTypeOne(1);
    //eslint-disable-next-line
    setSideBarDisabled(false);

    localStorage.setItem('dashboard', JSON.stringify(true));
    localStorage.setItem('managers', JSON.stringify(false));
    localStorage.setItem('members', JSON.stringify(false));
    localStorage.setItem('players', JSON.stringify(false));
    localStorage.setItem('events', JSON.stringify(false));
    localStorage.setItem('registration', JSON.stringify(false));
    localStorage.setItem('scores', JSON.stringify(false));
    localStorage.setItem('templates', JSON.stringify(false));
    localStorage.setItem('payments', JSON.stringify(false));
    localStorage.setItem('settings', JSON.stringify(false));
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   if (dashboardTypeOneData === null) {
  //     console.log('hey');
  //   } else {
  //     console.log(dashboardTypeOneData);
  //   }
  // }, [dashboardTypeOneData]);

  // console.log('props.history.location', props.history.location);
  // console.log('sidebarMax:', sidebarMax);

  console.log(process.env.REACT_APP_EXAMPLE_ENV);
  console.log('hey there');

  return (
    <div className="dashboard">
      <Header>
        {/* <ul className="navbar-nav mr-auto">
        <li className="nav-item"  onClick={()=>{setSideBarMax()}}> 
          <a
            className="nav-link disabled"
            href="#/"
            tabIndex="-1"
            aria-disabled="true"
          >
            <img alt="menu" src={exitIcon} className="profile-image"/>
          </a>
        </li>
      </ul> */}
      </Header>
      <div className="container">
        <div className="row" style={{ marginTop: 76, paddingBottom: 20 }}>
          <div className="col-12 text-left quick-start">Quick Start</div>
          {/* Three sections */}
          <div
            className="col-12 text-center new-icons-content"
            style={{ marginTop: 40 }}
          >
            <div className="container row">
              <div className="col-md-3 text-decoration-none">
                <div
                  className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
                  onClick={() =>
                    props.history.push('/newManagerProfileCreated')
                  }
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={iconorangemanager}
                    alt=""
                    className="img-quick-start "
                  />
                </div>
                <div
                  className="upper-box-tile"
                  onClick={() =>
                    props.history.push('/newManagerProfileCreated')
                  }
                  style={{ cursor: 'pointer' }}
                >
                  + New Manager
                </div>
              </div>
              <div className="col-md-3 offset-md-1 text-decoration-none">
                <div
                  className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
                  onClick={() => props.history.push('/newEventProfile')}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={iconorangeteams}
                    alt=""
                    className="img-quick-start "
                    style={{ cursor: 'pointer' }}
                    onClick={() => props.history.push('/newEventProfile')}
                  />
                </div>
                <div
                  className="upper-box-tile"
                  onClick={() => props.history.push('/newEventProfile')}
                  style={{ cursor: 'pointer' }}
                >
                  + New Tournament
                </div>
              </div>
              <div className="col-md-3 offset-md-1 text-decoration-none">
                <div
                  className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
                  onClick={() => props.history.push('/newProfile')}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={iconorangeplayer}
                    alt=""
                    className="img-quick-start "
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
          </div>

          {/* {dashboardTypeOneData.isGoing.length===0?(<div>NO EVENTS HERE</div>):()} */}

          {dashboardTypeOneData === undefined || dashBoardLoading ? (
            <div className="mx-auto mt-5">
              <LoadingSpinner />
            </div>
          ) : dashboardError !== null || dashboardTypeOneData === null ? (
            <div className="mt-5 text-center mx-auto">
              <h4 style={{ color: '#ff2072' }}>{dashboardError}</h4>
            </div>
          ) : (
            <div className="w-100">
              {dashboardTypeOneData.onGoing.length === 0 &&
              dashboardTypeOneData.recentlyCreated.length === 0 &&
              dashboardTypeOneData.recentlyUpdated &&
              dashboardTypeOneData.upComing.length === 0 ? (
                <div className="mx-auto p-auto mt-5 dashboard_empty_text">
                  Looks like you have not created anything yet.
                </div>
              ) : (
                <>
                  {/* ongoing events */}
                  <div className="col-12" style={{ marginTop: 40 }}>
                    <Collapse
                      defaultActiveKey={[0]}
                      expandIconPosition="right"
                      bordered={true}
                      ghost
                      expandIcon={({ isActive }) => (
                        <span
                          className={
                            isActive
                              ? 'dash-rotate mt-2'
                              : 'dash-no-rotate mt-2'
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
                              Ongoing Events
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
                        <div className="row">
                          {dashboardTypeOneData.onGoing.map(
                            (onGoing, onGoingIndex) => (
                              <div
                                key={onGoingIndex}
                                tabIndex="1"
                                className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  onGoing.action === 'Start Scores Page' &&
                                    props.history.push(
                                      `/scores/${onGoing.tournament_id}`
                                    );
                                  onGoing.action === 'Schedule Play format' &&
                                    props.history.push(
                                      `/pools/${onGoing.tournament_id}`
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
                                      onError={(e) => {
                                        if (
                                          onGoing.tournament_id !== undefined
                                        ) {
                                          e.target.src = photoAddIcon2;
                                        }
                                        if (
                                          onGoing.player_avp_id !== undefined
                                        ) {
                                          e.target.src = photoAddIcon;
                                        }
                                      }}
                                    />
                                  </div>
                                  {/* data */}
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading">
                                      {onGoing.name}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangemap} alt="" />
                                      <span className="span-1">
                                        {`${onGoing.city}, ${onGoing.state_code}`}{' '}
                                        |
                                      </span>{' '}
                                      <img src={iconorangecalendar} alt="" />
                                      <span className="span-2">
                                        {onGoing.start_date}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() => {
                                    onGoing.action === 'Start Scores Page' &&
                                      props.history.push(
                                        `/scores/${onGoing.tournament_id}`
                                      );
                                    onGoing.action === 'Schedule Play format' &&
                                      props.history.push(
                                        `/pools/${onGoing.tournament_id}`
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
                      <Panel
                        className="px-0"
                        header={
                          <div className="row">
                            <div className="col-sm-2 my-auto p-0">
                              Upcoming Events
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
                        {/* upcoming events */}
                        <div className="row">
                          {dashboardTypeOneData.upComing.map(
                            (onGoing, onGoingIndex) => (
                              <div
                                key={onGoingIndex}
                                tabIndex="1"
                                className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  onGoing.action === 'Go to Profile' &&
                                    props.history.push(
                                      `/eventProfileSaved/${onGoing.tournament_id}`
                                    );
                                  onGoing.action === 'Close Registration' &&
                                    props.history.push(
                                      `/regEvent/${onGoing.tournament_id}`
                                    );
                                  onGoing.action === 'Schedule Play format' &&
                                    props.history.push(
                                      `/pools/${onGoing.tournament_id}`
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
                                      onError={(e) => {
                                        if (
                                          onGoing.tournament_id !== undefined
                                        ) {
                                          e.target.src = photoAddIcon2;
                                        }
                                        if (
                                          onGoing.player_avp_id !== undefined
                                        ) {
                                          e.target.src = photoAddIcon;
                                        }
                                      }}
                                    />
                                  </div>
                                  {/* data */}
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading">
                                      {onGoing.name}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangemap} alt="" />
                                      <span className="span-1">
                                        {` ${onGoing.city}, ${onGoing.state_code} `}{' '}
                                        |
                                      </span>{' '}
                                      <img src={iconorangecalendar} alt="" />
                                      <span className="span-2">
                                        {` ${onGoing.start_date}`}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() => {
                                    onGoing.action === 'Go to Profile' &&
                                      props.history.push(
                                        `/eventProfileSaved/${onGoing.tournament_id}`
                                      );
                                    onGoing.action === 'Close Registration' &&
                                      props.history.push(
                                        `/regEvent/${onGoing.tournament_id}`
                                      );
                                    onGoing.action === 'Schedule Play format' &&
                                      props.history.push(
                                        `/pools/${onGoing.tournament_id}`
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
                        {/* recently created */}
                        <div className="row">
                          {dashboardTypeOneData.recentlyCreated.map(
                            (onGoing, onGoingIndex) => {
                              if (onGoing.tournament_id === undefined) {
                                return (
                                  <div
                                    key={onGoingIndex}
                                    tabIndex="1"
                                    className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                      onGoing.action === 'Go to Profile' &&
                                        props.history.push(
                                          `/profile/${onGoing.player_avp_id}`
                                        );
                                      onGoing.action === 'Close Registration' &&
                                        props.history.push(
                                          `/regEvent/${onGoing.tournament_id}`
                                        );
                                      onGoing.action ===
                                        'Schedule Play format' &&
                                        props.history.push(
                                          `/pools/${onGoing.tournament_id}`
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
                                          // onClick={() =>
                                          //   console.log(onGoing.tournament_id)
                                          // }
                                          onError={(e) => {
                                            if (
                                              onGoing.tournament_id !==
                                              undefined
                                            ) {
                                              e.target.src = photoAddIcon2;
                                            }
                                            if (
                                              onGoing.player_avp_id !==
                                              undefined
                                            ) {
                                              e.target.src = photoAddIcon;
                                            }
                                          }}
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
                                        onGoing.action ===
                                          'Close Registration' &&
                                          props.history.push(
                                            `/regEvent/${onGoing.tournament_id}`
                                          );
                                        onGoing.action ===
                                          'Schedule Play format' &&
                                          props.history.push(
                                            `/pools/${onGoing.tournament_id}`
                                          );
                                      }}
                                    >
                                      {onGoing.action}{' '}
                                      <img src={iconmenuchevronclose} alt="" />
                                    </div>
                                  </div>
                                );
                              } else {
                                return (
                                  <div
                                    key={onGoingIndex}
                                    tabIndex="1"
                                    className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                      onGoing.action === 'Go to Profile' &&
                                        props.history.push(
                                          `/eventProfileSaved/${onGoing.tournament_id}`
                                        );
                                      onGoing.action === 'Close Registration' &&
                                        props.history.push(
                                          `/regEvent/${onGoing.tournament_id}`
                                        );
                                      onGoing.action ===
                                        'Schedule Play format' &&
                                        props.history.push(
                                          `/pools/${onGoing.tournament_id}`
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
                                          onError={(e) => {
                                            if (
                                              onGoing.tournament_id !==
                                              undefined
                                            ) {
                                              e.target.src = photoAddIcon2;
                                            }
                                            if (
                                              onGoing.player_avp_id !==
                                              undefined
                                            ) {
                                              e.target.src = photoAddIcon;
                                            }
                                          }}
                                        />
                                      </div>
                                      {/* data */}
                                      <div className="col-8 p-0 m-auto">
                                        <div className="rectangle-heading">
                                          {onGoing.name}
                                        </div>
                                        <div className="rectangle-content">
                                          <img src={iconorangemap} alt="" />
                                          <span className="span-1">
                                            {` ${onGoing.city}, ${onGoing.state_code} `}{' '}
                                            |
                                          </span>{' '}
                                          <img
                                            src={iconorangecalendar}
                                            alt=""
                                          />
                                          <span className="span-2">
                                            {` ${onGoing.start_date}`}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="col-12 text-right rectangle-footer"
                                      onClick={() => {
                                        onGoing.action === 'Go to Profile' &&
                                          props.history.push(
                                            `/eventProfileSaved/${onGoing.tournament_id}`
                                          );
                                        onGoing.action ===
                                          'Close Registration' &&
                                          props.history.push(
                                            `/regEvent/${onGoing.tournament_id}`
                                          );
                                        onGoing.action ===
                                          'Schedule Play format' &&
                                          props.history.push(
                                            `/pools/${onGoing.tournament_id}`
                                          );
                                      }}
                                    >
                                      {onGoing.action}{' '}
                                      <img src={iconmenuchevronclose} alt="" />
                                    </div>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                      </Panel>
                      <Panel
                        className="px-0"
                        header={
                          <div className="row">
                            <div className="col-sm-2 my-auto p-0">
                              Recently Edited
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
                        <div className="row">
                          {dashboardTypeOneData.recentlyUpdated.map(
                            (onGoing, onGoingIndex) => (
                              <div
                                key={onGoingIndex}
                                tabIndex="1"
                                className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  onGoing.action === 'Go to Profile' &&
                                    props.history.push(
                                      `/eventProfileSaved/${onGoing.tournament_id}`
                                    );
                                  onGoing.action === 'Close Registration' &&
                                    props.history.push(
                                      `/regEvent/${onGoing.tournament_id}`
                                    );
                                  onGoing.action === 'Schedule Play format' &&
                                    props.history.push(
                                      `/pools/${onGoing.tournament_id}`
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
                                      onError={(e) => {
                                        if (
                                          onGoing.tournament_id !== undefined
                                        ) {
                                          e.target.src = photoAddIcon2;
                                        }
                                        if (
                                          onGoing.player_avp_id !== undefined
                                        ) {
                                          e.target.src = photoAddIcon;
                                        }
                                      }}
                                    />
                                  </div>
                                  {/* data */}
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading">
                                      {onGoing.name}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangemap} alt="" />
                                      <span className="span-1">
                                        {` ${onGoing.city}, ${onGoing.state_code} `}{' '}
                                        |
                                      </span>{' '}
                                      <img src={iconorangecalendar} alt="" />
                                      <span className="span-2">
                                        {` ${onGoing.start_date}`}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() => {
                                    onGoing.action === 'Go to Profile' &&
                                      props.history.push(
                                        `/eventProfileSaved/${onGoing.tournament_id}`
                                      );
                                    onGoing.action === 'Close Registration' &&
                                      props.history.push(
                                        `/regEvent/${onGoing.tournament_id}`
                                      );
                                    onGoing.action === 'Schedule Play format' &&
                                      props.history.push(
                                        `/pools/${onGoing.tournament_id}`
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
