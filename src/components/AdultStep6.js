// import React from 'react';
// import '../assets/styles/WizardFormComponent.css'

// class AdultStep6 extends React.Component {
//     render() {
//       if (this.props.currentStep !== 7) { // Prop: The current step
//         return null
//       }
//       // The markup for the Step 1 UI
//       return(
//         <div className="AS1checkbox">
//           <h1 className="AS1Heading">Will these Divisions need an Early Bird entry?</h1>
//           <h4 className="Subheading">Selecting yes will allow you to enter an Early Bird price</h4>
//           <div className="AdultRadio">
//           <label className="AS1checkbox" htmlFor=" EBInputY" value={this.props.earlyBird}>
//             <input
//               className="form-control"
//               id="EBInputY"
//               name="earlyBird"
//               type="radio"
//               value="Yes" // Prop: The email input data
//               onChange={this.props.handleChange} // Prop: Puts data into state
//               checked={this.props.earlyBird==="Yes"}
//             />
//             <span className="AS1checkmark"id=" YesCheck"></span>
//             <span className='AS1label YesLabel'>Yes</span>
//           </label>
//           <label className="AS1checkbox" htmlFor="EBInputN">
//           <input
//             className="form-control"
//             id="EBInputN"
//             name="earlyBird"
//             type="radio"
//             value="No" // Prop: The email input data
//             onChange={this.props.handleChange} // Prop: Puts data into state
//             checked={this.props.earlyBird==="No"}
//           />
//             <span className="AS1checkmark NoCheck"></span>
//             <span className='AS1label NoLabel'>No</span>
//           </label>
//           </div> 
//         </div>
        
        
//       )
//     }
//   }
// export default AdultStep6;

import React,{useState,useEffect} from 'react';
import '../assets/styles/WizardFormComponent.css'

const AdultStep6 = (props) => {
  if (props.currentStep !== 7) { // Prop: The current step
    return null
  }
  return(
          <div className="AS1checkbox">
          <h1 className="AS1Heading">Will these Divisions need an Early Bird entry?</h1>
          <h4 className="Subheading">Selecting yes will allow you to enter an Early Bird price</h4>
          <div className="AdultRadio">
          <label className="AS1checkbox" htmlFor=" EBInputY" value={props.earlyBird}>
            <input
              className="form-control"
              id="EBInputY"
              name="earlyBird"
              type="radio"
              value="Yes" // Prop: The email input data
              onChange={props.handleChange} // Prop: Puts data into state
              checked={props.earlyBird==="Yes"}
            />
            <span className="AS1checkmark"id=" YesCheck"></span>
            <span className='AS1label YesLabel'>Yes</span>
          </label>
          <label className="AS1checkbox" htmlFor="EBInputN">
          <input
            className="form-control"
            id="EBInputN"
            name="earlyBird"
            type="radio"
            value="No" // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
            checked={props.earlyBird==="No"}
          />
            <span className="AS1checkmark NoCheck"></span>
            <span className='AS1label NoLabel'>No</span>
          </label>
          </div> 
        </div>
  )
}

export default AdultStep6;