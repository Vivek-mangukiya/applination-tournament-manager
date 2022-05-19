// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'
// import Purse from '../assets/images/purse.svg'

// class AdultStep8 extends React.Component {
//     render() {
//       if (this.props.currentStep !== 9) { // Prop: The current step
//         return null
//       }
//       // The markup for the Step 1 UI
//       return(
//         <div className="AS8">
//         <div>
//         <h1 className="Heading">What is the price needed for Normal Entry?</h1>
//         <h4 className="Subheading">Input the amount below</h4>
//         <label htmlFor="NEValue"></label>
//         <input
//         className="FormInputR"
//         id="NEValue"
//         name="normalAmount"
//         type="number"
//         min="0"
//         placeholder="00         "
//         value={this.props.email} // Prop: The email input data
//         onChange={this.props.handleChange} // Prop: Puts data into state
//         style={{paddingLeft:50}}
//         />
//         <img className="InputPurse" src={Purse} alt = "" ></img>
//         <div className="InputPurseWord">Normal Entry</div>
//         </div>
//         </div>

//       )
//     }
//   }
// export default AdultStep8;

import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import Purse from '../assets/images/purse.svg';
import NumberFormat from 'react-number-format';

const AdultStep8 = (props) => {
  if (props.currentStep !== 10) {
    // Prop: The current step
    return null;
  }

  const checkForDash = (val) => {
    // if (event.keyCode === 189 || event.keyCode === 109) {
    //   console.log('minus detected');
    //   event.preventDefault()
    // }
    if (val === '-') return;
    else return val;
  };

  return (
    <div className="AS8">
      <div>
        {props.normalPriceError === true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
        )}
        <h1
          className={
            props.normalPriceError === true ? 'HeadingWithError' : 'Heading'
          }
        >
          What is the price needed for Normal Entry?
        </h1>
        <h4 className="Subheading">Input the amount below</h4>
        <label htmlFor="NEValue"></label>
        {/* <input
        className="FormInputR"
        id="NEValue"
        name="normalAmount"
        type="number"
        min="0"
        placeholder="00         "
        value={props.normalAmount} // Prop: The email input data
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
            id="NEValue"
            name="normalAmount"
            onChange={props.handleChange}
            // allowNegative={false}
            // onKeyPress={(e)=>checkForDash(e)}
            // format={checkForDash}
            // onKeyPress={(e)=>{return e.charCode >= 48}}
            // value={purseAmountChoice.replace(/\,/g,'').replace("$", "")}
            value={props.normalAmount}
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
        <div className="InputPurseWord">Normal Entry</div>
      </div>
    </div>
  );
};

export default AdultStep8;
