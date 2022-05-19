// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'

// class JuniorStep1 extends React.Component {
//     render() {
//       if (this.props.currentStep !== 12) { // Prop: The current step
//         return null
//       }
//       // The markup for the Step 1 UI
//       return(
//         <div className="AS1">
//         <h1 className="AS1Heading">What gender group(s) are needed for this Division?</h1>
//         <h4 className="Subheading">Make selections based on the options below</h4>
//         {/* <Application/> */}
//         <div className="JGenderSection">
//         <div className="">
//         <label htmlFor="JgenderInput" className="AS1checkbox JgenderInput">
//             <input
//               className="form-control"
//               id="JgenderInput1"
//               name="Boys"
//               type="checkbox"
//               value="Boys"
//               onChange={this.props.onjCheck} // Prop: Puts data into state
//               checked={this.props.jselectedGender[0].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label '>Boys</span>
//           </label>
//         </div>
//         <div className="JSgirls">
//           <label htmlFor="JgenderInput" className="AS1checkbox">
//             <input
//               className="form-control"
//               id="JgenderInput2"
//               name="Girls"
//               type="checkbox"
//               value="Girls"
//               onChange={this.props.onjCheck} // Prop: Puts data into state
//               checked={this.props.jselectedGender[1].checked}
//             />
//             <span className="AS1checkmark WomensCheck"></span>
//             <span className='AS1label '>Girls</span>
//           </label>
//         </div>
//         <div className="JScoed">
//           <label htmlFor="JgenderInput" className="AS1checkbox">
//             <input
//               className="form-control"
//               id="JgenderInput3"
//               name="Coed"
//               type="checkbox"
//               value="Coed"
//               onChange={this.props.onjCheck} // Prop: Puts data into state
//               checked={this.props.jselectedGender[2].checked}
//             />
//             <span className="AS1checkmark CoedCheck"></span>
//             <span className='AS1label '>Co-ed</span>
//           </label>
//         </div>
//         </div>
//       </div>
//       )
//     }
//   }
// export default JuniorStep1;

import React,{useState,useEffect} from 'react';
import '../assets/styles/WizardFormComponent.css'

const JuniorStep1 = (props) => {
  if (props.currentStep !== 13) { // Prop: The current step
    return null
  }
  return(
            <div className="AS1">
            {props.jGenderError===true && (
              <h2 className="TemplateNameTakenCB">Please enter a value</h2>
            )}
            <h1 className={props.jGenderError === true? "AS1HeadingWithError" : "AS1Heading"}>What gender group(s) are needed for this Division?</h1>
            <h4 className="Subheading">Make selections based on the options below</h4>
            {/* <Application/> */}
            <div className="JGenderSection">
            <div className="">
            <label htmlFor="JgenderInput" className="AS1checkbox JgenderInput">
                <input
                  className="form-control"
                  id="JgenderInput1"
                  name="Boys"
                  type="checkbox"
                  value="Boys"
                  onChange={props.onjCheck} // Prop: Puts data into state
                  checked={props.jselectedGender[0].checked}
                />
                <span className="AS1checkmark MensCheck"></span>
                <span className='AS1label '>Boys</span>
              </label>
            </div>
            <div className="JSgirls">
              <label htmlFor="JgenderInput" className="AS1checkbox">
                <input
                  className="form-control"
                  id="JgenderInput2"
                  name="Girls"
                  type="checkbox"
                  value="Girls"
                  onChange={props.onjCheck} // Prop: Puts data into state
                  checked={props.jselectedGender[1].checked}
                />
                <span className="AS1checkmark WomensCheck"></span>
                <span className='AS1label '>Girls</span>
              </label>
            </div>
            <div className="JScoed">
              <label htmlFor="JgenderInput" className="AS1checkbox">
                <input
                  className="form-control"
                  id="JgenderInput3"
                  name="Coed"
                  type="checkbox"
                  value="Coed"
                  onChange={props.onjCheck} // Prop: Puts data into state
                  checked={props.jselectedGender[2].checked}
                />
                <span className="AS1checkmark CoedCheck"></span>
                <span className='AS1label '>Co-ed</span>
              </label>
            </div>
            </div>
          </div>
          )
}

export default JuniorStep1;