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
import { DatePicker } from 'antd';
import templateDivisionContext from '../context/templateDivision/templateDivisionContext';
import hamburgerIcon from '../assets/images/icon-menu-hamburger.svg';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import 'react-responsive-modal/styles.css';
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

const TemplateEdit = (props) => {
  // const childRef = useRef();

  const eventContext = useContext(EventContext);
  const {
    divisionData,
    editDivisions,
    dropDownFun,
    eventDropdownData,
    teamSizeMap,
  } = eventContext;

  const templateContext = useContext(templateDivisionContext);
  const {
    templateData,
    editTemplate,
    templateId,
    getTemplate,
    editDivTemplateError,
  } = templateContext;

  console.log('divisionData.template:', divisionData);

  // useEffect(() => {
  //   dropDownFun();
  // }, [])

  useEffect(() => {
    console.log('Template id by url:', parseInt(props.match.params.id));
    getTemplate(parseInt(props.match.params.id), 'Divison');
    dropDownFun();
  }, []);

  useEffect(() => {
    if (templateData !== null) console.log('templateData', templateData);
    setTeamSize1(
      templateData && templateData.team_size !== null
        ? templateData.team_size
        : ''
    );
    setFormat(
      templateData && templateData.format !== null
        ? templateData.format === 2
          ? '2v2'
          : templateData.format === 4
          ? '4v4'
          : templateData.format === 3
          ? '3v3'
          : '6v6'
        : ''
    );
    setEarlyBird1(
      templateData && templateData.early_bird !== null
        ? templateData.early_bird
        : ''
    );
    setDiscount_applied(
      templateData && templateData.discount_applied !== null
        ? templateData.discount_applied
        : ''
    );
    setDiscount_voucher(
      templateData && templateData.discount_voucher === 2
        ? 'Voucher'
        : templateData.discount_voucher === null
        ? 'Not Selected'
        : 'Discount'
    );
    setEarlyBirdDate1(
      templateData && templateData.early_bird_date !== null
        ? moment(templateData.early_bird_date)
        : ''
    );
    setEarlyBirdAmount1(templateData && templateData.early_bird_amount);
    setRegistrationAmount1(
      templateData && templateData.registration_amount !== null
        ? templateData.registration_amount
        : ''
    );
    setLateAmount1(
      templateData && templateData.late_amount !== null
        ? templateData.late_amount
        : ''
    );
    setDiscountAmount1(
      templateData && templateData.discount_amount !== null
        ? templateData.discount_amount
        : ''
    );
    setDiscountText(
      templateData && templateData.discount_text !== null
        ? templateData.discount_text
        : ''
    );
  }, [templateData]);

  // const [teamSize1, setTeamSize1] = useState(templateData && templateData.team_size !== null? templateData.team_size: '' );
  // const [format, setFormat] = useState(templateData && templateData.format !== null? (templateData.format===2?"2v2":(templateData.format===4?"4v4":"6v6")): '');
  // const [earlyBird1, setEarlyBird1] = useState(templateData && templateData.early_bird !== null? templateData.early_bird: '');
  // const [earlyBirdDate1, setEarlyBirdDate1] = useState(templateData && templateData.early_bird_date !== null? moment(templateData.early_bird_date): '');
  // const [earlyBirdAmount1, setEarlyBirdAmount1] = useState(templateData && templateData.early_bird_amount);
  // const [registrationAmount1, setRegistrationAmount1] = useState(templateData && templateData.registration_amount !== null? templateData.registration_amount: '');
  // const [lateAmount1, setLateAmount1] = useState(templateData && templateData.late_amount !== null? templateData.late_amount: '');

  const [teamSize1, setTeamSize1] = useState('');
  const [format, setFormat] = useState('');
  const [earlyBird1, setEarlyBird1] = useState('');
  const [discount_applied, setDiscount_applied] = useState('');
  const [discount_voucher, setDiscount_voucher] = useState('');
  const [earlyBirdDate1, setEarlyBirdDate1] = useState('');
  const [earlyBirdAmount1, setEarlyBirdAmount1] = useState('');
  const [registrationAmount1, setRegistrationAmount1] = useState('');
  const [lateAmount1, setLateAmount1] = useState('');
  const [discountAmount1, setDiscountAmount1] = useState('');
  const [discountText, setDiscountText] = useState('');

  const [firstModal, setFirstModal] = useState('');
  const [pointsDropdown, setPointsDropdown] = useState(false);
  // console.log("PointsDropdwon",pointsDropdown);
  const [placementPointsChoice, setPlacementPointsChoice] = useState('');
  const refPoints = useRef();
  useOnClickOutside(refPoints, () => setPointsDropdown(false));

  const [openHamburger, setOpenHamburger] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenHamburger(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
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

  useEffect(() => {
    console.log('Template id', templateId);
  }, [templateId]);

  //Duplicate States
  const [placementPointsDuplicate, setPlacementPointsDuplicate] = useState('');
  const [registrationCap1Duplicate, setregistrationCap1Duplicate] =
    useState('');
  const [teamSize1Duplicate, setTeamSize1Duplicate] = useState('');
  const [formatDuplicate, setFormatDuplicate] = useState('');
  const [onlinePay1Duplicate, setOnlinePay1Duplicate] = useState('');
  const [purseAmount1Duplicate, setPurseAmount1Duplicate] = useState('');
  const [earlyBird1Duplicate, setEarlyBird1Duplicate] = useState('');
  const [discount_applied_duplicate, setDiscount_applied_duplicate] =
    useState(null);
  const [discount_voucher_duplicate, setDiscount_voucher_duplicate] =
    useState(null);
  const [earlyBirdDate1Duplicate, setEarlyBirdDate1Duplicate] = useState('');
  const [earlyBirdAmount1Duplicate, setEarlyBirdAmount1Duplicate] =
    useState('');
  const [registrationAmount1Duplicate, setRegistrationAmount1Duplicate] =
    useState('');
  const [lateAmount1Duplicate, setLateAmount1Duplicate] = useState('');
  const [discountAmount1Duplicate, setDiscountAmount1Duplicate] =
    useState(null);
  const [discountTextDuplicate, setDiscountTextDuplicate] = useState(null);

  //errors
  const [genderError, setGenderError] = useState(null);
  const [skillError, setSkillError] = useState(null);
  // const [ageError, setAgeError] = useState('')
  const [jGenderError, setJGenderError] = useState(null);
  const [jAgeRangeError, setJAgeRangeError] = useState(null);
  // const [jSkillError, setJSkillError] = useState('')

  const [commonState, setCommonState] = useState({
    selectedAgeRange: [
      { name: 'Open', checked: false },
      { name: '60', checked: false },
      { name: '90', checked: false },
      { name: 'U26', checked: false },
      { name: '70', checked: false },
      { name: 'Other', checked: false },
      { name: '50', checked: false },
      { name: '80', checked: false },
      { name: '35+', checked: false },
      { name: '45+', checked: false },
      { name: '60+', checked: false },
      { name: '65+', checked: false },
      { name: '70+', checked: false },
      { name: '75+', checked: false },
      { name: '80+', checked: false },
      { name: '85+', checked: false },
      { name: 'Rotating Pairs', checked: false },
    ],
    selectedGender: [
      { name: 'Mens', checked: false },
      { name: 'Womens', checked: false },
      { name: 'Coed', checked: false },
    ],
    selectedSkill: [
      { name: 'Pro', checked: false },
      { name: 'Open', checked: false },
      { name: 'AAA', checked: false },
      { name: 'AA', checked: false },
      { name: 'A', checked: false },
      { name: 'BB', checked: false },
      { name: 'Masters', checked: false },
      { name: 'Novice', checked: false },
      { name: 'Rec', checked: false },
      { name: 'B', checked: false },
    ],
    jselectedGender: [
      { name: 'Boys', checked: false },
      { name: 'Girls', checked: false },
      { name: 'Coed', checked: false },
    ],
    jselectedAgeRange: [
      { name: '11U', checked: false },
      { name: '12U', checked: false },
      { name: '13U', checked: false },
      { name: '14U', checked: false },
      { name: '15U', checked: false },
      { name: '16U', checked: false },
      { name: '17U', checked: false },
      { name: '18U', checked: false },
      { name: '15+', checked: false },
    ],
    jselectedSkill: [
      { name: 'Club', checked: false },
      { name: 'High School', checked: false },
      { name: 'Gold', checked: false },
      { name: 'Silver', checked: false },
      { name: 'Bronze', checked: false },
    ],
  });

  const [genderCheck, setGenderCheck] = useState(false);
  useEffect(() => {
    console.log(genderCheck);
  }, [genderCheck]);

  const onCheck = (event) => {
    setGenderCheck(true);
    const { name, checked } = event.target;
    let selected = commonState.selectedGender;
    let ne = [{ name, checked }];
    let res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      selectedGender: res,
    }));
  };

  const [ageRangeCheck, setAgeRangeCheck] = useState(false);
  const onAgeCheck = (event) => {
    setAgeRangeCheck(true);
    const { name, checked } = event.target;
    let selected = commonState.selectedAgeRange;
    let ne = [{ name, checked }];
    let res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      selectedAgeRange: res,
    }));
  };
  const [skillCheck, setSkillCheck] = useState(false);
  const onSkillCheck = (event) => {
    setSkillCheck(true);
    const { name, checked } = event.target;
    let selected = commonState.selectedSkill;
    let ne = [{ name, checked }];
    let res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      selectedSkill: res,
    }));
  };

  const onjCheck = (event) => {
    setGenderCheck(true);
    const { name, checked } = event.target;
    let selected = commonState.jselectedGender;
    let ne = [{ name, checked }];
    let res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedGender: res,
    }));
  };

  const onjAgeCheck = (event) => {
    setAgeRangeCheck(true);
    const { name, checked } = event.target;
    let selected = commonState.jselectedAgeRange;
    let ne = [{ name, checked }];
    let res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedAgeRange: res,
    }));
  };

  const onjSkillCheck = (event) => {
    setSkillCheck(true);
    const { name, checked } = event.target;
    let selected = commonState.jselectedSkill;
    let ne = [{ name, checked }];
    let res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedSkill: res,
    }));
  };

  console.log('commonState', commonState);

  useEffect(() => {
    let selectedGenderDuplicate = [];
    let selectedAgeDuplicate = [];
    let selectedSkillDuplicate = [];
    let jselectedGenderDuplicate = [];
    let jselectedAgeDuplicate = [];
    let jselectedSkillDuplicate = [];

    if (templateData && templateData.age_bracket === 'adult') {
      if (templateData && templateData.gender.includes('Mens')) {
        let ne = { name: 'Mens', checked: true };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Mens') === false) {
        let ne = { name: 'Mens', checked: false };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Womens')) {
        let ne = { name: 'Womens', checked: true };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Womens') === false) {
        let ne = { name: 'Womens', checked: false };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Coed')) {
        let ne = { name: 'Coed', checked: true };
        selectedGenderDuplicate.push(ne);
        console.log('SelectedGenderDuplicate', selectedGenderDuplicate);
      }
      if (templateData && templateData.gender.includes('Coed') === false) {
        let ne = { name: 'Coed', checked: false };
        selectedGenderDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('Open')) {
        let neOpen = { name: 'Open', checked: true };
        selectedAgeDuplicate.push(neOpen);
      }
      if (templateData && templateData.age_range.includes('Open') === false) {
        let neOpen = { name: 'Open', checked: false };
        selectedAgeDuplicate.push(neOpen);
      }
      if (templateData && templateData.age_range.includes('60')) {
        let ne = { name: '60', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('60') === false) {
        let ne = { name: '60', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('90')) {
        let ne = { name: '90', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('90') === false) {
        let ne = { name: '90', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('U26')) {
        let ne = { name: 'U26', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('U26') === false) {
        let ne = { name: 'U26', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('70')) {
        let ne = { name: '70', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('70') === false) {
        let ne = { name: '70', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('Other')) {
        let ne = { name: 'Other', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('Other') === false) {
        let ne = { name: 'Other', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('50')) {
        let ne = { name: '50', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('50') === false) {
        let ne = { name: '50', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('80')) {
        let ne = { name: '80', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('80') === false) {
        let ne = { name: '80', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('35')) {
        let ne = { name: '35', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('35') === false) {
        let ne = { name: '35', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('45')) {
        let ne = { name: '45', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('45') === false) {
        let ne = { name: '45', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('Rotating Pairs')) {
        let ne = { name: 'Rotating Pairs', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (
        templateData &&
        templateData.age_range.includes('Rotating Pairs') === false
      ) {
        let ne = { name: 'Rotating Pairs', checked: false };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.hasOwnProperty('age_range')) {
        if (templateData && templateData.skill_level.includes('Pro')) {
          let ne = { name: 'Pro', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (
          templateData &&
          templateData.skill_level.includes('Pro') === false
        ) {
          let ne = { name: 'Pro', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('Open')) {
          let ne = { name: 'Open', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (
          templateData &&
          templateData.skill_level.includes('Open') === false
        ) {
          let ne = { name: 'Open', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('AAA')) {
          let ne = { name: 'AAA', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (
          templateData &&
          templateData.skill_level.includes('AAA') === false
        ) {
          let ne = { name: 'AAA', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('AA')) {
          let ne = { name: 'AA', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('AA') === false) {
          let ne = { name: 'AA', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('A')) {
          let ne = { name: 'A', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('A') === false) {
          let ne = { name: 'A', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('BB')) {
          let ne = { name: 'BB', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('BB') === false) {
          let ne = { name: 'BB', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('Masters')) {
          let ne = { name: 'Masters', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (
          templateData &&
          templateData.skill_level.includes('Masters') === false
        ) {
          let ne = { name: 'Masters', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('Novice')) {
          let ne = { name: 'Novice', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (
          templateData &&
          templateData.skill_level.includes('Novice') === false
        ) {
          let ne = { name: 'Novice', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('Rec')) {
          let ne = { name: 'Rec', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (
          templateData &&
          templateData.skill_level.includes('Rec') === false
        ) {
          let ne = { name: 'Rec', checked: false };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('B')) {
          let ne = { name: 'B', checked: true };
          selectedSkillDuplicate.push(ne);
        }
        if (templateData && templateData.skill_level.includes('B') === false) {
          let ne = { name: 'B', checked: false };
          selectedSkillDuplicate.push(ne);
        }
      }
    }
    if (templateData && templateData.age_bracket === 'Dinosaur') {
      if (templateData && templateData.gender.includes('Mens')) {
        let ne = { name: 'Mens', checked: true };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Mens') === false) {
        let ne = { name: 'Mens', checked: false };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Womens')) {
        let ne = { name: 'Womens', checked: true };
        selectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Womens') === false) {
        let ne = { name: 'Womens', checked: false };
        selectedGenderDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('60+')) {
        let ne = { name: '60+', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('60+') === false) {
        let ne = { name: '60+', checked: false };
        selectedAgeDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('65+')) {
        let ne = { name: '65+', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('65+') === false) {
        let ne = { name: '65+', checked: false };
        selectedAgeDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('70+')) {
        let ne = { name: '70+', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('70+') === false) {
        let ne = { name: '70+', checked: false };
        selectedAgeDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('75+')) {
        let ne = { name: '75+', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('75+') === false) {
        let ne = { name: '75+', checked: false };
        selectedAgeDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('80+')) {
        let ne = { name: '80+', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('80+') === false) {
        let ne = { name: '80+', checked: false };
        selectedAgeDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('85+')) {
        let ne = { name: '85+', checked: true };
        selectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('85+') === false) {
        let ne = { name: '85+', checked: false };
        selectedAgeDuplicate.push(ne);
      }
    }
    if (templateData && templateData.age_bracket === 'junior') {
      if (templateData && templateData.gender.includes('Boys')) {
        let ne = { name: 'Boys', checked: true };
        jselectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Boys') === false) {
        let ne = { name: 'Boys', checked: false };
        jselectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Girls')) {
        let ne = { name: 'Girls', checked: true };
        jselectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Girls') === false) {
        let ne = { name: 'Girls', checked: false };
        jselectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Coed')) {
        let ne = { name: 'Coed', checked: true };
        jselectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.gender.includes('Coed') === false) {
        let ne = { name: 'Coed', checked: false };
        jselectedGenderDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('11U')) {
        let ne = { name: '11U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('11U') === false) {
        let ne = { name: '11U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('12U')) {
        let ne = { name: '12U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('12U') === false) {
        let ne = { name: '12U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('13U')) {
        let ne = { name: '13U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('13U') === false) {
        let ne = { name: '13U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('14U')) {
        let ne = { name: '14U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('14U') === false) {
        let ne = { name: '14U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('15U')) {
        let ne = { name: '15U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('15U') === false) {
        let ne = { name: '15U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('16U')) {
        let ne = { name: '16U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('16U') === false) {
        let ne = { name: '16U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('17U')) {
        let ne = { name: '17U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('17U') === false) {
        let ne = { name: '17U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('18U')) {
        let ne = { name: '18U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('18U') === false) {
        let ne = { name: '18U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('Club')) {
        let ne = { name: 'Club', checked: true };
        jselectedSkillDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('Club') === false) {
        let ne = { name: 'Club', checked: false };
        jselectedSkillDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('High School')) {
        let ne = { name: 'High School', checked: true };
        jselectedSkillDuplicate.push(ne);
      }
      if (
        templateData &&
        templateData.skill_level.includes('High School') === false
      ) {
        let ne = { name: 'High School', checked: false };
        jselectedSkillDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('Gold')) {
        let ne = { name: 'Gold', checked: true };
        jselectedSkillDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('Gold') === false) {
        let ne = { name: 'Gold', checked: false };
        jselectedSkillDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('Silver')) {
        let ne = { name: 'Silver', checked: true };
        jselectedSkillDuplicate.push(ne);
      }
      if (
        templateData &&
        templateData.skill_level.includes('Silver') === false
      ) {
        let ne = { name: 'Silver', checked: false };
        jselectedSkillDuplicate.push(ne);
      }
      if (templateData && templateData.skill_level.includes('Bronze')) {
        let ne = { name: 'Bronze', checked: true };
        jselectedSkillDuplicate.push(ne);
      }
      if (
        templateData &&
        templateData.skill_level.includes('Bronze') === false
      ) {
        let ne = { name: 'Bronze', checked: false };
        jselectedSkillDuplicate.push(ne);
      }
    }

    if (
      templateData.age_bracket === 'Father-Daughter' ||
      templateData.age_bracket === 'Father-Son' ||
      templateData.age_bracket === 'Mother-Daughter' ||
      templateData.age_bracket === 'Mother-Son'
    ) {
      if (templateData && templateData.age_range.includes('11U')) {
        let ne = { name: '11U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('11U') === false) {
        let ne = { name: '11U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('12U')) {
        let ne = { name: '12U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('12U') === false) {
        let ne = { name: '12U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('13U')) {
        let ne = { name: '13U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('13U') === false) {
        let ne = { name: '13U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('14U')) {
        let ne = { name: '14U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('14U') === false) {
        let ne = { name: '14U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('15U')) {
        let ne = { name: '15U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('15U') === false) {
        let ne = { name: '15U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('16U')) {
        let ne = { name: '16U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('16U') === false) {
        let ne = { name: '16U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('17U')) {
        let ne = { name: '17U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('17U') === false) {
        let ne = { name: '17U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('18U')) {
        let ne = { name: '18U', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('18U') === false) {
        let ne = { name: '18U', checked: false };
        jselectedAgeDuplicate.push(ne);
      }

      if (templateData && templateData.age_range.includes('15+')) {
        let ne = { name: '15+', checked: true };
        jselectedAgeDuplicate.push(ne);
      }
      if (templateData && templateData.age_range.includes('15+') === false) {
        let ne = { name: '15+', checked: false };
        jselectedAgeDuplicate.push(ne);
      }
    }
    setCommonState((prevState) => ({
      ...prevState,
      selectedGender: selectedGenderDuplicate,
    }));
    console.log(selectedAgeDuplicate);
    setCommonState((prevState) => ({
      ...prevState,
      selectedAgeRange: selectedAgeDuplicate,
    }));
    setCommonState((prevState) => ({
      ...prevState,
      selectedSkill: selectedSkillDuplicate,
    }));
    setCommonState((prevState) => ({
      ...prevState,
      jselectedGender: jselectedGenderDuplicate,
    }));
    setCommonState((prevState) => ({
      ...prevState,
      jselectedAgeRange: jselectedAgeDuplicate,
    }));
    setCommonState((prevState) => ({
      ...prevState,
      jselectedSkill: jselectedSkillDuplicate,
    }));
  }, [templateData]);

  const [saveLoading, setSaveLoading] = useState(false);

  const onSave = async () => {
    setSaveLoading(true);
    console.log('Template id via link', parseInt(props.match.params.id));
    if (
      teamSize1 !== null &&
      genderError === null &&
      skillError === null &&
      jGenderError === null &&
      jAgeRangeError === null
      // format !== null &&
      // earlyBird1 !== null &&
      // // earlyBirdDate1 !== null &&
      // earlyBirdAmount1 !== null &&
      // registrationAmount1 !== null &&
      // lateAmount1 !== null
    ) {
      if (parseInt(props.match.params.id) !== null) {
        let selectedAgeData = [];
        let selectedGenderData = [];
        let selectedSkillData = [];

        if (
          templateData.age_bracket === 'adult' ||
          templateData.age_bracket === 'Dinosaur'
        ) {
          commonState.selectedAgeRange.map((item) => {
            if (item.checked === true) {
              selectedAgeData.push(item.name);
            }
          });

          //selected gender data
          commonState.selectedGender.map((item) => {
            if (item.checked === true) {
              selectedGenderData.push(item.name);
            }
          });

          //selected skills data
          commonState.selectedSkill.map((item) => {
            if (item.checked === true) {
              selectedSkillData.push(item.name);
            }
          });
        }

        if (
          templateData.age_bracket === 'junior' ||
          templateData.age_bracket === 'Father-Daughter' ||
          templateData.age_bracket === 'Father-Son' ||
          templateData.age_bracket === 'Mother-Daughter' ||
          templateData.age_bracket === 'Mother-Son'
        ) {
          commonState.jselectedAgeRange.map((item) => {
            if (item.checked === true) {
              selectedAgeData.push(item.name);
            }
          });

          //selected gender data
          commonState.jselectedGender.map((item) => {
            if (item.checked === true) {
              selectedGenderData.push(item.name);
            }
          });

          //selected skills data
          commonState.jselectedSkill.map((item) => {
            if (item.checked === true) {
              selectedSkillData.push(item.name);
            }
          });
        }
        const data = {};
        if (teamSize1Duplicate !== '') {
          data.team_size = teamSize1Duplicate;
        }
        if (formatDuplicate !== '') {
          data.format = formatDuplicate;
        }
        if (earlyBird1Duplicate !== '') {
          data.early_bird = earlyBird1Duplicate;
        }
        if (earlyBirdDate1Duplicate !== '') {
          data.early_bird_date = moment(earlyBirdDate1Duplicate).format(
            'YYYY-MM-DD'
          );
        }
        if (earlyBirdAmount1Duplicate !== '') {
          data.early_bird_amount = earlyBirdAmount1Duplicate;
        }
        if (registrationAmount1Duplicate !== '') {
          data.registration_amount = registrationAmount1Duplicate;
        }
        if (lateAmount1Duplicate !== '') {
          data.late_amount = lateAmount1Duplicate;
        }
        if (discountAmount1Duplicate !== null) {
          data.discount_amount =
            discountAmount1Duplicate === '' ? null : discountAmount1Duplicate;
        }
        if (discountTextDuplicate !== null) {
          data.discount_text =
            discountTextDuplicate === '' ? null : discountTextDuplicate;
        }
        if (discount_applied_duplicate !== null) {
          data.discount_applied =
            discount_applied_duplicate === 'discount per team'
              ? 1
              : discount_applied_duplicate === 'Not Selected'
              ? null
              : 2;
        }
        if (discount_voucher_duplicate !== null) {
          data.discount_voucher =
            discount_voucher_duplicate === 'Voucher'
              ? 2
              : discount_voucher_duplicate === 'Not Selected'
              ? null
              : 1;
        }
        if (genderCheck) {
          data.gender = selectedGenderData.join();
        }

        if (ageRangeCheck) {
          data.age_range = selectedAgeData.join();
        }

        if (skillCheck) {
          data.skill_level = selectedSkillData.join();
        }

        // console.log("Template Data to be edited:",data);
        // console.log(commonState.selectedGender, commonState.selectedAgeRange)
        await editTemplate(parseInt(props.match.params.id), {
          data: JSON.stringify(data),
        });
        // await getTemplate(templateId);
        await props.history.push(
          `/templateSaved/${parseInt(props.match.params.id)}`
        );
      }
    }
  };
  useEffect(() => {
    console.log('commonState.GENDER', commonState.selectedGender);
    if (
      templateData &&
      templateData.age_bracket === 'adult' &&
      commonState.selectedGender.every((obj) => {
        if (obj.checked === false) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      setGenderError('Please select a gender');
    } else {
      setGenderError(null);
    }
  }, [commonState.selectedGender]);

  useEffect(() => {
    console.log('commonState.AGE', commonState.selectedAgeRange);
  }, [commonState.selectedAgeRange]);

  useEffect(() => {
    console.log('commonState.SKILL', commonState.selectedSkill);
    if (
      templateData &&
      templateData.age_bracket === 'adult' &&
      commonState.selectedSkill.every((obj) => {
        if (obj.checked === false) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      setSkillError('Please select a skill level');
    } else {
      setSkillError(null);
    }
  }, [commonState.selectedSkill]);

  useEffect(() => {
    console.log('commonState.jGender', commonState.jselectedGender);
    if (
      templateData &&
      templateData.age_bracket === 'junior' &&
      commonState.jselectedGender.every((obj) => {
        if (obj.checked === false) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      setJGenderError('Please select a genderr');
    } else {
      setJGenderError(null);
    }
  }, [commonState.jselectedGender]);

  useEffect(() => {
    console.log('commonState.jAgeRange', commonState.jselectedAgeRange);
    if (
      templateData &&
      templateData.age_bracket === 'junior' &&
      commonState.jselectedAgeRange.every((obj) => {
        if (obj.checked === false) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      setJAgeRangeError('Please select an age range');
    } else {
      setJAgeRangeError(null);
    }
  }, [commonState.jselectedAgeRange]);

  function disabledStartDate(current) {
    return current < moment().startOf('day');
  }

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Header />
      {templateData === null ? (
        <div className="col-12 text-center loading_height">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="new-event-profile container p-0">
          <div className="row" style={{ marginTop: 142 }}>
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
                        style={{ display: 'flex', flexDirection: 'row' }}
                        className="row"
                      >
                        <div className="col-10">
                          <input
                            type="text"
                            placeholder="Event Name"
                            className="form-control event-input"
                            value={templateData && templateData.name}
                            style={{ width: 250 }}
                            // key={props.i}
                            name={`TemplateName${props.i}`}
                            // onChange={(e)=>{
                            //   const updatedTemplateName = [...templateName];
                            //   updatedTemplateName[e.target.key]=e.target.value;
                            //   setTemplateName(updatedTemplateName);
                            // }}
                          />
                        </div>
                        <div className="mt-auto mb-auto ml-auto col-2">
                          <img src={clearIcon} alt="" />
                        </div>
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
                      {genderError !== null && (
                        <div className="text-left error-message-profile">
                          {genderError}
                        </div>
                      )}
                      {skillError !== null && (
                        <div className="text-left error-message-profile">
                          {skillError}
                        </div>
                      )}
                      {jGenderError !== null && (
                        <div className="text-left error-message-profile">
                          {jGenderError}
                        </div>
                      )}
                      {jAgeRangeError !== null && (
                        <div className="text-left error-message-profile">
                          {jAgeRangeError}
                        </div>
                      )}

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
                          <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Team Size
                          </div>
                          <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto">
                            {teamSize1}
                          </div>
                          <DropdownModals className="col-1 p-0 text-right m-auto">
                            {/* <li onClick={()=>{
                      setTeamSize1("4");
                      setTeamSize1Duplicate("4")
                      }}>4</li>
                    <li onClick={()=>{
                      setTeamSize1("8");
                      setTeamSize1Duplicate("8");
                    }}>8</li>
                    <li onClick={()=>{
                      setTeamSize1("12");
                      setTeamSize1Duplicate("12");
                      }}>12</li>
                    <li onClick={()=>{
                      setTeamSize1("16");
                      setTeamSize1Duplicate("16");
                    }}>16</li>
                    <li onClick={()=>{
                      setTeamSize1("20");
                      setTeamSize1Duplicate("20");
                    }}>20</li>
                    <li onClick={()=>{
                      setTeamSize1("24");
                      setTeamSize1Duplicate("24");
                    }}>24</li>
                    <li onClick={()=>{
                      setTeamSize1("28");
                      setTeamSize1Duplicate("28");
                    }}>28</li>
                    <li onClick={()=>{
                      setTeamSize1("32");
                      setTeamSize1Duplicate("32");
                    }}>32</li>
                    <li onClick={()=>{
                      setTeamSize1("36");
                      setTeamSize1Duplicate("36");
                    }}>36</li>
                    <li onClick={()=>{
                      setTeamSize1("40");
                      setTeamSize1Duplicate("40");
                    }}>40</li> */}
                            {teamSizeMap !== null &&
                              teamSizeMap.map((data) => (
                                <li
                                  onClick={() => {
                                    setTeamSize1(data.toString());
                                    setTeamSize1Duplicate(data.toString());
                                  }}
                                  key={data}
                                >
                                  {data}
                                </li>
                              ))}
                          </DropdownModals>
                        </div>
                      </div>

                      {/* Format */}

                      {templateData ? (
                        templateData.age_bracket === 'adult' ||
                        templateData.age_bracket === 'junior' ||
                        templateData.age_bracket === 'Dinosaur' ? (
                          <div className="container">
                            <div className="row shadow-box">
                              <div className="col-1 p-0 text-left pl-2">
                                <img
                                  src={playersIcon}
                                  alt=""
                                  className="img-fluid mb-1 mt-2"
                                />
                              </div>
                              <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                                Format
                              </div>
                              <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto">
                                {format}
                              </div>
                              <DropdownModals className="col-1 p-0 text-right m-auto">
                                <li
                                  onClick={() => {
                                    setFormat('2v2');
                                    setFormatDuplicate(2);
                                  }}
                                >
                                  2v2
                                </li>
                                <li
                                  onClick={() => {
                                    setFormat('3v3');
                                    setFormatDuplicate(3);
                                  }}
                                >
                                  3v3
                                </li>
                                <li
                                  onClick={() => {
                                    setFormat('4v4');
                                    setFormatDuplicate(4);
                                  }}
                                >
                                  4v4
                                </li>
                                <li
                                  onClick={() => {
                                    setFormat('6v6');
                                    setFormatDuplicate(6);
                                  }}
                                >
                                  6v6
                                </li>
                              </DropdownModals>
                            </div>
                          </div>
                        ) : null
                      ) : null}

                      {/* Gender */}
                      {templateData.age_bracket === 'adult' ||
                      templateData.age_bracket === 'junior' ||
                      templateData.age_bracket === 'Dinosaur' ? (
                        <div className="container">
                          <div className="row shadow-box">
                            <div className="col-1 p-0 text-left pl-2">
                              <img
                                src={playersIcon}
                                alt=""
                                className="img-fluid mb-1 mt-2"
                              />
                            </div>
                            <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                              Gender
                            </div>
                            <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto"></div>
                          </div>

                          {templateData &&
                            templateData.age_bracket === 'adult' && (
                              <div className="p-0 row">
                                <label
                                  className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="genderInputM"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control"
                                    // id="genderInputM"
                                    id="genderInputM"
                                    name="Mens"
                                    type="checkbox"
                                    value="Mens"
                                    // onClick={Mens=!Mens} // Prop: Puts data into state
                                    // checked={props.selectedGender[0].checked}
                                    // checked={Mens?true:false}
                                    onChange={onCheck}
                                    checked={
                                      commonState.selectedGender[0] &&
                                      commonState.selectedGender[0].checked
                                    }
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Mens</span>
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
                                    onChange={onCheck}
                                    // onChange={console.log("YO")} // Prop: Puts data into state
                                    // checked={props.selectedGender[1].checked}

                                    // onClick={Womens=!Womens}
                                    // checked={Womens?true:false}
                                    checked={
                                      commonState.selectedGender[1] &&
                                      commonState.selectedGender[1].checked
                                    }
                                    // onChange={handleCBChange}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Womens</span>
                                </label>
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
                                    onChange={onCheck}
                                    // onChange={props.onCheck} // Prop: Puts data into state
                                    // checked={props.selectedGender[2].checked}
                                    // checked={Coed?true:false}
                                    checked={
                                      commonState.selectedGender[2] &&
                                      commonState.selectedGender[2].checked
                                    }
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Co-ed</span>
                                </label>
                              </div>
                            )}
                          {templateData &&
                            templateData.age_bracket === 'Dinosaur' && (
                              <div className="p-0 row">
                                <label
                                  className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="genderInputM"
                                  style={{ marginTop: 10 }}
                                >
                                  <input
                                    className="form-control"
                                    // id="genderInputM"
                                    id="genderInputM"
                                    name="Mens"
                                    type="checkbox"
                                    value="Mens"
                                    // onClick={Mens=!Mens} // Prop: Puts data into state
                                    // checked={props.selectedGender[0].checked}
                                    // checked={Mens?true:false}
                                    onChange={onCheck}
                                    checked={
                                      commonState.selectedGender[0] &&
                                      commonState.selectedGender[0].checked
                                    }
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Mens</span>
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
                                    onChange={onCheck}
                                    // onChange={console.log("YO")} // Prop: Puts data into state
                                    // checked={props.selectedGender[1].checked}

                                    // onClick={Womens=!Womens}
                                    // checked={Womens?true:false}
                                    checked={
                                      commonState.selectedGender[1] &&
                                      commonState.selectedGender[1].checked
                                    }
                                    // onChange={handleCBChange}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp">Womens</span>
                                </label>
                              </div>
                            )}
                          {templateData &&
                            templateData.age_bracket === 'junior' && (
                              <div className="p-0 row">
                                {/* <div className=""> */}
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
                                    onChange={onjCheck}
                                    checked={
                                      commonState.jselectedGender[0] &&
                                      commonState.jselectedGender[0].checked
                                    }
                                    // onChange={props.onjCheck} // Prop: Puts data into state
                                    // checked={props.jselectedGender[0].checked}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Boys</span>
                                </label>
                                {/* </div> */}
                                {/* <div className=""> */}
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
                                    onChange={onjCheck}
                                    checked={
                                      commonState.jselectedGender[1] &&
                                      commonState.jselectedGender[1].checked
                                    }
                                    // onChange={props.onjCheck} // Prop: Puts data into state
                                    // checked={props.jselectedGender[1].checked}
                                  />
                                  <span className="AS1checkmarkTemp WomensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Girls</span>
                                </label>
                                {/* </div> */}
                                {/* <div className=""> */}
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
                                    onChange={onjCheck}
                                    checked={
                                      commonState.jselectedGender[2] &&
                                      commonState.jselectedGender[2].checked
                                    }
                                    // onChange={props.onjCheck} // Prop: Puts data into state
                                    // checked={props.jselectedGender[2].checked}
                                  />
                                  <span className="AS1checkmarkTemp CoedCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp ">Co-ed</span>
                                </label>
                                {/* </div> */}
                              </div>
                            )}
                        </div>
                      ) : null}

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
                          <div
                            className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4"
                            onClick={() =>
                              console.log(commonState.jselectedAgeRange)
                            }
                          >
                            Age Range
                          </div>
                          <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto"></div>
                        </div>
                        {templateData && templateData.age_bracket === 'adult' && (
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
                                  onChange={onAgeCheck}
                                  checked={
                                    commonState.selectedAgeRange[0] &&
                                    commonState.selectedAgeRange[0].checked
                                  }
                                  // onChange={props.onAgeCheck} // Prop: Puts data into state
                                  // checked={props.selectedAgeRange[0].checked}
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
                                  name="60"
                                  type="checkbox"
                                  value="60"
                                  onChange={onAgeCheck}
                                  checked={
                                    commonState.selectedAgeRange[1] &&
                                    commonState.selectedAgeRange[1].checked
                                  }
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
                                  name="90"
                                  type="checkbox"
                                  value="90"
                                  onChange={onAgeCheck}
                                  checked={
                                    commonState.selectedAgeRange[2] &&
                                    commonState.selectedAgeRange[2].checked
                                  }
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
                                  onChange={onAgeCheck}
                                  checked={
                                    commonState.selectedAgeRange[3] &&
                                    commonState.selectedAgeRange[3].checked
                                  }
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
                                  name="70"
                                  type="checkbox"
                                  value="70"
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[4] &&
                                    commonState.selectedAgeRange[4].checked
                                  }
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
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[5] &&
                                    commonState.selectedAgeRange[5].checked
                                  }
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
                                  id="AgeRangeInput7"
                                  name="35"
                                  type="checkbox"
                                  value="35"
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[8] &&
                                    commonState.selectedAgeRange[8].checked
                                  }
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
                                  id="AgeRangeInput7"
                                  name="45"
                                  type="checkbox"
                                  value="45"
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[9] &&
                                    commonState.selectedAgeRange[9].checked
                                  }
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
                                  name="50"
                                  type="checkbox"
                                  value="Fifty"
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[6] &&
                                    commonState.selectedAgeRange[6].checked
                                  }
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
                                  name="80"
                                  type="checkbox"
                                  value="Eighty"
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[7] &&
                                    commonState.selectedAgeRange[7].checked
                                  }
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
                                  name="Rotating Pairs"
                                  type="checkbox"
                                  value="Rotating Pairs"
                                  onChange={onAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.selectedAgeRange[10] &&
                                    commonState.selectedAgeRange[10].checked
                                  }
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

                        {templateData &&
                          templateData.age_bracket === 'Dinosaur' && (
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
                                    name="60+"
                                    type="checkbox"
                                    value="60+"
                                    onChange={onAgeCheck}
                                    checked={
                                      commonState.selectedAgeRange[0] &&
                                      commonState.selectedAgeRange[0].checked
                                    }
                                    // onChange={props.onAgeCheck} // Prop: Puts data into state
                                    // checked={props.selectedAgeRange[0].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp ">60+</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp WomensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="AgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="AgeRangeInput2"
                                    name="65+"
                                    type="checkbox"
                                    value="65+"
                                    onChange={onAgeCheck}
                                    checked={
                                      commonState.selectedAgeRange[1] &&
                                      commonState.selectedAgeRange[1].checked
                                    }
                                    // onChange={props.onAgeCheck} // Prop: Puts data into state
                                    // checked={props.selectedAgeRange[1].checked}
                                  />
                                  <span className="AS1checkmarkTemp WomensCheck ml-5"></span>
                                  <span className="AS1labelTemp ">65+</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp CoedLabelTemp col-4 p-0 pl-5"
                                  htmlFor="AgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="AgeRangeInput3"
                                    name="70+"
                                    type="checkbox"
                                    value="70+"
                                    onChange={onAgeCheck}
                                    checked={
                                      commonState.selectedAgeRange[2] &&
                                      commonState.selectedAgeRange[2].checked
                                    }
                                    // onChange={props.onAgeCheck} // Prop: Puts data into state
                                    // checked={props.selectedAgeRange[2].checked}
                                  />
                                  <span className="AS1checkmarkTemp CoedCheck ml-5"></span>
                                  <span className="AS1labelTemp ">70+</span>
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
                                    name="75+"
                                    type="checkbox"
                                    value="75+"
                                    onChange={onAgeCheck}
                                    checked={
                                      commonState.selectedAgeRange[3] &&
                                      commonState.selectedAgeRange[3].checked
                                    }
                                    // onChange={props.onAgeCheck} // Prop: Puts data into state
                                    // checked={props.selectedAgeRange[3].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp ">75+</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="AgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="AgeRangeInput5"
                                    name="80+"
                                    type="checkbox"
                                    value="80+"
                                    onChange={onAgeCheck} // Prop: Puts data into state
                                    checked={
                                      commonState.selectedAgeRange[4] &&
                                      commonState.selectedAgeRange[4].checked
                                    }
                                    // checked={props.selectedAgeRange[4].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp ">80+</span>
                                </label>
                                <label
                                  className="AS1checkboxTemp MensLabelTemp col-4 p-0 pl-5"
                                  htmlFor="AgeRangeInput"
                                >
                                  <input
                                    className="form-control"
                                    id="AgeRangeInput6"
                                    name="85+"
                                    type="checkbox"
                                    value="85+"
                                    onChange={onAgeCheck} // Prop: Puts data into state
                                    checked={
                                      commonState.selectedAgeRange[5] &&
                                      commonState.selectedAgeRange[5].checked
                                    }
                                    // checked={props.selectedAgeRange[5].checked}
                                  />
                                  <span className="AS1checkmarkTemp ml-5"></span>
                                  <span className="AS1labelTemp ">85+</span>
                                </label>
                              </div>
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
                                  name="11U"
                                  type="checkbox"
                                  value="11U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[0] &&
                                    commonState.jselectedAgeRange[0].checked
                                  }
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
                                  name="12U"
                                  type="checkbox"
                                  value="12U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[1] &&
                                    commonState.jselectedAgeRange[1].checked
                                  }
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
                                  name="13U"
                                  type="checkbox"
                                  value="13U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[2] &&
                                    commonState.jselectedAgeRange[2].checked
                                  }
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
                                  name="14U"
                                  type="checkbox"
                                  value="14U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[3] &&
                                    commonState.jselectedAgeRange[3].checked
                                  }
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
                                  name="15U"
                                  type="checkbox"
                                  value="15U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[4] &&
                                    commonState.jselectedAgeRange[4].checked
                                  }
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
                                  name="16U"
                                  type="checkbox"
                                  value="16U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[5] &&
                                    commonState.jselectedAgeRange[5].checked
                                  }
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
                                  name="17U"
                                  type="checkbox"
                                  value="17U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[6] &&
                                    commonState.jselectedAgeRange[6].checked
                                  }
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
                                  name="18U"
                                  type="checkbox"
                                  value="18U"
                                  onChange={onjAgeCheck} // Prop: Puts data into state
                                  checked={
                                    commonState.jselectedAgeRange[7] &&
                                    commonState.jselectedAgeRange[7].checked
                                  }
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
                                    id="JAgeRangeInput8"
                                    name="15+"
                                    type="checkbox"
                                    value="15+"
                                    onChange={onjAgeCheck} // Prop: Puts data into state
                                    checked={
                                      commonState.jselectedAgeRange[8] &&
                                      commonState.jselectedAgeRange[8].checked
                                    }
                                    // checked={props.jselectedAgeRange[7].checked}
                                  />
                                  <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                  <span className="AS1labelTemp">15+</span>
                                </label>
                              )}
                            </div>
                          </>
                        ) : null}
                      </div>

                      {/* Skills */}
                      {templateData.age_bracket === 'adult' ||
                      templateData.age_bracket === 'junior' ? (
                        <div className="container">
                          <div className="row shadow-box">
                            <div className="col-1 p-0 text-left pl-2">
                              <img
                                src={playersIcon}
                                alt=""
                                className="img-fluid mb-1 mt-2"
                              />
                            </div>
                            <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                              Skill Level
                            </div>
                            <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto"></div>
                          </div>
                          {templateData &&
                            templateData.age_bracket === 'adult' && (
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
                                      // style={{marginLeft:5}}
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[0] &&
                                        commonState.selectedSkill[0].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[3] &&
                                        commonState.selectedSkill[3].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[6] &&
                                        commonState.selectedSkill[6].checked
                                      }
                                      // checked={props.selectedSkill[6].checked}
                                    />
                                    <span className="AS1checkmarkTemp ml-5"></span>
                                    <span className="AS1labelTemp">
                                      Masters
                                    </span>
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[1] &&
                                        commonState.selectedSkill[1].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[4] &&
                                        commonState.selectedSkill[4].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[7] &&
                                        commonState.selectedSkill[7].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[2] &&
                                        commonState.selectedSkill[2].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[5] &&
                                        commonState.selectedSkill[5].checked
                                      }
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
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[8] &&
                                        commonState.selectedSkill[8].checked
                                      }
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
                                      id="SkillInput9"
                                      name="B"
                                      type="checkbox"
                                      value="B"
                                      onChange={onSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.selectedSkill[9] &&
                                        commonState.selectedSkill[9].checked
                                      }
                                      // checked={props.selectedSkill[2].checked}
                                    />
                                    <span className="AS1checkmarkTemp ml-5"></span>
                                    <span className="AS1labelTemp">B</span>
                                  </label>
                                </div>
                              </>
                              // </div>
                              // </div>
                            )}
                          {templateData &&
                            templateData.age_bracket === 'junior' && (
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
                                      onChange={onjSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.jselectedSkill[0] &&
                                        commonState.jselectedSkill[0].checked
                                      }
                                      // checked={props.jselectedSkill[0].checked}
                                      // checked={Club?true:false}
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
                                      onChange={onjSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.jselectedSkill[1] &&
                                        commonState.jselectedSkill[1].checked
                                      }
                                      // checked={props.jselectedSkill[1].checked}

                                      // checked={HighSchool?true:false}
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
                                      onChange={onjSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.jselectedSkill[2] &&
                                        commonState.jselectedSkill[2].checked
                                      }
                                      // checked={props.jselectedSkill[2].checked}
                                      // checked={Gold?true:false}
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
                                      onChange={onjSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.jselectedSkill[3] &&
                                        commonState.jselectedSkill[3].checked
                                      }
                                      // checked={props.jselectedSkill[3].checked}
                                      // checked={Silver?true:false}
                                    />
                                    <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                    <span className="AS1labelTemp ">
                                      Silver
                                    </span>
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
                                      onChange={onjSkillCheck} // Prop: Puts data into state
                                      checked={
                                        commonState.jselectedSkill[4] &&
                                        commonState.jselectedSkill[4].checked
                                      }
                                      // checked={props.jselectedSkill[4].checked}
                                      // checked={Bronze?true:false}
                                    />
                                    <span className="AS1checkmarkTemp MensCheckTemp ml-5"></span>
                                    <span className="AS1labelTemp">Bronze</span>
                                  </label>
                                </div>
                              </>
                            )}
                        </div>
                      ) : null}
                    </div>

                    {/* Finance */}
                    <div className="col-12 p-0" style={{ marginTop: 24 }}>
                      <div className="text-left address-title">
                        Global Finance
                      </div>
                      <div className="container">
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={birdIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Early Bird
                          </div>
                          <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                            {earlyBird1}
                          </div>
                          <DropdownModals className="col-1 p-0 text-right m-auto">
                            <li
                              onClick={() => {
                                setEarlyBird1('Yes');
                                setEarlyBird1Duplicate('Yes');
                              }}
                            >
                              Yes
                            </li>
                            <li
                              onClick={() => {
                                setEarlyBird1('No');
                                setEarlyBird1Duplicate('No');
                              }}
                            >
                              No
                            </li>
                          </DropdownModals>
                          {/* <div className="col-5 p-0 text-right m-auto">
                <img
                  src={downArrow}
                  alt=""
                  className="img-fluid mb-1"
                />
              </div> */}
                        </div>
                      </div>

                      {(earlyBird1 === 'Yes' || earlyBird1 === 'yes') && (
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
                              <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                                Early Bird Date
                              </div>
                              <div className="col-7 p-0 text-right box-shadow-text m-auto">
                                <DatePicker
                                  format="MM/DD/YYYY"
                                  style={{
                                    width: 110,
                                    color: '#747474',
                                    cursor: 'pointer',
                                  }}
                                  bordered={false}
                                  suffixIcon={
                                    <img
                                      src={calenderIconRight}
                                      alt=""
                                      className="justify-content-center align-items-center"
                                    />
                                  }
                                  className="pr-0 text-uppercase p-0 input-styling date_picker mr-3 box-shadow-text"
                                  allowClear={false}
                                  value={earlyBirdDate1}
                                  onChange={(e) => {
                                    setEarlyBirdDate1(e);
                                    setEarlyBirdDate1Duplicate(e);
                                  }}
                                  placeholder=""
                                  // popupStyle={{height:467 , width:343}}
                                  popupStyle={{}}
                                  disabledDate={disabledStartDate}
                                />
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
                              <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                                Early Bird Amount
                              </div>
                              <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                                <NumberFormat
                                  pattern={'[0-9]*'}
                                  displayType="input"
                                  thousandSeparator={true}
                                  placeholder="$"
                                  prefix={'$'}
                                  decimalScale={2}
                                  className={`form-control p-0 steps-number-input`}
                                  name="leagueCost"
                                  onChange={(e) => {
                                    const num = e.target.value
                                      .replace(/\,/g, '')
                                      .replace('$', '')
                                      .replace('-', '');
                                    // num=parseInt(num,10);
                                    setEarlyBirdAmount1(num);
                                    setEarlyBirdAmount1Duplicate(Number(num));
                                    console.log(
                                      'Early bird amount:',
                                      e.target.value,
                                      num
                                    );
                                  }}
                                  value={earlyBirdAmount1}
                                  style={{
                                    height: 'inherit',
                                    // direction: 'rtl',
                                    fontSize: 14,
                                    fontFamily: 'FuturaMedium',
                                    textAlign: 'right',
                                  }}
                                />
                              </div>
                              <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                                <img
                                  src={clearIcon}
                                  alt=""
                                  className="img-fluid mb-1 mr-1"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => {
                                    setEarlyBirdAmount1('');
                                    setEarlyBirdAmount1Duplicate('');
                                  }}
                                />
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
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Registration Amount
                          </div>
                          <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                            <NumberFormat
                              pattern={'[0-9]*'}
                              displayType="input"
                              thousandSeparator={true}
                              placeholder="$"
                              prefix={'$'}
                              decimalScale={2}
                              className={`form-control p-0 steps-number-input`}
                              name="leagueCost"
                              onChange={(e) => {
                                const num = e.target.value
                                  .replace(/\,/g, '')
                                  .replace('$', '');
                                // num=parseInt(num,10);
                                setRegistrationAmount1(num);
                                setRegistrationAmount1Duplicate(Number(num));
                                console.log('Reg amount:', e.target.value, num);
                              }}
                              value={registrationAmount1}
                              style={{
                                height: 'inherit',
                                // direction: 'rtl',
                                fontSize: 14,
                                fontFamily: 'FuturaMedium',
                                textAlign: 'right',
                              }}
                            />
                          </div>
                          <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                            <img
                              src={clearIcon}
                              alt=""
                              className="img-fluid mb-1 mr-1"
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                setRegistrationAmount1('');
                                setRegistrationAmount1Duplicate('');
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Late Amount */}
                      <div className="container" style={{ marginBottom: 130 }}>
                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Late Amount
                          </div>
                          <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                            <NumberFormat
                              pattern={'[0-9]*'}
                              displayType="input"
                              thousandSeparator={true}
                              placeholder="$"
                              prefix={'$'}
                              decimalScale={2}
                              className={`form-control p-0 steps-number-input`}
                              name="leagueCost"
                              onChange={(e) => {
                                const num = e.target.value
                                  .replace(/\,/g, '')
                                  .replace('$', '');
                                // num=parseInt(num,10);
                                setLateAmount1(num);
                                setLateAmount1Duplicate(Number(num));
                                console.log(
                                  'Late amount:',
                                  e.target.value,
                                  num
                                );
                              }}
                              value={lateAmount1}
                              style={{
                                height: 'inherit',
                                // direction: 'rtl',
                                fontSize: 14,
                                fontFamily: 'FuturaMedium',
                                textAlign: 'right',
                              }}
                            />
                          </div>
                          <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                            <img
                              src={clearIcon}
                              alt=""
                              style={{ cursor: 'pointer' }}
                              className="img-fluid mb-1 mr-1"
                              onClick={() => {
                                setLateAmount1('');
                                setLateAmount1Duplicate('');
                              }}
                            />
                          </div>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={birdIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Discount or Voucher
                          </div>
                          <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                            {discount_voucher}
                          </div>
                          <DropdownModals className="col-1 p-0 text-right m-auto">
                            <li
                              onClick={() => {
                                setDiscount_voucher('Discount');
                                setDiscount_voucher_duplicate('Discount');
                              }}
                            >
                              Discount
                            </li>
                            <li
                              onClick={() => {
                                setDiscount_voucher('Voucher');
                                setDiscount_voucher_duplicate('Voucher');
                              }}
                            >
                              Voucher
                            </li>
                            <li
                              onClick={() => {
                                setDiscount_voucher('Not Selected');
                                setDiscount_voucher_duplicate('Not Selected');
                              }}
                            >
                              Not Selected
                            </li>
                          </DropdownModals>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div
                            className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4"
                            onClick={() =>
                              console.log(discountAmount1Duplicate)
                            }
                          >
                            Amount
                          </div>
                          <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                            <NumberFormat
                              pattern={'[0-9]*'}
                              displayType="input"
                              thousandSeparator={true}
                              placeholder="$"
                              prefix={'$'}
                              decimalScale={2}
                              className={`form-control p-0 steps-number-input`}
                              name="leagueCost"
                              onChange={(e) => {
                                const num = e.target.value
                                  .replace(/\,/g, '')
                                  .replace('$', '');
                                // num=parseInt(num,10);
                                setDiscountAmount1(num);
                                setDiscountAmount1Duplicate(Number(num));
                                console.log(
                                  'Late amount:',
                                  e.target.value,
                                  num
                                );
                              }}
                              value={discountAmount1}
                              style={{
                                height: 'inherit',
                                // direction: 'rtl',
                                fontSize: 14,
                                fontFamily: 'FuturaMedium',
                                textAlign: 'right',
                              }}
                            />
                          </div>
                          <div className="col-1 p-0 justify-content-center align-items-center m-auto">
                            <img
                              src={clearIcon}
                              alt=""
                              style={{ cursor: 'pointer' }}
                              className="img-fluid mb-1 mr-1"
                              onClick={() => {
                                setDiscountAmount1('');
                                setDiscountAmount1Duplicate('');
                              }}
                            />
                          </div>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={birdIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Applied
                          </div>
                          <div className="col-6 p-0 text-right box-shadow-text mt-auto mb-auto">
                            {discount_applied}
                          </div>
                          <DropdownModals className="col-1 p-0 text-right m-auto">
                            <li
                              onClick={() => {
                                setDiscount_applied('discount per team');
                                setDiscount_applied_duplicate(
                                  'discount per team'
                                );
                              }}
                            >
                              Per Team
                            </li>
                            <li
                              onClick={() => {
                                setDiscount_applied('discount per player');
                                setDiscount_applied_duplicate(
                                  'discount per player'
                                );
                              }}
                            >
                              Per Player
                            </li>
                            <li
                              onClick={() => {
                                setDiscount_applied('Not Selected');
                                setDiscount_applied_duplicate('Not Selected');
                              }}
                            >
                              Not Selected
                            </li>
                          </DropdownModals>
                        </div>

                        <div className="row shadow-box">
                          <div className="col-1 p-0 text-left pl-2">
                            <img
                              src={walletIcon}
                              alt=""
                              className="img-fluid mb-1 mt-2"
                            />
                          </div>
                          <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4">
                            Discount or Voucher Description
                          </div>
                          <div className="col-7 p-0 text-right box-shadow-text mt-auto mb-auto pr-2">
                            <input
                              type="text"
                              name=""
                              id=""
                              style={{
                                border: 0,
                                outline: 'none',
                                textAlign: 'right',
                              }}
                              value={discountText}
                              onChange={(e) => {
                                setDiscountText(e.target.value);
                                setDiscountTextDuplicate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer>
            <div className="m-0 col-auto ml-auto mt-3">
              <div className="lower-back-button-cancel" onClick={onOpenModal}>
                <span className="lower-back-button-text">CANCEL</span>
              </div>
            </div>
            <div className="m-0 col-auto mt-3" style={{ position: 'relative' }}>
              {saveLoading ? (
                editDivTemplateError === null ? (
                  <div className="on_save_message d-flex justify-content-center align-items-center">
                    <LoadingSpinner />
                    <div className="pl-2">Editing Template...</div>
                  </div>
                ) : (
                  <div className="on_save_error">
                    {editDivTemplateError.message}
                  </div>
                )
              ) : (
                <></>
              )}
              <div className="lower-back-button" onClick={onSave}>
                <span className="lower-back-button-text">SAVE</span>
              </div>
            </div>
          </Footer>
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
            }}
          >
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
              Are your sure you want to cancel?
            </div>
            <p
              className="text-center"
              style={{
                width: 398,
                marginTop: 8,
                fontSize: 10,
                fontFamily: 'Futura',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: 'normal',
                color: '#9b9b9b',
              }}
            >
              All changes will not be saved and progress will be lost.
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
                    color: '#4a4a4a',
                  }}
                >
                  NO, CONTINUE
                </button>
                <button
                  className="btn-sm pb-1 ml-3"
                  id="yellow-button-hover"
                  onClick={() => props.history.goBack()}
                  style={{
                    border: '1px solid yellow',
                    borderRadius: 15,
                    width: 112,
                    height: 24,
                    fontSize: 10,
                    backgroundColor: '#ffd420',
                    outline: 0,
                    color: '#4a4a4a',
                  }}
                >
                  YES, CANCEL
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default TemplateEdit;
