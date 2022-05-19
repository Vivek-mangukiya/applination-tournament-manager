import React, { useEffect, useContext } from 'react';
import '../assets/styles/DashboardEvents.css';
// import iconorangemanager from '../assets/images/icon-orange-manager.png';
// import iconorangeplayer from '../assets/images/icon-orange-player.svg';
import iconorangeteams from '../assets/images/icon-orange-teams.svg';
import iconorangemap from '../assets/images/icon-orange-map.png';
import iconorangecalendar from '../assets/images/icon-orange-calender.png';
// import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import cardIcon from '../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../assets/images/icon-menu-list.svg';

// import iconorangemanager from '../assets/images/icon-orange-manager.png';
// import iconorangeplayer from '../assets/images/icon-orange-player.svg';
// import iconOrangeLevel from '../assets/images/icon-orange-level.svg';
// import iconOrangePoints from '../assets/images/icon-orange-points.svg';
// import iconOrangeDuration from '../assets/images/icon-orange-duration.svg';
import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import { Link } from 'react-router-dom';
import DashboardContext from '../context/dashboard/dashboardContext';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/defaultIcon2.png';
import photoAddIcon2 from '../assets/images/defaultIcon3.png';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import { Collapse } from 'antd';
import EventNone from '../components/EventNone';

const { Panel } = Collapse;

const DashboardEvents = (props) => {
  //context
  const dashboardContext = useContext(DashboardContext);
  const {
    getDashboardTypeThree,
    dashboardTypeThreeData,
    dashBoardLoading,
    dashboardError,
  } = dashboardContext;

  useEffect(() => {
    getDashboardTypeThree();
    //eslint-disable-next-line
  }, []);

  if (
    dashboardTypeThreeData !== null &&
    dashboardTypeThreeData.recentlyCreated.length === 0 &&
    dashboardTypeThreeData.recentlyUpdated.length === 0 &&
    dashboardTypeThreeData.upComing.length === 0
  ) {
    return <EventNone />;
  } else {
    return (
      <div className="dashboard-events min-vh-100">
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
              onClick={() => props.history.push('/EventsTable')}
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
          <div className="row" style={{ marginTop: 76, paddingBottom: 20 }}>
            <div className="col-12 text-left quick-start">Quick Start</div>
            {/* Three sections */}
            <div
              className="col-12 text-center new-icons-content"
              style={{ marginTop: 40 }}
            >
              <div className="container row">
                <div
                  tabIndex="1"
                  className="col-md-3 text-decoration-none"
                  style={{ outline: 0 }}
                  // onClick={() => props.history.push('/newEventProfile')}
                >
                  <div
                    className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
                    onClick={() => props.history.push('/newEventProfile')}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={iconorangeteams}
                      alt=""
                      className="img-quick-start"
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
              </div>
            </div>

            {dashboardTypeThreeData === undefined || dashBoardLoading ? (
              <div className="mx-auto mt-5">
                <LoadingSpinner />
              </div>
            ) : dashboardError !== null || dashboardTypeThreeData === null ? (
              <div className="mt-5 text-center mx-auto">
                <h4 style={{ color: '#ff2072' }}>{dashboardError}</h4>
              </div>
            ) : (
              <>
                {/* recently created */}
                <div className="col-12" style={{ marginTop: 44 }}>
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
                      {/* ongoing events data */}
                      <div className="container row" style={{ marginTop: 40 }}>
                        {dashboardTypeThreeData.onGoing.map(
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
                                      if (onGoing.tournament_id !== undefined) {
                                        e.target.src = photoAddIcon2;
                                      }
                                      if (onGoing.player_avp_id !== undefined) {
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
                      {/* ongoing events data */}
                      <div className="container row" style={{ marginTop: 40 }}>
                        {dashboardTypeThreeData.upComing.map(
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
                                      if (onGoing.tournament_id !== undefined) {
                                        e.target.src = photoAddIcon2;
                                      }
                                      if (onGoing.player_avp_id !== undefined) {
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
                      {/* ongoing events data */}
                      <div className="container row" style={{ marginTop: 40 }}>
                        {dashboardTypeThreeData.recentlyCreated.map(
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
                                      if (onGoing.tournament_id !== undefined) {
                                        e.target.src = photoAddIcon2;
                                      }
                                      if (onGoing.player_avp_id !== undefined) {
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
                      {/* ongoing events data */}
                      <div className="container row" style={{ marginTop: 40 }}>
                        {dashboardTypeThreeData.recentlyUpdated.map(
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
                                      if (onGoing.tournament_id !== undefined) {
                                        e.target.src = photoAddIcon2;
                                      }
                                      if (onGoing.player_avp_id !== undefined) {
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
        </div>
      </div>
    );
  }
};
export default DashboardEvents;
