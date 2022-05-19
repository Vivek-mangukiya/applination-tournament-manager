import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ScoresListComponent from '../../components/ScoresListComponent';
import PoolsSummary from './PoolsSummary';

const ScorePoolMainPage = (props) => {
  const [scoreActive, setScoreActive] = useState(true);
  const [poolActive, setPoolActive] = useState(false);

  const scoreTabClicked = () => {
    setScoreActive(true);
    setPoolActive(false);
  };

  const poolTabClicked = () => {
    setPoolActive(true);
    setScoreActive(false);
  };

  useEffect(() => {
    if (scoreActive) {
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
    if (poolActive) {
      let historyStyle = document.getElementById('history-button');
      historyStyle.style.borderBottom = '2px solid #f1dd8b';
      let historyPstyle = document.getElementById('history-heading-color');
      historyPstyle.style.color = '#4a4a4a';
      let profileStyle = document.getElementById('profile-button');
      profileStyle.style.borderBottom = '2px solid #9b9b9b';
      let profilePstyle = document.getElementById('active-heading-color');
      profilePstyle.style.color = '#9b9b9b';
    }
  }, [scoreActive, poolActive]);

  return (
    <>
      <Header />
      <div
        className="new-event-profile p-0"
        style={{ paddingTop: 32, backgroundColor: '#f9fafc' }}
      >
        <div>
          <div className="wrapper ml-auto mr-auto" style={{ marginTop: 32 }}>
            <div
              tabIndex="1"
              className="profile text-decoration-none"
              id="profile-button"
              onClick={scoreTabClicked}
            >
              <p
                className="p active-profile-subheading"
                id="active-heading-color"
              >
                Score
              </p>
            </div>
            <div
              tabIndex="1"
              className="history text-decoration-none"
              id="history-button"
              onClick={poolTabClicked}
            >
              <p
                className="p active-profile-subheading"
                id="history-heading-color"
              >
                Pool
              </p>
            </div>
          </div>

          {/* menu button */}

          {scoreActive && (
            <ScoresListComponent
              propsHistory={props.history}
              // playerInfo={playerInfo}
              // playerData={playerData}
              // edit={() => props.history.push('/profileEdit')}
            />
          )}
          {poolActive && <PoolsSummary />}
        </div>
      </div>
      <Footer>
        <div className="m-0 col-auto d-flex align-items-center ml-auto">
          <div
            className="NEW_TEMPLATE"
            id="yellow-button-hover"
            onClick={() => props.history.push('/bracket')}
          >
            <div className="NewTemplateButtonText">INITIATE BRACKET</div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default ScorePoolMainPage;
