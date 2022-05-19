import React, { useContext, useEffect } from 'react';
import '../assets/styles/DashboardReg.css';
import iconorangeteams from '../assets/images/icon-orange-teams.svg';
import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import Header from './header/Header';
import cardIcon from '../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../assets/images/icon-menu-list.svg';
import iconorangerestroom from '../assets/images/icon-orange-restrooms.svg';
import iconorangepencil from '../assets/images/icon-orange-pencil.svg';
import iconorangelevel from '../assets/images/icon-orange-level.svg';
import iconorangepoints from '../assets/images/icon-orange-points.svg';
import DashboardContext from '../context/dashboard/dashboardContext';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/defaultIcon2.png';
import photoAddIcon2 from '../assets/images/defaultIcon3.png';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import { Collapse } from 'antd';
import RegNone from '../components/RegNone';

const { Panel } = Collapse;

const DashboardReg = (props) => {
  //context
  const dashboardContext = useContext(DashboardContext);
  const {
    getDashboardTypeFive,
    dashboardTypeFiveData,
    dashBoardLoading,
    dashboardError,
  } = dashboardContext;

  useEffect(() => {
    getDashboardTypeFive();
    //eslint-disable-next-line
  }, []);

  if (
    dashboardTypeFiveData !== null &&
    dashboardTypeFiveData.recentlyCreatedEvents.length === 0 &&
    dashboardTypeFiveData.recentlyEditedTeams.length === 0
  ) {
    return <RegNone />;
  } else {
    return (
      <div className="dashboard-reg">
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
              onClick={() => props.history.push('/RegTable')}
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
                  // onClick={() => props.history.push('/newEventProfile')}
                  style={{ outline: 0 }}
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
                      onClick={() => props.history.push('/newEventProfile')}
                      style={{ cursor: 'pointer' }}
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

            {dashboardTypeFiveData === undefined || dashBoardLoading ? (
              <div className="mx-auto mt-5">
                <LoadingSpinner />
              </div>
            ) : dashboardError !== null || dashboardTypeFiveData === null ? (
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
                        {dashboardTypeFiveData.recentlyCreatedEvents.map(
                          (onGoing, onGoingIndex) => (
                            <div
                              key={onGoingIndex}
                              tabIndex="1"
                              className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                if (
                                  onGoing.action === 'Go to Team Registration'
                                ) {
                                  props.history.push(
                                    // `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}`
                                    `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}/${onGoing.tournament_id}`
                                  );
                                } else {
                                  props.history.push(
                                    `/regEvent/${onGoing.tournament_id}`
                                  );
                                }
                              }}
                            >
                              <div className="container row overflow-hidden">
                                {/* img */}
                                <div className="col-3 m-auto p-0">
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}/${
                                      onGoing.tournament_id !== undefined &&
                                      onGoing.tournament_pic
                                    }`}
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
                                      if (onGoing.team_id !== undefined) {
                                        e.target.src = photoAddIcon;
                                      }
                                    }}
                                  />
                                </div>
                                {/* data */}
                                {onGoing.team_id !== undefined ? (
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading text-nowrap">
                                      {onGoing.players.length > 25
                                        ? onGoing.players.substring(0, 25 - 3) +
                                          '...'
                                        : onGoing.players}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangelevel} alt="" />
                                      <span className="span-1">
                                        {`${onGoing.div_name} `} |
                                      </span>{' '}
                                      <img src={iconorangepoints} alt="" />
                                      <span className="span-2">{` ${onGoing.points}`}</span>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading text-nowrap">
                                      {onGoing.name.length > 25
                                        ? onGoing.name.substring(0, 25 - 3) +
                                          '...'
                                        : onGoing.name}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangelevel} alt="" />
                                      <span className="span-1">
                                        {`${onGoing.status} `} |
                                      </span>{' '}
                                      <img src={iconorangepoints} alt="" />
                                      <span className="span-2">{` ${onGoing.spots}`}</span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {onGoing.team_id !== undefined ? (
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() =>
                                    props.history.push(
                                      `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}`
                                      // `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}/${onGoing.tournament_id}`
                                    )
                                  }
                                >
                                  {onGoing.action}{' '}
                                  <img src={iconmenuchevronclose} alt="" />
                                </div>
                              ) : (
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() =>
                                    props.history.push(
                                      `/regEvent/${onGoing.tournament_id}`
                                    )
                                  }
                                >
                                  {onGoing.actions}{' '}
                                  <img src={iconmenuchevronclose} alt="" />
                                </div>
                              )}
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
                        {dashboardTypeFiveData.recentlyEditedTeams.map(
                          (onGoing, onGoingIndex) => (
                            <div
                              key={onGoingIndex}
                              tabIndex="1"
                              className="col-sm-10 col-md-10 col-lg-5 offset-1 p-0 my-4 rectangle text-decoration-none"
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                if (
                                  onGoing.action === 'Go to Team Registration'
                                ) {
                                  props.history.push(
                                    `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}`
                                    // `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}/${onGoing.tournament_id}`
                                  );
                                } else {
                                  props.history.push(
                                    `/regEvent/${onGoing.tournament_id}`
                                  );
                                }
                              }}
                            >
                              <div className="container row overflow-hidden">
                                {/* img */}
                                <div className="col-3 m-auto p-0">
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}/${
                                      onGoing.tournament_id !== undefined &&
                                      onGoing.tournament_pic
                                    }`}
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
                                      if (onGoing.team_id !== undefined) {
                                        e.target.src = photoAddIcon;
                                      }
                                    }}
                                  />
                                </div>
                                {/* data */}
                                {onGoing.team_id !== undefined ? (
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading text-nowrap">
                                      {onGoing.players.length > 25
                                        ? onGoing.players.substring(0, 25 - 3) +
                                          '...'
                                        : onGoing.players}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangelevel} alt="" />
                                      <span className="span-1">
                                        {`${onGoing.div_name} `} |
                                      </span>{' '}
                                      <img src={iconorangepoints} alt="" />
                                      <span className="span-2">{` ${onGoing.points}`}</span>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="col-8 p-0 m-auto">
                                    <div className="rectangle-heading text-nowrap">
                                      {onGoing.name.length > 25
                                        ? onGoing.name.substring(0, 25 - 3) +
                                          '...'
                                        : onGoing.name}
                                    </div>
                                    <div className="rectangle-content">
                                      <img src={iconorangelevel} alt="" />
                                      <span className="span-1">
                                        {`${onGoing.status} `} |
                                      </span>{' '}
                                      <img src={iconorangepoints} alt="" />
                                      <span className="span-2">{` ${onGoing.spots}`}</span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {onGoing.team_id !== undefined ? (
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() =>
                                    props.history.push(
                                      `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}`
                                      // `/RegEventTeam/${onGoing.team_id}/${onGoing.division_id}/${onGoing.waiting_flag}/${onGoing.tournament_id}`
                                    )
                                  }
                                >
                                  {onGoing.action}{' '}
                                  <img src={iconmenuchevronclose} alt="" />
                                </div>
                              ) : (
                                <div
                                  className="col-12 text-right rectangle-footer"
                                  onClick={() =>
                                    props.history.push(
                                      `/regEvent/${onGoing.tournament_id}`
                                    )
                                  }
                                >
                                  {onGoing.actions}{' '}
                                  <img src={iconmenuchevronclose} alt="" />
                                </div>
                              )}
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

export default DashboardReg;
