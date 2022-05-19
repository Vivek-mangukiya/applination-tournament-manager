import React, { useState, useEffect, useContext, forwardRef, useRef, useImperativeHandle, useCallback, useMemo } from 'react';
import DropdownModals from '../../components/DropdownModals';
// import './TemplateDivision.css';
import '../../assets/styles/TemplateDivisionSaved.css';
import clearIcon from '../../assets/images/icons-x-input.svg';
import divisionImage from '../../assets/images/division.svg';
import downArrow from '../../assets/images/icon-menu-chevron-down.svg';
import calenderIcon from '../../assets/images/icon-orange-calender.svg';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
import addNewIcon from '../../assets/images/icon-orange-players-plus.svg';
import walletIcon from '../../assets/images/wallet.svg';
import playersIcon from '../../assets/images/icon-orange-players.svg';
import birdIcon from '../../assets/images/bird.svg';
import pointsIcon from '../../assets/images/icon-orange-points.svg';
import emailIcon from '../../assets/images/icon-orange-email.svg';
import purseIcon from '../../assets/images/icon-orange-purse.svg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import EventContext from '../../context/event/eventContext';
import poolsIcon from '../../assets/images/icon-orange-pools.svg';
import { DatePicker } from 'antd';
import menuchevrondownicon from '../../assets/images/icon-menu-chevron-down.svg';
import RegEventDropDown from '../../components/RegEventDropDown';
import DropDown from '../../components/DropdownComponent';
import ShadowContainer from '../new_event/ShadowContainer';
import moment from 'moment';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import playTypeIcon from '../../assets/images/icon-orange-playtype.svg';
import durationIcon from '../../assets/images/icon-orange-duration.svg';
import { Collapse } from 'antd';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import BracketContext from '../../context/bracket/BracketContext';

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
const { Panel } = Collapse;



