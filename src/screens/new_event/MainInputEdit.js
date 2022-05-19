// import React, { useContext, useState } from 'react';
// import clearIcon from '../../assets/images/icons-x-input.svg';
// import EventContext from '../../context/event/eventContext';

// const MainInputEdit = (props) => {
//   // context
//   const eventContext = useContext(EventContext);
//   const { eventInfo } = eventContext;

//   const [eventName, setEventName] = useState(
//     eventInfo !== null ? eventInfo.eventName : ''
//   );

//   const onBlur = (e) => {
//     props.textValue(e.target.value);
//   };

//   const onChange = (e) => {
//     setEventName(e.target.value);
//   };
//   return (
//     <div style={{ display: 'flex', flexDirection: 'row' }}>
//       <div>
//         <input
//           type="text"
//           value={eventName}
//           onBlur={onBlur}
//           onChange={onChange}
//           placeholder="Event Name"
//           className="form-control event-input"
//         />
//       </div>
//       <div className="mt-auto mb-auto ml-auto">
//         <img
//           src={clearIcon}
//           alt=""
//           style={{ width: 10, cursor: 'pointer' }}
//           onClick={() => setEventName('')}
//         />
//       </div>
//     </div>
//   );
// };

// export default MainInputEdit;

import React, { useState, useEffect, useContext } from 'react';
import clearIcon from '../../assets/images/icons-x-input.svg';
import EventContext from '../../context/event/eventContext';

const MainInputEdit = (props) => {
  const eventContext = useContext(EventContext);
  const {
    eventInfo,
    //event id
    eventId,
    //get tournament by id
    getTournamentById,
    //get tournament data
    getTournamentData,
    UpdateEventId,
  } = eventContext;

  //api call
  useEffect(() => {
    // UpdateEventId(null);
    if (eventId !== null) {
      getTournamentById(eventId);
      console.log(getTournamentData);
    }

    //eslint-disable-next-line
  }, []);
  const [eventName, setEventName] = useState(
    getTournamentData !== null ? getTournamentData.tournament.name : ''
  );

  const onBlur = (e) => {
    props.textValue(e.target.value);
  };

  const onChange = (e) => {
    setEventName(e.target.value);
  };
  return (
    <>
        {/* {props.nameError !== null && (
      <div className="text-left error-message-profile">
        {props.nameError}
      </div>
    )} */}
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <input
          type="text"
          value={eventName}
          onBlur={onBlur}
          onChange={onChange}
          placeholder="EVENT NAME"
          className="form-control event-input"
        />
      </div>
      <div className="mt-auto mb-auto ml-auto">
        <img
          src={clearIcon}
          alt=""
          style={{ width: 10, cursor: 'pointer' }}
          onClick={() => setEventName('')}
        />
      </div>
    </div>
    </>
  );
};

export default MainInputEdit;

