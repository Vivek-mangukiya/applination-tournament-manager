// import React, { Component } from 'react';
// // import ReactDOM from 'react-dom';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// // import {Modal, ModalBody, Button, ModalHeader} from 'reactstrap'
// import TemplateStep1 from './TemplateStep1';
// import IndividualPoolForm from './IndividualPoolForm';
// import IndividualPointsForm from './IndividualPointsForm';
// import IndividualDivisionForm from './IndividualDivisionForm';
// import SavedTemplate from './SavedTemplate';
// import PlayerProfileCancel from './PlayerProfileCancel';
// import '../assets/styles/TemplateFormComponent.css';
// import DashboardTemplate from './DashboardTemplate';
// import TemplateListComponent from './TemplatesListForm';
// import iconorangeplayer from '../assets/images/icon-orange-player.svg';

// const closeIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//   >
//     <g fill="none" fill-rule="evenodd">
//       <g fill="#333">
//         <g>
//           <path
//             d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
//             transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
//           />
//         </g>
//       </g>
//     </g>
//   </svg>
// );

// class TemplateFormDash extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentStepT: 0, // Default is Step 1
//       templateType: 'Points',
//       templateList: [7],
//       open: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     // this.handleChange=this.handleBack.bind(this)
//     this._next = this._next.bind(this);
//     this._prev = this._prev.bind(this);

//     this.toggleModal = this.toggleModal.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);

//     this.onOpenModal = this.onOpenModal.bind(this);
//     this.onCloseModal = this.onCloseModal.bind(this);

//     this.handleDropdown=this.handleDropdown.bind(this);
//   }

//   onOpenModal() {
//     this.setState({
//       open: true,
//     });
//   }

//   onCloseModal() {
//     this.setState({
//       open: false,
//     });
//   }

//   // Use the submitted data to set the state
//   handleChange(event) {
//     // console.log(event.target.value)
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   }

//   handleDropdown(dropdownValue) {
//     console.log(dropdownValue)
//     this.setState({
//       templateType: dropdownValue
//     }) ;
//   }

//   // Trigger an alert on form submission
//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.currentStepT === 11) {
//       const { templateType } = this.state;
//       console.log(templateType);
//     }
//   };

//   handleBack = (x) => {
//     this.setState({
//       currentStepT: x,
//     });
//   };

//   setTemplate = () => {
//     this.setState({
//       templateList: 1,
//     });
//   };

//   _next() {
//     let currentStepT = this.state.currentStepT;
//     if (currentStepT === 0) {
//       if (this.state.templateList) {
//         this.setState({
//           currentStepT: 1,
//         });
//       }
//     }
//     if (currentStepT === 1) {
//       if (this.state.templateType === 'Points') {
//         this.setState({
//           currentStepT: 2,
//         });
//       }
//       if (this.state.templateType === 'Pools') {
//         this.setState({
//           currentStepT: 3,
//         });
//       }
//       if (this.state.templateType === 'Division') {
//         this.setState({
//           currentStepT: 4,
//         });
//       }
//     }
//   }

//   _prev() {
//     let currentStepT = this.state.currentStepT;
//     if (currentStepT === 1) {
//       this.setState({
//         currentStepT: 0,
//       });
//     }
//     if (currentStepT === 0) {
//       this.setState({
//         currentStepT: -1,
//       });
//     }
//   }

//   // The "next" and "previous" button functions
//   get previousButton() {
//     let currentStepT = this.state.currentStepT;
//     if (currentStepT === 1 || currentStepT === 0) {
//       /**Changed 1 to 0 here!!!! */
//       return (
//         <button
//           className="WFPreviousButton"
//           type="button"
//           onClick={this._prev}
//           style={{ outline: 0 }}
//         >
//           <span className="WFPreviousButtonText">BACK</span>
//         </button>
//       );
//     }
//     return null;
//   }

