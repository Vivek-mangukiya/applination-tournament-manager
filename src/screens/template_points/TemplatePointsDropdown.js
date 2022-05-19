import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/DropdownPoints.css';
import hamburgericon from '../../assets/images/icon-menu-hamburger.svg';

const TemplatePointsDropdown = (props) => {
  const [showDD, setShowDD] = useState(false);

  const refSelect = useRef();
  useOnClickOutside(refSelect, () => setShowDD(false));

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

  return (
    <div
      tabIndex="1"
      id="points-hamburger"
      ref={refSelect}
      style={{ outline: 0 }}
    >
      <div className="">
        <img
          src={hamburgericon}
          alt=""
          style={{ width: 16, height: 16, marginTop: 5 }}
          onClick={() => setShowDD(!showDD)}
        />
        {showDD && (
          <>
            <span style={{ fontFamily: 'FuturaMedium' }} className="">
              <ul
                style={{ fontFamily: 'FuturaMedium' }}
                onClick={() => setShowDD(!showDD)}
              >
                {props.children}
              </ul>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default TemplatePointsDropdown;
