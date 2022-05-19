import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/RegEventComponent.css';
import menuaddicon from '../assets/images/icon-menu-add.svg';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import Header from './header/Header';
import profilePic from '../assets/images/defaultIcon3.png';
import event from '../assets/images/events.svg';
import Purse from '../assets/images/purse.svg';
import hamburgerIcon from '../assets/images/icon-menu-hamburger.svg';

import backIcon from '../assets/images/icon-menu-back.svg';
import RegContext from '../context/registration/RegContext';
import EventContext from '../context/event/eventContext';

import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import { Collapse } from 'antd';
import { Modal } from 'react-responsive-modal';

import RegEventDropDown from './RegEventDropDown';
import Footer from './footer/Footer';
import RegEventComponentModal from './RegEventComponentModal';
import NumberFormat from 'react-number-format';

const { Panel } = Collapse;

const RegEvent = (props) => {
  //context
  const eventContext = useContext(EventContext);
  const { tournamentStatus } = eventContext;

  const regContext = useContext(RegContext);
  const {
    getRegById,
    regDataById,
    setTeamStatusReg,
    regStatusLoading,
    setTeamDataLoading,
    teamDataLoading,
    regByIdErr,
    excelDownload,
    excel_error,
    // get Registered Divisions
    getRegisteredDivisions,
    // get Registered Divisions To Null
    getRegisteredDivisionsToNull,
    // change Division Response
    changeDivisionResponse,
    // set Team Player Status
    setTeamPlayerStatus,
    // team Player Status Loading
    teamPlayerStatusLoading,

    //attendance
    setTeamAttendanceStatus,
    teamAttendanceStatusLoading,

    //get team payment details by id
    getTeamPaymentDetails,
    //Amount Paid by Team
    teamPaymentDataAmount,
  } = regContext;

  useEffect(() => {
    console.log(teamPaymentDataAmount);
    console.log(teamPaymentDataAmount);
    if (teamPaymentDataAmount === null) setCustomRefundAmount(0);
    else setCustomRefundAmount(teamPaymentDataAmount);
  }, [teamPaymentDataAmount]);

  useEffect(() => {
    // console.log(props.match.params.id);
    setTeamDataLoading();
    getRegById(props.match.params.id);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (regDataById !== null) {
      console.log('data:', regDataById);
      setTournamentStatus2(regDataById.status === 'Reg Open' ? true : false);
    }
  }, [regDataById]);

  // modal state
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (openModal === true && modalData !== null) {
      console.log(modalData);
      getRegisteredDivisions(modalData.team_id);
    }
  }, [openModal, modalData]);

  useEffect(() => {
    if (changeDivisionResponse === 'Team Added Sucessfully') {
      setTeamDataLoading();
      getRegById(props.match.params.id);
      setTimeout(() => {
        setOpenModal(false);
        setModalData(null);
        getRegisteredDivisionsToNull();
      }, 2000);
    }
  }, [changeDivisionResponse]);

  //Delete & refund
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

  //hamburger for close & open
  const [hamburgerDropdown, setHamburgerDropdown] = useState(false);
  const [tournamentStatus2, setTournamentStatus2] = useState(
    regDataById !== null && regDataById.status === 'Reg Open' ? true : false
  );
  //  const [tournamentStatus4,setTournamentStatus4] = useState(
  //               regDataById!==null && regDataById.status === 'Reg Closed'?
  //               true :false
  //               );
  const [loaderStatus, setLoaderStatus] = useState(false);

  useEffect(() => {
    console.log('Registration : ' + tournamentStatus2);
    // setTeamDataLoading();
    // getRegById(props.match.params.id);
    setLoaderStatus(true);
    setTimeout(() => {
      setOpenModal(false);
      setModalData(null);
      getRegisteredDivisionsToNull();
      setLoaderStatus(false);
    }, 2500);
  }, [tournamentStatus2]);

  const registrationStatus = async (statusValue) => {
    console.log('Event id:', parseInt(props.match.params.id));
    let status = tournamentStatus2 ? '2' : '4';
    if (parseInt(props.match.params.id) !== null) {
      console.log(
        "Event to be set to REG OPEN's id:",
        parseInt(props.match.params.id)
      );
      const data = {
        tournament_id: parseInt(props.match.params.id),
        status: statusValue,
      };
      await tournamentStatus({
        data: JSON.stringify(data),
      }).then(async (res) => {
        await getRegById(props.match.params.id);
      });
    }
  };

  //modal
  const [openRefundModal, setOpenRefundModal] = useState(false);
  const [refundModal1, setRefundModal1] = useState(false);
  const [refundModal2, setRefundModal2] = useState(false);
  const [refundModal3, setRefundModal3] = useState(false);
  const [customRefund, setCustomRefund] = useState(false);
  const [teamIdDelete, setTeamDelete] = useState(null);
  const [customRefundAmount, setCustomRefundAmount] = useState('10');
  const [loadDelete, setLoadingDelete] = useState(false);
  const [paidStatus, setPaidStatus] = useState(false);

  useEffect(() => {
    console.log('loading....');
  }, [loadDelete]);

  const onClosePayModal = () => {
    setOpenRefundModal(false);
    setOpenRefundModal(false);
    setRefundModal1(false);
    setCustomRefund(false);
    setTeamDelete(null);
  };
  useEffect(() => {
    console.log('modal' + openRefundModal);
  }, [openRefundModal]);

  const noOfPlayersInTeam = (player) => {
    let count = 0;
    let value = -1;
    let s = [];
    player.map((player, index4) => {
      if (player !== null) {
        s.push(index4);
        if (count === -1) {
          count++;
        }
      }
    });

    let len = s.length;
    if (len === 1) {
      value = s[0];
    } else {
      if (len % 2 == 1) value = s[parseInt(len / 2)];
      else value = s[len - 1];
    }
    return value;
  };

  const onDeleteTeam = async () => {
    setLoadingDelete(true);
    console.log(teamIdDelete);
    let data = {
      status: 0,
    };
    if (customRefund) {
      data.refund = '1';
      data.amount = customRefundAmount;
    } else {
      data.refund = '0';
    }
    await setTeamStatusReg(teamIdDelete, data);
    await getRegById(props.match.params.id);
    setRefundModal1(false);
    setOpenRefundModal(false);
    setLoadingDelete(false);
  };

  return (
    <div
      className="RegEventt"
      style={{
        pointerEvents: teamAttendanceStatusLoading && 'none',
        opacity: teamAttendanceStatusLoading ? 0.5 : 1,
      }}
    >
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
          {regDataById !== null && regDataById.status !== 'created' && (
            <li
              className="nav-item"
              onClick={() =>
                props.history.push(
                  '/eventProfileSaved/' + props.match.params.id
                )
              }
            >
              <a
                className="nav-link disabled"
                href="#/"
                tabIndex="-1"
                aria-disabled="true"
              >
                <img alt="menu" src={event} className="profile-image" />
              </a>
            </li>
          )}
        </ul>
      </Header>

      <div style={{ pointerEvents: 'none' }}>
        {openRefundModal && (
          <Modal
            open={openRefundModal}
            onClose={onClosePayModal}
            closeIcon={closeIcon}
            styles={{
              modal: {
                borderRadius: 12,
                boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
                margin: 0,
                padding: 0,
                zIndex: 1000000,
                marginTop: 20,
                overflow: 'hidden',
                width: '500px',
              },
              overlay: {
                background: '#000000',
                opacity: 0.5,
              },
            }}
          >
            {refundModal1 ? (
              <>
                <div
                  className="text-center mt-2 apply-discount-modal-text"
                  onClick={() => console.log('1')}
                >
                  <div>
                    {paidStatus ? (
                      <h5 style={{ padding: '10px' }}>
                        Team is paid. Do you want to refund?
                      </h5>
                    ) : (
                      <h4 style={{ padding: '10px' }}>
                        Do you want to delete team?
                      </h4>
                    )}
                  </div>
                </div>

                {paidStatus ? (
                  <>
                    <div className="pt-2  ">
                      <div className="container row ">
                        <div className="col-3"></div>
                        <div className="col-3 p-12">
                          {' '}
                          <label
                            className="AS1checkbox MensLabel"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              checked={customRefund}
                              onChange={() => {
                                setCustomRefund(!customRefund);
                              }}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span className="AS1label">Yes</span>
                          </label>
                        </div>
                        <div className="col-6 p-0">
                          {' '}
                          <label
                            className="AS1checkbox MensLabel"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              checked={!customRefund}
                              onChange={() => {
                                setCustomRefund(!customRefund);
                              }}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span className="AS1label">No</span>
                          </label>
                        </div>
                        {customRefund && (
                          <>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="col-3"></div>
                            <div className="col-9">Enter Refund Amount</div>
                            <div className="col-3"></div>
                            <div
                              className="col-7 p-0 "
                              style={{
                                height: 32,
                                padding: '4px 8px',
                                margin: '8px',
                                borderRadius: 3,
                                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                                backgroundColor: '#ffffff',
                              }}
                            >
                              <div
                                className="row p-0 m-0"
                                onClick={() =>
                                  console.log(Number(customRefundAmount))
                                }
                              >
                                <div className="col-2">
                                  <img src={Purse} alt=""></img>
                                </div>
                                <div className="col-10 text-right">
                                  <NumberFormat
                                    pattern={'[0-9]*'}
                                    displayType="input"
                                    thousandSeparator={true}
                                    placeholder="Enter custom value here.."
                                    prefix={'$'}
                                    // decimalScale={2}
                                    className="placeholderNumber"
                                    id="LEPrice"
                                    min="0"
                                    isAllowed={({ floatValue }) =>
                                      floatValue <= teamPaymentDataAmount ||
                                      floatValue === ''
                                    }
                                    // isAllowed={({ floatValue }) =>{
                                    //   console.log(floatValue)
                                    //   return ((floatValue <= teamPaymentDataAmount && floatValue >= 0) ||
                                    //   floatValue === '')
                                    // }
                                    // }
                                    name="lateAmount"
                                    value={customRefundAmount}
                                    onChange={(e) =>
                                      setCustomRefundAmount(
                                        e.target.value.replace('$', '')
                                      )
                                    }
                                    autoComplete="off"
                                    style={{
                                      outline: 'none',
                                      border: 'none',
                                      textAlign: 'right',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="col"></div>
                        <div className="col"></div>
                      </div>
                    </div>
                  </>
                ) : null}
                <div
                  className="row container mt-2 mx-auto"
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <div className="col-12 text-center m-auto">
                    <button
                      type="button"
                      className="btn-sm ml-5 apply-discount-modal-left-button"
                      id="white-button-hover"
                      onClick={() => {
                        setRefundModal1(false);
                        setOpenRefundModal(false);
                        setCustomRefundAmount('10');
                        setCustomRefund(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn-sm pb-1 ml-3 apply-discount-modal-right-button "
                      id="yellow-button-hover"
                      onClick={onDeleteTeam}
                    >
                      {loadDelete ? (
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span class="sr-only">Loading...</span>
                        </span>
                      ) : (
                        <span>OK</span>
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </Modal>
        )}
      </div>

      <div className="container text-center px-0 mt-4">
        <div className="row mx-0 px-0">
          <div className="col-11 m-auto text-center px-0">
            <div
              className="row reg-team-widthh mx-0 p-0"
              style={{ marginBottom: 100 }}
            >
              {regDataById === undefined ||
              loaderStatus ||
              regStatusLoading ||
              teamDataLoading ? (
                <div className="col-12 text-center">
                  <LoadingSpinner />
                </div>
              ) : regByIdErr !== null || regDataById === null ? (
                <div className="mt-5 text-center mx-auto">
                  <h4 style={{ color: '#ff2072' }}>{regByIdErr}</h4>
                </div>
              ) : (
                <>
                  <div className="col-12 mx-0 px-0">
                    <div className="row mx-0 px-0 d-flex justify-content-end">
                      <div className="col-10 mx-0 px-0  d-flex align-content-right justify-content-end">
                        {/* empty */}
                      </div>
                      <div className="col-2 mx-0 px-0  d-flex align-content-center justify-content-end">
                        <div
                          className="dot mr-1 my-auto"
                          style={{
                            backgroundColor:
                              regDataById.status === 'Reg Closed'
                                ? '#ff6a20'
                                : regDataById.status === 'Reg Open'
                                ? '#7ed321'
                                : regDataById.status === 'Created'
                                ? '#20e2ff'
                                : regDataById.status === 'Fill'
                                ? '#9b9b9b'
                                : regDataById.status === 'Started'
                                ? '#e2eb38'
                                : regDataById.status === 'Tournament Over'
                                ? '#4b5c4b'
                                : regDataById.status === 'Postponed'
                                ? '#ff00bf'
                                : '#5b5c4b',
                          }}
                        ></div>
                        {regDataById.status}

                        {/* Hamburger */}
                        <a
                          className={
                            hamburgerDropdown
                              ? 'tri_top_visible'
                              : 'tri_top_hidden'
                          }
                          style={{ paddingLeft: '5px' }}
                          id="score-hamburger"
                          // ref={refHamburger}
                          onClick={() =>
                            setHamburgerDropdown(!hamburgerDropdown)
                          }
                        >
                          <div>
                            <img src={hamburgerIcon} alt="" />
                            {hamburgerDropdown && (
                              <span
                                className="tooltiptext2 p-0 dropdown_animation"
                                style={{ top: 29 }}
                              >
                                <ul>
                                  <li
                                    onClick={() => {
                                      if (tournamentStatus2 === false) {
                                        registrationStatus('2');
                                        setTournamentStatus2(true);
                                      }

                                      // setTournamentStatus4(false)
                                    }}
                                  >
                                    Go Live
                                  </li>

                                  <li
                                    onClick={() => {
                                      // setTournamentStatus4(true)
                                      if (tournamentStatus2) {
                                        registrationStatus('4');
                                        setTournamentStatus2(false);
                                      }
                                    }}
                                  >
                                    Close registration
                                  </li>
                                </ul>
                              </span>
                            )}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mx-0 px-0">
                    <div className="row mx-0 px-0">
                      <div className="col-2 p-0 m-0">
                        <img
                          className=" mx-0 px-0 reg-event-image image-fluid justify-content-start border border-circle"
                          alt=""
                          src={`${process.env.REACT_APP_BASE_URL}/${regDataById.tournament_pic}`}
                          onError={(e) => (e.target.src = profilePic)}
                        />
                      </div>

                      <div className="col-8 mx-0 px-0 reg-event-title d-flex align-items-center pl-4">
                        <div className="row p-0 m-0">
                          <div className="col-12 p-0 m-0 text-left">
                            {regDataById.tournament_name}
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto mx-0 p-0">
                        <div className="lower-back-button ml-auto">
                          <a
                            href={`${process.env.REACT_APP_BASE_URL}/api/admin/downloadDivisionTeam?id=${regDataById.tournament_id}`}
                            rel="noreferrer"
                            target="_blank"
                            style={{ color: '#4a4a4a' }}
                            onClick={() =>
                              excelDownload(regDataById.tournament_id)
                            }
                          >
                            EXPORT TO EXCEL
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Collapse
                    expandIconPosition="right"
                    bordered={true}
                    ghost
                    // className="w-100 mt-5 text-left"
                    // style={{ marginBottom: 100 }}
                    expandIcon={({ isActive }) => (
                      <span
                        className={
                          isActive ? 'reg-rotate mt-2' : 'reg-no-rotate mt-2'
                        }
                      >
                        <img src={menuchevrondownicon} alt="" />
                      </span>
                    )}
                    className="w-100 mt-5"
                  >
                    {excel_error !== null && (
                      <div className="row m-0 p-0 w-100">
                        <div className="col-12" style={{ color: '#ff2072' }}>
                          {excel_error}
                        </div>
                      </div>
                    )}

                    {regDataById.division.length === 0 ? (
                      <>
                        <div className="row m-0 p-0 w-100">
                          <div className="col-12" style={{ color: '#ff2072' }}>
                            No divisions set for the tournament.
                          </div>
                        </div>
                      </>
                    ) : (
                      regDataById.division.map((data, index2) => (
                        <Panel
                          header={
                            <div className="row">
                              <div className="col-sm-2 my-auto text-left">
                                {data.division_name}
                              </div>
                              <div className="col-sm-10">
                                <div
                                  className="row"
                                  style={{ padding: '0px', margin: '0px' }}
                                >
                                  <hr
                                    className="col-sm-4"
                                    style={{
                                      height: 1,
                                      backgroundColor: '#333333',
                                      border: 0,
                                    }}
                                  />
                                  <span
                                    className="col-sm-4 text-center"
                                    style={{ marginTop: '6px', padding: '0px' }}
                                  >
                                    {data.spots}
                                  </span>
                                  <hr
                                    className="col-sm-4"
                                    style={{ paddingRight: '10px' }}
                                    style={{
                                      height: 1,
                                      backgroundColor: '#333333',
                                      border: 0,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          }
                          key={data.division_id}
                        >
                          {data.team.map((team, index3) => (
                            <div className="col-12 mx-0 px-0" key={index3}>
                              <div className="row mx-0 px-0 d-flex justify-content-between">
                                <div className="col-4 mx-0 px-0 reg-event-team-num d-flex align-items-center">
                                  {team.team_name}
                                  {team.waiting >= 1 && ' - Waiting'}
                                </div>
                                <div className="col-1 p-0 d-flex align-items-center justify-content-end">
                                  {team.player.every(
                                    (element) => element === null
                                  ) ? (
                                    <img
                                      alt=""
                                      className="edit-icon"
                                      src={menuaddicon}
                                      onClick={() =>
                                        props.history.push(
                                          `/RegEventEdit/${props.match.params.id}`
                                        )
                                      }
                                    />
                                  ) : (
                                    <RegEventDropDown>
                                      <li
                                        onClick={() =>
                                          props.history.push(
                                            `/RegEventTeam/${team.team_id}/${data.division_id}/${team.waiting}/${props.match.params.id}`
                                          )
                                        }
                                      >
                                        Team View
                                      </li>
                                      <li
                                        // onClick={() => console.log('team', team)}
                                        onClick={() => {
                                          setModalData(team);
                                          setOpenModal(true);
                                        }}
                                      >
                                        Change Division
                                      </li>
                                      <li
                                        style={{ color: '#ff2072' }}
                                        onClick={async () => {
                                          if (
                                            team.status == null ||
                                            team.status === 'UnPaid' ||
                                            team.status === 'Reminder sent'
                                          ) {
                                            setPaidStatus(false);
                                          } else {
                                            setPaidStatus(true);
                                            await getTeamPaymentDetails(
                                              team.team_id
                                            );
                                          }
                                          // teamPaymentDataAmount
                                          console.log(openRefundModal);
                                          setOpenRefundModal(true);
                                          setRefundModal1(true);
                                          setTeamDelete(team.team_id);
                                          // await setTeamStatusReg(team.team_id);
                                          // await getRegById(props.match.params.id);
                                        }}
                                      >
                                        Delete
                                      </li>
                                    </RegEventDropDown>
                                  )}

                                  {openModal && (
                                    <RegEventComponentModal
                                      openModal={openModal}
                                      onCloseModal={() => {
                                        setOpenModal(false);
                                        setModalData(null);
                                        getRegisteredDivisionsToNull();
                                      }}
                                      modalData={modalData}
                                      team={team}
                                    />
                                  )}
                                </div>
                              </div>
                              <div
                                className="row mx-0 px-0 box-shadow rectangleTableRegBox"
                                style={{ boxShadow: '0 1 2 0 rgba(0,0,0,0.2)' }}
                              >
                                <div
                                  className="li-link col-12 mx-0 px-0"
                                  style={{
                                    textDecoration: 'none',
                                    cursor: 'default',
                                  }}
                                >
                                  {team.player.every(
                                    (element) => element === null
                                  ) ? (
                                    <div className="rectangleTableRegBoxNoPlayer">
                                      <hr className="m-0" />
                                    </div>
                                  ) : (
                                    <>
                                      {team.player.map((player, index4) => {
                                        // eslint-disable-next-line array-callback-return
                                        if (player === null) return;
                                        else
                                          return (
                                            <div className="y" key={index4}>
                                              <li
                                                className="row  mx-0 px-0 rectangleTableReg"
                                                key={index4}
                                              >
                                                <div className="col-11 mx-0 px-0  d-flex justify-content-start align-items-center">
                                                  <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center">
                                                    <img
                                                      className="Playerteam-logo"
                                                      src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${player.profile_pic}`}
                                                      onError={(e) =>
                                                        (e.target.src =
                                                          profilePic)
                                                      }
                                                      alt=""
                                                    ></img>
                                                  </div>
                                                  <div className="col-1 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                    {player.first_name}
                                                  </div>
                                                  <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                    {player.last_name}
                                                  </div>
                                                  <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                    {player.avp_id}
                                                  </div>
                                                  <div className="col-1 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                    {player.points}
                                                  </div>
                                                  <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                    {player.city},
                                                    {player.state_code}
                                                  </div>
                                                  <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                    {player.status}
                                                  </div>
                                                </div>

                                                {regDataById.status ===
                                                  'Reg Closed' &&
                                                  noOfPlayersInTeam(
                                                    team.player
                                                  ) === index4 && (
                                                    <div className="col-1 mx-0 px-0 d-flex justify-content-start align-items-center">
                                                      <label
                                                        className="AS1checkbox MensLabel m-0"
                                                        htmlFor="JAgeRangeInput"
                                                        style={{
                                                          position: 'unset',
                                                        }}
                                                      >
                                                        <input
                                                          className="form-control m-0"
                                                          id="JAgeRangeInput1"
                                                          name="11U"
                                                          type="checkbox"
                                                          value="11U"
                                                          onClick={async () => {
                                                            let data = {
                                                              team_id:
                                                                team.team_id,
                                                            };
                                                            if (
                                                              team.attendance ===
                                                              'present'
                                                            ) {
                                                              data.attendance =
                                                                '0';
                                                            } else {
                                                              data.attendance =
                                                                '1';
                                                            }
                                                            await setTeamAttendanceStatus(
                                                              data
                                                            );
                                                            // await setTeamPlayerStatus({
                                                            //   team_id: team.team_id,
                                                            //   player_avp_id:
                                                            //     player.avp_id,
                                                            //   status:
                                                            //     player.status ===
                                                            //     'Registered'
                                                            //       ? 2
                                                            //       : 1,
                                                            // });

                                                            await getRegById(
                                                              props.match.params
                                                                .id
                                                            );
                                                          }}
                                                          // onChange={() =>
                                                          //   setCheck(!check)
                                                          // } // Prop: Puts data into state
                                                          checked={
                                                            team.attendance ===
                                                            'present'
                                                          }
                                                        />
                                                        <span className="AS1checkmark MensCheck m-0 mt-3"></span>
                                                        <span
                                                          className="AS1label m-0"
                                                          // onClick={() =>
                                                          //   console.log(check)
                                                          // }
                                                        >
                                                          {' '}
                                                          {/* {voucher
                                                    ? 'Voucher'
                                                    : 'Discount'}{' '}
                                                  per Player */}
                                                        </span>
                                                      </label>
                                                    </div>
                                                  )}
                                              </li>
                                            </div>
                                          );
                                      })}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </Panel>
                      ))
                    )}
                  </Collapse>
                  <Footer>
                    <div className="m-0 col-auto ml-auto mt-3"></div>
                    <div
                      className="m-0 col-auto mt-3"
                      onClick={() =>
                        props.history.push(
                          `/RegEventEdit/${props.match.params.id}`
                        )
                      }
                    >
                      <div
                        className="lower-back-button"
                        id="yellow-button-hover"
                      >
                        <span className="lower-back-button-text">
                          MANAGE TEAMS
                        </span>
                      </div>
                    </div>
                  </Footer>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegEvent;
