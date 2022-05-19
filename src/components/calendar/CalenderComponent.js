import React, { useState } from 'react';
import tickIcon from '../../assets/images/button-radio-grey-tick.svg';
import Calendar from 'react-calendar';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
import moment from 'moment';
// import { DatePicker } from 'rsuite';

const CalenderComponent = (props) => {
  const [value, setValue] = useState(null);

  const onClick = () => {
    if (value === '' || value === null) {
      return;
    } else {
      props.date(moment(value).format('YYYY-MM-DD'));
    }
  };
  return (
    <a href="#/" id="score-hamburger">
      <div>
        <img src={calenderIconRight} alt="" />
        <span style={{ width: 400 }}>
          <span>
            {/* <DatePicker style={{ width: 280 }} value={value} onChange={setValue}/> */}
            <Calendar
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
  );
};

export default CalenderComponent;
