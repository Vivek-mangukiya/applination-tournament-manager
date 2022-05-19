import React, { useContext, useState, useEffect } from 'react';
import '../assets/styles/SavedTemplate.css';
import iconpencil from '../assets/images/pencil.svg';
import EventContext from '../context/event/eventContext';
import DropdownTemplate from './TemplateDropdown';

const SavedDivision = (props) => {
  const [modal1, setModal1] = useState('');
  const [modalId, setModalId] = useState('');

  useEffect(() => {
    props.handleChange({ modalId, modal1 });
    console.log('Template id selected:', modalId);
  }, [modal1]);

  const eventContext = useContext(EventContext);
  const { eventDropdownData, dropDownFun } = eventContext;

  useEffect(() => {
    dropDownFun();
  }, []);

  if (
    (props.currentStep !== 0 && eventDropdownData === null) ||
    props.currentStep !== 0
  ) {
    return null;
  }
  // console.log("eventdropdowndata in modal:",eventDropdownData.divisionTemplates)

  return (
    <div className="DMainStep">
      <h2 className="THeading">Already have a saved Template?</h2>
      <h4 className="TSubheading">
        Create a new Division or select from one below
      </h4>
      <label htmlFor="ageInput" className="select"></label>
      <div className="DropdownBar" style={{ marginTop: 0 }}>
        <img className="" src={iconpencil} alt=""></img>
        <div className="PLACEHOLDER">Template</div>
        <div className="DivValue ">
          <div className="text-truncate">{modal1}</div>
        </div>
        <DropdownTemplate width={true}>
          {eventDropdownData &&
            eventDropdownData.divisionTemplates.map((address) => (
              <li
                key={address.id}
                address={address.name}
                onClick={() => {
                  setModal1(address.name);
                  setModalId(address.id);
                }}
              >
                {address.name}
              </li>
            ))}
          ;
        </DropdownTemplate>
      </div>
    </div>
  );
};

export default SavedDivision;
