import React, { useState, useEffect, useContext, useRef } from "react";
import "../assets/styles/RegEventEditComponent.css";
import menuchevrondownicon from "../assets/images/icon-menu-chevron-down.svg";
import iconmenux from "../assets/images/icon-menu-x.svg";
import iconorangeplayer from "../assets/images/icon-orange-player.png";
import Header from "./header/Header";
import backIcon from "../assets/images/icon-menu-back.svg";
import Footer from "./footer/Footer";
import searchIcon from "../assets/images/icon-sidemenu-search.svg";
import RegContext from "../context/registration/RegContext";
import profilePic from "../assets/images/defaultIcon3.png";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import { Modal } from "react-responsive-modal";
import { Collapse } from "antd";
import RegEventSearchDropDown from "./RegEventSearchDropDown";
import axios from "axios";
import { API } from "../Utils/API";
import RegEventDropDown from "./RegEventDropDown";
import { loadStripe } from "@stripe/stripe-js";
import NumberFormat from "react-number-format";
import Purse from "../assets/images/purse.svg";
import RegEventComponentModal from "./RegEventComponentModal";

const { Panel } = Collapse;

//close Icon
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

const RegEventEditComponent = (props) => {
  const regContext = useContext(RegContext);
  const {
    //next
    getRegById,
    regDataById,
    playersList,
    playersData,
    addPlayerToTeam,
    // addPlayerLoading,
    removePlayerFromTeam,
    editAddPlayerLoading,
    addTeamToReg,
    playersDataLoading,
    regByIdErr,
    playersDataError,
    // generate Invoice
    generateInvoice,
    // invoice Message
    invoiceMessage,
    // remind Payment For Team
    remindPaymentForTeam,
    // remind Payment For Team Loading
    remindPaymentForTeamLoading,
    setTeamStatusReg,
    regStatusLoading,
    setTeamDataLoading,
    teamDataLoading,
    excelDownload,
    excel_error,
    // get Registered Divisions
    getRegisteredDivisions,
    // get Registered Divisions To Null
    getRegisteredDivisionsToNull,
    // change Division Response
    changeDivisionResponse,
    // set Team Player Status
    setTeamPlayerStatus,
    // team Player Status Loading
    teamPlayerStatusLoading,

    //get team payment details by id
    getTeamPaymentDetails,
    //Amount Paid by Team
    teamPaymentDataAmount,
  } = regContext;

  // useEffect(() => {
  //   console.log(playersData);
  // }, [playersData]);

  useEffect(() => {
    console.log(teamPaymentDataAmount);
    console.log(teamPaymentDataAmount);
    if (teamPaymentDataAmount === null) setCustomRefundAmount(0);
    else setCustomRefundAmount(teamPaymentDataAmount);
  }, [teamPaymentDataAmount]);

  const [playerState, setPlayerState] = useState("");
  const [teamState, setTeamState] = useState("");
  const [pointsState, setPointsState] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [inVoice, setInVoice] = useState(true);

  useEffect(() => {
    getRegById(props.match.params.id);

    // (async function () {
    //   if (props.match.params.some == 1) {
    //     console.log(JSON.parse(sessionStorage.getItem('addPlayerToTeamData')));

    //     if (
    //       JSON.parse(sessionStorage.getItem('addPlayerToTeamData')) !== null
    //     ) {
    //       await addPlayerToTeam(
    //         JSON.parse(sessionStorage.getItem('addPlayerToTeamData'))
    //       );
    //       await getRegById(props.match.params.id);
    //       await sessionStorage.removeItem('addPlayerToTeamData');
    //     } else {
    //       await getRegById(props.match.params.id);
    //       await sessionStorage.removeItem('addPlayerToTeamData');
    //     }
    //   } else if (props.match.params.some === undefined) {
    //     console.log(JSON.parse(sessionStorage.getItem('addPlayerToTeamData')));
    //     console.log('its undefined');
    //     await sessionStorage.removeItem('addPlayerToTeamData');
    //     getRegById(props.match.params.id);
    //   } else if (props.match.params.some == 2) {
    //     console.log(JSON.parse(sessionStorage.getItem('addPlayerToTeamData')));
    //     console.log(props.match.params.some);
    //     await getRegById(props.match.params.id);
    //     await sessionStorage.removeItem('addPlayerToTeamData');
    //   }
    // })();

    //eslint-disable-next-line
  }, []);

  const addPlayerToTeamFunction = async (
    team_id,
    player_avp_id,
    points,
    name,
    division_id,
    waiting_no,
    players,
    discount_amount,
    discount_applied,
    discount_text,
    registration_amount,
    format,
    discount_voucher
  ) => {
    console.log({
      team_id,
      player_avp_id,
      points,
      name,
      division_id,
      waiting_no,
      players,
      discount_amount,
      discount_applied,
      discount_text,
      registration_amount,
      format,
      discount_voucher,
    });

    if (team_id !== 0) {
      await addPlayerToTeam({
        team_id: team_id,
        player_avp_id: [player_avp_id],
        points: [points],
        name: [name],
        division_id: division_id,
        waiting_no: waiting_no,
      });
      await getRegById(props.match.params.id);
    } else {
      onOpenPayModal(
        players,
        discount_amount,
        discount_applied,
        discount_text,
        registration_amount,
        team_id,
        [player_avp_id],
        [points],
        [name],
        division_id,
        waiting_no,
        format,
        discount_voucher
      );
    }
    // await addPlayerToTeam({
    //   team_id: team_id,
    //   player_avp_id: [player_avp_id],
    //   points: [points],
    //   name: [name],
    //   division_id: division_id,
    //   waiting_no: waiting_no,
    // });
    // await getRegById(props.match.params.id);
    // await API.get(
    //   `/getEventRegistrationDetail?id=${props.match.params.id}`
    // ).then((res) => {

    //   res.data.tournament.division.find((div, divIndex) => {
    //     if (div.division_id === division_id) {
    //       for (let i = 0; i < div.team.length; i++) {
    //         for (let j = 0; j < div.team[i].player.length; j++) {
    //           if (
    //             div.team[i].player[j] !== null &&
    //             div.team[i].player[j].avp_id === player_avp_id
    //           ) {
    //             //console.log(div.team[i].team_id);
    //             console.log(div.team[i].status);
    //             onOpenPayModal(
    //               players,
    //               discount_amount,
    //               discount_applied,
    //               discount_text,
    //               registration_amount,
    //               div.team[i].team_id,
    //               div.team[i].status
    //             );
    //           }
    //           //console.log(div.team[i].player[j]);
    //         }
    //       }
    //     }
    //     return null;
    //   });
    // });
    //await getTeamId(player_avp_id, division_id, players);
    // await onOpenPayModal(players);
  };

  const removePlayerFromTeamFunction = async (
    playerState,
    teamState,
    pointsState,
    customRefundAmount,
    customRefundStatus
  ) => {
    let data;
    if (customRefundStatus) {
      data = {
        avp_id: playerState,
        team_id: teamState,
        points: pointsState,
        amount: customRefundAmount,
        refund: "1",
      };
    } else {
      data = {
        avp_id: playerState,
        team_id: teamState,
        points: pointsState,
        refund: "0",
      };
    }
    await removePlayerFromTeam(data);
    await getRegById(props.match.params.id);
    setOpenModal(false);

    setRefundModal1(false);
    setOpenRefundModal(false);
    setLoadingDelete(false);
  };

  // useEffect(() => {
  //   console.log(editAddPlayerLoading);
  // }, [editAddPlayerLoading]);

  // search const [loading, setloading] = useState(false);
  const [loading, setloading] = useState(false);
  const [searchData, setSearchData] = useState(null);

  let cancelToken;
  const handleSearchChange = async (e, id, team_id) => {
    if (id !== undefined) {
      // console.log(e.target.value);
      const searchTerm = e;

      //Check if there are any previous pending requests
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
      }

      //Save the cancel token for the current request
      cancelToken = axios.CancelToken.source();

      try {
        const results = await API.get(
          `/getPlayersListForTeam/${id}?team_id=${team_id}&f_name=${searchTerm}`,
          { cancelToken: cancelToken.token } //Pass the cancel token to the current request
        );
        console.log("Results for " + searchTerm + ": ", results.data.player);
        setloading(false);
        if (results.data.player !== "Player not found") {
          setSearchData(results.data.player);
        } else {
          setSearchData(results.data.player);
        }
      } catch (error) {
        console.log(error);
        setloading(true);
      }
    }
  };

  useEffect(() => {
    handleSearchChange(" ");
  }, []);

  // useEffect(() => {
  //   if (playersData !== null) {
  //     console.log(playersData);
  //   }
  // }, [playersData]);

  const [regDataByIdState, setRegDataByIdState] = useState(null);

  useEffect(() => {
    if (regDataById !== null) {
      // console.log('regDataById:', regDataById);
      setRegDataByIdState(regDataById);
      // console.log(regDataByIdState);

      for (let i = 0; i < regDataById.division.length; i++) {
        for (let j = 0; j < regDataById.division[i].team.length; j++) {
          if (
            regDataById.division[i].team[j].player.includes(null) &&
            regDataById.division[i].team[j].status === "Paid"
          ) {
            console.log("has null");
          } else if (
            !regDataById.division[i].team[j].player.includes(null) &&
            regDataById.division[i].team[j].status === "UnPaid" &&
            regDataById.division[i].team[j].waiting < 1
          ) {
            console.log("has no null");
            //handleCheckout(regDataById.division[i].registration_amount);
            // handleCheckout(
            //   regDataById.division[i].registration_amount * 100,
            //   props.match.params.id,
            //   localStorage.getItem('id'),
            //   regDataById.division[i].team[j].team_id
            // );
          }
        }
      }
    }
  }, [regDataById, regDataByIdState]);

  useEffect(() => {
    console.log(regDataByIdState);
  }, [regDataByIdState]);

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openPayModal, setOpenPayModal] = useState(false);
  const [playersDataForPay, setPlayersDataForPay] = useState(null);
  const [apply, setApply] = useState(false);

  const [one, set1] = useState(false);
  const [two, set2] = useState(false);
  const [three, set3] = useState(false);
  const [four, set4] = useState(false);
  const [five, set5] = useState(false);
  const [six, set6] = useState(false);
  const [donation1, setDonation1] = useState(false);
  const [donation2, setDonation2] = useState(false);
  const [donation3, setDonation3] = useState(false);
  const [customDonation, setCustomDonation] = useState(false);
  const [customDonationAmount, setCustomDinationAmount] = useState(null);
  const [playerModalLoading, setPlayerModalLoading] = useState(false);

  useEffect(() => {
    console.log(one, two, three, four, five, six);
  }, [one, two, three, four, five, six]);

  useEffect(() => {
    console.log(playersDataForPay, openPayModal);
  }, [playersDataForPay, openPayModal]);

  const [modalScreen1, setModalScreen1] = useState(true);
  const [modalScreen2, setModalScreen2] = useState(true);
  const [modalScreen3, setModalScreen3] = useState(true);
  const [modalScreen4, setModalScreen4] = useState(false);
  // useEffect(()=>{
  //   console.log("model1 is change")
  // },[modalScreen1])
  // useEffect(()=>{
  //   console.log("model2 is change")
  // },[modalScreen2])
  // useEffect(()=>{
  //   console.log("model3 is change")
  // },[modalScreen3])

  const onOpenPayModal = (
    players,
    discount_amount,
    discount_applied,
    discount_text,
    registration_amount,
    team_id,
    player_avp_id,
    points,
    name,
    division_id,
    waiting_no,
    format,
    discount_voucher
  ) => {
    console.log(
      players,
      discount_amount,
      discount_applied,
      discount_text,
      registration_amount,
      team_id,
      player_avp_id,
      points,
      name,
      division_id,
      waiting_no,
      format,
      discount_voucher
    );
    setPlayersDataForPay({
      players: players,
      discount_amount,
      discount_applied,
      discount_text,
      registration_amount,
      team_id,
      player_avp_id,
      points,
      name,
      division_id,
      waiting_no,
      format,
      discount_voucher,
    });
    handleSearchChange(" ");
    console.log(
      discount_amount,
      discount_voucher,
      regDataById.donation_amounts
    );
    if (
      (discount_amount === null || discount_voucher === null) &&
      (regDataById.donation_amounts !== null ||
        regDataById.donation_amounts !== "null,null,null")
    ) {
      console.log(
        discount_amount,
        discount_voucher,
        regDataById.donation_amounts
      );

      if (
        regDataById.donation_amounts === null ||
        regDataById.donation_amounts === "null,null,null"
      ) {
        console.log("3rd modal");
        setModalScreen1(false);
        setModalScreen2(false);
        setModalScreen3(true);
        setOpenPayModal(true);
      } else {
        console.log("2nd modal");
        setModalScreen1(false);
        setModalScreen2(true);
        setModalScreen3(false);
        setOpenPayModal(true);
      }
    } else if (
      (discount_amount === null || discount_voucher === null) &&
      (regDataById.donation_amounts === null ||
        regDataById.donation_amounts === "null,null,null")
    ) {
      console.log("3rd modal");
      setModalScreen1(false);
      setModalScreen2(false);
      setModalScreen3(true);
      setOpenPayModal(true);
    } else {
      console.log("1st modal");
      setModalScreen1(true);
      setModalScreen2(false);
      setModalScreen3(false);
      setOpenPayModal(true);
    }
  };

  const onClosePayModal = () => {
    setOpenPayModal(false);
    setPlayersDataForPay(null);
    setModalScreen1(true);
    setModalScreen2(true);
    setModalScreen3(true);
    set1(false);
    set2(false);
    setDonation1(false);
    setDonation2(false);
    setDonation3(false);
    setCustomDonation(false);
    setCustomDinationAmount(null);
    setInVoice(true);
  };

  const twoDigitVal = (e, setterFn) => {
    var val = e.target.value.replace("-", "");
    var valNum = val === "" ? 0 : parseInt(e.target.value.replace("-", ""));
    setterFn(valNum);
  };

  const addTeamFunction = async (id) => {
    await addTeamToReg(id);
    await getRegById(props.match.params.id);
  };

  useEffect(() => {
    console.log("editAddPlayerLoading", editAddPlayerLoading);
    console.log("playersDataLoading", playersDataLoading);
    console.log("playersData", playersData);
  }, [editAddPlayerLoading, playersDataLoading, playersData]);

  // player mapping here

  // const PlayerMapping = (playerProps) => {
  //   console.log(playerProps.players);
  //   console.log(playerProps.players.length);
  //   return playerProps.players.map((pl, ind) => <div>{ind}</div>);
  // };

  const [stripeError, setStripeError] = useState(null);
  let event_name_error = useRef();

  const handleCheckout = async (
    amount,
    donation_amount,
    id,
    user_id,
    team_id,
    discount_amount,
    player_avp_id,
    points,
    name,
    division_id,
    waiting_no,
    discount_flag,
    discount_voucher
  ) => {
    console.log("waiting data4");
    console.log(
      amount,
      donation_amount,
      id,
      user_id,
      team_id,
      discount_amount,
      player_avp_id,
      points,
      name,
      division_id,
      waiting_no,

      discount_voucher
    );
    try {
      let totalDiscount = discount_flag === "yes" ? discount_amount : 0;

      // sessionStorage.setItem(
      //   'addPlayerToTeamData',
      //   JSON.stringify({
      //     team_id: team_id,
      //     player_avp_id: player_avp_id,
      //     points: points,
      //     name: name,
      //     division_id: division_id,
      //     waiting_no: waiting_no,
      //     discount_flag: discount_flag,
      //     status_flag: 2,
      //     paid_amount:
      //       discount_voucher === 1
      //         ? (amount - totalDiscount) / 100
      //         : (amount + totalDiscount) / 100,
      //     discount_voucher: discount_voucher,
      //   })
      // );
      setPlayerModalLoading(true);
      let data = {
        team_id: team_id,
        player_avp_id: player_avp_id,
        points: points,
        name: name,
        division_id: division_id,
        waiting_no: waiting_no,
        discount_flag: discount_flag,
        status_flag: 1,
        paid_amount:
          discount_voucher === 2
            ? (amount + totalDiscount) / 100
            : (amount - totalDiscount) / 100,
        discount_voucher: discount_voucher,
      };

      if (discount_voucher === 2) {
        data.voucher_amount = totalDiscount / 100;
      } else if (discount_voucher === 1) {
        data.discount_amount = totalDiscount / 100;
      }

      if (donation_amount !== null) {
        data.donation_amount = donation_amount / 100;
      }
      await addPlayerToTeam(data).then(async (res) => {
        console.log(res);

        if (inVoice && waiting_no == 0) {
          await generateInvoice(player_avp_id, res.data.teamID);
        }
        await getRegById(props.match.params.id);
        setPlayerModalLoading(false);

        onClosePayModal();
      });

      console.log(
        amount,
        totalDiscount,
        discount_voucher,
        discount_voucher === 1 ? amount : amount + totalDiscount,
        discount_voucher === 1
          ? `${process.env.REACT_APP_BASE_URL}/api/createCheckoutSession?price=${amount}&id=${id}&avp_id=${user_id}&discount_amount=${totalDiscount}&team_id=0`
          : `${
              process.env.REACT_APP_BASE_URL
            }/api/createCheckoutSession?price=${
              Number(amount) + Number(totalDiscount)
            }&id=${id}&avp_id=${user_id}&discount_amount=${0}&team_id=0`
      );

      // (async function () {
      //   let url =
      //     discount_voucher === 2
      //       ? `https://fanwins.in/api/createCheckoutSession?price=${
      //           Number(amount) + Number(totalDiscount)
      //         }&id=${id}&avp_id=${user_id}&discount_amount=${0}&team_id=0`
      //       : `https://fanwins.in/api/createCheckoutSession?price=${amount}&id=${id}&avp_id=${user_id}&discount_amount=${totalDiscount}&team_id=0`;
      //   const response = await axios.get(url);
      //   console.log(response);
      //   const session = await response.data;
      //   const stripe = await loadStripe(response.data.publish_key);
      //   // When the customer clicks on the button, redirect them to Checkout.
      //   const result = await stripe.redirectToCheckout({
      //     sessionId: session.id,
      //   });

      //   if (result.error) {
      //     console.log(result.error);
      //   }
      // })();
    } catch (error) {
      console.log(error);
      setStripeError(error.response.data.errorMessage);
      event_name_error.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setStripeError(null);
      }, 5000);
    }
  };

  const handleCheckoutPlayers = async (
    amount,
    donation_amount,
    id,
    user_id,
    team_id,
    discount_amount,
    player_avp_id,
    points,
    name,
    division_id,
    waiting_no,
    player_one_discount,
    player_two_discount,
    discount_voucher
  ) => {
    console.log("waiting data1");
    console.log(
      amount,
      donation_amount,
      id,
      user_id,
      team_id,
      discount_amount,
      player_avp_id,
      points,
      name,
      division_id,
      waiting_no,
      player_one_discount,
      player_two_discount,
      discount_voucher
    );

    try {
      let totalDiscount;
      if (player_one_discount === "yes" && player_two_discount === "yes")
        totalDiscount = 2 * discount_amount;
      else if (player_one_discount === "no" && player_two_discount === "no")
        totalDiscount = 0;
      else totalDiscount = discount_amount;

      // sessionStorage.setItem(
      //   'addPlayerToTeamData',
      //   JSON.stringify({
      //     team_id: team_id,
      //     player_avp_id: player_avp_id,
      //     points: points,
      //     name: name,
      //     division_id: division_id,
      //     waiting_no: waiting_no,
      //     playerDiscount: [
      //       {
      //         avpId: player_avp_id[0],
      //         player_discount_applied: player_one_discount,
      //       },
      //     ],
      //     player2_discount: player_two_discount,
      //     status_flag: 2,
      //     paid_amount:
      //       discount_voucher === 1
      //         ? (amount - totalDiscount) / 100
      //         : (amount + totalDiscount) / 100,
      //     discount_voucher: discount_voucher,
      //   })
      // );

      let data = {
        team_id: team_id,
        player_avp_id: player_avp_id,
        points: points,
        name: name,
        division_id: division_id,
        waiting_no: waiting_no,
        playerDiscount: [
          {
            avpId: player_avp_id[0],
            player_discount_applied: player_one_discount,
          },
        ],
        player2_discount: player_two_discount,
        status_flag: 1,
        paid_amount:
          discount_voucher === 2
            ? (amount + totalDiscount) / 100
            : (amount - totalDiscount) / 100,
        discount_voucher: discount_voucher,
        player2_discount: player_two_discount,
      };

      if (discount_voucher === 2) {
        data.voucher_amount = totalDiscount / 100;
      } else if (discount_voucher === 1) {
        data.discount_amount = totalDiscount / 100;
      }

      if (donation_amount !== null) {
        data.donation_amount = donation_amount / 100;
      }

      setPlayerModalLoading(true);
      await addPlayerToTeam(data).then(async (res) => {
        console.log(res);
        if (inVoice && waiting_no == 0)
          await generateInvoice(player_avp_id, res.data.teamID);

        await getRegById(props.match.params.id);
        setPlayerModalLoading(false);
        setModalScreen3(false);
        setModalScreen2(false);
        setModalScreen1(false);
        setInVoice(false);
        onClosePayModal();
      });

      console.log(
        amount,
        totalDiscount,
        discount_voucher,
        discount_voucher === 1 ? amount : amount + totalDiscount,
        discount_voucher === 1
          ? `${process.env.REACT_APP_BASE_URL}/api/createCheckoutSession?price=${amount}&id=${id}&avp_id=${user_id}&team_id=0&discount_amount=${totalDiscount}`
          : `${
              process.env.REACT_APP_BASE_URL
            }/api/createCheckoutSession?price=${
              Number(amount) + Number(totalDiscount)
            }&id=${id}&avp_id=${user_id}&team_id=0&discount_amount=${0}`
      );

      // (async function () {
      //   let url =
      //     discount_voucher === 2
      //       ? `https://fanwins.in/api/createCheckoutSession?price=${
      //           Number(amount) + Number(totalDiscount)
      //         }&id=${id}&avp_id=${user_id}&team_id=0&discount_amount=${0}`
      //       : `https://fanwins.in/api/createCheckoutSession?price=${amount}&id=${id}&avp_id=${user_id}&team_id=0&discount_amount=${totalDiscount}`;
      //   const response = await axios.get(url);
      //   console.log(response);
      //   const session = await response.data;
      //   const stripe = await loadStripe(response.data.publish_key);
      //   // When the customer clicks on the button, redirect them to Checkout.
      //   const result = await stripe.redirectToCheckout({
      //     sessionId: session.id,
      //   });

      //   if (result.error) {
      //     console.log(result.error);
      //   }
      // })();
    } catch (error) {
      console.log(error);
      setStripeError(error.response.data.errorMessage);
      event_name_error.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setStripeError(null);
      }, 5000);
    }
  };

  // modal state
  const [openModal2, setOpenModal2] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [waitingTeam, setWaitingTeam] = useState(0);

  useEffect(() => {
    if (openModal2 === true && modalData !== null) {
      console.log(modalData);
      getRegisteredDivisions(modalData.team_id);
    }
  }, [openModal2, modalData]);

  useEffect(() => {
    if (changeDivisionResponse === "Team Added Sucessfully") {
      setTeamDataLoading();
      getRegById(props.match.params.id);
      setTimeout(() => {
        setOpenModal2(false);
        setModalData(null);
        getRegisteredDivisionsToNull();
      }, 2000);
    }
  }, [changeDivisionResponse]);

  useEffect(() => {
    console.log("Invoice is Now : " + inVoice);
  }, [inVoice]);

  //modal refund
  const [openRefundModal, setOpenRefundModal] = useState(false);
  const [refundModal1, setRefundModal1] = useState(false);
  const [customRefund, setCustomRefund] = useState(false);
  const [teamIdDelete, setTeamDelete] = useState(null);
  const [customRefundAmount, setCustomRefundAmount] = useState("10");
  const [loadDelete, setLoadingDelete] = useState(false);
  const [paidStatus, setPaidStatus] = useState(false);
  useEffect(() => {
    console.log("loading....");
  }, [loadDelete]);

  const onCloseRefundModal = () => {
    setOpenRefundModal(false);
    setRefundModal1(false);
    setCustomRefund(false);
    setTeamDelete(null);
  };
  useEffect(() => {
    console.log("modal" + openRefundModal);
  }, [openRefundModal]);

  return (
    <div
      className="min-vh-100"
      style={{
        cursor: remindPaymentForTeamLoading && "not-allowed",

        opacity: remindPaymentForTeamLoading && 0.5,
      }}
    >
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

      <div style={{ pointerEvents: "none" }}>
        {openRefundModal && (
          <Modal
            open={openRefundModal}
            onClose={onCloseRefundModal}
            closeIcon={closeIcon}
            styles={{
              modal: {
                borderRadius: 12,
                boxShadow: "0 1 2 0 rgba(0,0,0,0.2",
                margin: 0,
                padding: 0,
                zIndex: 1000000,
                marginTop: 20,
                overflow: "hidden",
                width: "500px",
              },
              overlay: {
                background: "#000000",
                opacity: 0.5,
              },
            }}
          >
            {refundModal1 ? (
              <>
                <div
                  className="text-center mt-2 apply-discount-modal-text"
                  onClick={() => console.log("1")}
                >
                  <div>
                    {paidStatus ? (
                      <h5 style={{ padding: "10px" }}>
                        Team is paid. Do you want to refund?
                      </h5>
                    ) : (
                      <h4 style={{ padding: "10px" }}>
                        Do you want to delete team?
                      </h4>
                    )}
                  </div>
                </div>

                {paidStatus ? (
                  <>
                    <div className="pt-2  ">
                      <div className="container row ">
                        <div className="col-3"></div>
                        <div className="col-3 p-12">
                          {" "}
                          <label
                            className="AS1checkbox MensLabel"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              checked={customRefund}
                              onChange={() => {
                                setCustomRefund(!customRefund);
                              }}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span className="AS1label">Yes</span>
                          </label>
                        </div>
                        <div className="col-6 p-0">
                          {" "}
                          <label
                            className="AS1checkbox MensLabel"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              checked={!customRefund}
                              onChange={() => {
                                setCustomRefund(!customRefund);
                              }}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span className="AS1label">No</span>
                          </label>
                        </div>
                        {customRefund && (
                          <>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="col-3"></div>
                            <div className="col-9">Enter Refund Amount</div>
                            <div className="col-3"></div>
                            <div
                              className="col-7 p-0 "
                              style={{
                                height: 32,
                                padding: "4px 8px",
                                margin: "8px",
                                borderRadius: 3,
                                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
                                backgroundColor: "#ffffff",
                              }}
                            >
                              <div
                                className="row p-0 m-0"
                                onClick={() =>
                                  console.log(Number(customRefundAmount))
                                }
                              >
                                <div className="col-2">
                                  <img src={Purse} alt=""></img>
                                </div>
                                <div className="col-10 text-right">
                                  <NumberFormat
                                    // pattern={'[0-9]*'}
                                    displayType="input"
                                    thousandSeparator={true}
                                    placeholder="Enter custom value here.."
                                    prefix={"$"}
                                    decimalScale={2}
                                    className="placeholderNumber"
                                    id="LEPrice"
                                    name="lateAmount"
                                    value={customRefundAmount}
                                    isAllowed={({ floatValue }) =>
                                      floatValue <= teamPaymentDataAmount ||
                                      floatValue === ""
                                    }
                                    onChange={(e) =>
                                      setCustomRefundAmount(
                                        e.target.value.replace("$", "")
                                      )
                                    }
                                    autoComplete="off"
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      textAlign: "right",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="col"></div>
                        <div className="col"></div>
                      </div>
                    </div>
                  </>
                ) : null}
                <div
                  className="row container mt-2 mx-auto"
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <div className="col-12 text-center m-auto">
                    <button
                      type="button"
                      className="btn-sm ml-5 apply-discount-modal-left-button"
                      id="white-button-hover"
                      onClick={() => {
                        setRefundModal1(false);
                        setOpenRefundModal(false);
                        setCustomRefundAmount("10");
                        setCustomRefund(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn-sm pb-1 ml-3 apply-discount-modal-right-button "
                      id="yellow-button-hover"
                      onClick={async () => {
                        setLoadingDelete(true);
                        // console.log(teamIdDelete)

                        removePlayerFromTeamFunction(
                          playerState,
                          teamState,
                          pointsState,
                          customRefundAmount,
                          customRefund
                        );
                        // await setTeamStatusReg(teamIdDelete);
                        // await getRegById(props.match.params.id);
                      }}
                    >
                      {loadDelete ? (
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span class="sr-only">Loading...</span>
                        </span>
                      ) : (
                        <span>OK</span>
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </Modal>
        )}
      </div>

      {regDataById === undefined ? (
        <div className="col-12 text-center w-100">
          <LoadingSpinner />
        </div>
      ) : regByIdErr !== null ||
        regDataById === null ||
        regDataById.length === 0 ? (
        <div className="mt-5 text-center mx-auto w-100">
          <div style={{ color: "#ff2072" }}>{regByIdErr}</div>
        </div>
      ) : (
        <div style={{ pointerEvents: remindPaymentForTeamLoading && "none" }}>
          {openPayModal && (
            <Modal
              open={openPayModal}
              onClose={onClosePayModal}
              closeIcon={closeIcon}
              styles={{
                modal: {
                  borderRadius: 12,
                  boxShadow: "0 1 2 0 rgba(0,0,0,0.2",
                  margin: 0,
                  padding: 0,
                  zIndex: 1000000,
                  marginTop: 20,
                  overflow: "hidden",
                },
                overlay: {
                  background: "#000000",
                  opacity: 0.5,
                },
              }}
            >
              {modalScreen1 ? (
                <>
                  <div
                    className="text-center mt-2 apply-discount-modal-text"
                    onClick={() => console.log(playersDataForPay)}
                  >
                    APPLY{" "}
                    {playersDataForPay.discount_voucher === 1
                      ? "DISCOUNT"
                      : "VOUCHER"}
                  </div>
                  <div className="text-center apply-discount-modal-sub-text">
                    <div className="row p-0 m-0 pt-4">
                      <div
                        className="col"
                        style={{ overflow: "hidden", wordWrap: "break-word" }}
                      >
                        {playersDataForPay !== null &&
                          playersDataForPay.discount_text}
                      </div>
                      {playersDataForPay.discount_applied ===
                        "discount per team" && (
                        <div className="col">
                          <label
                            className="AS1checkbox MensLabel mt-0"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              onChange={() => setApply(!apply)} // Prop: Puts data into state
                              checked={apply}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span className="AS1label">apply</span>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pl-5 pt-2 ml-5">
                    {playersDataForPay.discount_applied !==
                      "discount per team" &&
                      Array.isArray(playersDataForPay.players) &&
                      playersDataForPay.players.map((player, playerIndex) => (
                        <div key={playerIndex}>
                          <label
                            className="AS1checkbox MensLabel"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              checked={one}
                              onChange={() => {
                                if (playerIndex === 0) set1(!one);
                              }}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span className="AS1label">
                              {" "}
                              {`${player.first_name} ${player.last_name}`}
                            </span>
                          </label>
                        </div>
                      ))}
                    {playersDataForPay.discount_applied !==
                      "discount per team" && (
                      <div>
                        <label
                          className="AS1checkbox MensLabel"
                          htmlFor="JAgeRangeInput"
                        >
                          <input
                            className="form-control"
                            id="JAgeRangeInput1"
                            name="11U"
                            type="checkbox"
                            value="11U"
                            checked={two}
                            onChange={() => {
                              set2(!two);
                            }}
                          />
                          <span className="AS1checkmark MensCheck"></span>
                          <span className="AS1label"> {`Player 2`}</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div
                    className="row container mt-2"
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    <div className="col-12 text-center m-auto">
                      <button
                        type="button"
                        className="btn-sm ml-5 apply-discount-modal-left-button"
                        id="white-button-hover"
                        onClick={onClosePayModal}
                      >
                        NO
                      </button>
                      <button
                        className="btn-sm pb-1 ml-3 apply-discount-modal-right-button "
                        id="yellow-button-hover"
                        onClick={() => {
                          setModalScreen1(false);
                          if (regDataById.donation_amounts !== null) {
                            setModalScreen1(false);
                            setModalScreen2(true);
                            setModalScreen3(false);
                          } else if (regDataById.donation_amounts === null) {
                            setModalScreen1(false);
                            setModalScreen2(false);
                            setModalScreen3(true);
                          }
                        }}
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                </>
              ) : modalScreen2 ? (
                <>
                  <div
                    className="text-center mt-2 apply-discount-modal-text"
                    onClick={() => console.log(playersDataForPay)}
                  >
                    {invoiceMessage !== null && (
                      <div style={{ color: "#ff2072" }}>{invoiceMessage}</div>
                    )}
                    <div>
                      {" "}
                      {regDataById.donation_amounts === null ||
                      regDataById.donation_amounts === "null,null,null"
                        ? "Team will be created."
                        : "Donation"}
                    </div>
                  </div>
                  <div className="text-center apply-discount-modal-sub-text w-100">
                    <div className="row p-0 m-0 pt-4">
                      <div
                        className="col"
                        style={{ overflow: "hidden", wordWrap: "break-word" }}
                      >
                        {/* {regDataById.donation_amounts === null ||
                        regDataById.donation_amounts === 'null,null,null'
                          ? 'Invoice will be sent to the player.'
                          : null}
                        {regDataById.donation_amounts === null ||
                        regDataById.donation_amounts === 'null,null,null'
                          ? 'Do you wish to continue?'
                          : null} */}
                        {/* {regDataById.donation_amounts !== null ||
                        (regDataById.donation_amounts !== 'null,null,null' &&
                          regDataById.donation_text !== null)
                          ? regDataById.donation_text
                          : null} */}
                        {regDataById.donation_amounts === null ||
                        regDataById.donation_amounts === "null,null,null"
                          ? null
                          : regDataById.donation_text}
                      </div>
                    </div>
                  </div>
                  {regDataById.donation_amounts !== null &&
                    regDataById.donation_amounts !== "null,null,null" && (
                      <>
                        <div
                          className="pt-2 row"
                          style={{ textAlign: "center" }}
                        >
                          {regDataById.donation_amounts.split(",")[0] !==
                            "null" && (
                            <div className="col p-0">
                              <label
                                className="AS1checkbox MensLabel"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput1"
                                  name="11U"
                                  type="checkbox"
                                  value="11U"
                                  checked={donation1}
                                  onChange={() => {
                                    setDonation1(!donation1);
                                    setDonation2(false);
                                    setDonation3(false);
                                    setCustomDonation(false);
                                  }}
                                />
                                <span className="AS1checkmark MensCheck"></span>
                                <span
                                  className="AS1label"
                                  style={{ textAlign: "left" }}
                                >
                                  {regDataById.donation_amounts.split(",")[0]}
                                </span>
                              </label>
                            </div>
                          )}

                          {regDataById.donation_amounts.split(",")[1] !==
                            "null" && (
                            <div className="col p-0">
                              <label
                                className="AS1checkbox MensLabel"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput1"
                                  name="11U"
                                  type="checkbox"
                                  value="11U"
                                  checked={donation2}
                                  onChange={() => {
                                    setDonation2(!donation2);
                                    setDonation1(false);
                                    setDonation3(false);
                                    setCustomDonation(false);
                                  }}
                                />
                                <span className="AS1checkmark MensCheck"></span>
                                <span
                                  className="AS1label"
                                  style={{ textAlign: "left" }}
                                >
                                  {regDataById.donation_amounts.split(",")[1]}
                                </span>
                              </label>
                            </div>
                          )}

                          {regDataById.donation_amounts.split(",")[2] !==
                            "null" && (
                            <div className="col p-0">
                              <label
                                className="AS1checkbox MensLabel"
                                htmlFor="JAgeRangeInput"
                              >
                                <input
                                  className="form-control"
                                  id="JAgeRangeInput1"
                                  name="11U"
                                  type="checkbox"
                                  value="11U"
                                  checked={donation3}
                                  onChange={() => {
                                    setDonation3(!donation3);
                                    setDonation1(false);
                                    setDonation2(false);
                                    setCustomDonation(false);
                                  }}
                                />

                                <span className="AS1checkmark MensCheck"></span>
                                <span
                                  className="AS1label"
                                  style={{ textAlign: "left" }}
                                >
                                  {regDataById.donation_amounts.split(",")[2]}
                                </span>
                              </label>
                            </div>
                          )}
                        </div>
                        <div className="row" style={{ textAlign: "left" }}>
                          <div className="col p-0">
                            {" "}
                            <label
                              className="AS1checkbox MensLabel"
                              htmlFor="JAgeRangeInput"
                            >
                              <input
                                className="form-control"
                                id="JAgeRangeInput1"
                                name="11U"
                                type="checkbox"
                                value="11U"
                                checked={customDonation}
                                onChange={() => {
                                  setCustomDonation(!customDonation);
                                  setDonation1(false);
                                  setDonation2(false);
                                  setDonation3(false);
                                }}
                              />
                              <span className="AS1checkmark MensCheck"></span>
                              <span className="AS1label">Custom Amount</span>
                            </label>
                          </div>
                          <div className="col"></div>
                          <div className="col"></div>
                        </div>
                        {customDonation && (
                          <div className="row container mx-auto">
                            <div
                              className="col-12 "
                              style={{
                                height: 32,
                                padding: "4px 8px",
                                borderRadius: 3,
                                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
                                backgroundColor: "#ffffff",
                              }}
                            >
                              <div
                                className="row p-0 m-0"
                                onClick={() =>
                                  console.log(Number(customDonationAmount))
                                }
                              >
                                <div className="col-2">
                                  <img src={Purse} alt=""></img>
                                </div>
                                <div className="col-10 text-right">
                                  <NumberFormat
                                    pattern={"[0-9]*"}
                                    displayType="input"
                                    thousandSeparator={true}
                                    placeholder="Enter custom value here.."
                                    prefix={"$"}
                                    decimalScale={2}
                                    className="placeholderNumber"
                                    id="LEPrice"
                                    min="0"
                                    name="lateAmount"
                                    value={customDonationAmount}
                                    onChange={(e) =>
                                      setCustomDinationAmount(
                                        e.target.value.replace("$", "")
                                      )
                                    }
                                    autoComplete="off"
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      textAlign: "right",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                  <div
                    className="row container mt-2 mx-auto"
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    <div className="col-12 text-center m-auto">
                      <button
                        type="button"
                        className="btn-sm ml-5 apply-discount-modal-left-button"
                        id="white-button-hover"
                        onClick={() =>
                          playersDataForPay.discount_amount !== null &&
                          playersDataForPay.discount_voucher !== null
                            ? setModalScreen1(true)
                            : onClosePayModal()
                        }
                      >
                        {playersDataForPay.discount_amount !== null &&
                        playersDataForPay.discount_voucher !== null
                          ? "BACK"
                          : "CANCEL"}
                      </button>
                      <button
                        className="btn-sm pb-1 ml-3 apply-discount-modal-right-button "
                        id="yellow-button-hover"
                        disabled={playerModalLoading}
                        onClick={async () => {
                          // console.log({
                          //   discount_applied: playersDataForPay.dis_applied,
                          //   players: playersDataForPay.players,
                          // });
                          // playersDataForPay.discount_applied ===
                          // 'discount per team'
                          //   ? handleCheckout(
                          //       Number(
                          //         donation1
                          //           ? playersDataForPay.registration_amount +
                          //               Number(
                          //                 regDataById.donation_amounts.split(
                          //                   ','
                          //                 )[0]
                          //               )
                          //           : donation2
                          //           ? playersDataForPay.registration_amount +
                          //             Number(
                          //               regDataById.donation_amounts.split(
                          //                 ','
                          //               )[1]
                          //             )
                          //           : donation3
                          //           ? playersDataForPay.registration_amount +
                          //             Number(
                          //               regDataById.donation_amounts.split(
                          //                 ','
                          //               )[2]
                          //             )
                          //           : customDonation
                          //           ? playersDataForPay.registration_amount +
                          //             Number(customDonationAmount)
                          //           : playersDataForPay.registration_amount
                          //       ) * 100,
                          //       props.match.params.id,
                          //       localStorage.getItem('id'),
                          //       playersDataForPay.team_id,
                          //       parseInt(
                          //         playersDataForPay.discount_amount !== null
                          //           ? playersDataForPay.discount_amount
                          //           : 0
                          //       ) * 100,
                          //       playersDataForPay.player_avp_id,
                          //       playersDataForPay.points,
                          //       playersDataForPay.name,
                          //       playersDataForPay.division_id,
                          //       playersDataForPay.waiting_no,
                          //       apply ? 'yes' : 'no',
                          //       playersDataForPay.discount_voucher
                          //     )
                          //   : handleCheckoutPlayers(
                          //       Number(
                          //         donation1
                          //           ? playersDataForPay.registration_amount +
                          //               Number(
                          //                 regDataById.donation_amounts.split(
                          //                   ','
                          //                 )[0]
                          //               )
                          //           : donation2
                          //           ? playersDataForPay.registration_amount +
                          //             Number(
                          //               regDataById.donation_amounts.split(
                          //                 ','
                          //               )[1]
                          //             )
                          //           : donation3
                          //           ? playersDataForPay.registration_amount +
                          //             Number(
                          //               regDataById.donation_amounts.split(
                          //                 ','
                          //               )[2]
                          //             )
                          //           : customDonation
                          //           ? playersDataForPay.registration_amount +
                          //             Number(customDonationAmount)
                          //           : playersDataForPay.registration_amount
                          //       ) * 100,
                          //       props.match.params.id,
                          //       localStorage.getItem('id'),
                          //       playersDataForPay.team_id,
                          //       parseInt(
                          //         playersDataForPay.discount_amount !== null
                          //           ? playersDataForPay.discount_amount
                          //           : 0
                          //       ) * 100,
                          //       playersDataForPay.player_avp_id,
                          //       playersDataForPay.points,
                          //       playersDataForPay.name,
                          //       playersDataForPay.division_id,
                          //       playersDataForPay.waiting_no,
                          //       one ? 'yes' : 'no',
                          //       two ? 'yes' : 'no',
                          //       playersDataForPay.discount_voucher
                          //     );
                          setModalScreen3(true);
                          setModalScreen2(false);
                          setModalScreen1(false);
                        }}
                      >
                        {playerModalLoading ? (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </span>
                        ) : (
                          <span>NEXT</span>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              ) : modalScreen3 ? (
                <>
                  <div
                    className="text-center mt-4 apply-discount-modal-text  pl-4 pr-4"
                    onClick={() => console.log(playersDataForPay)}
                  >
                    {waitingTeam !== 0 ? (
                      <>
                        <h6>Team will be Created. Do you want to continue?</h6>
                        {playerModalLoading && (
                          <div style={{ color: "#ff2072" }}>Team created</div>
                        )}
                      </>
                    ) : (
                      <>
                        Do you wish to generate the invoice for the team?
                        {invoiceMessage !== null && inVoice && (
                          <div style={{ color: "#ff2072" }}>
                            Team created and Invoice sent
                          </div>
                        )}
                        {invoiceMessage === null &&
                          !inVoice &&
                          playerModalLoading && (
                            <div style={{ color: "#ff2072" }}>Team created</div>
                          )}
                      </>
                    )}
                  </div>

                  {waitingTeam === 0 && (
                    <div className="text-center apply-discount-modal-sub-text">
                      <div className="row p-0 m-0 pt-4">
                        <div className="col-2"></div>
                        <div
                          className="col"
                          style={{ overflow: "hidden", wordWrap: "break-word" }}
                        >
                          <label
                            className="AS1checkbox MensLabel mt-0"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              onChange={() => setInVoice(!inVoice)} // Prop: Puts data into state
                              checked={inVoice}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span
                              className="AS1label"
                              style={{ textAlign: "left" }}
                            >
                              Yes
                            </span>
                          </label>
                        </div>
                        <div
                          className="col"
                          style={{ overflow: "hidden", wordWrap: "break-word" }}
                        >
                          <label
                            className="AS1checkbox MensLabel mt-0"
                            htmlFor="JAgeRangeInput"
                          >
                            <input
                              className="form-control"
                              id="JAgeRangeInput1"
                              name="11U"
                              type="checkbox"
                              value="11U"
                              onChange={() => setInVoice(!inVoice)} // Prop: Puts data into state
                              checked={!inVoice}
                            />
                            <span className="AS1checkmark MensCheck"></span>
                            <span
                              className="AS1label"
                              style={{ textAlign: "left" }}
                            >
                              No
                            </span>
                          </label>
                        </div>
                        <div className="col-2"></div>
                      </div>
                    </div>
                  )}

                  <div
                    className="row container mt-2"
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    <div className="col-12 text-center m-auto">
                      <button
                        type="button"
                        className="btn-sm ml-5 apply-discount-modal-left-button"
                        id="white-button-hover"
                        onClick={() => {
                          if (
                            regDataById.donation_amounts === null &&
                            (playersDataForPay.discount_amount === null ||
                              playersDataForPay.discount_voucher === null)
                          ) {
                            onClosePayModal();
                          }
                          if (
                            regDataById.donation_amounts === null &&
                            playersDataForPay.discount_amount !== null &&
                            playersDataForPay.discount_voucher !== null
                          ) {
                            setModalScreen1(true);
                            setModalScreen2(false);
                            setModalScreen3(false);
                          }
                          if (
                            regDataById.donation_amounts !== null
                            // &&
                            // playersDataForPay.discount_amount !== null
                            // &&
                            // playersDataForPay.discount_voucher === null
                          ) {
                            setModalScreen1(false);
                            setModalScreen2(true);
                            setModalScreen3(false);
                          }
                        }}
                      >
                        {regDataById.donation_amounts === null &&
                        (playersDataForPay.discount_amount === null ||
                          playersDataForPay.discount_voucher === null)
                          ? "CANCEL"
                          : "BACK"}
                      </button>
                      <button
                        className="btn-sm pb-1 ml-3 apply-discount-modal-right-button "
                        id="yellow-button-hover"
                        disabled={playerModalLoading}
                        onClick={async () => {
                          console.log({
                            discount_applied: playersDataForPay.dis_applied,
                            players: playersDataForPay.players,
                          });
                          playersDataForPay.discount_applied ===
                          "discount per team"
                            ? handleCheckout(
                                Number(
                                  donation1
                                    ? playersDataForPay.registration_amount +
                                        Number(
                                          regDataById.donation_amounts.split(
                                            ","
                                          )[0]
                                        )
                                    : donation2
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[1]
                                      )
                                    : donation3
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[2]
                                      )
                                    : customDonation
                                    ? playersDataForPay.registration_amount +
                                      Number(customDonationAmount)
                                    : playersDataForPay.registration_amount
                                ) * 100,
                                Number(
                                  donation1
                                    ? Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[0]
                                      )
                                    : donation2
                                    ? Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[1]
                                      )
                                    : donation3
                                    ? Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[2]
                                      )
                                    : customDonation
                                    ? Number(customDonationAmount)
                                    : null
                                ) * 100,
                                props.match.params.id,
                                localStorage.getItem("id"),
                                playersDataForPay.team_id,
                                parseInt(
                                  playersDataForPay.discount_amount !== null
                                    ? playersDataForPay.discount_amount
                                    : 0
                                ) * 100,
                                playersDataForPay.player_avp_id,
                                playersDataForPay.points,
                                playersDataForPay.name,
                                playersDataForPay.division_id,
                                playersDataForPay.waiting_no,
                                apply ? "yes" : "no",
                                playersDataForPay.discount_voucher
                              )
                            : handleCheckoutPlayers(
                                Number(
                                  donation1
                                    ? playersDataForPay.registration_amount +
                                        Number(
                                          regDataById.donation_amounts.split(
                                            ","
                                          )[0]
                                        )
                                    : donation2
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[1]
                                      )
                                    : donation3
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[2]
                                      )
                                    : customDonation
                                    ? playersDataForPay.registration_amount +
                                      Number(customDonationAmount)
                                    : playersDataForPay.registration_amount
                                ) * 100,
                                Number(
                                  donation1
                                    ? Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[0]
                                      )
                                    : donation2
                                    ? Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[1]
                                      )
                                    : donation3
                                    ? Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[2]
                                      )
                                    : customDonation
                                    ? Number(customDonationAmount)
                                    : null
                                ) * 100,
                                props.match.params.id,
                                localStorage.getItem("id"),
                                playersDataForPay.team_id,
                                parseInt(
                                  playersDataForPay.discount_amount !== null
                                    ? playersDataForPay.discount_amount
                                    : 0
                                ) * 100,
                                playersDataForPay.player_avp_id,
                                playersDataForPay.points,
                                playersDataForPay.name,
                                playersDataForPay.division_id,
                                playersDataForPay.waiting_no,
                                one ? "yes" : "no",
                                two ? "yes" : "no",
                                playersDataForPay.discount_voucher
                              );
                          setModalScreen3(true);
                          setModalScreen2(false);
                          setModalScreen1(false);
                        }}
                      >
                        {playerModalLoading ? (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </span>
                        ) : (
                          <span>OK</span>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              ) : modalScreen4 ? (
                <>
                  <div
                    className="text-center mt-2 apply-discount-modal-text"
                    onClick={() => console.log(playersDataForPay)}
                  >
                    {invoiceMessage !== null && inVoice && (
                      <div style={{ color: "#ff2072" }}>{invoiceMessage}</div>
                    )}
                    <div>Team will be created.</div>
                  </div>
                  <div className="text-center apply-discount-modal-sub-text w-100">
                    <div className="row p-0 m-0 pt-4">
                      <div
                        className="col"
                        style={{ overflow: "hidden", wordWrap: "break-word" }}
                      >
                        Do you wish to continue?
                      </div>
                    </div>
                  </div>

                  <div
                    className="row container mt-2 mx-auto"
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    <div className="col-12 text-center m-auto">
                      <button
                        type="button"
                        className="btn-sm ml-5 apply-discount-modal-left-button"
                        id="white-button-hover"
                        onClick={() => {
                          setModalScreen1(false);
                          setModalScreen2(false);
                          setModalScreen3(true);
                          setModalScreen4(false);
                        }}
                      >
                        {/* CANCEL */}

                        {regDataById.donation_amounts === null &&
                        (playersDataForPay.discount_amount === null ||
                          playersDataForPay.discount_voucher === null)
                          ? "CANCEL"
                          : "BACK"}
                      </button>
                      <button
                        className="btn-sm pb-1 ml-3 apply-discount-modal-right-button "
                        id="yellow-button-hover"
                        disabled={playerModalLoading}
                        onClick={async () => {
                          console.log({
                            discount_applied: playersDataForPay.dis_applied,
                            players: playersDataForPay.players,
                          });
                          playersDataForPay.discount_applied ===
                          "discount per team"
                            ? handleCheckout(
                                Number(
                                  donation1
                                    ? playersDataForPay.registration_amount +
                                        Number(
                                          regDataById.donation_amounts.split(
                                            ","
                                          )[0]
                                        )
                                    : donation2
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[1]
                                      )
                                    : donation3
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[2]
                                      )
                                    : customDonation
                                    ? playersDataForPay.registration_amount +
                                      Number(customDonationAmount)
                                    : playersDataForPay.registration_amount
                                ) * 100,
                                props.match.params.id,
                                localStorage.getItem("id"),
                                playersDataForPay.team_id,
                                parseInt(
                                  playersDataForPay.discount_amount !== null
                                    ? playersDataForPay.discount_amount
                                    : 0
                                ) * 100,
                                playersDataForPay.player_avp_id,
                                playersDataForPay.points,
                                playersDataForPay.name,
                                playersDataForPay.division_id,
                                playersDataForPay.waiting_no,
                                apply ? "yes" : "no",
                                playersDataForPay.discount_voucher
                              )
                            : handleCheckoutPlayers(
                                Number(
                                  donation1
                                    ? playersDataForPay.registration_amount +
                                        Number(
                                          regDataById.donation_amounts.split(
                                            ","
                                          )[0]
                                        )
                                    : donation2
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[1]
                                      )
                                    : donation3
                                    ? playersDataForPay.registration_amount +
                                      Number(
                                        regDataById.donation_amounts.split(
                                          ","
                                        )[2]
                                      )
                                    : customDonation
                                    ? playersDataForPay.registration_amount +
                                      Number(customDonationAmount)
                                    : playersDataForPay.registration_amount
                                ) * 100,
                                props.match.params.id,
                                localStorage.getItem("id"),
                                playersDataForPay.team_id,
                                parseInt(
                                  playersDataForPay.discount_amount !== null
                                    ? playersDataForPay.discount_amount
                                    : 0
                                ) * 100,
                                playersDataForPay.player_avp_id,
                                playersDataForPay.points,
                                playersDataForPay.name,
                                playersDataForPay.division_id,
                                playersDataForPay.waiting_no,
                                one ? "yes" : "no",
                                two ? "yes" : "no",
                                playersDataForPay.discount_voucher
                              );
                          setModalScreen4(true);
                          setModalScreen3(false);
                          setModalScreen2(false);
                          setModalScreen1(false);
                          setInVoice(false);
                        }}
                      >
                        {playerModalLoading ? (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </span>
                        ) : (
                          <span>OK</span>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </Modal>
          )}
          <div
            className={`container regEventEdit text-center px-5 ${
              editAddPlayerLoading && "avoid-clicks"
            }`}
          >
            <div className="row mx-0 px-5">
              <div className="col-12 m-auto text-center px-0">
                <div className="row p-0" style={{ marginBottom: 250 }}>
                  <div className="col-12 mx-0 px-0">
                    <div className="row mx-0 reg-team-edit-width">
                      <img
                        className="mx-0 px-0 reg-team-edit-image image-fluid justify-content-start"
                        alt=""
                        src={`${process.env.REACT_APP_BASE_URL}${regDataById.tournament_pic}`}
                        onError={(e) => (e.target.src = profilePic)}
                      />
                      <div className="col-9 mx-0 px-0 pl-4">
                        <div className="row mx-0 px-0">
                          <div className="col-12 mx-0 px-0 reg-team-edit-title d-flex align-items-center">
                            {regDataById.tournament_name}
                          </div>
                          <hr className="col-12 m-0 px-0 reg-team-edit-title-hr" />
                          <div className="col-12 mx-0 px-0 reg-team-edit-subtitle d-flex align-items-center">
                            {regDataById.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 text-left mx-0 pl-3 reg-team-edit-heading reg-team-edit-heading-address">
                    Address
                  </div>

                  <div className="col-12 text-left mx-0 pl-3 reg-team-edit-address reg-team-edit-address-line1">
                    {regDataById.court_name}
                  </div>
                  <div className="col-12 text-left mx-0 pl-3 reg-team-edit-address">
                    {regDataById.street_address}
                  </div>
                  <div className="col-12 text-left mx-0 pl-3 reg-team-edit-address mb-2">
                    {regDataById.city},{regDataById.state_code}{" "}
                    {regDataById.zip}
                  </div>
                  <div
                    className="col-12 text-center mt-4 mb-5"
                    style={{ color: "#ff2072" }}
                    ref={event_name_error}
                  >
                    {stripeError !== null && stripeError}
                  </div>

                  <Collapse
                    expandIconPosition="right"
                    bordered={true}
                    ghost
                    className="w-100 text-left"
                    style={{ marginBottom: 100 }}
                    expandIcon={({ isActive }) => (
                      <span
                        className={
                          isActive ? "reg-rotate mt-2" : "reg-no-rotate mt-2"
                        }
                      >
                        <img src={menuchevrondownicon} alt="" />
                      </span>
                    )}
                  >
                    {regDataById.division.map((data, index2) => (
                      <Panel
                        className="w-100"
                        header={
                          <div className="row">
                            <div className="col-sm-2 my-auto">
                              {data.division_name}
                            </div>
                            <div className="col-sm-10 ">
                              <div
                                className="row"
                                style={{ padding: "0px", margin: "0px" }}
                              >
                                <hr
                                  className="col-sm-4"
                                  style={{
                                    height: 1,
                                    backgroundColor: "#333333",
                                    border: 0,
                                  }}
                                />
                                <span
                                  className="col-sm-4 text-center"
                                  style={{ marginTop: "6px", padding: "0px" }}
                                >
                                  {data.spots}
                                </span>
                                <hr
                                  className="col-sm-4"
                                  style={{ paddingRight: "10px" }}
                                  style={{
                                    height: 1,
                                    backgroundColor: "#333333",
                                    border: 0,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        }
                        key={index2}
                      >
                        <div className="row">
                          <div
                            className="col-12 text-right"
                            style={{ marginBottom: "5px" }}
                          >
                            <RegEventDropDown>
                              <li
                                onClick={() =>
                                  addTeamFunction(data.division_id)
                                }
                              >
                                ADD TEAM
                              </li>
                            </RegEventDropDown>
                          </div>
                          {data.team.map((team, index3) => (
                            <div
                              className="col-md-6 col-sm-12 mx-0 "
                              key={index3}
                              onClick={() => console.log(team.player[1])}
                            >
                              <div className="row mx-0 px-0 d-flex justify-content-between">
                                <div className="col-2 mx-0 px-0 reg-event-team-num d-flex align-items-center">
                                  {team.team_name}
                                  {team.waiting >= 1 && " - Waiting"}
                                </div>
                                <div className="col-5 mx-0 px-0 reg-event-team-num d-flex align-items-center">
                                  {team.status !== "Paid" &&
                                    team.status !== undefined &&
                                    team.status !== null &&
                                    team.waiting === 0 && (
                                      <div className="col-12 p-0">
                                        <div
                                          className="lower-back-button w-50 ml-auto"
                                          style={
                                            team.status === "Reminder sent"
                                              ? {
                                                  opacity: 0.5,
                                                  cursor: "not-allowed",
                                                }
                                              : { opacity: 1 }
                                          }
                                          onClick={async () => {
                                            console.log(team.status);
                                            if (team.status === "UnPaid") {
                                              await remindPaymentForTeam(
                                                team.team_id
                                              );
                                              await getRegById(
                                                props.match.params.id
                                              );
                                            }
                                          }}
                                        >
                                          <span className="lower-back-button-text">
                                            {team.status === "UnPaid"
                                              ? "Remind"
                                              : team.status === "Paid"
                                              ? "Paid"
                                              : "Reminder Sent"}
                                          </span>
                                        </div>
                                        <button
                                          style={{ display: "none" }}
                                          type="button"
                                          id="checkout-button"
                                          role="link"
                                        >
                                          Checkout
                                        </button>

                                        {/* modal */}
                                      </div>
                                    )}
                                </div>
                                {team.team_id !== 0 && (
                                  <div className="col-5 mx-0 px-0 reg-event-team-num">
                                    <RegEventDropDown>
                                      <li
                                        // onClick={() => console.log('team', team)}
                                        onClick={() => {
                                          setModalData(team);
                                          setOpenModal2(true);
                                        }}
                                      >
                                        Change Division
                                      </li>
                                    </RegEventDropDown>

                                    {openModal2 && (
                                      <RegEventComponentModal
                                        openModal={openModal2}
                                        onCloseModal={() => {
                                          setOpenModal2(false);
                                          setModalData(null);
                                          getRegisteredDivisionsToNull();
                                        }}
                                        modalData={modalData}
                                        team={team}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                              <div className="row mx-0 px-0">
                                {/* team.player.map here */}
                                {/* <PlayerMapping players={team.player} /> */}
                                {regDataByIdState !== null &&
                                  regDataByIdState.division[index2] !==
                                    undefined &&
                                  regDataByIdState.division[index2].team[
                                    index3
                                  ] !== undefined &&
                                  regDataByIdState.division[index2].team[index3]
                                    .error !== undefined && (
                                    <div className="col-12 p-0">
                                      {
                                        regDataByIdState.division[index2].team[
                                          index3
                                        ].error
                                      }
                                    </div>
                                  )}
                                {team.player.map((player, ind) => {
                                  if (player === null) {
                                    return (
                                      <div className="col-12 p-0" key={ind}>
                                        <div className="row mx-0 px-0 reg-event-edit-rectangle">
                                          <div className="col-1 mx-0 px-0 d-flex align-items-center justify-content-center reg-event-edit-label-image">
                                            <img
                                              src={iconorangeplayer}
                                              alt=""
                                            ></img>
                                          </div>
                                          <div className="col-4 mx-0 px-0 d-flex justify-content-start align-items-center reg-event-edit-rectangle-label">
                                            Player
                                          </div>
                                          <div className="col-6 mx-0 px-0 d-flex justify-content-end align-items-center reg-event-edit-rectangle-value">
                                            {/* Name */}
                                          </div>
                                          <div className="col-1 mx-0 px-0 d-flex align-items-center justify-content-center">
                                            <RegEventSearchDropDown
                                              onClick={async () => {
                                                console.log(searchData);
                                                setSearchData(null);
                                                await setloading(true);
                                                await handleSearchChange(
                                                  " ",
                                                  regDataById.division[index2]
                                                    .division_id,
                                                  team.team_id
                                                );
                                                await setloading(false);
                                              }}
                                            >
                                              <div className=" container row p-0 m-auto search">
                                                <div className="col-1 p-0 m-auto">
                                                  <img
                                                    src={searchIcon}
                                                    alt=""
                                                    className="img-fluid"
                                                  />
                                                </div>
                                                <div className="col-11">
                                                  <input
                                                    className=" form-control  p-0 dropdown-searchbar-search"
                                                    type="text"
                                                    placeholder="Search"
                                                    onChange={(e) =>
                                                      handleSearchChange(
                                                        e.target.value,
                                                        regDataById.division[
                                                          index2
                                                        ].division_id,
                                                        team.team_id
                                                      )
                                                    }
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
                                              {loading ||
                                              searchData === null ? (
                                                <LoadingSpinner />
                                              ) : Array.isArray(searchData) ? (
                                                searchData.map(
                                                  (player, playerIndex) => (
                                                    <div
                                                      key={playerIndex}
                                                      className="container row m-0 hover-list p-0"
                                                      onClick={async () => {
                                                        console.log(
                                                          "1 player left"
                                                        );
                                                        setWaitingTeam(
                                                          team.waiting
                                                        );
                                                        await setloading(true);
                                                        await addPlayerToTeamFunction(
                                                          team.team_id,
                                                          player.avp_id,
                                                          player.points.replace(
                                                            /,/g,
                                                            ""
                                                          ),
                                                          player.name,
                                                          data.division_id,
                                                          team.waiting,
                                                          team.player
                                                            .filter(
                                                              (players) =>
                                                                players !== null
                                                            )
                                                            .concat({
                                                              first_name:
                                                                player.name.split(
                                                                  " "
                                                                )[0],
                                                              last_name:
                                                                player.name.split(
                                                                  " "
                                                                )[1],
                                                            }),
                                                          regDataById.division[
                                                            index2
                                                          ].discount_amount,
                                                          regDataById.division[
                                                            index2
                                                          ].discount_applied,
                                                          regDataById.division[
                                                            index2
                                                          ].discount_text,
                                                          regDataById.division[
                                                            index2
                                                          ].registration_amount,
                                                          data.format,
                                                          regDataById.division[
                                                            index2
                                                          ].discount_voucher
                                                        );
                                                        await setloading(false);
                                                        handleSearchChange(" ");
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
                                                          onError={(e) =>
                                                            (e.target.src =
                                                              profilePic)
                                                          }
                                                          src={`${process.env.REACT_APP_PLAYER_COURT_URL}/${player.pic}`}
                                                          style={{
                                                            borderRadius: "50%",
                                                            width: 25,
                                                            height: 25,
                                                            backgroundColor:
                                                              "black",
                                                          }}
                                                        />
                                                      </div>
                                                      <div className="col-6 text-left text-dark address-contact-list-content p-0">
                                                        {`${player.name}, ${player.city}, ${player.state_code}`}
                                                      </div>
                                                      <div className="col-4 text-right text-dark address-contact-list-content p-0 pr-2">
                                                        {`${player.points} pts`}
                                                      </div>
                                                    </div>
                                                  )
                                                )
                                              ) : (
                                                <div>No Player was found</div>
                                              )}
                                            </RegEventSearchDropDown>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  } else {
                                    return (
                                      <div className="col-12 p-0" key={ind}>
                                        <div className="row  mx-0 px-0 reg-event-edit-rectangle">
                                          <div className="col-1 mx-0 px-0 d-flex align-items-center justify-content-center reg-event-edit-label-image">
                                            <img
                                              src={iconorangeplayer}
                                              alt=""
                                            ></img>
                                          </div>
                                          <div className="col-4 mx-0 px-0 d-flex justify-content-start align-items-center reg-event-edit-rectangle-label">
                                            Player {ind + 1}
                                          </div>
                                          <div className="col-6 mx-0 px-0 d-flex justify-content-end align-items-center reg-event-edit-rectangle-value">
                                            {`${player.first_name} ${player.last_name}`}
                                          </div>
                                          <div
                                            className="col-1 mx-0 px-0 d-flex align-items-center justify-content-center"
                                            onClick={async () => {
                                              console.log("corss clicked");
                                              //changeArray(ind, index3, index2)
                                              //setOpenModal(true)
                                              // console.log(ind, index3, index2);
                                              var poi =
                                                player.points.split(" ");
                                              // console.log({
                                              //   team_id: team.team_id,
                                              //   avp_id: player.avp_id,
                                              //   points: Number(poi[0]),
                                              // });

                                              let countPlayer = 0;
                                              team.player.map((player, ind) => {
                                                if (player !== null) {
                                                  countPlayer++;
                                                }
                                              });

                                              if (countPlayer === 1) {
                                                if (
                                                  team.status == null ||
                                                  team.status === "UnPaid" ||
                                                  team.status ===
                                                    "Reminder sent"
                                                ) {
                                                  setPaidStatus(false);
                                                } else {
                                                  setPaidStatus(true);
                                                  await getTeamPaymentDetails(
                                                    team.team_id
                                                  );

                                                  if (
                                                    teamPaymentDataAmount ===
                                                    null
                                                  ) {
                                                    setCustomRefundAmount("0");
                                                  } else {
                                                    setCustomRefundAmount(
                                                      teamPaymentDataAmount
                                                    );
                                                  }
                                                }

                                                console.log(openRefundModal);
                                                setOpenRefundModal(true);
                                                setRefundModal1(true);
                                              } else {
                                                setOpenModal(true);
                                              }
                                              setPlayerState(player.avp_id);
                                              setTeamState(team.team_id);
                                              setPointsState(Number(poi[0]));
                                            }}
                                            //onClick={showModal}
                                          >
                                            <img src={iconmenux} alt="" />
                                          </div>
                                          <Modal
                                            open={openModal}
                                            onClose={() => setOpenModal(false)}
                                            center
                                            closeIcon={closeIcon}
                                            styles={{
                                              modal: {
                                                borderRadius: 12,
                                                boxShadow:
                                                  "0 1 2 0 rgba(0,0,0,0.2",
                                                margin: 0,
                                                padding: 0,
                                                zIndex: 1000000,
                                                marginTop: 20,
                                              },
                                              overlay: {
                                                background: "#000000",
                                                opacity: 0.5,
                                              },
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 398,
                                                height: 242,
                                                position: "relative",
                                                overflow: "hidden",
                                                borderRadius: 12,
                                              }}
                                              className="row p-0 m-0"
                                            >
                                              <div className="col-12 m-auto text-center">
                                                Are you sure you want to delete
                                                the player from the team?
                                              </div>
                                              <div className="col-12 mt-auto">
                                                <div className="reg-modal-buttons p-0">
                                                  <div
                                                    className="reg-modal-button"
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() => {
                                                      setOpenModal(false);
                                                    }}
                                                  >
                                                    No
                                                  </div>
                                                  <div
                                                    className="reg-modal-button yes-button"
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      removePlayerFromTeamFunction(
                                                        playerState,
                                                        teamState,
                                                        pointsState,
                                                        customRefundAmount,
                                                        customRefund
                                                      )
                                                    }
                                                  >
                                                    Yes
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </Modal>
                                        </div>
                                      </div>
                                    );
                                  }
                                })}
                                {/* {!team.player.includes(null) &&
                                  team.status === 'UnPaid' &&
                                  team.waiting < 1 && (
                                    <div className="col-12 p-0 mt-2">
                                      <div
                                        className="lower-back-button w-25"
                                        style={{
                                          opacity: team.player.includes(null)
                                            ? 0.5
                                            : 1,
                                        }}
                                        onClick={async () => {
                                          if (team.player.includes(null)) {
                                            console.log('exist null');
                                            setRegDataByIdState((prevState) => {
                                              prevState.division[index2].team[
                                                index3
                                              ].error =
                                                'Please Fill all players';
                                              return prevState;
                                            });
                                          } else {
                                            console.log('does not exist null');
                                            console.log(
                                              regDataById.division[index2]
                                                .registration_amount
                                            );
                                            console.log(
                                              regDataById.division[index2].team[
                                                index3
                                              ].team_id
                                            );
                                            handleCheckout(
                                              regDataById.division[index2]
                                                .registration_amount
                                            );
                                            handleCheckout(
                                              regDataById.division[index2]
                                                .registration_amount * 100,
                                              props.match.params.id,
                                              localStorage.getItem('id'),
                                              regDataById.division[index2].team[
                                                index3
                                              ].team_id
                                            );
                                          }
                                        }}
                                      >
                                        <span className="lower-back-button-text">
                                          PAY
                                        </span>
                                      </div>
                                      <button
                                        style={{ display: 'none' }}
                                        type="button"
                                        id="checkout-button"
                                        role="link"
                                      >
                                        Checkout
                                      </button>
                                    </div>
                                  )} */}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
          <Footer>
            <div
              className="m-0 col-auto ml-auto mt-3"
              // onClick={() =>
              //   props.history.push(`/regEvent/${props.match.params.id}`)
              // }
              onClick={onOpenModal}
            >
              <div className="lower-back-button-cancel" id="white-button-hover">
                <span className="lower-back-button-text">CANCEL</span>
              </div>
            </div>
            <div
              className="m-0 col-auto mt-3"
              onClick={() =>
                props.history.push(`/regEvent/${props.match.params.id}`)
              }
            >
              <div className="lower-back-button" id="yellow-button-hover">
                <span className="lower-back-button-text">SAVE</span>
              </div>
            </div>
          </Footer>
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
                backgroundColor: "#ffffff",
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
                backgroundColor: "#ffd420",
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
  );
};

export default RegEventEditComponent;
