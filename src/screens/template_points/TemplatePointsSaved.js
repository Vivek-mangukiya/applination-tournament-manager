import React, { useContext, useEffect } from 'react';
import './TemplatePoints.css';
import Header from '../../components/header/Header';
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
import iconavatarpoints from '../../assets/images/icon-avatar-points.svg';
import RegEventDropDown from '../../components/RegEventDropDown';
import TemplatePointsContext from '../../context/template_points/templatePointsContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import TemplatePointsDropdown from './TemplatePointsDropdown';
import backIcon from '../../assets/images/icon-menu-back.svg';

const TemplatePointsSaved = (props) => {
  //context
  const templatePointsContext = useContext(TemplatePointsContext);
  const {
    templatePointsDataById,
    createPointsTemplateLoading,
    getTemplatePointsById,
    createTemplatePointsLoading,
    createPointsTemplate,
    deleteData,
    getPointsTempByIdError,
  } = templatePointsContext;

  useEffect(() => {
    createTemplatePointsLoading();
    getTemplatePointsById(props.match.params.points_id);
  }, []);

  useEffect(() => {
    createTemplatePointsLoading();
    getTemplatePointsById(props.match.params.points_id);
  }, [props.match.params.points_id]);

  useEffect(() => {
    console.log(templatePointsDataById);
  }, [templatePointsDataById]);

  useEffect(() => {
    if (
      templatePointsDataById === null ||
      templatePointsDataById[50] === null ||
      templatePointsDataById[50] === undefined
    ) {
      console.log(0);
    } else {
      console.log(templatePointsDataById[50]);
    }
  }, [templatePointsDataById]);

  const duplicateData = () => {
    console.log({
      type: 'points',
      name: templatePointsDataById.name,
      details: templatePointsDataById.details,
      payout_spots: templatePointsDataById.payout_spots,
      rank_points: templatePointsDataById.rank_points,
    });
    let x = {};
    for (let i = 0; i < templatePointsDataById.rank_points.length; i++) {
      x[templatePointsDataById.rank_points[i].rank] =
        templatePointsDataById.rank_points[i].points;
    }
    console.log(x);
    // console.log({ ...templatePointsDataById.rank_points });
    if (Object.keys(x).length !== 0) {
      createPointsTemplate(
        JSON.stringify({
          type: 'points',
          name: `${templatePointsDataById.name}(copy)`,
          details: templatePointsDataById.details,
          payout_spots: templatePointsDataById.payout_spots,
          rank_points: x,
        }),
        props.history
      );
    }
  };

  const deleteDataFun = () => {
    let points = 'points';
    deleteData(templatePointsDataById.id, points, props.history);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* <Header /> */}
      <Header>
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item"
            onClick={() =>props.history.push('/TemplateTable')}
          >
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      {createPointsTemplateLoading || templatePointsDataById === undefined ? (
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      ) : getPointsTempByIdError !== null || templatePointsDataById === null ? (
        <div className="text-center mt-5">
          <h4 style={{ color: '#ff2072' }}>{getPointsTempByIdError}</h4>
        </div>
      ) : (
        <div className="new-event-profile container p-0">
          <div
            className="row mx-0"
            style={{ marginTop: 142, paddingBottom: 200 }}
          >
            <div className="col-6 m-auto text-center p-0">
              <div className="container row p-0 m-0">
                <div className="col-12 p-0">
                  {/* Hamburger */}

                  {/* image and event name */}
                  <div className="row">
                    <div className="col-11">
                      <TemplatePointsDropdown>
                        <li
                          onClick={() =>
                            props.history.push(
                              `/templatePointsUpdate/${props.match.params.points_id}`
                            )
                          }
                        >
                          Edit
                        </li>
                        <li onClick={() => duplicateData()}>Duplicate</li>
                        <li
                          style={{ color: '#ff2072' }}
                          onClick={() => deleteDataFun()}
                        >
                          Delete
                        </li>
                      </TemplatePointsDropdown>
                    </div>
                    <div className="col-3 p-0">
                      <img
                        src={iconavatarpoints}
                        alt=""
                        className="img-fluid"
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                        }}
                      />
                      {/* <div className="add-photo">ADD PHOTO</div> */}
                    </div>
                    <div className="col-8 mt-auto mb-auto">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          borderBottom: '1px solid #979797',
                        }}
                      >
                        <div className="event-input">
                          {templatePointsDataById.name}
                        </div>
                        <div className="mt-auto mb-auto ml-auto"></div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          borderBottom: '1px solid #979797',
                          minHeight: 21,
                        }}
                      >
                        <div className="event-input mt-2">
                          {templatePointsDataById.details}
                        </div>
                        <div className="mt-auto mb-auto ml-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0" style={{ marginTop: 44 }}>
                  <table className="table table-borderless table-tempalte-pools template-points-table">
                    <tbody>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                1
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '1') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[1]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                4
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '4') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[4]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                7
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '7') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[7]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                2
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '2') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[2]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                5
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '5') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[5]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                8
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '8') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[8]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                3
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '3') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[3]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                6
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '6') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[6]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                9
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '9') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[9]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-12 p-0 m-0" style={{ marginTop: 32 }}>
                  <table className="table table-borderless table-tempalte-pools template-points-table">
                    <tbody>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                10
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '10') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[10]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                13
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '13') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[13]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                16
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '16') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[16]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                11
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '11') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[11]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                14
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '14') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[14]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                17
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '17') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[17]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                12
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '12') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[12]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                15
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '15') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[15]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                18
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '18') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[18]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-12 p-0 m-0" style={{ marginTop: 32 }}>
                  <table className="table table-borderless table-tempalte-pools template-points-table">
                    <tbody>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                19
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '19') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[19]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                22
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '22') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[22]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                25
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '25') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[25]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                20
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '20') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[20]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                23
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '23') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[23]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                26
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '26') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[26]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                21
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '21') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[21]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                24
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '24') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[24]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                27
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '27') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[27]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-12 p-0 m-0" style={{ marginTop: 32 }}>
                  <table className="table table-borderless table-tempalte-pools template-points-table">
                    <tbody>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                28
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '28') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[28]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                31
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '31') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[31]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                34
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '34') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[34]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                29
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '29') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[29]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                32
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '32') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[32]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                35
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '35') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[35]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                30
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '30') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[30]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                33
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '33') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[33]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-3 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                36
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 0,
                                  boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 1px 0px',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-12 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {templatePointsDataById.rank_points.map(
                                        (data, i) => {
                                          if (data.rank === '36') {
                                            return data.points;
                                          }
                                        }
                                      )}
                                      {/* {templatePointsDataById.rank_points[36]} */}
                                      {/* {updatedState.rank_points !== undefined &&
                                      updatedState.rank_points[36]} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* added rows */}

                {/* {[...Array(count)].map((e, i) => (
                <div
                  className="col-12 p-0 m-0"
                  key={i}
                  style={{ marginTop: 32 }}
                >
                  <table className="table table-borderless table-tempalte-pools template-points-table">
                    <tbody>
                      <tr className="template-points-table-row">
                        <TableData />
                        <TableData />
                        <TableData />
                      </tr>
                      <tr className="template-points-table-row">
                        <TableData />
                        <TableData />
                        <TableData />
                      </tr>
                      <tr className="template-points-table-row">
                        <TableData />
                        <TableData />
                        <TableData />
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))} */}

                {/* add button */}
                {/* <div
                className="col-12 m-0 p-0"
                onClick={() => setCount(count + 1)}
              >
                <div className="container row m-0 p-0">
                  <div className="col-5 m-0 p-0">
                    <hr />
                  </div>
                  <div className="col-2 m-0 p-0">
                    <img src={addHover} alt="" className="img-fluid" />
                  </div>
                  <div className="col-5 m-0 p-0">
                    <hr />
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
          {/* footer */}
          {/* <Footer>
            <div className="m-0 col-auto ml-auto mt-3">
              <div className="lower-back-button-cancel">
                <span className="lower-back-button-text">CANCEL</span>
              </div>
            </div>
            <div className="m-0 col-auto mt-3" onClick={onSave}>
              <div className="lower-back-button">
                <span className="lower-back-button-text">SAVE</span>
              </div>
            </div>
          </Footer> */}
        </div>
      )}
    </div>
  );
};

export default TemplatePointsSaved;
