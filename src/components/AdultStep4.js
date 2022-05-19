import React, { useState, useEffect, useContext } from 'react';
import '../assets/styles/WizardFormComponent.css';
import downArrow from '../assets/images/icon-menu-chevron-down.svg';
import PlayersPlus from '../assets/images/players-plus.svg';
import DropdownModals from './DropdownModals';
import EventContext from '../context/event/eventContext';

const AdultStep4 = (props) => {
  const eventContext = useContext(EventContext);
  const { teamSizeMap } = eventContext;

  const [modal1, setModal1] = useState('');

  useEffect(() => {
    // console.log("Updating dropdown state")
    props.handleMainDropdown(modal1);
  }, [modal1]);

  if (props.currentStep !== 5) {
    // Prop: The current step
    return null;
  }

  // The markup for the Step 1 UI
  return (
    <div className="AS4">
      <div>
        {props.teamSizeError === true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
        )}
        <h1
          className={
            props.teamSizeError === true ? 'HeadingWithError' : 'Heading'
          }
        >
          What is the team size needed for this Division?
        </h1>
        <h4 className="Subheading">Total no. of teams in this division</h4>
        <div className="DropdownBar">
          <img className="" src={PlayersPlus} alt=""></img>
          <div className="PLACEHOLDER">Total number of teams allowed</div>
          <div className="DivValue">
            {modal1 === '150' ? 'Unlimited' : modal1}
          </div>
          <DropdownModals>
            {/* <li onClick={()=>setModal1("8")}>8</li>
                <li onClick={()=>setModal1("12")}>12</li>
                <li onClick={()=>setModal1("16")}>16</li>
                <li onClick={()=>setModal1("20")}>20</li>
                <li onClick={()=>setModal1("24")}>24</li>
                <li onClick={()=>setModal1("32")}>32</li>
                <li onClick={()=>setModal1("64")}>64</li>
                <li onClick={()=>setModal1("128")}>128</li> */}
            {teamSizeMap !== null &&
              teamSizeMap.map((data) => (
                <li onClick={() => setModal1(data.toString())} key={data}>
                  {data}
                </li>
              ))}
            <li onClick={() => setModal1('150')}>Unlimited</li>
          </DropdownModals>
        </div>
      </div>
    </div>
  );
};
export default AdultStep4;

// class AdultStep4 extends React.Component {
//   render() {
//     if (this.props.currentStep !== 5) { // Prop: The current step
//       return null
//     }
//     // The markup for the Step 1 UI
//     return(
//       <div className="AS4">
//         <div>
//           <h1 className="Heading">What is the team size needed for this Division?</h1>
//           <h4 className="Subheading">Choose the amount of players on a team</h4>
//           <label htmlFor="TeamSizeInput" className="select MainStepSelect">
//               <select className="AgeDropdown" id="TeamSizeInput" name="teamSize" value={this.props.teamSize} onChange={this.props.handleChange}>
//               <option value="8">8</option>
//               <option value="12">12</option>
//               <option value="16">16</option>
//               <option value="20">20</option>
//               <option value="24">24</option>
//               <option value="32">32</option>
//               <option value="64">64</option>
//               <option value="128">128</option>
//               </select>
//           </label>
//           </div>
//           <img className="PlayersPlus" src={PlayersPlus}></img>

//       </div>
//     )
//   }
// }
// export default AdultStep4;
