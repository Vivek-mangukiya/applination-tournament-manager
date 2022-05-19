import React, {
  useState,
  useEffect,
  useContext,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useMemo,
} from 'react';
import DropdownModals from './DropdownModals';
// import './TemplateDivision.css';
import '../assets/styles/TemplateDivisionSaved.css';
import clearIcon from '../assets/images/icons-x-input.svg';
import divisionImage from '../assets/images/division.svg';
import downArrow from '../assets/images/icon-menu-chevron-down.svg';
import calenderIcon from '../assets/images/icon-orange-calender.svg';
import calenderIconRight from '../assets/images/icon-menu-calendar.svg';
import addNewIcon from '../assets/images/icon-orange-players-plus.svg';
import walletIcon from '../assets/images/wallet.svg';
import playersIcon from '../assets/images/icon-orange-players.svg';
import birdIcon from '../assets/images/bird.svg';
import pointsIcon from '../assets/images/icon-orange-points.svg';
import emailIcon from '../assets/images/icon-orange-email.svg';
import purseIcon from '../assets/images/icon-orange-purse.svg';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import EventContext from '../context/event/eventContext';
import poolsIcon from '../assets/images/icon-orange-pools.svg';
import { DatePicker } from 'antd';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import RegEventDropDown from '../components/RegEventDropDown';
import DropDown from '../components/DropdownComponent';
import ShadowContainer from '../screens/new_event/ShadowContainer';
import moment from 'moment';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import playTypeIcon from '../assets/images/icon-orange-playtype.svg';
import durationIcon from '../assets/images/icon-orange-duration.svg';
import { Collapse } from 'antd';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NumberFormat from 'react-number-format';

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
const { Panel } = Collapse;

