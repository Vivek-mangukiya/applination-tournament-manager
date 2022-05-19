import React, { useContext } from 'react';
import '../assets/styles/PoolFormComponent.css';
import TemplatePoolsContext from '../context/template_pool/templatePoolsContext';

const PoolStep4 = (props) => {
  //context
  const templatePoolsContext = useContext(TemplatePoolsContext);
  const { templatePoolsNameError } = templatePoolsContext;

  if (props.currentStepO !== 4) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="PS">
      <div>
        {templatePoolsNameError && (
          <h1 className="TemplateNameTaken1">
            Sorry, that name is already taken
          </h1>
        )}
        <h1 className={templatePoolsNameError ? 'AS1Heading' : 'Heading'}>
          Great! What is the name for this Template?
        </h1>
        <h4 className="Subheading">
          Create a name for a template or to easily refer back to
        </h4>
        <label htmlFor="DivisionName">
          <input
            className="FormInput"
            id="DivisionName"
            name="templateName"
            type="text"
            placeholder="Template name"
            value={props.templateName} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </label>
        {/* <Link to="/templatePools" className="li-link"> */}
        <button
          className="PSubmitButton"
          onClick={props.handleSubmit}
          style={{ outline: 0, marginTop: templatePoolsNameError && 58 }}
        >
          SAVE
        </button>
        {/* </Link> */}
        {/* <label className="DAS1checkbox DMensLabel"htmlFor="AgeRangeInput">
            <input
              className="form-control"
              id="AgeRangeInput1"
              name="Open"
              type="checkbox"
              value="Open"
              onChange={this.props.onAgeCheck} // Prop: Puts data into state
              // checked={this.props.selectedAgeRange[0].checked}
            />
            <span className="DAS1checkmark"></span>
            <span className='DAS1label '>save as Template</span>
          </label> */}
      </div>
    </div>
  );
};
export default PoolStep4;
