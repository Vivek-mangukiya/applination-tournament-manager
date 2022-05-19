import React, { useContext, useEffect } from 'react';
import '../assets/styles/PoolFormComponent.css';
import TemplatePointsContext from '../context/template_points/templatePointsContext';

const PointsStep2 = (props) => {
  //context
  const templatePointsContext = useContext(TemplatePointsContext);
  const { templatePointsNameError } = templatePointsContext;

  useEffect(() => {
    console.log(templatePointsNameError);
  }, [templatePointsNameError]);

  if (props.currentStepS !== 2) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="PS">
      <div>
        {templatePointsNameError && (
          <h1 className="TemplateNameTaken1">
            Sorry, that name is already taken
          </h1>
        )}
        <h1 className={templatePointsNameError ? 'AS1Heading' : 'Heading'}>
          Great! What is the name for this Template?
        </h1>
        <h4 className="Subheading">Create a name to easily refer back to</h4>
        <label htmlFor="DivisionName">
          <input
            className="FormInput input-modal-style"
            id="DivisionName"
            name="PointstemplateName"
            type="text"
            placeholder="Template name"
            value={props.PointstemplateName} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </label>
        {/* <Link to="/EventFormatSaved" href="#/" className="li-link"> */}
        <button
          className="PSubmitButton li-link"
          onClick={() => console.log(props.PointstemplateName)}
          // onClick={this.props.handleSubmit}
          style={{ outline: 0, marginTop: templatePointsNameError && 58 }}
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
export default PointsStep2;