//   get nextButton() {
//     let currentStepT = this.state.currentStepT;
//     if (currentStepT === 1 || currentStepT === 0) {
//       return (
//         <button
//           className="WFNextButton"
//           type="button"
//           onClick={this._next}
//           style={{ outline: 0 }}
//         >
//           <span className="WFNextButtonText">NEXT</span>
//         </button>
//       );
//     }
//     return null;
//   }

//   toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen,
//     });
//   }

//   handleLogin(event) {
//     this.toggleModal();
//     alert(
//       'Username: ' +
//         this.username.value +
//         ' Password: ' +
//         this.password.value +
//         ' Remember: ' +
//         this.remember.checked
//     );
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <>
//         {/* <DashboardTemplate onOpenModal={this.onOpenModal}/> */}
//         {/* <TemplateListComponent onOpenModal={this.onOpenModal}/> */}

//         {/* <div className="row TemplateFormRow">
//           <div className="col-12 TemplateFormCol"> */}
//         {/* <div className="NEW_TEMPLATE_DASH" onClick={this.onOpenModal}>
//             <div className="NewTemplateDashButtonText"></div>
//           </div> */}
//         {/* <div className="-New-Reg" onClick={this.onOpenModal}>+ New Template</div> */}
//         {/* tamnay code strats */}
//         <div
//           className="col-12 text-center new-icons-content"
//           style={{ marginTop: 40 }}
//         >
//           <div className="container row">
//             <a
//               href="#/"
//               className="col-md-3 text-decoration-none"
//               onClick={this.onOpenModal}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
//                 onClick={this.onOpenModal}
//                 style={{ cursor: 'pointer' }}>
//               <img src={iconorangeplayer} alt="" className="img-quick-start" />
//               </div>
//               <div className="upper-box-tile" onClick={this.onOpenModal}>+ New Template</div>
//             </a>
//           </div>
//         </div>

//         {/* tanmay code ends */}

//         <Modal
//           open={this.state.open}
//           onClose={this.onCloseModal}
//           center
//           closeIcon={closeIcon}
//           styles={{
//             modal: {
//               borderRadius: 12,
//               boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
//               padding: 0,
//               margin: 0,
//               overflow: 'visible',
//             },
//           }}
//         >
//           <div
//             className={
//               this.state.currentStepT === -1
//                 ? 'PlayerProfileCancelContainer'
//                 : 'WizardFormComponent'
//             }
//           >
//             <div
//               className={
//                 this.state.currentStepT === -1
//                   ? 'PlayerProfileCancelContainer'
//                   : 'WizardForm'
//               }
//             >
//               <PlayerProfileCancel
//                 currentStepT={this.state.currentStepT}
//                 handleChange={this.handleChange}
//                 handleBack={this.handleBack}
//                 onCloseModal={this.onCloseModal}
//               />

//               <SavedTemplate
//                 currentStepT={this.state.currentStepT}
//                 handleChange={this.handleChange}
//                 templateList={this.state.templateList}
//               />

//               <TemplateStep1
//                 currentStepT={this.state.currentStepT}
//                 handleChange={this.handleChange}
//                 templateType={this.state.templateType}
//                 handleMainDropdown={this.handleDropdown}
//               />

//               <IndividualPoolForm
//                 currentStepT={this.state.currentStepT}
//                 handleBack={this.handleBack}
//               />

//               <IndividualPointsForm
//                 currentStepT={this.state.currentStepT}
//                 handleBack={this.handleBack}
//               />

//               <IndividualDivisionForm
//                 currentStepT={this.state.currentStepT}
//                 handleBack={this.handleBack}
//               />

//               <div className="buttons">
//                 {this.previousButton}
//                 {this.nextButton}
//               </div>
//             </div>
//           </div>
//         </Modal>
//       </>
//     );
//   }
// }

// export default TemplateFormDash;


