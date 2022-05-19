import React, { useEffect, useState, useContext, useRef } from 'react';
import './NewEventProfile.css';
// import clearIcon from '../../assets/images/icons-x-input.svg';
import ball from '../../assets/images/icon-orange-ball.svg'
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';
import radioButtonIcon from '../../assets/images/button-radio-grey-outline.svg';
import SubTiltleInput from './SubTitleInput';
import calenderIcon from '../../assets/images/icon-orange-calender.svg';
import clock from '../../assets/images/icon-orange-clock.svg';
import trophy from '../../assets/images/icon-orange-teams.svg';
import addNewIcon from '../../assets/images/icon-orange-players-plus.svg';
import clearIcon from '../../assets/images/icons-x-input.svg';
import playersIcon from '../../assets/images/icon-orange-players.svg';
import durationIcon from '../../assets/images/icon-orange-duration.svg';
import poolsIcon from '../../assets/images/icon-orange-pools.svg';
import seasonsIcon from '../../assets/images/icon-orange-seasons.svg';
import pointsIcon from '../../assets/images/icon-orange-points.svg';
import playTypeIcon from '../../assets/images/icon-orange-playtype.svg';
import surfaceIcon from '../../assets/images/icon-orange-surface.svg';
import lightBulbIcon from '../../assets/images/icon-orange-lightbulb.svg';
import binocularsIcon from '../../assets/images/icon-orange-binoculars.svg';
import megaPhoneIcon from '../../assets/images/icon-orange-megaphone.svg';
import talkIcon from '../../assets/images/icon-orange-talk.svg';
import emailIcon from '../../assets/images/icon-orange-email.svg';
import purseIcon from '../../assets/images/icon-orange-purse.svg';
import pencilIcon from '../../assets/images/icon-orange-pencil.svg';
import positionIcon from '../../assets/images/icon-orange-position.svg';
import documentIcon from '../../assets/images/icon-orange-document.svg';
import uploadIcon from '../../assets/images/icon-menu-upload.svg';
import Footer from '../../components/footer/Footer';
import CalenderComponent from '../../components/calendar/CalenderComponent';
import TimeComponent from '../../components/time/TimeComponent';
import SelectOptions from '../../components/selectOptions/SelectOptions';
import EventContext from '../../context/event/eventContext';
import loadingIcon from '../../assets/images/icon-loading.jpg';
import ballIcon from '../../assets/images/group-3.svg';
import searchIcon from '../../assets/images/icon-sidemenu-search.svg';
import imageIcon from '../../assets/images/icon-orange-image.svg';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import ShadowContainer from './ShadowContainer';
import MainInput from './MainInput';
import TextAreaInput from './TextAreaInput';
import 'react-responsive-modal/styles.css';
import MasterForm from '../../components/WizardFormComponent';
import NumberFormat from 'react-number-format';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-datepicker/dist/react-datepicker.css';
import 'antd/dist/antd.less';
import { DatePicker, TimePicker } from 'antd';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
import moment from 'moment';
import photoAddIcon from '../../assets/images/group.svg';
import profilePic from '../../assets/images/profilepic.jpg';
import iconHamburger from '../../assets/images/icon-sidemenu-list.svg';
import iconAvatarLeague from '../../assets/images/icon-avatar-league.png';
import DropdownModals from '../../components/DropdownModals';
import Dropdown from '../../components/Dropdown';
import defaultIcon3 from '../../assets/images/defaultIcon3.png';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { NonceProvider } from 'react-select';
import defaultIcon2 from '../../assets/images/defaultIcon2.png';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ShadowContainerDropdown from './ShadowContainerDropdown';
import { triggerFocus } from 'antd/lib/input/Input';

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

