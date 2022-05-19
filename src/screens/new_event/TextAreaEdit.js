// import React, { useContext, useState } from 'react';
// import EventContext from '../../context/event/eventContext';

// const TextAreaEdit = (props) => {
//   // context
//   const eventContext = useContext(EventContext);
//   const { eventInfo } = eventContext;
//   const [description, setDescription] = useState(
//     eventInfo !== null ? eventInfo.description : ''
//   );

//   const onBlur = (e) => {
//     props.textValue(e.target.value);
//   };

//   const onChange = (e) => {
//     setDescription(e.target.value);
//   };
//   return (
//     <textarea
//       value={description}
//       onBlur={onBlur}
//       onChange={onChange}
//       className="form-control p-0 textarea-style"
//       id="exampleFormControlTextarea1"
//       rows="3"
//       maxLength="530"
//     ></textarea>
//   );
// };

// export default TextAreaEdit;

import React, { useState, useContext, useEffect } from 'react';
import EventContext from '../../context/event/eventContext';
import './NewEventProfile.css';

const TextAreaInput = (props) => {
  const eventContext = useContext(EventContext);
  const {
    eventInfo,
    //event id
    eventId,
    //get tournament by id
    getTournamentById,
    //get tournament data
    getTournamentData,
  } = eventContext;

  //api call
  useEffect(() => {
    if (eventId !== null) {
      getTournamentById(eventId);
      console.log(getTournamentData);
    }

    //eslint-disable-next-line
  }, []);
  const [description, setDescription] = useState(
    getTournamentData !== null ? getTournamentData.tournament.description : ''
  );

  const onBlur = (e) => {
    props.textValue(e.target.value);
  };

  const onChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>




      <textarea
        style={{ height: 160, resize: 'none' }}
        value={description}
        onBlur={onBlur}
        onChange={onChange}
        className="form-control p-0 textarea-style event-description-text"
        id="exampleFormControlTextarea1"
        placeholder="Enter Event Info"
        rows="3"
        maxLength={1000}
      ></textarea>
      <div className="text-right description-bottom">
        {description.length}/1000
      </div>
    </>
  );
};

export default TextAreaInput;
