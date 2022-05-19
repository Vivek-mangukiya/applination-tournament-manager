import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/DropdownPoints.css';
import iconadd from '../assets/images/icon-menu-add.svg';

const RegEventSearchDropDown = (props) => {
  const [showDD, setShowDD] = useState(false);

  const refSelect = useRef();
  useOnClickOutside(refSelect, () => {
    setShowDD(false);
  });

  // useEffect(() => {
  //   if (!showDD) {
  //     // props.setSearchData();
  //     props.setPlayersToNull();
  //   }
  // }, []);

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
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
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  // console.log(props.new);

  return (
    <div
      tabIndex="1"
      id="points-hamburger"
      ref={refSelect}
      style={{ outline: 0 }}
    >
      <div className="">
        <img
          src={props.img !== undefined ? props.img : iconadd}
          alt=""
          style={{ width: 16, height: 16 }}
          onClick={() => {
            setShowDD(!showDD);
            props.onClick();
          }}
        />
        {showDD && (
          <span
            style={{
              fontFamily: 'FuturaMedium',
              maxHeight: 280,
              width: 432,
              overflowY: 'auto',
            }}
            className=""
          >
            {props.children}
          </span>
        )}
      </div>
    </div>
  );
};

export default RegEventSearchDropDown;