const NewEventProfile = (props) => {
  const eventContext = useContext(EventContext);

  const {
    eventAddresses,
    addressFilter,
    filteredAddresses,
    addressFilterClear,
    contactFilter,
    contactFilterClear,
    // eventContacts,
    filteredContacts,
    loading,
    // setEventProfileData,
    saveData,
    SET_ADDRESS_ID,

    // dropdown api integration
    dropDownFun,
    eventDropdownData,

    //create tournament
    createTournament,

    // event addresses
    eventAddressesFun,

    //save address
    saveAddress,

    //event id
    eventId,

    //addressId
    addressId,
    //address id error
    addressIdError,

    //get tournament by id
    getTournamentById,

    template_id,
    age_bracket,
    div_name,
    early_bird,
    early_bird_date,
    early_bird_amount,
    late_amount,
    registration_amount,
    age_range,
    gender,
    skill_level,
    discount_amount,
    discount_text,
    discount_applied,
    discount_voucher,
    format,
    team_size,
    save_as_template,
    selectedTemplateName,
    // saveClicked,

    sendDivisionDataToEvent,
    UpdateEventId,
    clearTournamentData,
    clearTemplateName,
    teamSizeMap,
    createTournamentError,
    setLoading,
    templateDataArray,
    removeFromTemplateData,
    templateDataToNull,
    divisionDataArray,
    removeFromDivisionData,
    divisionDataToNull,
    earlyBirdDateStateFun,
  } = eventContext;

  //states
  const [courtName, setCourtName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('US');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [noOfCourts, setNoOfCourts] = useState('');
  // save to list
  const [isGoing, setIsGoing] = useState(false);
  const [stateCode, setStateCode] = useState('USA');
  const [court_id, setCourt_id] = useState(addressId !== null ? addressId : '');
  const [contactName, setContactName] = useState('');
  const [directorName, setDirectorName] = useState('');
  const [listAddress, setListAddress] = useState(null);
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [earlyBirdDate, setEarlyBirdDate] = useState('');
  const [closesOnDate, setClosesOnDate] = useState('');
  const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');
  const [endsAtTime, setEndsAtTime] = useState('');

  const [isGoing2, setIsGoing2] = useState(false);
  //id
  const [pool_id, setPool_id] = useState('');
  const [points_id, setPoints_id] = useState('');
  const [season_id, setSeason_id] = useState('');
  const [seeding_method_id, setSeeding_method_id] = useState('');
  const [main_contact_id, setMain_contact_id] = useState('');
  const [director_id, setDirector_id] = useState('');
  const [scoresheet_id, setScoresheet_id] = useState('');
  // Choice for 'YES' and 'NO'
  const [scoreSheetChoice, setScoreSheetChoice] = useState('');
  const [signatureAgreementChoice, setSignatureAgreementChoice] = useState('');
  const [purseAmountChoice, setPurseAmountChoice] = useState('');
  const [purseAmountNumber, setPurseAmountNumber] = useState('');
  const [purseAmountPercentChoice, setPurseAmountPercentChoice] = useState('');
  const [purseAmountPercentNumber, setPurseAmountPercentNumber] = useState('');
  const [donation1, setDonation1] = useState(null);
  const [donation2, setDonation2] = useState(null);
  const [donation3, setDonation3] = useState(null);
  const [donationText, setDonationText] = useState('');
  const [onlinePayChoice, setOnlinePayChoice] = useState('');
  const [directorChoice, setDirectorChoice] = useState('');
  const [showEntriesChoice, setShowEntriesChoice] = useState('');
  const [hostClinicChoice, setHostClinicChoice] = useState('');
  const [surfaceTypeChoice, setSurfaceTypeChoice] = useState('');
  const [membershipChoice, setMembershipChoice] = useState('silver');
  const [teamListingChoice, setTeamListingChoice] = useState(1);
  const [surfaceId, setSurfaceId] = useState('');
  const [seedingMethodChoice, setSeedingMethodChoice] = useState('');
  const [placementPointsChoice, setPlacementPointsChoice] = useState('');
  const [seasonChoice, setSeasonChoice] = useState('');
  // const [teamSizeChoice, setTeamSizeChoice] = useState('');
  const [numberOfSets, setNumberOfSets] = useState(3);
  const [matchTime, setMatchTime] = useState(60);
  const [maxPointsPerSet, setMaxPointsPerSet] = useState(21);
  const [noOfPlayoffs, setNoOfPlayoffs] = useState(1);
  const [teamsInPlayoff1, setTeamsInPlayoff1] = useState(null);
  const [teamsInPlayoff2, setTeamsInPlayoff2] = useState(null);
  const [teamsInPlayoff3, setTeamsInPlayoff3] = useState(null);
  const [teamsInPlayoff4, setTeamsInPlayoff4] = useState(null);
  const [registrationCapChoice, setRegistrationCapChoice] = useState('');
  const [poolsChoice, setPoolsChoice] = useState('');
  const [pdfValue, setPdfValue] = useState({ preview: '', raw: '' });
  const [file, setFile] = useState({ preview: '', raw: '' });
  const [nameError, setNameError] = useState(null);
  const [addressError, setAddressError] = useState(null);
  const [courtNoError, setCourtNoError] = useState(null);
  const [courtNoError2, setCourtNoError2] = useState(null);
  const [dateError, setDateError] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  const [teamSizeError, setTeamSizeError] = useState(null);
  const [detailsError, setDetailsError] = useState(null);
  const [contactError, setContactError] = useState(null);
  const [financeError, setFinanceError] = useState(null);
  const [documentsError, setDocumentsError] = useState(null);
  // description
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(null);
  //subtitle
  const [SubTitleError, setSubTileError] = useState(null);
  const [sub_title, setSubtitle] = useState('')
  // image
  const [imageState, setImageState] = useState({ preview: '', raw: '' });
  const [imageError, setImageError] = useState('');
  const [permanentFlag, setPermanentFlag] = useState(1);

  //searchable dropdown toggle states
  const [hamburgerOpen1, setHamburgerOpen1] = useState(false);

  //save to list counter
  const [showSaveToList, setShowSaveToList] = useState(true);

  const notify = () => toast.dark('Court getting added!');

  const notifyTemplateAdded = () => toast.dark('Template Added!');

  const [saveDisabled, setSaveDisabled] = useState(null);
  const [saveLoading, setSaveLoading] = useState(false);
  //state for checking multiple save clicks
  const [saveClicked, setSaveClicked] = useState(false);
  const [white, setWhite] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [black, setBlack] = useState(false);

  //calling api's at the beginning
  // useEffect(() => {
  //   dropDownFun();
  //   eventAddressesFun();
  //   //eslint-disable-next-line
  // }, []);

  const getAllCourts = () => {
    setHamburgerOpen1(!hamburgerOpen1);
    eventAddressesFun();
    // addressFilterClear();
  };

  useEffect(() => {
    if (hamburgerOpen1 === false) {
      addressFilterClear();
    }
  }, [hamburgerOpen1]);

  useEffect(() => {
    dropDownFun();
    clearTournamentData();
    clearTemplateName();
    setSaveDisabled(true);
    templateDataToNull();
    divisionDataToNull();
    // setSaveLoading(true);
  }, []);

  useEffect(() => {
    if (eventDropdownData !== null) {
      console.log('eventDropdownData', eventDropdownData);
    }
  }, [eventDropdownData]);

  useEffect(() => {
    // notifyTemplateAdded()
    console.log('Template id in event screen:', template_id);
  }, [template_id]);

  useEffect(() => {
    console.log('Template id in event screen:', template_id);
  }, []);



  useEffect(()=>{
    console.log(stateCode,country,zip)
    var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    if(( (us.test(zip.toString()) || zip === '') && stateCode==='USA')
     || ((can.test(zip.toString()) || zip === '') && stateCode==='CA')){
      setCourtNoError(null)
     
     }else{
      setCourtNoError('Country and zip do not match')       }
  },[stateCode,zip])




  // useEffect(() => {
  //   sendDivisionDataToEvent({
  //         tournament_id: getTournamentData !== null ? getTournamentData.id : '',
  //         template_id: '',
  //         age_bracket: commonState.age.toLowerCase(),
  //         div_name: commonState.divisionName,
  //         early_bird: commonState.earlyBird.toLowerCase(),
  //         early_bird_amount: commonState.earlyBirdAmount,
  //         late_amount: commonState.lateAmount,
  //         registration_amount: commonState.normalAmount,
  //         age_range: selectedAgeData,
  //         gender: selectedGenderData,
  //         skill_level: selectedSkillData,
  //         format: commonState.teamFormat.charAt(0),
  //         team_size: commonState.teamSize,
  //         save_as_template: '',
  //       })
  // }, [])

  //save address function
  const saveAddressFunction = async () => {
    console.log('Cournt');
    if (
      courtName !== '' &&
      streetAddress !== '' &&
      country !== '' &&
      // // city !== '' &&
      zip !== ''
      // &&
      // noOfCourts !== '' &&
      // noOfCourts < 100 &&
      // noOfCourts > 0
      // // stateCode !== ''
    ) {
      const data = JSON.stringify({
        court_name: courtName,
        street_address: streetAddress,
        country: country,
        // city: city,
        zip: zip,
        // state_code: stateCode,
        permanent_flag: permanentFlag,
        number_of_court: noOfCourts === '' ? 20 : noOfCourts,
      });
      console.log('Court added manually', data);
      const actualData = new FormData();
      actualData.append('data', data);
      actualData.append('court_pic', file.raw);
      // notify();
      await saveAddress(actualData);
    }
    // setCourt_id(addressId);
    console.log('AddressId,court_id in save as court', addressId, court_id);
    setListAddress({
      court_id,
    });
  };

  useEffect(() => {
    console.log('AddressId,court_id', addressId, court_id);
    setCourt_id(addressId);
  }, [addressId]);

  //contact and address useRef
  const contactInputValue = useRef('');
  const directorInputValue = useRef('');
  const addressInputValue = useRef('');

  //contact component
  function ContactListComponent({ address }) {
    return (
      <div
        className="container row m-0 hover-list p-0"
        onClick={() => {
          setContactName(address.promoter_name);
          setMain_contact_id(address.id);
          setMainContactDropdown(false);
        }}
      >
        <div
          className="col-2 m-auto text-center p-0"
          style={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <img
            alt="player"
            onError={(e) => (e.target.src = defaultIcon2)}
            src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${address.profile_pic}`}
            style={{
              borderRadius: '50%',
              width: 25,
              height: 25,
            }}
          />
        </div>
        <div className="col-10 text-left text-dark address-contact-list-content p-0">
          {address.promoter_name}
        </div>
      </div>
    );
  }

  const showContacts = () => {
    if (loading) {
      return (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      );
    }
    if (filteredContacts !== null && !loading) {
      return filteredContacts.map((address) => (
        <ContactListComponent key={address.id} address={address} />
      ));
    }
    if (eventDropdownData.managers !== null && !loading) {
      return eventDropdownData.managers.map((address) => (
        <ContactListComponent key={address.id} address={address} />
      ));
    }
  };

  //director component
  function DirectorComponent({ address }) {
    return (
      <div
        // ref={refDirector}
        className="container row m-0 hover-list p-0"
        onClick={() => {
          setDirectorName(address.promoter_name);
          setDirector_id(address.id);
          setDirectorDropdown(false);
          // contactFilterClear();
        }}
      >
        {' '}
        <div
          className="col-2 m-auto text-center p-0"
          style={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <img
            alt="player"
            onError={(e) => (e.target.src = defaultIcon2)}
            src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${address.profile_pic}`}
            style={{
              borderRadius: '50%',
              width: 25,
              height: 25,
            }}
          />
        </div>
        <div className="col-10 text-left text-dark address-contact-list-content p-0">
          {address.promoter_name}
        </div>
      </div>
    );
  }

  const showDirector = () => {
    if (loading) {
      return (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      );
    }
    if (filteredContacts !== null && !loading) {
      return filteredContacts.map((address) => (
        <DirectorComponent key={address.id} address={address} />
      ));
    }
    if (eventDropdownData.managers !== null && !loading) {
      return eventDropdownData.managers.map((address) => (
        <DirectorComponent key={address.id} address={address} />
      ));
    }
  };

  //address component
  useEffect(() => {
    if (filteredAddresses === null) {
      addressInputValue.current = '';
    }
  });

  let AddressListComponent = ({ address }) => {
    const {
      court_id,
      court_name,
      street_address,
      country,
      zip,
      state_code,
      number_of_court,
    } = address;
    return (
      <div
        className="container row m-0 hover-list p-0"
        onClick={() => {
          setListAddress({
            court_id,
            court_name,
            street_address,
            country,
            zip,
          });
          setCourtName(court_name);
          setStreetAddress(street_address);
          setCountry(country);
          setZip(zip);
          setNoOfCourts(number_of_court);
          setCity(city);
          setShowSaveToList(false);
          setHamburgerOpen1(false);
          // notify();
          setCourt_id(court_id);
        }}
      >
        {' '}
        <div
          className="col-2 m-auto text-center p-0"
          style={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <img
            alt="player"
            onError={(e) => (e.target.src = ball)}
            src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${address.picture}`}
            style={{
              borderRadius: '50%',
              width: 25,
              height: 25,
              backgroundColor: 'black',
            }}
          />
        </div>
        <div className="col-10 text-left address-contact-list-content p-0">
          {court_id},{court_name}, {street_address},{address.state_code}
          {` `} {address.zip}
        </div>
      </div>
    );
  };

  const showAddresses = () => {
    if (loading) {
      return (
        // <div>
        //   <img src={loadingIcon} alt="" />
        // </div>
        <div
          style={{ marginTop: 55 }}
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <LoadingSpinner />
        </div>
      );
    }
    
    // console.log("******* filteredAdd, eventAdd",filteredAddresses,eventAddresses)
    if (filteredAddresses !== null && !loading) {
      return filteredAddresses.map((address,index1) => (
        <AddressListComponent key={index1} address={address} />
      ));
    }
    if (
      Array.isArray(eventAddresses) && 
      eventAddresses.length !== 0 &&
      !loading && 
      filteredAddresses === null
    ) {
      return eventAddresses.map((address,index1) => (
        <AddressListComponent key={index1} address={address} />
      ));
    } else if (
      !Array.isArray(eventAddresses) &&
      eventAddresses.length !== 0 && 
      !loading && 
      filteredAddresses === null
    ) {
      return (
        <p className="text-center" style={{ color: '#ff2072' }}>
          {eventAddresses}
        </p>
      );
    }
  };


  useEffect(async () => {
    console.log(
      '******* filteredAdd, eventAdd',
      filteredAddresses,
      eventAddresses
    );
    await setLoading();
    //  await showAddresses();
  }, [filteredAddresses, eventAddresses]);

  //image upload
  const handleChange = (event) => {
    setFile({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  //errors
  // useEffect(() => {
  //   if (eventName === '') {
  //     setNameError('Please enter event name');
  //   } else {
  //     setNameError(null);
  //   }
  // }, [eventName]);

  useEffect(() => {
    // if (courtName === '' || streetAddress === '' || country === '' || zip === '' || noOfCourts === '') {
    //   setAddressError('Please fill all address fields');
    // }
    //  else {
    //   setAddressError(null);
    // }
    if (
      courtName !== '' &&
      streetAddress !== '' &&
      country !== '' &&
      zip !== ''
      // &&
      // noOfCourts !== ''
    ) {
      setAddressError(null);
    }
  }, [courtName, streetAddress, country, zip, noOfCourts]);

  useEffect(() => {
    if (noOfCourts > 9999) {
      setCourtNoError('No. of courts cannot be greater than 9999');
    } else {
      setCourtNoError(null);
    }
  }, [noOfCourts]);

  useEffect(() => {
    console.log('No of courts:', noOfCourts);
    if (noOfCourts < 1 && noOfCourts !== '') {
      setCourtNoError2('No. of courts cannot be less than 1');
    } else {
      setCourtNoError2(null);
    }
  }, [noOfCourts]);

  // useEffect(() => {
  //   var can = new RegExp(/(^\D{1}\d{1}\D{1}-\d{1}\D{1}\d{1}$)/);
  //   var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
  //   if (can.test(zip.toString()) || us.test(zip.toString()) || zip === '') {
  //     setCourtNoError2(null);
  //   } else {
  //     setCourtNoError2('Enter Valid Zip');
  //   }
  // }, [zip]);

  useEffect(() => {
    if (startDate !== '' && endDate !== '' && earlyBirdDate !== '') {
      setDateError(null);
    }
  }, [startDate, endDate, earlyBirdDate]);

  useEffect(() => {
    // if (startTime === '' || endTime === '') {
    //   setTimeError('Please select start and end time');
    // } else {
    //   setTimeError(null);
    // }
    if (startTime !== '') {
      setTimeError(null);
    }
  }, [startTime]);

  useEffect(() => {
    if (
      registrationCapChoice !== '' &&
      // teamSizeChoice !== '' &&
      closesOnDate !== '' &&
      endsAtTime !== '' &&
      numberOfSets !== '' &&
      matchTime !== '' &&
      maxPointsPerSet !== '' &&
      noOfPlayoffs !== ''
    ) {
      setRegistrationError(null);
    }
  }, [
    registrationCapChoice,
    // teamSizeChoice,
    closesOnDate,
    endsAtTime,
    numberOfSets,
    matchTime,
    maxPointsPerSet,
    noOfPlayoffs,
  ]);

  useEffect(() => {
    if (noOfPlayoffs === 1) {
      setTeamsInPlayoff1('');
      setTeamsInPlayoff2('');
      setTeamsInPlayoff3('');
      setTeamsInPlayoff4('');
    }
    if (noOfPlayoffs === 2) {
      setTeamsInPlayoff3('');
      setTeamsInPlayoff4('');
    }
    if (noOfPlayoffs === 3) {
      setTeamsInPlayoff4('');
    }
  }, [noOfPlayoffs]);

  useEffect(() => {
    if (noOfPlayoffs === 1) {
      setTeamsInPlayoff1('');
      setTeamsInPlayoff2('');
      setTeamsInPlayoff3('');
      setTeamsInPlayoff4('');
    }
  }, [noOfPlayoffs]);

  useEffect(() => {
    let tp1 =
      teamsInPlayoff1 === null || teamsInPlayoff1 === '' ? 0 : teamsInPlayoff1;
    let tp2 =
      teamsInPlayoff2 === null || teamsInPlayoff2 === '' ? 0 : teamsInPlayoff2;
    let tp3 =
      teamsInPlayoff3 === null || teamsInPlayoff3 === '' ? 0 : teamsInPlayoff3;
    let tp4 =
      teamsInPlayoff4 === null || teamsInPlayoff4 === '' ? 0 : teamsInPlayoff4;
    // console.log(
    //   teamSizeChoice,
    //   parseInt(tp1) + parseInt(tp2) + parseInt(tp3) + parseInt(tp4)
    // );

    // if (
    //   teamSizeChoice ===
    //   parseInt(tp1) + parseInt(tp2) + parseInt(tp3) + parseInt(tp4)
    // ) {
    //   setTeamSizeError(null);
    // }
  }, [
    // teamSizeChoice,
    teamsInPlayoff4,
    teamsInPlayoff1,
    teamsInPlayoff2,
    teamsInPlayoff3,
  ]);

  useEffect(() => {
    if (
      poolsChoice !== '' &&
      seasonChoice !== '' &&
      placementPointsChoice !== '' &&
      seedingMethodChoice !== '' &&
      surfaceTypeChoice !== '' &&
      hostClinicChoice !== '' &&
      showEntriesChoice !== '' &&
      teamListingChoice !== null
    ) {
      setDetailsError(null);
    }
  }, [
    poolsChoice,
    seasonChoice,
    placementPointsChoice,
    seedingMethodChoice,
    surfaceTypeChoice,
    hostClinicChoice,
    showEntriesChoice,
    teamListingChoice,
  ]);

  useEffect(() => {
    if (directorName !== '' && contactName !== '') {
      setContactError(null);
    }
  }, [directorName, contactName]);

  useEffect(() => {
    if (
      onlinePayChoice !== '' &&
      purseAmountChoice !== '' &&
      membershipChoice !== null
    ) {
      setFinanceError(null);
    }
  }, [onlinePayChoice, purseAmountChoice, membershipChoice]);

  useEffect(() => {
    if (
      signatureAgreementChoice !== '' &&
      scoreSheetChoice !== '' &&
      pdfValue !== ''
    ) {
      setDocumentsError(null);
    }
  }, [signatureAgreementChoice, scoreSheetChoice, pdfValue]);

  useEffect(() => {
    if (description !== '') {
      setDescriptionError(null);
    }
  }, [description]);

  useEffect(() => {
    if (sub_title !== '') {
      setSubTileError(null);
    } 
  }, [sub_title]);

  useEffect(() => {
    if (imageState === '') {
      setImageError('Please fill image input');
    } else {
      setImageError(null);
    }
  }, [imageState]);

  useEffect(() => {
    if (eventName !== '') {
      setNameError(null);
    }
  }, [eventName]);

  useEffect(() => {
    if (
      eventName !== '' &&
      courtName !== '' &&
      streetAddress !== '' &&
      country !== '' &&
      zip !== '' &&
      // &&
      // noOfCourts !== ''
      // &&
      // noOfCourts < 100
      startDate !== '' &&
      endDate !== '' &&
      earlyBirdDate !== '' &&
      startTime !== '' &&
      // endTime !== '' &&
      registrationCapChoice !== '' &&
      // teamSizeChoice !== '' &&
      closesOnDate !== '' &&
      endsAtTime !== '' &&
      poolsChoice !== '' &&
      seasonChoice !== '' &&
      placementPointsChoice !== '' &&
      seedingMethodChoice !== '' &&
      surfaceTypeChoice !== '' &&
      hostClinicChoice !== '' &&
      showEntriesChoice !== '' &&
      directorName !== '' &&
      contactName !== '' &&
      onlinePayChoice !== '' &&
      membershipChoice !== null &&
      teamListingChoice !== null &&
      purseAmountChoice !== '' &&
      signatureAgreementChoice !== '' &&
      scoreSheetChoice !== '' &&
      pdfValue !== '' &&
      description !== '' && sub_title!=='' &&
      court_id !== null &&
      court_id !== ''
      // &&
      // donation1 !== null &&
      // donation2 !== null &&
      // donation3 !== null
      // &&
      // donationText !== ''
    ) {
      setSaveDisabled(false);
      console.log(
        '^^^^^^^^^^^^^^^^^^',
        courtName,
        streetAddress,
        country,
        zip,
        noOfCourts
      );
    }
  }, [
    courtName,
    streetAddress,
    country,
    zip,
    noOfCourts,
    startDate,
    endDate,
    earlyBirdDate,
    startTime,
    // endTime,
    registrationCapChoice,
    // teamSizeChoice,
    closesOnDate,
    endsAtTime,
    poolsChoice,
    seasonChoice,
    placementPointsChoice,
    seedingMethodChoice,
    surfaceTypeChoice,
    hostClinicChoice,
    showEntriesChoice,
    directorName,
    contactName,
    onlinePayChoice,
    membershipChoice,
    teamListingChoice,
    purseAmountChoice,
    signatureAgreementChoice,
    scoreSheetChoice,
    pdfValue,
    description,
    sub_title,
    court_id,
    // donation1,
    // donation2,
    // donation3,
    // donationText,
  ]);

  let saveBtnRef = useRef();

  let event_name_error = useRef();
  let event_address_error = useRef();
  let event_date_error = useRef();
  let event_time_error = useRef();
  let event_reg_error = useRef();
  let event_teamsize_error = useRef();
  let event_details_error = useRef();
  let event_contact_error = useRef();
  let event_finance_error = useRef();
  let event_documents_error = useRef();
  let event_description_error = useRef();
  let event_subtitle_error = useRef();

  // useEffect(() => {
  //   saveBtnRef.current.removeAttribute("disabled");
  // }, [])

  const onSave = async () => {
    console.log('save clicked more than once?', saveClicked);
    // let tp1=teamsInPlayoff1;
    // let tp2=teamsInPlayoff2===null?0:teamsInPlayoff2;
    // let tp3=teamsInPlayoff3===null?0:teamsInPlayoff3;
    // let tp4=teamsInPlayoff4===null?0:teamsInPlayoff4;
    let tp1 =
      teamsInPlayoff1 === null || teamsInPlayoff1 === '' ? 0 : teamsInPlayoff1;
    let tp2 =
      teamsInPlayoff2 === null || teamsInPlayoff2 === '' ? 0 : teamsInPlayoff2;
    let tp3 =
      teamsInPlayoff3 === null || teamsInPlayoff3 === '' ? 0 : teamsInPlayoff3;
    let tp4 =
      teamsInPlayoff4 === null || teamsInPlayoff4 === '' ? 0 : teamsInPlayoff4;

    if (eventName === '') {
      setNameError('Please enter an event name');
      event_name_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (file.raw !== '' && file.raw.size > 2048000) {
      setNameError('Add Image less than 2048KB');
      event_name_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (imageState.raw !== '' && imageState.raw.size > 2048000) {
      setImageError('Add Image less than 2048KB');
      // event_name_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (
      courtName === '' ||
      streetAddress === '' ||
      country === '' ||
      zip === '' ||
      //  ||
      // noOfCourts === ''
      court_id === null ||
      court_id === ''
    ) {
      setAddressError('Please fill all address fields correctly');
      event_address_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (startDate === '' || endDate === '' || earlyBirdDate === '') {
      setDateError('Please add all parameters');
      event_date_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (startTime === '') {
      setTimeError('Please select start time');
      event_time_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (
      registrationCapChoice === '' ||
      // teamSizeChoice === '' ||
      closesOnDate === '' ||
      endsAtTime === '' ||
      numberOfSets === '' ||
      matchTime === '' ||
      maxPointsPerSet === '' ||
      noOfPlayoffs === ''
    ) {
      setRegistrationError('Please fill all registration inputs');
      event_reg_error.current.scrollIntoView({ behavior: 'smooth' });
    }
    // else if (
    //   teamSizeChoice !==
    //   parseInt(tp1) + parseInt(tp2) + parseInt(tp3) + parseInt(tp4)
    // ) {
    //   setTeamSizeError(
    //     'Team size should be equal to sum of all playoff team sizes'
    //   );
    //   event_reg_error.current.scrollIntoView({ behavior: 'smooth' });
    // }
    else if (
      poolsChoice === '' ||
      seasonChoice === '' ||
      placementPointsChoice === '' ||
      seedingMethodChoice === '' ||
      surfaceTypeChoice === '' ||
      hostClinicChoice === '' ||
      showEntriesChoice === '' ||
      teamListingChoice === null
    ) {
      setDetailsError('Please fill all details inputs');
      event_details_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (directorName === '' || contactName === '') {
      setContactError('Please fill all contact inputs');
      event_contact_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (
      onlinePayChoice === '' ||
      membershipChoice === null ||
      purseAmountChoice === ''
      // ||
      // donation1 === null ||
      // donation2 === null ||
      // donation3 === null
      // ||
      // donationText === ''
    ) {
      setFinanceError('Please fill all finance inputs');
      event_finance_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (
      signatureAgreementChoice === '' ||
      scoreSheetChoice === '' ||
      pdfValue === ''
    ) {
      setDocumentsError('Please fill all documents inputs');
      event_documents_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (pdfValue.raw !== '' && pdfValue.raw.size > 2048000) {
      setDocumentsError('PDF instructions size should not exceed 2048 KB size');
      event_documents_error.current.scrollIntoView({ behavior: 'smooth' });
    } else if (description === '') {
      setDescriptionError('Please fill description input');
      event_description_error.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(sub_title ===''){
      setSubTileError('Please fill subtitle input')
      event_subtitle_error.current.scrollIntoView({behavior: 'smooth'});
    }
  

    // if(saveClicked===true){
    //   return;
    // }

    // if(saveBtnRef.current){
    //   saveBtnRef.current.setAttribute("disabled", "disabled");
    // }

    console.log('Court id on save', court_id);
    if (
      listAddress !== null &&
      eventName !== '' &&
      startDate !== '' &&
      endDate !== '' &&
      earlyBirdDate !== '' &&
      startTime !== '' &&
      // endTime !== '' &&
      registrationCapChoice !== '' &&
      // teamSizeChoice !== '' &&
      closesOnDate !== '' &&
      endsAtTime !== '' &&
      poolsChoice !== '' &&
      seasonChoice !== '' &&
      placementPointsChoice !== '' &&
      seedingMethodChoice !== '' &&
      surfaceTypeChoice !== '' &&
      hostClinicChoice !== '' &&
      showEntriesChoice !== '' &&
      // directorChoice !== '' &&
      contactName !== '' &&
      onlinePayChoice !== '' &&
      membershipChoice !== null &&
      teamListingChoice !== null &&
      purseAmountChoice !== '' &&
      signatureAgreementChoice !== '' &&
      scoreSheetChoice !== '' &&
      description !== '' && sub_title!=='' &&
      imageState !== '' &&
      (imageState.raw !== ''
        ? imageState.raw.size < 2048000
        : imageState.raw === '') &&
      pdfValue !== '' &&
      (pdfValue.raw !== ''
        ? pdfValue.raw.size < 2048000
        : pdfValue.raw === '') &&
      file !== null &&
      (file.raw !== '' ? file.raw.size < 2048000 : file.raw === '') &&
      saveDisabled === false &&
      // teamSizeError === null
      // teamSizeChoice ===
      //   parseInt(tp1) + parseInt(tp2) + parseInt(tp3) + parseInt(tp4) &&
      // noOfCourts > 0 &&
      // noOfCourts < 100
      //  &&
      saveClicked === false &&
      court_id !== null &&
      court_id !== ''
      // &&
      // donation1 !== null &&
      // donation2 !== null &&
      // donation3 !== null
      // &&
      // donationText !== ''
      // saveLoading === false
      // saveClicked===false
    ) {
      console.log({
        listAddress,
        eventName,
        startDate,
        endDate,
        earlyBirdDate,
        startTime,
        // endTime,
        registrationCapChoice,
        // teamSizeChoice,
        closesOnDate,
        endsAtTime,
        poolsChoice,
        seasonChoice,
        placementPointsChoice,
        seedingMethodChoice,
        surfaceTypeChoice,
        hostClinicChoice,
        showEntriesChoice,
        // directorChoice,
        contactName,
        onlinePayChoice,
        membershipChoice,
        teamListingChoice,
        purseAmountChoice,
        signatureAgreementChoice,
        scoreSheetChoice,
        description,
        sub_title,
        imageState,
        pdfValue,
        file,
        numberOfSets,
        matchTime,
        maxPointsPerSet,
        noOfPlayoffs,
        teamsInPlayoff1,
        teamsInPlayoff2,
        teamsInPlayoff3,
        teamsInPlayoff4,

        template_id,
        age_bracket,
        div_name,
        early_bird,
        early_bird_date,
        early_bird_amount,
        late_amount,
        registration_amount,
        age_range,
        gender,
        skill_level,
        discount_amount,
        discount_text,
        discount_applied,
        discount_voucher,
        format,
        team_size,
        save_as_template,
        donation1,
        donation2,
        donation3,
        donationText,
      });

      // setSaveDisabled(true);
      // return(<div>
      //   LOADING !
      // </div>)

      setSaveLoading(true);
      setSaveClicked(true);
      // window.scrollTo(0,document.body.scrollHeight)

      saveData({
        listAddress,
        eventName,
        startDate,
        endDate,
        earlyBirdDate,
        startTime,
        // endTime,
        registrationCapChoice,
        // teamSizeChoice,
        closesOnDate,
        endsAtTime,
        poolsChoice,
        seasonChoice,
        placementPointsChoice,
        seedingMethodChoice,
        surfaceTypeChoice,
        hostClinicChoice,
        showEntriesChoice,
        // directorChoice,
        contactName,
        onlinePayChoice,
        membershipChoice,
        teamListingChoice,
        purseAmountChoice,
        signatureAgreementChoice,
        scoreSheetChoice,
        description,
        sub_title,
        imageState,
        pdfValue,
        file,
        permanentFlag,

        template_id,
        age_bracket,
        div_name,
        early_bird,
        early_bird_date,
        early_bird_amount,
        late_amount,
        registration_amount,
        age_range,
        gender,
        skill_level,
        discount_amount: discount_amount === '' ? '0' : discount_amount,
        discount_text,
        discount_applied,
        discount_voucher,
        format,
        team_size,
        save_as_template,
        donationText,
        donation1,
        donation2,
        donation3,
      });
      console.log('Court id on save', court_id);
      const data = {
        name: eventName,
        court_id: court_id,
        start_date: moment(startDate).format('YYYY-MM-DD'),
        end_date: moment(endDate).format('YYYY-MM-DD'),
        early_bird_date: moment(earlyBirdDate).format('YYYY-MM-DD'),
        start_time: moment(startTime).format('HH:mm:ss'),
        // end_time: moment(endTime).format('HH:mm:ss'),
        registration_cap: registrationCapChoice,
        team_size: team_size,
        closes_on: moment(closesOnDate).format('YYYY-MM-DD'),
        ends_at: moment(endsAtTime).format('HH:mm:ss'),
        pool_id: pool_id,
        season_id: season_id,
        seeding_method_id: seeding_method_id,
        host_clinic: hostClinicChoice,
        show_entries: showEntriesChoice,
        director_id: director_id,
        main_contact: main_contact_id,
        online_pay: onlinePayChoice,
        membership: membershipChoice,
        team_listing: teamListingChoice,
        purse_amount: purseAmountNumber,
        purse_percent: purseAmountPercentNumber,
        signature: signatureAgreementChoice,
        scoresheet_id: scoresheet_id,
        org_id: 758,
        description: description,
        sub_title:sub_title,
        pool_template_id: pool_id,
        point_template_id: points_id,
        surface_type: surfaceId,
        sets: numberOfSets,
        match_time: matchTime,
        max_point_per_set: maxPointsPerSet,
        no_of_playoff: noOfPlayoffs,
        playoff_team1: teamsInPlayoff1,
        playoff_team2: teamsInPlayoff2,
        playoff_team3: teamsInPlayoff3,
        playoff_team4: teamsInPlayoff4,

        template_id: template_id,
        age_bracket: age_bracket,
        div_name: div_name,

        early_bird_amount: early_bird_amount,
        late_amount: late_amount,
        registration_amount: registration_amount,
        age_range: age_range,
        gender: gender,
        skill_level: skill_level,
        //discount_amount: discount_amount === '' ? '0' : discount_amount,
        //discount_text: discount_text,
        discount_applied: discount_applied,
        discount_voucher: discount_voucher,
        format: format,
        // team_size: teamSizeChoice,
        // team_size:5,
        save_as_template: save_as_template,
        // permanent_flag:permanentFlag,
        //donation_amounts: `${donation1},${donation2},${donation3}`,
        //donation_text: donationText === '' ? null : donationText,
        early_bird: early_bird,
        // early_bird_date:early_bird_date,
        // early_bird_date: moment(early_bird_date).format('YYYY-MM-DD'),
        template: templateDataArray,
        division: divisionDataArray,
      };
      console.log('data sent to backend', data);

      // if (early_bird !== 'no') {
      //   data['early_bird_date'] = moment(early_bird_date).format('YYYY-MM-DD');
      // }
      // if (early_bird === 'no') {
      //   data['early_bird_date'] = '';
      // }

      if (donationText !== '') {
        data['donation_text'] = donationText;
      }

      if (donation1 !== null || donation2 !== null || donation3 !== null) {
        data['donation_amounts'] = `${donation1},${donation2},${donation3}`;
      }

      if (discount_amount !== undefined) {
        data['discount_amount'] = discount_amount;
      }

      if (discount_text !== undefined) {
        data['discount_text'] = discount_text;
      }

      if (blue === true) {
        data['color'] = '#0a0080';
      }
      if (white === true) {
        data['color'] = '#ffffff';
      }

      if (yellow === true) {
        data['color'] = '#fdff00';
      }
      if (black === true) {
        data['color'] = '#000000';
      }

      // const data={...data,filteredAddresses};

      await createTournament(
        {
          data: JSON.stringify(data),
          tournament_pic: file.raw,
          cover_photo: imageState.raw,
          tournament_doc: pdfValue.raw,
          surface_type: surfaceTypeChoice,
        },
        props.history
      );
      console.log({
        data,
        file: file.raw,
        imageState: imageState.raw,
        pdfValue: pdfValue.raw,
        surfaceTypeChoice,
      });

      // await setSaveLoading(false);
      await setSaveClicked(false);

      // await props.history.push('/eventProfileSaved');
      // setSaveClicked(true);
    }
  };

  // save to list
  const handleCheckbox = async (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // var can = new RegExp(/(^\D{1}\d{1}\D{1}-\d{1}\D{1}\d{1}$)/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    var can2 = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    if (country === 'US') {
      if (us.test(zip.toString()) || zip === '') {
        setCourtNoError2(null);
        await setIsGoing(value);
        if (!isGoing) {
          await saveAddressFunction();
        }
      } else {
        setCourtNoError2('Enter Valid Zip');
      }
    } else if (country === 'CA') {
      if (can2.test(zip.toString()) || zip === '') {
        setCourtNoError2(null);
        await setIsGoing(value);
        if (!isGoing) {
          await saveAddressFunction();
        }
      } else {
        setCourtNoError2('Enter Valid Zip');
      }
    }
  };

  useEffect(() => {
    if (isGoing2 === true) {
      setPermanentFlag(0);
    }
    if (isGoing2 === false) {
      setPermanentFlag(1);
    }
  }, [isGoing2]);

  useEffect(() => {
    console.log(permanentFlag);
  }, [permanentFlag]);

  const handleCheckbox2 = async (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    setIsGoing2(value);
  };

  // // date and time formats
  // useEffect(() => {
  //   console.log('Start Date', moment(startDate._d).format('DD/MM/YYYY'));
  //   console.log('End Date', moment(endDate._d).format('DD/MM/YYYY'));
  //   console.log('Start Time', moment(startTime._d).format('hh:mm:ss'));
  //   console.log('End Time', moment(endTime._d).format('hh:mm:ss'));
  //   console.log('Closes on Date', moment(closesOnDate._d).format('DD/MM/YYYY'));
  //   console.log('Ends At Time', moment(endsAtTime._d).format('hh:mm:ss'));
  //   // console.log(
  //   //   moment(startDate._d).format('DD/MM/YYYY'),
  //   //   moment(endDate._d).format('DD/MM/YYYY')
  //   // );
  // }, [startDate, endDate, startTime, endTime, closesOnDate, endsAtTime]);

  const [playOffDropdown, setPlayOffDropdown] = useState(false);
  const [matchTimeDropdown, setMatchTimeDropdown] = useState(false);
  const [noSetsDropdown, setNoSetsDropdown] = useState(false);
  const [teamSizeDropdown, setTeamSizeDropdown] = useState(false);
  const [seasonDropdown, setSeasonDropdown] = useState(false);
  const [poolsDropdown, setPoolsDropdown] = useState(false);
  const [pointsDropdown, setPointsDropdown] = useState(false);
  const [seedingDropdown, setSeedingDropdown] = useState(false);
  const [surfaceDropdown, setSurfaceDropdown] = useState(false);
  const [membershipDropdown, setMembershipDropdown] = useState(false);
  const [teamListingDropdown, setTeamListingDropdown] = useState(false);
  const [hostClinicDropdown, setHostClinicDropdown] = useState(false);
  const [showEntries, setShowEntries] = useState(false);
  const [directorDropdown, setDirectorDropdown] = useState(false);
  const [mainContactDropdown, setMainContactDropdown] = useState(false);
  const [onlinePayDropdown, setOnlinePayDropdown] = useState(false);
  // const [teamSizeDropdown, setTeamSizeDropdown] = useState(false);
  const [scoreSheetDropdown, setScoreSheetDropdown] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setHamburgerOpen1(false));

  const refSeason = useRef();
  useOnClickOutside(refSeason, () => setSeasonDropdown(false));

  const refPools = useRef();
  useOnClickOutside(refPools, () => setPoolsDropdown(false));

  const refPoints = useRef();
  useOnClickOutside(refPoints, () => setPointsDropdown(false));

  const refSeeding = useRef();
  useOnClickOutside(refSeeding, () => setSeedingDropdown(false));

  const refSurface = useRef();
  useOnClickOutside(refSurface, () => setSurfaceDropdown(false));

  const refMembership = useRef();
  useOnClickOutside(refMembership, () => setMembershipDropdown(false));

  const refTeamListing = useRef();
  useOnClickOutside(refTeamListing, () => setTeamListingDropdown(false));

  const refHostClinic = useRef();
  useOnClickOutside(refHostClinic, () => setHostClinicDropdown(false));

  const refShowEntries = useRef();
  useOnClickOutside(refShowEntries, () => setShowEntries(false));

  const refDirector = useRef();
  useOnClickOutside(refDirector, () => setDirectorDropdown(false));

  const refMainContact = useRef();
  useOnClickOutside(refMainContact, () => setMainContactDropdown(false));

  const refOnlinePay = useRef();
  useOnClickOutside(refOnlinePay, () => setOnlinePayDropdown(false));

  // const refTeamSize = useRef();
  // useOnClickOutside(refTeamSize, () => setTeamSizeDropdown(false));

  const refScoreSheet = useRef();
  useOnClickOutside(refScoreSheet, () => setScoreSheetDropdown(false));

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
    console.log('eventId', eventId);
  }, [eventId]);

  function disabledStartDate(current) {
    return current < moment().startOf('day');
  }

  function disabledDate(current) {
    const start = moment('2021-01-01', 'YYYY-MM-DD');
    return (
      current < startDate ||
      current === startDate ||
      current < moment().startOf('day')
    );
  }

  function disabledDateRegistration(current) {
    // const start = moment('2021-01-01','YYYY-MM-DD');
    // return  current> moment().endOf(startDate) ;
    // console.log("startDate",startDate)
    return current > startDate || current < moment().startOf('day');
  }

  function disabledHours() {
    // console.log(parseInt(moment(startTime).format('hh')))
    var time = moment(startTime).format('hh:mm: a');
    var period = time.slice(-2);
    // console.log(time, period)

    var hours = [];
    if (period === 'am') {
      for (var i = 0; i <= parseInt(moment(startTime).format('hh')); i++) {
        hours.push(i);
      }
    }
    if (period === 'pm') {
      hours.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
      for (var i = 0; i <= parseInt(moment(startTime).format('hh')); i++) {
        hours.push(i + 12);
      }
    }
    // hours=[1,2,3,4,5,13,14,15,22]
    //   for(var i =0; i < parseInt(moment(startTime)); i++){
    //     hours.push(i);
    // }
    // console.log("Hours",hours);
    // hours.splice(20, 4);
    // console.log("Hours",hours);
    return hours;
  }

  // modal states
  const [open, setOpen] = useState(false);
  const [flag , setFlag] = useState(false);
  useEffect(()=>{
    console.log("flag called")
  },[flag])

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const twoDigitVal = (e, setterFn) => {
    var val = e.target.value.replace('-', '');
    var valNum = val === '' ? 0 : parseInt(e.target.value.replace('-', ''));
    setterFn(valNum);
  };
  const [ids, setIDs] = useState(   {
    "justifyLeft":false,
    'justifyCenter':false,
    "bold" :false,
    "italic":false,
    "underline":false,
    "insertOrderedList":false,
    "createlink" :false,
    "insertUnorderedList":false,
  });
  useEffect(()=>{
    console.log(ids)
  },[ids['justifyLeft'],
  ids['justifyCenter'],
  ids['italic'],
  ids['bold'],
  ids['underline'],
  ids['insertOrderedList']],
  ids['createlink'],
  ids['insertUnorderedList'])


  const editorFunction=(e)=>{
    console.log(e)
    console.log( e.target.dataset['command'])
    
   var value = ids;

   let cmd = e.target.dataset['command'];   
   console.log(cmd)
 
   ids[cmd]?value[cmd]=false:value[cmd]=true;
  setIDs(value);

		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			document.execCommand(cmd, false, url);
		} 
    else {
			document.execCommand(cmd, false, null);
		}
  }
  


  return (
    <>
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              // href="#/"
                tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      <div className="new-event-profile container p-0">
        <div className="row mx-0" style={{ marginTop: 142 }}>
          <div className="col-6 m-auto text-center p-0">
            <div className="row main-width">
              <div className="col-12">
                {/* image and event name */}
                <div className="row">
                  <div className="col-4 p-0 text-left" ref={event_name_error}>
                    {nameError !== null && (
                      <div className="text-left error-message-profile">
                        {nameError}
                      </div>
                    )}
                    <div
                      onClick={() => console.log(file)}
                      style={{
                        // border: '2px solid black',
                        height: 100,
                        width: 100,
                        borderRadius: '50%',
                        backgroundColor: '#d8d8d8',
                        overflow: 'visible',
                        display: 'inline-block',
                        marginLeft: 0,
                      }}
                      // className="d-inline"
                    >
                      {file.preview !== '' ? (
                        <img
                          src={file.preview}
                          alt=""
                          className="m-auto d-block p-0"
                          style={{
                            // objectFit: 'contain',
                            objectFit: 'cover',
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                          }}
                        />
                      ) : (
                        <img
                          src={iconAvatarLeague}
                          alt=""
                          className="m-auto d-block p-0"
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      )}
                    </div>
                    {/* <img
                      src={file.preview}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        objectFit: 'contain',
                      }}
                    /> */}
                  </div>
                  <div
                    className="col-8 m-auto p-0"
                    style={{ borderBottom: '1px solid #979797' }}
                  >
                    <MainInput
                      textValue={(e) => setEventName(e)}
                      nameError={nameError}
                    />
                    {/* {nameError !== null && (
                    <div className="text-left error-message-profile">
                      {nameError}
                    </div>
                  )} */}
                  </div>
                </div>
                <div className="pdf-upload add-photo text-left">
                  <label htmlFor="file-input">ADD PHOTO</label>

                  <input
                    id="file-input"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleChange}
                  />
                </div>
              </div>
             
              {/* Subtitle*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_subtitle_error}
                >
                 Event Subtitle
                </div>
                {SubTitleError !== null && (
                  <div className="text-left error-message-profile">
                    {SubTitleError}
                  </div>
                )}
                <div className="container">
                  <div className="row shadow-box mt-0" style={{ height: 50 }}>
                    <div
                      className="col-12 pl-2 pr-1 pb-1"
                      style={{ height: 50 }}
                    >
                      {/* <TextAreaInput textValue={(e) => setDescription(e)} /> */}
                     <SubTiltleInput textValue = {e =>setSubtitle(e)}/> 
                    </div>
                  </div>
                </div>
              </div>
             
             
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="container">
                  <div className="row">
                    <div
                      className="d-flex flex-column"
                      ref={event_address_error}
                    >
                      {addressError !== null && (
                        <div className="text-left error-message-profile">
                          {addressError}
                        </div>
                      )}
                      {courtNoError !== null && (
                        <div
                          className="text-left error-message-profile"
                          style={{ width: 250 }}
                        >
                          {courtNoError}
                        </div>
                      )}
                      {courtNoError2 !== null && (
                        <div
                          className="text-left error-message-profile"
                          style={{ width: 250 }}
                        >
                          {courtNoError2}
                        </div>
                      )}
                      {addressIdError !== null && addressId === null && (
                        <div
                          className="text-left error-message-profile"
                          style={{ width: 230 }}
                        >
                          {addressIdError}
                        </div>
                      )}
                    </div>
                    <div className="col-10 text-left address-title m-auto p-0">
                      Address
                    </div>
                    <div className="col-2 text-right p-0">
                      {/* Hamburger */}
                      {/* <Dropdown getAllCourts={getAllCourts} addressFilter={addressFilter} addressFilterClear={addressFilterClear}/> */}
                      <a
                        id="score-hamburger"
                        className={
                          hamburgerOpen1
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div ref={ref}>
                          <img
                            src={iconHamburger}
                            alt=""
                            onClick={getAllCourts}
                          />
                          {hamburgerOpen1 && (
                            <span
                              className="tooltiptext2 dropdown_animation"
                              style={{
                                width: 432,
                                height: 280,
                                overflowY: 'auto',
                                top: 25,
                              }}
                            >
                              <div
                                className=" container row p-0 m-auto"
                                style={{
                                  border: '1px solid #d8d8d8',
                                  borderRadius: 20,
                                  height: 32,
                                  width: 416,
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="col-1 p-0 m-auto">
                                  <img
                                    src={searchIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-11">
                                  <input
                                    placeholder="Search by zipcode"
                                    type="text"
                                    ref={addressInputValue}
                                    style={{ height: 28 }}
                                    className=" form-control  p-0 dropdown-searchbar"
                                    onChange={async (e) => {
                                      if (
                                        addressInputValue.current.value !== ''
                                      ) {
                                        setLoading();
                                      
                                         await addressFilter(e.target.value);
                                     
                                        
                                      } else {
                                        addressFilterClear();
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                              <hr
                                style={{
                                  height: 1,
                                  backgroundColor: '#d8d8d8',
                                  marginTop: 7,
                                }}
                              />
                              {eventAddresses.length === 0 ? (
                                <div
                                  style={{ marginTop: 55 }}
                                  className="d-flex justify-content-center flex-column align-items-center"
                                >
                                  {/* <img src={ballIcon} alt="" />
                                <p
                                  className="no-addresses-p"
                                  style={{ color: '#4a4a4a', marginTop: 24 }}
                                >
                                  Sorry, no addresses were found
                                </p> */}
                                  <LoadingSpinner />
                                </div>
                              ) : (
                                showAddresses()
                              )}
                            </span>
                          )}
                          <div className="text-center">Address List</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control address-full"
                  placeholder="Court name"
                  value={courtName}
                  onChange={(e) => setCourtName(e.target.value)}
                  readOnly={showSaveToList === false ? true : false}
                />
                <input
                  type="text"
                  className="form-control address-full"
                  placeholder="Street Address"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  readOnly={showSaveToList === false ? true : false}
                />
                {/* <input
                  type="text"
                  className="form-control address-full"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                /> */}
                <div className="container">
                  <div className="row">
                    <div className="col-2 p-0 ">
                      {/* <input
                        type="text"
                        placeholder="City"
                        className="form-control address-full"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      /> */}
                      <label className="Country_label">Country</label>
                    </div>
                    <div className="col-3 pl-1 pr-1">
                      {/* <input
                        type="text"
                        className="form-control address-full"
                        placeholder="CA"
                        value={stateCode}
                        onChange={(e) => setStateCode(e.target.value)}
                      /> */}
                      <div
                        className="form-control address-full d-flex align-items-center justify-content-between"
                        readOnly={showSaveToList === false ? true : false}
                      >
                        {country}
                        <DropdownModals>
                          <li onClick={() => { setCountry('US');  setStateCode('USA')} }>USA</li>
                          <li onClick={() => {setStateCode('CA'); setCountry('CA')}}>CANADA</li>
                        </DropdownModals>
                      </div>
                    </div>
                    <div className="col-4 p-0 pr-1">
                      <input
                        type="text"
                        placeholder="Zip Code"
                        className="form-control address-full"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        readOnly={showSaveToList === false ? true : false}
                      />
                    </div>
                    <div className="col-3 p-0">
                      <input
                        type="text"
                        placeholder="No. of courts"
                        className="form-control address-full webkit_spinner_none"
                        value={noOfCourts}
                        min="1"
                        onChange={(e) => setNoOfCourts(e.target.value)}
                        max="9999"
                        maxLength="4"
                        readOnly={showSaveToList === false ? true : false}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  {showSaveToList && (
                    <>
                      <div className="text-left mt-2">
                        <label
                          className="DAS1checkbox DMensLabel m-0"
                          htmlFor="AgeRangeInput2"
                          // style={{marginTop:20}}
                        >
                          <input
                            className="form-control"
                            id="AgeRangeInput1"
                            name="onGoing2"
                            type="checkbox"
                            value="open"
                            checked={isGoing2}
                            onChange={handleCheckbox2} // Prop: Puts data into state
                            // checked={this.props.selectedAgeRange[0].checked}
                          />
                          <span className="DAS1checkmark"></span>
                          <span
                            className="DAS1label "
                            style={{ color: '#9b9b9b', fontSize: 10 }}
                          >
                            Temporary Courts
                          </span>
                        </label>
                      </div>

                      <div className="text-left mt-2" style={{ width: 90 }}>
                        <label
                          className="DAS1checkbox DMensLabel m-0"
                          htmlFor="AgeRangeInput"
                        >
                          <input
                            className="form-control m-0"
                            id="AgeRangeInput22"
                            name="isGoing"
                            type="checkbox"
                            value="open"
                            checked={isGoing}
                            onChange={handleCheckbox}
                            // onClick={notify}
                            disabled={
                              noOfCourts < 9999 ||
                              noOfCourts > 1 ||
                              noOfCourts === ''
                                ? false
                                : true
                            }
                          />
                          <span className="DAS1checkmark"></span>
                          <span className="DAS1label ">Save to List</span>
                        </label>
                      </div>
                    </>
                  )}
                </div>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>

              {/* Date */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title" ref={event_date_error}>
                  Date
                </div>
                {dateError !== null && (
                  <div className="text-left error-message-profile">
                    {dateError}
                  </div>
                )}
                {/* start */}
                <div className="container">
                  <div
                    className={
                      dateError
                        ? 'red_highlight_event row shadow-box'
                        : 'row shadow-box'
                    }
                  >
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Start
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{
                          width: 110,
                          color: '#747474',
                          cursor: 'pointer',
                        }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 input-styling date_picker"
                        allowClear={false}
                        value={startDate}
                        onChange={(e) => {
                          setStartDate(e);
                          setEndDate(e);
                          console.log(e);
                        }}
                        placeholder=""
                        // popupStyle={{height:467 , width:343}}
                        popupStyle={{}}
                        disabledDate={disabledStartDate}
                      />
                    </div>
                  </div>
                </div>
                {/* End */}
                <div className="container">
                  <div
                    className={
                      dateError
                        ? 'red_highlight_event row shadow-box'
                        : 'row shadow-box'
                    }
                  >
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      End
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{ width: 110, cursor: 'pointer' }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        value={endDate}
                        onChange={(e) => setEndDate(e)}
                        placeholder=""
                        disabledDate={disabledDate}
                      />
                    </div>
                  </div>
                </div>
                {/* Closes On */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Closes On
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{ width: 110, cursor: 'pointer' }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        value={closesOnDate}
                        onChange={(e) => {
                          setClosesOnDate(e);
                          setEarlyBirdDate(moment(e).subtract(5, 'd'));
                          earlyBirdDateStateFun(moment(e).subtract(5, 'd'));
                        }}
                        placeholder=""
                        disabledDate={disabledDateRegistration}
                      />
                    </div>
                  </div>
                </div>

                {/* Early Bird Date */}
                <div className="container">
                  <div
                    className={
                      dateError
                        ? 'red_highlight_event row shadow-box'
                        : 'row shadow-box'
                    }
                  >
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() =>
                        console.log(
                          moment(closesOnDate)
                            .subtract(5, 'd')
                            .format('YYYY-MM-DD')
                        )
                      }
                    >
                      Early Bird Date
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{
                          width: 110,
                          color: '#747474',
                          cursor: 'pointer',
                        }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 input-styling date_picker"
                        allowClear={false}
                        value={earlyBirdDate}
                        onChange={(e) => {
                          setEarlyBirdDate(e);
                          earlyBirdDateStateFun(e);
                          console.log(e);
                        }}
                        placeholder=""
                        // popupStyle={{height:467 , width:343}}
                        popupStyle={{}}
                        // disabledDate={disabledStartDate}
                      />
                    </div>
                  </div>
                </div>
              
              </div>

              {/* Time */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title" ref={event_time_error}>
                  Time
                </div>
                {timeError !== null && (
                  <div className="text-left error-message-profile">
                    {timeError}
                  </div>
                )}
                {/* start */}
                <div className="container">
                  <div
                    className={
                      timeError
                        ? 'red_highlight_event row shadow-box'
                        : 'row shadow-box'
                    }
                  >
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={clock} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Start
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <TimePicker
                        // use12Hours
                        format="h:mm A"
                        style={{ width: 90, cursor: 'pointer' }}
                        bordered={false}
                        suffixIcon={<img src={downArrow} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        value={startTime}
                        onChange={(e) => {
                          setStartTime(e);
                          console.log(moment(e).format('HH:mm:ss'));
                        }}
                        placeholder=""
                        popupStyle={{ textAlign: 'end' }}
                      />
                    </div>
                  </div>
                </div>
                {/* End */}
                {/* <div className="container">
                  <div
                    className={
                      timeError
                        ? 'red_highlight_event row shadow-box'
                        : 'row shadow-box'
                    }
                  >
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={clock} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      End
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        style={{ width: 90, cursor: 'pointer' }}
                        bordered={false}
                        suffixIcon={<img src={downArrow} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        value={endTime}
                        onChange={(e) => setEndTime(e)}
                        placeholder=""
                        // disabledTime={disabledDateTime}
                        disabledHours={disabledHours}
                        // disabledMinutes={getDisabledMinutes()}
                      />
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Division */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="d-flex flex-row py-2 justify-content-between pr-1">
                  <span onClick={() => console.log(divisionDataArray)}>
                    Divisions & Templates
                  </span>
                  <MasterForm eventID={parseInt(props.match.params.id)} />
                </div>
                {/* templates */}
                <div className="container">
                  {templateDataArray.length !== 0 &&
                    templateDataArray.map((temData, temId) => (
                      <div className="row shadow-box mt-1" key={temId}>
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={trophy} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Template
                        </div>
                        <div className="col-7 p-0 text-right box-shadow-text my-auto">
                          <span>{temData.selectedTemplateName}</span>
                          <img
                            src={clearIcon}
                            onClick={() =>
                              removeFromTemplateData(temData.template_id)
                            }
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid my-auto mr-1 ml-2 pr-1"
                          />
                        </div>
                      </div>
                    ))}
                </div>

                {/* divisions */}
                <div className="container">
                  {divisionDataArray.length !== 0 &&
                    divisionDataArray.map((divData, divId) => (
                      <div className="row shadow-box mt-1" key={divId}>
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={trophy} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Division
                        </div>
                        <div className="col-7 p-0 text-right box-shadow-text my-auto">
                          <span>{divData.age_bracket}</span>
                          <img
                            src={clearIcon}
                            alt=""
                            className="img-fluid my-auto mr-1 ml-2 pr-1"
                            style={{ visibility: 'hidden' }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Registration */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title" ref={event_reg_error}>
                  Registration
                </div>
                {registrationError !== null && (
                  <div className="text-left error-message-profile">
                    {registrationError}
                  </div>
                )}
                {teamSizeError !== null && (
                  <div
                    className="text-left error-message-profile"
                    style={{ width: 400 }}
                  >
                    {teamSizeError}
                  </div>
                )}
                {/* Registration Cap */}
                <div style={{all:"none"}} >
                  <ShadowContainerDropdown
                  srcImg={addNewIcon}
                  text="Registration Cap"
                  stateData={registrationCapChoice}
                  mainClasses="row shadow-box mt-0"
                >
                  <SelectOptions
                    yesChoice={() => setRegistrationCapChoice('yes')}
                    noChoice={() => setRegistrationCapChoice('no')}
                  />
                </ShadowContainerDropdown>
                </div>



                {/* Ends At */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={durationIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Ends At
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        style={{ width: 90, cursor: 'pointer' }}
                        bordered={false}
                        suffixIcon={<img src={downArrow} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        value={endsAtTime}
                        // value={moment(endsAtTime).format('hh:mm:ss')}
                        onChange={(e) => setEndsAtTime(e)}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                {/* Team Size */}
                {/* <ShadowContainerDropdown
                  srcImg={playersIcon}
                  text="Team Size"
                  stateData={teamSizeChoice}
                  mainClasses="row shadow-box"
                >
                  <a
                    id="score-hamburger"
                    ref={refPools}
                    onClick={() => setTeamSizeDropdown(!teamSizeDropdown)}
                    className={
                      poolsDropdown
                        ? 'tri_top_event_visible'
                        : 'tri_top_event_hidden'
                    }
                  >
                    <div>
                      <img src={downArrow} alt="" />
                      {teamSizeDropdown && (
                        <span
                          style={{
                            marginTop: 7,
                            right: -10,
                            maxHeight: 280,
                            overflowY: 'auto',
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {teamSizeMap !== null &&
                              teamSizeMap.map((data) => (
                                <li
                                  onClick={() => setTeamSizeChoice(data)}
                                  key={data}
                                >
                                  {data}
                                </li>
                              ))}
                          </ul>
                        </span>
                      )}
                    </div>
                  </a>
                </ShadowContainerDropdown> */}
                {/* No of sets */}
                <div style={{all:"none"}}  onClick={() => setNoSetsDropdown(!noSetsDropdown)}>

                      <ShadowContainerDropdown
                        srcImg={playTypeIcon}
                        text="Number of sets"
                        stateData={numberOfSets}
                        mainClasses="row shadow-box"
                      >
                        <a
                          id="score-hamburger"
                          ref={refPools}
                          onClick={() => setNoSetsDropdown(!noSetsDropdown)}
                          className={
                            poolsDropdown
                              ? 'tri_top_event_visible'
                              : 'tri_top_event_hidden'
                          }
                        >
                          <div>
                            <img src={downArrow} alt="" />
                            {noSetsDropdown && (
                              <span
                                style={{
                                  marginTop: 7,
                                  right: -10,
                                  maxHeight: 280,
                                  overflowY: 'auto',
                                }}
                                className="dropdown_animation"
                              >
                                <ul>
                                  <li onClick={() => setNumberOfSets(1)}>1</li>
                                  <li onClick={() => setNumberOfSets(2)}>2</li>
                                  <li onClick={() => setNumberOfSets(3)}>3</li>
                                  <li onClick={() => setNumberOfSets(4)}>4</li>
                                </ul>
                              </span>
                            )}
                          </div>
                        </a>
                      </ShadowContainerDropdown>
                  </div>

                {/* Match time */}
                <div style={{all:"none"}}  onClick={() => setMatchTimeDropdown(!matchTimeDropdown)}>
                <ShadowContainerDropdown
                  srcImg={durationIcon}
                  text="Match Time"
                  stateData={matchTime}
                  mainClasses="row shadow-box"
                 
                >
              
                  <a
                    id="score-hamburger"
                    ref={refPools}
                    onClick={() => setMatchTimeDropdown(!matchTimeDropdown)}
                    className={
                      poolsDropdown
                        ? 'tri_top_event_visible'
                        : 'tri_top_event_hidden'
                    }
                  >
                    <div>
                      <img src={downArrow} alt="" />
                      {matchTimeDropdown && (
                        <span
                          style={{
                            marginTop: 7,
                            right: -10,
                            maxHeight: 280,
                            overflowY: 'auto',
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            <li onClick={() => setMatchTime(50)}>50 minutes</li>
                            <li onClick={() => setMatchTime(60)}>60 minutes</li>
                            <li onClick={() => setMatchTime(70)}>70 minutes</li>
                            <li onClick={() => setMatchTime(80)}>80 minutes</li>
                          </ul>
                        </span>
                      )}
                    </div>
                  </a>
                  {/* <DropdownModals>
                    <li onClick={() => setMatchTime(50)}>50 minutes</li>
                    <li onClick={() => setMatchTime(60)}>60 minutes</li>
                    <li onClick={() => setMatchTime(70)}>70 minutes</li>
                    <li onClick={() => setMatchTime(80)}>80 minutes</li>
                  </DropdownModals> */}
                </ShadowContainerDropdown>
                </div>

                {/* Max points per set */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={pointsIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Max points per set
                    </div>
                    <div
                      className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-1"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <input
                        // type="number"
                        type="text"
                        maxLength="2"
                        className="form-control p-0 webkit_spinner_none"
                        value={maxPointsPerSet}
                        min="1"
                        style={{ direction: 'rtl', height: 30, fontSize: 14 }}
                        // onChange={(e) => setMaxPointsPerSet(e.target.value)}
                        onChange={(e) => twoDigitVal(e, setMaxPointsPerSet)}
                      />
                      <img
                        src={clearIcon}
                        onClick={() => setMaxPointsPerSet(0)}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        className="img-fluid my-auto mr-1 ml-2"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Number of playoffs */}
                  <div style={{all:"none"}}  onClick={() => setPlayOffDropdown(!playOffDropdown)}>

                      <ShadowContainerDropdown
                        srcImg={playersIcon}
                        text="Number of playoffs"
                        stateData={noOfPlayoffs}
                        mainClasses="row shadow-box"
                      >
                        <a
                          id="score-hamburger"
                          ref={refPools}
                          onClick={() => setPlayOffDropdown(!playOffDropdown)}
                          className={
                            poolsDropdown
                              ? 'tri_top_event_visible'
                              : 'tri_top_event_hidden'
                          }
                        >
                          <div>
                            <img src={downArrow} alt="" />
                            {playOffDropdown && (
                              <span
                                style={{
                                  marginTop: 7,
                                  right: -10,
                                  maxHeight: 280,
                                  overflowY: 'auto',
                                }}
                                className="dropdown_animation"
                              >
                                <ul>
                                  <li onClick={() => setNoOfPlayoffs(1)}>1</li>
                                  <li onClick={() => setNoOfPlayoffs(2)}>2</li>
                                  <li onClick={() => setNoOfPlayoffs(3)}>3</li>
                                  <li onClick={() => setNoOfPlayoffs(4)}>4</li>
                                </ul>
                              </span>
                            )}
                          </div>
                        </a>
                
                  </ShadowContainerDropdown>
                  </div>
                
                {/* Teams in each playoff */}
                {/* {noOfPlayoffs !== '' && [...Array(noOfPlayoffs)].map((playoff,i)=>
                  <div className="container" key={i}>
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={playersIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Teams in playoff {i+1}
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      <input
                        type="number"
                        // placeholder="No. of courts"
                        className="form-control p-0 webkit_spinner_none"
                        value={teamsInPlayoff1}
                        min="1"
                        style={{direction:'rtl', height:30, fontSize:14}}
                        onChange={(e) => setTeamsInPlayoff1(e.target.value)}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => setTeamsInPlayoff1('')}
                        alt=""
                        style={{cursor:'pointer'}}
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>
                )} */}
                {noOfPlayoffs !== '' && noOfPlayoffs === 2 && (
                  <>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 1
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff1}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff1(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff1('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 2
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff2}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff2(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff2('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {noOfPlayoffs !== '' && noOfPlayoffs === 3 && (
                  <>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 1
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff1}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff1(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff1('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 2
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff2}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff2(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff2('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 3
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff3}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff3(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff3('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {noOfPlayoffs !== '' && noOfPlayoffs === 4 && (
                  <>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 1
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff1}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff1(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff1('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 2
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff2}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff2(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff2('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 3
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff3}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff3(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff3('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row shadow-box">
                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                          <img src={playersIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          Teams in playoff 4
                        </div>
                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                          <input
                            type="number"
                            // placeholder="No. of courts"
                            className="form-control p-0 webkit_spinner_none"
                            value={teamsInPlayoff4}
                            min="1"
                            style={{
                              direction: 'rtl',
                              height: 30,
                              fontSize: 14,
                            }}
                            onChange={(e) => setTeamsInPlayoff4(e.target.value)}
                          />
                        </div>
                        <div className="col-1 p-0 text-right m-auto pr-1">
                          <img
                            src={clearIcon}
                            onClick={() => setTeamsInPlayoff4('')}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            className="img-fluid mb-1 mr-1"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {/* {noOfPlayoffs !== '' && noOfPlayoffs === 1 && (
                    <div className="container">
                    <div className="row shadow-box">
                      <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                        <img src={playersIcon} alt="" className="img-fluid" />
                      </div>
                      <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                        Teams in playoff 1
                      </div>
                      <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                        <input
                          type="number"
                          // placeholder="No. of courts"
                          className="form-control p-0 webkit_spinner_none"
                          value={teamsInPlayoff1}
                          min="1"
                          style={{direction:'rtl', height:30, fontSize:14}}
                          onChange={(e) => setTeamsInPlayoff1(e.target.value)}
                        />
                      </div>
                      <div className="col-1 p-0 text-right m-auto pr-1">
                        <img
                          src={clearIcon}
                          onClick={() => setTeamsInPlayoff1('')}
                          alt=""
                          style={{cursor:'pointer'}}
                          className="img-fluid mb-1 mr-1"
                        />
                      </div>
                    </div>
                  </div>
                )} */}
              </div>

              {/* Details */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_details_error}
                >
                  Details
                </div>
                {detailsError !== null && (
                  <div className="text-left error-message-profile">
                    {detailsError}
                  </div>
                )}
                {/* Pools*/}
                
                <div style={{all:"none"}}   onClick={() => setPoolsDropdown(!poolsDropdown)}>

                    <ShadowContainer
                      srcImg={poolsIcon}
                      text="Pools"
                      stateData={poolsChoice}
                      mainClasses="row shadow-box mt-0"
                    >
                      <a
                        id="score-hamburger"
                        ref={refPools}
                        onClick={() => setPoolsDropdown(!poolsDropdown)}
                        className={
                          poolsDropdown
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div>
                          <img src={downArrow} alt="" />
                          {poolsDropdown && (
                            <span
                              style={{
                                marginTop: 7,
                                right: -10,
                                maxHeight: 280,
                                overflowY: 'auto',
                              }}
                              className="dropdown_animation"
                            >
                              <ul>
                                {eventDropdownData !== null &&
                                  eventDropdownData.pools.map((data) => (
                                    <li
                                      onClick={() => {
                                        setPoolsChoice(data.name);
                                        setPool_id(data.id);
                                      }}
                                      key={data.id}
                                    >
                                      {data.name}
                                    </li>
                                  ))}
                              </ul>
                            </span>
                          )}
                        </div>
                      </a>
                      {/* <SelectOptions
                        yesChoice={() => setPoolsChoice('YES')}
                        noChoice={() => setPoolsChoice('NO')}
                      /> */}
                     
                    </ShadowContainer>
                    </div>
               
                
                {/* Season */}
                <div style={{all:"none"}}     onClick={() => setSeasonDropdown(!seasonDropdown)}>
                    <ShadowContainer
                      srcImg={seasonsIcon}
                      text="Season"
                      stateData={seasonChoice}
                      mainClasses="row shadow-box"
                    >
                      <a
                        id="score-hamburger"
                        ref={refSeason}
                        onClick={() => setSeasonDropdown(!seasonDropdown)}
                        className={
                          seasonDropdown
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div>
                          <img src={downArrow} alt="" />
                          {seasonDropdown && (
                            <span
                              style={{
                                marginTop: 7,
                                right: -10,
                                maxHeight: 280,
                                overflowY: 'auto',
                              }}
                              className="dropdown_animation"
                            >
                              <ul>
                                {eventDropdownData !== null &&
                                  eventDropdownData.seasons.map((data) => (
                                    <li
                                      onClick={() => {
                                        setSeasonChoice(data.name);
                                        setSeason_id(data.id);
                                      }}
                                      key={data.id}
                                    >
                                      {data.name}
                                    </li>
                                  ))}
                              </ul>
                            </span>
                          )}
                        </div>
                      </a>
                    </ShadowContainer>
                </div>
               
                {/* Placement Points */}
                <div style={{all:"none"}}  onClick={() => setPointsDropdown(!pointsDropdown)}>

                  <ShadowContainer
                    srcImg={pointsIcon}
                    text="Placement Points"
                    stateData={placementPointsChoice}
                    mainClasses="row shadow-box"
                  >
                    <a
                      id="score-hamburger"
                      ref={refPoints}
                      onClick={() => setPointsDropdown(!pointsDropdown)}
                      className={
                        pointsDropdown
                          ? 'tri_top_event_visible'
                          : 'tri_top_event_hidden'
                      }
                    >
                      <div>
                        <img src={downArrow} alt="" />
                        {pointsDropdown && (
                          <span
                            style={{
                              marginTop: 7,
                              right: -10,
                              maxHeight: 280,
                              overflowY: 'auto',
                            }}
                            className="dropdown_animation"
                          >
                            <ul>
                              {eventDropdownData !== null &&
                                eventDropdownData.points.map((data) => (
                                  <li
                                    onClick={() => {
                                      setPlacementPointsChoice(data.name);
                                      setPoints_id(data.id);
                                    }}
                                    key={data.id}
                                  >
                                    {data.name}
                                  </li>
                                ))}
                            </ul>
                          </span>
                        )}
                      </div>
                    </a>
                  </ShadowContainer>
                </div>

                {/* Seeding Method */}
                <div style={{all:"none"}}  onClick={() => setSeedingDropdown(!seedingDropdown)}>

                    <ShadowContainer
                      srcImg={playTypeIcon}
                      text="Seeding Method"
                      stateData={seedingMethodChoice}
                      mainClasses="row shadow-box"
                    >
                      <a
                        id="score-hamburger"
                        ref={refSeeding}
                        // onClick={() => setSeedingDropdown(!seedingDropdown)}
                        className={
                          seedingDropdown
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div>
                          <img src={downArrow} alt="" />
                          {seedingDropdown && (
                            <span
                              style={{
                                marginTop: 7,
                                right: -10,
                                maxHeight: 280,
                                overflowY: 'auto',
                              }}
                              className="dropdown_animation"
                            >
                              <ul>
                                {eventDropdownData !== null &&
                                  eventDropdownData.seeding_method.map((data) => (
                                    <li
                                      onClick={() => {
                                        setSeedingMethodChoice(data.name);
                                        setSeeding_method_id(data.id);
                                      }}
                                      key={data.id}
                                    >
                                      {data.name}
                                    </li>
                                  ))}
                              </ul>
                            </span>
                          )}
                        </div>
                      </a>
                    </ShadowContainer>
                </div>   
                
                {/* Surface Type */}
                <div style={{all:"none"}}  onClick={() => setSurfaceDropdown(!surfaceDropdown)}>

                  <ShadowContainer
                    srcImg={surfaceIcon}
                    text="Surface Type"
                    stateData={surfaceTypeChoice}
                    mainClasses="row shadow-box"
                  >
                    <a
                      id="score-hamburger"
                      ref={refSurface}
                      onClick={() => setSurfaceDropdown(!surfaceDropdown)}
                      className={
                        surfaceDropdown
                          ? 'tri_top_event_visible'
                          : 'tri_top_event_hidden'
                      }
                    >
                      <div>
                        <img src={downArrow} alt="" />
                        {surfaceDropdown && (
                          <span
                            style={{
                              marginTop: 7,
                              right: -10,
                              maxHeight: 280,
                              overflowY: 'auto',
                            }}
                            className="dropdown_animation"
                          >
                            <ul>
                              <li
                                onClick={() => {
                                  setSurfaceTypeChoice('Sand');
                                  setSurfaceId(1);
                                }}
                              >
                                Sand
                              </li>
                              <li
                                onClick={() => {
                                  setSurfaceTypeChoice('Grass');
                                  setSurfaceId(2);
                                }}
                              >
                                Grass
                              </li>
                              <li
                                onClick={() => {
                                  setSurfaceTypeChoice('Other');
                                  setSurfaceId(3);
                                }}
                              >
                                Other
                              </li>
                            </ul>
                          </span>
                        )}
                      </div>
                    </a>
                  </ShadowContainer>
                </div> 
                
                {/* Host Clinic */}
                <ShadowContainer
                  srcImg={lightBulbIcon}
                  text="Host Clinic"
                  stateData={hostClinicChoice}
                  mainClasses="row shadow-box"
                >
                  <SelectOptions
                    yesChoice={() => setHostClinicChoice('yes')}
                    noChoice={() => setHostClinicChoice('no')}
                  />
                </ShadowContainer>

                {/* Show Entries */}
                <ShadowContainer
                  srcImg={binocularsIcon}
                  text="Show Entries"
                  stateData={showEntriesChoice}
                  mainClasses="row shadow-box"
                >
                  <SelectOptions
                    yesChoice={() => setShowEntriesChoice('yes')}
                    noChoice={() => setShowEntriesChoice('no')}
                  />
                </ShadowContainer>

                {/* Allow Membership */}
                <div style={{all:"none"}}  onClick={() => setTeamListingDropdown(!teamListingDropdown)}>

                    <ShadowContainer
                      srcImg={surfaceIcon}
                      text="Team Listing"
                      stateData={
                        teamListingChoice === 1
                          ? 'By Ranking Points'
                          : 'By Registration Date'
                      }
                      mainClasses="row shadow-box"
                    >
                      <a
                        id="score-hamburger"
                        ref={refTeamListing}
                        onClick={() => setTeamListingDropdown(!teamListingDropdown)}
                        className={
                          teamListingDropdown
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div>
                          <img src={downArrow} alt="" />
                          {teamListingDropdown && (
                            <span
                              style={{
                                marginTop: 7,
                                right: -10,
                                maxHeight: 280,
                                overflowY: 'auto',
                              }}
                              className="dropdown_animation"
                            >
                              <ul>
                                <li
                                  onClick={() => {
                                    // setSurfaceTypeChoice('Sand');
                                    // setSurfaceId(1);
                                    setTeamListingChoice(1);
                                  }}
                                >
                                  By Ranking Points
                                </li>
                                <li
                                  onClick={() => {
                                    // setSurfaceTypeChoice('Grass');
                                    // setSurfaceId(2);
                                    setTeamListingChoice(2);
                                  }}
                                >
                                  By Registration Date
                                </li>
                              </ul>
                            </span>
                          )}
                        </div>
                      </a>
                    </ShadowContainer>
                  </div>
              </div>

              {/* Contact */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_contact_error}
                >
                  Contact
                </div>
                {contactError !== null && (
                  <div className="text-left error-message-profile">
                    {contactError}
                  </div>
                )}
                {/*Director*/}
                <div className="container"  
                          onClick={() => {
                                        setDirectorDropdown(!directorDropdown);
                                        contactFilterClear();
                                      }}>
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={megaPhoneIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Director
                    </div>
                    <div className="col-6 p-0 text-right box-shadow-text m-auto">
                      {directorName}
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <a
                        id="score-hamburger"
                        className={
                          hamburgerOpen1
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div ref={refDirector}>
                          <img
                            src={downArrow}
                            alt=""
                            onClick={() => {
                              setDirectorDropdown(!directorDropdown);
                              contactFilterClear();
                            }}
                          />
                          {directorDropdown && (
                            <span
                              className="tooltiptext2 dropdown_animation"
                              style={{
                                width: 432,
                                height: 280,
                                overflowY: 'auto',
                                top: 25,
                              }}
                            >
                              <div
                                className=" container row p-0 m-auto"
                                style={{
                                  border: '1px solid #d8d8d8',
                                  borderRadius: 20,
                                  height: 32,
                                  width: 416,
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="col-1 p-0 m-auto">
                                  <img
                                    src={searchIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-11">
                                  <input
                                    placeholder="Search"
                                    type="text"
                                    ref={directorInputValue}
                                    style={{ height: 28 }}
                                    className=" form-control p-0 dropdown-searchbar"
                                    onChange={(e) => {
                                      if (
                                        directorInputValue.current.value !== ''
                                      ) {
                                        contactFilter(e.target.value);
                                      } else {
                                        contactFilterClear();
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                              <hr
                                style={{
                                  height: 1,
                                  backgroundColor: '#d8d8d8',
                                  marginTop: 7,
                                }}
                              />
                              {eventDropdownData === null ? (
                                <div style={{ marginTop: 55 }}>
                                  <img src={ballIcon} alt="" />
                                  <p className="no-addresses-p">
                                    Sorry, no contacts were found
                                  </p>
                                </div>
                              ) : (
                                showDirector()
                              )}
                            </span>
                          )}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Main Contact */}
                <div className="container"  
                        onClick={() => {
                                      setMainContactDropdown(!mainContactDropdown);
                                      contactFilterClear();
                                    }}>
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={talkIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Main Contact
                    </div>
                    <div className="col-6 p-0 text-right box-shadow-text m-auto">
                      {contactName}
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <a
                        id="score-hamburger"
                        className={
                          hamburgerOpen1
                            ? 'tri_top_event_visible'
                            : 'tri_top_event_hidden'
                        }
                      >
                        <div ref={refMainContact}>
                          <img
                            src={downArrow}
                            alt=""
                            onClick={() => {
                              setMainContactDropdown(!mainContactDropdown);
                              contactFilterClear();
                            }}
                          />
                          {mainContactDropdown && (
                            <span
                              className="tooltiptext2 dropdown_animation"
                              style={{
                                width: 432,
                                height: 280,
                                overflowY: 'auto',
                                top: 25,
                              }}
                            >
                              <div
                                className=" container row p-0 m-auto"
                                style={{
                                  border: '1px solid #d8d8d8',
                                  borderRadius: 20,
                                  height: 32,
                                  width: 416,
                                  backgroundColor: '#ffffff',
                                }}
                              >
                                <div className="col-1 p-0 m-auto">
                                  <img
                                    src={searchIcon}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-11">
                                  <input
                                    placeholder="Search"
                                    type="text"
                                    ref={contactInputValue}
                                    style={{ height: 28 }}
                                    className=" form-control p-0 dropdown-searchbar"
                                    onChange={(e) => {
                                      if (
                                        contactInputValue.current.value !== ''
                                      ) {
                                        contactFilter(e.target.value);
                                      } else {
                                        contactFilterClear();
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                              <hr
                                style={{
                                  height: 1,
                                  backgroundColor: '#d8d8d8',
                                  marginTop: 7,
                                }}
                              />
                              {eventDropdownData === null ? (
                                <div style={{ marginTop: 55 }}>
                                  <img src={ballIcon} alt="" />
                                  <p className="no-addresses-p">
                                    Sorry, no contacts were found
                                  </p>
                                </div>
                              ) : (
                                showContacts()
                              )}
                            </span>
                          )}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finance */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_finance_error}
                >
                  Finance
                </div>
                {financeError !== null && (
                  <div className="text-left error-message-profile">
                    {financeError}
                  </div>
                )}
                {/*Online Pay*/}
                <ShadowContainerDropdown
                  srcImg={emailIcon}
                  text="Online Pay"
                  stateData={onlinePayChoice}
                  mainClasses="row shadow-box mt-0"
                >
                  <SelectOptions
                    yesChoice={() => setOnlinePayChoice('yes')}
                    noChoice={() => setOnlinePayChoice('no')}
                  />
                </ShadowContainerDropdown>
                {/* Purse Amount */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Purse Amount
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-2">
                      <NumberFormat
                        pattern={'[0-9]*'}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={'$'}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, '')
                            .replace('$', '');
                          // num=parseInt(num,10);
                          setPurseAmountChoice(num);
                          setPurseAmountNumber(Number(num));
                          console.log(
                            'Purse amount:',
                            e.target.value,
                            Number(num),
                            num
                          );
                        }}
                        value={purseAmountChoice}
                        style={{
                          height: 'inherit',
                          // direction: 'rtl',
                          fontSize: 14,
                          fontFamily: 'FuturaMedium',
                          textAlign: 'right',
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Purse Amount % */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Purse Amount Percent

                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-2">
                      <NumberFormat
                        // pattern={'[0-9]*'}
                        displayType="input"
                        // thousandSeparator={true}
                        placeholder="%"
                        suffix={'%'}
                        maxLength="4"
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        // isAllowed={({ floatValue }) =>
                        //   (floatValue <= 100 && floatValue >= 0) ||
                        //   floatValue === ''
                        // }
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, '')
                            .replace('%', '');
                          // num=parseInt(num,10);
                          setPurseAmountPercentChoice(num);
                          setPurseAmountPercentNumber(Number(num));
                          console.log(
                            'Purse amount percent:',
                            e.target.value,
                            Number(num),
                            num
                          );
                        }}
                        value={purseAmountPercentChoice}
                        style={{
                          height: 'inherit',
                          // direction: 'rtl',
                          fontSize: 14,
                          fontFamily: 'FuturaMedium',
                          textAlign: 'right',
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Donation Text */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Donation Text
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-0">
                      <input
                        type="text"
                        name=""
                        id=""
                        maxLength={255}
                        value={donationText}
                        onChange={(e) => setDonationText(e.target.value)}
                        placeholder="Enter Donation Text here."
                        className="w-100 text-right donation-text"
                        style={{ border: 0, outline: 'none' }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1" >
                        <img
                          src={clearIcon}
                          onClick={() => setDonationText('')}
                          alt=""
                          className="img-fluid mb-1 mr-1"
                        />
                      </div>
                  </div>
                </div>
                {/* Donation Amount 1 */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() => console.log(donation1)}
                    >
                      Donation Amount 1
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-2">
                      <NumberFormat
                        pattern={'[0-9]*'}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={'$'}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, '')
                            .replace('$', '');
                          // num=parseInt(num,10);
                          setDonation1(Number(num));
                          console.log(
                            'Donation 1:',
                            e.target.value,
                            Number(num),
                            num
                          );
                        }}
                        value={donation1}
                        style={{
                          height: 'inherit',
                          // direction: 'rtl',
                          fontSize: 14,
                          fontFamily: 'FuturaMedium',
                          textAlign: 'right',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Donation Amount 2 */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Donation Amount 2
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-2">
                      <NumberFormat
                        pattern={'[0-9]*'}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={'$'}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, '')
                            .replace('$', '');
                          // num=parseInt(num,10);
                          setDonation2(Number(num));
                        }}
                        value={donation2}
                        style={{
                          height: 'inherit',
                          // direction: 'rtl',
                          fontSize: 14,
                          fontFamily: 'FuturaMedium',
                          textAlign: 'right',
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Donation Amount 3 */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Donation Amount 3
                    </div>
                    <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 pr-2">
                      <NumberFormat
                        pattern={'[0-9]*'}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={'$'}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, '')
                            .replace('$', '');
                          // num=parseInt(num,10);
                          setDonation3(Number(num));
                          // console.log(
                          //   'Purse amount:',
                          //   e.target.value,
                          //   Number(num),
                          //   num
                          // );
                        }}
                        value={donation3}
                        style={{
                          height: 'inherit',
                          // direction: 'rtl',
                          fontSize: 14,
                          fontFamily: 'FuturaMedium',
                          textAlign: 'right',
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Minimum Membership Requirement */}
                <div style={{all:"none"}}    onClick={() => setMembershipDropdown(!membershipDropdown)}>

                <ShadowContainer
                  srcImg={surfaceIcon}
                  text="Minimum Membership Requirement"
                  stateData={membershipChoice}
                  mainClasses="row shadow-box"
                >
                  <a
                    id="score-hamburger"
                    ref={refMembership}
                    onClick={() => setMembershipDropdown(!membershipDropdown)}
                    className={
                      membershipDropdown
                        ? 'tri_top_event_visible'
                        : 'tri_top_event_hidden'
                    }
                  >
                    <div>
                      <img src={downArrow} alt="" />
                      {membershipDropdown && (
                        <span
                          style={{
                            marginTop: 7,
                            right: -10,
                            maxHeight: 280,
                            overflowY: 'auto',
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            <li
                              onClick={() => {
                                // setSurfaceTypeChoice('Sand');
                                // setSurfaceId(1);
                                setMembershipChoice('gold');
                              }}
                            >
                              gold
                            </li>
                            <li
                              onClick={() => {
                                // setSurfaceTypeChoice('Grass');
                                // setSurfaceId(2);
                                setMembershipChoice('silver');
                              }}
                            >
                              silver
                            </li>
                            <li
                              onClick={() => {
                                // setSurfaceTypeChoice('Other');
                                // setSurfaceId(3);
                                setMembershipChoice('bronze');
                              }}
                            >
                              bronze
                            </li>
                          </ul>
                        </span>
                      )}
                    </div>
                  </a>
                </ShadowContainer>
                </div>
              
              </div>

              {/* Documents*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_documents_error}
                >
                  Documents
                </div>
                {documentsError !== null && (
                  <div className="text-left error-message-profile w-100">
                    {documentsError}
                  </div>
                )}
                {/*Signature Agreement*/}
                <ShadowContainer
                  srcImg={pencilIcon}
                  text="Signature Agreement"
                  stateData={signatureAgreementChoice}
                  mainClasses="row shadow-box mt-0"
                >
                  <SelectOptions
                    yesChoice={() => setSignatureAgreementChoice('yes')}
                    noChoice={() => setSignatureAgreementChoice('no')}
                  />
                </ShadowContainer>
                {/* Score Sheet */}
                <div style={{all:"none"}}     onClick={() => setScoreSheetDropdown(!scoreSheetDropdown)}>

                    <ShadowContainer
                  srcImg={positionIcon}
                  text="Score Sheet"
                  stateData={scoreSheetChoice}
                  mainClasses="row shadow-box"
                >
                  <a
                    id="score-hamburger"
                    ref={refScoreSheet}
                    onClick={() => setScoreSheetDropdown(!scoreSheetDropdown)}
                    className={
                      scoreSheetDropdown
                        ? 'tri_top_event_visible'
                        : 'tri_top_event_hidden'
                    }
                  >
                    <div>
                      <img src={downArrow} alt="" />
                      {scoreSheetDropdown && (
                        <span
                          style={{ marginTop: 7, right: -10 }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {eventDropdownData !== null &&
                              eventDropdownData.scoresheets.map((data) => (
                                <li
                                  onClick={() => {
                                    setScoreSheetChoice(data.name);
                                    setScoresheet_id(data.id);
                                  }}
                                  key={data.id}
                                >
                                  {data.name}
                                </li>
                              ))}
                          </ul>
                        </span>
                      )}
                    </div>
                  </a>
                </ShadowContainer>
                
                </div>
                
                {/* PDF Instructions */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={documentIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      PDF Instructions
                    </div>
                    <div className="col-6 p-0 text-right box-shadow-text m-auto">
                      {pdfValue.raw.name}
                    </div>
                    <div className="col-1 p-0 text-right m-auto pdf-upload pr-1">
                      <label htmlFor="file-input-pdf">
                        <img src={uploadIcon} alt="" />
                      </label>

                      <input
                        id="file-input-pdf"
                        type="file"
                        accept="application/pdf"
                        onChange={(e) =>
                          setPdfValue({
                            preview: URL.createObjectURL(e.target.files[0]),
                            raw: e.target.files[0],
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_description_error}
                >
                  Description
                </div>


                <div className="toolbar">
              <ul className="tool-list">
                <li className="tool" >
                  <button 
                   style={{color: ids['justifyLeft']?"grey":"black"}}
                    type="button" 
                    data-command='justifyLeft'
                    onClick ={e=>editorFunction(e)}
                    className="tool--btn">
                    <i  data-command='justifyLeft' className=' fas fa-align-left'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                    type="button"
                    style={{color: ids['justifyCenter']?"grey":"black"}}
                    onClick ={e=>editorFunction(e)}
                    data-command='justifyCenter' 
                    className="tool--btn">
                    <i data-command='justifyCenter'  className=' fas fa-align-center'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                    style={{color: ids['bold']?"grey":"black"}}
                    type="button"
                    onClick ={e=>editorFunction(e)} 
                    data-command="bold" 
                    className="tool--btn">
                    <i   data-command="bold"  className=' fas fa-bold'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                    type="button" 
                    style={{color: ids['italic']?"grey":"black"}}
                    onClick ={e=>editorFunction(e)}
                    data-command="italic"
                    className="tool--btn">
                    <i  data-command="italic" className=' fas fa-italic'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                    onClick ={e=>editorFunction(e)}
                    type="button" 
                    style={{color: ids['underline']?"grey":"black"}}
                    data-command="underline"
                    className="tool--btn">
                    <i   data-command="underline" className=' fas fa-underline'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                    onClick ={e=>editorFunction(e)}
                    type="button" 
                    style={{color: ids['insertOrderedList']?"grey":"black"}}
                    data-command="insertOrderedList"
                    className="tool--btn">
                    <i data-command="insertOrderedList" className=' fas fa-list-ol'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                
                   onClick ={e=>editorFunction(e)}
                    type="button" 
                    style={{color: ids['insertUnorderedList']?"grey":"black"}}
                    data-command="insertUnorderedList"
                    className="tool--btn">
                    <i  data-command="insertUnorderedList"  className=' fas fa-list-ul'></i>
                  </button>
                </li>
                <li className="tool">
                  <button 
                 
                    onClick ={e=>editorFunction(e)}
                    type="button" 
                    style={{color: ids['createlink']?"grey":"black"}}
                    data-command="createlink" 
                    className="tool--btn">
                    <i  data-command="createlink"  className=' fas fa-link'></i>
                  </button>
                </li>
              </ul>
              </div>

                {descriptionError !== null && (
                  <div className="text-left error-message-profile">
                    {descriptionError}
                  </div>
                )}
                <div className="container text-left" style={{padding:"0px"}}>
                  <div className="row shadow-box mt-0" style={{ height: 300 ,padding:"0px",margin:"0px"}}>
                    <div
                      className="col-12 "
                      // style={{padding:"0px"}}
                      style={{ height: 300,overflow:"scroll",  }}
                    >
                        <div className="col-12" id="output"  style={{ maxHeight: 300,outline:"none"}}
                              onInput={(e)=> {
                                    let s= document.getElementById("output").innerHTML;
                                            console.log(s)
                                            console.log(e.target.innerHTML)
                                            setDescription(s) 
                                          }} 
                          contenteditable="true">
                        </div>
                  
                    {/* <TextEditor 
                        // values={description}
                        values = "Enter Description..."
                        textValue={(e) => {
                          setDescription(e);
                        }}
                      /> */}
                 
                    </div>
                                        
                  </div>
                </div>
              </div>

              {/* Color Palette*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div
                  className="text-left address-title"
                  ref={event_subtitle_error}
                >
                  Color Palette
                </div>
                {/* {descriptionError !== null && (
                  <div className="text-left error-message-profile">
                    {descriptionError}
                  </div>
                )} */}
                <div className="container">
                  <div className="row shadow-box mt-0 align-items-center">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={documentIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-3 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Choose Color
                    </div>
                    <div className="col-8">
                      <div className="row p-0 m-0">
                        <div className="col p-0 m-0">
                          <div class="color-box white"></div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={white}
                            onChange={() => {
                              setWhite(!white);
                              setBlue(false);
                              setYellow(false);
                              setBlack(false);
                            }}
                          />
                        </div>
                        <div className="col p-0 m-0">
                          <div class="color-box blue"></div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={blue}
                            onChange={() => {
                              setBlue(!blue);
                              setWhite(false);
                              setYellow(false);
                              setBlack(false);
                            }}
                          />
                        </div>
                        <div className="col p-0 m-0">
                          <div class="color-box yellow"></div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={yellow}
                            onChange={() => {
                              setYellow(!yellow);
                              setBlue(false);
                              setWhite(false);
                              setBlack(false);
                            }}
                          />
                        </div>
                        <div className="col p-0 m-0">
                          <div class="color-box black"></div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={black}
                            onChange={() => {
                              setBlack(!black);
                              setBlue(false);
                              setWhite(false);
                              setYellow(false);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Image</div>
                {imageError !== null && (
                  <div className="text-left error-message-profile">
                    {imageError}
                  </div>
                )}
                {/* start */}
                <div className="container photo-margin">
                  <div className="row shadow-box mt-0">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={imageIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Event Photo Cover
                    </div>
                    <div
                      className="col-6 p-0 text-right box-shadow-text m-auto"
                      onClick={() => console.log(imageState)}
                    >
                      {imageState.raw.name}
                    </div>
                    <div className="col-1 p-0 text-right m-auto pdf-upload pr-1">
                      <label htmlFor="file-input-event-corner">
                        <img src={uploadIcon} alt="" />
                      </label>

                      <input
                        id="file-input-event-corner"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) =>
                          setImageState({
                            preview: URL.createObjectURL(e.target.files[0]),
                            raw: e.target.files[0],
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* {
                    saveLoading?
                    (
                      createTournamentError === null?
                      <div className="d-flex justify-content-center align-items-center mt-3">
                        <LoadingSpinner/>
                        <div className="pl-2">Creating Event...</div>
                      </div>
                      :
                      <div className="d-flex justify-content-center align-items-center mt-3">
                        {createTournamentError.message}
                      </div>
                    )
                      :
                      <></>
                  } */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer>
          <div className="m-0 col-auto ml-auto mt-3">
            <div
              className="lower-back-button-cancel"
              id="white-button-hover"
              onClick={onOpenModal}
            >
              <span className="lower-back-button-text">CANCEL</span>
            </div>
          </div>
          <div className="m-0 col-auto mt-3" style={{ position: 'relative' }}>
            {saveLoading ? (
              createTournamentError === null ||
              createTournamentError === undefined ? (
                <div className="on_save_message d-flex justify-content-center align-items-center">
                  <LoadingSpinner />
                  <div className="pl-2">Creating Event...</div>
                </div>
              ) : (
                <div className="on_save_error">
                  {createTournamentError && createTournamentError.message}
                </div>
              )
            ) : (
              <></>
            )}
            <button
              className={
                saveDisabled
                  ? 'lower-back-button-disabled'
                  : 'lower-back-button'
              }
              id="yellow-button-hover"
              onClick={onSave}
              ref={saveBtnRef}
              style={{ outline: 'none' }}
            >
              <span className="lower-back-button-text">SAVE</span>
            </button>
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
            onKeyDown ={ e =>{

                console.log(e.keyCode)

                if(e.keyCode ===13 && flag){
                  console.log("dash")
                  props.history.push('/DashboardEvents')
                  return;
                }
                if(e.keyCode===13 && !flag){
                  console.log("Close model")
                
                  return  onCloseModal();
                }
                if(e.keyCode===9){
                  flag? setFlag(false): setFlag(true)
                  return;
                }
              }
            }
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
                  backgroundColor: !flag?'#ffd420':'#ffffff',
                  outline: 0,
                  color: '#4a4a4a',
                }}
              >
                NO, CONTINUE
              </button>
              <button
            
                className="btn-sm pb-1 ml-3"
                id="yellow-button-hover"
                // onClick={() => props.history.goBack()}
                onClick={() => props.history.push('/DashboardEvents')}
                style={{
                  border: '1px solid yellow',
                  borderRadius: 15,
                  width: 112,
                  height: 24,
                  fontSize: 10,
                  backgroundColor: flag?'#ffd420':'#ffffff',
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
    </>
  );
};

export default NewEventProfile;
