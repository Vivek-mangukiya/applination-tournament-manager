import React, { useState, useEffect } from 'react';
import '../assets/styles/WizardFormComponent.css';
import AdultStep1 from './AdultStep1';

const AdultStep3 = (props) => {
  if (props.currentStep !== 4) {
    // Prop: The current step
    return null;
  }
  return (
    <div className="As3">
      {props.skillError === true && (
        <h2 className="TemplateNameTakenCB">Please enter a value</h2>
      )}
      <h1
        className={
          props.skillError === true ? 'HeadingWithErrorCB' : 'AS1Heading'
        }
      >
        What is the skill level needed for this Division?
      </h1>
      <h4 className="Subheading">
        Pick the best fits for the needed experience
      </h4>
      <div className="FormSkillFlex">
        <div className="FormSkillFlex1">
          <label className="AS1checkbox MensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput1"
              name="Pro"
              type="checkbox"
              value="Pro"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[0].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">Pro</span>
          </label>

          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput2"
              name="Open"
              type="checkbox"
              value="Open"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[1].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">Open</span>
          </label>

          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput3"
              name="AAA"
              type="checkbox"
              value="AAA"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[2].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">AAA</span>
          </label>

          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput4"
              name="AA"
              type="checkbox"
              value="AA"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[3].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">AA</span>
          </label>

        </div>
        <div className="FormSkillFlex2">
          
          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput5"
              name="A"
              type="checkbox"
              value="A"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[4].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">A</span>
          </label>

          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput6"
              name="BB"
              type="checkbox"
              value="BB"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[5].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">BB</span>
          </label>

          
          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput9"
              name="B"
              type="checkbox"
              value="B"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[9].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">B</span>
          </label>

        </div>
        <div className="FormSkillFlex3">
          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput7"
              name="Masters"
              type="checkbox"
              value="Masters"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[6].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">Masters</span>
          </label>

          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput8"
              name="Novice"
              type="checkbox"
              value="Novice"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[7].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">Novice</span>
          </label>

          <label className="AS1checkbox WomensLabelCB" htmlFor="SkillInput">
            <input
              className="form-control"
              id="SkillInput9"
              name="Rec"
              type="checkbox"
              value="Rec"
              onChange={props.onSkillCheck} // Prop: Puts data into state
              checked={props.selectedSkill[8].checked}
            />
            <span className="AS1checkmark"></span>
            <span className="AS1label">Rec</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdultStep3;
