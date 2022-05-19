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

const TemplatePoints = (props) => {
  //context
  const templatePointsContext = useContext(TemplatePointsContext);
  const {
    createPointsTemplate,
    templatePointsDataById,
    createPointsTemplateLoading,
    createPointsTempError,
  } = templatePointsContext;

  const [pointsName, setPointsName] = useState(props.match.params.templateName);
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

  const [updatedState, setUpdatedState] = useState({
    type: 'points',
    name: pointsName,
    payout_spots: Number(props.match.params.spots),
    rank_points: {},
  });

  useEffect(() => {
    console.log(templatePointsDataById);
  }, [templatePointsDataById]);

  useEffect(() => {
    console.log(createPointsTemplateLoading);
  }, [createPointsTemplateLoading]);

  const onSave = () => {
    // props.history.push('/TemplatePointsSaved');
    console.log(updatedState);
    //console.log(dropPointsValues);
    createPointsTemplate(JSON.stringify(updatedState), props.history);
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
      {createPointsTemplateLoading ? (
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
                      {/* <div className="add-photo">ADD PHOTO</div> */}
                    </div>
                    <div className="col-8 mt-auto mb-auto">
                      {/* <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        borderBottom: '1px solid #979797',
                        paddingLeft: 40,
                      }}
                    >
                      <div>
                        <input
                          type="text"
                          placeholder="Pro Points"
                          value={pointsName}
                          onChange={(e) => setPointsName(e.target.value)}
                          className="form-control event-input"
                        />
                      </div>
                      <div className="mt-auto mb-auto ml-auto">
                        <img
                          src={clearIcon}
                          alt=""
                          style={{ width: 10 }}
                          onClick={() => setPointsName('')}
                        />
                      </div>
                    </div> */}
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
                            placeholder="Mens and Womens 2v2, 4v4 an..."
                            value={pointsName}
                            onChange={(e) => {
                              setPointsName(e.target.value);
                              setUpdatedState((prevState) => {
                                var temp = { ...prevState };
                                temp.name = e.target.value;
                                return temp;
                              });
                              // setX((prevState) => {
                              //   prevState.name = e.target.value;
                              //   return prevState;
                              // });
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
                              // setX((prevState) => {
                              //   prevState.name = '';
                              //   return prevState;
                              // });
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
                            placeholder="Mens and Womens 2v2, 4v4 an..."
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
                                className="col-3 p-0 m-0 table-left"
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
                                      // onClick={() =>
                                      //   console.log(x.schedules[0].name)
                                      // }
                                    >
                                      {one}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setOne(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[1] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {four}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setFour(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[4] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {seven}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setSeven(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[7] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {two}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setTwo(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[2] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {five}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setFive(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[5] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {eight}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setEight(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[8] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {three}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setThree(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[3] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {six}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setSix(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[6] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {nine}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setNine(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[9] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {ten}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setTen(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[10] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirteen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set13(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[13] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {sixteen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set16(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[16] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {eleven}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setEleven(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[11] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {fourteen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set14(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[14] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {seventeen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set17(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[17] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twelve}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              setTwelve(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[12] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {fifteen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set15(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[15] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {eighteen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set18(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[18] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {nineteen}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set19(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[19] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty2}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set22(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[22] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty5}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set25(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[25] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set20(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[20] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty3}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set23(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[23] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty6}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set26(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[26] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty1}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set21(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[21] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty4}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set24(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[24] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty7}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set27(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[27] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty8}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set28(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[28] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty1}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set31(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[31] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty4}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set34(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[34] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {twenty9}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set29(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[29] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty2}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set32(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[32] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty5}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set35(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[35] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set30(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[30] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty3}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set33(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[33] = item;
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
                                className="col-3 p-0 m-0 table-left"
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
                                      {thirty6}
                                      {/* {updatedState.rank_points !== undefined &&
                                      updatedState.rank_points[36]} */}
                                    </div>
                                    <div className="col-2 p-0 m-0">
                                      <TemplatePoolsDropDown>
                                        {dropPointsValues.map((item) => (
                                          <li
                                            key={item}
                                            onClick={() => {
                                              set36(item);
                                              setUpdatedState((prevState) => {
                                                var temp = { ...prevState };
                                                temp.rank_points[36] = item;
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
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer>
            <div className="m-0 col-auto ml-auto mt-3">
              <div
                className="lower-back-button-cancel"
                onClick={onOpenModal}
                //onClick={() => props.history.push('/DashboardTemplate')}
              >
                <span className="lower-back-button-text">CANCEL</span>
              </div>
            </div>
            <div className="m-0 col-auto mt-3" style={{ position: 'relative' }}>
              {createPointsTempError !== null && (
                <div className="on_save_error">{createPointsTempError}</div>
              )}
              <div className="lower-back-button" onClick={onSave}>
                <span className="lower-back-button-text">SAVE</span>
              </div>
            </div>
          </Footer>
          {/* modal */}
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

export default TemplatePoints;
