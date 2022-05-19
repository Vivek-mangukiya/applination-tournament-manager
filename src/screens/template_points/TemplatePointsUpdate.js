import React, { useEffect, useState, useContext } from 'react';
import './TemplatePoints.css';
import clearIcon from '../../assets/images/icons-x-input.svg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import iconavatarpoints from '../../assets/images/icon-avatar-points.svg';
import TemplatePoolsDropDown from '../template_pools/TemplatePoolsDropDown';
import TemplatePointsContext from '../../context/template_points/templatePointsContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Modal } from 'react-responsive-modal';

const TemplatePointsUpdate = (props) => {
  //context
  const templatePointsContext = useContext(TemplatePointsContext);
  const {
    templatePointsDataById,
    createPointsTemplateLoading,
    getTemplatePointsById,
    createTemplatePointsLoading,
    updatePointsTemplate,
    updatePointsTempError,
  } = templatePointsContext;

  useEffect(() => {
    createTemplatePointsLoading();
    getTemplatePointsById(props.match.params.points_id);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(templatePointsDataById);
  }, [templatePointsDataById]);

  const [pointsName, setPointsName] = useState('');
  const [pointsEventName, setPointsEventName] = useState('');
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');
  const [nine, setNine] = useState('');
  const [ten, setTen] = useState('');
  const [eleven, setEleven] = useState('');
  const [twelve, setTwelve] = useState('');
  const [thirteen, set13] = useState('');
  const [fourteen, set14] = useState('');
  const [fifteen, set15] = useState('');
  const [sixteen, set16] = useState('');
  const [seventeen, set17] = useState('');
  const [eighteen, set18] = useState('');
  const [nineteen, set19] = useState('');
  const [twenty, set20] = useState('');
  const [twenty1, set21] = useState('');
  const [twenty2, set22] = useState('');
  const [twenty3, set23] = useState('');
  const [twenty4, set24] = useState('');
  const [twenty5, set25] = useState('');
  const [twenty6, set26] = useState('');
  const [twenty7, set27] = useState('');
  const [twenty8, set28] = useState('');
  const [twenty9, set29] = useState('');
  const [thirty, set30] = useState('');
  const [thirty1, set31] = useState('');
  const [thirty2, set32] = useState('');
  const [thirty3, set33] = useState('');
  const [thirty4, set34] = useState('');
  const [thirty5, set35] = useState('');
  const [thirty6, set36] = useState('');

  const [updatedState, setUpdatedState] = useState({
    // name: pointsName,
    id: Number(props.match.params.points_id),
    payout_spots: 4,
    rank_points: [],
  });

  useEffect(() => {
    if (templatePointsDataById !== null) {
      setUpdatedState((prevState) => {
        var temp = { ...prevState };
        temp.name = templatePointsDataById.name;
        temp.details = templatePointsDataById.details;
        return temp;
      });
    }
  }, [templatePointsDataById]);

  //eslint-disable-next-line
  const [dropPointsValues, setDropPointsValues] = useState([
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1500,
    2000,
    2500,
    3000,
    3500,
    4000,
    4500,
    5000,
  ]);

  const onSave = async () => {
    // props.history.push('/TemplatePointsSaved');
    let x = {};
    x.id = Number(props.match.params.points_id);
    x.payout_spots = 4;
    // x.name = updatedState.name;
    x.details = updatedState.details;
    x.rank_points = updatedState.rank_points.filter(function (el) {
      return el !== null;
    });

    x = pointsName === '' ? { ...x } : { ...x, name: pointsName };
    if (x.name === '') {
      delete x.name;
    }
    //updatedState.rank_points = x;
    console.log(x);
    console.log(JSON.stringify(x));
    console.log(updatedState);
    // setOutGoingData((prevState) => {
    //   let temp = { ...prevState };
    //   temp.rank_points = x;
    //   return temp;
    // });
    // console.log(outgoingData);
    console.log(JSON.stringify(updatedState));
    updatePointsTemplate(x, props.history);
    // createPointsTemplate(JSON.stringify(updatedState), props.history);
  };

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //close Icon
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#333">
          <g>
            <path
              d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
              transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {createPointsTemplateLoading || templatePointsDataById === null ? (
        <div className="mt-5">
          <LoadingSpinner />
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
                  {/* image and event name */}
                  <div className="row">
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
                    </div>
                    <div className="col-9 mt-auto mb-auto">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          borderBottom: '1px solid #979797',
                        }}
                      >
                        <div>
                          <input
                            type="text"
                            placeholder={templatePointsDataById.name}
                            value={pointsName}
                            onChange={(e) => {
                              setPointsName(e.target.value);
                              setUpdatedState((prevState) => {
                                var temp = { ...prevState };
                                temp.name = e.target.value;
                                return temp;
                              });
                            }}
                            className="form-control event-input"
                          />
                        </div>
                        <div className="mt-auto mb-auto ml-auto">
                          <img
                            src={clearIcon}
                            alt=""
                            style={{ width: 10 }}
                            onClick={() => {
                              setPointsName('');
                              setUpdatedState((prevState) => {
                                var temp = { ...prevState };
                                temp.name = '';
                                return temp;
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          borderBottom: '1px solid #979797',
                        }}
                      >
                        <div>
                          <input
                            type="text"
                            placeholder={templatePointsDataById.details}
                            value={pointsEventName}
                            onChange={(e) => {
                              setPointsEventName(e.target.value);
                              setUpdatedState((prevState) => {
                                var temp = { ...prevState };
                                temp.details = e.target.value;
                                return temp;
                              });
                            }}
                            className="form-control event-input"
                          />
                        </div>
                        <div className="mt-auto mb-auto ml-auto">
                          <img
                            src={clearIcon}
                            alt=""
                            style={{ width: 10 }}
                            onClick={() => {
                              setPointsEventName('');
                              setUpdatedState((prevState) => {
                                var temp = { ...prevState };
                                temp.details = '';
                                return temp;
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0" style={{ marginTop: 44 }}>
                  <table className="table table-borderless table-tempalte-pools template-points-table">
                    <tbody>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                1
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {one !== ''
                                        ? one
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '1') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '1') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setOne(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[1] = {
                                                  rank: '1',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                4
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {four !== ''
                                        ? four
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '4') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '4') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setFour(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[4] = {
                                                  rank: '4',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                7
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {seven !== ''
                                        ? seven
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '7') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '7') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setSeven(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[7] = {
                                                  rank: '7',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                2
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {two !== ''
                                        ? two
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '2') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '2') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setTwo(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[2] = {
                                                  rank: '2',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                5
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {five !== ''
                                        ? five
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '5') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '5') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setFive(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[5] = {
                                                  rank: '5',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                8
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {eight !== ''
                                        ? eight
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '8') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '8') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setEight(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[8] = {
                                                  rank: '8',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                3
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {three !== ''
                                        ? three
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '3') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '3') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setThree(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[3] = {
                                                  rank: '3',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                6
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {six !== ''
                                        ? six
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '6') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '6') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setSix(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[6] = {
                                                  rank: '6',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                9
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {nine !== ''
                                        ? nine
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '9') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '9') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setNine(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[9] = {
                                                  rank: '9',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
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
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                10
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {ten !== ''
                                        ? ten
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '10') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '10') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setTen(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[10] = {
                                                  rank: '10',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                13
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirteen !== ''
                                        ? thirteen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '13') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '13') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set13(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[13] = {
                                                  rank: '13',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                16
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {sixteen !== ''
                                        ? sixteen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '16') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '16') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set16(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[16] = {
                                                  rank: '16',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                11
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {eleven !== ''
                                        ? eleven
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '11') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '11') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setEleven(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[11] = {
                                                  rank: '11',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                14
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {fourteen !== ''
                                        ? fourteen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '14') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '14') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set14(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[14] = {
                                                  rank: '14',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                17
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {seventeen !== ''
                                        ? seventeen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '17') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '17') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set17(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[17] = {
                                                  rank: '17',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                12
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twelve !== ''
                                        ? twelve
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '12') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '12') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              setTwelve(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[12] = {
                                                  rank: '12',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                15
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {fifteen !== ''
                                        ? fifteen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '15') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '15') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set15(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[15] = {
                                                  rank: '15',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                18
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {eighteen !== ''
                                        ? eighteen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '18') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '18') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set18(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[18] = {
                                                  rank: '18',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
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
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                19
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {nineteen !== ''
                                        ? nineteen
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '19') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '19') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set19(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[19] = {
                                                  rank: '19',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                22
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {/* {twenty2} */}
                                      {twenty2 !== ''
                                        ? twenty2
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '22') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '22') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set22(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[22] = {
                                                  rank: '22',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                25
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty5 !== ''
                                        ? twenty5
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '25') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '25') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set25(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[25] = {
                                                  rank: '25',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                20
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty !== ''
                                        ? twenty
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '20') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '20') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set20(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[20] = {
                                                  rank: '20',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                23
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty3 !== ''
                                        ? twenty3
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '23') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '23') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set23(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[23] = {
                                                  rank: '23',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                26
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty6 !== ''
                                        ? twenty6
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '26') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '26') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set26(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[26] = {
                                                  rank: '26',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                21
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty1 !== ''
                                        ? twenty1
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '21') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '21') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set21(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[21] = {
                                                  rank: '21',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                24
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty4 !== ''
                                        ? twenty4
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '24') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '24') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set24(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[24] = {
                                                  rank: '24',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                27
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty7 !== ''
                                        ? twenty7
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '27') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '27') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set27(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[27] = {
                                                  rank: '27',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
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
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                28
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty8 !== ''
                                        ? twenty8
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '28') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '28') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set28(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[28] = {
                                                  rank: '28',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                31
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty1 !== ''
                                        ? thirty1
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '31') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '31') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set31(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[31] = {
                                                  rank: '31',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                34
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty4 !== ''
                                        ? thirty4
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '34') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '34') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set34(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[34] = {
                                                  rank: '34',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                29
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {twenty9 !== ''
                                        ? twenty9
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '29') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '29') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set29(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[29] = {
                                                  rank: '29',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                32
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty2 !== ''
                                        ? thirty2
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '32') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '32') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set32(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[32] = {
                                                  rank: '32',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                35
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty5 !== ''
                                        ? thirty5
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '35') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '35') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set35(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[35] = {
                                                  rank: '35',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="template-points-table-row">
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                30
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty !== ''
                                        ? thirty
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '30') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '30') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set30(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[30] = {
                                                  rank: '30',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                33
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty3 !== ''
                                        ? thirty3
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '33') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '33') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set33(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[33] = {
                                                  rank: '33',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-1">
                          <div className="container p-0 m-0">
                            <div className="row p-0 m-0">
                              <div
                                className="col-6 p-0 m-0 table-left"
                                style={{ fontFamily: 'FuturaMedium' }}
                              >
                                36
                              </div>
                              <div
                                className="col-6 offset-3 points-box m-0 d-flex align-items-center p-0"
                                style={{
                                  // height: 40,
                                  borderRadius: 3,
                                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="container p-0 m-auto">
                                  <div className="row p-0 m-auto">
                                    <div
                                      className="col-8 p-0 m-0"
                                      style={{
                                        fontFamily: 'FuturaMedium',
                                        color: '#727272',
                                      }}
                                    >
                                      {thirty6 !== ''
                                        ? thirty6
                                        : templatePointsDataById.rank_points.map(
                                            //eslint-disable-next-line
                                            (data, i) => {
                                              if (data.rank === '36') {
                                                return data.points;
                                              }
                                            }
                                          )}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              var id = '';
                                              templatePointsDataById.rank_points.map(
                                                //eslint-disable-next-line
                                                (data, i) => {
                                                  if (data.rank === '36') {
                                                    console.log(
                                                      data.rank_point_id
                                                    );
                                                    id = data.rank_point_id;
                                                  }
                                                }
                                              );
                                              set36(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };

                                                temp.rank_points[36] = {
                                                  rank: '36',
                                                  points: item,
                                                  rank_point_id:
                                                    id !== '' ? id : 0,
                                                };
                                                return temp;
                                              });
                                            }}
                                          >
                                            {item}
                                          </li>
                                        ))}
                                      </TemplatePoolsDropDown>
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
          <Footer>
            <div className="m-0 col-auto ml-auto mt-3">
              <div className="lower-back-button-cancel">
                <span className="lower-back-button-text" onClick={onOpenModal}>
                  CANCEL
                </span>
              </div>
            </div>
            <div className="m-0 col-auto mt-3" style={{ position: 'relative' }}>
              {updatePointsTempError !== null && (
                <div className="on_save_error">{updatePointsTempError}</div>
              )}
              <div className="lower-back-button" onClick={onSave}>
                <span className="lower-back-button-text">SAVE</span>
              </div>
            </div>
          </Footer>
          {/* Modal */}
          <Modal
            open={open}
            onClose={onCloseModal}
            closeIcon={closeIcon}
            center
            styles={{
              modal: {
                borderRadius: 12,
                boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
                margin: 0,
                padding: 0,
              },
            }}
          >
            <div
              className="text-center"
              style={{
                marginTop: 62,
                fontFamily: 'Futura',
                fontSize: 14,
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: 'normal',
                color: '#4a4a4a',
              }}
            >
              Are your sure you want to cancel?
            </div>
            <p
              className="text-center"
              style={{
                width: 398,
                marginTop: 8,
                fontSize: 10,
                fontFamily: 'Futura',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: 'normal',
                color: '#9b9b9b',
              }}
            >
              All changes will not be saved and progress will be lost.
            </p>
            <div
              className="row container"
              style={{ marginTop: 79, marginBottom: 24 }}
            >
              <div className="col-12 text-center m-auto">
                <button
                  type="button"
                  className="btn-sm ml-5"
                  id="white-button-hover"
                  onClick={onCloseModal}
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffffff',
                    outline: 0,
                    color: '#4a4a4a',
                  }}
                >
                  NO, CONTINUE
                </button>
                <button
                  className="btn-sm pb-1 ml-3"
                  id="yellow-button-hover"
                  onClick={() => props.history.push('/DashboardTemplate')}
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffd420',
                    outline: 0,
                    color: '#4a4a4a',
                  }}
                >
                  YES, CANCEL
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default TemplatePointsUpdate;
