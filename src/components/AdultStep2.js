import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';

const AdultStep2 = (props) => {
  if (props.currentStep !== 3) {
    // Prop: The current step
    return null;
  }
  return (
    <div className="AS2">
      {props.ageRangeError === true && (
        <h2 className="TemplateNameTakenCB">Please enter a value</h2>
      )}
      <h1
        className={
          props.ageRangeError === true ? 'HeadingWithErrorCB' : 'AS1Heading'
        }
      >
        {props.age === 'Dinosaur'
          ? 'What is the combined age range needed for Dinosaur Division'
          : ' What is the age range needed for this Division?'}
      </h1>
      <h4 className="Subheading">Choose from combined ages</h4>
      {props.age !== 'Dinosaur' ? (
        <div className="FormAgeFlex">
          <div className="FormAgeFlex1">
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput1"
                name="Open"
                type="checkbox"
                value="Open"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[0].checked}
              />
              <span className="AS1checkmark"></span>
              <span className="AS1label ">Open</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput9"
                name="45+"
                type="checkbox"
                value="45+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[9].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">45+</span>
            </label>
            <label
              className="AS1checkbox WomensLabelCB"
              htmlFor="AgeRangeInput"
            >
              <input
                className="form-control"
                id="AgeRangeInput2"
                name="60"
                type="checkbox"
                value="60"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[1].checked}
              />
              <span className="AS1checkmark WomensCheck"></span>
              <span className="AS1label ">60</span>
            </label>
            <label className="AS1checkbox CoedLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput3"
                name="90"
                type="checkbox"
                value="90"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[2].checked}
              />
              <span className="AS1checkmark CoedCheck"></span>
              <span className="AS1label ">90</span>
            </label>
          </div>
          <div className="FormAgeFlex2">
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput4"
                name="U26"
                type="checkbox"
                value="U26"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[3].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">U26</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput5"
                name="70"
                type="checkbox"
                value="70"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[4].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">70</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput6"
                name="Other"
                type="checkbox"
                value="Other"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[5].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">Other</span>
            </label>
            {props.selectedGender[2].checked && (
              <label
                className="AS1checkbox MensLabelCB"
                htmlFor="AgeRangeInput"
              >
                <input
                  className="form-control"
                  id="AgeRangeInput8"
                  name="Rotating Pairs"
                  type="checkbox"
                  value="Rotating Pairs"
                  onChange={props.onAgeCheck} // Prop: Puts data into state
                  checked={props.selectedAgeRange[16].checked}
                />
                <span className="AS1checkmark "></span>
                <span className="AS1label ">Rotating Pairs</span>
              </label>
            )}
          </div>
          <div className="FormAgeFlex3">
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput8"
                name="35+"
                type="checkbox"
                value="35+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[8].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">35+</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput7"
                name="50"
                type="checkbox"
                value="50"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[6].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">50</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput8"
                name="80"
                type="checkbox"
                value="80"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[7].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">80</span>
            </label>
          </div>
        </div>
      ) : (
        <div
          className="FormAgeFlex"
          onClick={console.log(props.selectedAgeRange)}
        >
          <div className="FormAgeFlex1">
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput1"
                name="60+"
                type="checkbox"
                value="60+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[10].checked}
              />
              <span className="AS1checkmark"></span>
              <span className="AS1label ">60+</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput9"
                name="65+"
                type="checkbox"
                value="65+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[11].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">65+</span>
            </label>
            <label
              className="AS1checkbox WomensLabelCB"
              htmlFor="AgeRangeInput"
            >
              <input
                className="form-control"
                id="AgeRangeInput2"
                name="70+"
                type="checkbox"
                value="70+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[12].checked}
              />
              <span className="AS1checkmark WomensCheck"></span>
              <span className="AS1label ">70+</span>
            </label>
            <label className="AS1checkbox CoedLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput3"
                name="75+"
                type="checkbox"
                value="75+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[13].checked}
              />
              <span className="AS1checkmark CoedCheck"></span>
              <span className="AS1label ">75+</span>
            </label>
          </div>
          <div className="FormAgeFlex2">
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput4"
                name="80+"
                type="checkbox"
                value="80+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[14].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">80+</span>
            </label>
            <label className="AS1checkbox MensLabelCB" htmlFor="AgeRangeInput">
              <input
                className="form-control"
                id="AgeRangeInput5"
                name="85+"
                type="checkbox"
                value="85+"
                onChange={props.onAgeCheck} // Prop: Puts data into state
                checked={props.selectedAgeRange[15].checked}
              />
              <span className="AS1checkmark "></span>
              <span className="AS1label ">85+</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdultStep2;