const TemplateDivision = (props) => {
  console.log(props)
  const eventContext = useContext(EventContext);
  const {
    eventInfo,
    //event id
    eventId,
    //get tournament by id
    getTournamentById,

    //get tournament data
    getTournamentData,
    divisionData,
    editDivisions,
    changedDivisionData,
    dropDownFun,
    eventDropdownData,
    getDivisions,
    editDivisionError,
    teamSizeMapDiv,
  } = eventContext;

  const [save, setSave] = useState(false);

  let divisions = [];
  let templates = [];
  let divisionWithTeamSizeErr = null;
  let errorsIndividual = [];
  let divisionsIndividual = [];

  if (divisionData.template !== null) {
    for (let i = 0; i < divisionData.template.length; i++) {
      templates.push(divisionData.template[i]);
      divisionsIndividual.push([]);

      for (let j = 0; j < divisionData.template[i].division.length; j++) {
        divisions.push(divisionData.template[i].division[j]);
        errorsIndividual.push({
          id: divisionData.template[i].division[j].id,
          errVal: null,
        });
        divisionsIndividual[i].push(divisionData.template[i].division[j]);
      }
    }
  }

  const childRef = useRef();

  // const convertArrayToObject = (array, key) => {
  //   const initialValue = {};
  //   return array.reduce((obj, item) => {
  //     return {
  //       ...obj,
  //       [item[key]]: {"pool_template_id":item.pool_template_id,"early_bird":item.early_bird,"early_bird_amount":item.early_bird_amount
  //                     ,"early_bird_date":item.early_bird_date,"late_amount":item.late_amount,"online_pay":item.online_pay,"point_template_id":item.point_template_id,
  //                   "purse_amount":item.purse_amount,"registration_amount":item.registration_amount,"registration_cap":item.registration_cap,
  //                   "team_size":item.team_size,"match_time":item.match_time,"sets":item.sets,"max_point_per_set":item.max_point_per_set,
  //                   "no_of_playoff":item.no_of_playoff,"playoff_team1":item.playoff_team1,"playoff_team2":item.playoff_team2,
  //                   "playoff_team3":item.playoff_team3,"playoff_team4":item.playoff_team4},
  //     };
  //   }, initialValue);
  // };

  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    var divsMainArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        divsMainArray.push(array[i][j]);
      }
    }
    console.log(divsMainArray, array);
    return divsMainArray.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: {
          discount_voucher:
            item.discount_voucher === 'discount' || item.discount_voucher === 1
              ? 1
              : item.discount_voucher === 'voucher' || item.discount_voucher === 2
              ? 2
              : null,
          discount_applied:
            item.discount_applied === 'discount per team'
              ? 1
              : item.discount_applied === 'discount per player'
              ? 2
              : null,
          discount_text: item.discount_text === '' ? null : item.discount_text,
          discount_amount: item.discount_amount,
          pool_template_id: item.pool_template_id,
          early_bird: item.early_bird,
          early_bird_amount: item.early_bird_amount,
          early_bird_date:
            moment(item.early_bird_date).format('YYYY-MM-DD') === 'Invalid date'
              ? null
              : moment(item.early_bird_date).format('YYYY-MM-DD'),
          late_amount: item.late_amount,
          online_pay: item.online_pay,
          point_template_id: item.point_template_id,
          purse_amount: item.purse_amount,
          purse_percent:item.purse_percent,
          registration_amount: item.registration_amount,
          registration_cap: item.registration_cap,
          team_size: item.team_size,
          match_time: item.match_time,
          sets: item.sets,
          max_point_per_set: item.max_point_per_set,
          no_of_playoff: item.no_of_playoff,
          playoff_team1: item.playoff_team1,
          playoff_team2: item.playoff_team2,
          playoff_team3: item.playoff_team3,
          playoff_team4: item.playoff_team4,
        },
      };
    }, initialValue);

    // return array.map(arr=>{
    //   return arr.reduce((obj, item) => {
    //     return {
    //       ...obj,
    //       [item[key]]: {"pool_template_id":item.pool_template_id,"early_bird":item.early_bird,"early_bird_amount":item.early_bird_amount
    //                     ,"early_bird_date":moment(item.early_bird_date).format('YYYY-MM-DD'),"late_amount":item.late_amount,"online_pay":item.online_pay,"point_template_id":item.point_template_id,
    //                   "purse_amount":item.purse_amount,"registration_amount":item.registration_amount,"registration_cap":item.registration_cap,
    //                   "team_size":item.team_size,"match_time":item.match_time,"sets":item.sets,"max_point_per_set":item.max_point_per_set,
    //                   "no_of_playoff":item.no_of_playoff,"playoff_team1":item.playoff_team1,"playoff_team2":item.playoff_team2,
    //                   "playoff_team3":item.playoff_team3,"playoff_team4":item.playoff_team4},
    //     };
    //   }, initialValue);
    // })
  };

  const [saveLoading, setSaveLoading] = useState(false);

  const onSaveParent = async () => {
    console.log('SAVE CLICKED');

    var divsMainArray2 = [];
    for (let i = 0; i < auuu.length; i++) {
      for (let j = 0; j < auuu[i].length; j++) {
        divsMainArray2.push(auuu[i][j]);
      }
    }

    divisionWithTeamSizeErr = divsMainArray2.filter((div) => {
      let tp1 =
        div.playoff_team1 === null || div.playoff_team1 === ''
          ? 0
          : div.playoff_team1;
      let tp2 =
        div.playoff_team2 === null || div.playoff_team2 === ''
          ? 0
          : div.playoff_team2;
      let tp3 =
        div.playoff_team3 === null || div.playoff_team3 === ''
          ? 0
          : div.playoff_team3;
      let tp4 =
        div.playoff_team4 === null || div.playoff_team4 === ''
          ? 0
          : div.playoff_team4;

      return (
        parseInt(div.team_size) !==
        parseInt(tp1) + parseInt(tp2) + parseInt(tp3) + parseInt(tp4)
      );
    });

    if (divisionWithTeamSizeErr.length > 0) {
      console.log('divisionWithTeamSizeErr:', divisionWithTeamSizeErr);

      scroller.scrollTo(`div_${divisionWithTeamSizeErr[0].id}`, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });

      oneNullErr.map((err) => {
        if (err.id === parseInt(divisionWithTeamSizeErr[0].id)) {
          console.log('INNNNNNNN');
          updateItem(
            divisionWithTeamSizeErr[0].id,
            'errVal',
            'TeamSize should be equal to sum of all playoff team sizes',
            oneNullErr
          );
        }
      });
    } else {
      setSaveLoading(true);
      console.log('OUTTT');
      await editDivisions(
        JSON.stringify(convertArrayToObject(auuu, 'id')),
        props.history,
        parseInt(props.match.params.id)
      );
    }
  };
  useEffect(() => {
    console.log('ChangedDIvisionData', changedDivisionData);
  }, [changedDivisionData]);

  useEffect(() => {
    console.log('Event id by url:', parseInt(props.match.params.id));
    getDivisions(parseInt(props.match.params.id));
    getTournamentById(parseInt(props.match.params.id));
    dropDownFun();
  }, []);

  useEffect(() => {
    if (divisionData !== null) console.log('divisionData', divisionData);
  }, [divisionData]);

  const blankCat = { name: '', age: '' };
  const [catState, setCatState] = useState([{ ...blankCat }]);

  const addCat = () => {
    setCatState([...catState, { ...blankCat }]);
  };

  const [dogState, setDogState] = useState();

  var dogInitialState = [];
  var templateInitialState = [];

  // for(let i=0; i<divisions.length; i++){

  //   dogInitialState[i] = {
  //           // template_name:'',
  //           id:divisions[i].id,
  //           pool_template_id:divisions[i].pool_template_id,
  //           pool_name:divisions[i].pool_name,
  //           point_template_id:divisions[i].pool_template_id,
  //           point_temp_name:divisions[i].point_temp_name,
  //           registration_cap:divisions[i].registration_cap,
  //           team_size:divisions[i].team_size,
  //           online_pay:divisions[i].online_pay,
  //           purse_amount:divisions[i].purse_amount,
  //           early_bird:divisions[i].early_bird,
  //           early_bird_date:divisions[i].early_bird_date!==null? moment(divisions[i].early_bird_date).format('YYYY-MM-DD'):null,
  //           early_bird_amount:divisions[i].early_bird_amount,
  //           registration_amount:divisions[i].registration_amount,
  //           late_amount:divisions[i].late_amount,
  //           sets:divisions[i].sets,
  //           match_time:divisions[i].match_time,
  //           no_of_playoff:divisions[i].no_of_playoff,
  //           max_point_per_set:divisions[i].max_point_per_set,
  //           playoff_team1:divisions[i].playoff_team1,
  //           playoff_team2:divisions[i].playoff_team2,
  //           playoff_team3:divisions[i].playoff_team3,
  //           playoff_team4:divisions[i].playoff_team4
  //         };
  // }

  // for(let i=0;i<divisionsIndividual.length;i++){
  //   for(let j=0;j<divisionsIndividual[i].length;j++){
  //     dogInitialState[i][j]={
  //       id:divisions[i][j] && divisions[i][j].id,
  //       pool_template_id:divisions[i][j] && divisions[i][j].pool_template_id,
  //       pool_name:divisions[i][j] && divisions[i][j].pool_name,
  //       point_template_id : divisions[i][j] && divisions[i][j].pool_template_id,
  //       point_temp_name : divisions[i][j] && divisions[i][j].point_temp_name,
  //       registration_cap : divisions[i][j] && divisions[i][j].registration_cap,
  //       team_size : divisions[i][j] && divisions[i][j].team_size,
  //       online_pay : divisions[i][j] && divisions[i][j].online_pay,
  //       purse_amount : divisions[i][j] && divisions[i][j].purse_amount,
  //       early_bird : divisions[i][j] && divisions[i][j].early_bird,
  //       early_bird_date : divisions[i][j] && divisions[i][j].early_bird_date!==null? moment(divisions[i].early_bird_date).format('YYYY-MM-DD'):null,
  //       early_bird_amount : divisions[i][j] && divisions[i][j].early_bird_amount,
  //       registration_amount : divisions[i][j] && divisions[i][j].registration_amount,
  //       late_amount : divisions[i][j] && divisions[i][j].late_amount,
  //       sets : divisions[i][j] && divisions[i][j].sets,
  //       match_time : divisions[i][j] && divisions[i][j].match_time,
  //       no_of_playoff : divisions[i][j] && divisions[i][j].no_of_playoff,
  //       max_point_per_set : divisions[i][j] && divisions[i][j].max_point_per_set,
  //       playoff_team1 : divisions[i][j] && divisions[i][j].playoff_team1,
  //       playoff_team2 : divisions[i][j] && divisions[i][j].playoff_team2,
  //       playoff_team3 : divisions[i][j] && divisions[i][j].playoff_team3,
  //       playoff_team4 : divisions[i][j] && divisions[i][j].playoff_team4
  //     }
  //   }
  // }

  for (let i = 0; i < templates.length; i++) {
    templateInitialState[i] = {
      template_name: templates[i].template_name,
    };
  }

  const dogInitialState2 = dogInitialState;

  // const [auuu, setAuuu] = useState(dogInitialState?dogInitialState:"BOO");
  const [auuu, setAuuu] = useState(
    divisionsIndividual ? divisionsIndividual : 'BOO'
  );
  const [templateNames, setTemplateNames] = useState(
    templateInitialState ? templateInitialState : 'WOOF'
  );
  const [oneNullErr, setOneNullErr] = useState(errorsIndividual);

  console.log('Divisions:', divisions);
  console.log('auuu', auuu);

  useEffect(() => {
    console.log('team size test!');
    var divsMainArray3 = [];
    for (let i = 0; i < auuu.length; i++) {
      for (let j = 0; j < auuu[i].length; j++) {
        divsMainArray3.push(auuu[i][j]);
      }
    }
    divsMainArray3.forEach((div, idx) => {
      if (div.no_of_playoff === 1) {
        div.playoff_team1 = div.team_size;
        div.playoff_team2 = null;
        div.playoff_team3 = null;
        div.playoff_team4 = null;
      }
      if (div.no_of_playoff === 2) {
        div.playoff_team3 = null;
        div.playoff_team4 = null;
      }
      if (div.no_of_playoff === 3) {
        div.playoff_team4 = null;
      }
    });
  });

  useEffect(() => {
    auuu.forEach((div) => {
      if (div.early_bird === 'No' || div.early_bird === 'no') {
        div.early_bird_date = null;
        div.early_bird_amount = null;
      }
    });
  });

  const handleCatChange = (e) => {
    console.log('e:', e);
    const updatedCats = [...auuu];
    updatedCats[e.target.dataset.idd][e.target.dataset.idx][
      e.target.className
    ] = e.target.value === '' ? null : e.target.value;
    console.log(updatedCats);
    setCatState(updatedCats);
  };

  const handleDropdownChange = (idx, className, val, id) => {
    let updatedCats = [...auuu];
    updatedCats[id][idx][className] = val === '' ? null : val;
    // updatedCats[idx][className] = val;
    // setAuuu(updatedCats)
    setCatState(updatedCats);
  };

  const handleCross = (idx, className, val) => {
    console.log('Inside handleCross!');
    auuu.forEach((div) => {
      if (parseInt(div.id) === parseInt(idx)) {
        div[className] = null;
        console.log(div[className]);
      }
    });
  };

  const handleDateChange = (idx, className, e, id) => {
    console.log('idx:', idx);
    console.log('classname:', className);
    console.log('e:', moment(e).format('YYYY-MM-DD'));
    const updatedCats = [...auuu];
    updatedCats[id][idx][className] = moment(e).format('YYYY-MM-DD');
    setCatState(updatedCats);
  };

  const [poolsChoice, setPoolsChoice] = useState('');
  const [pool_id, setPool_id] = useState('');

  const [firstModal, setFirstModal] = useState('');
  const [pointsDropdown, setPointsDropdown] = useState(false);
  const [placementPointsChoice, setPlacementPointsChoice] = useState('');
  const refPoints = useRef();
  useOnClickOutside(refPoints, () => setPointsDropdown(false));

  const [poolsDropdown, setPoolsDropdown] = useState(false);
  const refPools = useRef();
  useOnClickOutside(refPools, () => setPoolsDropdown(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
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
    }, [ref, handler]);
  }

  // const division_id=props.division.id;
  let noOfPlayoffs = 4;
  const updateItem = (id, whichvalue, newvalue, array) => {
    let index = array.findIndex((x) => x.id === parseInt(id));
    if (index !== -1) {
      let temporaryarray = array.slice();
      temporaryarray[index].errVal = newvalue;
      setOneNullErr(temporaryarray);
      console.log('temporaryArray:', temporaryarray);
    } else {
      console.log('no match');
    }
  };

  function disabledStartDate(current) {
    return current < moment().startOf('day');
  }

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [location, setLocation] = useState(props.location.state===null?{}: {"activeKey":props.location.state})

  return (
    <>
      <div className="m-0" style={{ paddingBottom: 90 }}>
        <Header />
      </div>
      <div className="new-event-profile container p-0 main_height">
        {templates.map((template, id) => {
          const tnId = `tn-${id}`;
          return (
            <>
              <div className="row" style={{ paddingBottom: 90 }}>
                <div className="col-7 m-auto text-center">
                  <div className="row">
                    <div className="col-12">
                      {/* image and event name */}
                      {/* <div className="row">
                        <div className="col-4 p-0 text-left">
                          <img
                            src={divisionImage}
                            alt=""
                            className="img-fluid"
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: 50,
                            }}
                          />
                        </div>
                        <div
                          className="col-8 m-auto p-0"
                          style={{ borderBottom: '1px solid #979797' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'row' }} className="row">
                            <div className="col-10 template_name event-input text-left">
                              <input
                                type="text"
                                placeholder="Event Name"
                                className="template_name form-control event-input"
                                style={{ width: 250, cursor:'none' }}
                                name={tnId}
                                data-idx={id}
                                id={tnId}
                                value={templateNames[id].template_name}
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    {template.division.map((div, idx) => {
                      const poId = `po-${idx}`;
                      const ppId = `pp-${idx}`;
                      const rcId = `rc-${idx}`;
                      const tsId = `ts-${idx}`;
                      const opId = `op-${idx}`;
                      const paId = `pa-${idx}`;
                      const ebId = `eb-${idx}`;
                      const ebdId = `ebd-${idx}`;
                      const ebaId = `eba-${idx}`;
                      const raId = `ra-${idx}`;
                      const laId = `la-${idx}`;

                      return (
                        <>
                          {/* {console.log(div.id)} */}
                          {divisionWithTeamSizeErr !== null &&
                            console.log(divisionWithTeamSizeErr[0].id)}
                          <div className="col-12 p-0" style={{ marginTop: 24 }}>
                            <Element name={`div_${div.id}`}>
                              <div className="one_null_error">
                                {oneNullErr.find((err) => err.id === div.id) &&
                                  oneNullErr.find((err) => err.id === div.id)
                                    .errVal}
                              </div>
                            </Element>
                            {/* {(divisionWithTeamSizeErr && parseInt(divisionWithTeamSizeErr[0].id)===parseInt(div.id))?(<div className="one_null_error">Team Size must be equal to sum of playoff teams sizes</div>):""} */}
                            <Collapse
                            {...location}
                             
                              expandIconPosition="right"
                              bordered={true}
                              ghost
                              className="p-0"
                              expandIcon={({ isActive }) => (
                               
                                <span
                                  className={
                                    isActive
                                      ? 'reg-rotate mt-3'
                                      : 'reg-no-rotate mt-2'
                                  }
                                >
                                 {console.log(isActive,idx)}
                                  <img src={menuchevrondownicon} alt="" />
                                </span>
                              )
                              }
                              // className=" reg-padding"
                            >
                              <Panel
                               key={div.id}
                                className="px-0 pb-0"
                                header={
                                  <div className="row">
                                    <div className="col-sm-2 my-auto m-0 p-0 fluid_font">
                                      {div.div_name}
                                    </div>
                                    <div className="col-sm-10">
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
                                <div>
                                  {/*Details */}
                                  <div
                                    className="col-12 p-0"
                                    style={{ marginTop: 24 }}
                                  >
                                    <div className="text-left address-title">
                                      Details
                                    </div>
                                    {/* Pools */}
                                    <div className="container">
                                      <div
                                        className="row shadow-box"
                                        id="division_box"
                                      >
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={poolsIcon}
                                            alt=""
                                            className="img-fluid mb-1 mt-2"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Pools
                                        </div>

                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          {auuu[id][idx].pool_name}
                                        </div>

                                        <div className="col-1 p-0 pr-1 justify-content-center align-items-center m-auto">
                                          <DropdownModals>
                                            {/* <ul> */}
                                            {eventDropdownData !== null &&
                                              eventDropdownData.pools.map(
                                                (data) => (
                                                  <li
                                                    className="ellipse_css"
                                                    onClick={() => {
                                                      // setPoolsChoice(data.name);
                                                      // setPool_id(data.id);
                                                      handleDropdownChange(
                                                        idx,
                                                        'pool_template_id',
                                                        data.id,
                                                        id
                                                      );
                                                      handleDropdownChange(
                                                        idx,
                                                        'pool_name',
                                                        data.name,
                                                        id
                                                      );
                                                    }}
                                                    key={data.id}
                                                  >
                                                    {data.name}
                                                  </li>
                                                )
                                              )}
                                            {/* </ul> */}
                                          </DropdownModals>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Ranking Points */}
                                    <div className="container">
                                      <div
                                        className="row shadow-box"
                                        id="division_box"
                                      >
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={pointsIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Ranking Points
                                        </div>

                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          {auuu[id][idx].point_temp_name}
                                        </div>
                                        <div className="col-1 p-0 pr-1 justify-content-center align-items-center m-auto">
                                          <DropdownModals>
                                            {eventDropdownData !== null &&
                                              eventDropdownData.points.map(
                                                (data) => (
                                                  <li
                                                    className="ellipse_css"
                                                    onClick={
                                                      () => {
                                                        handleDropdownChange(
                                                          idx,
                                                          'point_template_id',
                                                          data.id,
                                                          id
                                                        );
                                                        handleDropdownChange(
                                                          idx,
                                                          'point_temp_name',
                                                          data.name,
                                                          id
                                                        );
                                                      }
                                                      // setPlacementPoints(data.name)
                                                    }
                                                    key={data.id}
                                                  >
                                                    {data.name}
                                                  </li>
                                                )
                                              )}
                                          </DropdownModals>

                                          {/* </RegEventDropDown> */}
                                        </div>
                                      </div>
                                    </div>
                                    {/* Registration Cap */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={addNewIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Registration Cap
                                        </div>
                                        <div
                                          className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto"
                                          id="division_value"
                                        >
                                          {auuu[id][idx].registration_cap}
                                        </div>
                                        <div className="col-1 p-0 pr-1 justify-content-center align-items-center m-auto">
                                          <DropdownModals>
                                            <li
                                              onClick={() => {
                                                handleDropdownChange(
                                                  idx,
                                                  'registration_cap',
                                                  'Yes',
                                                  id
                                                );
                                              }}
                                            >
                                              Yes
                                            </li>
                                            <li
                                              onClick={() => {
                                                handleDropdownChange(
                                                  idx,
                                                  'registration_cap',
                                                  'No',
                                                  id
                                                );
                                              }}
                                            >
                                              No
                                            </li>
                                          </DropdownModals>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Team Size */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={playersIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                        Maximum Number of Teams Allowed
                                        </div>
                                        <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          {auuu[id][idx].team_size}
                                        </div>
                                        <div className="col-1 p-0 pr-1 justify-content-center align-items-center m-auto">
                                          <DropdownModals>
                                            {teamSizeMapDiv !== null &&
                                              teamSizeMapDiv.map((data) => (
                                                <li
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'team_size',
                                                      data.toString(),
                                                      id
                                                    )
                                                  }
                                                  key={data}
                                                >
                                                  {data}
                                                </li>
                                              ))}
                                          </DropdownModals>
                                          {/* <DropdownModals>
                                              <li
                                               onClick={()=>{
                                                handleDropdownChange(idx,"team_size","4",id);
                                                }}>4
                                                </li>
                                              <li 
                                              onClick={()=>{
                                                handleDropdownChange(idx,"team_size","8",id);
                                              }}>8
                                              </li>
                                              <li 
                                              onClick={()=>{
                                                handleDropdownChange(idx,"team_size","12",id);
                                                }}>12
                                                </li>
                                              <li 
                                              onClick={()=>{
                                                handleDropdownChange(idx,"team_size","16",id);
                                              }}
                                              >16</li>
                                              <li onClick={()=>{
                                                handleDropdownChange(idx,"team_size","20",id);
                                              }}>20</li>
                                              <li onClick={()=>{
                                                handleDropdownChange(idx,"team_size","24",id);
                                              }}>24</li>
                                              <li onClick={()=>{
                                                handleDropdownChange(idx,"team_size","28",id);
                                              }}>28</li>
                                              <li onClick={()=>{
                                                handleDropdownChange(idx,"team_size","32",id);
                                              }}>32</li>
                                              <li onClick={()=>{
                                                handleDropdownChange(idx,"team_size","36",id);
                                              }}>36</li>
                                              <li onClick={()=>{
                                                handleDropdownChange(idx,"team_size","40",id);
                                              }}>40</li>
                                          </DropdownModals> */}
                                        </div>
                                      </div>
                                    </div>
                                    {/* No of sets */}
                                    <ShadowContainer
                                      srcImg={playTypeIcon}
                                      text="Number of sets"
                                      // stateData={numberOfSets}
                                      stateData={auuu[id][idx].sets}
                                      mainClasses="row shadow-box"
                                    >
                                      <DropdownModals>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'sets',
                                              '1',
                                              id
                                            )
                                          }
                                        >
                                          1
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'sets',
                                              '2',
                                              id
                                            )
                                          }
                                        >
                                          2
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'sets',
                                              '3',
                                              id
                                            )
                                          }
                                        >
                                          3
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'sets',
                                              '4',
                                              id
                                            )
                                          }
                                        >
                                          4
                                        </li>
                                      </DropdownModals>
                                    </ShadowContainer>
                                    {/* Match time */}
                                    <ShadowContainer
                                      srcImg={durationIcon}
                                      text="Match Time"
                                      stateData={auuu[id][idx].match_time}
                                      mainClasses="row shadow-box"
                                    >
                                      <DropdownModals>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'match_time',
                                              50,
                                              id
                                            )
                                          }
                                        >
                                          50 minutes
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'match_time',
                                              60,
                                              id
                                            )
                                          }
                                        >
                                          60 minutes
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'match_time',
                                              70,
                                              id
                                            )
                                          }
                                        >
                                          70 minutes
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'match_time',
                                              80,
                                              id
                                            )
                                          }
                                        >
                                          80 minutes
                                        </li>
                                      </DropdownModals>
                                    </ShadowContainer>
                                    {/* Max points per set */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img
                                            src={pointsIcon}
                                            alt=""
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Max points per set
                                        </div>
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            data-idx={idx}
                                            data-idd={id}
                                            className="max_point_per_set"
                                            value={
                                              auuu[id][idx]
                                                .max_point_per_set === null
                                                ? ''
                                                : auuu[id][idx]
                                                    .max_point_per_set
                                            }
                                            min="1"
                                            style={{
                                              direction: 'rtl',
                                              height: 30,
                                              fontSize: 14,
                                            }}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={() =>
                                              handleDropdownChange(
                                                idx,
                                                'max_point_per_set',
                                                '',
                                                id
                                              )
                                            }
                                            alt=""
                                            style={{ cursor: 'pointer' }}
                                            className="img-fluid mb-1 mr-1"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Discount applied */}
                                    <ShadowContainer
                                      srcImg={durationIcon}
                                      text="Discount Type"
                                      stateData={
                                        auuu[id][idx].discount_applied === null
                                          ? 'Not Selected'
                                          : auuu[id][idx].discount_applied
                                      }
                                      mainClasses="row shadow-box"
                                    >
                                      <DropdownModals>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'discount_applied',
                                              'discount per team',
                                              id
                                            )
                                          }
                                        >
                                          discount per team
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'discount_applied',
                                              'discount per player',
                                              id
                                            )
                                          }
                                        >
                                          discount per player
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'discount_applied',
                                              'not selected',
                                              id
                                            )
                                          }
                                        >
                                          not selected
                                        </li>
                                      </DropdownModals>
                                    </ShadowContainer>

                                    {/* Discount */}
                                    <div
                                      className="container"
                                      onClick={() =>
                                        console.log(
                                          auuu[id][idx].discount_voucher
                                        )
                                      }
                                    >
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img
                                            src={pointsIcon}
                                            alt=""
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Discount
                                        </div>
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            data-idx={idx}
                                            data-idd={id}
                                            className="discount_amount"
                                            value={
                                              auuu[id][idx].discount_amount ===
                                              null
                                                ? ''
                                                : auuu[id][idx].discount_amount
                                            }
                                            min="1"
                                            style={{
                                              // direction: 'rtl',
                                              height: 30,
                                              fontSize: 14,
                                              border: 0,
                                              outline: 0,
                                              textAlign: 'right',
                                            }}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={() =>
                                              handleDropdownChange(
                                                idx,
                                                'discount_amount',
                                                '',
                                                id
                                              )
                                            }
                                            alt=""
                                            style={{ cursor: 'pointer' }}
                                            className="img-fluid mb-1 mr-1"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Discount applied */}
                                    <ShadowContainer
                                      srcImg={durationIcon}
                                      text="Discount or Voucher"
                                      stateData={
                                        auuu[id][idx].discount_voucher ===
                                        'not selected'
                                          ? 'Not Selected'
                                          : auuu[id][idx].discount_voucher ===
                                              'discount' ||
                                            auuu[id][idx].discount_voucher === 1
                                          ? 'Discount'
                                          : auuu[id][idx].discount_voucher ===
                                            null
                                          ? 'Not Selected'
                                          : 'Voucher'
                                      }
                                      mainClasses="row shadow-box"
                                    >
                                      <DropdownModals>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'discount_voucher',
                                              'discount',
                                              id
                                            )
                                          }
                                        >
                                          discount
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'discount_voucher',
                                              'voucher',
                                              id
                                            )
                                          }
                                        >
                                          voucher
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'discount_voucher',
                                              'not selected',
                                              id
                                            )
                                          }
                                        >
                                          not selected
                                        </li>
                                      </DropdownModals>
                                    </ShadowContainer>

                                    {/* Discount Description */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img
                                            src={pointsIcon}
                                            alt=""
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div className="col-3 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Discount or Voucher Description
                                        </div>
                                        <div className="col-8 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="text"
                                            data-idx={idx}
                                            data-idd={id}
                                            maxLength={255}
                                            className="discount_text"
                                            value={
                                              auuu[id][idx].discount_text ===
                                              null
                                                ? ''
                                                : auuu[id][idx].discount_text
                                            }
                                            min="1"
                                            style={{
                                              width: '100%',
                                              direction: 'rtl',
                                              height: 30,
                                              fontSize: 14,
                                              border: 0,
                                              outline: 0,
                                              paddingRight: 5,
                                            }}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Number of playoffs */}
                                    <ShadowContainer
                                      srcImg={playersIcon}
                                      text="Number of playoffs"
                                      stateData={auuu[id][idx].no_of_playoff}
                                      // stateData={4}
                                      mainClasses="row shadow-box"
                                    >
                                      <DropdownModals>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'no_of_playoff',
                                              1,
                                              id
                                            )
                                          }
                                        >
                                          1
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'no_of_playoff',
                                              2,
                                              id
                                            )
                                          }
                                        >
                                          2
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'no_of_playoff',
                                              3,
                                              id
                                            )
                                          }
                                        >
                                          3
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleDropdownChange(
                                              idx,
                                              'no_of_playoff',
                                              4,
                                              id
                                            )
                                          }
                                        >
                                          4
                                        </li>
                                      </DropdownModals>
                                    </ShadowContainer>
                                    {/* Teams in each playoff */}
                                    {auuu[id][idx].no_of_playoff !== null &&
                                      auuu[id][idx].no_of_playoff === 2 && (
                                        <>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 1
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team1
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team1"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team1',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 2
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team2
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team2"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team2',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    {auuu[id][idx].no_of_playoff !== null &&
                                      auuu[id][idx].no_of_playoff === 3 && (
                                        <>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 1
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team1
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team1"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team1',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 2
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team2
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team2"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team2',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 3
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team3
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team3"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team3',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    {auuu[id][idx].no_of_playoff !== null &&
                                      auuu[id][idx].no_of_playoff === 4 && (
                                        <>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 1
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team1
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team1"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team1',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 2
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team2
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team2"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team2',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 3
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team3
                                                  }
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team3"
                                                  min="1"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team3',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="container">
                                            <div className="row shadow-box">
                                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                                <img
                                                  src={playersIcon}
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                                Teams in playoff 4
                                              </div>
                                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                                <input
                                                  type="number"
                                                  // placeholder="No. of courts"
                                                  // className="form-control p-0 webkit_spinner_none"
                                                  value={
                                                    auuu[id][idx].playoff_team4
                                                  }
                                                  min="1"
                                                  data-idx={idx}
                                                  data-idd={id}
                                                  className="playoff_team4"
                                                  style={{
                                                    direction: 'rtl',
                                                    height: 30,
                                                    fontSize: 14,
                                                  }}
                                                  onChange={handleCatChange}
                                                />
                                              </div>
                                              <div className="col-1 p-0 text-right m-auto pr-1">
                                                <img
                                                  src={clearIcon}
                                                  onClick={() =>
                                                    handleDropdownChange(
                                                      idx,
                                                      'playoff_team4',
                                                      '',
                                                      id
                                                    )
                                                  }
                                                  alt=""
                                                  style={{ cursor: 'pointer' }}
                                                  className="img-fluid mb-1 mr-1"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    {/* {auuu[idx].no_of_playoff !== null && auuu[idx].no_of_playoff === 1 && (
                                        <div className="container">
                                        <div className="row shadow-box">
                                          <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                            <img src={playersIcon} alt="" className="img-fluid" />
                                          </div>
                                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                            Teams in playoff 1
                                          </div>
                                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                            <input
                                              type="number"
                                              // placeholder="No. of courts"
                                              // className="form-control p-0 webkit_spinner_none"
                                              value={auuu[idx].playoff_team1}
                                              data-idx={idx}
                                              className="playoff_team1"
                                              min="1"
                                              style={{direction:'rtl', height:30, fontSize:14}}
                                              onChange={handleCatChange}
                                            />
                                          </div>
                                          <div className="col-1 p-0 text-right m-auto pr-1">
                                            <img
                                              src={clearIcon}
                                              onClick={()=>handleDropdownChange(idx,'playoff_team1','')}
                                              alt=""
                                              style={{cursor:'pointer'}}
                                              className="img-fluid mb-1 mr-1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    )} */}
                                    {/* <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img src={playersIcon} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Teams in each playoff
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            className="form-control p-0 webkit_spinner_none"
                                            // value={teamsInPlayoff}
                                            value={4}
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            // onChange={(e) => setTeamsInPlayoff(e.target.value)}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            // onClick={() => setTeamsInPlayoff('')}
                                            alt=""
                                            style={{cursor:'pointer'}}
                                            className="img-fluid mb-1 mr-1"
                                          />
                                        </div>
                                      </div>
                                    </div> */}
                                  </div>

                                  {/* Finance */}
                                  <div
                                    className="col-12 p-0"
                                    style={{ marginTop: 24 }}
                                  >
                                    <div className="text-left address-title">
                                      Finance
                                    </div>
                                    {/* Online Pay*/}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={emailIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Online Pay
                                        </div>
                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          {auuu[id][idx].online_pay}
                                        </div>
                                        <DropdownModals className="col-1 p-0 text-right m-auto">
                                          <li
                                            onClick={() => {
                                              handleDropdownChange(
                                                idx,
                                                'online_pay',
                                                'Yes',
                                                id
                                              );
                                              // setOnlinePay1Duplicate("Yes");
                                            }}
                                          >
                                            Yes
                                          </li>
                                          <li
                                            onClick={() => {
                                              handleDropdownChange(
                                                idx,
                                                'online_pay',
                                                'No',
                                                id
                                              );
                                              // setOnlinePay1Duplicate("No");
                                            }}
                                          >
                                            No
                                          </li>
                                        </DropdownModals>
                                      </div>
                                    </div>
                                    {/* Purse Amount */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={purseIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Purse Amount 
                                        </div>
                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          <input
                                            type="text"
                                            // id="division_value"
                                            name={paId}
                                            data-idx={idx}
                                            data-idd={id}
                                            className="purse_amount"
                                            id={paId}
                                            style={{
                                              height: 'inherit',
                                              // direction: 'rtl',
                                              textAlign: 'right',
                                            }}
                                            value={
                                              auuu[id][idx].purse_amount ===
                                                null ||
                                              auuu[id][idx].purse_amount === ''
                                                ? ''
                                                : auuu[id][idx].purse_amount
                                            }
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                                          <img
                                            src={clearIcon}
                                            alt=""
                                            className="img-fluid mb-1 mr-1"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                              handleDropdownChange(
                                                idx,
                                                'purse_amount',
                                                '',
                                                id
                                              )
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                   
                                   {/* Purse Amount Percent*/}
                                   <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={purseIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Purse Amount Percent
                                        </div>
                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          <input
                                            type="text"
                                            // id="division_value"
                                            name={paId}
                                            data-idx={idx}
                                            data-idd={id}
                                            className="purse_percent"
                                            id={paId}
                                            style={{
                                              height: 'inherit',
                                              // direction: 'rtl',
                                              textAlign: 'right',
                                            }}
                                            placeholder="%"
                                            value={
                                              auuu[id][idx].purse_percent ===
                                                null ||
                                              auuu[id][idx].purse_percent === ''
                                                ? ''
                                                : (auuu[id][idx].purse_percent)
                                               
                                            }
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                                          <img
                                            src={clearIcon}
                                            alt=""
                                            className="img-fluid mb-1 mr-1"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                              handleDropdownChange(
                                                idx,
                                                'purse_percent',
                                                '',
                                                id
                                              )
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                   
                                   
                                   
                                   
                                   {/* Early Bird */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={birdIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Early Bird
                                        </div>
                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          {auuu[id][idx].early_bird}
                                        </div>
                                        <DropdownModals className="col-1 p-0 text-right m-auto">
                                          <li
                                            onClick={() => {
                                              handleDropdownChange(
                                                idx,
                                                'early_bird',
                                                'Yes',
                                                id
                                              );
                                              // setEarlyBird1Duplicate("Yes");
                                            }}
                                          >
                                            Yes
                                          </li>
                                          <li
                                            onClick={() => {
                                              handleDropdownChange(
                                                idx,
                                                'early_bird',
                                                'No',
                                                id
                                              );
                                              // setEarlyBird1("No");
                                            }}
                                          >
                                            No
                                          </li>
                                        </DropdownModals>
                                      </div>
                                    </div>

                                    {(auuu[id][idx].early_bird === 'Yes' ||
                                      auuu[id][idx].early_bird === 'yes') && (
                                      <>
                                        {/* Early Bird Date*/}
                                        <div className="container">
                                          <div className="row shadow-box">
                                            <div className="col-1 p-0 text-left pl-2">
                                              <img
                                                src={calenderIcon}
                                                alt=""
                                                className="img-fluid mb-1"
                                              />
                                            </div>
                                            <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                              Early Bird Date
                                            </div>
                                            <div className="col-7 p-0 text-right box-shadow-text m-auto">
                                              <DatePicker
                                                format="MM/DD/YYYY"
                                                name={ebdId}
                                                data-idx={idx}
                                                style={{
                                                  width: 125,
                                                  color: '#747474',
                                                  cursor: 'pointer',
                                                }}
                                                bordered={false}
                                                suffixIcon={
                                                  <img
                                                    src={calenderIconRight}
                                                    alt=""
                                                    className="justify-content-center align-items-center"
                                                  />
                                                }
                                                // className="pr-0 text-uppercase p-0 input-styling date_picker mr-3 box-shadow-text"
                                                className="early_bird_date"
                                                id={ebdId}
                                                data-idd={id}
                                                allowClear={false}
                                                value={
                                                  auuu[id][idx].early_bird_date
                                                    ? moment(
                                                        auuu[id][idx]
                                                          .early_bird_date
                                                      )
                                                    : ''
                                                }
                                                // onChange={handleCatChange}
                                                onChange={(e) =>
                                                  handleDateChange(
                                                    idx,
                                                    'early_bird_date',
                                                    e,
                                                    id
                                                  )
                                                }
                                                placeholder=""
                                                popupStyle={{}}
                                                disabledDate={disabledStartDate}
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        {/* Early Bird Amount */}
                                        <div className="container">
                                          <div className="row shadow-box">
                                            <div className="col-1 p-0 text-left pl-2">
                                              <img
                                                src={walletIcon}
                                                alt=""
                                                className="img-fluid mb-1"
                                              />
                                            </div>
                                            <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                              Early Bird Amount
                                            </div>
                                            <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                              <input
                                                type="text"
                                                // id="division_value"
                                                className="early_bird_amount"
                                                name={ebaId}
                                                style={{
                                                  height: 'inherit',
                                                  // direction: 'rtl',
                                                  textAlign: 'right',
                                                }}
                                                data-idx={idx}
                                                data-idd={id}
                                                id={ebaId}
                                                // value={auuu[idx].early_bird_amount===null?"":auuu[idx].early_bird_amount}
                                                value={
                                                  auuu[id][idx]
                                                    .early_bird_amount
                                                }
                                                onChange={handleCatChange}
                                              />
                                            </div>
                                            <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                                              <img
                                                src={clearIcon}
                                                alt=""
                                                className="img-fluid mb-1 mr-1"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                  handleDropdownChange(
                                                    idx,
                                                    'early_bird_amount',
                                                    '',
                                                    id
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    )}

                                    {/* Registration Amount */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={walletIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Registration Amount
                                        </div>
                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          <input
                                            type="text"
                                            // id="division_value"
                                            className="registration_amount"
                                            style={{
                                              height: 'inherit',
                                              // direction: 'rtl',
                                              textAlign: 'right',
                                            }}
                                            value={
                                              auuu[id][idx]
                                                .registration_amount === null ||
                                              auuu[id][idx]
                                                .registration_amount === ''
                                                ? ''
                                                : auuu[id][idx]
                                                    .registration_amount
                                            }
                                            data-idx={idx}
                                            data-idd={id}
                                            name={raId}
                                            id={raId}
                                            onChange={handleCatChange}
                                            onClick={() => {
                                              console.log(
                                                auuu[id][idx]
                                                  .registration_amount
                                              );
                                            }}
                                          />
                                        </div>
                                        <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                                          <img
                                            src={clearIcon}
                                            alt=""
                                            className="img-fluid mb-1 mr-1"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                              handleDropdownChange(
                                                idx,
                                                'registration_amount',
                                                '',
                                                id
                                              )
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Late Amount */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={walletIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Late Amount
                                        </div>
                                        <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          <input
                                            type="text"
                                            className="late_amount"
                                            style={{
                                              height: 'inherit',
                                              // direction: 'rtl',
                                              textAlign: 'right',
                                            }}
                                            value={
                                              auuu[id][idx].late_amount ===
                                                null ||
                                              auuu[id][idx].late_amount === ''
                                                ? ''
                                                : auuu[id][idx].late_amount
                                            }
                                            name={laId}
                                            id={laId}
                                            data-idd={id}
                                            data-idx={idx}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                                          <img
                                            src={clearIcon}
                                            alt=""
                                            style={{ cursor: 'pointer' }}
                                            className="img-fluid mb-1 mr-1"
                                            onClick={() =>
                                              handleDropdownChange(
                                                idx,
                                                'late_amount',
                                                '',
                                                id
                                              )
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              
                              
                              
                              </Panel>
                            </Collapse>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <Footer>
          <div className="m-0 col-auto ml-auto mt-3">
            <div
              className="lower-back-button-cancel"
              id="white-button-hover"
              onClick={onOpenModal}
            >
              <span className="lower-back-button-text">CANCEL</span>
            </div>
          </div>
          <div className="m-0 col-auto mt-3" style={{ position: 'relative' }}>
            {/* <div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Creating Manager...</div></div> */}
            {saveLoading ? (
              editDivisionError === null ? (
                <div className="on_save_message d-flex justify-content-center align-items-center">
                  <LoadingSpinner />
                  <div className="pl-2">Editing Divisions...</div>
                </div>
              ) : (
                <div className="on_save_error">
                  {editDivisionError && editDivisionError.message}
                </div>
              )
            ) : (
              <></>
            )}
            <div className="lower-back-button" onClick={onSaveParent}>
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
                onClick={() => props.history.goBack()}
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
    </>
  );
};

export default TemplateDivision;
