import React, { useState, useEffect, useContext } from 'react';
import '../assets/styles/WizardFormComponent.css';
import Purse from '../assets/images/purse.svg';
import EventContext from '../context/event/eventContext';

const AdultStep10 = (props) => {
  const eventContext = useContext(EventContext);
  const { saveAsTemplateMsg } = eventContext;

  // const [modal1, setModal1] = useState('');
  // const [modalId, setModalId] = useState('');

  // useEffect(()=>{
  //   props.handleChange({modalId, modal1});
  //   console.log("Template name entered:",modalId);
  // },[modal1])

  if (props.currentStep !== 12) {
    // Prop: The current step
    return null;
  }
  console.log('templateNameCounter', props.templateNameCounter);
  return (
    <div>
      {props.templateNameCounter === true && (
        <h1 className="TemplateNameTaken1">
          Sorry, that name is already taken
        </h1>
      )}
      {saveAsTemplateMsg !== null && (
        <h1 className="TemplateNameTaken1">{saveAsTemplateMsg}</h1>
      )}
      <h1
        className={
          props.templateNameCounter || saveAsTemplateMsg !== null
            ? 'AS1Heading'
            : 'Heading'
        }
        onClick={() => console.log(props.currentName)}
      >
        Enter the name of Division Template
      </h1>
      <h4 className="Subheading">
        Create a name for division template that you can refer back to
      </h4>
      <label htmlFor="DivisionName" className="FormInputContainer">
        <input
          className={
            props.templateNameCounter || saveAsTemplateMsg !== null
              ? 'FormInputFinalError'
              : 'FormInputFinal'
          }
          id="DivisionName"
          name="divisionName"
          type="text"
          placeholder="DIVISION TEMPLATE NAME"
          value={props.divisionName} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into state
          style={{ paddingLeft: 5, color: '747474' }}
        />
      </label>
      {/* <Link to="/templateDivision" href="#/" className="li-link"> */}
      <div
        // to="/TemplateDivisionSaved"
        // href="#/"
        className="li-link"
        id="yellow-button-hover"
        onClick={props.handleSubmit}
      >
        <button className="SubmitButton" style={{ outline: 0 }}>
          SAVE
        </button>
      </div>
      {/* </Link> */}
      {props.disableCheckbox ? (
        <></>
      ) : (
        <label className="DAS1checkbox DMensLabel" htmlFor="AgeRangeInput">
          <input
            className="form-control"
            id="AgeRangeInput1"
            name="save_as_template"
            type="checkbox"
            value="Open"
            onChange={props.handleCheckbox} // Prop: Puts data into state
            // checked={this.props.selectedAgeRange[0].checked}
          />
          <span className="DAS1checkmark"></span>
          <span
            className="DAS1label "
            style={{ color: '#9b9b9b', fontSize: 10 }}
          >
            Save as Template
          </span>
        </label>
      )}
      {/* <label className="DAS1checkbox DMensLabel" htmlFor="AgeRangeInput">
          <input
            className="form-control"
            id="AgeRangeInput1"
            name="save_as_template"
            type="checkbox"
            value="Open"
            onChange={props.handleCheckbox} // Prop: Puts data into state
            // checked={this.props.selectedAgeRange[0].checked}
          />
          <span className="DAS1checkmark"></span>
          <span className="DAS1label " style={{color:"#9b9b9b", fontSize:10}}>Save as Template</span>
        </label> */}
    </div>
  );
};

export default AdultStep10;
