import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import Purse from '../assets/images/purse.svg';
import NumberFormat from 'react-number-format';

const AdultStep7 = (props) => {
  if (props.currentStep !== 9) {
    // Prop: The current step
    return null;
  }
  return (
    <div className="AS7">
      <div>
        {props.EBAmountError === true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
        )}
        <h1
          className={
            props.EBAmountError === true ? 'HeadingWithError' : 'Heading'
          }
        >
          What is the price needed for Early Bird Entry?
        </h1>
        <h4 className="Subheading">Input the amount below</h4>
        <label htmlFor="EBAmount"></label>
        <div className="FormInputR" style={{ marginTop: 10 }}>
          <NumberFormat
            pattern={'[0-9]*'}
            displayType="input"
            thousandSeparator={true}
            placeholder="00"
            prefix={'$'}
            decimalScale={2}
            className="placeholderNumber steps-number-input"
            id="EBAmount"
            name="earlyBirdAmount"
            onChange={props.handleChange}
            // value={purseAmountChoice.replace(/\,/g,'').replace("$", "")}
            value={props.earlyBirdAmount}
            autoComplete="off"
            allowNegative="false"
            style={{
              // direction: 'rtl',
              fontFamily: 'FuturaMedium',
              paddingRight: 5,
              position: 'absolute',
              right: 60,
              bottom: 0,
              height: 32,
              outline: 'none',
              border: 'none',
              textAlign: 'right',
            }}
          />
        </div>
      </div>
      <img className="InputPurse" src={Purse} alt=""></img>
      <div className="InputPurseWord">Early Bird</div>
    </div>
  );
};

export default AdultStep7;
