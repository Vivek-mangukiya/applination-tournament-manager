import React,{useState,useEffect} from 'react';
import '../assets/styles/WizardFormComponent.css'

const JuniorStep4 = (props) => {
  if (props.currentStep !== 17) { // Prop: The current step
    return null
  }
  return(
            <div className="AS1">
            {props.jLevelError===true && (
              <h2 className="TemplateNameTakenCB">Please enter a value</h2>
            )}
            <h1 className={props.jLevelError === true? "AS1HeadingWithError" : "AS1Heading"}>What Level group(s) are needed for this Division?</h1>
            <h4 className="Subheading">Make selections based on the options below</h4>
            {/* <Application/> */}
            <div className="JGenderSection">
            <div className="">
            <label htmlFor="JLevelInput" className="AS1checkbox JgenderInput">
                <input
                  className="form-control"
                  id="JLevelInput1"
                  name="L1"
                  type="checkbox"
                  value="L1"
                  onChange={props.onjLevelCheck} // Prop: Puts data into state
                  checked={props.jselectedLevel[0].checked}
                />
                <span className="AS1checkmark MensCheck"></span>
                <span className='AS1label '>Level-1</span>
              </label>
            </div>
            <div className="JSgirls">
              <label htmlFor="JLevelInput" className="AS1checkbox">
                <input
                  className="form-control"
                  id="JLevelInput2"
                  name="L2"
                  type="checkbox"
                  value="L2"
                  onChange={props.onjLevelCheck} // Prop: Puts data into state
                  checked={props.jselectedLevel[1].checked}
                />
                <span className="AS1checkmark WomensCheck"></span>
                <span className='AS1label '>Level-2</span>
              </label>
            </div>
            <div className="JScoed">
              <label htmlFor="JLevelInput" className="AS1checkbox">
                <input
                  className="form-control"
                  id="JLevelInput3"
                  name="L3"
                  type="checkbox"
                  value="L3"
                  onChange={props.onjLevelCheck} // Prop: Puts data into state
                  checked={props.jselectedLevel[2].checked}
                />
                <span className="AS1checkmark CoedCheck"></span>
                <span className='AS1label '>Level-3</span>
              </label>
            </div>

            <div className="JSgirls">
              <label htmlFor="JLevelInput" className="AS1checkbox">
                <input
                  className="form-control"
                  id="JLevelInput4"
                  name="L4"
                  type="checkbox"
                  value="L4"
                  onChange={props.onjLevelCheck} // Prop: Puts data into state
                  checked={props.jselectedLevel[3].checked}
                />
                <span className="AS1checkmark WomensCheck"></span>
                <span className='AS1label '>Level-4</span>
              </label>
            </div>
            </div>
          </div>
          )
}

export default JuniorStep4;