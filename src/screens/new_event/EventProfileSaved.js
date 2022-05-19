import React, { useState, useContext, useEffect, useRef } from 'react';
import './NewEventProfile.css';
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
import calenderIcon from '../../assets/images/icon-orange-calender.svg';
import trophy from '../../assets/images/icon-orange-teams.svg';
// import plusIcon from '../../assets/images/icon-menu-add.svg';
import addNewIcon from '../../assets/images/icon-orange-players-plus.svg';
import Registration_ball from '../../assets/images/ball.svg';

import playersIcon from '../../assets/images/icon-orange-players.svg';
import durationIcon from '../../assets/images/icon-orange-duration.svg';
import poolsIcon from '../../assets/images/icon-orange-pools.svg';
import seasonsIcon from '../../assets/images/icon-orange-seasons.svg';
import pointsIcon from '../../assets/images/icon-orange-points.svg';
import playTypeIcon from '../../assets/images/icon-orange-playtype.svg';
import surfaceIcon from '../../assets/images/icon-orange-surface.svg';
import lightBulbIcon from '../../assets/images/icon-orange-lightbulb.svg';
import binocularsIcon from '../../assets/images/icon-orange-binoculars.svg';
import megaPhoneIcon from '../../assets/images/icon-orange-megaphone.svg';
import talkIcon from '../../assets/images/icon-orange-talk.svg';
import emailIcon from '../../assets/images/icon-orange-email.svg';
import purseIcon from '../../assets/images/icon-orange-purse.svg';
import pencilIcon from '../../assets/images/icon-orange-pencil.svg';
import positionIcon from '../../assets/images/icon-orange-position.svg';
import documentIcon from '../../assets/images/icon-orange-document.svg';
import EventContext from '../../context/event/eventContext';
import imageIcon from '../../assets/images/icon-orange-image.svg';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import photoAddIcon from '../../assets/images/group.svg';
import DefaultImage from '../../assets/images/DefaultImage.jpg';
import { Modal } from 'react-responsive-modal';
import defaultIcon3 from '../../assets/images/defaultIcon3.png';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// import MasterForm from '../../components/WizardFormComponent';
import moment from 'moment';

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

