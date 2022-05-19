import React,{useState, useEffect} from 'react';
import '../assets/styles/WizardFormComponent.css'
import iconbirthday from '../assets/images/icon-orange-pencil.svg'
import DropdownModals from './DropdownModals'

const TemplateStep1 =(props)=>{
  const [modal1, setModal1] = useState('');

  useEffect(()=>{
    // console.log("Updating dropdown state")
    props.handleMainDropdown(modal1);
  },[modal1])

      if (props.currentStepT !== 0) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className={props.templateError === true? "TMainStepWithError" : "TMainStep"}>
          <div>
          {props.templateError===true && (
            <h2 className="TemplateNameTaken">Please select a value</h2>
          )}
          <h2 className="THeading">What type of template is needed?</h2>
          <h4 className="TSubheading">Make a selection based on the desired needs</h4>
          <div className="DropdownBar">
          <img className="" src={iconbirthday} alt = ""></img>
              <div className="PLACEHOLDER">Template</div>
              <div className="DivValue">{modal1}</div>
              <DropdownModals>
                <li onClick={()=>setModal1("Points")} style={{fontFamily:"FuturaMedium"}}>Points</li>
                <li onClick={()=>setModal1("Pools")} style={{fontFamily:"FuturaMedium"}}>Pools</li>
                <li onClick={()=>setModal1("Division")} style={{fontFamily:"FuturaMedium"}}>Division</li>
              </DropdownModals>
            </div>
          </div>
        </div>
      )
    }
export default TemplateStep1;
