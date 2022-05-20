import React, { useEffect, useState, useContext, useRef } from "react";
import "./NewEventProfile.css";
// import clearIcon from '../../assets/images/icons-x-input.svg';
import hamburgerIcon from "../../assets/images/icon-menu-hamburger.svg";
import downArrow from "../../assets/images/icon-menu-chevron-down.svg";
import radioButtonIcon from "../../assets/images/button-radio-grey-outline.svg";
import calenderIcon from "../../assets/images/icon-orange-calender.svg";
import clock from "../../assets/images/icon-orange-clock.svg";
import trophy from "../../assets/images/icon-orange-teams.svg";
import addNewIcon from "../../assets/images/icon-orange-players-plus.svg";
import clearIcon from "../../assets/images/icons-x-input.svg";
import profilePic from "../../assets/images/profilepic.jpg";
import ball from "../../assets/images/icon-orange-ball.svg";
import "./editor.css";

import playersIcon from "../../assets/images/icon-orange-players.svg";
import durationIcon from "../../assets/images/icon-orange-duration.svg";
import poolsIcon from "../../assets/images/icon-orange-pools.svg";
import seasonsIcon from "../../assets/images/icon-orange-seasons.svg";
import pointsIcon from "../../assets/images/icon-orange-points.svg";
import playTypeIcon from "../../assets/images/icon-orange-playtype.svg";
import surfaceIcon from "../../assets/images/icon-orange-surface.svg";
import lightBulbIcon from "../../assets/images/icon-orange-lightbulb.svg";
import binocularsIcon from "../../assets/images/icon-orange-binoculars.svg";
import megaPhoneIcon from "../../assets/images/icon-orange-megaphone.svg";
import talkIcon from "../../assets/images/icon-orange-talk.svg";
import emailIcon from "../../assets/images/icon-orange-email.svg";
import purseIcon from "../../assets/images/icon-orange-purse.svg";
import pencilIcon from "../../assets/images/icon-orange-pencil.svg";
import positionIcon from "../../assets/images/icon-orange-position.svg";
import documentIcon from "../../assets/images/icon-orange-document.svg";
import uploadIcon from "../../assets/images/icon-menu-upload.svg";
import Footer from "../../components/footer/Footer";
import CalenderComponent from "../../components/calendar/CalenderComponent";
import TimeComponent from "../../components/time/TimeComponent";
import SelectOptions from "../../components/selectOptions/SelectOptions";
import EventContext from "../../context/event/eventContext";
import loadingIcon from "../../assets/images/icon-loading.jpg";
import ballIcon from "../../assets/images/group-3.svg";
import searchIcon from "../../assets/images/icon-sidemenu-search.svg";
import imageIcon from "../../assets/images/icon-orange-image.svg";
import Header from "../../components/header/Header";
import backIcon from "../../assets/images/icon-menu-back.svg";
import ShadowContainer from "./ShadowContainer";
import MainInputEdit from "./MainInputEdit";
import TextAreaEdit from "./TextAreaEdit";
import "react-responsive-modal/styles.css";
import MasterForm from "../../components/WizardFormComponent";
// import DatePicker from 'react-datepicker';
import NumberFormat from "react-number-format";
import moment from "moment";
import calenderIconRight from "../../assets/images/icon-menu-calendar.svg";
import DropdownModals from "../../components/DropdownModals";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SubTitleEdit from "./SubTitleEdit";

import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";
import { DatePicker, TimePicker } from "antd";
import { json } from "sjcl";
import { ToastContainer, toast } from "react-toastify";
import defaultIcon3 from "../../assets/images/defaultIcon3.png";
import defaultIcon2 from "../../assets/images/defaultIcon2.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { API } from "../../Utils/API";

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

