import React, {
  useState,
  useEffect,
  useContext,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useMemo,
} from 'react';
import DropdownModals from './DropdownModals';
// import './TemplateDivision.css';
import '../assets/styles/TemplateDivisionSaved.css';
import clearIcon from '../assets/images/icons-x-input.svg';
import divisionImage from '../assets/images/division.svg';
import downArrow from '../assets/images/icon-menu-chevron-down.svg';
import calenderIcon from '../assets/images/icon-orange-calender.svg';
import calenderIconRight from '../assets/images/icon-menu-calendar.svg';
import addNewIcon from '../assets/images/icon-orange-players-plus.svg';
import walletIcon from '../assets/images/wallet.svg';
import playersIcon from '../assets/images/icon-orange-players.svg';
import birdIcon from '../assets/images/bird.svg';
import pointsIcon from '../assets/images/icon-orange-points.svg';
import emailIcon from '../assets/images/icon-orange-email.svg';
import purseIcon from '../assets/images/icon-orange-purse.svg';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import EventContext from '../context/event/eventContext';
import templateDivisionContext from '../context/templateDivision/templateDivisionContext';
import { DatePicker } from 'antd';
import templateDivisionReducer from '../context/templateDivision/templateDivisionReducer';
import hamburgerIcon from '../assets/images/icon-menu-hamburger.svg';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import backIcon from '../assets/images/icon-menu-back.svg';
// import moment from 'moment';
import { Modal } from 'react-responsive-modal';

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <g fill="none" fillRule="evenodd">
      <g fill="#333">
        <g>
          <path
            d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
            transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
          />
        </g>
      </g>
    </g>
  </svg>
);

