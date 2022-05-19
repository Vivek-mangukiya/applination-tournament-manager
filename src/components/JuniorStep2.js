// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'

// class JuniorStep2 extends React.Component {
//     render() {
//       if (this.props.currentStep !== 13) { // Prop: The current step
//         return null
//       }
//       // The markup for the Step 1 UI
//       return(
//         <div className="AS2">
//         <h1 className="AS1Heading">What is the age range needed for this Division?</h1>
//         <h4 className="Subheading">Choose from a list of classifications below</h4>
//         <div className="FormJAgeFlex">
//         <div className="FormJAgeFlex1">
//         <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput1"
//               name="11U"
//               type="checkbox"
//               value="11U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[0].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>11U</span>
//           </label>

//           <label className="AS1checkbox WomensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput2"
//               name="12U"
//               type="checkbox"
//               value="12U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[1].checked}
//             />
//             <span className="AS1checkmark WomensCheck"></span>
//             <span className='AS1label'>12U</span>
//           </label>

//           <label className="AS1checkbox CoedLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput3"
//               name="13U"
//               type="checkbox"
//               value="13U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[2].checked}
//             />
//             <span className="AS1checkmark CoedCheck"></span>
//             <span className='AS1label'>13U</span>
//           </label>
//           </div>
//           <div className="FormJAgeFlex2">
//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput4"
//               name="14U"
//               type="checkbox"
//               value="14U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[3].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>14U</span>
//           </label>

//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput5"
//               name="15U"
//               type="checkbox"
//               value="15U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[4].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>15U</span>
//           </label>

//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput6"
//               name="16U"
//               type="checkbox"
//               value="16U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[5].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>16U</span>
//           </label>
// </div>
// <div className="FormJAgeFlex3">
//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput7"
//               name="17U"
//               type="checkbox"
//               value="17U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[6].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>17U</span>
//           </label>

//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput8"
//               name="18U"
//               type="checkbox"
//               value="18U"
//               onChange={this.props.onjAgeCheck} // Prop: Puts data into state
//               checked={this.props.jselectedAgeRange[7].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>18U</span>
//           </label>
//           </div>
//         </div>
//         </div>

//       )
//     }
//   }
// export default JuniorStep2;

import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import JuniorStep1 from './JuniorStep1';

const JuniorStep2 = (props) => {
  if (props.currentStep !== 14) {
    // Prop: The current step
    return null;
  }
  return (
    <div className="AS2">
      {props.jAgeRangeError === true && (
        <h2 className="TemplateNameTakenCB">Please enter a value</h2>
      )}
      <h1
        className={
          props.jAgeRangeError === true ? 'AS1HeadingWithError' : 'AS1Heading'
        }
        onClick={() => {
          console.log(props.jselectedAgeRange);
        }}
      >
        What is the age range needed for this Division?
      </h1>
      <h4 className="Subheading">
        Choose from a list of classifications below
      </h4>
      <div className="FormJAgeFlex">
        <div className="FormJAgeFlex1">
          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput1"
              name="11U"
              type="checkbox"
              value="11U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[0].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label">11U</span>
          </label>

          <label className="AS1checkbox WomensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput2"
              name="12U"
              type="checkbox"
              value="12U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[1].checked}
            />
            <span className="AS1checkmark WomensCheck"></span>
            <span className="AS1label">12U</span>
          </label>

          <label className="AS1checkbox CoedLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput3"
              name="13U"
              type="checkbox"
              value="13U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[2].checked}
            />
            <span className="AS1checkmark CoedCheck"></span>
            <span className="AS1label">13U</span>
          </label>
        </div>
        <div className="FormJAgeFlex2">
          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput4"
              name="14U"
              type="checkbox"
              value="14U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[3].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label">14U</span>
          </label>

          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput5"
              name="15U"
              type="checkbox"
              value="15U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[4].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label">15U</span>
          </label>

          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput6"
              name="16U"
              type="checkbox"
              value="16U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[5].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label">16U</span>
          </label>
        </div>
        <div className="FormJAgeFlex3">
          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput7"
              name="17U"
              type="checkbox"
              value="17U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[6].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label">17U</span>
          </label>

          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput8"
              name="18U"
              type="checkbox"
              value="18U"
              onChange={props.onjAgeCheck} // Prop: Puts data into state
              checked={props.jselectedAgeRange[7].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label">18U</span>
          </label>

          {(props.age === 'Mother-Son' ||
            props.age === 'Mother-Daughter' ||
            props.age === 'Father-Son' ||
            props.age === 'Father-Daughter') && (
            <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
              <input
                className="form-control"
                id="JAgeRangeInput8"
                name="15+"
                type="checkbox"
                value="15+"
                onChange={props.onjAgeCheck} // Prop: Puts data into state
                checked={props.jselectedAgeRange[8].checked}
              />
              <span className="AS1checkmark MensCheck"></span>
              <span className="AS1label">15+</span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};
export default JuniorStep2;
