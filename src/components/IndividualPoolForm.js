import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/PoolFormComponent.css";
import PoolStep1 from "./PoolStep1";
import PoolStep2 from "./PoolStep2";
import PoolStep3 from "./PoolStep3";
import PoolStep4 from "./PoolStep4";
import TemplateDivisionContext from "../context/templateDivision/templateDivisionContext";
import TemplatePoolsContext from "../context/template_pool/templatePoolsContext";

const IndividualPoolForm = (props) => {
  const templateDivisionContext = useContext(TemplateDivisionContext);
  const { saveTemplatePoolsData } = templateDivisionContext;

  //context
  const templatePoolsContext = useContext(TemplatePoolsContext);
  const { checkPoolsName, templatePoolsNameError } = templatePoolsContext;

  useEffect(() => {
    console.log(templatePoolsNameError);
  }, [templatePoolsNameError]);

  const [commonState, setCommonState] = useState({
    currentStepO: 1, // Default is Step 1
    poolTeams: "",
    pools: "",
    courts: "",
    templateName: "",
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
      poolTeams: dropdownValue,
    }));
  };

  const handleDropdown2 = (dropdownValue) => {
    // setAge(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      pools: dropdownValue,
    }));
  };

  const handleDropdown3 = (dropdownValue) => {
    // setAge(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      courts: dropdownValue,
    }));
  };
  const [poolTeamsError, setPoolTeamsError] = useState(false);
  const [poolsError, setPoolsError] = useState(false);
  const [courtsError, setCourtsError] = useState(false);
  const [templateNameError, setTemplateNameError] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commonState.templateName !== "" && commonState.currentStepO === 4) {
      // const {spots,PointstemplateName} = this.state
      console.log(`Number of teams:${commonState.poolTeams}`);
      console.log(`Number of Pools:${commonState.pools}`);
      console.log(`Number of Courts:${commonState.courts}`);
      console.log(`Pools Template Name:${commonState.templateName}`);
      setTemplateNameError(false);
      saveTemplatePoolsData({
        teams: Number(commonState.poolTeams),
        pools: Number(commonState.pools),
        courts: Number(commonState.courts),
        name: commonState.templateName,
      });
      checkPoolsName(
        { type: "pools", name: commonState.templateName },
        commonState.poolTeams,
        commonState.pools,
        commonState.courts,
        props.propsData
      );
      // props.propsData.push(
      //   `/templatePools/${commonState.poolTeams}/${commonState.pools}/${commonState.courts}/${commonState.templateName}`
      // );
    } else {
      setTemplateNameError(true);
    }
  };

  useEffect(() => {
    if (commonState.poolTeams !== "") {
      setPoolTeamsError(false);
      if (commonState.currentStepO === 1) {
        setNextDisabled(false);
      }
    }
  }, [commonState.poolTeams]);

  useEffect(() => {
    if (commonState.pools !== "") {
      setPoolsError(false);
      if (commonState.currentStepO === 2) {
        setNextDisabled(false);
      }
    }
  }, [commonState.pools]);

  useEffect(() => {
    if (commonState.courts !== "") {
      setCourtsError(false);
      if (commonState.currentStepO === 3) {
        setNextDisabled(false);
      }
    }
  }, [commonState.courts]);

  const _next = () => {
    let current = commonState.currentStepO;
    if (current === 1) {
      if (commonState.poolTeams !== "") {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepO: 2,
        }));
        setPoolTeamsError(false);
      } else {
        setPoolTeamsError(true);
      }
    }
    if (current === 2) {
      if (commonState.pools !== "") {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepO: 3,
        }));
        setPoolsError(false);
      } else {
        setPoolsError(true);
      }
    }
    if (current === 3) {
      if (commonState.courts !== "") {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepO: 4,
        }));
        setCourtsError(false);
      } else {
        setCourtsError(true);
      }
    }

    // if (current === 1 || current === 2 || current === 3) {
    //   setCommonState((prevState) => ({
    //     ...prevState,
    //     currentStepO: current + 1,
    //   }));
    // }
    if (current === 4) {
      if (commonState.templateName !== "") {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepO: 4,
        }));
        setTemplateNameError(false);
      } else {
        setTemplateNameError(true);
      }
    }
    setNextDisabled(true);
  };

  const _prev = () => {
    let current = commonState.currentStepO;
    if (current === 2 || current === 3 || current === 4) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStepO: current - 1,
      }));
    }
    if (current === 1) {
      props.handleBack(0);
      props.setTemplateError(false);
    }
  };

  // The "next" and "previous" button functions
  const previousButton = () => {
    let current = commonState.currentStepO;
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
    let current = commonState.currentStepO;
    if (current !== 4) {
      return (
        <button
          className={nextDisabled ? "WFNextButtonDisabled" : "WFNextButton"}
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

  if (props.currentStepT !== 2) {
    // Prop: The current step
    return null;
  }

  return (
    <>
      <div className="PoolFormContainer">
        <div className="PoolForm">
          <p className="Step">{commonState.currentStepO} / 4 </p>
          <form onSubmit={handleSubmit}>
            <PoolStep1
              currentStepO={commonState.currentStepO}
              handleChange={handleChange}
              poolTeams={commonState.poolTeams}
              handleMainDropdown={handleDropdown}
              poolTeamsError={poolTeamsError}
            />

            <PoolStep2
              currentStepO={commonState.currentStepO}
              handleChange={handleChange}
              pools={commonState.pools}
              handleMainDropdown={handleDropdown2}
              poolsError={poolsError}
            />

            <PoolStep3
              currentStepO={commonState.currentStepO}
              handleChange={handleChange}
              courts={commonState.courts}
              handleMainDropdown={handleDropdown3}
              courtsError={courtsError}
            />

            <PoolStep4
              currentStepO={commonState.currentStepO}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              templateName={commonState.templateName}
              courtsError={templateNameError}
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

export default IndividualPoolForm;
