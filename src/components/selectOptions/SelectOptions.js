import React, {useState, useRef, useEffect} from 'react';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';

const SelectOptions = (props) => {

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
    <a href="#/" id="score-hamburger" ref={refSelect} onClick={()=>setShowDD(!showDD)}
    className={showDD?"tri_top_event_visible":"tri_top_event_hidden"}>
      <div>
        <img src={downArrow} alt="" />
        {showDD && (
        <span style={{ marginTop:7, right:-10 }} className="dropdown_animation">
          <ul>
            <li onClick={props.yesChoice}>Yes</li>
            <li onClick={props.noChoice}>No</li>
          </ul>
        </span>
        )}
      </div>
    </a>
  );
};

export default SelectOptions;
