import React, {
  useState,
  useEffect,
  useContext,
  forwardRef,
  useRef,
} from 'react';
import DropdownModals from '../../components/DropdownModals';
// import './TemplateDivision.css';
import '../../assets/styles/TemplateDivisionSaved.css';
import clearIcon from '../../assets/images/icons-x-input.svg';
import divisionImage from '../../assets/images/division.svg';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';
import calenderIcon from '../../assets/images/icon-orange-calender.svg';
import documentIcon from '../../assets/images/icon-orange-document.svg';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
import addNewIcon from '../../assets/images/icon-orange-players-plus.svg';
import walletIcon from '../../assets/images/wallet.svg';
import playersIcon from '../../assets/images/icon-orange-players.svg';
import birdIcon from '../../assets/images/bird.svg';
import pointsIcon from '../../assets/images/icon-orange-points.svg';
import emailIcon from '../../assets/images/icon-orange-email.svg';
import purseIcon from '../../assets/images/icon-orange-purse.svg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import EventContext from '../../context/event/eventContext';
import templateDivisionContext from '../../context/templateDivision/templateDivisionContext';
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
import poolsIcon from '../../assets/images/icon-orange-pools.svg';
import backIcon from '../../assets/images/icon-menu-back.svg';
import playTypeIcon from '../../assets/images/icon-orange-playtype.svg';
import durationIcon from '../../assets/images/icon-orange-duration.svg';
import { DatePicker } from 'antd';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import RegEventDropDown from '../../components/RegEventDropDown';
import API from '../../Utils/API';

