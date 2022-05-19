import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import '../assets/styles/WizardFormComponent.css';
import Purse from '../assets/images/purse.svg';

const AdultStep16 = (props) => {
  const [text, setText] = useState(null);
  const [description, setDescription] = useState(null);
  const [check, setCheck] = useState(null);
  const [voucher, setVoucher] = useState(null);

  useEffect(() => {
    if (text !== null && voucher === null && check === null) {
      setVoucher(false);
      setCheck(false);
    }

    console.log('text', text);
    console.log('description', description);
    console.log('check', check);
    console.log('voucher', voucher);
  }, [text, description, check, voucher]);

  useEffect(() => {
    if (check === true) {
      props.discount_applied(2);
    } else if (check === false) {
      props.discount_applied(1);
    } else {
      props.discount_applied(null);
    }
  }, [check]);

  useEffect(() => {
    if (voucher === true) {
      props.discount_voucher(2);
    } else if (voucher === false) {
      props.discount_voucher(1);
    } else {
      props.discount_applied(null);
    }
  }, [voucher]);

  if (props.currentStep !== 16) {
    // Prop: The current step
    return null;
  }

  return (
    <>
      <div className="AS9">
        <div>
          <h1 className={'Heading my-0 mx-auto row'}>
            <div className="col" onClick={() => console.log(voucher)}>
              <label
                className="AS1checkbox MensLabel my-0"
                htmlFor="JAgeRangeInput"
              >
                <input
                  className="form-control"
                  id="JAgeRangeInput1"
                  name="11U"
                  type="checkbox"
                  value="11U"
                  onChange={() => {
                    setVoucher(!voucher);
                    if (check === null) {
                      setCheck(false);
                    }
                  }} // Prop: Puts data into state
                  checked={voucher}
                />
                <span className="AS1checkmark MensCheck"></span>
                <span className="AS1label">Apply Voucher</span>
              </label>
            </div>
            <div className="col">
              {voucher ? 'Voucher' : 'Discount'} Section
            </div>
          </h1>
          <h4 className="Subheading">
            Please enter {voucher ? 'Voucher' : 'Discount'} amount and
            description.
          </h4>
          <label className="AS1checkbox MensLabel" htmlFor="JAgeRangeInput">
            <input
              className="form-control"
              id="JAgeRangeInput1"
              name="11U"
              type="checkbox"
              value="11U"
              onChange={() => {
                setCheck(!check);
                if (voucher === null) {
                  setVoucher(false);
                }
              }} // Prop: Puts data into state
              checked={check}
            />
            <span className="AS1checkmark MensCheck"></span>
            <span className="AS1label" onClick={() => console.log(check)}>
              {' '}
              {voucher ? 'Voucher' : 'Discount'} Per Player
            </span>
          </label>

          <label htmlFor="LEPrice"></label>

          <div className="FormInputR" style={{ marginTop: 10 }}>
            <NumberFormat
              pattern={'[0-9]*'}
              displayType="input"
              thousandSeparator={true}
              placeholder="00"
              prefix={'$'}
              decimalScale={2}
              className="placeholderNumber steps-number-input"
              id="LEPrice"
              min="0"
              name="lateAmount"
              onChange={(e) => {
                if (e.target.value === '') {
                  setText(null);

                  props.discountAmount(null);
                } else {
                  setText(e.target.value.replace('$', '').replace(',', ''));

                  props.discountAmount(
                    Number(e.target.value.replace('$', '').replace(',', ''))
                  );
                }
              }}
              // value={purseAmountChoice.replace(/\,/g,'').replace("$", "")}
              value={text}
              autoComplete="off"
              style={{
                // direction: 'rtl',
                fontFamily: 'FuturaMedium',
                paddingRight: 5,
                position: 'absolute',
                right: 60,
                bottom: 0,
                height: 32,
                outline: 'none',
                border: 'none',
                textAlign: 'right',
              }}
            />
          </div>
          <img className="InputPurse" src={Purse} alt=""></img>
          <div className="InputPurseWord" onClick={() => console.log(text)}>
            {check
              ? ` ${voucher ? 'Voucher' : 'Discount'} per Player`
              : `${voucher ? 'Voucher' : 'Discount'} Amount`}
          </div>
        </div>
        {/* <div className="bg-warning">hey</div> */}
      </div>
      <div
        className="FormInputR my-0 row p-0 shadow-none pt-2"
        style={{ textIndent: 0 }}
      >
        <div
          className="col-12 p-0 m-0 pt-2"
          onClick={() => console.log(description)}
        >
          <div>Description</div>
        </div>
        <div className="col-12 p-0 m-0 ">
          <input
            className={
              props.templateNameCounter
                ? 'FormInputFinalError m-0 input-discount-text'
                : 'FormInputFinal m-0 input-discount-text'
            }
            id="DivisionName"
            name="divisionName"
            type="text"
            maxLength={255}
            placeholder="Enter Description..."
            value={description} // Prop: The email input data
            onChange={(e) => {
              setDescription(e.target.value === '' ? null : e.target.value);
              props.discountText(e.target.value === '' ? null : e.target.value);
            }} // Prop: Puts data into state
            // style={{
            //   paddingLeft: 5,
            //   color: '#4a4a4a',
            //   fontFamily: 'FuturaMedium',
            //   fontSize: 14,
            //   fontWeight: 500,
            //   fontStretch: 'normal',
            //   fontStyle: 'normal',
            //   lineHeight: 'normal',
            //   letterSpacing: 'normal',
            // }}
          />
        </div>
      </div>
    </>
  );
};

export default AdultStep16;
