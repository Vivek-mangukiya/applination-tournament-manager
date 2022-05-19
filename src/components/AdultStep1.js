// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'

// class AdultStep1 extends React.Component {

//   render() {
//     if (this.props.currentStep !== 2) { // Prop: The current step
//       return null
//     }

//     // The markup for the Step 1 UI
//     return(
//       <div className="AS1">
//         <h1 className="AS1Heading">What gender group(s) are needed for this Division?</h1>
//         <h4 className="Subheading">Make selections based on the options below</h4>
//         <div className="FormGenderFlex">
//         <label className="AS1checkbox MensLabel" htmlFor="genderInputM">
//             <input
//               className="form-control"
//               // id="genderInputM"
//               id="genderInputM"
//               name="Mens"
//               type="checkbox"
//               value="Mens"
//               onChange={this.props.onCheck} // Prop: Puts data into state
//               checked={this.props.selectedGender[0].checked}
//             />
//             <span className="AS1checkmark"></span>
//             <span className='AS1label'>Mens</span>
//           </label>
//           <label className="AS1checkbox WomensLabel"htmlFor="genderInputW">
//             <input
//               className="form-control"
//               id="genderInputW"
//               name="Womens"
//               type="checkbox"
//               value="Womens"
//               onChange={this.props.onCheck} // Prop: Puts data into state
//               checked={this.props.selectedGender[1].checked}
//             />
//             <span className="AS1checkmark"></span>
//             <span className='AS1label'>Womens</span>
//           </label>
//           <label className="AS1checkbox CoedLabel"htmlFor="genderInputC">
//             <input
//               className="form-control"
//               id="genderInputC"
//               name="Coed"
//               type="checkbox"
//               value="Coed"
//               onChange={this.props.onCheck} // Prop: Puts data into state
//               checked={this.props.selectedGender[2].checked}
//             />
//             <span className="AS1checkmark"></span>
//             <span className='AS1label'>Co-ed</span>
//           </label>
//         </div>
//       </div>
//     )
//   }
// }
// export default AdultStep1;

import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';

const AdultStep1 = (props) => {
  if (props.currentStep !== 2) {
    // Prop: The current step
    return null;
  }
  console.log('gendererror', props.genderError);
  return (
    <div className="AS1">
      {props.genderError === true && (
        <h2 className="TemplateNameTakenCB">Please enter a value</h2>
      )}
      <h1
        className={
          props.genderError === true ? 'HeadingWithErrorCB' : 'AS1Heading'
        }
      >
        What gender group(s) are needed for this Division?
      </h1>
      <h4 className="Subheading">Make selections based on the options below</h4>
      <div className="FormGenderFlex">
        <label className="AS1checkbox MensLabel" htmlFor="genderInputM">
          <input
            className="form-control"
            // id="genderInputM"
            id="genderInputM"
            name="Mens"
            type="checkbox"
            value="Mens"
            onChange={props.onCheck} // Prop: Puts data into state
            checked={props.selectedGender[0].checked}
          />
          <span className="AS1checkmark"></span>
          <span className="AS1label">Men's</span>
        </label>
        <label className="AS1checkbox WomensLabel" htmlFor="genderInputW">
          <input
            className="form-control"
            id="genderInputW"
            name="Womens"
            type="checkbox"
            value="Womens"
            onChange={props.onCheck} // Prop: Puts data into state
            checked={props.selectedGender[1].checked}
          />
          <span className="AS1checkmark"></span>
          <span className="AS1label">Women's</span>
        </label>
        {props.age !== 'Dinosaur' && (
          <label className="AS1checkbox CoedLabel" htmlFor="genderInputC">
            <input
              className="form-control"
              id="genderInputC"
              name="Coed"
              type="checkbox"
              value="Coed"
              onChange={props.onCheck} // Prop: Puts data into state
              checked={props.selectedGender[2].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">Co-ed</span>
          </label>
        )}
      </div>
    </div>
  );
};

export default AdultStep1;
