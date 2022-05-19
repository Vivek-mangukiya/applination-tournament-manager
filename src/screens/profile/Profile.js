import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/header/Header';
import ActiveHistory from './ActiveHistory';
import ActiveProfile from './ActiveProfile';
import './Profile.css';
import backIcon from '../../assets/images/icon-menu-back.svg';

import PlayerProfileContext from '../../context/playerProfile/playerProfileContext';

const Profile = (props) => {
  const playerProfileContext = useContext(PlayerProfileContext);
  const {
    playerInfo,
    playerId,
    playerData,
    getPlayerById,
    playerHistory,
    getPlayerHistory,
  } = playerProfileContext;

  // useEffect(() => {
  //   if (playerInfo === null) {
  //     props.history.push('/profileEdit');
  //   }
  // }, [playerInfo, props.history]);

  // useEffect(() => {
  //   if (playerId !== null) {
  //     console.log("PlayerID in saved screen:",playerId,);
  //     console.log("PlayerData in saved screen:",playerData,);

  //   }
  // }, [playerId]);

  useEffect(() => {
    console.log('Player id by url:', parseInt(props.match.params.id));
    getPlayerById(parseInt(props.match.params.id));
    getPlayerHistory(parseInt(props.match.params.id));
  }, []);

  useEffect(() => {
    if (playerData !== null) console.log('playerData', playerData);
    console.log('PlyerHistory:', playerHistory);
  }, [playerData, playerHistory]);

  const [profileActive, setProfileActive] = useState(true);
  const [historyActive, setHistoryActive] = useState(false);

  const profileTabClicked = () => {
    setProfileActive(true);
    setHistoryActive(false);
  };

  const historyTabClicked = () => {
    setHistoryActive(true);
    setProfileActive(false);
  };

  useEffect(() => {
    if (profileActive) {
      let profileStyle = document.getElementById('profile-button');
      profileStyle.style.borderBottom = '2px solid #f1dd8b';
      // profileStyle.style.color="#4a4a4a";
      let profilePstyle = document.getElementById('active-heading-color');
      profilePstyle.style.color = '#4a4a4a';
      let historyStyle = document.getElementById('history-button');
      historyStyle.style.borderBottom = '2px solid #9b9b9b';
      // historyStyle.style.color="#4a4a4a";
      let historyPstyle = document.getElementById('history-heading-color');
      historyPstyle.style.color = '#9b9b9b';
    }
    if (historyActive) {
      let historyStyle = document.getElementById('history-button');
      historyStyle.style.borderBottom = '2px solid #f1dd8b';
      let historyPstyle = document.getElementById('history-heading-color');
      historyPstyle.style.color = '#4a4a4a';
      let profileStyle = document.getElementById('profile-button');
      profileStyle.style.borderBottom = '2px solid #9b9b9b';
      let profilePstyle = document.getElementById('active-heading-color');
      profilePstyle.style.color = '#9b9b9b';
    }
  }, [profileActive, historyActive]);

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
      <div
        className="new-event-profile container p-0 pb-5"
        style={{ paddingTop: 32, backgroundColor: '#f9fafc' }}
      >
        <div>
          <div className="wrapper ml-auto mr-auto" style={{ marginTop: 32 }}>
            <a
              href="#/"
              className="profile text-decoration-none"
              id="profile-button"
              onClick={profileTabClicked}
            >
              <p
                className="p active-profile-subheading"
                id="active-heading-color"
              >
                Profile
              </p>
            </a>
            <a
              href="#/"
              className="history text-decoration-none"
              id="history-button"
              onClick={historyTabClicked}
            >
              <p
                className="p active-profile-subheading"
                id="history-heading-color"
              >
                History
              </p>
            </a>
          </div>

          {/* menu button */}

          {profileActive && (
            <ActiveProfile
              playerInfo={playerInfo}
              playerData={playerData}
              edit={() => props.history.push('/profileEdit#/')}
            />
          )}
          {historyActive && <ActiveHistory />}
        </div>
      </div>
    </>
  );
};

export default Profile;