const TemplateSaved = (props) => {
  // const childRef = useRef();

  const eventContext = useContext(EventContext);
  const { divisionData, editDivisions, dropDownFun, eventDropdownData } =
    eventContext;

  const templateContext = useContext(templateDivisionContext);
  const { templateData, getTemplate, templateId, setTemplateStatus } =
    templateContext;

  useEffect(() => {
    console.log('Template id by url:', parseInt(props.match.params.id));
    getTemplate(parseInt(props.match.params.id), 'Divison');
    dropDownFun();
  }, []);

  useEffect(() => {
    if (templateData !== null) console.log('templateData', templateData);
  }, [templateData]);

  // useEffect(() => {
  //   console.log('templateData:',templateData);

  // }, [templateData])

  const [datas, setData] = useState(null);

  const parent = (data) => {
    setData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const childRef = useRef();

  // useEffect(() => {
  //   dropDownFun();
  // }, [])

  // const [placementPoints, setPlacementPoints] = useState(props.division.point_temp_name !== null? props.division.point_temp_name: "")
  // const [registrationCap1, setregistrationCap1] = useState(props.division.registration_cap !== null? props.division.registration_cap: "");
  // const [teamSize1, setTeamSize1] = useState(templateData && templateData.team_size !== null? templateData.team_size: '' );
  // const [format, setFormat] = useState(templateData !==null && templateData.format !== null? templateData.format: '');;
  // const [earlyBird1, setEarlyBird1] = useState(templateData !==null&& templateData.early_bird ?templateData.early_bird: '');
  // const [earlyBirdDate1, setEarlyBirdDate1] = useState(templateData !==null && templateData.early_bird_date?templateData.early_bird_date: '');
  // const [earlyBirdAmount1, setEarlyBirdAmount1] = useState(templateData !==null && templateData.early_bird_amount !==null?templateData.early_bird_amount: '');
  // const [registrationAmount1, setRegistrationAmount1] = useState(templateData !==null && templateData.registration_amount !== null? templateData.registration_amount: '');
  // const [lateAmount1, setLateAmount1] = useState(templateData !==null && templateData.late_amount !== null? templateData.late_amount: '');

  const [openHamburger, setOpenHamburger] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenHamburger(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  }

  var Mens,
    Womens,
    Coed,
    Open,
    Sixty,
    Ninety,
    U26,
    Seventy,
    Other,
    Fifty,
    ThirtyFive,
    FourtyFive,
    Eighty,
    RotatingPairs,
    Pro,
    AA,
    Masters,
    Sopen,
    A,
    Novice,
    AAA,
    BB,
    Rec,
    B,
    Boys,
    Girls,
    Jcoed,
    ElevenUnder,
    TwelveUnder,
    ThirteenUnder,
    FourteenUnder,
    FifteenUnder,
    SixteenUnder,
    SeventeenUnder,
    EighteenUnder,
    Club,
    Silver,
    HighSchool,
    Bronze,
    Gold,
    SixtyPlus,
    SixtyFivePlus,
    SeventyPlus,
    SeventyFivePlus,
    EightyPlus,
    EightyFivePlus,
    FifteenPlus = false;

  const [checkBox, setCheckBox] = useState({
    Mens: false,
    Womens: false,
    Coed: false,
    Open: false,
    Sixty: false,
    Ninety: false,
    U26: false,
    Seventy: false,
    Other: false,
    Fifty: false,
    ThirtyFive: false,
    FourtyFive: false,
    Eighty: false,
    RotatingPairs: false,
    Pro: false,
    AA: false,
    Masters: false,
    Sopen: false,
    A: false,
    Novice: false,
    AAA: false,
    BB: false,
    Rec: false,
    B: false,
    Boys: false,
    Girls: false,
    Jcoed: false,
    ElevenUnder: false,
    TwelveUnder: false,
    ThirteenUnder: false,
    FourteenUnder: false,
    FifteenUnder: false,
    SixteenUnder: false,
    SeventeenUnder: false,
    EighteenUnder: false,
    Club: false,
    Silver: false,
    HighSchool: false,
    Bronze: false,
    Gold: false,
  });

  templateData !== null &&
    templateData.gender.map((gender) => {
      // if(templateData.age_bracket==='adult'){
      if (gender === 'Mens') {
        Mens = true;
      }
      if (gender === 'Womens') {
        Womens = true;
      }
      if (gender === 'Coed') {
        Coed = true;
      }
      if (gender === 'Boys') {
        Boys = true;
      }
      if (gender === 'Girls') {
        Girls = true;
      }
      if (gender === 'Coed') {
        Jcoed = true;
      }
    });

  templateData !== null &&
    templateData.age_range.map((gender) => {
      if (gender === 'Open') {
        Open = true;
      }
      if (gender === 'U26') {
        U26 = true;
      }
      if (gender === '50') {
        Fifty = true;
      }
      if (gender === '35') {
        ThirtyFive = true;
      }
      if (gender === '45') {
        FourtyFive = true;
      }
      if (gender === '60') {
        Sixty = true;
      }
      if (gender === '70') {
        Seventy = true;
      }
      if (gender === '80') {
        Eighty = true;
      }
      if (gender === 'Rotating Pairs') {
        RotatingPairs = true;
      }
      if (gender === '90') {
        Ninety = true;
      }
      if (gender === 'Other') {
        Other = true;
      }
      if (gender === '11U') {
        ElevenUnder = true;
      }
      if (gender === '12U') {
        TwelveUnder = true;
      }
      if (gender === '13U') {
        ThirteenUnder = true;
      }
      if (gender === '14U') {
        FourteenUnder = true;
      }
      if (gender === '15U') {
        FifteenUnder = true;
      }
      if (gender === '16U') {
        SixteenUnder = true;
      }
      if (gender === '17U') {
        SeventeenUnder = true;
      }
      if (gender === '18U') {
        EighteenUnder = true;
      }
      if (gender === '60+') {
        SixtyPlus = true;
      }
      if (gender === '65+') {
        SixtyFivePlus = true;
      }
      if (gender === '70+') {
        SeventyPlus = true;
      }
      if (gender === '75+') {
        SeventyFivePlus = true;
      }
      if (gender === '80+') {
        EightyPlus = true;
      }
      if (gender === '85+') {
        EightyFivePlus = true;
      }
      if (gender === '15+') {
        FifteenPlus = true;
      }
    });

  templateData !== null &&
    templateData.skill_level.map((gender) => {
      if (gender === 'Pro') {
        Pro = true;
      }
      if (gender === 'AA') {
        AA = true;
      }
      if (gender === 'Masters') {
        Masters = true;
      }
      if (gender === 'Open') {
        Sopen = true;
      }
      if (gender === 'A') {
        A = true;
      }
      if (gender === 'Novice') {
        Novice = true;
      }
      if (gender === '90') {
        Ninety = true;
      }
      if (gender === 'AAA') {
        AAA = true;
      }
      if (gender === 'BB') {
        BB = true;
      }
      if (gender === 'Rec') {
        Rec = true;
      }
      if (gender === 'B') {
        B = true;
      }
      if (gender === 'Club') {
        Club = true;
      }
      if (gender === 'Silver') {
        Silver = true;
      }
      if (gender === 'Gold') {
        Gold = true;
      }
      if (gender === 'Bronze') {
        Bronze = true;
      }
      if (gender === 'High School') {
        HighSchool = true;
      }
    });

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const onDelete = async () => {
    // setStatus('Deleted')
    console.log(
      "Template to be deleted's id:",
      parseInt(props.match.params.id)
    );
    const data = { template_id: parseInt(props.match.params.id) };
    await setTemplateStatus({
      data: JSON.stringify(parseInt(props.match.params.id)),
    });
    await setDeleteModal(true);
    await setTimeout(() => {
      props.history.push('/TemplateTable');
    }, 3000);
  };

  return (
    <>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      {templateData === null ? (
        <div className="col-12 text-center loading_height">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="new-event-profile container p-0">
          {/* { templates.map((template, i) => (
             <> */}
          <div className="row" style={{ marginTop: 142 }}>
            <div className="col-5 m-auto text-right p-0">
              {/* Hamburger */}
              <a
                href="#/"
                className={openHamburger ? 'tri_top_visible' : 'tri_top_hidden'}
                id="score-hamburger"
                ref={ref}
                onClick={() => setOpenHamburger(!openHamburger)}
              >
                <div>
                  <img src={hamburgerIcon} alt="" />
                  {openHamburger && (
                    <span
                      style={{ width: 142, height: 89, padding: 0, top: 29 }}
                      className="dropdown_animation"
                    >
                      <ul>
                        <li
                          onClick={async () => {
                            // await getTemplate(templateId);
                            await props.history.push(
                              `/templateEdit/${parseInt(props.match.params.id)}`
                            );
                          }}
                        >
                          Edit
                        </li>
                        <li
                          onClick={async () =>
                            await props.history.push(
                              `/templateDivisionDuplicate/${parseInt(
                                props.match.params.id
                              )}`
                            )
                          }
                        >
                          Duplicate
                        </li>
                        <li style={{ color: '#ff2072' }} onClick={onOpenModal}>
                          Delete
                        </li>
                      </ul>
                    </span>
                  )}
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-5 m-auto text-center">
              <div className="row">
                <div className="col-12">
                  {/* image and event name */}
                  <div className="row">
                    <div className="col-4 p-0 text-left">
                      <img
                        // onClick={() => childRef.current.onSave()}
                        src={divisionImage}
                        alt=""
                        className="img-fluid"
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                        }}
                      />
                    </div>
                    <div
                      className="col-8 m-auto p-0"
                      style={{ borderBottom: '1px solid #979797' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'start',
                        }}
                        className="row"
                      >
                        <div
                          className="col-10 form-control event-input text-truncate"
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'start',
                            alignContent: 'end',
                          }}
                        >
                          {templateData.name}
                        </div>
                        {/* <div className="mt-auto mb-auto ml-auto col-2">
                          <img src={clearIcon} alt="" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 p-0" style={{ marginTop: 24 }}>
                  <div>
                    {/*Details */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">
                        Global Details
                      </div>
                      {/* Team Size */}
                      <div className="container">
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={playersIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Maximum Number of Teams Allowed{' '}
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {templateData && templateData.team_size}
                          </div>
                        </div>
                      </div>

                      {/* Format */}
                      <div className="container">
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={playersIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Format
                          </div>
                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {/* {templateData && templateData.format } */}
                            {/* {templateData && templateData.format===2?"2v2":(templateData.format===4?"4v4":"6v6") } */}
                            {/* {templateData && templateData.format !== null
                              ? templateData.format === 2
                                ? '2v2'
                                : templateData.format === 4
                                ? '4v4'
                                : templateData.format === 3
                                ? '3v3'
                                : '6v6'
                              : ''} */}
                            {templateData &&
                              templateData.format !== null &&
                              `${templateData.format}v${templateData.format}`}
                          </div>
                        </div>
                      </div>

                      {/* Gender */}
                      {!templateData.gender.includes('Father-Daughter') &&
                        !templateData.gender.includes('Father-Son') &&
                        !templateData.gender.includes('Mother-Daughter') &&
                        !templateData.gender.includes('Mother-Son') &&
                        !templateData.gender.includes('') && (
                          <div className="container">
                            <div className="row shadow-box">
                              <div className="col-1 p-0 text-left pl-2">
                                <img
                                  src={playersIcon}
                                  alt=""
                                  className="img-fluid mb-1 mt-2"
                                />
                              </div>
                              <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto ">
                                Gender
                              </div>
                              <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto">
                                {/* {templateData !== null &&
                                templateData.gender.length > 0 &&
                                templateData.gender.join(' ').replace(' ', ',')} */}
                              </div>
                            </div>

                            {templateData.age_bracket === 'adult' ||
                            templateData.age_bracket === 'Dinosaur' ? (
                              <div className="p-0 row">
                                <label
                                  className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="genderInputM"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control disabledCB"
                                    // id="genderInputM"
                                    id="genderInputM"
                                    name="Mens"
                                    type="checkbox"
                                    value="Mens"
                                    disabled
                                    // checked={false}
                                    checked={Mens ? true : false}

                                    // checked="false"
                                    // onChange={props.onCheck} // Prop: Puts data into state
                                    // checked={props.selectedGender[0].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Men's</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="genderInputW"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control"
                                    id="genderInputW"
                                    name="Womens"
                                    type="checkbox"
                                    value="Womens"
                                    //   readOnly="true"
                                    // checked='false'
                                    disabled
                                    checked={Womens ? true : false}

                                    // onChange={props.onCheck} // Prop: Puts data into state
                                    // checked={props.selectedGender[1].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Women's</span>
                                </label>
                                {templateData.age_bracket === 'adult' && (
                                  <label
                                    className="AS1checkboxTemp CoedLabelTemp col-4 p-0 pl-5"
                                    htmlFor="genderInputC"
                                    style={{ marginTop: 10 }}
                                  >
                                    <input
                                      className="form-control"
                                      id="genderInputC"
                                      name="Coed"
                                      type="checkbox"
                                      value="Coed"
                                      //   readOnly="true"
                                      disabled
                                      checked={Coed ? true : false}
                                      // onChange={props.onCheck} // Prop: Puts data into state
                                      // checked={props.selectedGender[2].checked}
                                    />
                                    <span className="AS1checkmarkTemp ml-5"></span>
                                    <span className="AS1labelTemp">Co-ed</span>
                                  </label>
                                )}
                              </div>
                            ) : null}
                            {templateData.age_bracket === 'junior' && (
                              <div className="p-0 row">
                                <label
                                  htmlFor="JgenderInput"
                                  className="AS1checkboxTemp JgenderInput col-4 p-0 pl-5"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control"
                                    id="JgenderInput1"
                                    name="Boys"
                                    type="checkbox"
                                    value="Boys"
                                    checked={Boys ? true : false}
                                    // onChange={props.onjCheck} // Prop: Puts data into state
                                    // checked={props.jselectedGender[0].checked}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Boys</span>
                                </label>
                                <label
                                  htmlFor="JgenderInput"
                                  className="AS1checkboxTemp col-4 p-0 pl-5"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control"
                                    id="JgenderInput2"
                                    name="Girls"
                                    type="checkbox"
                                    value="Girls"
                                    checked={Girls ? true : false}
                                  />
                                  <span className="AS1checkmarkTemp WomensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Girls</span>
                                </label>
                                <label
                                  htmlFor="JgenderInput"
                                  className="AS1checkboxTemp col-4 p-0 pl-5"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control"
                                    id="JgenderInput3"
                                    name="Coed"
                                    type="checkbox"
                                    value="Coed"
                                    checked={Jcoed ? true : false}
                                    // onChange={props.onjCheck} // Prop: Puts data into state
                                    // checked={props.jselectedGender[2].checked}
                                  />
                                  <span className="AS1checkmarkTemp CoedCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Co-ed</span>
                                </label>
                              </div>
                            )}
                          </div>
                        )}

                      {/* Age Range */}
                      <div className="container">
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={playersIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Age Range
                          </div>
                          <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto"></div>
                        </div>
                        {templateData.age_bracket === 'adult' && (
                          <>
                            {/* // <div className="p-0 row"> */}
                            {/* <div className="FormAgeFlex"> */}
                            <div className="FormAgeFlex1Temp row p-0">
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput1"
                                  name="Open"
                                  type="checkbox"
                                  value="Open"
                                  // checked
                                  checked={Open ? true : false}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">Open</span>
                              </label>
                              <label
                                className="AS1checkboxTemp WomensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput2"
                                  name="Sixty"
                                  type="checkbox"
                                  value="60"
                                  // checked
                                  checked={Sixty ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[1].checked}
                                />
                                <span className="AS1checkmarkTemp WomensCheck ml-5"></span>
                                <span className="AS1labelTemp ">60</span>
                              </label>
                              <label
                                className="AS1checkboxTemp CoedLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput3"
                                  name="Ninety"
                                  type="checkbox"
                                  value="90"
                                  disabled
                                  checked={Ninety ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[2].checked}
                                />
                                <span className="AS1checkmarkTemp CoedCheck ml-5"></span>
                                <span className="AS1labelTemp ">90</span>
                              </label>
                            </div>
                            <div className="FormAgeFlex1Temp row p-0">
                              {/* <div className="FormAgeFlex2 d-flex flex-row"> */}
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput4"
                                  name="U26"
                                  type="checkbox"
                                  value="U26"
                                  // checked
                                  checked={U26 ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[3].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">U26</span>
                              </label>
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput5"
                                  name="Seventy"
                                  type="checkbox"
                                  value="70"
                                  disabled
                                  checked={Seventy ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[4].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">70</span>
                              </label>
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput6"
                                  name="Other"
                                  type="checkbox"
                                  value="Other"
                                  disabled
                                  checked={Other ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[5].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">Other</span>
                              </label>
                            </div>
                            {/* </div> */}
                            <div className="FormAgeFlex1Temp row p-0">
                              {/* <div className="FormAgeFlex3 d-flex flex-row"> */}
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput10"
                                  name="35"
                                  type="checkbox"
                                  value="35"
                                  disabled
                                  checked={ThirtyFive ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[6].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">35</span>
                              </label>
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput9"
                                  name="45"
                                  type="checkbox"
                                  value="45"
                                  disabled
                                  checked={FourtyFive ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[6].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">45</span>
                              </label>
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput7"
                                  name="Fifty"
                                  type="checkbox"
                                  value="Fifty"
                                  disabled
                                  checked={Fifty ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[6].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">50</span>
                              </label>
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput8"
                                  name="Eighty"
                                  type="checkbox"
                                  value="Eighty"
                                  // checked
                                  checked={Eighty ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[7].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">80</span>
                              </label>
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="AgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="AgeRangeInput8"
                                  name="Eighty"
                                  type="checkbox"
                                  value="Eighty"
                                  // checked
                                  checked={RotatingPairs ? true : false}
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[7].checked}
                                />
                                <span className="AS1checkmarkTemp ml-5"></span>
                                <span className="AS1labelTemp ">
                                  Rotating Pairs
                                </span>
                              </label>
                            </div>

                            {/* </div> */}
                            {/* // </div> */}
                          </>
                        )}
                        {templateData.age_bracket === 'junior' ||
                        templateData.age_bracket === 'Father-Daughter' ||
                        templateData.age_bracket === 'Father-Son' ||
                        templateData.age_bracket === 'Mother-Daughter' ||
                        templateData.age_bracket === 'Mother-Son' ? (
                          // <div className="p-0 row">
                          // <div className="FormJAgeFlex">
                          <>
                            <div className="FormAgeFlex1Temp row p-0">
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput1"
                                  name="11-U"
                                  type="checkbox"
                                  value="11-U"
                                  checked={ElevenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[0].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">11U</span>
                              </label>

                              <label
                                className="AS1checkboxTemp WomensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput2"
                                  name="12-U"
                                  type="checkbox"
                                  value="12-U"
                                  checked={TwelveUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[1].checked}
                                />
                                <span className="AS1checkmarkTemp WomensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">12U</span>
                              </label>

                              <label
                                className="AS1checkboxTemp CoedLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput3"
                                  name="13-U"
                                  type="checkbox"
                                  value="13-U"
                                  checked={ThirteenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[2].checked}
                                />
                                <span className="AS1checkmarkTemp CoedCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">13U</span>
                              </label>
                            </div>
                            <div className="FormAgeFlex1Temp row p-0">
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput4"
                                  name="14-U"
                                  type="checkbox"
                                  value="14-U"
                                  checked={FourteenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[3].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">14U</span>
                              </label>

                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput5"
                                  name="15-U"
                                  type="checkbox"
                                  value="15-U"
                                  checked={FifteenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[4].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">15U</span>
                              </label>

                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput6"
                                  name="16-U"
                                  type="checkbox"
                                  value="16-U"
                                  checked={SixteenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[5].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">16U</span>
                              </label>
                            </div>
                            <div className="FormAgeFlex1Temp row p-0">
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput7"
                                  name="17-U"
                                  type="checkbox"
                                  value="17-U"
                                  checked={SeventeenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[6].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">17U</span>
                              </label>

                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput8"
                                  name="18-U"
                                  type="checkbox"
                                  value="18-U"
                                  checked={EighteenUnder ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[7].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">18U</span>
                              </label>
                              {templateData.age_bracket !== 'junior' && (
                                <label
                                  className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="JAgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="JAgeRangeInput7"
                                    name="15+"
                                    type="checkbox"
                                    value="15+"
                                    checked={FifteenPlus ? true : false}
                                    // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                    // checked={props.jselectedAgeRange[6].checked}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp">15+</span>
                                </label>
                              )}
                            </div>
                          </>
                        ) : null}

                        {templateData.age_bracket === 'Dinosaur' && (
                          // <div className="p-0 row">
                          // <div className="FormJAgeFlex">
                          <>
                            <div className="FormAgeFlex1Temp row p-0">
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput1"
                                  name="60+"
                                  type="checkbox"
                                  value="60+"
                                  checked={SixtyPlus ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[0].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">60+</span>
                              </label>

                              <label
                                className="AS1checkboxTemp WomensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput2"
                                  name="65+"
                                  type="checkbox"
                                  value="65+"
                                  checked={SixtyFivePlus ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[1].checked}
                                />
                                <span className="AS1checkmarkTemp WomensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">65+</span>
                              </label>

                              <label
                                className="AS1checkboxTemp CoedLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput3"
                                  name="70+"
                                  type="checkbox"
                                  value="70+"
                                  checked={SeventyPlus ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[2].checked}
                                />
                                <span className="AS1checkmarkTemp CoedCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">70+</span>
                              </label>
                            </div>
                            <div className="FormAgeFlex1Temp row p-0">
                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput4"
                                  name="75+"
                                  type="checkbox"
                                  value="75+"
                                  checked={SeventyFivePlus ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[3].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">75+</span>
                              </label>

                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput5"
                                  name="80+"
                                  type="checkbox"
                                  value="80+"
                                  checked={EightyPlus ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[4].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">80+</span>
                              </label>

                              <label
                                className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput6"
                                  name="85+"
                                  type="checkbox"
                                  value="85+"
                                  checked={EightyFivePlus ? true : false}
                                  // onChange={props.onjAgeCheck} // Prop: Puts data into state
                                  // checked={props.jselectedAgeRange[5].checked}
                                />
                                <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                <span className="AS1labelTemp">85+</span>
                              </label>
                            </div>
                          </>
                        )}
                      </div>

                      {!templateData.skill_level.includes('') && (
                        <div className="container">
                          <div className="row shadow-box">
                            <div className="col-1 p-0 text-left pl-2">
                              <img
                                src={playersIcon}
                                alt=""
                                className="img-fluid mb-1 mt-2"
                              />
                            </div>
                            <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto ">
                              Skill Level
                            </div>
                            <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto"></div>
                          </div>
                          {templateData.age_bracket === 'adult' && (
                            // <div className="p-0 row">
                            // <div className="FormSkillFlex">
                            <>
                              <div className="FormAgeFlex1Temp row p-0">
                                <label
                                  className="AS1checkboxTemp MensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput1"
                                    name="Pro"
                                    type="checkbox"
                                    value="Pro"
                                    diabled
                                    checked={Pro ? true : false}
                                    // style={{marginLeft:5}}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[0].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Pro</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput4"
                                    name="AA"
                                    type="checkbox"
                                    value="AA"
                                    disabled
                                    checked={AA ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[3].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">AA</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput7"
                                    name="Masters"
                                    type="checkbox"
                                    value="Masters"
                                    // checked
                                    checked={Masters ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[6].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Masters</span>
                                </label>
                              </div>
                              <div className="FormAgeFlex1Temp row p-0">
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput2"
                                    name="Open"
                                    type="checkbox"
                                    value="Open"
                                    // checked
                                    checked={Sopen ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[1].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Open</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput5"
                                    name="A"
                                    type="checkbox"
                                    value="A"
                                    // checked
                                    checked={A ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[4].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">A</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput8"
                                    name="Novice"
                                    type="checkbox"
                                    value="Novice"
                                    disabled
                                    checked={Novice ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[7].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Novice</span>
                                </label>
                              </div>
                              <div className="FormAgeFlex1Temp row p-0">
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput3"
                                    name="AAA"
                                    type="checkbox"
                                    value="AAA"
                                    disabled
                                    checked={AAA ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[2].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">AAA</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput6"
                                    name="BB"
                                    type="checkbox"
                                    value="BB"
                                    disabled
                                    checked={BB ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[5].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">BB</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput9"
                                    name="Rec"
                                    type="checkbox"
                                    value="Rec"
                                    // checked
                                    checked={Rec ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[8].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Rec</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="SkillInput"
                                >
                                  <input
                                    className="form-control"
                                    id="SkillInput10"
                                    name="Rec"
                                    type="checkbox"
                                    value="Rec"
                                    // checked
                                    checked={B ? true : false}
                                    // onChange={props.onSkillCheck} // Prop: Puts data into state
                                    // checked={props.selectedSkill[8].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">B</span>
                                </label>
                              </div>
                            </>
                            // </div>
                            // </div>
                          )}
                          {templateData.age_bracket === 'junior' && (
                            <>
                              <div className=" row p-0">
                                <label
                                  className="AS1checkboxTemp MensLabelTemp pl-5 col-4"
                                  htmlFor="JAgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="JAgeRangeInput1"
                                    name="Club"
                                    type="checkbox"
                                    value="Club"
                                    // onChange={props.onjSkillCheck} // Prop: Puts data into state
                                    // checked={props.jselectedSkill[0].checked}
                                    checked={Club ? true : false}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp">Club</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp WomensLabelTemp pl-5 col-4"
                                  htmlFor="JAgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="JAgeRangeInput2"
                                    name="High School"
                                    type="checkbox"
                                    value="High School"
                                    // onChange={props.onjSkillCheck} // Prop: Puts data into state
                                    // checked={props.jselectedSkill[1].checked}

                                    checked={HighSchool ? true : false}
                                  />
                                  <span className="AS1checkmarkTemp WomensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp">
                                    High School
                                  </span>
                                </label>

                                <label
                                  className="AS1checkboxTemp CoedLabelTemp pl-5 col-4"
                                  htmlFor="JAgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="JAgeRangeInput3"
                                    name="Gold"
                                    type="checkbox"
                                    value="Gold"
                                    // onChange={props.onjSkillCheck} // Prop: Puts data into state
                                    // checked={props.jselectedSkill[2].checked}
                                    checked={Gold ? true : false}
                                  />
                                  <span className="AS1checkmarkTemp CoedCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp">Gold</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp MensLabelTemp pl-5 col-4"
                                  htmlFor="JAgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="JAgeRangeInput4"
                                    name="Silver"
                                    type="checkbox"
                                    value="Silver"
                                    // onChange={props.onjSkillCheck} // Prop: Puts data into state
                                    // checked={props.jselectedSkill[3].checked}
                                    checked={Silver ? true : false}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Silver</span>
                                </label>

                                <label
                                  className="AS1checkboxTemp MensLabelTemp pl-5 col-4"
                                  htmlFor="JAgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="JAgeRangeInput5"
                                    name="Bronze"
                                    type="checkbox"
                                    value="Bronze"
                                    // onChange={props.onjSkillCheck} // Prop: Puts data into state
                                    // checked={props.jselectedSkill[4].checked}
                                    checked={Bronze ? true : false}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp">Bronze</span>
                                </label>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Finance */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">
                        Global Finance
                      </div>
                      {/* Early Bird */}
                      <div className="container">
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={birdIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Early Bird
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {templateData && templateData.early_bird}
                          </div>
                        </div>
                      </div>

                      {templateData &&
                        (templateData.early_bird === 'Yes' ||
                          templateData.early_bird === 'yes') && (
                          <>
                            {/* Early Bird Date*/}
                            <div className="container">
                              <div className="row shadow-box">
                                <div className="col-1 p-0 text-left pl-2">
                                  <img
                                    src={calenderIcon}
                                    alt=""
                                    className="img-fluid mb-1 mt-2"
                                  />
                                </div>
                                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                                  Early Bird Date
                                </div>
                                <div className="col-7 p-0 text-right box-shadow-text m-auto pr-2">
                                  {templateData && templateData.early_bird_date}
                                </div>
                              </div>
                            </div>

                            {/* Early Bird Amount */}
                            <div className="container">
                              <div className="row shadow-box">
                                <div className="col-1 p-0 text-left pl-2">
                                  <img
                                    src={walletIcon}
                                    alt=""
                                    className="img-fluid mb-1 mt-2"
                                  />
                                </div>
                                <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                                  Early Bird Amount
                                </div>
                                <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                                  $
                                  {templateData &&
                                    templateData.early_bird_amount}
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                      {/* Registration Amount */}
                      <div className="container">
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Registration Amount
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            ${templateData && templateData.registration_amount}
                          </div>
                        </div>
                      </div>

                      {/* Late Amount */}
                      <div className="container" style={{ marginBottom: 70 }}>
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Late Amount
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            ${templateData && templateData.late_amount}
                          </div>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Discount or Voucher
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {templateData && templateData.discount_voucher === 2
                              ? 'Voucher'
                              : templateData.discount_voucher === 1
                              ? 'Discount'
                              : 'Not Selected'}
                          </div>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Amount
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {templateData &&
                            templateData.discount_amount !== null
                              ? `$${templateData.discount_amount}`
                              : ''}
                          </div>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Applied
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {templateData &&
                            templateData.discount_applied === null
                              ? 'Not Selected'
                              : templateData.discount_applied}
                          </div>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto ">
                            Discount or Voucher Description
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            {templateData && templateData.discount_text !== null
                              ? templateData.discount_text
                              : 'Not Selected'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>

          {/* </>
         ) )} */}

          {/* footer */}
          {/* <Footer>
          <div className="m-0 col-auto ml-auto mt-3">
            <div className="lower-back-button">
              <span className="lower-back-button-text">CANCEL</span>
            </div>
          </div>
          <div className="m-0 col-auto mt-3">
            <div className="lower-back-button">
              <span className="lower-back-button-text" >SAVE</span>
            </div>
          </div>
        </Footer> */}
        </div>
      )}
      {/* modal */}
      <Modal
        open={open}
        onClose={onCloseModal}
        closeIcon={closeIcon}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
            margin: 0,
            padding: 0,
          },
          closeIcon: {
            outline: 0,
          },
        }}
      >
        {deleteModal ? (
          <div className="profile_successfully_deleted">
            Template Successfully Deleted
          </div>
        ) : (
          <>
            <div
              className="text-center"
              style={{
                marginTop: 62,
                fontFamily: 'Futura',
                fontSize: 14,
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: 'normal',
                color: '#4a4a4a',
              }}
            >
              Are you sure you want to
              <span className="modal-delete-text"> delete</span>?
            </div>
            <p
              className="text-center"
              style={{
                width: 398,
                fontSize: 10,
                marginTop: 8,
                fontFamily: 'Futura',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: 'normal',
                color: '#9b9b9b',
              }}
            >
              This template will be permanently deleted!
            </p>
            <div
              className="row container"
              style={{ marginTop: 79, marginBottom: 24 }}
            >
              <div className="col-12 text-center m-auto">
                <button
                  type="button"
                  className="btn-sm ml-5"
                  id="white-button-hover"
                  onClick={onCloseModal}
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffffff',
                    outline: 0,
                  }}
                >
                  NO, CONTINUE
                </button>
                <button
                  className="btn-sm pb-1 ml-3"
                  id="yellow-button-hover"
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffd420',
                    outline: 0,
                  }}
                  onClick={onDelete}
                >
                  YES, DELETE
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default TemplateSaved;
