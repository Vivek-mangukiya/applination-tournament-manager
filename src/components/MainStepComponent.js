import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import birthdayicon from '../assets/images/birthday.svg';
import DropdownModals from './DropdownModals';

const MainStepComponent = (props) => {
  const [modal1, setModal1] = useState('');
  useEffect(() => {
    props.handleMainDropdown(modal1);
  }, [modal1]);
  if (props.currentStep !== 1) {
    // Prop: The current step
    return null;
  }

  // handleLangChange = () => {
  //   var lang = modal1
  //   props.handleMainDropdown(lang);
  // }

  // The markup for the Step 1 UI
  return (
    <>
      <div className="MainStep">
        <div style={{ position: 'relative' }}>
          {props.ageError === true && (
            <h2 className="TemplateNameTaken">Please enter a value</h2>
          )}
          <h2
            className={props.ageError === true ? 'HeadingWithError' : 'Heading'}
          >
            What type of age bracket is needed?
          </h2>
          <h4 className="Subheading">
            Make a selection based on the desired age group
          </h4>

          {/* <Dropdown/> */}
          <div className="DropdownBar">
            <img className="" src={birthdayicon} alt=""></img>
            <div className="PLACEHOLDER">Age Bracket</div>
            <div className="DivValue">{modal1}</div>
            <DropdownModals>
              <li onClick={() => setModal1('Adult')} className="dropdown-text">
                Adult
              </li>
              <li onClick={() => setModal1('Junior')} className="dropdown-text">
                Junior
              </li>
              <li
                onClick={() => setModal1('Dinosaur')}
                className="dropdown-text"
              >
                Dinosaur
              </li>
              <li
                onClick={() => setModal1('Father-Daughter')}
                className="dropdown-text"
              >
                Father-Daughter
              </li>
              <li
                onClick={() => setModal1('Father-Son')}
                className="dropdown-text"
              >
                Father-Son
              </li>
              <li
                onClick={() => setModal1('Mother-Daughter')}
                className="dropdown-text"
              >
                Mother-Daughter
              </li>
              <li
                onClick={() => setModal1('Mother-Son')}
                className="dropdown-text"
              >
                Mother-Son
              </li>
            </DropdownModals>
            {/* {props.handleMainDropdown(modal1)} */}
          </div>
        </div>
      </div>
    </>
  );
};
export default MainStepComponent;
