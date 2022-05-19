import React, { useState, useEffect } from 'react';
import '../assets/styles/PoolFormComponent.css';
import iconorangepplus from '../assets/images/icon-orange-players-plus.svg';
import DropdownModals from './DropdownModals';

const PoolStep1 = (props) => {
  const [modal1, setModal1] = useState('');

  let info = [];

  for (let i = 0; i <= 30; i++) {
    info.push(i + 2);
  }

  useEffect(() => {
    // console.log("Updating dropdown state")
    props.handleMainDropdown(modal1);
  }, [modal1]);

  if (props.currentStepO !== 1) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="MainStep">
      <div>
      {props.poolTeamsError===true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
          )}
        <h2 className={props.poolTeamsError === true? "HeadingWithError" : "Heading"}>How many teams for the pool?</h2>
        <h4 className="Subheading">
          Make a selection based on the desired number
        </h4>
        <div className="DropdownBar">
          <img className="" src={iconorangepplus} alt=""></img>
          <div className="PLACEHOLDER">Number of Teams</div>
          <div className="DivValue">{modal1}</div>
          <DropdownModals>
            {info.map((data, i) => (
              <li key={i} onClick={() => setModal1(data)}>
                {data}
              </li>
            ))}
            {/* <li onClick={() => setModal1('4')}>4</li>
            <li onClick={() => setModal1('8')}>8</li>
            <li onClick={() => setModal1('12')}>12</li>
            <li onClick={() => setModal1('16')}>16</li>
            <li onClick={() => setModal1('20')}>20</li>
            <li onClick={() => setModal1('24')}>24</li>
            <li onClick={() => setModal1('28')}>28</li>
            <li onClick={() => setModal1('32')}>32</li>
            <li onClick={() => setModal1('36')}>36</li>
            <li onClick={() => setModal1('40')}>40</li> */}
          </DropdownModals>
        </div>
      </div>
    </div>
  );
};
export default PoolStep1;
// class PoolStep1 extends React.Component {
//   render() {
//     if (this.props.currentStepO !== 1) { // Prop: The current step
//       return null
//     }
//     // The markup for the Step 1 UI
//     return(
//       <div className="MainStep">
//         <div>
//         <h2 className="Heading">How many teams for the pool?</h2>
//         <h4 className="Subheading">Make a selection based on the desired number</h4>
//         <label htmlFor="poolTeams" className="select MainStepSelect">
//         <select className="AgeDropdown" id="poolTeams" name="poolTeams" value={this.props.poolTeams} onChange={this.props.handleChange}>
//           <option value="4" className="DropdownItems">4</option>
//           <option value="8" className="DropdownItems">8</option>
//           <option value="12" className="DropdownItems">12</option>
//           <option value="16" className="DropdownItems">16</option>
//           <option value="20" className="DropdownItems">20</option>
//           <option value="24" className="DropdownItems">24</option>
//           <option value="28" className="DropdownItems">28</option>
//           <option value="32" className="DropdownItems">32</option>
//           <option value="36" className="DropdownItems">36</option>
//           <option value="40" className="DropdownItems">40</option>
//         </select>
//         </label>
//         </div>
//         <img className="InputPurseMS" src={iconorangepplus}></img>
//       </div>
//     )
//   }
// }
// export default PoolStep1;
