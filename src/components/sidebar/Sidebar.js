import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import headerLogo from "../../assets/images/logo.svg";
import dashboardMeter from "../../assets/images/meter.svg";
import managerSuitcase from "../../assets/images/suitcase.svg";
import membershipMembers from "../../assets/images/membership.svg";
import playerIcon from "../../assets/images/player.svg";
import eventsIcon from "../../assets/images/events.svg";
import fileIcon from "../../assets/images/icons8-folder.svg";
import registrationBall from "../../assets/images/ball.svg";
import broadCastScores from "../../assets/images/broadcast.svg";
import documentIcon from "../../assets/images/document.svg";
import paymentsIcon from "../../assets/images/refunds.svg";
import gearIcon from "../../assets/images/gear.svg";
import exitIcon from "../../assets/images/icon-sidemenu-exit.svg";
import stripeIcon from "../../assets/images/stripe.svg";
import { Link, withRouter } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import useLocalStorage from "react-use-localstorage";
import MembershipNone from "../../components/MembershipNone";
import PaymentNone from "../../components/PaymentNone";
import sidebarLogo from "../../assets/images/sidebarLogo.png";
import jwt from "jsonwebtoken";

const Sidebar = (props) => {
  const authContext = useContext(AuthContext);
  const {
    logout,
    setSideBarDisabled,
    sidebarDisabled,
    setDisabledMessage,
    sidebarMax,
    role_id,
  } = authContext;

  const [dashboardActive, setDashboardActive] = useLocalStorage("dash", true);
  const [managersActive, setManagersActive] = useState(false);
  const [membersActive, setMembersActive] = useState(false);
  const [playersActive, setPlayersActive] = useState(false);
  const [eventsActive, setEventsActive] = useState(false);
  const [registrationActive, setRegistrationActive] = useState(false);
  const [scoresActive, setScoresActive] = useState(false);
  const [tournamentActive, setTournamentActive] = useState(false);
  const [uploadedFilesActive, setUploadedFilesActive] = useState(false);
  const [templatesActive, setTemplatesActive] = useState(false);
  const [paymentsActive, setPaymentsActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [stripeActive, setStripeActive] = useState(false);

  // useEffect(() => {
  //   console.log(localStorage.getItem('dashboard'));
  // });

  const dashBoardClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(true));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(true);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setUploadedFilesActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const managersClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(true));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(true);
    setMembersActive(false);
    setPlayersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const membersClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(true));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setMembersActive(true);
    setPlayersActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const playersClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(true));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(true);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const eventsClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(true));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setPlayersActive(false);
    setEventsActive(true);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const registrationClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(true));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setRegistrationActive(true);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const scoresClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(true));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setRegistrationActive(false);
    setScoresActive(true);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };
  const uploadedFilesClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(true));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(true);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };
  const tournamentClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(true));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTournamentActive(true);
    setUploadedFilesActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const templatesClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(true));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(true);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const paymentsClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(true));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(true);
    setSettingsActive(false);
    setStripeActive(false);
  };

  const settingsClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(true));
    localStorage.setItem("stripe", JSON.stringify(false));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setPlayersActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(true);
    setStripeActive(false);
  };

  const stripeClicked = () => {
    localStorage.setItem("dashboard", JSON.stringify(false));
    localStorage.setItem("managers", JSON.stringify(false));
    localStorage.setItem("members", JSON.stringify(false));
    localStorage.setItem("players", JSON.stringify(false));
    localStorage.setItem("tournament", JSON.stringify(false));
    localStorage.setItem("UploadedFiles", JSON.stringify(false));
    localStorage.setItem("events", JSON.stringify(false));
    localStorage.setItem("registration", JSON.stringify(false));
    localStorage.setItem("scores", JSON.stringify(false));
    localStorage.setItem("templates", JSON.stringify(false));
    localStorage.setItem("payments", JSON.stringify(false));
    localStorage.setItem("settings", JSON.stringify(false));
    localStorage.setItem("stripe", JSON.stringify(true));
    setDashboardActive(false);
    setManagersActive(false);
    setMembersActive(false);
    setPlayersActive(false);
    setTournamentActive(false);
    setUploadedFilesActive(false);
    setEventsActive(false);
    setRegistrationActive(false);
    setScoresActive(false);
    setTemplatesActive(false);
    setPaymentsActive(false);
    setSettingsActive(false);
    setStripeActive(true);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("dashboard")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "4px solid #ffd420";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#4a4a4a";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("managers")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "4px solid #ffd420";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#4a4a4a";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }

    if (JSON.parse(localStorage.getItem("members")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '4px solid #ffd420';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#4a4a4a';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("players")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "4px solid #ffd420";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#4a4a4a";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("events")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "4px solid #ffd420";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#4a4a4a";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("registration")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "4px solid #ffd420";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#4a4a4a";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("scores")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "4px solid #ffd420";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#4a4a4a";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("tournament")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";

      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "4px solid #ffd420";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#4a4a4a";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";

      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("UploadedFiles")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";

      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "4px solid #ffd420";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#4a4a4a";

      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("templates")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "4px solid #ffd420";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#4a4a4a";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("payments")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "4px solid #ffd420";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#4a4a4a";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(localStorage.getItem("settings")) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";
      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "4px solid #ffd420";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#4a4a4a";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "0px";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#9b9b9b";
      }
    }
    if (JSON.parse(JSON.parse(localStorage.getItem("stripe"))) === true) {
      let dashboardStyle = document.getElementById("dashboard-button");
      dashboardStyle.style.borderLeft = "0px";
      let dashboardSpanStyle = document.getElementById("dashboard-span");
      dashboardSpanStyle.style.color = "#9b9b9b";
      // managers
      let managersStyle = document.getElementById("managers-button");
      managersStyle.style.borderLeft = "0px";
      let managersSpanStyle = document.getElementById("managers-span");
      managersSpanStyle.style.color = "#9b9b9b";
      let tournamentStyle = document.getElementById("tournament-button");
      tournamentStyle.style.borderLeft = "0px";
      let tournamentSpanStyle = document.getElementById("tournament-span");
      tournamentSpanStyle.style.color = "#9b9b9b";

      let UploadedFilesStyle = document.getElementById("UploadedFiles-button");
      UploadedFilesStyle.style.borderLeft = "0px";
      let UploadedFilesSpanStyle = document.getElementById(
        "UploadedFiles-span"
      );
      UploadedFilesSpanStyle.style.color = "#9b9b9b";

      // members
      // let membersStyle = document.getElementById('members-button');
      // membersStyle.style.borderLeft = '0px';
      // let membersSpanStyle = document.getElementById('members-span');
      // membersSpanStyle.style.color = '#9b9b9b';
      // players
      let playersStyle = document.getElementById("players-button");
      playersStyle.style.borderLeft = "0px";
      let playersSpanStyle = document.getElementById("players-span");
      playersSpanStyle.style.color = "#9b9b9b";
      //events
      let eventsStyle = document.getElementById("events-button");
      eventsStyle.style.borderLeft = "0px";
      let eventsSpanStyle = document.getElementById("events-span");
      eventsSpanStyle.style.color = "#9b9b9b";
      //registration
      let registrationStyle = document.getElementById("registration-button");
      registrationStyle.style.borderLeft = "0px";
      let registrationSpanStyle = document.getElementById("registration-span");
      registrationSpanStyle.style.color = "#9b9b9b";
      // scores
      let scoresStyle = document.getElementById("scores-button");
      scoresStyle.style.borderLeft = "0px";
      let scoresSpanStyle = document.getElementById("scores-span");
      scoresSpanStyle.style.color = "#9b9b9b";
      //templates
      let templatesStyle = document.getElementById("templates-button");
      templatesStyle.style.borderLeft = "0px";
      let templatesSpanStyle = document.getElementById("templates-span");
      templatesSpanStyle.style.color = "#9b9b9b";
      //payments
      let paymentsStyle = document.getElementById("payments-button");
      paymentsStyle.style.borderLeft = "0px";
      let paymentsSpanStyle = document.getElementById("payments-span");
      paymentsSpanStyle.style.color = "#9b9b9b";
      //settings
      let settingsStyle = document.getElementById("settings-button");
      settingsStyle.style.borderLeft = "0px";
      let settingsSpanStyle = document.getElementById("settings-span");
      settingsSpanStyle.style.color = "#9b9b9b";
      if (JSON.parse(localStorage.getItem("role_id")) === 6) {
        //stripe
        let stripeStyle = document.getElementById("stripe-button");
        stripeStyle.style.borderLeft = "4px solid #ffd420";
        let stripeSpanStyle = document.getElementById("stripe-span");
        stripeSpanStyle.style.color = "#4a4a4a";
      }
    }
  });

  // useEffect(() => {
  //   setSideBarDisabled(true);
  // }, [])

  //console.log('sidebarDisabled:', sidebarDisabled);

  // const [normalSidebar, setNormalSidebar] = useState(false)

  return (
    // <div className={normalSidebar?"sidenav sidebar-flex":"sidenav-mini sidebar-flex"}>
    // <div className={normalSidebar?"sidebar-components":"sidebar-components-mini"}>
    <div
      className="sidenav sidebar-flex sidebar_animation"
      style={sidebarMax ? {} : { minWidth: 89, maxWidth: 89, marginRight: 0 }}
    >
      <div
        className="sidebar-components sidebar_animation"
        // style={sidebarMax ? {} : { width: 89, marginRight: 0 }}
      >
        <img
          //  src={sidebarMax?headerLogo:sidebarLogo}
          src={headerLogo}
          style={
            sidebarMax ? {} : { objectFit: "cover", width: 89, height: 46 }
          }
          alt=""
          className="p-0"
        />
        <button
          id="dashboard-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  dashBoardClicked();
                  props.history.push("/dashboard");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={dashboardMeter} alt="" />{" "}
          <span id="dashboard-span">{sidebarMax && "Dashboard"}</span>
        </button>
        <button
          id="managers-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  managersClicked();
                  props.history.push("/DashboardManager");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={managerSuitcase} alt="" />{" "}
          <span id="managers-span">{sidebarMax && "Managers"}</span>
        </button>
        {/* <button
          id="members-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    'You must complete your profile before using Tournament Manager App'
                  );
                }
              : () => {
                  membersClicked();
                  props.history.push('/MembershipNone');
                  setDisabledMessage('');
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={membershipMembers} alt="" />{' '}
          
          <span id="members-span">{sidebarMax && ("Members")}</span>
          
        </button> */}
        <button
          id="players-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  playersClicked();
                  props.history.push("/DashboardPlayers");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={playerIcon} alt="" />

          <span id="players-span">{sidebarMax && "Players"}</span>
        </button>
        <button
          id="events-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  eventsClicked();
                  props.history.push("/DashboardEvents");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={eventsIcon} alt="" />

          <span id="events-span">{sidebarMax && "Events"}</span>
        </button>
        <button
          id="registration-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  registrationClicked();
                  props.history.push("/DashboardReg");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={registrationBall} alt="" />{" "}
          <span id="registration-span">{sidebarMax && "Registration"}</span>
        </button>
        <button
          id="scores-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  scoresClicked();
                  // props.history.push('/ScoresTable');
                  props.history.push("/DashboardScores");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={broadCastScores} alt="" />{" "}
          <span id="scores-span">{sidebarMax && "Scores"}</span>
        </button>
        <button
          id="tournament-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  scoresClicked();
                  tournamentClicked();
                  // props.history.push('/ScoresTable');
                  props.history.push("/DashboardTournaments");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={eventsIcon} alt="" />{" "}
          <span id="tournament-span">{sidebarMax && "Tournaments"}</span>
        </button>
        <button
          id="UploadedFiles-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  scoresClicked();
                  uploadedFilesClicked();
                  // props.history.push('/ScoresTable');
                  props.history.push("/UploadedFiles");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={managerSuitcase} alt="" />{" "}
          <span id="UploadedFiles-span">{sidebarMax && "UploadedFiles"}</span>
        </button>
        <button
          id="templates-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  templatesClicked();
                  props.history.push("/DashboardTemplate");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={documentIcon} alt="" />{" "}
          <span id="templates-span">{sidebarMax && "Templates"}</span>
        </button>
        <button
          id="payments-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  paymentsClicked();
                  props.history.push("/PaymentNone");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={paymentsIcon} alt="" />{" "}
          <span id="payments-span">{sidebarMax && "Payments"}</span>
        </button>
        <button
          id="settings-button"
          className="text-decoration-none"
          onClick={
            sidebarDisabled
              ? () => {
                  setDisabledMessage(
                    "You must complete your profile before using Tournament Manager App"
                  );
                }
              : () => {
                  settingsClicked();
                  props.history.push("/settings");
                  setDisabledMessage("");
                }
          }
          style={{ marginTop: 18, marginBottom: 18 }}
          // disabled
        >
          <img src={gearIcon} alt="" />

          <span id="settings-span">{sidebarMax && "Settings"}</span>
        </button>
        {JSON.parse(localStorage.getItem("role_id")) === 6 && (
          <button
            id="stripe-button"
            className="text-decoration-none"
            onClick={
              sidebarDisabled
                ? () => {
                    setDisabledMessage(
                      "You must complete your profile before using Tournament Manager App"
                    );
                  }
                : () => {
                    stripeClicked();
                    props.history.push("/stripe");
                    setDisabledMessage("");
                  }
            }
            style={{ marginTop: 18, marginBottom: 18 }}
            // disabled
          >
            <img src={stripeIcon} alt="" />{" "}
            <span id="stripe-span">{sidebarMax && "Stripe"}</span>
          </button>
        )}
      </div>

      <div className="mb-2">
        <hr className="logout-hr" />
        <Link
          to="/"
          onClick={logout}
          style={{ marginTop: 18, marginBottom: 18 }}
        >
          <img src={exitIcon} alt="" />

          <span>{sidebarMax && "Logout"}</span>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
