import React from 'react';
import '../assets/styles/PoolFormComponent.css'
import iconorangepplus from '../assets/images/icon-orange-players-plus.svg'

class PoolStep1 extends React.Component {
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="MainStep">
          <div>
          <h2 className="Heading">What type of template is needed?</h2>
          <h4 className="Subheading">Make a selection based on the desired needs</h4>
          <label htmlFor="poolTeams" className="select">
          <select className="AgeDropdown" id="poolTeams" name="desiredTemplate" value={this.props.desiredTemplate} onChange={this.props.handleChange}>
            <option value="Points" className="DropdownItems">Points</option>
            <option value="Pools" className="DropdownItems">Pools</option>
            <option value="Divisions" className="DropdownItems">Division</option>
          </select>
          </label>
          </div>
          <img className="InputPurse" src={iconorangepplus}></img>
        </div>
      )
    }
  }
export default PoolStep1;
