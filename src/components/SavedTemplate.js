import React from 'react';
import '../assets/styles/SavedTemplate.css'
import iconpencil from '../assets/images/pencil.svg'


class SavedTemplate extends React.Component {
    render() {
      if (this.props.currentStepT !== 0) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="TMainStep">
          {/* <div> */}
          <h2 className="THeading">Already have a saved Template?</h2>
          <h4 className="TSubheading">Create a new Devision or select from one below</h4>
          <label htmlFor="ageInput" className="select">
          <select className="AgeDropdown" id="ageInput" name="templateList" value={this.props.templateList} onChange={this.props.handleChange}>

          </select>
          </label>
          {/* </div> */}
          <img className="InputPurseMS" src={iconpencil} alt = ""></img>
        </div>
      )
    }
  }
export default SavedTemplate;