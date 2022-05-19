import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import RegContext from '../context/registration/RegContext';
import '../assets/styles/RegEventComponent.css';

const RegEventComponentModal = (props) => {
  const regContext = useContext(RegContext);
  const {
    registeredDivisionsData,
    registeredDivisionsDataLoading,
    changeDivisionForTeam,
    changeDivisionResponse,
    changeDivisionResponseLoading,
  } = regContext;
  const [data, setData] = useState(null);

  useEffect(() => {
    setData([...Array(100).keys()]);
  }, []);

  const changeDivisionForTeamFunction = async (teamId, divId) => {
    await changeDivisionForTeam({ team_id: teamId, division_id: divId });
  };

  // useEffect(() => {
  //   if (registeredDivisionsData !== null) {
  //     console.log(registeredDivisionsData);
  //   }
  // }, [registeredDivisionsData]);

  return (
    <Modal
      open={props.openModal}
      onClose={props.onCloseModal}
      // closeIcon={closeIcon}
      center
      styles={{
        modal: {
          borderRadius: 12,
          boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          margin: 0,
          padding: 0,
          height: '80vh',
          width: '80vw',
          overflow: 'hidden',
        },
      }}
    >
      <div
        className="text-center"
        style={{
          marginTop: 42,
          fontFamily: 'Futura',
          fontSize: 20,
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          letterSpacing: 'normal',
          color: '#4a4a4a',
        }}
      >
        {props.modalData.team_name}
      </div>
      <div
        className="text-center mt-2 mb-4"
        style={{ fontFamily: 'Futura', fontSize: 12, color: '#9b9b9b' }}
      >
        {' '}
        Select the division you want to move the team to..
      </div>
      {changeDivisionResponse !== null && (
        <div className="text-center mt-5" style={{ color: '#ff2072' }}>
          {changeDivisionResponse}
        </div>
      )}
      {registeredDivisionsDataLoading && (
        <div className="text-center mt-5">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {registeredDivisionsData !== null &&
        typeof registeredDivisionsData === 'string' && (
          <div className="text-center mt-5" style={{ color: '#ff2072' }}>
            {registeredDivisionsData}
          </div>
        )}

      {registeredDivisionsData !== null &&
        Array.isArray(registeredDivisionsData) && (
          <ul
            className="list-group mt-2"
            style={{
              overflow: 'scroll',
              height: 'inherit',
              paddingBottom: '100px',

              pointerEvents: changeDivisionResponseLoading ? 'none' : 'auto',
              opacity: changeDivisionResponseLoading ? 0.5 : 1,
            }}
          >
            {registeredDivisionsData !== null &&
              Array.isArray(registeredDivisionsData) &&
              registeredDivisionsData.map((data, index) => (
                <li
                  className="list-group-item reg-div-list-element"
                  key={index}
                  onClick={() =>
                    changeDivisionForTeamFunction(
                      props.modalData.team_id,
                      data.id
                    )
                  }
                >
                  {data.div_name}
                </li>
              ))}
          </ul>
        )}

      {/* <ul
        className="list-group"
        style={{ overflow: 'scroll', height: 'inherit' }}
      >
        {data !== null &&
          data.map((data, index) => (
            <li className="list-group-item" key={data}>
              {data}
            </li>
          ))}
      </ul> */}
    </Modal>
  );
};

export default RegEventComponentModal;
