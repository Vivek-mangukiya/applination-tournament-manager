// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'

// class JuniorStep3 extends React.Component {
//     render() {
//       if (this.props.currentStep !== 14) { // Prop: The current step
//         return null
//       }
//       // The markup for the Step 1 UI
//       return(
//         <div className="AS2">
//         <h1 className="AS1Heading">What is the skill levels needed for this Division?</h1>
//         <h4 className="Subheading">Pick the best fits for the needed experiance </h4>
//         <div className="FormJSkillFlex">
//         <div className="FormJSkillFlex1">
//         <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput1"
//               name="Club"
//               type="checkbox"
//               value="Club"
//               onChange={this.props.onjSkillCheck} // Prop: Puts data into state
//               checked={this.props.jselectedSkill[0].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>Club</span>
//           </label>

//           <label className="AS1checkbox WomensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput2"
//               name="High School"
//               type="checkbox"
//               value="High School"
//               onChange={this.props.onjSkillCheck} // Prop: Puts data into state
//               checked={this.props.jselectedSkill[1].checked}
//             />
//             <span className="AS1checkmark WomensCheck"></span>
//             <span className='AS1label'>High School</span>
//           </label>

//           <label className="AS1checkbox CoedLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput3"
//               name="Gold"
//               type="checkbox"
//               value="Gold"
//               onChange={this.props.onjSkillCheck} // Prop: Puts data into state
//               checked={this.props.jselectedSkill[2].checked}
//             />
//             <span className="AS1checkmark CoedCheck"></span>
//             <span className='AS1label'>Gold</span>
//           </label>
// </div>
// <div className="FormJSkillFlex2">
//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput4"
//               name="Silver"
//               type="checkbox"
//               value="Silver"
//               onChange={this.props.onjSkillCheck} // Prop: Puts data into state
//               checked={this.props.jselectedSkill[3].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label '>Silver</span>
//           </label>

//           <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
//             <input
//               className="form-control"
//               id="JAgeRangeInput5"
//               name="Bronze"
//               type="checkbox"
//               value="Bronze"
//               onChange={this.props.onjSkillCheck} // Prop: Puts data into state
//               checked={this.props.jselectedSkill[4].checked}
//             />
//             <span className="AS1checkmark MensCheck"></span>
//             <span className='AS1label'>Bronze</span>
//           </label>
//           </div>
//         </div>
//       </div>  
        
//       )
//     }
//   }
// export default JuniorStep3;

import React,{useState,useEffect} from 'react';
import '../assets/styles/WizardFormComponent.css'

const JuniorStep3 = (props) => {
  if (props.currentStep !== 15) { // Prop: The current step
    return null
  }
  return(
        <div className="AS2">
          {props.jSkillError===true && (
            <h2 className="TemplateNameTakenCB">Please enter a value</h2>
          )}
        <h1 className={props.jSkillError === true? "AS1HeadingWithError" : "AS1Heading"}>What is the skill level needed for this Division?</h1>
        <h4 className="Subheading">Pick the best fits for the needed experience </h4>
        <div className="FormJSkillFlex">
        <div className="FormJSkillFlex1">
        <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput1"
              name="Club"
              type="checkbox"
              value="Club"
              onChange={props.onjSkillCheck} // Prop: Puts data into state
              checked={props.jselectedSkill[0].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className='AS1label'>Club</span>
          </label>

          <label className="AS1checkbox WomensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput2"
              name="High School"
              type="checkbox"
              value="High School"
              onChange={props.onjSkillCheck} // Prop: Puts data into state
              checked={props.jselectedSkill[1].checked}
            />
            <span className="AS1checkmark WomensCheck"></span>
            <span className='AS1label'>High School</span>
          </label>

          <label className="AS1checkbox CoedLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput3"
              name="Gold"
              type="checkbox"
              value="Gold"
              onChange={props.onjSkillCheck} // Prop: Puts data into state
              checked={props.jselectedSkill[2].checked}
            />
            <span className="AS1checkmark CoedCheck"></span>
            <span className='AS1label'>Gold</span>
          </label>
          </div>
          <div className="FormJSkillFlex2">
          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput4"
              name="Silver"
              type="checkbox"
              value="Silver"
              onChange={props.onjSkillCheck} // Prop: Puts data into state
              checked={props.jselectedSkill[3].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className='AS1label '>Silver</span>
          </label>

          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput5"
              name="Bronze"
              type="checkbox"
              value="Bronze"
              onChange={props.onjSkillCheck} // Prop: Puts data into state
              checked={props.jselectedSkill[4].checked}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className='AS1label'>Bronze</span>
          </label>
          </div>
        </div>
      </div> 
  )
}

export default JuniorStep3;

