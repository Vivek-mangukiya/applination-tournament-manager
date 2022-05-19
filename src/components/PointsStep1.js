import React, { useState, useEffect } from 'react';
import '../assets/styles/PoolFormComponent.css';
import iconorangepplus from '../assets/images/icon-orange-players-plus.svg';
import DropdownModals from './DropdownModals';

const PointsStep1 = (props) => {
  const [modal1, setModal1] = useState('');

  let info = [];

  for (let i = 1; i <= 40; i++) {
    info.push(i);
  }

  useEffect(() => {
    // console.log("Updating dropdown state")
    props.handleMainDropdown(modal1);
  }, [modal1]);

  if (props.currentStepS !== 1) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="container-fluid MainStep">
      <div className="row">
        <div className="col-12">
          <div>
          {props.spotsError===true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
          )}
            <h2 className={props.spotsError === true? "HeadingWithError" : "Heading"}>How many payout spots do you?</h2>
            <h4 className="Subheading">
              Make a selection based on the desired number
            </h4>
            <div className="DropdownBar">
              <img className="" src={iconorangepplus} alt=""></img>
              <div className="PLACEHOLDER">Payout spots</div>
              <div className="DivValue">{modal1}</div>
              <DropdownModals>
                {info.map((data, i) => (
                  <li key={i} onClick={() => setModal1(data)}>
                    {data}
                  </li>
                ))}
                {/* <li onClick={()=>setModal1("4")}>4</li>
              <li onClick={()=>setModal1("8")}>8</li>
              <li onClick={()=>setModal1("12")}>12</li>
              <li onClick={()=>setModal1("16")}>16</li>
              <li onClick={()=>setModal1("20")}>20</li>
              <li onClick={()=>setModal1("24")}>24</li>
              <li onClick={()=>setModal1("28")}>28</li>
              <li onClick={()=>setModal1("32")}>32</li>
              <li onClick={()=>setModal1("36")}>36</li>
              <li onClick={()=>setModal1("40")}>40</li> */}
              </DropdownModals>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsStep1;
