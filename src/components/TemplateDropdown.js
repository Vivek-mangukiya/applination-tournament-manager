import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/DropdownPoints.css';
import downArrow from '../assets/images/icon-menu-chevron-down.svg';
import upArrow from '../assets/images/icon-menu-chevron-up.svg';

const DropdownTemplate = (props) => {

  const [showDD, setShowDD] = useState(false);

  const refSelect = useRef();
  useOnClickOutside(refSelect, () => setShowDD(false));

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
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
      [ref, handler]
    );
  }


  return (
    <a href="#/" id="points-hamburger" className={showDD?"tri_top_visible":"tri_top_hidden"} ref={refSelect} onClick={()=>setShowDD(!showDD)}>
      <div>
        <img
          src={downArrow}
          alt=""
          style={{ width: 16, height: 16, marginTop: 5, }}
          className="ml-2"
        />
        {showDD && (
        <span style={{ fontFamily: 'FuturaMedium', width:450 }} className="">
          <ul style={{ fontFamily: 'FuturaMedium' }}>
            {props.children}
          </ul>
        </span>
        )}
      </div>
    </a>
  );
};

export default DropdownTemplate;