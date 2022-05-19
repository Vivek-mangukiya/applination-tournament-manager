import React, { useContext, useEffect, useState, useRef } from 'react';
import '../assets/styles/RegEventTeamViewComponent.css';
import mapicon from '../assets/images/icon-orange-map.svg';
import phoneicon from '../assets/images/icon-orange-phone.svg';
import mailicon from '../assets/images/icon-orange-mail.svg';
import pointsicon from '../assets/images/icon-orange-points.svg';
import levelicon from '../assets/images/icon-orange-level.svg';
import staricon from '../assets/images/icon-orange-star.svg';
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import RegContext from '../context/registration/RegContext';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import photoAddIcon from '../assets/images/group.svg';
import playerIcon from '../assets/images/icon-orange-player.svg';
import { Collapse } from 'antd';
import ballIcon from '../assets/images/group-3.svg';
import profilePic from '../assets/images/profilepic.jpg';
import searchIcon from '../assets/images/icon-sidemenu-search.svg';
import RegEventDropDown from './RegEventDropDown';
import RegEventSearchDropDown from './RegEventSearchDropDown';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import API from '../Utils/API';
import { loadStripe } from '@stripe/stripe-js';

const { Panel } = Collapse;
const algorithm = 'aes-256-cbc';
const key = 'LM@098765_AVPAppLM@098765_AVPApp';
const iv = 'e95a3d73fe601926';
const crypto = require('crypto');

