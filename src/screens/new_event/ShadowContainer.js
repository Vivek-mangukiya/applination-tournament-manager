import React from 'react';

const ShadowContainer = (props) => {
  return (
    <div className="container">
      <div className={props.mainClasses}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
          <img src={props.srcImg} alt="" className="img-fluid " />
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 font">
          {props.text}
        </div>
        <div className="col-6 p-0 text-right  m-auto input-styling">
          {props.stateData}
          {/* <span className="ml-1">{props.children}</span> */}
        </div>
        <div className="col-1 p-0 text-right m-auto pr-1">{props.children}</div>
      </div>
    </div>
  );
};

export default ShadowContainer;
