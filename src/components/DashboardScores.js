import React, { useContext, useEffect } from 'react';
import '../assets/styles/DashboardTemplate.css';
import cardIcon from '../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../assets/images/icon-menu-list.svg';
import iconorangepencil from '../assets/images/icon-orange-pencil.svg';
import iconavatarpools from '../assets/images/icon-avatar-pools.svg';
import iconavatarpoints from '../assets/images/icon-avatar-points.svg';
import iconavatardivision from '../assets/images/icon-avatar-division.svg';
import iconorangemap from '../assets/images/icon-orange-map.png';
import iconOrangeDuration from '../assets/images/icon-orange-duration.svg';
import iconmenuchevronclose from '../assets/images/icon-menu-chevron-close.svg';
import Header from './header/Header';
import DashboardContext from '../context/dashboard/dashboardContext';
import iconorangecalendar from '../assets/images/icon-orange-calender.png';
import TemplateFormDash from './TemplateFormDash';
import TemplateNone from '../components/TemplateNone';
import ScoreNone from '../components/ScoreNone';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/defaultIcon2.png';
import photoAddIcon2 from '../assets/images/defaultIcon3.png';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import { Collapse } from 'antd';
import TemplateForm from './TemplateFormComponent';
import RegNone from './RegNone';

const { Panel } = Collapse;

const DashboardScores = (props) => {
  //context
  const dashboardContext = useContext(DashboardContext);
  const {
    getDashboardTypeSeven,
    dashboardTypeSevenData,
    dashBoardLoading,
    dashboardError,
  } = dashboardContext;

  useEffect(() => {
    getDashboardTypeSeven();
    //eslint-disable-next-line
  }, []);

  // const imageSelection = (type) => {
  //   if (type === 'Start Scores Page') {
  //     return photoAddIcon;
  //   }
  // };

  if (
    dashboardTypeSevenData !== null &&
    dashboardTypeSevenData.recentlyCreated.length === 0 &&
    dashboardTypeSevenData.recentlyUpdated.length === 0
  ) {
    // return <TemplateNone propsData={props.history} />;
    return <ScoreNone propsData={props.history} />;
  } else {
    return (
      <div className="dashboard-manager">
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
              onClick={() => props.history.push('/ScoresTable')}
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
            <div
              className="col-12 text-left quick-start"
              style={{ visibility: 'hidden' }}
            >
              Quick Start
            </div>
            {/* Three sections */}
            <div
              className="col-12 text-center new-icons-content"
              style={{ marginTop: 40, visibility: 'hidden' }}
            >
              <TemplateForm
                propsData={props.history}
                type="dash"
              ></TemplateForm>
            </div>

            {dashboardTypeSevenData === undefined || dashBoardLoading ? (
              <div className="mx-auto mt-5">
                <LoadingSpinner />
              </div>
            ) : dashboardError !== null || dashboardTypeSevenData === null ? (
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
                        {dashboardTypeSevenData.recentlyCreated.map(
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
                                      {`${onGoing.created_at}`} |
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
                            Recently Updated
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
                        {dashboardTypeSevenData.recentlyUpdated.map(
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
                                      {`${onGoing.created_at}`} |
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

export default DashboardScores;