const BracketDivisionEdit = (props) => {
  const eventContext = useContext(EventContext);
  const {
    eventInfo,
    //event id
    eventId,
    //get tournament by id
    getTournamentById,

    //get tournament data
    getTournamentData,
    divisionData,
    editDivisions,
    editDivisionsBracket,
    changedDivisionData,
    dropDownFun,
    eventDropdownData,
    getDivisions,
    editDivisionError,
    teamSizeMapDiv,
  } = eventContext;

  const bracketContext = useContext(BracketContext);
  const { generateBracket, generateBracketError,generateBracketMessage, getBracket , bracketData, resetBracketMessages} = bracketContext;

  const [save, setSave] = useState(false);

  console.log(getTournamentData)

  let divisions = [];
  let templates = [];
  let divisionWithTeamSizeErr = null;
  let errorsIndividual = [];
  let divisionsIndividual = [];

  if (divisionData && divisionData.template!==null) {
    for (let i = 0; i < divisionData.template.length; i++) {
      templates.push(divisionData.template[i]);
      divisionsIndividual.push([]);

      for (let j = 0; j < divisionData.template[i].division.length; j++) {
        divisions.push(divisionData.template[i].division[j]);
        errorsIndividual.push({id:divisionData.template[i].division[j].id,errVal:null})
        divisionsIndividual[i].push(divisionData.template[i].division[j]);
      }
    }
  }

  useEffect(() => {
    // console.log("templates",templates);
    // console.log("divisionsInd",divisionsIndividual)
  }, [templates, divisionsIndividual])

  const childRef = useRef();

    const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: {"pool_template_id":item.pool_template_id,"early_bird":item.early_bird,"early_bird_amount":item.early_bird_amount
                      ,"early_bird_date":moment(item.early_bird_date).format('YYYY-MM-DD')==='Invalid date'?null:moment(item.early_bird_date).format('YYYY-MM-DD'),"late_amount":item.late_amount,"online_pay":item.online_pay,"point_template_id":item.point_template_id,
                    "purse_amount":item.purse_amount,"registration_amount":item.registration_amount,"registration_cap":item.registration_cap,
                    "team_size":item.team_size,"match_time":item.match_time,"sets":item.sets,"max_point_per_set":item.max_point_per_set,
                    "no_of_playoff":item.no_of_playoff,"playoff_team1":item.playoff_team1,"playoff_team2":item.playoff_team2,
                    "playoff_team3":item.playoff_team3,"playoff_team4":item.playoff_team4},
      };
    }, initialValue);
  };

  const [saveLoading, setSaveLoading] = useState(false);
  const [saveLoadingModal, setSaveLoadingModal] = useState(false);
  const [generateBracketCounter, setGenerateBracketCounter] = useState(false);

  const onSaveParent = async () => {

    console.log("SAVE CLICKED")

    divisionWithTeamSizeErr=auuu.filter((div)=>{
      let tp1=(div.playoff_team1===null || div.playoff_team1==='')?0:div.playoff_team1;
      let tp2=(div.playoff_team2===null || div.playoff_team2==='')?0:div.playoff_team2;
      let tp3=(div.playoff_team3===null || div.playoff_team3==='')?0:div.playoff_team3;
      let tp4=(div.playoff_team4===null || div.playoff_team4==='')?0:div.playoff_team4;
      console.log(div.team_size,tp1,tp2,tp3,tp4)

      return parseInt(div.team_size) !== (parseInt(tp1)+parseInt(tp2)+parseInt(tp3)+parseInt(tp4))
    })

    if(divisionWithTeamSizeErr.length>0){

      console.log("divisionWithTeamSizeErr:",divisionWithTeamSizeErr)

      scroller.scrollTo(`div_${divisionWithTeamSizeErr[0].id}`, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })

      console.log("oneNullErr",oneNullErr);

      oneNullErr.map(err=>{
        console.log("err.id",err.id,parseInt(divisionWithTeamSizeErr[0].id))
        if(parseInt(err.id)===parseInt(divisionWithTeamSizeErr[0].id)){
          console.log("err.id",err.id,parseInt(divisionWithTeamSizeErr[0].id))
          updateItem(divisionWithTeamSizeErr[0].id,'errVal','TeamSize should be equal to sum of all playoff team sizes',oneNullErr)          
        }
      })
    }
    else
    {
      setSaveLoading(true);
      // console.log("OUTTT")
      await editDivisionsBracket(JSON.stringify(convertArrayToObject(auuu,'id')), props.history, parseInt(props.match.params.id));
      // await generateBracket(parseInt(props.match.params.id));
      await setSaveLoading(false);
      await resetBracketMessages();
      await onOpenModal2();
      // await onGenerateClick();
    }
  }

  const onGenerateClick =async () => {
    await setSaveLoading(false);
    await resetBracketMessages();
    await onOpenModal2();
    {console.log(generateBracketError,generateBracketMessage)}
    // console.log("gbr2",generateBracketError)
    if((generateBracketError !==null || generateBracketError !==undefined || generateBracketMessage !== null || generateBracketMessage !== undefined) && generateBracketCounter===true){
      setGenerateBracketCounter(false);
      await setTimeout(
        () => {
          onCloseModal2();
        },
        5000
      );
    }
    else if(generateBracketError ===null && generateBracketMessage===null && generateBracketCounter===true){
      setGenerateBracketCounter(false);
      await setTimeout(
        async () => {
          await getBracket(parseInt(props.match.params.id));
          await props.history.push({pathname: `/scores/${parseInt(props.match.params.id)}`, state: {from: '/bde'}});

        //  await setBracketActive(true);
          await onCloseModal2();
        },
        3000
      );
    }
  }

  // const onGenerateBracket = async () => {
  //   {console.log("####################",generateBracketError,generateBracketMessage,generateBracketCounter)}
  //   // console.log("gbr2",generateBracketError)
  //   if((generateBracketError !==null || generateBracketError !==undefined || generateBracketMessage !== null || generateBracketMessage !== undefined)
  //   //  && generateBracketCounter===true
  //    ){
  //     // setGenerateBracketCounter(false);
  //     console.log("gbe non null");
  //     await setTimeout(
  //       () => {
  //         onCloseModal2();
  //       },
  //       5000
  //     );
  //   }
  //   else if(generateBracketError ===null && generateBracketMessage===null
  //     //  && generateBracketCounter===true
  //      ){
  //     // setGenerateBracketCounter(false);
  //     console.log("gbe null");
  //     await setTimeout(
  //       async () => {
  //         await getBracket(parseInt(props.match.params.id));
  //         await props.history.push({pathname: `/scores/${parseInt(props.match.params.id)}`, state: {from: '/bde'}});

  //       //  await setBracketActive(true);
  //         await onCloseModal2();
  //       },
  //       3000
  //     );
  //   }
  // }

  // const onGenerateBracket = async () => {
  //   {console.log("####################",generateBracketError,generateBracketMessage,generateBracketCounter)}
  //   if((generateBracketError !==null || generateBracketMessage === "Pool matches is not completed for any division")
  //    ){
  //     console.log("gbe non null");
  //     await setTimeout(
  //       () => {
  //         onCloseModal2();
  //       },
  //       5000
  //     );
  //   }
  //   else if(generateBracketError ===null && generateBracketMessage==="Bracket Genrated Sucessfully"
  //      ){
  //     console.log("gbe null");
  //     await setTimeout(
  //       async () => {
  //         await getBracket(parseInt(props.match.params.id));
  //         await props.history.push({pathname: `/scores/${parseInt(props.match.params.id)}`, state: {from: '/bde'}});
  //         await onCloseModal2();
  //       },
  //       5000
  //     );
  //   }
  // }

  useEffect(() => {
    console.log(generateBracketError,generateBracketMessage,generateBracketCounter);

    if((generateBracketError !==null || generateBracketMessage === "Pool matches is not completed for any division")
    ){
     console.log("gbe non null");
     setGenerateBracketCounter(false);
     setTimeout(
       () => {
         onCloseModal2();
       },
       5000
     );
   }
   else if(generateBracketError ===null && generateBracketMessage==="Bracket Genrated Sucessfully"
      ){
     console.log("gbe null");
     setGenerateBracketCounter(false);
     setTimeout(
       async () => {
         await getBracket(parseInt(props.match.params.id));
         await props.history.push({pathname: `/scores/${parseInt(props.match.params.id)}`, state: {from: '/bde'}});
         await onCloseModal2();
       },
       2000
     );
   }
   else if(generateBracketError !==null || generateBracketMessage==="Bracket Already Genrated"
   ){
    console.log("gbe non null");
    setGenerateBracketCounter(false);
    setTimeout(
      () => {
        onCloseModal2();
      },
      5000
    );
  }
  }, [generateBracketError, generateBracketMessage])

    useEffect(() => {
        console.log('Event id by url:',parseInt(props.match.params.id))
        getDivisions(parseInt(props.match.params.id));
        getTournamentById(parseInt(props.match.params.id));
        dropDownFun();
    }, []);

    useEffect(() => {
      if(divisionData !== null)
      console.log("divisionData",divisionData)
    }, [divisionData])

    const blankCat = { name: "", age: "" };
    const [catState, setCatState] = useState([{ ...blankCat }]);

    const addCat = () => {
      setCatState([...catState, { ...blankCat }]);
    };

    const [dogState, setDogState] = useState()

    var dogInitialState=[];
    var templateInitialState=[];
    
    if (divisionData && divisionData.template) {

    for(let i=0; i<templates.length; i++){
      templateInitialState[i]={
        template_name:templates[i].template_name
      }
    }

}

    const dogInitialState2=dogInitialState

    const [auuu, setAuuu] = useState([]);
    const [templateNames, setTemplateNames] = useState(templateInitialState?templateInitialState:[] )
    // const [oneNullErr, setOneNullErr] = useState(errorsIndividual);
    const [oneNullErr, setOneNullErr] = useState([]);

    // console.log("Divisions:",divisions)
    // console.log("auuu",auuu)

    useEffect(() => {
      setAuuu(divisions);
      setOneNullErr(errorsIndividual);
      console.log("auuu",auuu)
    // }, [divisions])
  }, [divisionData])

  useEffect(() => {

    console.log("team size test!")
    auuu.forEach((div,idx)=>{
      if(div.no_of_playoff===1){
        div.playoff_team1=div.team_size;
        div.playoff_team2=null;
        div.playoff_team3=null;
        div.playoff_team4=null;
      }
      if(div.no_of_playoff===2){
        div.playoff_team3=null;
        div.playoff_team4=null;
      }
      if(div.no_of_playoff===3){
        div.playoff_team4=null;
      }
    })
  })

    const handleCatChange = e => {
      // console.log("e:",e)
      const updatedCats = [...auuu];
      updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
      setCatState(updatedCats);
    };

    const handleDropdownChange = (idx,className, val) => {
      const updatedCats = [...auuu];
      updatedCats[idx][className] = val===''?null:val;
      // updatedCats[idx][className] = val;
      setCatState(updatedCats);
    }

    const [poolsChoice, setPoolsChoice] = useState('');
    const [pool_id, setPool_id] = useState('');

  
    const [firstModal, setFirstModal] = useState('');
    const [pointsDropdown, setPointsDropdown] = useState(false);
    const [placementPointsChoice, setPlacementPointsChoice] = useState('');
    const refPoints = useRef();
    useOnClickOutside(refPoints, () => setPointsDropdown(false));
  
    const [poolsDropdown, setPoolsDropdown] = useState(false);
    const refPools = useRef();
    useOnClickOutside(refPools, () => setPoolsDropdown(false));
  
    function useOnClickOutside(ref, handler) {
      useEffect(
        () => {
          const listener = event => {
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
        },
        [ref, handler]
      );
  }
  
    // const division_id=props.division.id;
  let noOfPlayoffs = 4;
  const updateItem =(id, whichvalue, newvalue, array)=> {
    let index = array.findIndex(x=> x.id === parseInt(id)); 
    if (index !== -1){
        let temporaryarray = array.slice();
        temporaryarray[index].errVal = newvalue;
        setOneNullErr(temporaryarray);
        console.log("temporaryArray:",temporaryarray)
    }
    else {
        console.log('no match');
    }
  }

  function disabledStartDate(current) {
    return current < moment().startOf('day')
  }

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

    // modal states
    const [open2, setOpen2] = useState(false);

    const onOpenModal2 = () => {
      setOpen2(true);
      setSaveLoadingModal(false);

    }
    const onCloseModal2 = async () => {
      await setOpen2(false);
      // await setSaveLoadingModal(false);
    };


  return (
    <>
      <div className="m-0" style={{ paddingBottom:90 }}>
        <Header/>
      </div>
      {/* {(templates.length === 0 || divisions.length === 0)? ( */}
      {(auuu.length < 1)? (
        <div className="col-12 text-center loading_height">
            <LoadingSpinner />
        </div>
          ) : (
      <div className="new-event-profile container p-0 main_height">
 
         {/* {
           templates.map((template, id)=>{
             const tnId = `tn-${id}`;
             return(
              <> */}

              <div className="row" style={{ paddingBottom:90 }} >
                <div className="col-5 m-auto text-center">
                  <div className="row">
                    <div className="col-12">
                      {/* image and event name */}
                      <div className="row">
                        <div className="col-4 p-0 text-left">
                          <img
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
                          <div style={{ display: 'flex', flexDirection: 'row' }} className="row">
                            <div className="col-10 template_name event-input text-left">
                              <input
                                type="text"
                                placeholder="Event Name"
                                className="template_name form-control event-input"
                                style={{ width: 250}}
                                // name={tnId}
                                // data-idx={id}
                                // id={tnId}
                                // className="template_name"
                                // value={templateNames && templateNames.template_name}
                                // value={}
                                value={getTournamentData && getTournamentData.tournament.name}
                              />
                              {/* {templateNames.template_name} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {
                      divisions.map((div, idx)=>{
                        const poId = `po-${idx}`;
                        const ppId = `pp-${idx}`;
                        const rcId = `rc-${idx}`;
                        const tsId = `ts-${idx}`;
                        const opId = `op-${idx}`;
                        const paId = `pa-${idx}`;
                        const ebId = `eb-${idx}`;
                        const ebdId = `ebd-${idx}`;
                        const ebaId = `eba-${idx}`;
                        const raId = `ra-${idx}`;
                        const laId = `la-${idx}`;

                        return(
                          <>
                          {/* {console.log(div.id)} */}
                          {divisionWithTeamSizeErr!==null && console.log(divisionWithTeamSizeErr[0].id)}
                          <div className="col-12 p-0" style={{ marginTop: 24 }} >
                          <Element name={`div_${div.id}`}><div className="one_null_error">{oneNullErr.find(err=>err.id===div.id) && oneNullErr.find(err=>err.id===div.id).errVal}</div></Element>
                          {/* {(divisionWithTeamSizeErr && parseInt(divisionWithTeamSizeErr[0].id)===parseInt(div.id))?(<div className="one_null_error">Team Size must be equal to sum of playoff teams sizes</div>):""} */}
                            <Collapse
                              expandIconPosition="right"
                              bordered={true}
                              ghost
                              className="p-0"
                              expandIcon={({ isActive }) => (
                                <span
                                  className={
                                    isActive ? 'reg-rotate mt-3' : 'reg-no-rotate mt-2'
                                  }
                                >
                                  <img src={menuchevrondownicon} alt="" />
                                </span>
                              )}
                              // className=" reg-padding"
                            >
                                  <Panel
                                  className="px-0 pb-0"
                                  header={
                                    <div className="row">
                                      <div className="col-sm-2 my-auto m-0 p-0">{div.div_name}</div>
                                      <div className="col-sm-10">
                                        <hr
                                          style={{
                                            height: 1,
                                            backgroundColor: '#333333',
                                            border: 0,
                                          }}
                                        />
                                      </div>
                                    </div>
                                  }
                                >
                                <div>
                                  {/*Details */}
                                  <div className="col-12 p-0" style={{ marginTop: 24 }}>
                                    <div className="text-left address-title">Details</div>
                                    {/* Pools */}
                                    {/* Team Size */}
                                    <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2">
                                          <img
                                            src={playersIcon}
                                            alt=""
                                            className="img-fluid mb-1"
                                          />
                                        </div>
                                        <div className="col-6 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Team Size
                                        </div>
                                        <div className="col-4 p-0 text-right box-shadow-text mt-auto mb-auto">
                                          {auuu && auuu[idx] && auuu[idx].team_size}  
                                        </div>
                                        <div className="col-1 p-0 pr-1 justify-content-center align-items-center m-auto">
                                          <DropdownModals>
                                            {teamSizeMapDiv !== null &&
                                                teamSizeMapDiv.map((data) => (
                                                  <li
                                                    onClick={() => handleDropdownChange(idx,"team_size",data.toString())}
                                                    key={data}
                                                  >
                                                    {data}
                                                  </li>
                                                ))
                                              }
                                          </DropdownModals>
                                          </div>
                                      </div>
                                    </div>
                                    {/* No of sets */}
                                    <ShadowContainer
                                      srcImg={playTypeIcon}
                                      text="Number of sets"
                                      // stateData={numberOfSets}
                                      stateData={auuu && auuu[idx] && auuu[idx].sets}  
                                      mainClasses="row shadow-box">
                                        <DropdownModals>
                                            <li onClick={()=>handleDropdownChange(idx,"sets","1")}>1</li>
                                            <li onClick={()=>handleDropdownChange(idx,"sets","2")}>2</li>
                                            <li onClick={()=>handleDropdownChange(idx,"sets","3")}>3</li>
                                            <li onClick={()=>handleDropdownChange(idx,"sets","4")}>4</li>
                                        </DropdownModals>
                                    </ShadowContainer>
                                    {/* Match time */}
                                    <ShadowContainer
                                      srcImg={durationIcon}
                                      text="Match Time"
                                      stateData={auuu && auuu[idx] && auuu[idx].match_time}  
                                      mainClasses="row shadow-box">
                                        <DropdownModals>
                                            <li onClick={()=>handleDropdownChange(idx,"match_time",50)}>50 minutes</li>
                                            <li onClick={()=>handleDropdownChange(idx,"match_time",60)}>60 minutes</li>
                                            <li onClick={()=>handleDropdownChange(idx,"match_time",70)}>70 minutes</li>
                                            <li onClick={()=>handleDropdownChange(idx,"match_time",80)}>80 minutes</li>
                                        </DropdownModals>
                                    </ShadowContainer>
                                    {/* Max points per set */}
                                    {/* <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img src={pointsIcon} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Max points per set
                                        </div>
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            data-idx={idx}
                                            
                                            className="max_point_per_set"
                                            value={auuu && auuu[idx] && auuu[idx].max_point_per_set===null?"":auuu && auuu[idx] && auuu[idx].max_point_per_set}
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'max_point_per_set','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
                                            className="img-fluid mb-1 mr-1"
                                          />
                                        </div>
                                      </div>
                                    </div> */}
                                    <div className="container">
                                      <div className={'row shadow-box'}>
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img src={pointsIcon} alt="" className="img-fluid " />
                                        </div>
                                        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 font">
                                          Max points per set
                                        </div>
                                        <div className="col-6 p-0 text-right  m-auto text-capitalize input-styling">
                                        <input
                                            type="number"
                                            data-idx={idx}
                                            className="max_point_per_set"
                                            value={auuu && auuu[idx] && auuu[idx].max_point_per_set===null?"":auuu && auuu[idx] && auuu[idx].max_point_per_set}
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                        <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'max_point_per_set','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
                                            className="img-fluid mb-1 mr-1"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Number of playoffs */}
                                    <ShadowContainer
                                      srcImg={playersIcon}
                                      text="Number of playoffs"
                                      stateData={auuu && auuu[idx] && auuu[idx].no_of_playoff}
                                      // stateData={4}
                                      mainClasses="row shadow-box">
                                        <DropdownModals>
                                            <li onClick={()=>handleDropdownChange(idx,"no_of_playoff",1)}>1</li>
                                            <li onClick={()=>handleDropdownChange(idx,"no_of_playoff",2)}>2</li>
                                            <li onClick={()=>handleDropdownChange(idx,"no_of_playoff",3)}>3</li>
                                            <li onClick={()=>handleDropdownChange(idx,"no_of_playoff",4)}>4</li>
                                        </DropdownModals>
                                    </ShadowContainer>
                                    {/* Teams in each playoff */}
                                    {auuu && auuu[idx] && auuu[idx].no_of_playoff !== null &&auuu && auuu[idx] && auuu[idx].no_of_playoff === 2 && (
                                      <>
                                      <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img src={playersIcon} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Teams in playoff 1
                                        </div>
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            // className="form-control p-0 webkit_spinner_none"
                                            value={auuu && auuu[idx] && auuu[idx].playoff_team1}
                                            data-idx={idx}
                                            
                                            className="playoff_team1"
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'playoff_team1','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
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
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            // className="form-control p-0 webkit_spinner_none"
                                            value={auuu && auuu[idx] && auuu[idx].playoff_team2}
                                            data-idx={idx}
                                            
                                            className="playoff_team2"
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'playoff_team2','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
                                            className="img-fluid mb-1 mr-1"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    </>
                                    )}
                                    {auuu && auuu[idx] && auuu[idx].no_of_playoff !== null && auuu && auuu[idx] && auuu[idx].no_of_playoff === 3 && (
                                      <>
                                      <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img src={playersIcon} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Teams in playoff 1
                                        </div>
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            // className="form-control p-0 webkit_spinner_none"
                                            value={auuu && auuu[idx] && auuu[idx].playoff_team1}
                                            data-idx={idx}
                                            
                                            className="playoff_team1"
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'playoff_team1','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
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
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            // className="form-control p-0 webkit_spinner_none"
                                            value={auuu && auuu[idx] && auuu[idx].playoff_team2}
                                            data-idx={idx}
                                            
                                            className="playoff_team2"
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'playoff_team2','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
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
                                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                            <input
                                              type="number"
                                              // placeholder="No. of courts"
                                              // className="form-control p-0 webkit_spinner_none"
                                              value={auuu && auuu[idx] && auuu[idx].playoff_team3}
                                              data-idx={idx}
                                              
                                              className="playoff_team3"
                                              min="1"
                                              style={{direction:'rtl', height:30, fontSize:14}}
                                              onChange={handleCatChange}
                                            />
                                          </div>
                                          <div className="col-1 p-0 text-right m-auto pr-1">
                                            <img
                                              src={clearIcon}
                                              onClick={()=>handleDropdownChange(idx,'playoff_team3','')}
                                              alt=""
                                              style={{cursor:'pointer'}}
                                              className="img-fluid mb-1 mr-1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                    )}
                                    {auuu && auuu[idx] && auuu[idx].no_of_playoff !== null && auuu && auuu[idx] && auuu[idx].no_of_playoff === 4 && (
                                      <>
                                      <div className="container">
                                      <div className="row shadow-box">
                                        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                                          <img src={playersIcon} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">
                                          Teams in playoff 1
                                        </div>
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            // className="form-control p-0 webkit_spinner_none"
                                            value={auuu && auuu[idx] && auuu[idx].playoff_team1}
                                            data-idx={idx}
                                            
                                            className="playoff_team1"
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'playoff_team1','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
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
                                        <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                          <input
                                            type="number"
                                            // placeholder="No. of courts"
                                            // className="form-control p-0 webkit_spinner_none"
                                            value={auuu && auuu[idx] && auuu[idx].playoff_team2}
                                            data-idx={idx}
                                            
                                            className="playoff_team2"
                                            min="1"
                                            style={{direction:'rtl', height:30, fontSize:14}}
                                            onChange={handleCatChange}
                                          />
                                        </div>
                                        <div className="col-1 p-0 text-right m-auto pr-1">
                                          <img
                                            src={clearIcon}
                                            onClick={()=>handleDropdownChange(idx,'playoff_team2','')}
                                            alt=""
                                            style={{cursor:'pointer'}}
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
                                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                            <input
                                              type="number"
                                              // placeholder="No. of courts"
                                              // className="form-control p-0 webkit_spinner_none"
                                              value={auuu && auuu[idx] && auuu[idx].playoff_team3}
                                              data-idx={idx}
                                              
                                              className="playoff_team3"
                                              min="1"
                                              style={{direction:'rtl', height:30, fontSize:14}}
                                              onChange={handleCatChange}
                                            />
                                          </div>
                                          <div className="col-1 p-0 text-right m-auto pr-1">
                                            <img
                                              src={clearIcon}
                                              onClick={()=>handleDropdownChange(idx,'playoff_team3','')}
                                              alt=""
                                              style={{cursor:'pointer'}}
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
                                          <div className="col-5 p-0 text-right box-shadow-text mt-auto mb-auto pl-2">
                                            <input
                                              type="number"
                                              // placeholder="No. of courts"
                                              // className="form-control p-0 webkit_spinner_none"
                                              value={auuu && auuu[idx] && auuu[idx].playoff_team4}
                                              min="1"
                                              data-idx={idx}
                                              
                                              className="playoff_team4"
                                              style={{direction:'rtl', height:30, fontSize:14}}
                                              onChange={handleCatChange}
                                            />
                                          </div>
                                          <div className="col-1 p-0 text-right m-auto pr-1">
                                            <img
                                              src={clearIcon}
                                              onClick={()=>handleDropdownChange(idx,'playoff_team4','')}
                                              alt=""
                                              style={{cursor:'pointer'}}
                                              className="img-fluid mb-1 mr-1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                    )}
                                  </div>

                                  {/* Finance */}
                                  
                                </div>
                              
                            
                            </Panel>
                            </Collapse>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              {/* </>
             )
           })
         } */}

         

        <Footer>
          <div className="m-0 col-auto ml-auto mt-3">
            <div className="lower-back-button-cancel" id="white-button-hover" onClick={onOpenModal}>
              <span className="lower-back-button-text">CANCEL</span>
            </div>
          </div>
          <div className="m-0 col-auto mt-3" style={{position:'relative'}}>
          {/* <div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Creating Manager...</div></div> */}
          {saveLoading?(editDivisionError === null?<div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Editing Divisions...</div></div>:<div className="on_save_error">{editDivisionError && editDivisionError.message}</div>):<></>}
            <div className="lower-back-button" onClick={onSaveParent}>
              <span className="lower-back-button-text">GENERATE BRACKET</span>
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

      <Modal
              open={open2}
              onClose={onCloseModal2}
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
        {saveLoadingModal ? (
          // <div className="profile_successfully_deleted">
          //   {saveLoadingModal ? 
          //     ((generateBracketError === null || generateBracketError === undefined)?
          //       (generateBracketMessage===null?
          //         (<div className="on_save_message_brackets d-flex justify-content-center align-items-center"><LoadingSpinner/></div>):
          //           (<div className="on_save_message_brackets d-flex justify-content-center align-items-center"><div className="pl-2">{generateBracketMessage}</div></div>)):
          //             (<div className="on_save_error_brackets">{generateBracketError}</div>))
          //               :<></>}
          // </div>
          <div className="profile_successfully_deleted">
          {
          // saveLoadingModal ? 
            ((generateBracketError === null || generateBracketError === undefined)?
              (generateBracketMessage===null?
                (<div className="on_save_message_brackets d-flex justify-content-center align-items-center"><LoadingSpinner/></div>):
                  (<div className="on_save_message_brackets d-flex justify-content-center align-items-center"><div className="pl-2">{generateBracketMessage}</div></div>)):
                    (<div className="on_save_error_brackets">{generateBracketError}</div>))
                      // :<></>
                      }
        </div>
        // {(generateBracketError === null || generateBracketError === undefined)?
        //   (generateBracketMessage===null?):()}
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
                The bracket may have already been initiated
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
                Do you want to continue?
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
                    onClick={onCloseModal2}
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
                    NO, CANCEL
                  </button>
                  <button
                    className="btn-sm pb-1 ml-3"
                    id="yellow-button-hover"
                    onClick={async ()=>{
                      await setSaveLoadingModal(true);
                      await generateBracket(parseInt(props.match.params.id));
                      // await setGenerateBracketCounter(true);
                      // await onGenerateBracket();
                      // await onOpenModal2;
                      // await onGenerateClick();
                    }}
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
                    YES, CONTINUE
                  </button>
                </div>
              </div>
              </>
        )}
            </Modal>
      </div>
          )}
    </>
  );
};

export default BracketDivisionEdit;