const EventProfileSaved = (props) => {
  const eventContext = useContext(EventContext);
  const {
    eventInfo,
    //event id
    eventId,
    //get tournament by id
    getTournamentById,

    //get tournament data
    getTournamentData,
    getDivisions,
    tournamentStatus,
    createTournament,
    // upload excel
    uploadExcel,
    // upload Excel Statement
    uploadExcelStatement,
    // excel loading
    excelLoading,
  } = eventContext;

  // const [status, setStatus] = useState(getTournamentData!==null && getTournamentData.tournament.status===4?'Reg Closed':getTournamentData!==null && getTournamentData.tournament.status===7?'Postponed':'Reg Open');
  const [status, setStatus] = useState('');

  // const [status, setStatus] = useState(getTournamentData!==null && getTournamentData.tournament.status)

  // useEffect(()=>{

  //   getTournamentById(parseInt(props.match.params.id));

  // },[status])
  const [loading, setLoading] = useState(false);

  const setTournamentStatus2 = async () => {
    setStatus('Reg Open');
    console.log('Event id:', parseInt(props.match.params.id));
    if (parseInt(props.match.params.id) !== null) {
      console.log(
        "Event to be set to REG OPEN's id:",
        parseInt(props.match.params.id)
      );
      const data = {
        tournament_id: parseInt(props.match.params.id),
        status: '2',
      };
      setLoading(true);
      await tournamentStatus({
        data: JSON.stringify(data),
      }).then(async () => {
        await getTournamentById(parseInt(props.match.params.id));
        setLoading(false);
      });
    }
  };

  const setTournamentStatus7 = async () => {
    setStatus('Postponed');
    console.log('Event id:', parseInt(props.match.params.id));
    if (parseInt(props.match.params.id) !== null) {
      console.log(
        "Event to be set to postponed's id:",
        parseInt(props.match.params.id)
      );
      const data = {
        tournament_id: parseInt(props.match.params.id),
        status: '7',
      };
      setLoading(true);
      await tournamentStatus({
        data: JSON.stringify(data),
      }).then(async () => {
        await getTournamentById(parseInt(props.match.params.id));
        setLoading(false);
      });
    }
  };

  const setTournamentStatus4 = async () => {
    setStatus('Reg Closed');
    console.log('Event id:', parseInt(props.match.params.id));
    if (parseInt(props.match.params.id) !== null) {
      console.log(
        'Event to be closed registrations id:',
        parseInt(props.match.params.id)
      );
      const data = {
        tournament_id: parseInt(props.match.params.id),
        status: '4',
      };
      setLoading(true);
      await tournamentStatus({
        data: JSON.stringify(data),
      }).then(async () => {
        await getTournamentById(parseInt(props.match.params.id));
        setLoading(false);
      });
    }
  };

  // //call api
  
  // useEffect(() => {
  //   if (eventId !== null) {
  //     getTournamentById(eventId);
  //     // console.log(getTournamentData);
  //   }
  // console.log("event id:",eventId)

  //   //eslint-disable-next-line
  // }, [eventId]);

  // useEffect(() => {
  //   // if (getTournamentData !== null) {
  //     console.log("GET TOURNAMENT DATA",getTournamentData);
  //   // }
  // }, []);

  useEffect(() => {
    console.log('Event id by url:', parseInt(props.match.params.id));
    getTournamentById(parseInt(props.match.params.id));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (getTournamentData !== null) {
      console.log('getTournamentData', getTournamentData);
      if (regMessage){
      console.log(getTournamentData.tournament.description);
      InDom(
        getTournamentData !== null
          ? getTournamentData.tournament.description
          : ''
      );
      }
      
    }
  }, [getTournamentData]);

  //states
  const [pdfShortForm, setPdfShortForm] = useState('');
  const [eventPhotoShortForm, setEventPhotoShortForm] = useState('');
  const [hamburgerDropdown, setHamburgerDropdown] = useState(false);

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }

          handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  const refHamburger = useRef();
  useOnClickOutside(refHamburger, () => setHamburgerDropdown(false));

  useEffect(() => {
    if (getTournamentData !== null) {
      var n = getTournamentData.tournament.tournament_doc;
      var u = n.split('-');
      setPdfShortForm(u[u.length - 1]);
      var v = getTournamentData.tournament.cover_photo;
      var x = v.split('-');
      setEventPhotoShortForm(x[x.length - 1]);

     
    }

    
  }, [getTournamentData]);

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const onDelete = async () => {
    setStatus('Deleted');
    console.log(
      "Tournament to be deleted's id:",
      parseInt(props.match.params.id)
    );
    const data = {
      tournament_id: parseInt(props.match.params.id),
      status: '0',
    };
    await tournamentStatus({
      data: JSON.stringify(data),
    });
    await setDeleteModal(true);
    await setTimeout(() => {
      props.history.push('/EventsTable');
    }, 3000);
  };

  const [excelValue, setExcelValue] = useState(null);
  var support = (function () {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
      parser.parseFromString('x', 'text/html');
    } catch (err) {
      return false;
    }
    return true;
  })();
  const textToHTML = (str) => {
    // check for DOMParser support
    if (support) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, 'text/html');
      return doc.body.innerHTML;
    }

    // Otherwise, create div and append HTML
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  };

  const [decriptionElement,setDecElement] = useState(null);
  useEffect(()=>{

    InDom(
      getTournamentData !== null
        ? getTournamentData.tournament.description
        : ''
    );
    },[document.getElementById('savedDescription')])

  const InDom = (str) => {
    console.log(str,getTournamentData !== null
      ? getTournamentData.tournament.description
      : '');
    const doc = document.getElementById('savedDescription');
    if(doc!==null) doc.innerHTML = textToHTML(getTournamentData !== null
      ? getTournamentData.tournament.description
      : '');

    // document.getElementById('htmls').innerHTML = textToHTML(str);
  };
  const [regMessage, setRegMessge] = useState(false);
  useEffect(() => {
    if (regMessage) {
      setTimeout(() => {
        setRegMessge(false);
        
      }, 2000);
    }
  }, [regMessage]);

  return (
    <>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item"
            onClick={() => {
              // console.log(props);
              props.history.goBack();
            }}
          >
            <a
              className="nav-link disabled"
              // href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
          {/* { getTournamentData!=null && getTournamentData.tournament!==null && getTournamentData.tournament.status == 2 && */}
          <li
            className="nav-item"
            //  data-toggle="popover"
            //  title="Popover title"
            //  data-content="And here's some amazing content. It's very engaging. Right?"
            //  data-placement="bottom"
            data-toggle="tooltip"
            data-placement="top"
            title={
              getTournamentData != null &&
              getTournamentData.tournament !== null &&
              getTournamentData.tournament.status !== 1
                ? 'OPEN'
                : 'Event is not yet open for registration'
            }
            onClick={() => {
              if (
                getTournamentData != null &&
                getTournamentData.tournament !== null &&
                getTournamentData.tournament.status !== 1
              ) {
                props.history.push('/regEvent/' + props.match.params.id);
              } else {
                if (!regMessage) {
                  setRegMessge(true);
                  console.log('Event is not yet open for registration');
                }
              }
            }}
          >
            <a className="nav-link disabled" href="#/" tabIndex="-1">
              <img
                alt="menu"
                src={Registration_ball}
                className="profile-image"
              />
            </a>
          </li>
          {/* } */}
        </ul>
      </Header>

      {getTournamentData === null || loading ? (
        <div className="col-12 text-center loading_height">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="new-event-profile container p-0">
          <div
            className="text-center"
            style={{ color: '#ff2072', display: regMessage ? '' : 'none' }}
          >
            {' '}
            Event is not yet open for registration
          </div>
          <div className="row mx-0" style={{ marginTop: 142 }}>
            <div className="col-6 m-auto text-center p-0">
              <div className="row main-width" style={{ paddingBottom: 150 }}>
                <div className="col-12">
                  {/* image and event name */}
                  <div className="row" style={{ color: '#ff2072' }}>
                    {uploadExcelStatement !== null && (
                      <div className="col-12">{uploadExcelStatement}</div>
                    )}
                    <div className="col-12 p-0 mb-2">
                      <div className="m-0 col-auto mt-3 p-0">
                        <div
                          className="lower-back-button ml-auto"
                          id="yellow-button-hover"
                        >
                          <span className="lower-back-button-text">
                            <label htmlFor="file-input-excel">
                              {excelLoading ? (
                                <div
                                  class="spinner-border spinner-border-sm text-dark my-1"
                                  role="status"
                                ></div>
                              ) : (
                                'UPLOAD RESULT'
                              )}
                            </label>
                            <input
                              id="file-input-excel"
                              type="file"
                              accept=".xlsx"
                              style={{ display: 'none' }}
                              onChange={async (e) => {
                                await uploadExcel(e.target.files[0]);
                                e.target.value = null;
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-right p-0">
                      {/* Hamburger */}
                      <a
                        className={
                          hamburgerDropdown
                            ? 'tri_top_visible'
                            : 'tri_top_hidden'
                        }
                        id="score-hamburger"
                        ref={refHamburger}
                        onClick={() => setHamburgerDropdown(!hamburgerDropdown)}
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
                                  onClick={() =>
                                    props.history.push(
                                      `/eventProfileDuplicate/${parseInt(
                                        props.match.params.id
                                      )}`
                                    )
                                  }
                                >
                                  Duplicate
                                </li>
                                <li
                                  onClick={() =>
                                    props.history.push(
                                      `/eventProfileEdit/${parseInt(
                                        props.match.params.id
                                      )}`
                                    )
                                  }
                                >
                                  Edit Event
                                </li>
                                <li
                                  onClick={async () => {
                                    // await getTournamentById(eventId);
                                    // await getDivisions(eventId);
                                    await props.history.push(
                                      `/TemplateDivisionSavedMain/${parseInt(
                                        props.match.params.id
                                      )}`
                                    );
                                    // await props.history.push('/templateEdit')
                                    // await props.history.push('/templateSaved')
                                  }}
                                >
                                  View Divisions
                                </li>
                                <li
                                  onClick={() =>
                                    setTournamentStatus2('Reg Open')
                                  }
                                >
                                  Go Live
                                </li>
                                <li
                                  onClick={() =>
                                    setTournamentStatus7('Postponed')
                                  }
                                >
                                  Postpone
                                </li>
                                <li
                                  onClick={() =>
                                    setTournamentStatus4('Reg Closed')
                                  }
                                >
                                  Close registration
                                </li>
                                <li
                                  style={{ color: '#ff2072' }}
                                  onClick={onOpenModal}
                                >
                                  Delete
                                </li>
                              </ul>
                            </span>
                          )}
                        </div>
                      </a>
                    </div>

                    <div className="col-4 p-0 text-left">
                      <img
                        onError={(e) => (e.target.src = defaultIcon3)}
                        src={
                          getTournamentData !== null &&
                          getTournamentData.tournament.tournament_pic !== ''
                            ? `${process.env.REACT_APP_BASE_URL}${getTournamentData.tournament.tournament_pic}`
                            : // : 'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg'
                              `${process.env.REACT_APP_BASE_URL}${photoAddIcon}`
                        }
                        alt=""
                        className="img-fluid"
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                          objectFit: 'cover',
                          // objectFit: 'contain',
                        }}
                      />
                    </div>

                    <div className="col-8 m-auto mr-0 p-0">
                      <div
                        className="saved-event-name text-left p-0"
                        style={{ borderBottom: '1px solid #979797' }}
                      >
                        {getTournamentData !== null &&
                          getTournamentData.tournament.name}
                      </div>
                      <div className="saved-event-date-and-time text-left p-0">
                        {/* THURSDAY | JUL 3RD-$th @ 9AM-10PM */}
                        {/* {getTournamentData !== null && getTournamentData.tournament.start_date + " -  " + getTournamentData.tournament.end_date + 
                      "  @ " + getTournamentData.tournament.start_time + " - " + getTournamentData.tournament.end_time} */}
                        {getTournamentData !== null &&
                          getTournamentData.tournament.topDateformate}
                      </div>
                    </div>
                  </div>
                </div>

                {/* status */}
                {status !== null && (
                  <div className="col-12 text-left p-0 saved-status">
                    {status === ''
                      ? getTournamentData !== null &&
                        getTournamentData.tournament.status === 4
                        ? 'Reg Closed'
                        : getTournamentData !== null &&
                          getTournamentData.tournament.status === 7
                        ? 'Postponed'
                        : getTournamentData !== null &&
                          getTournamentData.tournament.status === 1
                        ? 'Created'
                        : 'Reg Open'
                      : status}
                    {/* {getTournamentData!==null && getTournamentData.tournament.status===4?'Reg Closed':getTournamentData!==null && getTournamentData.tournament.status===7?'Postponed':'Reg Open'} */}
                    <span
                      onClick={() =>
                        console.log(status, getTournamentData.tournament.status)
                      }
                      className={`dot`}
                      style={{
                        backgroundColor:
                          (status === '' &&
                            getTournamentData !== null &&
                            getTournamentData.tournament.status === 2) ||
                          status === 'Reg Open'
                            ? '#7ed321'
                            : (status === '' &&
                                getTournamentData !== null &&
                                getTournamentData.tournament.status === 1) ||
                              status === 'Created'
                            ? '#20e2ff'
                            : status === 'Postponed'
                            ? '#ff00bf'
                            : '#ff6a20',
                      }}
                    ></span>
                  </div>
                )}

                {/* Subtitle*/}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Event Subtitle</div>

                  <div className="container">
                    <div
                      className="row shadow-box-saved-screen mt-0 "
                      style={{ height: 50 }}
                    >
                      <div
                        className="col-12 p-0 pr-1 pl-2 pb-1 textarea-style bg-white"
                        style={{ height: 50 }}
                      >
                        <textarea
                          value={
                            getTournamentData !== null
                              ? getTournamentData.tournament.sub_title !== null
                                ? getTournamentData.tournament.sub_title
                                : ''
                              : ''
                          }
                          className="form-control p-0 textarea-style bg-white"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          maxLength="250"
                          disabled={true}
                          style={{ height: 37, resize: 'none' }}
                        ></textarea>
                        <div className="text-right description-bottom">
                          {/* {getTournamentData.tournament.description.length}/530 */}
                          {getTournamentData !== null
                            ? getTournamentData.tournament !== null
                              ? getTournamentData.tournament.sub_title !== null
                                ? getTournamentData.tournament.sub_title.length
                                : ''
                              : ''
                            : ''}
                          /250
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* address area starts */}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-10 text-left address-title m-0 p-0">
                        Address
                      </div>
                      <div className="col-12 text-left p-0 ">
                        <div className="saved-address-data">
                          {getTournamentData !== null &&
                            getTournamentData.tournament.court.court_name}
                        </div>
                        <div className="saved-address-data">
                          {getTournamentData !== null &&
                            getTournamentData.tournament.court.street_address}
                        </div>
                        <div className="saved-address-data">
                          {getTournamentData !== null &&
                            getTournamentData.tournament.court.city}
                          ,{' '}
                          {/* {getTournamentData !== null, getTournamentData.tournament.court.state_code},{' '} */}
                          {getTournamentData !== null &&
                            getTournamentData.tournament.court.zip}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Division */}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Division</div>
                  {/* start */}
                  {getTournamentData !== null &&
                    getTournamentData.tournament.templateDtl !== null &&
                    getTournamentData.tournament.templateDtl.map((obj) => {
                      return obj.division.map((div) => {
                        return (
                          <>
                            <div className="container">
                              <div
                                className="row shadow-box mt-0"
                                style={{ overflow: 'hidden' }}
                              >
                                <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                  <img
                                    src={trophy}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-7 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 text-truncate pr-3">
                                  Division{' '}
                                  {obj.hasOwnProperty('templateName') &&
                                  obj.templateName === 'null'
                                    ? ''
                                    : obj.templateName}
                                </div>
                                <div
                                  className="col-4 p-0 text-right m-auto box-shadow-text text-truncate"
                                  id="division_overflow"
                                  style={{ display: 'inline' }}
                                >
                                  {div.div_name}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      });
                    })}

                  {getTournamentData !== null &&
                    getTournamentData.tournament.templateDtl === null &&
                    getTournamentData.tournament.templateDtl.length > 0 &&
                    getTournamentData.tournament.templateDtl.map((obj) => {
                      return (
                        <>
                          <div className="container">
                            <div
                              className="row shadow-box mt-0"
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                <img
                                  src={trophy}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                Division
                              </div>
                              <div
                                className="col-6 p-0 text-right m-auto box-shadow-text text-truncate"
                                id="division_overflow"
                                style={{ display: 'inline' }}
                              ></div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>

                {/* Registration */}
                <div className="col-12 p-0 " style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Registration</div>
                  <div className="shadow-box-saved-screen">
                    {/* Registration Cap */}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={addNewIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Registration Cap
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData !== null &&
                            getTournamentData.tournament.registration_cap}
                        </div>
                      </div>
                    </div>
                    {/* Team Size */}
                    {/* <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Team Size
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.team_size}
                        </div>
                      </div>
                    </div> */}
                    {/* Closes On */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={calenderIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Closes On
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            moment(
                              getTournamentData.tournament.closes_on
                            ).format('MM/DD/YYYY')}
                        </div>
                      </div>
                    </div>
                    {/* Ends At */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={durationIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Ends At
                        </div>
                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.ends_at}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Details</div>
                  <div className="shadow-box-saved-screen">
                    {/* Pools*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={poolsIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Pools
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {/* {getTournamentData && getTournamentData.pool} */}
                          {getTournamentData !== null &&
                            getTournamentData.tournament.pool.name}
                        </div>
                      </div>
                    </div>
                    {/* Season */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={seasonsIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Season
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.season &&
                            getTournamentData.tournament.season.name}
                        </div>
                      </div>
                    </div>
                    {/* Placement Points */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={pointsIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Placement Points
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData !== null &&
                            getTournamentData.tournament.point.name}
                        </div>
                      </div>
                    </div>
                    {/* Seeding Method */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={playTypeIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Seeding Method
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.seeding_method.name}
                        </div>
                      </div>
                    </div>
                    {/* Surface Type */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={surfaceIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Surface Type
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.surface_type}
                        </div>
                      </div>
                    </div>

                    {/* Host Clinic */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={lightBulbIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Host Clinic
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData &&
                            getTournamentData.tournament.host_clinic}
                        </div>
                      </div>
                    </div>

                    {/* Show Entries */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={binocularsIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Show Entries
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData &&
                            getTournamentData.tournament.show_entries}
                        </div>
                      </div>
                    </div>

                    {/* team Listing */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={surfaceIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Team Listing
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData &&
                          getTournamentData.tournament.team_listing === 1
                            ? 'By Ranking Points'
                            : 'By Registration Date'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Contact</div>

                  <div className="shadow-box-saved-screen">
                    {/*Director*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={megaPhoneIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Director
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            `${getTournamentData.tournament.director.first_name} ${getTournamentData.tournament.director.last_name}`}
                        </div>
                      </div>
                    </div>
                    {/* Main Contact */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={talkIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Main Contact
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            `${getTournamentData.tournament.main_contact.first_name} ${getTournamentData.tournament.main_contact.last_name}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Finance */}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Finance</div>

                  <div className="shadow-box-saved-screen">
                    {/*Online Pay*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={emailIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Online Pay
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData &&
                            getTournamentData.tournament.online_pay}
                        </div>
                      </div>
                    </div>
                    {/* Purse Amount */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={purseIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Purse Amount
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          $
                          {getTournamentData &&
                            getTournamentData.tournament.purse_amount}
                        </div>
                      </div>
                    </div>
                    {/* Purse Amount Percent */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={purseIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Purse Amount Percent
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.purse_percent}
                          %
                        </div>
                      </div>
                    </div>
                    {/*Donation Text*/}
                    <div className="container">
                      <div
                        className="row mt-0 box-saved-screen"
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={emailIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Donation Text
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData &&
                          getTournamentData.tournament.donation_text !== null
                            ? getTournamentData.tournament.donation_text
                            : 'Not Selected'}
                        </div>
                      </div>
                    </div>
                    {/*Donation 1*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={purseIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Donation 1
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {/* {getTournamentData &&
                          getTournamentData.tournament.donation_amounts !==
                            null &&
                          getTournamentData.tournament.donation_amounts.split(
                            ','
                          )[0] === 'null'
                            ? 0
                            : getTournamentData.tournament.donation_amounts.split(
                                ','
                              )[0]} */}
                          {getTournamentData !== null &&
                          getTournamentData.tournament.donation_amounts !== null
                            ? getTournamentData.tournament.donation_amounts.split(
                                ','
                              )[0] === 'null'
                              ? ''
                              : getTournamentData.tournament.donation_amounts.split(
                                  ','
                                )[0]
                            : ''}
                        </div>
                      </div>
                    </div>
                    {/*Donation 2*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={purseIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Donation 2
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {/* {getTournamentData &&
                          getTournamentData.tournament.donation_amounts !==
                            null &&
                          getTournamentData.tournament.donation_amounts.split(
                            ','
                          )[1] === 'null'
                            ? 0
                            : getTournamentData.tournament.donation_amounts.split(
                                ','
                              )[1]} */}
                          {getTournamentData !== null &&
                          getTournamentData.tournament.donation_amounts !== null
                            ? getTournamentData.tournament.donation_amounts.split(
                                ','
                              )[1] === 'null'
                              ? ''
                              : getTournamentData.tournament.donation_amounts.split(
                                  ','
                                )[1]
                            : ''}
                        </div>
                      </div>
                    </div>
                    {/*Donation 3*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={purseIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Donation 3
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {/* {getTournamentData &&
                          getTournamentData.tournament.donation_amounts !==
                            null &&
                          getTournamentData.tournament.donation_amounts.split(
                            ','
                          )[2] === 'null'
                            ? 0
                            : getTournamentData.tournament.donation_amounts.split(
                                ','
                              )[2]} */}
                          {getTournamentData !== null &&
                          getTournamentData.tournament.donation_amounts !== null
                            ? getTournamentData.tournament.donation_amounts.split(
                                ','
                              )[2] === 'null'
                              ? ''
                              : getTournamentData.tournament.donation_amounts.split(
                                  ','
                                )[2]
                            : ''}
                        </div>
                      </div>
                    </div>
                    {/*Minimum Membership Requirement*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={emailIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Minimum Membership Requirement
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 ">
                          {getTournamentData &&
                            getTournamentData.tournament.membership}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents*/}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Documents</div>

                  <div className="shadow-box-saved-screen">
                    {/*Signature Agreement*/}
                    <div className="container">
                      <div className="row mt-0 box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1 ">
                          <img src={pencilIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Signature Agreement
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
                          {getTournamentData &&
                            getTournamentData.tournament.signature}
                        </div>
                      </div>
                    </div>
                    {/* Score Sheet */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={positionIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Score Sheet
                        </div>

                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {getTournamentData &&
                            getTournamentData.tournament.scoresheet.name}
                        </div>
                      </div>
                    </div>
                    {/* PDF Instructions */}
                    <div className="container">
                      <div className="row box-saved-screen">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img
                            src={documentIcon}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          PDF Instructions
                        </div>
                        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                          {/* {getTournamentData !== null &&
                          getTournamentData.tournament_doc} */}
                          {pdfShortForm}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description*/}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Description</div>

                  <div className="container">
                    <div
                      className="row shadow-box-saved-screen mt-0 "
                      style={{ height: 300 }}
                    >
                      <div className="col-12 p-0 pr-1 pl-2 pb-1 textarea-style bg-white">
                        <div
                          style={{
                            height: 300,
                            overflow: 'scroll',
                            outline: 'none',
                          }}

                          id="savedDescription"
                        >
                        {textToHTML(getTournamentData !== null
                              ? getTournamentData.tournament.description
                              : '')}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color Palette*/}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Color Palette</div>
                  <div className="container">
                    <div className="row shadow-box mt-0 align-items-center">
                      <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                        <img src={documentIcon} alt="" className="img-fluid" />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                        Choose Color
                      </div>
                      <div className="col-7">
                        <div className="row p-0 m-0">
                          <div className="col p-0 m-0">
                            <div class="color-box white"></div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              checked={
                                getTournamentData &&
                                getTournamentData.tournament.color === '#ffffff'
                              }
                            />
                          </div>
                          <div className="col p-0 m-0">
                            <div class="color-box blue"></div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              checked={
                                getTournamentData &&
                                getTournamentData.tournament.color === '#0a0080'
                              }
                            />
                          </div>
                          <div className="col p-0 m-0">
                            <div class="color-box yellow"></div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              checked={
                                getTournamentData &&
                                getTournamentData.tournament.color === '#fdff00'
                              }
                            />
                          </div>
                          <div className="col p-0 m-0">
                            <div class="color-box black"></div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              checked={
                                getTournamentData &&
                                getTournamentData.tournament.color === '#000000'
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div className="text-left address-title">Image</div>
                  {/* start */}
                  <div className="container">
                    <div className="row shadow-box-saved-screen box-saved-screen">
                      <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                        <img src={imageIcon} alt="" className="img-fluid" />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                        Event Photo Corner
                      </div>

                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {/* {getTournamentData !== null &&
                        getTournamentData.cover_photo} */}
                        {eventPhotoShortForm}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
          closeIcon: {
            outline: 0,
          },
        }}
      >
        {deleteModal ? (
          <div className="profile_successfully_deleted">
            Event Successfully Deleted
          </div>
        ) : (
          <>
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
              Are you sure you want to
              <span className="modal-delete-text"> delete</span>?
            </div>
            <p
              className="text-center"
              style={{
                width: 398,
                fontSize: 10,
                marginTop: 8,
                fontFamily: 'Futura',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: 'normal',
                color: '#9b9b9b',
              }}
            >
              This event will be permanently deleted!
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
                  }}
                >
                  NO, CONTINUE
                </button>
                <button
                  className="btn-sm pb-1 ml-3"
                  id="yellow-button-hover"
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffd420',
                    outline: 0,
                  }}
                  onClick={onDelete}
                >
                  YES, DELETE
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default EventProfileSaved;
