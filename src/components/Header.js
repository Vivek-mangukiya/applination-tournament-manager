import React from 'react';
// import './Header.css';

const Header = (props) => {
  return (
    <div>
      <div className="header" style={props.style}>
        {props.children}
      </div>
      <hr className="hr-top" />
    </div>
  );
};

export default Header;
