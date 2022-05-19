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

const SubTileEdit = (props) => {
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
  const [subtile, setSubtile] = useState(
    getTournamentData !== null ? getTournamentData.tournament.sub_title!==null?
    getTournamentData.tournament.sub_title:"" : ''
  );

  const onBlur = (e) => {
    props.textValue(e.target.value);
  };

  const onChange = (e) => {
    setSubtile(e.target.value);
  };
  return (
    <>
      <textarea
        style={{ height:37, resize: 'none' }}
        value={subtile}
        onBlur={onBlur}
        onChange={onChange}
        className="form-control p-0 textarea-style event-description-text"
        id="exampleFormControlTextarea1"
        placeholder="Enter Event Info"
        rows="3"
        maxLength={250}
      ></textarea>
      <div className="text-right description-bottom">
        {subtile.length}/250
      </div>
    </>
  );
};

export default SubTileEdit;
