import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';
import tickIcon from '../../assets/images/button-radio-grey-tick.svg';
const TimeComponent = (props) => {
  const [value, setValue] = useState('');

  const onClick = () => {
    if (value === '' || value === null) {
      return;
    } else {
      props.time(value);
    }
  };
  return (
    <a href="#/" id="score-hamburger">
      <div>
        <img src={downArrow} alt="" />
        <span style={{ width: 400 }}>
          <span>
            <TimePicker
              onChange={setValue}
              value={value}
              className="react-calendar"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  display: 'flex',
                  flexDirection: 'row',
                  cursor: 'pointer',
                }}
              >
                {' '}
                <div>
                  <img src={tickIcon} alt="" />
                </div>{' '}
                <div>CANCEL</div>
              </div>
              <div
                onClick={onClick}
                style={{
                  fontSize: 15,
                  display: 'flex',
                  flexDirection: 'row',
                  cursor: 'pointer',
                }}
              >
                {' '}
                <div>
                  <img src={tickIcon} alt="" />
                </div>{' '}
                <div>SAVE</div>
              </div>
            </div>
          </span>
        </span>
      </div>
    </a>
    // <span className="htmlHigh">
    //   <div className="tooltip2-date">
    //     <img alt="menu" src={downArrow} className="Icon-Menu-Hamburger" />
    //     <span className="tooltiptext2-date" style={{ width: 400 }}>
    //       <span className="tooltiptext2-text-date">
    // <TimePicker
    //   onChange={setValue}
    //   value={value}
    //   className="react-calendar"
    // />
    //         <div
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             marginTop: 10,
    //           }}
    //         >
    //           <div
    //             style={{
    //               fontSize: 15,
    //               display: 'flex',
    //               flexDirection: 'row',
    //               cursor: 'pointer',
    //             }}
    //           >
    //             {' '}
    //             <div>
    //               <img src={tickIcon} alt="" />
    //             </div>{' '}
    //             <div>CANCEL</div>
    //           </div>
    //           <div
    //             onClick={onClick}
    //             style={{
    //               fontSize: 15,
    //               display: 'flex',
    //               flexDirection: 'row',
    //               cursor: 'pointer',
    //             }}
    //           >
    //             {' '}
    //             <div>
    //               <img src={tickIcon} alt="" />
    //             </div>{' '}
    //             <div>SAVE</div>
    //           </div>
    //         </div>
    //       </span>
    //     </span>
    //   </div>
    // </span>
  );
};

export default TimeComponent;
