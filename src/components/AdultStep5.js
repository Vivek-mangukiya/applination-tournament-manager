import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import PlayType from '../assets/images/playtype.svg';
import DropdownModals from './DropdownModals';
const AdultStep5 = (props) => {
  const [modal1, setModal1] = useState('');

  useEffect(() => {
    // console.log("Updating dropdown state")
    props.handleMainDropdown(modal1);
  }, [modal1]);

  if (props.currentStep !== 6) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="AS5">
      <div>
        {props.formatError === true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
        )}
        <h1
          className={
            props.formatError === true ? 'HeadingWithError' : 'Heading'
          }
        >
          What is the format needed for this Division?
        </h1>
        <h4 className="Subheading">Choose the game type from the list below</h4>
        <div className="DropdownBar">
          <img className="" src={PlayType} alt=""></img>
          <div className="PLACEHOLDER">Players per team</div>
          <div className="DivValue">{modal1}</div>
          <DropdownModals>
            <li onClick={() => setModal1('2v2')}>2v2</li>
            <li onClick={() => setModal1('3v3')}>3v3</li>
            <li onClick={() => setModal1('4v4')}>4v4</li>
            <li onClick={() => setModal1('6v6')}>6v6</li>
          </DropdownModals>
        </div>
      </div>
    </div>
  );
};
export default AdultStep5;

// class AdultStep5 extends React.Component {
//   render() {
//     if (this.props.currentStep !== 6) { // Prop: The current step
//       return null
//     }
//     // The markup for the Step 1 UI
//     return(
//       <div className="AS5">
//       <div>
//       <h1 className="Heading">What is the format needed for this Division?</h1>
//       <h4 className="Subheading">Choose the game type from the list below</h4>
//       <label htmlFor="FormatInput" className="select MainStepSelect">
//           <select className="AgeDropdown" id="FormatInput" name="teamFormat" value={this.props.teamFormat} onChange={this.props.handleChange}>
//           <option value="2v2">2v2</option>
//           <option value="4v4">4v4</option>
//           <option value="6v6">6v6</option>
//           </select>
//       </label>
//       </div>
//       <img className="PlayersPlus" src={PlayType}></img>
//       </div>
//     )
//   }
// }
// export default AdultStep5;