const Division = forwardRef((props, ref) => {
  const { div } = props.division;
  const [key,setKey] = useState(props.key);


  const [placementPools, setPlacementPools] = useState(
    props.division.pool_name !== null ? props.division.pool_name : ''
  );
  const [placementPoints, setPlacementPoints] = useState(
    props.division.point_temp_name !== null
      ? props.division.point_temp_name
      : ''
  );
  const [registrationCap1, setregistrationCap1] = useState(
    props.division.registration_cap !== null
      ? props.division.registration_cap
      : ''
  );
  const [teamSize1, setTeamSize1] = useState(
    props.division.team_size !== null ? props.division.team_size : ''
  );
  const [onlinePay1, setOnlinePay1] = useState(
    props.division.online_pay !== null ? props.division.online_pay : ''
  );
  const [purseAmount1, setPurseAmount1] = useState(
    props.division.purse_amount !== null ? props.division.purse_amount : ''
  );
  const [earlyBird1, setEarlyBird1] = useState(
    props.division.early_bird !== null ? props.division.early_bird : ''
  );
  const [earlyBirdDate1, setEarlyBirdDate1] = useState(
    props.division.early_bird_date !== null
      ? props.division.early_bird_date
      : ''
  );
  const [earlyBirdAmount1, setEarlyBirdAmount1] = useState(
    props.division.early_bird_amount !== null
      ? props.division.early_bird_amount
      : ''
  );
  const [registrationAmount1, setRegistrationAmount1] = useState(
    props.division.registration_amount !== null
      ? props.division.registration_amount
      : ''
  );
  const [lateAmount1, setLateAmount1] = useState(
    props.division.late_amount !== null ? props.division.late_amount : ''
  );

  const [firstModal, setFirstModal] = useState('');

  //Duplicate States
  const [placementPointsDuplicate, setPlacementPointsDuplicate] = useState('');
  const [registrationCap1Duplicate, setregistrationCap1Duplicate] =
    useState('');
  const [teamSize1Duplicate, setTeamSize1Duplicate] = useState('');
  const [onlinePay1Duplicate, setOnlinePay1Duplicate] = useState('');
  const [purseAmount1Duplicate, setPurseAmount1Duplicate] = useState('');
  const [earlyBird1Duplicate, setEarlyBird1Duplicate] = useState('');
  const [earlyBirdDate1Duplicate, setEarlyBirdDate1Duplicate] = useState('');
  const [earlyBirdAmount1Duplicate, setEarlyBirdAmount1Duplicate] =
    useState('');
  const [registrationAmount1Duplicate, setRegistrationAmount1Duplicate] =
    useState('');
  const [lateAmount1Duplicate, setLateAmount1Duplicate] = useState('');

  useEffect(() => {
    // console.log(`PlacementPoints ${props.division.id}`,placementPoints);
  }, [placementPoints]);

  // console.log("Division key:" ,props.division.id)

  const division_id = props.division.id;

  // console.log("Division_id",division_id)

  useEffect(() => {
    // const onSave = async () => {
    const data = {
      [division_id]: {},
    };
    if (placementPointsDuplicate !== '') {
      data[division_id].point_temp_name = placementPointsDuplicate;
    }
    if (registrationCap1Duplicate !== '') {
      data[division_id].registration_cap = registrationCap1Duplicate;
    }
    if (teamSize1Duplicate !== '') {
      data[division_id].team_size = teamSize1Duplicate;
    }
    if (onlinePay1Duplicate !== '') {
      data[division_id].online_pay = onlinePay1Duplicate;
    }
    if (purseAmount1Duplicate !== '') {
      data[division_id].purse_amount = purseAmount1Duplicate;
    }
    if (earlyBird1Duplicate !== '') {
      data[division_id].early_bird = earlyBird1Duplicate;
    }
    if (earlyBirdDate1Duplicate !== '') {
      data[division_id].early_bird_date = earlyBirdDate1Duplicate;
    }
    if (earlyBirdAmount1Duplicate !== '') {
      data[division_id].early_bird_amount = earlyBirdAmount1Duplicate;
    }
    if (registrationAmount1Duplicate !== '') {
      data[division_id].registration_amount = registrationAmount1Duplicate;
    }
    if (lateAmount1Duplicate !== '') {
      data[division_id].late_amount = lateAmount1Duplicate;
    }

    // const data = JSON.stringify(

    // )

    // console.log("Data to be sent to backend: data", data)
    // }
    // props.parent(data);
  }, [props.save]);

  // console.log("props.save:",props.save)

  // console.log(props.generateScheduleError && props.generateScheduleError.response && props.generateScheduleError.response.data && props.generateScheduleError.response.data.error[props.division.id], props.division.id)
  // console.log("props.generateScheduleDivError:",props.generateScheduleDivError)

  const deleteDivision = (id, props) => {
    API.post(`/deleteDivision?divisionId=${props.division.id}`).then(() =>
      props.history.push(
        `/eventProfileSaved/${parseInt(props.division.tournament_id)}`
      )
    );
    console.log(props);
  };
  return (
    <div className="col-12 p-0" style={{ marginTop: 24 }}>
      <div className="text-center pb-2" style={{ color: '#ff2072' }}>
        {props.generateScheduleError &&
          props.generateScheduleError.response &&
          props.generateScheduleError.response.data.error[props.division.id]
            .message}
      </div>
      <div className="text-center pb-2" style={{ color: '#ff2072' }}>
        {props.generateScheduleDivError &&
          props.generateScheduleDivError.config.url ===
            `/generateSchedule?divisionId=${props.division.id}` &&
          props.generateScheduleDivError.data &&
          props.generateScheduleDivError.data.errorMessage}
      </div>
      {/* <div className="text-center pb-2" style={{color:'#ff2072'}}>{props.generateScheduleError && props.generateScheduleError.response && props.generateScheduleError.response.data.successfull[props.division.id].message}</div> */}
      <div
        className="container p-0"
        style={{ cursor: 'pointer' }}
        onClick={() => setFirstModal(!firstModal)}
      >
        <div className="row p-0">
          <div className="col-3 p-0 m-auto mens-title text-left">
            {props.division.div_name}
          </div>
          <div className="col-8 p-0 m-auto">
            <hr className="m-0" />
          </div>
          <div className="col-1 p-0">
            <img src={downArrow} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {firstModal && (
        <div>
          <RegEventDropDown>
          <li
              onClick={() => { 
                console.log(key)
                props.history.push({
                           pathname: `/templateDivisionEdit/${parseInt(
                                props.params
                              )}`,
                              state:props.division.id,
                            }) 
              }}
            >
              Edit
            </li>
            <li
              onClick={async () => {
                // props.clearDivScheduleMessage();
                await props.generateScheduleForDivision(
                  parseInt(props.division.id)
                );
                if (props.generateScheduleError === null) {
                  props.setGenerateScheduleCounter(true);
                  await props.history.push({
                    pathname:`/pools/${parseInt(props.division.id)}`,
                  }
                  );
                }
              }}
            >
              Generate Schedule
            </li>
            <li
              style={{ color: '#ff2072' }}
              onClick={() => deleteDivision(34, props)}
            >
              Delete
            </li>
          </RegEventDropDown>
          {/*Details */}
          <div className="col-12 p-0" style={{ marginTop: 24 }}>
            <div className="text-left address-title">Details</div>
            <div className="main_container">
              {/* Pools */}
              <div className="m-0 p-0 box_shadow_class">
                <div className="container">
                  <div
                    className="row template-division-shadow-box"
                    id="division_box"
                  >
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={poolsIcon}
                        alt=""
                        className="img-fluid mb-1 mt-2"
                      />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Pools
                    </div>

                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.pool_name}
                    </div>
                  </div>
                </div>
                {/* Ranking Points */}
                <div className="container">
                  <div
                    className="row template-division-shadow-box"
                    id="division_box"
                  >
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={pointsIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Ranking Points
                    </div>

                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      <div
                        className="form-control p-0"
                        style={{ height: 'inherit', direction: 'rtl' }}
                      />
                      {props.division && props.division.point_temp_name}
                    </div>
                  </div>
                </div>
                {/* Registration Cap */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={addNewIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Registration Cap
                    </div>
                    <div
                      className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto"
                      id="division_value"
                    >
                      {props.division && props.division.registration_cap}
                    </div>
                  </div>
                </div>
                {/* Team Size */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={playersIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                    Maximum Number of Teams Allowed
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.team_size}
                    </div>
                  </div>
                </div>
                {/* Number of sets */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={playTypeIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      No of sets
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.sets}
                    </div>
                  </div>
                </div>
                {/* Match time */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={durationIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Match Time
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.match_time}
                    </div>
                  </div>
                </div>
                {/* Max points per set */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={pointsIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Max points per set
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.max_point_per_set}
                    </div>
                  </div>
                </div>
                {/* Number of playoffs */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={playersIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      No of playoffs
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.no_of_playoff}
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={documentIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Discount Type
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division &&
                      props.division.discount_applied === null
                        ? 'Not Selected'
                        : props.division.discount_applied}
                    </div>
                  </div>
                </div>
                {/* Discount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={purseIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Discount
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.discount_amount === null
                        ? ''
                        : props.division.discount_amount}
                    </div>
                  </div>
                </div>
                {/* Discount or Voucher */}
                <div className="container">
                  <div
                    className="row template-division-shadow-box"
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={documentIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Discount or Voucher
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division &&
                      props.division.discount_voucher === null
                        ? 'Not Selected'
                        : props.division.discount_voucher === 1
                        ? 'Discount'
                        : 'Voucher'}
                    </div>
                  </div>
                </div>
                {/* Discount description */}
                <div className="container">
                  <div
                    className="row template-division-shadow-box"
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={documentIcon}
                        alt=""
                        className="img-fluid mb-1"
                      />
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Discount or Voucher Description
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.discount_text === null
                        ? 'Not Selected'
                        : props.division.discount_text}
                    </div>
                  </div>
                </div>
                {props.division.playoff_team1 && (
                  <div className="container">
                    <div className="row template-division-shadow-box">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={playersIcon}
                          alt=""
                          className="img-fluid mb-1"
                        />
                      </div>
                      <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                        Teams in playoff 1
                      </div>
                      <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                        {props.division && props.division.playoff_team1}
                      </div>
                    </div>
                  </div>
                )}
                {props.division.playoff_team2 && (
                  <div className="container">
                    <div className="row template-division-shadow-box">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={playersIcon}
                          alt=""
                          className="img-fluid mb-1"
                        />
                      </div>
                      <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                        Teams in playoff 2
                      </div>
                      <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                        {props.division && props.division.playoff_team2}
                      </div>
                    </div>
                  </div>
                )}
                {props.division.playoff_team3 && (
                  <div className="container">
                    <div className="row template-division-shadow-box">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={playersIcon}
                          alt=""
                          className="img-fluid mb-1"
                        />
                      </div>
                      <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                        Teams in playoff 3
                      </div>
                      <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                        {props.division && props.division.playoff_team3}
                      </div>
                    </div>
                  </div>
                )}
                {props.division.playoff_team4 && (
                  <div className="container">
                    <div className="row template-division-shadow-box">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={playersIcon}
                          alt=""
                          className="img-fluid mb-1"
                        />
                      </div>
                      <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                        Teams in playoff 4
                      </div>
                      <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                        {props.division && props.division.playoff_team4}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Finance */}
            <div className="col-12 p-0" style={{ marginTop: 24 }}>
              <div className="text-left address-title">Finance</div>
              <div className="main_container">
                {/* Online Pay*/}
                <div className="container ">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={emailIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Online Pay
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.online_pay}
                    </div>
                  </div>
                </div>
                {/* Purse Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={purseIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Purse Amount
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {/* <input
                type="text"
                // id="division_value"
                className="form-control p-0"
                style={{height:'inherit', direction:'rtl'}}
                value={purseAmount1}/> */}
                      ${props.division && props.division.purse_amount}
                    </div>
                  </div>
                </div>

                  {/* Purse percent Amount */}
                  <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={purseIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Purse Amount Percent
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {/* <input
                type="text"
                // id="division_value"
                className="form-control p-0"
                style={{height:'inherit', direction:'rtl'}}
                value={purseAmount1}/> */}
                      {props.division && props.division.purse_percent!==null? props.division.purse_percent+"%":"%"}
                    </div>
                  </div>
                </div>


                {/* Early Bird */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={birdIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Early Bird
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {props.division && props.division.early_bird}
                    </div>
                  </div>
                </div>

                {((props.division && props.division.early_bird === 'Yes') ||
                  (props.division && props.division.early_bird === 'yes')) && (
                  <>
                    {/* Early Bird Date*/}
                    <div className="container">
                      <div className="row template-division-shadow-box">
                        <div className="col-1 p-0 text-left pl-2">
                          <img
                            src={calenderIcon}
                            alt=""
                            className="img-fluid mb-1"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                          Early Bird Date
                        </div>
                        <div className="col-7 p-0 text-right m-auto">
                          {props.division && props.division.early_bird_date}
                        </div>
                      </div>
                    </div>

                    {/* Early Bird Amount */}
                    <div className="container">
                      <div className="row template-division-shadow-box">
                        <div className="col-1 p-0 text-left pl-2">
                          <img
                            src={walletIcon}
                            alt=""
                            className="img-fluid mb-1"
                          />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                          Early Bird Amount
                        </div>
                        <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                          ${props.division && props.division.early_bird_amount}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Registration Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={walletIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Registration Amount
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {/* <input
                type="text"
                // id="division_value"
                className="form-control p-0"
                style={{height:'inherit', direction:'rtl'}}
                value={registrationAmount1}
                onChange={(e)=>{
                  setRegistrationAmount1(e.target.value);
                  setRegistrationAmount1Duplicate(e.target.value);
                }}/> */}
                      ${props.division && props.division.registration_amount}
                    </div>
                  </div>
                </div>

                {/* Late Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={walletIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      Late Amount
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto">
                      {/* <input
                type="text"
                // id="division_value"
                className="form-control p-0"
                style={{height:'inherit', direction:'rtl'}}
                value={lateAmount1}
                onChange={(e)=>{
                  setLateAmount1(e.target.value);
                  setLateAmount1Duplicate(e.target.value);
                  }}/> */}
                      ${props.division && props.division.late_amount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const Template = (props) => {
  const [templateName, setTemplateName] = useState(
    props.template.template_name === 'null'
      ? 'Template not added'
      : props.template.template_name
  );
  console.log('props.save in Template:', props.save);
  return (
    <>
      <div className="row mb-5">
        <div className="col-5 m-auto text-center">
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
                  <div
                    style={{ display: 'flex', flexDirection: 'row' }}
                    className="row"
                  >
                    <div className="col-10">
                      <input
                        type="text"
                        placeholder="Event Name"
                        className="form-control event-input"
                        value={
                          props.template.template_name === 'null'
                            ? 'Template name not added'
                            : props.template.template_name
                        }
                        style={{ width: 250 }}
                        key={props.i}
                        name={`TemplateName${props.i}`}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {props.template.division.map((division, i) => (
              console.log(division.id),
              <Division
                params = {props.params}
                division={division}
                key={division.id}
                save={props.save}
                generateScheduleError={props.generateScheduleError}
                generateScheduleForDivision={props.generateScheduleForDivision}
                generateScheduleDivError={props.generateScheduleDivError}
                generateScheduleDivResponse={props.generateScheduleDivResponse}
                clearDivScheduleMessage={props.clearDivScheduleMessage}
                history={props.history}
                setGenerateScheduleCounter={props.generateScheduleCounter}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TemplateDivisionSavedMain = (props) => {
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
    getDivisions,
    editDivisions,
    generateSchedule,
    generateScheduleError,
    generateScheduleResponse,
    clearScheduleMessage,
    generateScheduleDivResponse,
    generateScheduleDivError,
    generateScheduleForDivision,
    clearDivScheduleMessage,
  } = eventContext;

  const templateContext = useContext(templateDivisionContext);
  const { getTemplate, templateData, updateTemplateId } = templateContext;
  const [loading, setLoading]=useState(false);

  useEffect(() => {
    console.log('Event id by url:', parseInt(props.match.params.id));
    getDivisions(parseInt(props.match.params.id));
    getTournamentById(parseInt(props.match.params.id));
    clearScheduleMessage();
   clearDivScheduleMessage();
   
  }, []);

  const deleteDivision = (id) => {
    API.post(`/deleteDivision?divisionId=${id}`);
  };

  useEffect(() => {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 2000);    
  }, [divisionData]);

  

  // const [save, setSave] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [scheduleStateError, setScheduleStateError] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenHamburger(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
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

  console.log('Tournament data:', getTournamentData);

  let divisions = [];
  let templates = [];

  console.log('divisionData.template:', divisionData);

  if (divisionData !== '' && divisionData.template !== null) {
    for (let i = 0; i < divisionData.template.length; i++) {
      templates.push(divisionData.template[i]);

      for (let j = 1; j < divisionData.template[i].division.length; j++) {
        divisions.push(divisionData.template[i].division[i]);
      }
      // console.log('Div', divisionData.template[i].division);
    }
    // console.log("TA",templates)
    // console.log("DA",divisions)
  }

  console.log('generateScheduleError', generateScheduleError);
  console.log(
    'generateScheduleError.response',
    generateScheduleError && generateScheduleError.response
  );
  console.log('generateScheduleResponse', generateScheduleResponse);

  useEffect(() => {
    if (
      generateScheduleResponse !== null &&
      generateScheduleResponse.error !== undefined
    ) {
      setScheduleStateError(generateScheduleResponse.error);
      setTimeout(() => {
        setScheduleStateError(null);
      }, [5000]);
    }
  }, [generateScheduleResponse]);

  useEffect(() => {
    if (generateScheduleError !== null) {
      console.log(generateScheduleError);
    } else if (
      generateScheduleError === null &&
      generateScheduleCounter === true
    ) {
      setGenerateScheduleCounter(false);
      props.history.push(`/pools/${parseInt(props.match.params.id)}`);
    }
  }, [generateScheduleError, generateScheduleResponse]);

  const [generateScheduleCounter, setGenerateScheduleCounter] = useState(false);

 const noOfDivisions = ()=>{
 let count=0;
    if(templates.length!==0){
      templates.map((division,id)=>{
        count+=division.length;
    })
   }
   return count;
 }
    

  return (
    <>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              // href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>

      {loading ? (
        <div className="col-12 text-center loading_height">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="new-event-profile container min_height p-0"  >
          <div className="row" style={{ marginTop: 142 }}>
            <div className="col-5 m-auto text-right p-0">
              <div className="text-center pb-2" style={{ color: '#ff2072' }}>
                {/* {generateScheduleResponse && generateScheduleResponse.error} */}
                {scheduleStateError !== null && scheduleStateError}
              </div>
              <div className="text-center pb-2" style={{ color: '#ff2072' }}>
                {generateScheduleResponse &&
                  generateScheduleResponse.successfull}
              </div>
              {/* <div className="text-center pb-2" style={{color:'#ff2072'}}>{generateScheduleError && generateScheduleError.data && generateScheduleError.data.error}</div> */}
              <div className="text-center pb-2" style={{ color: '#ff2072' }}>
                {generateScheduleResponse &&
                  generateScheduleResponse.successful &&
                  generateScheduleResponse.successful[0].message}
              </div>

              {/* <div className="text-center pb-2">{generateScheduleError && generateScheduleResponse.successfull}</div> */}
              {/* Hamburger */}
              <a
                className={openHamburger ? 'tri_top_visible' : 'tri_top_hidden'}
                id="score-hamburger"
                ref={ref}
                onClick={() => setOpenHamburger(!openHamburger)}
              >
                <div>
                  <img src={hamburgerIcon} alt="" />
                  {openHamburger && (
                    <span
                      style={{ width: 142, height: 89, padding: 0, top: 30 }}
                      className="dropdown_animation"
                    >
                      <ul>
                        <li
                          style={{color: noOfDivisions()===0?"gray":""}}
                          onClick={() =>
                            noOfDivisions()!==0?
                            props.history.push({
                           pathname: `/templateDivisionEdit/${parseInt(
                                props.match.params.id
                              )}`,
                              state:null,
                            }                             
                            )
                            :console.log("Edit disabled")
                          }
                        
                        >
                          Edit
                        </li>
                        {/* <li>Duplicate</li> */}
                        <li
                        style={{color: noOfDivisions()===0?"gray":""}}
                          onClick={async () => {
                           noOfDivisions()!==0?
                            await generateSchedule(
                              parseInt(props.match.params.id)
                            ):console.log("disabled");
                            // props.history.push(`/templateDivisionEdit/${parseInt(props.match.params.id)}`)
                            // if (generateScheduleError === null) {
                            //   await props.history.push(
                            //     `/pools/${parseInt(props.match.params.id)}`
                            //   );
                            // }
                           
                          
                          }}
                        >
                          Generate Schedule
                        </li>
                        {/* <li
                          style={{ color: '#ff2072' }}
                          onClick={deleteDivision}
                        >
                          Delete
                        </li> */}
                      </ul>
                    </span>
                  )}
                </div>
              </a>
            </div>
          </div>
          <div style={{paddingBottom:50, marginBottom:30}}>
          {noOfDivisions()!==0? templates.map((template, i) => (
            <>
              <Template
                divisions={divisions}
                divisionData={divisionData}
                template={template}
                // key={i}
                params={props.match.params.id}
                generateScheduleError={generateScheduleError}
                generateScheduleForDivision={generateScheduleForDivision}
                generateScheduleDivError={generateScheduleDivError}
                generateScheduleDivResponse={generateScheduleDivResponse}
                clearDivScheduleMessage={clearDivScheduleMessage}
                history={props.history}
                setGenerateScheduleCounter={setGenerateScheduleCounter}
              />
            </>
          )):<h4 style ={{color:"red", textAlign:"center"}}>No divisions set for the tournament.</h4>
          }
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateDivisionSavedMain;
