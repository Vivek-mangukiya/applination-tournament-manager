import React, { useState, useEffect } from 'react';
import clearIcon from '../../assets/images/icons-x-input.svg';

const TemplatePoolsInput = (props) => {
  const [inputValue, setInputValue] = useState(props.placeHolder);
  const [blurValue, setBlurValue] = useState(props.placeHolder);

  useEffect(() => {
    console.log(blurValue);
  }, [blurValue]);
  return (
    <div className="row p-0 m-0">
      <div className="col-11 p-0 m-0">
        <input
          type="text"
          placeholder={
            props.placeHolder !== undefined ? props.placeHolder : 'Input Name'
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control template-pools-input p-0 m-0"
          onBlur={() => {
            setBlurValue(inputValue);
            props.setName(inputValue);
          }}
        />
      </div>
      <div className="col-1 p-0 m-0 mt-2 text-center">
        <img
          src={clearIcon}
          alt=""
          className="mt-4"
          onClick={() => {
            setInputValue('');
            setBlurValue('');
            props.setName('');
          }}
        />
      </div>
    </div>
  );
};

export default TemplatePoolsInput;