import React, { useState, useEffect, useContext } from 'react';
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
import '../assets/styles/TemplateFormComponent.css';
import DashboardTemplate from './DashboardTemplate';
import TemplateListComponent from './TemplatesListForm';
import iconorangeplayer from '../assets/images/icon-orange-player.svg';

const TemplateFormDash =()=>{

  const [commonState, setCommonState] = useState({
    currentStepT: 0, // Default is Step 1
    templateType: 'Points',
    templateList: [7],
    open: false,
  });

    //close Icon
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

  const onOpenModal = () => {
    // setOpen(true);
    setCommonState((prevState) => ({
      ...prevState,
      open: true,
    }));
  };

  const onCloseModal = () => {
    // setOpen(false);
    setCommonState((prevState) => ({
      ...prevState,
      open: false,
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
      event.preventDefault()
      if(commonState.currentStepT===11){  
      console.log(commonState.templateType);
  }
}

  const handleBack = (x) => {
    setCommonState((prevState) => ({
      ...prevState,
      currentStepT: x,
    }));
  };

  const setTemplate = () => {
    setCommonState((prevState) => ({
      ...prevState,
      templateList:1,
    }));
  };

  const _next = () => {
    let current = commonState.currentStepT;
    if(current===0){
      setCommonState((prevState) => ({
        ...prevState,
        currentStepT: current+1,
      }));
    }
    if(current===1){
      if(commonState.templateType==='Points'){
        setCommonState((prevState) => ({
          ...prevState,
          currentStepT: 2,
        }));
      }
      if(commonState.templateType==='Pools'){
        setCommonState((prevState) => ({
          ...prevState,
          currentStepT: 3,
        }));
      }
      if(commonState.templateType==='Division'){
        setCommonState((prevState) => ({
          ...prevState,
          currentStepT: 4,
        }));
      }
    }
    
  }
  
  const _prev = () => {
    let current = commonState.currentStepT;
    if(current===1){
      setCommonState((prevState) => ({
        ...prevState,
        currentStepO:0 ,
      }));
    }
    if(current===0){
      setCommonState((prevState) => ({
        ...prevState,
        currentStepO:-1 ,
      }));
    }
  }

  const previousButton = () => {
    let current = commonState.currentStepT;
    if (current === 0 || current === 1) {
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
    let current = commonState.currentStepT;
    if (current ===1 || current===0) {
      return (
        <button
          className="WFNextButton"
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

  return(
    <>
        <div
          className="col-12 text-center new-icons-content"
          style={{ marginTop: 40 }}
        >
          <div className="container row">
            <a
              href="#/"
              className="col-md-3 text-decoration-none"
              onClick={onOpenModal}
              style={{ cursor: 'pointer' }}
            >
              <div className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
                onClick={onOpenModal}
                style={{ cursor: 'pointer' }}>
              <img src={iconorangeplayer} alt="" className="img-quick-start" />
              </div>
              <div className="upper-box-tile" onClick={onOpenModal}>+ New Template</div>
            </a>
          </div>
        </div>

       <Modal
          open={commonState.open}
          onClose={onCloseModal}
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
                : 'WizardFormComponent'
            }
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
              />

              <SavedTemplate
                currentStepT={commonState.currentStepT}
                handleChange={handleChange}
                templateList={commonState.templateList}
              />

              <TemplateStep1
                currentStepT={commonState.currentStepT}
                handleChange={handleChange}
                templateType={commonState.templateType}
                handleMainDropdown={handleDropdown}
              />

              <IndividualPoolForm
                currentStepT={commonState.currentStepT}
                handleBack={handleBack}
              />

              <IndividualPointsForm
                currentStepT={commonState.currentStepT}
                handleBack={handleBack}
              />

              <IndividualDivisionForm
                currentStepT={commonState.currentStepT}
                handleBack={handleBack}
              />

              <div className="buttons">
                {previousButton()}
                {nextButton()}
              </div>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default TemplateFormDash;