import React, { useContext, useEffect, useState } from 'react';
import './TemplateDivision.css';
import clearIcon from '../../assets/images/icons-x-input.svg';
import divisionImage from '../../assets/images/division.svg';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';
import calenderIcon from '../../assets/images/icon-orange-calender.svg';
import addNewIcon from '../../assets/images/icon-orange-players-plus.svg';
import walletIcon from '../../assets/images/wallet.svg';
import backIcon from '../../assets/images/icon-menu-back.svg';
import playersIcon from '../../assets/images/icon-orange-players.svg';
import birdIcon from '../../assets/images/bird.svg';
import pointsIcon from '../../assets/images/icon-orange-points.svg';
import emailIcon from '../../assets/images/icon-orange-email.svg';
import purseIcon from '../../assets/images/icon-orange-purse.svg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SelectOptions from '../../components/selectOptions/SelectOptions';
import CalenderComponent from '../../components/calendar/CalenderComponent';
import TemplateDivisionContext from '../../context/templateDivision/templateDivisionContext';

const TemplateDivision = (props) => {
  const [firstModal, setFirstModal] = useState('');
  const [lastModal, setLastModal] = useState('');

  // context
  const templateDivisionContext = useContext(TemplateDivisionContext);
  const { divisionInfo, saveDivisionData } = templateDivisionContext;

  // info
  const [divisionName, setDivisionName] = useState(
    divisionInfo !== null ? divisionInfo.divisionName : ''
  );
  const [placementPointsGlobal, setPLacementPOintsGlobal] = useState(
    divisionInfo !== null ? divisionInfo.placementPointsGlobal : ''
  );
  const [registrationCapGlobal, setRegistrationCapGlobal] = useState(
    divisionInfo !== null ? divisionInfo.registrationCapGlobal : ''
  );
  const [teamSizeGlobal, setTeamSizeGlobal] = useState(
    divisionInfo !== null ? divisionInfo.teamSizeGlobal : ''
  );
  const [onlinePayGlobal, setOnlinePayGlobal] = useState(
    divisionInfo !== null ? divisionInfo.onlinePayGlobal : ''
  );
  const [purseAmountGlobal, setPurseAmountGlobal] = useState(
    divisionInfo !== null ? divisionInfo.purseAmountGlobal : ''
  );
  const [earlyBirdGlobal, setEarlyBirdGlobal] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdGlobal : ''
  );
  const [earlyBirdDateGlobal, setEarlyBirdDateGlobal] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdDateGlobal : ''
  );
  const [earlyBirdAmountGlobal, setEarlyBirdAmountGlobal] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdAmountGlobal : ''
  );
  const [registrationAmountGlobal, setRegistrationAmountGlobal] = useState(
    divisionInfo !== null ? divisionInfo.registrationAmountGlobal : ''
  );
  const [lateAMountGlobal, setLateAMountGlobal] = useState(
    divisionInfo !== null ? divisionInfo.lateAMountGlobal : ''
  );

  const [placementPoints26, setPLacementPOints26] = useState(
    divisionInfo !== null ? divisionInfo.placementPoints26 : ''
  );
  const [registrationCap26, setRegistrationCap26] = useState(
    divisionInfo !== null ? divisionInfo.registrationCap26 : ''
  );
  const [teamSize26, setTeamSize26] = useState(
    divisionInfo !== null ? divisionInfo.teamSize26 : ''
  );
  const [onlinePay26, setOnlinePay26] = useState(
    divisionInfo !== null ? divisionInfo.onlinePay26 : ''
  );
  const [purseAmount26, setPurseAmount26] = useState(
    divisionInfo !== null ? divisionInfo.purseAmount26 : ''
  );
  const [earlyBird26, setEarlyBird26] = useState(
    divisionInfo !== null ? divisionInfo.earlyBird26 : ''
  );
  const [earlyBirdDate26, setEarlyBirdDate26] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdDate26 : ''
  );
  const [earlyBirdAmount26, setEarlyBirdAmount26] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdAmount26 : ''
  );
  const [registrationAmount26, setRegistrationAmount26] = useState(
    divisionInfo !== null ? divisionInfo.registrationAmount26 : ''
  );
  const [lateAMount26, setLateAMount26] = useState(
    divisionInfo !== null ? divisionInfo.lateAMount26 : ''
  );

  const [placementPoints70, setPLacementPOints70] = useState(
    divisionInfo !== null ? divisionInfo.placementPoints70 : ''
  );
  const [registrationCap70, setRegistrationCap70] = useState(
    divisionInfo !== null ? divisionInfo.registrationCap70 : ''
  );
  const [teamSize70, setTeamSize70] = useState(
    divisionInfo !== null ? divisionInfo.teamSize70 : ''
  );
  const [onlinePay70, setOnlinePay70] = useState(
    divisionInfo !== null ? divisionInfo.onlinePay70 : ''
  );
  const [purseAmount70, setPurseAmount70] = useState(
    divisionInfo !== null ? divisionInfo.purseAmount70 : ''
  );
  const [earlyBird70, setEarlyBird70] = useState(
    divisionInfo !== null ? divisionInfo.earlyBird70 : ''
  );
  const [earlyBirdDate70, setEarlyBirdDate70] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdDate70 : ''
  );
  const [earlyBirdAmount70, setEarlyBirdAmount70] = useState(
    divisionInfo !== null ? divisionInfo.earlyBirdAmount70 : ''
  );
  const [registrationAmount70, setRegistrationAmount70] = useState(
    divisionInfo !== null ? divisionInfo.registrationAmount70 : ''
  );
  const [lateAMount70, setLateAMount70] = useState(
    divisionInfo !== null ? divisionInfo.lateAMount70 : ''
  );

  const onSave = () => {
    if (
      divisionName !== '' &&
      placementPointsGlobal !== '' &&
      registrationCapGlobal !== '' &&
      teamSizeGlobal !== '' &&
      onlinePayGlobal !== '' &&
      purseAmountGlobal !== '' &&
      earlyBirdGlobal !== '' &&
      earlyBirdDateGlobal !== '' &&
      earlyBirdAmountGlobal !== '' &&
      registrationAmountGlobal !== '' &&
      lateAMountGlobal !== '' &&
      // placementPoints26 !== '' &&
      registrationCap26 !== '' &&
      teamSize26 !== '' &&
      onlinePay26 !== '' &&
      purseAmount26 !== '' &&
      earlyBird26 !== '' &&
      earlyBirdDate26 !== '' &&
      earlyBirdAmount26 !== '' &&
      registrationAmount26 !== '' &&
      lateAMount26 !== '' &&
      // placementPoints70 !== '' &&
      registrationCap70 !== '' &&
      teamSize70 !== '' &&
      onlinePay70 !== '' &&
      purseAmount70 !== '' &&
      earlyBird70 !== '' &&
      earlyBirdDate70 !== '' &&
      earlyBirdAmount70 !== '' &&
      registrationAmount70 !== '' &&
      lateAMount70 !== ''
    ) {
      console.log({
        divisionName,
        placementPointsGlobal,
        registrationCapGlobal,
        teamSizeGlobal,
        onlinePayGlobal,
        purseAmountGlobal,
        earlyBirdGlobal,
        earlyBirdDateGlobal,
        earlyBirdAmountGlobal,
        registrationAmountGlobal,
        lateAMountGlobal,
        // placementPoints26,
        registrationCap26,
        teamSize26,
        onlinePay26,
        purseAmount26,
        earlyBird26,
        earlyBirdDate26,
        earlyBirdAmount26,
        registrationAmount26,
        lateAMount26,
        // placementPoints70,
        registrationCap70,
        teamSize70,
        onlinePay70,
        purseAmount70,
        earlyBird70,
        earlyBirdDate70,
        earlyBirdAmount70,
        registrationAmount70,
        lateAMount70,
      });
      saveDivisionData({
        divisionName,
        placementPointsGlobal,
        registrationCapGlobal,
        teamSizeGlobal,
        onlinePayGlobal,
        purseAmountGlobal,
        earlyBirdGlobal,
        earlyBirdDateGlobal,
        earlyBirdAmountGlobal,
        registrationAmountGlobal,
        lateAMountGlobal,
        // placementPoints26,
        registrationCap26,
        teamSize26,
        onlinePay26,
        purseAmount26,
        earlyBird26,
        earlyBirdDate26,
        earlyBirdAmount26,
        registrationAmount26,
        lateAMount26,
        // placementPoints70,
        registrationCap70,
        teamSize70,
        onlinePay70,
        purseAmount70,
        earlyBird70,
        earlyBirdDate70,
        earlyBirdAmount70,
        registrationAmount70,
        lateAMount70,
      });
      props.history.push('/templateDivisionSavedMain');
    }
  };

  useEffect(() => {
    console.log({
      divisionName,
      placementPointsGlobal,
      registrationCapGlobal,
      teamSizeGlobal,
      onlinePayGlobal,
      purseAmountGlobal,
      earlyBirdGlobal,
      earlyBirdDateGlobal,
      earlyBirdAmountGlobal,
      registrationAmountGlobal,
      lateAMountGlobal,
      // placementPoints26,
      registrationCap26,
      teamSize26,
      onlinePay26,
      purseAmount26,
      earlyBird26,
      earlyBirdDate26,
      earlyBirdAmount26,
      registrationAmount26,
      lateAMount26,
      // placementPoints70,
      registrationCap70,
      teamSize70,
      onlinePay70,
      purseAmount70,
      earlyBird70,
      earlyBirdDate70,
      earlyBirdAmount70,
      registrationAmount70,
      lateAMount70,
    });
  }, [
    divisionName,
    placementPointsGlobal,
    registrationCapGlobal,
    teamSizeGlobal,
    onlinePayGlobal,
    purseAmountGlobal,
    earlyBirdGlobal,
    earlyBirdDateGlobal,
    earlyBirdAmountGlobal,
    registrationAmountGlobal,
    lateAMountGlobal,
    // placementPoints26,
    registrationCap26,
    teamSize26,
    onlinePay26,
    purseAmount26,
    earlyBird26,
    earlyBirdDate26,
    earlyBirdAmount26,
    registrationAmount26,
    lateAMount26,
    // placementPoints70,
    registrationCap70,
    teamSize70,
    onlinePay70,
    purseAmount70,
    earlyBird70,
    earlyBirdDate70,
    earlyBirdAmount70,
    registrationAmount70,
    lateAMount70,
  ]);

  useEffect(() => {
    console.log(divisionInfo);
  }, [divisionInfo]);

  return (
    <>
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
        </ul>
      </Header>
      <div className="new-event-profile container p-0">
        <div className="row" style={{ marginTop: 142 }}>
          <div className="col-6 m-auto text-center">
            <div className="row main-width">
              <div className="col-12">
                {/* image and event name */}
                <div className="row">
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
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div>
                        <input
                          type="text"
                          value={divisionName}
                          onChange={(e) => setDivisionName(e.target.value)}
                          placeholder="Event Name"
                          className="form-control event-input"
                        />
                      </div>
                      <div className="mt-auto mb-auto ml-auto">
                        <img
                          src={clearIcon}
                          alt=""
                          style={{ width: 10 }}
                          onClick={() => setDivisionName('')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Details */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Global Details</div>
                {/* Ranking Points */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={pointsIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Ranking Points
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                      <input
                        type="text"
                        value={placementPointsGlobal}
                        onChange={(e) =>
                          setPLacementPOintsGlobal(e.target.value)
                        }
                        className="form-control p-0"
                        style={{ height: 'inherit', direction: 'rtl' }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <img
                        src={clearIcon}
                        onClick={() => setPLacementPOintsGlobal('')}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>
                {/* Registration Cap */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={addNewIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Registration Cap
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {registrationCapGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setRegistrationCapGlobal('Yes')}
                        noChoice={() => setRegistrationCapGlobal('No')}
                      />
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
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Team Size
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {teamSizeGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setTeamSizeGlobal('Yes')}
                        noChoice={() => setTeamSizeGlobal('No')}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*Finance */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title"> Finance</div>
                {/* Online Pay*/}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={emailIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Online Pay
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {onlinePayGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setOnlinePayGlobal('Yes')}
                        noChoice={() => setOnlinePayGlobal('No')}
                      />
                    </div>
                  </div>
                </div>
                {/* Purse Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={purseIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Purse Amount
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {purseAmountGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setPurseAmountGlobal('Yes')}
                        noChoice={() => setPurseAmountGlobal('No')}
                      />
                    </div>
                  </div>
                </div>
                {/* Early Bird */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={birdIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Early Bird
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {earlyBirdGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setEarlyBirdGlobal('Yes')}
                        noChoice={() => setEarlyBirdGlobal('No')}
                      />
                    </div>
                  </div>
                </div>

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
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Early Bird Date
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {earlyBirdDateGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <CalenderComponent
                        date={(value) => setEarlyBirdDateGlobal(value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Early Bird Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={walletIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Early Bird Amount
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {earlyBirdAmountGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setEarlyBirdAmountGlobal('Yes')}
                        noChoice={() => setEarlyBirdAmountGlobal('No')}
                      />
                    </div>
                  </div>
                </div>

                {/* Registration Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={walletIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Registration Amount
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {registrationAmountGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setRegistrationAmountGlobal('Yes')}
                        noChoice={() => setRegistrationAmountGlobal('No')}
                      />
                    </div>
                  </div>
                </div>

                {/* Late Amount */}
                <div className="container">
                  <div className="row template-division-shadow-box">
                    <div className="col-1 p-0 text-left pl-2">
                      <img src={walletIcon} alt="" className="img-fluid mb-1" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Late Amount
                    </div>
                    <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                      {lateAMountGlobal}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setLateAMountGlobal('Yes')}
                        noChoice={() => setLateAMountGlobal('No')}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mens 4v4 U 26 */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="container p-0"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setFirstModal(!firstModal)}
                >
                  <div className="row p-0">
                    <div className="col-3 p-0 m-auto mens-title text-left">
                      Mens 4v4 U 26
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
                    {/*Details */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">Details</div>
                      {/* Placement Points */}
                      {/* <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={pointsIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Placement Points
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            <input
                              type="text"
                              value={placementPoints26}
                              onChange={(e) =>
                                setPLacementPOints26(e.target.value)
                              }
                              className="form-control p-0"
                              style={{ height: 'inherit', direction: 'rtl' }}
                            />
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <img
                              src={clearIcon}
                              alt=""
                              onClick={() => setPLacementPOints26('')}
                              className="img-fluid mb-1 mr-1"
                            />
                          </div>
                        </div>
                      </div> */}
                      {/* Registration Cap */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={addNewIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Registration Cap
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {registrationCap26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setRegistrationCap26('Yes')}
                              noChoice={() => setRegistrationCap26('No')}
                            />
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
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Team Size
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {teamSize26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setTeamSize26('Yes')}
                              noChoice={() => setTeamSize26('No')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Finance */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">Finance</div>
                      {/* Online Pay*/}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={emailIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Online Pay
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {onlinePay26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setOnlinePay26('Yes')}
                              noChoice={() => setOnlinePay26('No')}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Purse Amount */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={purseIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Purse Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {purseAmount26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setPurseAmount26('Yes')}
                              noChoice={() => setPurseAmount26('No')}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Early Bird */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={birdIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Early Bird
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {earlyBird26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setEarlyBird26('Yes')}
                              noChoice={() => setEarlyBird26('No')}
                            />
                          </div>
                        </div>
                      </div>

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
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Early Bird Date
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {earlyBirdDate26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <CalenderComponent
                              date={(value) => setEarlyBirdDate26(value)}
                            />
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
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Early Bird Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {earlyBirdAmount26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setEarlyBirdAmount26('Yes')}
                              noChoice={() => setEarlyBirdAmount26('No')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Registration Amount */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Registration Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {registrationAmount26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setRegistrationAmount26('Yes')}
                              noChoice={() => setRegistrationAmount26('No')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Late Amount */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Late Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {lateAMount26}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setLateAMount26('Yes')}
                              noChoice={() => setLateAMount26('No')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mens 4v4 U 70 */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="container p-0"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setLastModal(!lastModal)}
                >
                  <div className="row p-0">
                    <div className="col-3 p-0 m-auto mens-title text-left">
                      Mens 4v4 U 70
                    </div>
                    <div className="col-8 p-0 m-auto">
                      <hr className="m-0" />
                    </div>
                    <div className="col-1 p-0">
                      <img src={downArrow} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                {lastModal && (
                  <div>
                    {/*Details */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">Details</div>
                      {/* Placement Points */}
                      {/* <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={pointsIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Placement Points
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            <input
                              type="text"
                              value={placementPoints70}
                              onChange={(e) =>
                                setPLacementPOints70(e.target.value)
                              }
                              className="form-control p-0"
                              style={{ height: 'inherit', direction: 'rtl' }}
                            />
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <img
                              src={clearIcon}
                              alt=""
                              onClick={() => setPLacementPOints70('')}
                              className="img-fluid mb-1 mr-1"
                            />
                          </div>
                        </div>
                      </div> */}
                      {/* Registration Cap */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={addNewIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Registration Cap
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {registrationCap70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setRegistrationCap70('Yes')}
                              noChoice={() => setRegistrationCap70('No')}
                            />
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
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Team Size
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {teamSize70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setTeamSize70('Yes')}
                              noChoice={() => setTeamSize70('No')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Finance */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">Finance</div>
                      {/* Online Pay*/}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={emailIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Online Pay
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {onlinePay70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setOnlinePay70('Yes')}
                              noChoice={() => setOnlinePay70('No')}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Purse Amount */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={purseIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Purse Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {purseAmount70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setPurseAmount70('Yes')}
                              noChoice={() => setPurseAmount70('No')}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Early Bird */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={birdIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Early Bird
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {earlyBird70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setEarlyBird70('Yes')}
                              noChoice={() => setEarlyBird70('No')}
                            />
                          </div>
                        </div>
                      </div>

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
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Early Bird Date
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {earlyBirdDate70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <CalenderComponent
                              date={(value) => setEarlyBirdDate70(value)}
                            />
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
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Early Bird Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {earlyBirdAmount70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setEarlyBirdAmount70('Yes')}
                              noChoice={() => setEarlyBirdAmount70('No')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Registration Amount */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Registration Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {registrationAmount70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setRegistrationAmount70('Yes')}
                              noChoice={() => setRegistrationAmount70('No')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Late Amount */}
                      <div className="container">
                        <div className="row template-division-shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1"
                            />
                          </div>
                          <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                            Late Amount
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-4">
                            {lateAMount70}
                          </div>
                          <div className="col-1 p-0 text-right m-auto">
                            <SelectOptions
                              yesChoice={() => setLateAMount70('Yes')}
                              noChoice={() => setLateAMount70('No')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer>
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
        </Footer>
      </div>
    </>
  );
};

export default TemplateDivision;