const NewEventProfileEdit = (props) => {
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

    //eventInfo
    eventInfo,

    // dropdown api integration
    dropDownFun,
    eventDropdownData,

    //edit tournament
    editTournament,

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
    SET_ADDRESS_ID,

    //get tournament data
    getTournamentData,
    selectedTemplateName,
    teamSizeMap,
    editEventError,
    earlyBirdDateStateFun,
  } = eventContext;

  //api call
  // useEffect(() => {
  //   if (eventId !== null) {
  //     getTournamentById(eventId);
  //     console.log(getTournamentData);
  //   }

  //   //eslint-disable-next-line
  // }, []);

  //edit courts
  const [editCourt, setEditCourt] = useState(
    getTournamentData && getTournamentData.tournament.court.editFlag !== ""
      ? getTournamentData.tournament.court.editFlag
      : ""
  );
  const [saveNewCourt, setNewCourt] = useState(0);

  const newCourt = () => {
    setCourtName("");
    setStreetAddress("");
    setZip("");
    setNoOfCourts("");
    setCountry("US");
    setCourt_id(null);
  };

  const [statusForDelete, setStatusofDelete] = useState(1);

  useEffect(() => {
    if (statusForDelete === 0) {
      console.log("State of delete" + statusForDelete);
      saveUpdatedCourt();
      setHamburgerOpen2(false);
      newCourt();
      setEditCourt(1);
      setNewCourt(true);
    }
  }, [statusForDelete]);
  const courtUpdate = async () => {
    console.log(court_id, courtName, streetAddress, country, zip, noOfCourts);
    if (
      courtName !== "" &&
      streetAddress !== "" &&
      country !== "" &&
      // city !== '' &&
      zip !== ""
      // &&
      // noOfCourts !== ''
      // stateCode !== ''
    ) {
      let data;
      if (statusForDelete == 0) {
        data = JSON.stringify({
          court_id: court_id,
          status: statusForDelete,
        });
      } else {
        data = JSON.stringify({
          court_id: court_id,
          court_name: courtName,
          street_address: streetAddress,
          country: country,
          zip: zip,
          status: statusForDelete,
          permanent_flag: permanentFlag,
          number_of_court: noOfCourts === "" ? 20 : noOfCourts,
        });
      }

      const actualData = new FormData();
      actualData.append("data", data);

      const res = await API.post(`/updateCourt`, actualData)
        .then((res) => {
          if (statusForDelete == 1) toast.dark("Court Updated Successfully!!");
          else {
            toast.dark("Court Deleted Successfully!!");
            setStatusofDelete(1);
          }
        })
        .catch((err) => {
          console.log("Courts edit error:", err, err.response);
          // dispatch({
          //   type: EDIT_DIV_TEMPLATE_ERROR,
          //   payload:err,
          // })
          toast.dark("Court Update Fail!!");
          console.log("editCourts response:", res && res.data);
          setStatusofDelete(1);
        });
    }
  };

  const saveUpdatedCourt = async () => {
    var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    if (country == "US") {
      if (us.test(zip.toString()) || zip === "") {
        setCourtNoError(null);
        await courtUpdate();
      } else {
        setCourtNoError("Enter Valid Zip");
      }
    } else if (country == "CA") {
      if (can.test(zip.toString()) || zip === "") {
        setCourtNoError(null);
        await courtUpdate();
      } else {
        setCourtNoError("Enter Valid Zip");
      }
    }
  };

  //counter to display save to list
  const [courtOption, setCourtOption] = useState(true);

  //states
  const [courtName, setCourtName] = useState(
    getTournamentData && getTournamentData.tournament.court.court_name !== ""
      ? getTournamentData.tournament.court.court_name
      : ""
  );
  const [streetAddress, setStreetAddress] = useState(
    getTournamentData &&
      getTournamentData.tournament.court.street_address !== ""
      ? getTournamentData.tournament.court.street_address
      : ""
  );
  const [country, setCountry] = useState(
    getTournamentData && getTournamentData.tournament.court.country === "CA"
      ? getTournamentData.tournament.court.country
      : "US"
  );
  const [city, setCity] = useState("");
  const [zip, setZip] = useState(
    getTournamentData && getTournamentData.tournament.court.zip !== ""
      ? getTournamentData.tournament.court.zip
      : ""
  );
  const [stateCode, setStateCode] = useState(
    getTournamentData && getTournamentData.tournament.court.country === "CA"
      ? getTournamentData.tournament.court.country
      : "USA"
  );
  const [noOfCourts, setNoOfCourts] = useState(
    getTournamentData &&
      getTournamentData.tournament.court.number_of_court !== ""
      ? getTournamentData.tournament.court.number_of_court
      : ""
  );
  const [court_id, setCourt_id] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.court.court_id
      : ""
  );
  const [contactName, setContactName] = useState(
    getTournamentData !== null
      ? `${getTournamentData.tournament.main_contact.first_name} ${getTournamentData.tournament.main_contact.last_name}`
      : ""
  );
  const [directorName, setDirectorName] = useState(
    getTournamentData !== null
      ? `${getTournamentData.tournament.director.first_name} ${getTournamentData.tournament.director.last_name}`
      : ""
  );
  const [listAddress, setListAddress] = useState(null);
  const [eventName, setEventName] = useState(
    getTournamentData !== null ? getTournamentData.tournament.name : ""
  );
  const [startDate, setStartDate] = useState(
    getTournamentData !== null ? getTournamentData.tournament.start_date : ""
  );
  const [endDate, setEndDate] = useState(
    getTournamentData !== null ? getTournamentData.tournament.end_date : ""
  );
  const [closesOnDate, setClosesOnDate] = useState(
    getTournamentData !== null ? getTournamentData.tournament.closes_on : ""
  );
  const [earlyBirdDate, setEarlyBirdDate] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.early_bird_date
      : ""
  );

  const [startTime, setStartTime] = useState(
    getTournamentData !== null ? getTournamentData.tournament.start_time : ""
  );
  const [endTime, setEndTime] = useState(
    getTournamentData !== null ? getTournamentData.tournament.end_time : ""
  );
  const [endsAtTime, setEndsAtTime] = useState(
    getTournamentData !== null ? getTournamentData.tournament.ends_at : ""
  );
  //id
  const [pool_id, setPool_id] = useState("");
  const [point_id, setPoint_id] = useState("");
  const [season_id, setSeason_id] = useState(
    getTournamentData !== null ? getTournamentData.tournament.season.id : ""
  );
  const [seeding_method_id, setSeeding_method_id] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.seeding_method.id
      : ""
  );
  const [main_contact_id, setMain_contact_id] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.main_contact.id
      : ""
  );
  const [director_id, setDirector_id] = useState(
    getTournamentData !== null ? getTournamentData.tournament.director.id : ""
  );
  const [scoresheet_id, setScoresheet_id] = useState(
    getTournamentData !== null ? getTournamentData.tournament.scoresheet.id : ""
  );
  // Choice for 'YES' and 'NO'
  const [scoreSheetChoice, setScoreSheetChoice] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.scoresheet.name
      : ""
  );
  const [signatureAgreementChoice, setSignatureAgreementChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.signature : ""
  );
  const [purseAmountChoice, setPurseAmountChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.purse_amount : ""
  );

  const [purseAmountNumber, setPurseAmountNumber] = useState(
    getTournamentData !== null ? getTournamentData.tournament.purse_amount : ""
  );

  const [purseAmountPercentChoice, setPurseAmountPercentChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.purse_percent : ""
  );
  const [purseAmountPercentNumber, setPurseAmountPercentNumber] = useState(
    getTournamentData !== null ? getTournamentData.tournament.purse_percent : ""
  );
  // donation1Choice
  const [donation1Choice, setDonation1Choice] = useState(
    getTournamentData && getTournamentData.tournament.donation_amounts !== null
      ? getTournamentData.tournament.donation_amounts.split(",")[0]
      : ""
  );
  // donation2Choice
  const [donation2Choice, setDonation2Choice] = useState(
    getTournamentData && getTournamentData.tournament.donation_amounts !== null
      ? getTournamentData.tournament.donation_amounts.split(",")[1]
      : ""
  );
  // donation3Choice
  const [donation3Choice, setDonation3Choice] = useState(
    getTournamentData && getTournamentData.tournament.donation_amounts !== null
      ? getTournamentData.tournament.donation_amounts.split(",")[2]
      : ""
  );

  // donation text
  const [donationtext, setDonationText] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.donation_text
      : null
  );
  const [donationtextDuplicate, setDonationTextDuplicate] = useState(null);

  const [onlinePayChoice, setOnlinePayChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.online_pay : ""
  );
  const [directorChoice, setDirectorChoice] = useState(
    getTournamentData !== null
      ? `${getTournamentData.tournament.director.first_name} ${getTournamentData.tournament.director.last_name}`
      : ""
  );
  const [showEntriesChoice, setShowEntriesChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.show_entries : ""
  );
  const [hostClinicChoice, setHostClinicChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.host_clinic : ""
  );
  const [surfaceTypeChoice, setSurfaceTypeChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.surface_type : ""
  );
  const [membershipChoice, setMembershipChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.membership : ""
  );
  const [teamListingChoice, setTeamListingChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.team_listing : 1
  );
  const [surfaceId, setSurfaceId] = useState("");
  const [saveDisabled, setSaveDisabled] = useState(false);

  useEffect(() => {
    var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    if (
      ((us.test(zip.toString()) || zip === "") && stateCode === "USA") ||
      ((can.test(zip.toString()) || zip === "") && stateCode === "CA")
    ) {
      setCourtNoError(null);
      setCourtNotFound(null);
    } else {
      setCourtNoError("Country and zip do not match");
      setCourtNotFound(null);
    }
  }, [stateCode, zip]);

  useEffect(() => {
    if (surfaceTypeChoice === "Sand") {
      setSurfaceId(1);
    }
    if (surfaceTypeChoice === "Grass") {
      setSurfaceId(2);
    }
    if (surfaceTypeChoice === "Other") {
      setSurfaceId(3);
    }
  }, [surfaceTypeChoice]);
  const [seedingMethodChoice, setSeedingMethodChoice] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.seeding_method.name
      : ""
  );
  const [placementPointsChoice, setPlacementPointsChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.point.name : ""
  );
  const [seasonChoice, setSeasonChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.season.name : ""
  );
  // const [teamSizeChoice, setTeamSizeChoice] = useState(
  //   getTournamentData !== null ? getTournamentData.tournament.team_size : ''
  // );
  const [registrationCapChoice, setRegistrationCapChoice] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.registration_cap
      : ""
  );
  const [poolsChoice, setPoolsChoice] = useState(
    getTournamentData !== null ? getTournamentData.tournament.pool.name : ""
  );
  // const [pdfValue, setPdfValue] = useState(
  //   getTournamentData !== null
  //     ? {
  //         preview: getTournamentData.tournament.tournament_doc,
  //         raw: '',
  //       }
  //     : { preview: '', raw: '' }
  // );

  // useEffect(() => {
  if (getTournamentData !== null) {
    var n =
      getTournamentData !== null && getTournamentData.tournament.tournament_doc;
    var u = n !== null && n.split("-");
    // setPdfShortForm(u[u.length - 1]);
    var v =
      getTournamentData !== null && getTournamentData.tournament.cover_photo;
    var x = v !== null && v.split("-");
    // setEventPhotoShortForm(x[x.length - 1]);
  }
  const [pdfValue, setPdfValue] = useState(
    getTournamentData !== null
      ? {
          preview: u[u.length - 1],
          raw: "",
        }
      : { preview: "", raw: "" }
  );
  const [imageState, setImageState] = useState(
    getTournamentData !== null
      ? {
          preview: x[x.length - 1],
          raw: "",
        }
      : { preview: "", raw: "" }
  );
  // }
  // }, [getTournamentData]);

  const [file, setFile] = useState(
    getTournamentData !== null
      ? {
          preview: `${process.env.REACT_APP_BASE_URL}${getTournamentData.tournament.tournament_pic}`,
          raw: "",
        }
      : { preview: "", raw: "" }
  );
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [contactError, setContactError] = useState("");
  const [financeError, setFinanceError] = useState("");
  const [documentsError, setDocumentsError] = useState("");
  const [courtNoError, setCourtNoError] = useState("");
  // description
  const [description, setDescription] = useState(
    getTournamentData !== null ? getTournamentData.tournament.description : ""
  );

  const [sub_title, setSubtitle] = useState(
    getTournamentData !== null
      ? getTournamentData.tournament.sub_title !== null
        ? getTournamentData.tournament.sub_title
        : ""
      : ""
  );
  const [descriptionError, setDescriptionError] = useState("");
  const [SubTitleError, setSubTileError] = useState("");

  const [fileError, setFileError] = useState("");

  const [imageError, setImageError] = useState("");

  const [permanentFlag, setPermanentFlag] = useState(
    getTournamentData &&
      getTournamentData.tournament.court.permanent_flag !== ""
      ? getTournamentData.tournament.court.permanent_flag
      : ""
  );
  const [isGoing2, setIsGoing2] = useState(
    getTournamentData &&
      getTournamentData.tournament.court.permanent_flag !== "" &&
      getTournamentData.tournament.court.permanent_flag === 0
      ? true
      : false
  );

  // duplicate states
  const [eventDuplicate, setEventDuplicate] = useState("");
  // const [courtDuplicate, setCourtDuplicate] = useState('');
  // const [startDateDuplicate, setStartDateDuplicate] = useState('');
  // const [endDateDuplicate, setEndDateDuplicate] = useState('');
  // duplicate states
  // const [eventDuplicate, setEventDuplicate] = useState('');
  const [courtDuplicate, setCourtDuplicate] = useState("");
  const [court_idDuplicate, setCourt_idDuplicate] = useState("");
  const [streetAddressDuplicate, setStreetAddressDuplicate] = useState("");
  const [countryDuplicate, setCountryDuplicate] = useState("");
  const [cityDuplicate, setCityDuplicate] = useState("");
  const [stateCodeDuplicate, setStateCodeDuplicate] = useState("");
  const [ZipDuplicate, setZipDuplicate] = useState("");
  const [startDateDuplicate, setStartDateDuplicate] = useState("");
  const [endDateDuplicate, setEndDateDuplicate] = useState("");
  const [registrationCapChoiceDuplicate, setRegistrationCapChoiceDuplicate] =
    useState("");
  const [placementPointsChoiceDuplicate, setPlacementPointsChoiceDuplicate] =
    useState("");
  const [surfaceTypeChoiceDuplicate, setSurfaceTypeChoiceDuplicate] =
    useState("");
  const [membershipChoiceDuplicate, setMembershipChoiceDuplicate] =
    useState("");
  const [teamListingChoiceDuplicate, setTeamListingChoiceDuplicate] =
    useState("");
  const [startTimeDuplicate, setStartTimeDuplicate] = useState("");
  const [endTimeDuplicate, setEndTimeDuplicate] = useState("");
  // const [teamSizeChoiceDuplicate, setTeamSizeChoiceDuplicate] = useState('');
  const [closesOnDateDuplicate, setClosesOnDateDuplicate] = useState("");
  const [endsAtTimeDuplicate, setEndsAtTimeDuplicate] = useState("");
  const [pool_idDuplicate, setPool_idDuplicate] = useState("");
  const [seeding_method_idDuplicate, setSeeding_method_idDuplicate] =
    useState("");
  const [hostClinicChoiceDuplicate, setHostClinicChoiceDuplicate] =
    useState("");
  const [showEntriesChoiceDuplicate, setShowEntriesChoiceDuplicate] =
    useState("");
  const [onlinePayChoiceDuplicate, setOnlinePayChoiceDuplicate] = useState("");
  const [purseAmountChoiceDuplicate, setPurseAmountChoiceDuplicate] =
    useState("");
  const [
    purseAmountPercentChoiceDuplicate,
    setPurseAmountPercentChoiceDuplicate,
  ] = useState("");
  const [
    signatureAgreementChoiceDuplicate,
    setSignatureAgreementChoiceDuplicate,
  ] = useState("");
  const [scoresheet_idDuplicate, setScoreSheetChoiceDuplicate] = useState("");
  const [surfaceIdDuplicate, setSurfaceIdDuplicate] = useState("");
  const [descriptionDuplicate, setDescriptionDuplicate] = useState("");
  const [tournament_picDuplicate, setTournamentPicDuplicate] = useState("");
  const [main_contact_idDuplicate, setMain_contact_idDuplicate] = useState("");
  const [director_idDuplicate, setDirector_idDuplicate] = useState("");
  const [poolsChoiceDuplicate, setPoolsChoiceDuplicate] = useState("");
  const [seasonChoiceDuplicate, setSeasonChoiceDuplicate] = useState("");
  const [seedingMethodChoiceDuplicate, setSeedingMethodChoiceDuplicate] =
    useState("");
  const [purseAmountNumberDuplicate, setPurseAmountNumberDuplicate] = useState(
    getTournamentData !== null ? getTournamentData.tournament.purse_amount : ""
  );
  const [
    purseAmountNumberPercentDuplicate,
    setPurseAmountNumberPercentDuplicate,
  ] = useState("");
  const [donation1NumberDuplicate, setDonation1NumberDuplicate] =
    useState(null);
  const [donation2NumberDuplicate, setDonation2NumberDuplicate] =
    useState(null);
  const [donation3NumberDuplicate, setDonation3NumberDuplicate] =
    useState(null);

  const [colorChange, setColorChange] = useState(false);
  const [white, setWhite] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [black, setBlack] = useState(false);

  useEffect(() => {
    if (getTournamentData.tournament.color === "#ffffff") {
      // setColor('#e62e2d');
      setWhite(true);
      setBlue(false);
      setYellow(false);
      setBlack(false);
    }
    if (getTournamentData.tournament.color === "#0a0080") {
      // setColor('#1f01ff');
      setWhite(false);
      setBlue(true);
      setYellow(false);
      setBlack(false);
    }
    if (getTournamentData.tournament.color === "#fdff00") {
      // setColor('#fdff00');
      setWhite(false);
      setBlue(false);
      setYellow(true);
      setBlack(false);
    }
    if (getTournamentData.tournament.color === "#000000") {
      // setColor('#fdff00');
      setBlack(true);
      setWhite(false);
      setBlue(false);
      setYellow(false);
    }
    // if(!white || !blue || !yellow){
    //   setColor(null);
    // }
  }, [getTournamentData.tournament.color]);

  const notify = () => toast.dark("Court Added!");
  const [courtNotFound, setCourtNotFound] = useState(null);

  useEffect(() => {
    if (
      descriptionError !== null ||
      SubTitleError !== null ||
      courtNotFound !== null ||
      courtNoError !== null
    ) {
      if (court_id === null) {
        console.log("hello");
        // setCourtNoError('Please save selected or added court')
      }
      setSaveDisabled(true);
    } else {
      setSaveDisabled(false);
      setCourtNoError(null);
    }
  }, [descriptionError, SubTitleError, courtNotFound, courtNoError]);

  useEffect(() => {
    if (court_id === null) {
      setCourtNotFound("Please fill and save information of court");
    } else {
      setCourtNotFound(null);
    }
  }, [court_id]);

  const getAllCourts = () => {
    setHamburgerOpen1(!hamburgerOpen1);
    eventAddressesFun();
  };

  // //calling api's at the beginning
  // useEffect(() => {
  //   dropDownFun();
  //   eventAddressesFun();
  //   //eslint-disable-next-line
  // }, []);
  useEffect(() => {
    if (eventDropdownData !== null) {
      console.log(eventDropdownData);
    }
  }, [eventDropdownData]);

  useEffect(() => {
    console.log("Event id by url:", parseInt(props.match.params.id));
    getTournamentById(parseInt(props.match.params.id));
    dropDownFun();
    eventAddressesFun();
  }, []);

  useEffect(() => {
    if (getTournamentData !== null) {
      console.log("getTournamentData", getTournamentData);
      InDom(
        getTournamentData !== null
          ? getTournamentData.tournament.description
          : ""
      );
      // document.getElementById("output").innerHTML= textToHTML(getTournamentData !== null
      //   ? getTournamentData.tournament.description
      //   : '');
    }
  }, [getTournamentData]);

  // // time wrapper
  // const WrapperComponent = () => (
  //   <TimePicker
  //     use12Hours
  //     format="h:mm a"
  //     style={{ width: 90 }}
  //     bordered={false}
  //     suffixIcon={<img src={downArrow} alt="" />}
  //     className="pr-0 text-uppercase p-0"
  //     allowClear={false}
  //     value={moment(startTime)}
  //     onChange={(e) => setStartTime(e)}
  //     placeholder=""
  //   />
  // );

  //save address function
  const saveAddressFunction = async () => {
    console.log(courtName, streetAddress, country, zip, noOfCourts);
    console.log(country);
    if (
      courtName !== "" &&
      streetAddress !== "" &&
      country !== "" &&
      // city !== '' &&
      zip !== ""
      // &&
      // noOfCourts !== ''
      // stateCode !== ''
    ) {
      const data = JSON.stringify({
        court_name: courtName,
        street_address: streetAddress,
        country: country,
        zip: zip,
        permanent_flag: permanentFlag,
        number_of_court: noOfCourts === "" ? 20 : noOfCourts,
      });

      const actualData = new FormData();
      actualData.append("data", data);
      actualData.append(
        "court_pic",
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
      );

      // notify();
      await saveAddress(actualData);
      console.log("id: " + addressId);
      setCourt_id(addressId);
    }
  };

  // useEffect(() => {
  //   console.log(addressId);
  //   if (addressId !== null) {
  //     setCourt_id(addressId);
  //   }
  // }, [addressId]);

  //contact and address useRef
  const contactInputValue = useRef("");
  const directorInputValue = useRef("");
  const addressInputValue = useRef("");

  //contact component
  function ContactListComponent({ address }) {
    return (
      <div
        className="container row m-0 hover-list p-0"
        onClick={() => {
          setContactName(address.promoter_name);
          setMain_contact_id(address.id);
          setMain_contact_idDuplicate(address.id);
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
            // src={`${address.profile_pic}`}
            onError={(e) => (e.target.src = ball)}
            src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${address.profile_pic}`}
            style={{
              borderRadius: "50%",
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
        className="container row m-0 hover-list p-0"
        onClick={() => {
          setDirectorName(address.promoter_name);
          setDirector_id(address.id);
          setDirector_idDuplicate(address.id);
          setDirectorDropdown(false);
        }}
      >
        {" "}
        <div
          className="col-2 m-auto text-center p-0"
          style={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <img
            alt="player"
            // src={`${address.profile_pic}`}
            // src={defaultIcon3}
            onError={(e) => (e.target.src = defaultIcon2)}
            src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${address.profile_pic}`}
            style={{
              borderRadius: "50%",
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
      addressInputValue.current = "";
    }
  });

  let AddressListComponent = ({ address }) => {
    const {
      court_id,
      court_name,
      street_address,
      country,
      zip,
      city,
      number_of_court,
      editFlag,
      permanent_flag,
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
            editFlag,
            permanentFlag,
          });
          setCourt_id(court_id);
          setCourtName(court_name);
          setStreetAddress(street_address);
          setCountry(country);
          setZip(zip);
          setCity(city);
          setNoOfCourts(number_of_court);
          setCourtOption(false);
          setHamburgerOpen1(false);
          setEditCourt(editFlag);
          setPermanentFlag(permanent_flag);
          setIsGoing2(permanent_flag ? false : true);
          // notify();
          // setCourt_id(court_id);
        }}
      >
        {" "}
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
              borderRadius: "50%",
              width: 25,
              height: 25,
            }}
          />
        </div>
        <div className="col-10 text-left text-dark address-contact-list-content p-0">
          {court_id},{court_name}, {street_address}, {address.zip}
        </div>
      </div>
    );
  };

  const showAddresses = () => {
    if (loading) {
      return (
        <div>
          {/* <img src={loadingIcon} alt="" /> */}
          <LoadingSpinner />
        </div>
      );
    }
    if (filteredAddresses !== null && !loading) {
      return filteredAddresses.map((address, index1) => (
        <AddressListComponent key={index1} address={address} />
      ));
    }
    if (
      Array.isArray(eventAddresses) &&
      eventAddresses.length !== 0 &&
      !loading
    ) {
      return eventAddresses.map((address, index1) => (
        <AddressListComponent key={index1} address={address} />
      ));
    } else if (
      !Array.isArray(eventAddresses) &&
      eventAddresses.length !== 0 &&
      !loading
    ) {
      return (
        <p className="text-center" style={{ color: "#ff2072" }}>
          {eventAddresses}
        </p>
      );
    }
  };

  //image upload
  const handleChange = (event) => {
    setFile({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  //errors

  useEffect(() => {
    console.log(fileError, file);
    if (file === "") {
      setFileError("Please Fill Image Input");
      console.log(fileError, file);
    } else if (file.raw !== "" && file.raw.size > 2048000) {
      setFileError("Image size should not exceed 2048 KB size");
      console.log(fileError, file);
    } else {
      setFileError(null);
      console.log(fileError, file);
    }
  }, [file]);

  useEffect(() => {
    if (noOfCourts > 9999) {
      setCourtNoError("No. of courts cannot be greater than 9999");
    } else {
      setCourtNoError(null);
    }
  }, [noOfCourts]);

  useEffect(() => {
    if (startDate === "" || endDate === "") {
      setDateError("Please add a start and end date.");
    } else {
      setDateError(null);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startTime === "" || endTime === "") {
      setTimeError("Please Select start and end time");
    } else {
      setTimeError(null);
    }
  }, [startTime, endTime]);

  useEffect(() => {
    if (
      registrationCapChoice === "" ||
      // teamSizeChoice === '' ||
      closesOnDate === "" ||
      endsAtTime === ""
    ) {
      setRegistrationError("Please Fill All registration Inputs");
    } else {
      setRegistrationError(null);
    }
  }, [
    registrationCapChoice,
    //  teamSizeChoice,
    closesOnDate,
    endsAtTime,
  ]);

  useEffect(() => {
    if (
      poolsChoice === "" ||
      seasonChoice === "" ||
      placementPointsChoice === "" ||
      seedingMethodChoice === "" ||
      surfaceTypeChoice === "" ||
      hostClinicChoice === "" ||
      showEntriesChoice === "" ||
      teamListingChoice === ""
    ) {
      setDetailsError("Please Fill all Details Inputs");
    } else {
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
    if (directorChoice === "" || contactName === "") {
      setContactError("Please Fill All Contact Inputs");
    } else {
      setContactError(null);
    }
  }, [directorChoice, contactName]);

  useEffect(() => {
    if (
      onlinePayChoice === "" ||
      purseAmountChoice === "" ||
      membershipChoice === ""
      //  ||
      // donation1Choice === '' ||
      // donation2Choice === '' ||
      // donation3Choice === '' ||
      // donationtext === ''
    ) {
      setFinanceError("Please Fill all Finance Inputs");
    } else {
      setFinanceError(null);
    }
  }, [
    onlinePayChoice,
    purseAmountChoice,
    membershipChoice,
    // donation1Choice,
    // donation2Choice,
    // donation3Choice,
    // donationtext,
  ]);

  useEffect(() => {
    if (
      signatureAgreementChoice === "" ||
      scoreSheetChoice === "" ||
      pdfValue === ""
    ) {
      setDocumentsError("Please Fill all Documents Inputs");
    } else if (pdfValue.raw !== "" && pdfValue.raw.size > 2048000) {
      setDocumentsError("PDF instructions size should not exceed 2048 KB size");
    } else {
      setDocumentsError(null);
    }
  }, [signatureAgreementChoice, scoreSheetChoice, pdfValue]);

  useEffect(() => {
    if (description === "") {
      setDescriptionError("Please Fill Description Input");
    } else {
      // InDom(description) // not in use
      setDescriptionError(null);
    }
  }, [description]);

  useEffect(() => {
    if (sub_title === "") {
      setSubTileError("Please Fill Subtitle Input");
    } else {
      setSubTileError(null);
    }
  }, [sub_title]);

  useEffect(() => {
    if (imageState === "") {
      setImageError("Please Fill Image Input");
    } else if (imageState.raw !== "" && imageState.raw.size > 2048000) {
      setImageError("Image size should not exceed 2048 KB size");
    } else {
      setImageError(null);
    }
  }, [imageState]);

  const [pdfShortForm, setPdfShortForm] = useState("");
  const [eventPhotoShortForm, setEventPhotoShortForm] = useState("");

  const [saveLoading, setSaveLoading] = useState(false);

  const onSave = async () => {
    if (
      file !== null &&
      (file.raw !== "" ? file.raw.size < 2048000 : file.raw === "") &&
      (pdfValue.raw !== ""
        ? pdfValue.raw.size < 2048000
        : pdfValue.raw === "") &&
      (imageState.raw !== ""
        ? imageState.raw.size < 2048000
        : imageState.raw === "")
    ) {
      console.log({
        listAddress,
        eventName,
        startDate,
        endDate,
        startTime,
        endTime,
        earlyBirdDate,
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
        donation1Choice,
        donation2Choice,
        donation3Choice,
        donationtext,
      });
      saveData({
        listAddress,
        eventName,
        startDate,
        endDate,
        startTime,
        endTime,
        earlyBirdDate,
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
        donation1Choice,
        donation2Choice,
        donation3Choice,
        donationtext,
      });
      setSaveLoading(true);

      const data = JSON.stringify({
        name: eventDuplicate,
        // creator_id: 12,
        // court_id: court_id,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
        // start_time: '01:00:00',
        // end_time: '02:00:00',
        registration_cap: registrationCapChoice,
        // team_size: teamSizeChoice,
        team_size: 10,
        closes_on: moment(closesOnDate).format("YYYY-MM-DD"),
        ends_at: "08:00:00",
        // pool_id: pool_id,
        season_id: season_id,
        seeding_method_id: seeding_method_id,
        host_clinic: hostClinicChoice,
        show_entries: showEntriesChoice,
        online_pay: onlinePayChoice,
        membership: membershipChoice,
        team_listing: teamListingChoice,
        // purse_amount: purseAmountNumber,
        signature: signatureAgreementChoice,
        scoresheet_id: scoresheet_id,
        surface_type: surfaceId,
        // main_contact: main_contact_id,
        director_id: director_id,
        // org_id: 758,
        // pool_template_id: '1',
        // point_template_id: '1',
        // creator_id: 12,
        // court_id: court_idDuplicate,
        // start_date: moment(startDate).format('YYYY-MM-DD'),
        // end_date: moment(endDate).format('YYYY-MM-DD'),
        // start_time: '01:00:00',
        // end_time: '02:00:00',
        // registration_cap: registrationCapChoice,
        // team_size: teamSizeChoice,
        // closes_on: moment(closesOnDate).format('YYYY-MM-DD'),
        // ends_at: '08:00:00',
        // pool_id: pool_id,
        season_id: season_id,
        seeding_method_id: seeding_method_id,
        // host_clinic: hostClinicChoice,
        // show_entries: showEntriesChoice,
        // online_pay: onlinePayChoice,
        purse_amount: purseAmountNumber,
        purse_percent: purseAmountPercentNumber,
        // signature: signatureAgreementChoice,
        // scoresheet_id: scoresheet_id,
        // surface_type: surfaceId,
        description: description,
        sub_title: sub_title,
        tournament_pic: file.raw,
        // cover_photo: imageState.raw,
        // tournament_doc: pdfValue.raw,
        // main_contact: main_contact_id,
        // director_id: director_id,
        // org_id: 758,
        pool_template_id: "1",
        // point_template_id: '1',
      });

      if (parseInt(props.match.params.id) !== null) {
        const data = {};
        if (eventDuplicate !== "") {
          // data['first_name'] = firstDuplicateState;
          data.name = eventDuplicate;
        }
        if (registrationCapChoiceDuplicate !== "") {
          data.registration_cap = registrationCapChoiceDuplicate;
        }
        // if (teamSizeChoiceDuplicate !== '') {
        //   data.team_size = teamSizeChoiceDuplicate;
        // }
        if (descriptionDuplicate !== "") {
          data.description = descriptionDuplicate;
        }
        if (sub_title !== "") {
          data.sub_title = sub_title;
        }

        if (court_id !== null) {
          data.court_id = court_id;
        } else {
          setSaveLoading(false);
          setCourtNotFound("Please fill and save information of court");
          return;
        }
        if (seedingMethodChoiceDuplicate !== "") {
          data.seeding_method_id = seeding_method_id;
        }
        if (poolsChoiceDuplicate !== "") {
          data.pool_template_id = pool_id;
        }
        if (seasonChoiceDuplicate !== "") {
          data.season_id = season_id;
        }
        if (director_idDuplicate !== "") {
          data.director_id = director_idDuplicate;
        }
        if (main_contact_idDuplicate !== "") {
          data.main_contact = main_contact_idDuplicate;
        }
        if (purseAmountNumberDuplicate !== "") {
          data.purse_amount = purseAmountNumberDuplicate;
        }
        if (purseAmountNumberPercentDuplicate !== "") {
          data.purse_percent = purseAmountNumberPercentDuplicate;
        }
        if (
          donation1NumberDuplicate != null ||
          donation2NumberDuplicate != null ||
          donation3NumberDuplicate != null ||
          (donation1NumberDuplicate == null &&
            donation2NumberDuplicate == null &&
            donation3NumberDuplicate == null)
        ) {
          data.donation_amounts = `${
            donation1Choice === "" ? null : donation1Choice
          },${donation2Choice === "" ? null : donation2Choice},${
            donation3Choice === "" ? null : donation3Choice
          }`;
        }
        if (donationtextDuplicate !== null) {
          data.donation_text =
            donationtextDuplicate === "" ? null : donationtextDuplicate;
        }
        if (hostClinicChoiceDuplicate !== "") {
          data.host_clinic = hostClinicChoiceDuplicate;
        }
        if (showEntriesChoiceDuplicate !== "") {
          data.show_entries = showEntriesChoiceDuplicate;
        }
        if (onlinePayChoiceDuplicate !== "") {
          data.online_pay = onlinePayChoiceDuplicate;
        }
        if (membershipChoiceDuplicate !== "") {
          data.membership = membershipChoiceDuplicate;
        }
        if (teamListingChoiceDuplicate !== "") {
          data.team_listing = teamListingChoiceDuplicate;
        }
        if (placementPointsChoiceDuplicate !== "") {
          data.point_template_id = point_id;
        }
        if (signatureAgreementChoiceDuplicate !== "") {
          data.signature = signatureAgreementChoiceDuplicate;
        }
        if (scoresheet_idDuplicate !== "") {
          data.scoresheet_id = scoresheet_id;
        }
        if (surfaceTypeChoiceDuplicate !== "") {
          data.surface_type = surfaceId;
        }
        if (startDateDuplicate !== "") {
          data.start_date = moment(startDateDuplicate).format("YYYY-MM-DD");
        }
        if (endDateDuplicate !== "") {
          data.end_date = moment(endDateDuplicate).format("YYYY-MM-DD");
        }
        if (closesOnDateDuplicate !== "") {
          data.closes_on = moment(closesOnDateDuplicate).format("YYYY-MM-DD");
        }
        if (endTimeDuplicate !== "") {
          data.ends_at = moment(endTimeDuplicate).format("HH:mm:ss");
        }
        if (startTime !== "") {
          data.start_time = moment(
            moment(startTime, ["h:mm A"]).format("HH:mm"),
            "HH:mm:ss"
          ).format("HH:mm:ss");
        }

        if (earlyBirdDate !== "") {
          data.early_bird_date = moment(earlyBirdDate).format("YYYY-MM-DD");
        }

        if (colorChange && blue === true) {
          data["color"] = "#0a0080";
        }
        if (colorChange && white === true) {
          data["color"] = "#ffffff";
        }

        if (colorChange && yellow === true) {
          data["color"] = "#fdff00";
        }
        if (colorChange && black === true) {
          data["color"] = "#000000";
        }
        if (colorChange && !white && !blue && !yellow && !black) {
          data["color"] = null;
        }

        if (!saveDisabled) {
          console.log("ei of edit", parseInt(props.match.params.id));
          await editTournament(parseInt(props.match.params.id), {
            data: JSON.stringify(data),
            tournament_pic: file.raw,
            cover_photo: imageState.raw,
            tournament_doc: pdfValue.raw,
          });
          console.log({
            data,
            tournament_pic: file.raw,
            cover_photo: imageState.raw,
            tournament_doc: pdfValue.raw,
            // file: file.raw,
            // imageState: imageState.raw,
            // pdfValue: pdfValue.raw,
            // surfaceTypeChoice,
          });
          // if (eventId !== null) {
          await props.history.push(
            `/eventProfileSaved/${parseInt(props.match.params.id)}`
          );
          // }
        } else {
          setSaveLoading(false);
        }
      }
    }
  };

  // save to list
  const [isGoing, setIsGoing] = useState(false);

  // const handleCheckbox = async (event) => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
  //   var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
  //   if (country === 'USA') {
  //     if (us.test(zip.toString()) || zip === '') {
  //       setCourtNoError(null);
  //       await setIsGoing(value);
  //       if (!isGoing) {
  //         await saveAddressFunction();
  //       }
  //     } else {
  //       setCourtNoError('Enter Valid Zip');
  //     }
  //   } else if (country === 'CA') {
  //     if (can.test(zip.toString()) || zip === '') {
  //       setCourtNoError(null);
  //       await setIsGoing(value);
  //       if (!isGoing) {
  //         await saveAddressFunction();
  //       }
  //     } else {
  //       setCourtNoError('Enter Valid Zip');
  //     }
  //   }
  // };

  const handlesavecourt = async () => {
    var can = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]\d[A-Za-z]\d$/);
    var us = new RegExp(/(^\d{1}\d{1}\d{1}\d{1}\d{1}$)/);
    if (country == "US") {
      if (us.test(zip.toString()) || zip === "") {
        setCourtNoError(null);
        await saveAddressFunction();
      } else {
        setCourtNoError("Enter Valid Zip");
      }
    } else if (country == "CA") {
      if (can.test(zip.toString()) || zip === "") {
        setCourtNoError(null);
        await saveAddressFunction();
      } else {
        setCourtNoError("Enter Valid Zip");
      }
    }
  };

  useEffect(() => {
    console.log(eventId);
  }, [eventId]);

  useEffect(() => {
    console.log("start time", startTime);
    console.log("End Time", endTime);
  }, [startTime, endTime]);

  useEffect(() => {
    var n = pdfValue.preview;
    var u = n.split("-");
    console.log(u[u.length - 1]);
  }, [pdfValue]);

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
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(value);
    setIsGoing2(value);
    setPermanentFlag(value ? false : true);
    // if (!isGoing) {
    //   await saveAddressFunction();
    // }
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(value);
    // // console.log("cb",value)
    // console.log(event.target.checked);
    // await setIsGoing2(!event.target.checked);
    // if (isGoing2 === true) {
    //   await setPermanentFlag(1);
    //   console.log('Permanent flag:', permanentFlag);
    // }
    // if (isGoing2 === false) {
    //   await setPermanentFlag(0);
    //   console.log('Permanent flag:', permanentFlag);
    // }
  };

  const [hamburgerOpen1, setHamburgerOpen1] = useState(false);
  const [hamburgerOpen2, setHamburgerOpen2] = useState(false);

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
  const [teamSizeDropdown, setTeamSizeDropdown] = useState(false);
  const [scoreSheetDropdown, setScoreSheetDropdown] = useState(false);

  //  useEffect(()=>{
  //   console.log("hamburgerOpen2")
  //  },[hamburgerOpen2])
  const [flag, setFlag] = useState(true);
  // useEffect(()=>{
  //   console.log("flag called")
  // },[flag])

  const ref = useRef();
  useOnClickOutside(ref, () => setHamburgerOpen1(false));

  const ref1 = useRef();
  useOnClickOutside(ref1, () => setHamburgerOpen2(false));

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

  const refTeamSize = useRef();
  useOnClickOutside(refTeamSize, () => setTeamSizeDropdown(false));

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

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  function disabledStartDate(current) {
    return current < moment().startOf("day");
  }

  function disabledDate(current) {
    const start = moment("2021-01-01", "YYYY-MM-DD");
    return (
      current < startDate ||
      current === startDate ||
      current < moment().startOf("day")
    );
  }

  function disabledDateRegistration(current) {
    // const start = moment('2021-01-01','YYYY-MM-DD');
    console.log("startDate", getTournamentData.tournament.start_date);
    // return  current> getTournamentData.tournament.start_date;
    return (
      current >= moment(startDate) ||
      current.valueOf() < Date.now() ||
      current === moment(startDate)
    );
  }

  function disabledHours() {
    console.log(parseInt(moment(startTime).format("hh")));
    var time = moment(startTime).format("hh:mm: a");
    var period = time.slice(-2);
    console.log(time, period);

    var hours = [];
    if (period === "am") {
      for (var i = 0; i <= parseInt(moment(startTime).format("hh")); i++) {
        hours.push(i);
      }
    }
    if (period === "pm") {
      hours.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
      for (var i = 0; i <= parseInt(moment(startTime).format("hh")); i++) {
        hours.push(i + 12);
      }
    }
    return hours;
  }

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [ids, setIDs] = useState({
    justifyLeft: false,
    justifyCenter: false,
    bold: false,
    italic: false,
    underline: false,
    insertOrderedList: false,
    createlink: false,
    insertUnorderedList: false,
  });
  useEffect(
    () => {
      console.log(ids);
    },
    [
      ids["justifyLeft"],
      ids["justifyCenter"],
      ids["italic"],
      ids["bold"],
      ids["underline"],
      ids["insertOrderedList"],
    ],
    ids["createlink"],
    ids["insertUnorderedList"]
  );

  const editorFunction = (e) => {
    console.log(e);
    console.log(e.target.dataset["command"]);

    let value = ids;
    const data_commond = e.target.dataset["command"];
    ids[data_commond]
      ? (value[data_commond] = false)
      : (value[data_commond] = true);
    setIDs(value);

    let cmd = e.target.dataset["command"];
    if (cmd === "createlink") {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, null);
    }
  };
  var support = (function () {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
      parser.parseFromString("x", "text/html");
    } catch (err) {
      return false;
    }
    return true;
  })();
  const textToHTML = (str) => {
    // check for DOMParser support
    if (support) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, "text/html");
      return doc.body.innerHTML;
    }

    // Otherwise, create div and append HTML
    var dom = document.createElement("div");
    dom.innerHTML = str;
    return dom;
  };

  const InDom = (str) => {
    document.getElementById("output").innerHTML = textToHTML(str);
  };

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
        <div className="row" style={{ marginTop: 142 }}>
          <div className="col-6 m-auto text-center p-0">
            {fileError !== null && (
              <div
                className="text-left error-message-profile"
                style={{ width: "inherit" }}
              >
                {fileError}
              </div>
            )}
            <div className="row main-width">
              <div className="col-12">
                {/* image and event name */}
                <div className="row">
                  <div
                    className="col-4 p-0 text-left"
                    onClick={() => console.log(file)}
                  >
                    <img
                      onError={(e) => (e.target.src = defaultIcon3)}
                      src={file.preview}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        // objectFit: 'contain',
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="col-8 m-auto p-0"
                    style={{ borderBottom: "1px solid #979797" }}
                  >
                    <MainInputEdit
                      textValue={(e) => {
                        setEventName(e);
                        setEventDuplicate(e);
                      }}
                    />
                  </div>
                </div>
                <div className="pdf-upload add-photo text-left">
                  <label htmlFor="file-input">EDIT PHOTO</label>

                  <input
                    id="file-input"
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/*Subtitle*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Event Subtitle</div>
                {SubTitleError !== null && (
                  <div className="text-left error-message-profile">
                    {SubTitleError}
                  </div>
                )}
                <div className="container">
                  <div className="row shadow-box mt-0" style={{ height: 50 }}>
                    <div className="col-12" style={{ height: 50 }}>
                      <SubTitleEdit
                        // textValue={(e) => setDescription(e)}
                        textValue={(e) => {
                          setSubtitle(e);
                          // setDescriptionDuplicate(e);
                        }}
                      />
                      {/* <TextAreaEdit
                        // textValue={(e) => setDescription(e)}
                           textValue={(e) => {
                          setDescription(e);
                          setDescriptionDuplicate(e);
                        }} /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="container">
                  <div className="row">
                    <div className="d-flex flex-column">
                      {/* {addressError !== null && (
                    <div className="text-left error-message-profile">
                      {addressError}
                    </div>
                    )} */}

                      {courtNotFound !== null && (
                        <div
                          className="text-left error-message-profile"
                          style={{ width: 250 }}
                        >
                          {courtNotFound}
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
                      {addressIdError !== null && addressId === null && (
                        <div
                          className="text-left error-message-profile"
                          style={{ width: 250 }}
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
                      <a
                        id="score-hamburger"
                        className={
                          hamburgerOpen1
                            ? "tri_top_event_visible"
                            : "tri_top_event_hidden"
                        }
                      >
                        <div>
                          <img
                            src={hamburgerIcon}
                            onClick={() =>
                              hamburgerOpen2
                                ? setHamburgerOpen2(false)
                                : setHamburgerOpen2(true)
                            }
                            alt=""
                          />
                          {hamburgerOpen2 && (
                            <span
                              className="tooltiptext2 p-0 dropdown_animation"
                              style={{ top: 29 }}
                            >
                              <ul>
                                <li
                                  onClick={() => {
                                    setHamburgerOpen2(false);
                                    newCourt();
                                    setEditCourt(1);
                                    setNewCourt(true);
                                    setCourtOption(false);
                                  }}
                                >
                                  New Court
                                </li>
                                <li
                                  onClick={() => {
                                    setHamburgerOpen2(false);
                                    setHamburgerOpen1(true);
                                    getAllCourts();

                                    if (court_id !== null) setNewCourt(false);

                                    if (editCourt === 1) {
                                      setNewCourt(false);
                                    }
                                  }}
                                >
                                  Courts
                                </li>
                                <li
                                  onClick={() => {
                                    setStatusofDelete(0);

                                    // setNewCourt(true);
                                    // if(court_id!==null && editCourt===1){
                                    //   //delete api call;
                                    //   setNewCourt(false);

                                    // }
                                  }}
                                >
                                  Delete
                                </li>
                              </ul>
                            </span>
                          )}
                        </div>

                        <div ref={ref}>
                          {/* <img
                            src={hamburgerIcon}
                            alt=""
                            onClick={getAllCourts}
                          /> */}

                          {hamburgerOpen1 && (
                            <span
                              className="tooltiptext2 dropdown_animation"
                              style={{
                                width: 432,
                                height: 280,
                                overflowY: "auto",
                                top: 25,
                              }}
                            >
                              <div
                                className=" container row p-0 m-auto"
                                style={{
                                  border: "1px solid #d8d8d8",
                                  borderRadius: 20,
                                  height: 32,
                                  width: 416,
                                  backgroundColor: "#ffffff",
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
                                    onChange={(e) => {
                                      if (
                                        addressInputValue.current.value !== ""
                                      ) {
                                        addressFilter(e.target.value);
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
                                  backgroundColor: "#d8d8d8",
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
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control address-full"
                  // placeholder={
                  //   getTournamentData &&
                  //   getTournamentData.tournament.court.court_name
                  // }
                  placeholder="Court name"
                  value={courtName}
                  onChange={(e) => {
                    setCourtName(e.target.value);
                    setCourtDuplicate(e.target.value);
                  }}
                  readOnly={editCourt === 1 ? false : true}
                />
                <input
                  type="text"
                  className="form-control address-full"
                  // placeholder={
                  //   getTournamentData &&
                  //   getTournamentData.tournament.court.street_address
                  // }
                  placeholder="Street address"
                  value={streetAddress}
                  onChange={(e) => {
                    setStreetAddress(e.target.value);
                    setStreetAddressDuplicate(e.target.value);
                  }}
                  readOnly={editCourt === 1 ? false : true}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-2 p-0 ">
                      <label className="Country_label">Country</label>
                    </div>
                    <div className="col-3 pl-1 pr-1">
                      <div
                        className="form-control address-full d-flex align-items-center justify-content-between"
                        readOnly={editCourt === 1 ? false : true}
                      >
                        {stateCode}
                        <DropdownModals>
                          <li
                            onClick={() => {
                              setStateCode("USA");
                              setCountry("US");
                            }}
                          >
                            USA
                          </li>
                          <li
                            onClick={() => {
                              setStateCode("CA");
                              setCountry("CA");
                            }}
                          >
                            CANADA
                          </li>
                        </DropdownModals>
                      </div>
                    </div>
                    <div className="col-4 p-0 pr-1">
                      <input
                        type="text"
                        placeholder="zip code"
                        className="form-control address-full"
                        value={zip}
                        onChange={(e) => {
                          setZip(e.target.value);
                          setZipDuplicate(e.target.value);
                        }}
                        readOnly={editCourt === 1 ? false : true}
                      />
                    </div>
                    <div className="col-3 p-0">
                      <input
                        type="text"
                        placeholder="No. of Courts"
                        className="form-control address-full webkit_spinner_none"
                        value={noOfCourts}
                        min="1"
                        max="9999"
                        maxLength="4"
                        onChange={(e) => setNoOfCourts(e.target.value)}
                        readOnly={editCourt === 1 ? false : true}
                        // readOnly={courtOption === false ? true : false}
                      />
                    </div>
                  </div>
                </div>

                {editCourt && !saveNewCourt ? (
                  <div
                    className="lower-back-button"
                    style={{ float: "right", marginTop: "5px" }}
                    onClick={saveUpdatedCourt}
                  >
                    <span className="lower-back-button-text">SAVE COURT</span>
                  </div>
                ) : (
                  ""
                )}

                {saveNewCourt ? (
                  <div
                    className="lower-back-button"
                    style={{ float: "right", marginTop: "5px" }}
                    onClick={handlesavecourt}
                  >
                    <span className="lower-back-button-text">SAVE COURT</span>
                  </div>
                ) : (
                  ""
                )}

                {editCourt ? (
                  <div className="d-flex flex-column">
                    <div className="text-left mt-2">
                      <label
                        className="DAS1checkbox DMensLabel m-0"
                        htmlFor="AgeRangeInput2"
                        // style={{marginTop:20}}
                      >
                        <input
                          className="form-control"
                          id="AgeRangeInput1"
                          name="isGoing2"
                          type="checkbox"
                          value="open"
                          checked={isGoing2}
                          onChange={handleCheckbox2} // Prop: Puts data into state
                          // checked={this.props.selectedAgeRange[0].checked}
                        />
                        <span className="DAS1checkmark"></span>
                        <span
                          className="DAS1label "
                          style={{ color: "#9b9b9b", fontSize: 10 }}
                        >
                          Temporary Courts
                        </span>
                      </label>
                      {/* <label className="DAS1checkbox DMensLabel" htmlFor="AgeRangeInput">
                      <input
                        className="form-control"
                        id="AgeRangeInput1"
                        name="Open"
                        type="checkbox"
                        value="Open"
                        onChange={handleCheckbox2} // Prop: Puts data into state
                        // checked={this.props.selectedAgeRange[0].checked}
                      />
                      <span className="DAS1checkmark"></span>
                      <span className="DAS1label " style={{color:"#9b9b9b", fontSize:10,}}>Save as Template</span>
                    </label> */}
                    </div>

                    {/* <div className="text-left mt-2">
                      <label
                        className="DAS1checkbox DMensLabel m-0"
                        htmlFor="AgeRangeInput"
                      >
                        <input
                          className="form-control m-0"
                          id="AgeRangeInput1"
                          name="isGoing"
                          type="checkbox"
                          value="open"
                          checked={isGoing}
                          onChange={handleCheckbox}
                          // onClick={notify}
                        />
                        <span className="DAS1checkmark"></span>
                        <span className="DAS1label ">Save to List</span>
                      </label>
                    </div> */}
                  </div>
                ) : (
                  ""
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

              {/* Date */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Date</div>
                {dateError !== null && (
                  <div className="text-left error-message-profile">
                    {dateError}
                  </div>
                )}
                {/* start */}
                <div className="container">
                  <div className="row shadow-box mt-0">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 font input-text">
                      Start
                    </div>
                    {/* <div className="col-6 p-0 text-right box-shadow-text m-auto">
                      {startDate}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <CalenderComponent
                        date={(value) => setStartDate(value)}
                      />
                    </div> */}
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{
                          width: 110,
                          color: "#747474",
                          cursor: "pointer",
                        }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 input-styling antd_styling"
                        allowClear={false}
                        value={moment(startDate)}
                        // onChange={(e) =>{setStartDate(e);
                        //   // setStartDateDuplicate(e);
                        // }}
                        onChange={(e) => {
                          setStartDate(e);
                          setStartDateDuplicate(e);
                          setEndDate(e);
                          setEndDateDuplicate(e);
                        }}
                        placeholder={startDate}
                        disabledDate={disabledStartDate}
                      />
                    </div>
                  </div>
                </div>
                {/* End */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      End
                    </div>
                    {/* <div className="col-6 p-0 text-right box-shadow-text m-auto">
                      {endDate}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <CalenderComponent date={(value) => setEndDate(value)} />
                    </div> */}
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{ width: 110, cursor: "pointer" }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 antd_styling"
                        allowClear={false}
                        value={moment(endDate)}
                        onChange={(e) => {
                          setEndDate(e);
                          setEndDateDuplicate(e);
                        }}
                        placeholder={endDate}
                        disabledDate={disabledDate}
                      />
                    </div>
                  </div>
                </div>
                {/* closes on */}
                <div className="container mt-1">
                  <div className="row shadow-box mt-0">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 font input-text">
                      Closes On
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <DatePicker
                        format="MM/DD/YYYY"
                        style={{
                          width: 110,
                          color: "#747474",
                          cursor: "pointer",
                        }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 input-styling antd_styling "
                        allowClear={false}
                        value={moment(closesOnDate)}
                        // onChange={(e) => setStartDate(e)}
                        onChange={(e) => {
                          setClosesOnDate(e);
                          setClosesOnDateDuplicate(e);
                          setEarlyBirdDate(moment(e).subtract(5, "d"));
                          earlyBirdDateStateFun(moment(e).subtract(5, "d"));
                        }}
                        placeholder={closesOnDate}
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
                        ? "red_highlight_event row shadow-box"
                        : "row shadow-box"
                    }
                  >
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={calenderIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() =>
                        console.log(
                          moment(earlyBirdDate)
                            .subtract(5, "d")
                            .format("YYYY-MM-DD")
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
                          color: "#747474",
                          cursor: "pointer",
                        }}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 input-styling date_picker"
                        allowClear={false}
                        value={moment(earlyBirdDate)}
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
                <div className="text-left address-title">Time</div>
                {timeError !== null && (
                  <div className="text-left error-message-profile">
                    {/* {timeError} */}
                  </div>
                )}
                {/* start */}
                <div className="container">
                  <div
                    className={
                      timeError
                        ? "red_highlight_event row shadow-box"
                        : "row shadow-box"
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
                        style={{ width: 90, cursor: "pointer" }}
                        bordered={false}
                        suffixIcon={<img src={downArrow} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        value={moment(
                          moment(startTime, ["h:mm A"]).format("HH:mm"),
                          "HH:mm:ss"
                        )}
                        onChange={(e) => {
                          setStartTime(e);
                          console.log(moment(e).format("HH:mm:ss"));
                        }}
                        placeholder=""
                        popupStyle={{ textAlign: "end" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Division */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Division</div>
                {/* start */}
                {getTournamentData !== null &&
                  getTournamentData.tournament.templateDtl !== null &&
                  getTournamentData.tournament.templateDtl.map((obj) => {
                    return obj.division.map((div) => {
                      return (
                        <>
                          <div className="container">
                            <div
                              className="row shadow-box mt-0"
                              style={{ overflow: "hidden" }}
                            >
                              <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                <img
                                  src={trophy}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-7 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 text-truncate pr-3">
                                Division{" "}
                                {obj.hasOwnProperty("templateName") &&
                                obj.templateName === "null"
                                  ? ""
                                  : obj.templateName}
                              </div>
                              <div
                                className="col-4 p-0 text-right m-auto box-shadow-text text-truncate"
                                id="division_overflow"
                                style={{ display: "inline" }}
                              >
                                {div.div_name}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    });
                  })}

                <div className="container">
                  <div className="row shadow-box mt-0">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={trophy} alt="" className="img-fluid" />
                    </div>
                    <div className="col-3 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Division
                    </div>
                    <div className="col-7 p-0 text-right m-auto pr-1 box-shadow-text">
                      {selectedTemplateName}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <MasterForm eventID={parseInt(props.match.params.id)} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Registration</div>
                {registrationError !== null && (
                  <div className="text-left error-message-profile">
                    {registrationError}
                  </div>
                )}
                {/* Registration Cap */}
                <ShadowContainer
                  srcImg={addNewIcon}
                  text="Registration Cap"
                  stateData={registrationCapChoice}
                  mainClasses="row shadow-box mt-0"
                >
                  <SelectOptions
                    // yesChoice={() => setRegistrationCapChoice('yes')}
                    yesChoice={(e) => {
                      setRegistrationCapChoice("yes");
                      setRegistrationCapChoiceDuplicate("yes");
                    }}
                    noChoice={(e) => {
                      setRegistrationCapChoice("no");
                      setRegistrationCapChoiceDuplicate("no");
                    }}
                  />
                </ShadowContainer>
                {/* Team Size */}
                {/* <ShadowContainer
                  srcImg={playersIcon}
                  text="Team Size"
                  stateData={teamSizeChoice}
                  mainClasses="row shadow-box"
                >
                  <a href="#/" id="score-hamburger" ref={refTeamSize} onClick={()=>setTeamSizeDropdown(!teamSizeDropdown)}>
                    <div>
                      <img src={downArrow} alt="" />
                      {teamSizeDropdown && (
                      <span>
                        <ul>
                          <li onClick={() => {
                            setTeamSizeChoice(4);
                          setTeamSizeChoiceDuplicate(4);}}
                          >4</li>
                          <li onClick={() => 
                          {setTeamSizeChoice(6);
                          setTeamSizeChoiceDuplicate(6);}}
                          >6</li>
                          <li onClick={() => 
                          {setTeamSizeChoice(8);
                          setTeamSizeChoiceDuplicate(8);
                          }}>8</li>
                          <li onClick={() => {setTeamSizeChoice(10);
                          setTeamSizeChoiceDuplicate(10);
                          }}>10</li>
                        </ul>
                      </span>
                      )}
                    </div>
                  </a>  
                  <DropdownModals>
                  {teamSizeMap !== null &&
                      teamSizeMap.map((data) => (
                        <li
                          onClick={() => {setTeamSizeChoice(data);setTeamSizeChoiceDuplicate(data);}}
                          key={data}
                        >
                          {data}
                        </li>
                      ))
                      }
                  </DropdownModals>
                </ShadowContainer> */}
                {/* Closes On */}
                {/* <ShadowContainer
                  srcImg={calenderIcon}
                  text="Start"
                  stateData={closesOnDate}
                  mainClasses="row shadow-box"
                >
                  <CalenderComponent date={(value) => setClosesOnDate(value)} />
                </ShadowContainer> */}

                {/* Ends At */}
                {/* <ShadowContainer
                  srcImg={durationIcon}
                  text="End"
                  stateData={endsAtTime}
                  mainClasses="row shadow-box"
                >
                  <TimeComponent time={(value) => setEndsAtTime(value)} />
                </ShadowContainer> */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={clock} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Ends At
                    </div>
                    <div className="col-7 p-0 text-right box-shadow-text m-auto pr-1">
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        style={{ width: 90, cursor: "pointer" }}
                        bordered={false}
                        suffixIcon={<img src={downArrow} alt="" />}
                        className="pr-0 text-uppercase p-0"
                        allowClear={false}
                        id="antd_styling"
                        // value={moment(moment(endsAtTime).format("h:mm A"))}
                        // onChange={(e) => setEndTime(e)}
                        onChange={(e) => {
                          setEndTime(e);
                          setEndTimeDuplicate(e);
                          setEndsAtTime(e);
                        }}
                        // defaultValue={endsAtTime}
                        // defaultValue={moment('00:00:00','HH:mm:ss')}
                        value={moment(
                          moment(endsAtTime, ["h:mm A"]).format("HH:mm"),
                          "HH:mm:ss"
                        )}
                        // placeholder={endsAtTime}
                      />
                      {console.log("endsAtTime", endsAtTime)}
                      {/* {endTime} */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Details</div>
                {detailsError !== null && (
                  <div className="text-left error-message-profile">
                    {detailsError}
                  </div>
                )}
                {/* Pools*/}
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
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {eventDropdownData !== null &&
                              eventDropdownData.pools.map((data) => (
                                <li
                                  onClick={() => {
                                    setPoolsChoice(data.name);
                                    setPoolsChoiceDuplicate(data.name);
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
                {/* Season */}
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
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {eventDropdownData !== null &&
                              eventDropdownData.seasons.map((data) => (
                                <li
                                  onClick={() => {
                                    setSeasonChoice(data.name);
                                    setSeasonChoiceDuplicate(data.name);
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
                {/* Placement Points */}
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
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {eventDropdownData !== null &&
                              eventDropdownData.points.map((data) => (
                                <li
                                  onClick={() => {
                                    setPlacementPointsChoice(data.name);
                                    setPlacementPointsChoiceDuplicate(
                                      data.name
                                    );
                                    setPoint_id(data.id);
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
                {/* Seeding Method */}
                <ShadowContainer
                  srcImg={playTypeIcon}
                  text="Seeding Method"
                  stateData={seedingMethodChoice}
                  mainClasses="row shadow-box"
                >
                  <a
                    id="score-hamburger"
                    ref={refSeeding}
                    onClick={() => setSeedingDropdown(!seedingDropdown)}
                    className={
                      seedingDropdown
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {eventDropdownData !== null &&
                              eventDropdownData.seeding_method.map((data) => (
                                <li
                                  onClick={() => {
                                    setSeedingMethodChoice(data.name);
                                    setSeedingMethodChoiceDuplicate(data.name);
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
                {/* Surface Type */}
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
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            <li
                              onClick={() => {
                                setSurfaceTypeChoice("Sand");
                                setSurfaceTypeChoiceDuplicate("Sand");
                                setSurfaceId(1);
                              }}
                            >
                              Sand
                            </li>
                            <li
                              onClick={() => {
                                setSurfaceTypeChoice("Grass");
                                setSurfaceTypeChoiceDuplicate("Grass");

                                setSurfaceId(2);
                              }}
                            >
                              Grass
                            </li>
                            <li
                              onClick={() => {
                                setSurfaceTypeChoice("Other");
                                setSurfaceTypeChoiceDuplicate("Other");

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
                {/* Host Clinic */}
                <ShadowContainer
                  srcImg={lightBulbIcon}
                  text="Host Clinic"
                  stateData={hostClinicChoice}
                  mainClasses="row shadow-box"
                >
                  <SelectOptions
                    yesChoice={() => {
                      setHostClinicChoice("yes");
                      setHostClinicChoiceDuplicate("yes");
                    }}
                    // yesChoice={() => setHostClinicChoiceDuplicate('yes')}
                    noChoice={() => {
                      setHostClinicChoice("no");
                      setHostClinicChoiceDuplicate("no");
                    }}
                    // noChoice={() => setHostClinicChoiceDuplicate('no')}
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
                    yesChoice={() => {
                      setShowEntriesChoice("yes");
                      setShowEntriesChoiceDuplicate("yes");
                    }}
                    // yesChoice={() => setShowEntriesChoiceDuplicate('yes')}
                    noChoice={() => {
                      setShowEntriesChoice("no");
                      setShowEntriesChoiceDuplicate("no");
                    }}
                    // noChoice={() => setShowEntriesChoiceDuplicate('no')}
                  />
                </ShadowContainer>
                {/* Allow Membership */}
                <ShadowContainer
                  srcImg={surfaceIcon}
                  text="Team Listing"
                  stateData={
                    teamListingChoice === 1
                      ? "By Ranking Points"
                      : "By Registration Date"
                  }
                  mainClasses="row shadow-box"
                >
                  <a
                    id="score-hamburger"
                    ref={refMembership}
                    onClick={() => setTeamListingDropdown(!teamListingDropdown)}
                    className={
                      teamListingDropdown
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            <li
                              onClick={() => {
                                setTeamListingChoice(1);
                                setTeamListingChoiceDuplicate(1);
                                // setSurfaceId(1);
                              }}
                            >
                              By Ranking Points
                            </li>
                            <li
                              onClick={() => {
                                setTeamListingChoice(2);
                                setTeamListingChoiceDuplicate(2);

                                // setSurfaceId(2);
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

              {/* Contact */}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Contact</div>
                {contactError !== null && (
                  <div className="text-left error-message-profile">
                    {contactError}
                  </div>
                )}
                {/*Director*/}
                <div className="container">
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
                          directorDropdown
                            ? "tri_top_event_visible"
                            : "tri_top_event_hidden"
                        }
                      >
                        <div ref={refDirector}>
                          <img
                            src={downArrow}
                            alt=""
                            onClick={() =>
                              setDirectorDropdown(!directorDropdown)
                            }
                          />
                          {directorDropdown && (
                            <span
                              className="tooltiptext2 dropdown_animation"
                              style={{
                                width: 432,
                                height: 280,
                                overflowY: "auto",
                                top: 25,
                              }}
                            >
                              <div
                                className=" container row p-0 m-auto"
                                style={{
                                  border: "1px solid #d8d8d8",
                                  borderRadius: 20,
                                  height: 32,
                                  width: 416,
                                  backgroundColor: "#ffffff",
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
                                    className=" form-control p-0"
                                    onChange={(e) => {
                                      if (
                                        directorInputValue.current.value !== ""
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
                                  backgroundColor: "#d8d8d8",
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
                <div className="container">
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
                          mainContactDropdown
                            ? "tri_top_event_visible"
                            : "tri_top_event_hidden"
                        }
                      >
                        <div ref={refMainContact}>
                          <img
                            src={downArrow}
                            alt=""
                            onClick={() =>
                              setMainContactDropdown(!mainContactDropdown)
                            }
                          />
                          {mainContactDropdown && (
                            <span
                              className="tooltiptext2 dropdown_animation"
                              style={{
                                width: 432,
                                height: 280,
                                overflowY: "auto",
                                top: 25,
                              }}
                            >
                              <div
                                className=" container row p-0 m-auto"
                                style={{
                                  border: "1px solid #d8d8d8",
                                  borderRadius: 20,
                                  height: 32,
                                  width: 416,
                                  backgroundColor: "#ffffff",
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
                                    className=" form-control p-0"
                                    onChange={(e) => {
                                      if (
                                        contactInputValue.current.value !== ""
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
                                  backgroundColor: "#d8d8d8",
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
                <div className="text-left address-title">Finance</div>
                {financeError !== null && (
                  <div className="text-left error-message-profile">
                    {financeError}
                  </div>
                )}
                {/*Online Pay*/}
                <ShadowContainer
                  srcImg={emailIcon}
                  text="Online Pay"
                  stateData={onlinePayChoice}
                  mainClasses="row shadow-box mt-0"
                >
                  <SelectOptions
                    yesChoice={() => {
                      setOnlinePayChoice("yes");
                      setOnlinePayChoiceDuplicate("yes");
                    }}
                    // yesChoice={() => setOnlinePayChoiceDuplicate('yes')}
                    noChoice={() => {
                      setOnlinePayChoice("no");
                      setOnlinePayChoiceDuplicate("no");
                    }}
                    // noChoice={() => setOnlinePayChoiceDuplicate('no')}
                  />
                </ShadowContainer>
                {/* Purse Amount */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Purse Amount
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      <NumberFormat
                        pattern={"[0-9]*"}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={"$"}
                        decimalScale={2}
                        className={`form-control p-0`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, "")
                            .replace("$", "");
                          setPurseAmountChoice(Number(num));
                          setPurseAmountChoiceDuplicate(Number(num));
                          setPurseAmountNumber(Number(num));
                          setPurseAmountNumberDuplicate(Number(num));
                          console.log(Number(num));
                        }}
                        value={purseAmountChoice}
                        style={{
                          height: "inherit",
                          direction: "rtl",
                          fontSize: 12,
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => setPurseAmountChoice("")}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Purse Amount Percent */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      Purse Amount Percent
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      <NumberFormat
                        pattern={"[0-9]*"}
                        displayType="input"
                        // thousandSeparator={true}
                        maxLength="4"
                        placeholder="%"
                        suffix={"%"}
                        decimalScale={2}
                        // isAllowed={({ floatValue }) =>{
                        // console.log(floatValue)
                        //  return (Number(floatValue)<= 100 && Number(floatValue) >= 0
                        //   || floatValue=='')
                        // }
                        // }

                        className={`form-control p-0`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, "")
                            .replace("%", "");
                          if (
                            num.length != "" ||
                            (Number(num) <= 100 && num === "0")
                          ) {
                            setPurseAmountPercentChoice(Number(num));
                            setPurseAmountPercentChoiceDuplicate(Number(num));
                            setPurseAmountPercentNumber(Number(num));
                            setPurseAmountNumberPercentDuplicate(Number(num));
                          } else {
                            setPurseAmountPercentChoice("");
                            setPurseAmountPercentChoiceDuplicate("");
                            setPurseAmountPercentNumber("");
                            setPurseAmountNumberPercentDuplicate("");
                          }

                          console.log(Number(num));
                        }}
                        value={purseAmountPercentChoice + "%"}
                        style={{
                          height: "inherit",
                          direction: "rtl",
                          fontSize: 12,
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => setPurseAmountPercentChoice("")}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation Text */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={emailIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() => console.log(donationtextDuplicate)}
                    >
                      Donation Text
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-0 pr-0">
                      <input
                        type="text"
                        name=""
                        id=""
                        maxLength={255}
                        value={donationtext}
                        onChange={(e) => {
                          setDonationText(e.target.value);
                          setDonationTextDuplicate(e.target.value);
                        }}
                        placeholder="Enter Donation Text here."
                        className="w-100 text-right donation-text"
                        style={{ border: 0, outline: "none" }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => setDonationText("")}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation 1 */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() => console.log(donation1NumberDuplicate)}
                    >
                      Donation 1
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      <NumberFormat
                        pattern={"[0-9]*"}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={"$"}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, "")
                            .replace("$", "");
                          setDonation1Choice(Number(num));
                          setDonation1NumberDuplicate(Number(num));
                          console.log(Number(num));
                        }}
                        value={donation1Choice}
                        style={{
                          height: "inherit",
                          // direction: 'rtl',
                          fontSize: 12,
                          textAlign: "right",
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => {
                          setDonation1Choice("");
                          setDonation1NumberDuplicate(null);
                        }}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation 2 */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() => console.log(donation2NumberDuplicate)}
                    >
                      Donation 2
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      <NumberFormat
                        pattern={"[0-9]*"}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={"$"}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, "")
                            .replace("$", "");
                          setDonation2Choice(Number(num));
                          setDonation2NumberDuplicate(Number(num));
                          console.log(Number(num));
                        }}
                        value={donation2Choice}
                        style={{
                          height: "inherit",
                          // direction: 'rtl',
                          fontSize: 12,
                          textAlign: "right",
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => {
                          setDonation2Choice("");
                          setDonation2NumberDuplicate(null);
                        }}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation 3 */}
                <div className="container">
                  <div className="row shadow-box">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                      <img src={purseIcon} alt="" className="img-fluid" />
                    </div>
                    <div
                      className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2"
                      onClick={() => console.log(donation3NumberDuplicate)}
                    >
                      Donation 3
                    </div>
                    <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                      <NumberFormat
                        pattern={"[0-9]*"}
                        displayType="input"
                        thousandSeparator={true}
                        placeholder="$"
                        prefix={"$"}
                        decimalScale={2}
                        className={`form-control p-0 event-number-input`}
                        name="leagueCost"
                        onChange={(e) => {
                          const num = e.target.value
                            .replace(/\,/g, "")
                            .replace("$", "");
                          setDonation3Choice(Number(num));
                          setDonation3NumberDuplicate(Number(num));
                          console.log(Number(num));
                        }}
                        value={donation3Choice}
                        style={{
                          height: "inherit",
                          // direction: 'rtl',
                          fontSize: 12,
                          textAlign: "right",
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 text-right m-auto pr-1">
                      <img
                        src={clearIcon}
                        onClick={() => {
                          setDonation3Choice("");
                          setDonation3NumberDuplicate(null);
                        }}
                        alt=""
                        className="img-fluid mb-1 mr-1"
                      />
                    </div>
                  </div>
                </div>
                {/* Minimum Membership Requirement */}
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
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
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
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            <li
                              onClick={() => {
                                setMembershipChoice("gold");
                                setMembershipChoiceDuplicate("gold");
                                // setSurfaceId(1);
                              }}
                            >
                              gold
                            </li>
                            <li
                              onClick={() => {
                                setMembershipChoice("silver");
                                setMembershipChoiceDuplicate("silver");

                                // setSurfaceId(2);
                              }}
                            >
                              silver
                            </li>
                            <li
                              onClick={() => {
                                setMembershipChoice("bronze");
                                setMembershipChoiceDuplicate("bronze");

                                // setSurfaceId(3);
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

              {/* Documents*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Documents</div>
                {documentsError !== null && (
                  <div className="text-left error-message-profile">
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
                    yesChoice={() => {
                      setSignatureAgreementChoice("yes");
                      setSignatureAgreementChoiceDuplicate("yes");
                    }}
                    // yesChoice={() => setSignatureAgreementChoiceDuplicate('yes')}
                    noChoice={() => {
                      setSignatureAgreementChoice("no");
                      setSignatureAgreementChoiceDuplicate("no");
                    }}
                    // noChoice={() => setSignatureAgreementChoiceDuplicate('no')}
                  />
                </ShadowContainer>
                {/* Score Sheet */}
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
                        ? "tri_top_event_visible"
                        : "tri_top_event_hidden"
                    }
                  >
                    <div>
                      <img src={downArrow} alt="" />
                      {scoreSheetDropdown && (
                        <span
                          style={{
                            marginTop: 7,
                            right: -10,
                            maxHeight: 280,
                            overflowY: "auto",
                          }}
                          className="dropdown_animation"
                        >
                          <ul>
                            {eventDropdownData !== null &&
                              eventDropdownData.scoresheets.map((data) => (
                                <li
                                  onClick={() => {
                                    setScoreSheetChoice(data.name);
                                    setScoreSheetChoiceDuplicate(data.name);
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
                      {pdfValue.raw !== ""
                        ? pdfValue.raw.name
                        : pdfValue.preview}
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
                  style={{ fontWeight: "300" }}
                >
                  Description
                </div>

                {/* <div className="text-left"  id="htmls"></div>  */}

                <div className="toolbar">
                  <ul className="tool-list">
                    <li className="tool">
                      <button
                        style={{ color: ids["justifyLeft"] ? "grey" : "black" }}
                        type="button"
                        data-command="justifyLeft"
                        onClick={(e) => editorFunction(e)}
                        className="tool--btn"
                      >
                        <i
                          data-command="justifyLeft"
                          className=" fas fa-align-left"
                        ></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        type="button"
                        style={{
                          color: ids["justifyCenter"] ? "grey" : "black",
                        }}
                        onClick={(e) => editorFunction(e)}
                        data-command="justifyCenter"
                        className="tool--btn"
                      >
                        <i
                          data-command="justifyCenter"
                          className=" fas fa-align-center"
                        ></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        style={{ color: ids["bold"] ? "grey" : "black" }}
                        type="button"
                        onClick={(e) => editorFunction(e)}
                        data-command="bold"
                        className="tool--btn"
                      >
                        <i data-command="bold" className=" fas fa-bold"></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        type="button"
                        style={{ color: ids["italic"] ? "grey" : "black" }}
                        onClick={(e) => editorFunction(e)}
                        data-command="italic"
                        className="tool--btn"
                      >
                        <i data-command="italic" className=" fas fa-italic"></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        onClick={(e) => editorFunction(e)}
                        type="button"
                        style={{ color: ids["underline"] ? "grey" : "black" }}
                        data-command="underline"
                        className="tool--btn"
                      >
                        <i
                          data-command="underline"
                          className=" fas fa-underline"
                        ></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        onClick={(e) => editorFunction(e)}
                        type="button"
                        style={{
                          color: ids["insertOrderedList"] ? "grey" : "black",
                        }}
                        data-command="insertOrderedList"
                        className="tool--btn"
                      >
                        <i
                          data-command="insertOrderedList"
                          className=" fas fa-list-ol"
                        ></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        onClick={(e) => editorFunction(e)}
                        type="button"
                        style={{
                          color: ids["insertUnorderedList"] ? "grey" : "black",
                        }}
                        data-command="insertUnorderedList"
                        className="tool--btn"
                      >
                        <i
                          data-command="insertUnorderedList"
                          className=" fas fa-list-ul"
                        ></i>
                      </button>
                    </li>
                    <li className="tool">
                      <button
                        onClick={(e) => editorFunction(e)}
                        type="button"
                        style={{ color: ids["createlink"] ? "grey" : "black" }}
                        data-command="createlink"
                        className="tool--btn"
                      >
                        <i
                          data-command="createlink"
                          className=" fas fa-link"
                        ></i>
                      </button>
                    </li>
                  </ul>

                  {descriptionError !== null && (
                    <div className="text-left error-message-profile">
                      {descriptionError}
                    </div>
                  )}
                  <div className="container " style={{ padding: "0px" }}>
                    <div
                      className="row shadow-box mt-0"
                      style={{ height: 300 }}
                    >
                      <div
                        className="col-12"
                        id="output"
                        style={{ maxHeight: 300, overflow: "scroll" }}
                        onInput={(e) => {
                          let s = document.getElementById("output").innerHTML;
                          console.log(s);
                          console.log(e.target.innerHTML);

                          setDescription(s);
                          setDescriptionDuplicate(s);
                        }}
                        contenteditable="true"
                      ></div>

                      {/* <div className="col-12" >
                      <TextEditor 
                        values={description}
                        textValue={(e) => {
                          setDescription(e);
                          setDescriptionDuplicate(e);
                        }}
                      />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Palette*/}
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Color Palette</div>
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
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">
                      Choose Color
                    </div>
                    <div className="col-7">
                      <div className="row p-0 m-0">
                        <div className="col p-0 m-0">
                          <div class="color-box white"></div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={white}
                            onChange={() => {
                              setColorChange(true);
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
                              setColorChange(true);
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
                              setColorChange(true);
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
                              setColorChange(true);
                              setBlack(!black);
                              setYellow(false);
                              setBlue(false);
                              setWhite(false);
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
                      Event Photo Corner
                    </div>
                    <div className="col-6 p-0 text-right box-shadow-text m-auto">
                      {imageState.raw !== ""
                        ? imageState.raw.name
                        : imageState.preview}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer>
          <div className="m-0 col-auto ml-auto mt-3">
            <div className="lower-back-button-cancel" onClick={onOpenModal}>
              <span className="lower-back-button-text">CANCEL</span>
            </div>
          </div>
          <div
            className="m-0 col-auto mt-3"
            onClick={onSave}
            style={{ position: "relative" }}
          >
            {/* <div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Creating Manager...</div></div> */}
            {saveLoading ? (
              editEventError === null ? (
                <div className="on_save_message d-flex justify-content-center align-items-center">
                  <LoadingSpinner />
                  <div className="pl-2">Editing Event...</div>
                </div>
              ) : (
                <div className="on_save_error">
                  {editEventError && editEventError.message}
                </div>
              )
            ) : (
              <></>
            )}
            <div className="lower-back-button">
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
              boxShadow: "0 1 2 0 rgba(0,0,0,0.2",
              margin: 0,
              padding: 0,
            },
          }}
        >
          <div
            className="text-center"
            style={{
              marginTop: 62,
              fontFamily: "Futura",
              fontSize: 14,
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              color: "#4a4a4a",
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
              fontFamily: "Futura",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              color: "#9b9b9b",
            }}
          >
            All changes will not be saved and progress will be lost.
          </p>
          <div
            onKeyDown={(e) => {
              console.log(e.keyCode);

              if (e.keyCode === 13 && !flag) {
                console.log("dash");
                props.history.goBack();
                return;
              }
              if (e.keyCode === 13 && flag) {
                console.log("Close model");

                return onCloseModal();
              }
              if (e.keyCode === 9) {
                flag ? setFlag(false) : setFlag(true);
                return;
              }
            }}
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
                  border: "1px solid yellow",
                  borderRadius: 15,
                  width: 112,
                  height: 24,
                  fontSize: 10,
                  backgroundColor: flag ? "#ffd420" : "#ffffff",
                  outline: 0,
                  color: "#4a4a4a",
                }}
              >
                NO, CONTINUE
              </button>
              <button
                className="btn-sm pb-1 ml-3"
                id="yellow-button-hover"
                onClick={() => props.history.goBack()}
                style={{
                  border: "1px solid yellow",
                  borderRadius: 15,
                  width: 112,
                  height: 24,
                  fontSize: 10,
                  backgroundColor: !flag ? "#ffd420" : "#ffffff",
                  outline: 0,
                  color: "#4a4a4a",
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

export default NewEventProfileEdit;
