import React, { useState, useEffect } from 'react';
import '../assets/styles/PoolFormComponent.css';
import iconpools from '../assets/images/pools.svg';
import DropdownModals from './DropdownModals';

const PoolStep2 = (props) => {
  const [modal1, setModal1] = useState('');

  let info = [];

  for (let i = 0; i <= 30; i++) {
    info.push(i + 2);
  }

  useEffect(() => {
    // console.log("Updating dropdown state")
    props.handleMainDropdown(modal1);
  }, [modal1]);

  if (props.currentStepO !== 2) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="MainStep">
      <div>
      {props.poolsError===true && (
          <h2 className="TemplateNameTaken">Please enter a value</h2>
          )}
        <h2 className={props.poolsError === true? "HeadingWithError" : "Heading"}>How many pools for the teams?</h2>
        <h4 className="Subheading">
          Make a selection based on the desired number
        </h4>
        <div className="DropdownBar">
          <img className="" src={iconpools} alt=""></img>
          <div className="PLACEHOLDER">Number of Pools</div>
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
  );
};

export default PoolStep2;
