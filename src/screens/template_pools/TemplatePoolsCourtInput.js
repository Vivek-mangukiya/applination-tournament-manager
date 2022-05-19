import React, { useState, useEffect } from 'react';
import clearIcon from '../../assets/images/icons-x-input.svg';

const TemplatePoolsCourtInput = (props) => {
  const [inputValue, setInputValue] = useState(
    props.placeHolder !== undefined ? props.placeHolder : ''
  );
  const [blurValue, setBlurValue] = useState(
    props.placeHolder !== undefined ? props.placeHolder : ''
  );

  useEffect(() => {
    console.log(blurValue);
  }, [blurValue]);
  return (
    <div className="row p-0 m-0" style={{ borderBottom: '1px solid black' }}>
      <div className="col-11 p-0 m-0">
        <input
          type="text"
          placeholder={props.placeHolder !== undefined ? props.placeHolder : ''}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control template-pools-inner-input p-0 m-0"
          onBlur={() => {
            setBlurValue(inputValue);
            props.setName(inputValue);
          }}
        />
      </div>
      <div className="col-1 p-0 m-0 text-right">
        <img
          src={clearIcon}
          alt=""
          className="mt-3"
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

export default TemplatePoolsCourtInput;
