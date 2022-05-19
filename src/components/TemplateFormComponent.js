import React, { useContext, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import {Modal, ModalBody, Button, ModalHeader} from 'reactstrap'
import TemplateStep1 from './TemplateStep1';
import IndividualPoolForm from './IndividualPoolForm';
import IndividualPointsForm from './IndividualPointsForm';
import IndividualDivisionForm from './IndividualDivisionForm';
import SavedTemplate from './SavedTemplate';
import PlayerProfileCancel from './PlayerProfileCancel';
import iconorangepencil from '../assets/images/icon-orange-pencil.svg';
import '../assets/styles/TemplateFormComponent.css';
import DashboardTemplate from './DashboardTemplate';
import TemplateListComponent from './TemplatesListForm';

const TemplateForm = (props) => {
  const [propsData, setPropsData] = useState(null);
  useEffect(() => {
    setPropsData(props.propsData);
  }, [props]);

  const [commonState, setCommonState] = useState({
    currentStepT: 0, // Default is Step 1
    templateType: '',
    templateList: [7],
    open: false,
  });

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <g fill="#333">
          <g>
            <path
              d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
              transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  const [templateError, setTemplateError] = useState(false)
  const [nextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    if(commonState.templateType === 'Points' 
    || commonState.templateType === 'Pools' 
    || commonState.templateType === 'Division'
    ){
      setTemplateError(false);
      if (commonState.currentStepT === 0) {
        setNextDisabled(false);
      }
    }
  }, [commonState.templateType])

  const onOpenModal = () => {
    // setOpen(true);
    setCommonState((prevState) => ({
      ...prevState,
      open: true,
    }));
  };

  const onCloseModalOutside = () => {
    console.log("The step to revert back to",commonState.currentStep)
    if(commonState.currentStepT>0){
      setPreviousStep(commonState.currentStepT);
    }
    setCommonState((prevState) => ({
      ...prevState,
      currentStepT:-1
    }))
    // setNextDisabled(true);
  }

  const onCloseModal = () => {
    // setOpen(false);
    setCommonState((prevState) => ({
      ...prevState,
      open: false,
      currentStepT:0,
    }));
  };

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
      templateType: dropdownValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commonState.currentStepT === 11) {
      console.log(commonState.templateType);
    }
  };

  const handleBack = (x) => {
    setCommonState((prevState) => ({
      ...prevState,
      currentStepT: x,
    }));
  };

  const setTemplate = () => {
    setCommonState((prevState) => ({
      ...prevState,
      templateList: 1,
    }));
  };

  const [previousStep, setPreviousStep] = useState(0);

  //modal error states
  // const [templateError, setTemplateError] = useState(null);
  // const [nextDisabled, setNextDisabled] = useState(true);

  const _next = () => {
    let current = commonState.currentStepT;
    // if (current === 0) {
    //   setCommonState((prevState) => ({
    //     ...prevState,
    //     currentStepT: current + 1,
    //   }));
    // }
    if (current === 0) {
      if (commonState.templateType === 'Points') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepT: 1,
        }));
        setTemplateError(false);
      }
      if (commonState.templateType === 'Pools') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepT: 2,
        }));
        setTemplateError(false);
      }
      if (commonState.templateType === 'Division') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStepT: 3,
        }));
        setTemplateError(false);
      }
      else{
        setTemplateError(true);
      }
    }
  };

  const _prev = () => {
    let current = commonState.currentStepT;
    // if (current === 1) {
    //   setCommonState((prevState) => ({
    //     ...prevState,
    //     currentStepO: 0,
    //   }));
    // }
    if (current === 0) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStepT: -1,
      }));
    }
  };

  const previousButton = () => {
    let current = commonState.currentStepT;
    if (current === 0) {
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

  // useEffect(() => {
  //   console.log("templateError",templateError)
  // }, [templateError])


  const nextButton = () => {
    let current = commonState.currentStepT;
    if (current === 0) {
      return (
        <button
          // className="WFNextButton"
          className={nextDisabled ? 'WFNextButtonDisabled' : 'WFNextButton'}
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

  return (
    <>
      {props.type === 'table' ? (
        <div
          className="NEW_TEMPLATE"
          id="yellow-button-hover"
          onClick={onOpenModal}
        >
          <div className="NewTemplateButtonText">NEW TEMPLATE</div>
        </div>
      ) : props.type === 'dash'?(
        <div className="container row">
          <div
            tabIndex="1"
            className="col-md-3 text-decoration-none"
            style={{ outline: 0 }}
          >
            <div
              className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
              onClick={onOpenModal}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={iconorangepencil}
                alt=""
                className="img-quick-start"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div
              className="upper-box-tile"
              onClick={onOpenModal}
              style={{ cursor: 'pointer' }}
            >
              + New Template
            </div>
          </div>
        </div>
      ):
      (<span className="none-screen-highlight" onClick={onOpenModal}>New Template</span>)}

      <Modal
        open={commonState.open}
        // onClose={onCloseModal}
        onClose={onCloseModalOutside}
        center
        closeIcon={closeIcon}
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
            padding: 0,
            margin: 0,
            overflow: 'visible',
          },
        }}
      >
        <div
          className={
            commonState.currentStepT === -1
              ? 'PlayerProfileCancelContainer'
              : 'WizardForm'
          }
        >
          <PlayerProfileCancel
            currentStepT={commonState.currentStepT}
            handleChange={handleChange}
            handleBack={handleBack}
            onCloseModal={onCloseModal}
            previousStep={previousStep}
          />

          {/* <SavedTemplate
            currentStepT={commonState.currentStepT}
            handleChange={handleChange}
            templateList={commonState.templateList}
          /> */}

          <TemplateStep1
            currentStepT={commonState.currentStepT}
            handleChange={handleChange}
            templateType={commonState.templateType}
            handleMainDropdown={handleDropdown}
            templateError={templateError}
            templateType={commonState.templateType}
          />

          <IndividualPoolForm
            currentStepT={commonState.currentStepT}
            handleBack={handleBack}
            propsData={propsData}
            setTemplateError={setTemplateError}
          />

          <IndividualPointsForm
            currentStepT={commonState.currentStepT}
            handleBack={handleBack}
            propsData={propsData}
            setTemplateError={setTemplateError}
          />

          <IndividualDivisionForm
            currentStepT={commonState.currentStepT}
            handleBack={handleBack}
            propsData={propsData}
          />

          <div className="buttons">
            {previousButton()}
            {nextButton()}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TemplateForm;
