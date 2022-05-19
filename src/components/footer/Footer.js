import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    // <div className="footer container-fluid row ml-0 mr-0 mt-sm-5 p-0 static-bottom mt-3">
    <div className="footer container-fluid row ml-0 mr-0 mt-sm-5 p-0 fixed-bottom">
      {props.children}
    </div>
  );
};

export default Footer;
