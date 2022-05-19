import React, { useState, useEffect, useContext } from 'react';
import '../assets/styles/PoolFormComponent.css';
import PointsStep1 from './PointsStep1';
import PointsStep2 from './PointsStep2';
import TemplatePointsContext from '../context/template_points/templatePointsContext';

const IndividualPointsForm = (props) => {
  //context
  const templatePointsContext = useContext(TemplatePointsContext);
  const { checkPointsName } = templatePointsContext;

  //state
  const [commonState, setCommonState] = useState({
    currentStepS: 1, // Default is Step 1
    spots: '',
    PointstemplateName: '',
  });

  const handleChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target;
    setCommonState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDropdown = (dropdownValue) => {
    // setAge(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      spots: dropdownValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commonState.currentStepS === 2) {
      // const {spots,PointstemplateName} = this.state
      console.log(`Number of spots:${commonState.spots}`);
      console.log(`Points Template Name:${commonState.PointstemplateName}`);
      console.log({
        spots: commonState.spots,
        pointsTemplateName: commonState.PointstemplateName,
      });
      checkPointsName(
        { type: 'points', name: commonState.PointstemplateName },
        commonState.spots,
        props.propsData
      );
      // props.propsData.push(
      //   `/templatePoints/${commonState.spots}/${commonState.PointstemplateName}`
      // );
    }
  };

  const [spotsError, setSpotsError] = useState(false);
  const [pointsDisabled, setPointsDisabled] = useState(true);

  useEffect(() => {
    if (commonState.spots !== '') {
      setSpotsError(false);
      setPointsDisabled(false);
    }
  }, [commonState.spots]);

  const _next = () => {
    let current = commonState.currentStepS;
    if (current === 1) {
      if (commonState.spots !== '') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepS: 2,
        }));
        setSpotsError(false);
      } else {
        setSpotsError(true);
      }
    }
  };

  const _prev = () => {
    let current = commonState.currentStepS;
    if (current === 2) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStepS: 1,
      }));
    }
    if (current === 1) {
      props.handleBack(0);
      props.setTemplateError(false);
    }
  };

  // The "next" and "previous" button functions
  const previousButton = () => {
    let current = commonState.currentStepS;
    if (current !== 0) {
      /**Changed 1 to 0 here!!!! */
      return (
        <button
          className="WFPreviousButton"
          id="white-button-hover"
          type="button"
          onClick={_prev}
          style={{ outline: 0 }}
        >
          <span className="WFPreviousButtonText">BACK</span>
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    let current = commonState.currentStepS;
    if (current !== 2) {
      return (
        <button
          className={pointsDisabled?"WFNextButtonDisabled":"WFNextButton"}
          id="yellow-button-hover"
          type="button"
          onClick={_next}
          style={{ outline: 0 }}
        >
          <span className="WFNextButtonText">NEXT</span>
        </button>
      );
    }
    return null;
  };

  if (props.currentStepT !== 1) {
    // Prop: The current step
    return null;
  }

  return (
    <>
      <div className="PoolFormContainer">
        <div className="PoolForm">
          <p className="Step">{commonState.currentStepS} / 2 </p>
          <form onSubmit={handleSubmit}>
            <PointsStep1
              currentStepS={commonState.currentStepS}
              handleChange={handleChange}
              spots={commonState.spots}
              handleMainDropdown={handleDropdown}
              spotsError={spotsError}
            />

            <PointsStep2
              currentStepS={commonState.currentStepS}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              PointstemplateName={commonState.PointstemplateName}
            />

            <div className="buttons">
              {previousButton()}
              {nextButton()}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IndividualPointsForm;
