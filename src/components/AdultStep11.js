import React, { useState, useEffect, useContext } from 'react';
import '../assets/styles/WizardFormComponent.css';
import Purse from '../assets/images/purse.svg';
import { DatePicker, TimePicker } from 'antd';
import downArrow from '../assets/images/icon-menu-chevron-down.svg';
import calenderIconRight from '../assets/images/icon-menu-calendar.svg';
import moment from 'moment';
import EventContext from '../context/event/eventContext';

const AdultStep11 = (props) => {
  const eventContext = useContext(EventContext);
  const { earlyBirdDateState } = eventContext;

  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    props.handleChange(moment(startDate).format('YYYY-MM-DD'));
    console.log(
      'Early bird date in modal:',
      moment(startDate).format('YYYY-MM-DD')
    );
  }, [startDate, earlyBirdDateState]);

  console.log(earlyBirdDateState);

  useEffect(() => {
    console.log(earlyBirdDateState);
    if (props.usedComponent === 'Event') {
      setStartDate(earlyBirdDateState);
      props.handleChange(moment(earlyBirdDateState).format('YYYY-MM-DD'));
    }
  }, []);

  if (props.currentStep !== 8) {
    // Prop: The current step
    return null;
  }

  function disabledStartDate(current) {
    return current < moment().startOf('day');
  }

  return (
    <div className="AS9">
      <div>
        {props.EBDateError === true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
        )}
        <h1
          className={
            props.EBDateError === true ? 'HeadingWithError' : 'Heading'
          }
          onClick={() => console.log(props.usedComponent)}
        >
          Please enter early bird date
        </h1>
        <h4 className="Subheading">Input the date below</h4>
        <label htmlFor="LEPrice"></label>
        <div
          className="DropdownBar"
          style={{ justifyContent: 'flex-end', marginTop: 10 }}
        >
          <DatePicker
            format="MM/DD/YYYY"
            style={{
              width: 110,
              color: '#747474',
              justifyContent: 'end',
              display: 'flex',
              cursor: 'pointer',
            }}
            bordered={false}
            suffixIcon={<img src={calenderIconRight} alt="" />}
            className="pr-0 text-uppercase p-0 input-styling date_picker"
            allowClear={false}
            value={startDate}
            onChange={(e) => setStartDate(e)}
            placeholder=""
            popupStyle={{ height: 467, width: 343 }}
            popupStyle={{}}
            disabledDate={disabledStartDate}
          />
        </div>

        <img className="InputPurse" src={Purse} alt=""></img>
        <div className="InputPurseWord">Early Bird Date</div>
      </div>
    </div>
  );
};

export default AdultStep11;