const RegEventTeamViewComponent = (props) => {
  //context
  const regContext = useContext(RegContext);
  const {
    getTeamDetails,
    teamDataById,
    teamDataLoading,
    playersList,
    playersData,
    removePlayerFromTeam,
    removePlayerLoading,
    addPlayerToTeam,
    addPlayerLoading,
  } = regContext;

  useEffect(() => {
    getTeamDetails(props.match.params.id, props);
    // playersList('');
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(teamDataById);
  }, [teamDataById]);

  const decrypt = (text) => {
    var _encrypted;
    if (text) _encrypted = Buffer.from(text, 'base64');
    const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(key),
      Buffer.from(iv)
    );

    decipher.setAutoPadding(true);
    let decrypt = decipher.update(_encrypted, 'base64');
    decrypt += decipher.final();
    return decrypt;
  };

  const addPlayerToTeamFunction = async (index, player) => {
    await addPlayerToTeam({
      team_id: Number(props.match.params.id),
      division_id: Number(props.match.params.division_id),
      player_avp_id: [player.avp_id],
      name: [`${player.name}`],
      points: [Number(player.points)],
      waiting_no: Number(props.match.params.waiting),
    });
    await getTeamDetails(props.match.params.id, props);
  };

  const removePlayerFromTeamFunction = async (avp_id, team_id, points) => {
    await removePlayerFromTeam({
      avp_id: avp_id,
      team_id: team_id,
      points: points,
    });
    await getTeamDetails(props.match.params.id, props);
  };

  const [loading, setloading] = useState(false);
  const [searchData, setSearchData] = useState(null);

  let cancelToken;
  const handleSearchChange = async (e, id, team_id) => {
    if (id !== undefined) {
      // console.log(e.target.value);
      const searchTerm = e;

      //Check if there are any previous pending requests
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel('Operation canceled due to new request.');
      }

      //Save the cancel token for the current request
      cancelToken = axios.CancelToken.source();

      try {
        const results = await API.get(
          `/getPlayersListForTeam/${id}?team_id=${team_id}&f_name=${searchTerm}`,
          { cancelToken: cancelToken.token } //Pass the cancel token to the current request
        );
        console.log('Results for ' + searchTerm + ': ', results.data.player);
        setloading(false);
        if (results.data.player !== 'Player not found') {
          setSearchData(results.data.player);
        } else {
          setSearchData(results.data.player);
        }
      } catch (error) {
        console.log(error);
        setloading(true);
      }
    }
  };

  useEffect(() => {
    handleSearchChange(' ');
  }, []);

  // useEffect(() => {

  //   if(teamDataById!==null && !teamDataById.includes('null')){

  //   }
  // }, [teamDataById]);

  const [stripeError, setStripeError] = useState(null);
  let event_name_error = useRef();

  const handleCheckout = async (amount, id, avp_id, team_id) => {
    try {
      console.log(amount, id, avp_id, team_id);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/createCheckoutSession?price=${amount}&id=${id}&avp_id=${avp_id}&team_id=${team_id}`
      );
      console.log(response);
      const session = await response.data;
      const stripe = await loadStripe(response.data.publish_key);
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
      setStripeError(error.response.data.errorMessage);
      event_name_error.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setStripeError(null);
      }, 5000);
    }
  };

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

      <div className="container regEventTeam row mx-0">
        {teamDataLoading ||
        teamDataById === null ||
        teamDataById === undefined ||
        teamDataById === 'null' ||
        removePlayerLoading ||
        addPlayerLoading ? (
          <div className="mx-auto">
            <LoadingSpinner />
          </div>
        ) : (
          <Collapse
            expandIconPosition="right"
            bordered={true}
            ghost
            expandIcon={({ isActive }) => (
              <span
                className={isActive ? 'reg-rotate mt-2' : 'reg-no-rotate mt-2'}
              >
                <img src={menuchevrondownicon} alt="" />
              </span>
            )}
            className="col-8 mx-auto reg-padding"
          >
            <div
              className="col-12 text-center mt-4 mb-5"
              style={{ color: '#ff2072' }}
              ref={event_name_error}
            >
              {stripeError !== null && stripeError}
            </div>
            {!teamDataById.includes('null') &&
              teamDataById[0].status === 'unpaid' && (
                <div className="text-right px-3">
                  <RegEventDropDown>
                    <li
                      onClick={() =>
                        handleCheckout(
                          parseInt(teamDataById[0].amount * 100),
                          props.match.params.event_id,
                          localStorage.getItem('id'),
                          props.match.params.id
                        )
                      }
                    >
                      PAY
                    </li>
                  </RegEventDropDown>
                </div>
              )}

            {teamDataById.map((data, index) => {
              if (data === 'null')
                return (
                  <Panel
                    key={index}
                    className="px-0 mx-auto"
                    style={{ maxWidth: 460 }}
                    header={
                      <div className="row">
                        <div className="col-sm-3 my-auto">
                          {`Player ${index + 1}`}
                        </div>
                        <div className="col-sm-9 ">
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
                    <div className="row mx-1">
                      <div className="col-12 text-center mx-auto">
                        <div className="row shadow-box">
                          <div className="col-1 m-auto">
                            <img
                              src={playerIcon}
                              alt=""
                              className="player-img"
                            />
                          </div>
                          <div className="col-4 m-auto player-text text-left pl-0">
                            Player
                          </div>
                          <div className="col-4 m-auto"></div>

                          <div className="col-2 text-right m-auto mr-0 pr-0">
                            {/* reg event search dropdown */}
                            <RegEventSearchDropDown
                              onClick={async () => {
                                console.log(searchData);
                                setSearchData(null);
                                await setloading(true);
                                await handleSearchChange(
                                  ' ',
                                  Number(props.match.params.division_id),
                                  Number(props.match.params.id)
                                );
                                await setloading(false);
                              }}
                            >
                              <div className=" container row p-0 m-auto search">
                                <div className="col-1 p-0 m-auto">
                                  <img
                                    src={searchIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-11">
                                  <input
                                    className=" form-control  p-0 dropdown-searchbar-search"
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) =>
                                      handleSearchChange(
                                        e.target.value,
                                        Number(props.match.params.division_id),
                                        Number(props.match.params.id)
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <hr
                                style={{
                                  height: 1,
                                  backgroundColor: '#d8d8d8',
                                  marginTop: 7,
                                }}
                              />
                              {loading || searchData === null ? (
                                <LoadingSpinner />
                              ) : Array.isArray(searchData) ? (
                                searchData.map((player, playerIndex) => (
                                  <div
                                    key={playerIndex}
                                    className="container row m-0 hover-list p-0"
                                    onClick={async () => {
                                      await setloading(true);
                                      await addPlayerToTeamFunction(
                                        playerIndex,
                                        player
                                      );
                                      await setloading(false);
                                      // addPlayerToTeamFunction(index, player);
                                      handleSearchChange(' ');
                                    }}
                                  >
                                    <div
                                      className="col-2 m-auto text-center p-0"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                      }}
                                    >
                                      <img
                                        alt="player"
                                        onError={(e) =>
                                          (e.target.src = profilePic)
                                        }
                                        src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${player.pic}`}
                                        style={{
                                          borderRadius: '50%',
                                          width: 25,
                                          height: 25,
                                          backgroundColor: 'black',
                                        }}
                                      />
                                    </div>
                                    <div className="col-6 text-left text-dark address-contact-list-content p-0">
                                      {player.name}
                                    </div>
                                    <div className="col-4 text-right text-dark address-contact-list-content p-0 pr-2">
                                      {`${player.points} pts`}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div>No Player was found</div>
                              )}
                            </RegEventSearchDropDown>
                            {/* <RegEventSearchDropDown
                              setSearchData={() => handleSearchChange(' ')}
                            >
                              <div className=" container row p-0 m-auto search">
                                <div className="col-1 p-0 m-auto">
                                  <img
                                    src={searchIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-11">
                                  <input
                                    className=" form-control  p-0 dropdown-searchbar-search"
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) =>
                                      handleSearchChange(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <hr
                                style={{
                                  height: 1,
                                  backgroundColor: '#d8d8d8',
                                  marginTop: 7,
                                }}
                              />
                              {loading || searchData === null ? (
                                <LoadingSpinner />
                              ) : Array.isArray(searchData) ? (
                                searchData.map((player, playerIndex) => (
                                  <div
                                    key={playerIndex}
                                    className="container row m-0 hover-list p-0"
                                    onClick={() => {
                                      addPlayerToTeamFunction(index, player);
                                      handleSearchChange(' ');
                                    }}
                                  >
                                    <div
                                      className="col-2 m-auto text-center p-0"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                      }}
                                    >
                                      <img
                                        alt="player"
                                        onError={(e) =>
                                          (e.target.src = profilePic)
                                        }
                                        src={`http://fanwins.in/${player.pic}`}
                                        style={{
                                          borderRadius: '50%',
                                          width: 25,
                                          height: 25,
                                          backgroundColor: 'black',
                                        }}
                                      />
                                    </div>
                                    <div className="col-6 text-left text-dark address-contact-list-content p-0">
                                      {player.name}
                                    </div>
                                    <div className="col-4 text-right text-dark address-contact-list-content p-0 pr-2">
                                      {`${player.points} pts`}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div>No Player was found</div>
                              )}
                            </RegEventSearchDropDown> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Panel>
                );
              else {
                return (
                  <Panel
                    className="px-0 mx-auto"
                    style={{ maxWidth: 460 }}
                    header={
                      <div className="row">
                        <div className="col-sm-3 my-auto">
                          {`Player ${index + 1}`}
                        </div>
                        <div className="col-sm-9 ">
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
                    key={index}
                  >
                    <div className="row">
                      <div className="col-12 text-right mx-0 px-0">
                        <RegEventDropDown margin="mr-3">
                          {/* <li>Edit</li> */}
                          <li
                            style={{ color: '#ff2072' }}
                            onClick={() =>
                              removePlayerFromTeamFunction(
                                data.avp_id,
                                Number(props.match.params.id),
                                Number(data.points)
                              )
                            }
                          >
                            Remove
                          </li>
                        </RegEventDropDown>
                      </div>
                      <div className="col-12 mx-0 px-0">
                        <div className="row mr-3">
                          <div className="col-3">
                            <img
                              className="px-0 reg-team-image image-fluid d-flex justify-content-start"
                              src={`${process.env.REACT_APP_PLAYER_COURT_URL}${data.profile_pic}`}
                              onError={(e) => (e.target.src = photoAddIcon)}
                              alt=""
                            />
                          </div>

                          <div className="col-9 mx-0 px-0">
                            <div className="row mx-0 px-0">
                              <div className="col-12 mx-0 px-0 reg-team-first-name d-flex align-items-center">
                                {data.first_name}
                              </div>
                              <hr className="col-12 m-0 px-0 ml-18 hr-color"></hr>
                              <div className="col-12 mx-0 px-0 reg-team-last-name d-flex align-items-center">
                                {data.last_name}
                              </div>
                              <hr className="col-12 m-0 px-0 hr-color"></hr>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 text-left mx-0 px-0 reg-team-heading reg-team-heading-contact">
                        Contact
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center">
                        <img src={mapicon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Location
                      </div>
                      <div className="col-7 mx-0 px-0 d-flex justify-content-end align-items-center reg-team-info-value pr-2 ">
                        {data.city}, {data.state_code}
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center reg-team-info-image">
                        <img src={phoneicon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Phone
                      </div>
                      <div className="col-7 mx-0 px-0 reg-team-info-value pr-2 d-flex justify-content-end align-items-center">
                        {data.contact_no === 'NULL' || data.contact_no === ''
                          ? ''
                          : decrypt(data.contact_no)}
                        {/* <NumberFormat
                          format="### ### ####"
                          displayType="input"
                          value={
                            data.contact_no !== 'NULL' || data.contact_no !== ''
                              ? decrypt(data.contact_no)
                              : ''
                          }
                          style={{
                            height: 'inherit',
                            // direction: 'rtl',
                            textAlign: 'right',
                            fontSize: 14,
                            outline: 'none',
                            border: 0,
                            boxShadow: '0px 0px 0px 0px',
                            fontFamily: 'FuturaMedium',
                            fontWeight: 500,
                            backgroundColor: '#FFFFFF',
                            cursor: 'context-menu',
                          }}
                          disabled
                        /> */}
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center">
                        <img src={mailicon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Email
                      </div>
                      <div className="col-7 mx-0 px-0 reg-team-info-value pr-2 d-flex justify-content-end align-items-center">
                        {data.email_id}
                      </div>
                      <div className="col-12 text-left mx-0 px-0 reg-team-heading2">
                        Details
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center">
                        <img src={pointsicon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Points
                      </div>
                      <div className="col-7 mx-0 px-0 reg-team-info-value pr-2 d-flex justify-content-end align-items-center">
                        {data.Final_points}
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center">
                        <img src={levelicon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Level
                      </div>
                      <div className="col-7 mx-0 px-0 reg-team-info-value pr-2 d-flex justify-content-end align-items-center">
                        {data.level}
                      </div>

                      <div className="col-12 text-left mx-0 px-0 reg-team-heading2">
                        Newest Results
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center">
                        <img src={pointsicon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Points
                      </div>
                      <div className="col-7 mx-0 px-0 reg-team-info-value pr-2 d-flex justify-content-end align-items-center">
                        {data.points}
                      </div>
                      <div className="col-1 mx-0 px-0 reg-team-info-image d-flex align-items-center justify-content-center">
                        <img src={staricon} alt=""></img>
                      </div>
                      <div className="col-4 mx-0 px-0 reg-team-info-name d-flex justify-content-start align-items-center">
                        Placement
                      </div>
                      <div className="col-7 mx-0 px-0 reg-team-info-value pr-2 d-flex justify-content-end align-items-center">
                        {data.placement}
                      </div>
                    </div>
                  </Panel>
                );
              }
            })}
          </Collapse>
        )}
      </div>
    </>
  );
  // return <div>hey</div>;
};

export default RegEventTeamViewComponent;
