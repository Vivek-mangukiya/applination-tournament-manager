import React, { useContext, useEffect } from 'react';
import '../assets/styles/DashboardManager.css';
import cardIcon from '../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../assets/images/icon-menu-list.svg';
import iconorangemanager from '../assets/images/icon-orange-manager.png';
// import iconorangeplayer from '../assets/images/icon-orange-player.svg';
// import iconorangeteams from '../assets/images/icon-orange-teams.svg';
import iconorangemap from '../assets/images/icon-orange-map.png';
import iconorangecalendar from '../assets/images/icon-orange-calender.png';
// import iconOrangeLevel from '../assets/images/icon-orange-level.svg';
// import iconOrangePoints from '../assets/images/icon-orange-points.svg';
import iconOrangeDuration from '../assets/images/icon-orange-duration.svg';
import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import Header from './header/Header';
// import backIcon from '../assets/images/icon-menu-back.svg';
import DashboardContext from '../context/dashboard/dashboardContext';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/defaultIcon2.png';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import AuthContext from '../context/auth/authContext';
// import exitIcon from '../assets/images/icon-sidemenu-exit.svg';
import { Collapse } from 'antd';
import ManagerNone from '../components/ManagerNone';

const { Panel } = Collapse;

const DashboardManager = (props) => {
  //context
  const dashboardContext = useContext(DashboardContext);
  const {
    getDashboardTypeTwo,
    dashboardTypeTwoData,
    dashBoardLoading,
    dashboardError,
  } = dashboardContext;

  const authContext = useContext(AuthContext);
  const { setSideBarMax } = authContext;

  useEffect(() => {
    getDashboardTypeTwo();
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   if (dashboardTypeTwoData === null) {
  //     console.log('hey');
  //   } else {
  //     console.log(dashboardTypeTwoData);
  //   }
  // }, [dashboardTypeTwoData]);

  if (
    dashboardTypeTwoData !== null &&
    dashboardTypeTwoData.recentlyCreated.length === 0 &&
    dashboardTypeTwoData.recentlyUpdated.length === 0
  ) {
    return <ManagerNone />;
  } else {
    return (
      <div className="dashboard-manager">
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
              onClick={() => props.history.push('/managers')}
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
                  // onClick={() => props.history.push('/newManagerProfileCreated')}
                  style={{ outline: 0 }}
                >
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
                      className="img-quick-start"
                      onClick={() =>
                        props.history.push('/newManagerProfileCreated')
                      }
                      style={{ cursor: 'pointer' }}
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
              </div>
            </div>

            {dashboardTypeTwoData === undefined || dashBoardLoading ? (
              <div className="mx-auto mt-5">
                <LoadingSpinner />
              </div>
            ) : dashboardError !== null || dashboardTypeTwoData === null ? (
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
                        {dashboardTypeTwoData.recentlyCreated.map(
                          (onGoing, onGoingIndex) => (
                            <div
                              key={onGoingIndex}
                              tabIndex="1"
                              className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                // props.history.push(
                                //   `/newManagerProfileSaved/${onGoing.manager_id}`
                                // )
                                props.history.push({
                                  pathname: `/newManagerProfileSaved/${onGoing.manager_id}`,
                                  state: { from: '/managerDashboard' },
                                })
                              }
                            >
                              <div className="container row">
                                {/* img */}
                                <div className="col-3 m-auto p-0">
                                  <img
                                    src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${onGoing.profile_pic}`}
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
                                    {onGoing.manager_name}
                                  </div>
                                  <div className="rectangle-content">
                                    <img src={iconorangemap} alt="" />
                                    <span className="span-1">
                                      {`${onGoing.city}, ${onGoing.state_code}`}{' '}
                                      |
                                    </span>{' '}
                                    <img src={iconOrangeDuration} alt="" />
                                    <span className="span-2">
                                      {onGoing.status}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-12 text-right rectangle-footer"
                                onClick={() =>
                                  // props.history.push(
                                  //   `/newManagerProfileSaved/${onGoing.manager_id}`
                                  // )
                                  props.history.push({
                                    pathname: `/newManagerProfileSaved/${onGoing.manager_id}`,
                                    state: { from: '/managerDashboard' },
                                  })
                                }
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
                        {dashboardTypeTwoData.recentlyUpdated.map(
                          (onGoing, onGoingIndex) => (
                            <div
                              key={onGoingIndex}
                              tabIndex="1"
                              className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                // props.history.push(
                                //   `/newManagerProfileSaved/${onGoing.manager_id}`
                                // )
                                props.history.push({
                                  pathname: `/newManagerProfileSaved/${onGoing.manager_id}`,
                                  state: { from: '/managerDashboard' },
                                })
                              }
                            >
                              <div className="container row">
                                {/* img */}
                                <div className="col-3 m-auto p-0">
                                  <img
                                    src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${onGoing.profile_pic}`}
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
                                    {onGoing.manager_name}
                                  </div>
                                  <div className="rectangle-content">
                                    <img src={iconorangemap} alt="" />
                                    <span className="span-1">
                                      {`${onGoing.city}, ${onGoing.state_code}`}{' '}
                                      |
                                    </span>{' '}
                                    <img src={iconOrangeDuration} alt="" />
                                    <span className="span-2">
                                      {onGoing.status}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-12 text-right rectangle-footer"
                                onClick={() =>
                                  // props.history.push(
                                  //   `/newManagerProfileSaved/${onGoing.manager_id}`
                                  // )
                                  props.history.push({
                                    pathname: `/newManagerProfileSaved/${onGoing.manager_id}`,
                                    state: { from: '/managerDashboard' },
                                  })
                                }
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

export default DashboardManager;
