import React from 'react';

const ShadowContainerDropdown = (props) => {
  return (
    <div className="container">
      <div className={props.mainClasses}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
          <img src={props.srcImg} alt="" className="img-fluid " />
        </div>
        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 font">
          {props.text}
        </div>
        <div
          className="col-6 p-0 text-right  m-auto text-capitalize input-styling pr-1"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <div> {props.stateData}</div>
          <div className="ml-1">{props.children}</div>
          {/* <span className="ml-1">{props.children}</span> */}
        </div>
        {/* <div className="col-1 p-0 text-right m-auto pr-1">{props.children}</div> */}
      </div>
    </div>
  );
};

export default ShadowContainerDropdown;
