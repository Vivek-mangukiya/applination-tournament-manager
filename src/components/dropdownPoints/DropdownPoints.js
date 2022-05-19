import React from 'react';
import './DropdownPoints.css';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';

const DropdownPoints = (props) => {
  return (
    <a href="#/" id="points-hamburger" style={{ width: 16, height: 20 }}>
      <div>
        <img src={downArrow} alt="" style={{ width: 16, height: 16 }} />
        <span>
          <ul>
            <li onClick={props.ten}>10</li>
            <li onClick={props.twenty}>20</li>
            <li onClick={props.thirty}>30</li>
            <li onClick={props.forty}>40</li>
          </ul>
        </span>
      </div>
    </a>
  );
};

export default DropdownPoints;
