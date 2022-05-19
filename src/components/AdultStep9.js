// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'
// import Purse from '../assets/images/purse.svg'

// class AdultStep9 extends React.Component {
//     render() {
//       if (this.props.currentStep !== 10) { // Prop: The current step
//         return null
//       }
//       // The markup for the Step 1 UI
//       return(
//         <div className="AS9">
//         <div>
//         <h1 className="Heading">What is the price needed for Late Entry?</h1>
//         <h4 className="Subheading">Input the amount below</h4>
//         <label htmlFor="LEPrice"></label>
//         <input
//         className="FormInputR"
//         id="LEPrice"
//         name="lateAmount"
//         type="number"
//         min="0"
//         placeholder="00       "
//         value={this.props.lateAmount} // Prop: The email input data
//         onChange={this.props.handleChange} // Prop: Puts data into state
//         style={{paddingLeft:50}}
//         />
//         <img className="InputPurse" src={Purse} alt = ""></img>
//         <div className="InputPurseWord">Late Entry</div>
//         </div>
//         </div>

//       )
//     }
//   }
// export default AdultStep9;

import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import Purse from '../assets/images/purse.svg';
import NumberFormat from 'react-number-format';

const AdultStep9 = (props) => {
  if (props.currentStep !== 11) {
    // Prop: The current step
    return null;
  }
  return (
    <div className="AS9">
      <div>
        {props.latePriceError === true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
        )}
        <h1
          className={
            props.latePriceError === true ? 'HeadingWithError' : 'Heading'
          }
        >
          What is the price needed for Late Entry?
        </h1>
        <h4 className="Subheading">Input the amount below</h4>
        <label htmlFor="LEPrice"></label>
        {/* <input
        className="FormInputR"
        id="LEPrice"
        name="lateAmount"
        type="number"
        min="0"
        placeholder="00       "
        value={props.lateAmount} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
        style={{paddingLeft:50}}
        /> */}
        <div className="FormInputR" style={{ marginTop: 10 }}>
          <NumberFormat
            pattern={'[0-9]*'}
            displayType="input"
            thousandSeparator={true}
            placeholder="00"
            prefix={'$'}
            decimalScale={2}
            className="placeholderNumber steps-number-input"
            id="LEPrice"
            min="0"
            name="lateAmount"
            onChange={props.handleChange}
            // value={purseAmountChoice.replace(/\,/g,'').replace("$", "")}
            value={props.lateAmount}
            autoComplete="off"
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
        <img className="InputPurse" src={Purse} alt=""></img>
        <div className="InputPurseWord">Late Entry</div>
      </div>
    </div>
  );
};

export default AdultStep9;
