// import React, { useState, useEffect, useContext, useRef } from 'react'
// import Header from '../../components/header/Header';
// import backIcon from '../../assets/images/icon-menu-back.svg';
// import cardIcon from '../../assets/images/icon-menu-cards-disable.svg';
// import listIcon from '../../assets/images/icon-menu-list.svg';
// import profilePic from '../../assets/images/profilepic.jpg';
// import DefaultImage from '../../assets/images/DefaultImage.jpg';
// import zoomButton from '../../assets/images/icon-menu-fullscreen.svg'
// import tournamentIcon from '../../assets/images/bracket icon.png'
// import './Bracket.css'
// import BracketMatchBox from '../../components/BracketMatchBox/BracketMatchBox';
// import BracketMatchTeam from '../../components/BracketMatchBox/BracketMatchTeam';
// import { DatePicker, TimePicker } from 'antd';
// import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
// import moment from 'moment';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import DropdownModals from '../../components/DropdownModals';
// import BracketContext from '../../context/bracket/BracketContext';

// const Bracket = (props) => {

//     const bracketContext = useContext(BracketContext);
//     const {
//         getBracket,
//         bracketData,
//     } = bracketContext;



//     useEffect(() => {
//         console.log('Event id by url:',parseInt(props.match.params.id))
//         getBracket(parseInt(props.match.params.id));
//         window.scrollTo(0, 0)
//     }, []);
  
//     useEffect(() => {
//       if(bracketData !== null)
//       console.log("bracketData",bracketData)
//     }, [bracketData])


//     // const [divisionDropdown, setDivisionDropdown] = useState(bracketData && bracketData.division && bracketData.division[0].div_id);
//     const [divisionDropdown, setDivisionDropdown] = useState({div:null,id:null});

//     function disabledStartDate(current) {
//         return current < moment().startOf('day')
//     }

//     const [date1, setDate1] = useState();
//     const [fullscreen, setFullscreen] = useState(false);
//     const [dropdown, setDropdown] = useState('Division 1');
//     const [metal, setMetal] = useState('Gold');


//     const getItems = (count, j,l) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k}-${j}-${l}`,
//         content: `Jason ${k} ${l}`
//     }));

// // a little function to help us with reordering the result
//     const reorder = (list, startIndex, endIndex) => {
//         const result = Array.from(list);
//         const [removed] = result.splice(startIndex, 1);
//         result.splice(endIndex, 0, removed);

//         console.log(result)
//         return result;
//     };

//     const move = (source, destination, droppableSource, droppableDestination) => {
//         const sourceClone = Array.from(source);
//         const destClone = Array.from(destination);
//         var dropDest=droppableDestination.index;

//         const earlyResult ={};
//         earlyResult[droppableSource.droppableId] = sourceClone;
//         earlyResult[droppableDestination.droppableId] = destClone;
//         console.log("Early result",earlyResult)
        
//         if(droppableDestination.index===2){
//             dropDest=1;
//         }
//         const [removed] = sourceClone.splice(droppableSource.index, 1);
//         const [removedFromDest] = destClone.splice(dropDest,1)

//         destClone.splice(dropDest, 0, removed);
//         sourceClone.splice(droppableSource.index,0,removedFromDest);
    
//         const result = {};
//         result[droppableSource.droppableId] = sourceClone;
//         result[droppableDestination.droppableId] = destClone;
//         console.log("Move result",result)
    
//         return result;
//     };
    
//     const grid = 8;
    
//     const getItemStyle = (isDragging, draggableStyle) => ({
//         // some basic styles to make the items look a bit nicer
//         userSelect: 'none',
//         padding: grid * 2,
//         margin: `0 0 ${grid}px 0`,
    
//         // change background colour if dragging
//         background: isDragging ? 'lightgreen' : 'grey',
    
//         // styles we need to apply on draggables
//         ...draggableStyle
//     });
    
//     const getListStyle = isDraggingOver => ({
//         // background: isDraggingOver ? 'lightblue' : 'lightgrey',
//         background: isDraggingOver ? 'lightgrey' : 'lightgrey',
//         padding: grid,
//         width: 250
//     });
    
//     const [lists, setLists] = useState({
//       droppable_0: getItems(2,0),
//       droppable_1: getItems(2,1),
//       droppable_2: getItems(2,2),
//       droppable_3: getItems(2,3),
//       droppable_4: getItems(2,4),
//       droppable_5: getItems(2,5),
//       droppable_6: getItems(2,6),
//       droppable_7: getItems(2,7),
//     })

//     const [matches, setMatches] = useState({
//         matchList1: getItems(8),
//         matchList2: getItems(4),
//         matchList3: getItems(2),
//         matchList4: getItems(1),
//     })

//     const [table, setTable] = useState({
//         column:[
//             {
//                 match_list:[
//                     {
//                         droppable_0_0: getItems(2,0,0)
//                     },
//                     {
//                         droppable_1_0: getItems(2,1,0)
//                     },
//                     {
//                         droppable_2_0: getItems(2,2,0),
//                     },
//                     {
//                         droppable_3_0: getItems(2,3,0),
//                     },
//                     {
//                         droppable_4_0: getItems(2,4,0),
//                     },
//                     {
//                         droppable_5_0: getItems(2,5,0),
//                     },
//                     {
//                         droppable_6_0: getItems(2,6,0),
//                     },
//                     {
//                         droppable_7_0: getItems(2,7,0),
//                     }
//                   ]
//             },
//             {
//                 match_list:[{
//                     droppable_0_1: getItems(2,0,1)
//                 },
//                 {
//                     droppable_1_1: getItems(2,1,1)
//                 },
//                 {
//                     droppable_2_1: getItems(2,2,1),
//                 },
//                 {
//                     droppable_3_1: getItems(2,3,1),
//                 },]
//             },
//             {
//                 match_list:[{
//                     droppable_0_2: getItems(2,0,2)
//                 },
//                 {
//                     droppable_1_2: getItems(2,1,2)
//                 },]
//             },
//             {
//                 match_list:[{
//                     droppable_0_3: getItems(2,0,3),
//                   }]
//             }
//         ]
//     })

//     console.log("table",table);

//     let matchesIndividual = []

//     for(let i=0; i<table.column.length; i++){
//         matchesIndividual.push([])
//         for(let j=0; j<table.column[i].match_list.length; j++){
//             matchesIndividual[i].push(table.column[i].match_list[j])
//         }
//     }

//     console.log("Individual Match List:",matchesIndividual)
    
//     const onDragEnd = result => {
//         const { source, destination } = result;
//         console.log("source",source)
//         console.log("destination",destination)
    
//         // dropped outside the list
//         if (!destination) {
//             return;
//         }
    
//         if (source.droppableId === destination.droppableId) {
//             // console.log(table.column[parseInt(source.droppableId.slice(-1))].match_list[parseInt(source.droppableId.slice(-3))][source.droppableId])
//             // console.log(matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId])
//             const items = reorder(
//                 matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId],
//                 source.index,
//                 destination.index
//             );
    
//             // setLists((prevState)=>({
//             //   ...prevState,
//             //   [source.droppableId]:items
//             // }))
//             // setTable((prevState)=>({
//             //       ...prevState,
                  
//             //     }))
//             console.log(matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId],items)
//             matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId]=items;
//         } else {
//         //   console.log(lists[source.droppableId])
//             // const result = move(
//             //     lists[source.droppableId],
//             //     lists[destination.droppableId],
//             //     source,
//             //     destination
//             // );
//             const result = move(
//                 matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId],
//                 matchesIndividual[parseInt(destination.droppableId.slice(-1))][parseInt(destination.droppableId.slice(-3))][destination.droppableId],
//                 source,
//                 destination
//             );
//             // setLists((prevState)=>({
//             //     ...prevState,
//             //     [Object.keys(result)[0]]:result[Object.keys(result)[0]],
//             //     [Object.keys(result)[1]]:result[Object.keys(result)[1]],
//             //   }))
//             // console.log(matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId],result[Object.keys(result)[0]]);
//             matchesIndividual[parseInt(source.droppableId.slice(-1))][parseInt(source.droppableId.slice(-3))][source.droppableId]=result[Object.keys(result)[0]]
//             matchesIndividual[parseInt(destination.droppableId.slice(-1))][parseInt(destination.droppableId.slice(-3))][destination.droppableId]=result[Object.keys(result)[1]]
//         }
//     };
    
//     useEffect(() => {
//     console.log("lists",lists)
//     console.log("matches",matches)
//     }, [lists,matches])

//     const [startTime, setStartTime] = useState()
//     console.log(divisionDropdown)

//     return (
//         <>
//             <Header>
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item" onClick={() => props.history.goBack()}>
//                     <a
//                     className="nav-link disabled"
//                     href="#/"
//                     tabIndex="-1"
//                     aria-disabled="true"
//                     >
//                     <img alt="menu" src={backIcon} className="profile-image" />
//                     </a>
//                 </li>
//                 <li className="nav-item">
//                     <a
//                     className="nav-link disabled"
//                     href="#/"
//                     tabIndex="-1"
//                     aria-disabled="true"
//                     >
//                     <img alt="menu" src={cardIcon} className="profile-image" />
//                     </a>
//                 </li>
//                 <li
//                     className="nav-item"
//                     onClick={() => props.history.push('/managers')}
//                 >
//                     <a
//                     className="nav-link disabled"
//                     href="#/"
//                     tabIndex="-1"
//                     aria-disabled="true"
//                     >
//                     <img alt="menu" src={listIcon} className="profile-image" />
//                     </a>
//                 </li>
//                 </ul>
//             </Header>
//             <div className="bracket_header container-fluid m-0 p-0">
//                 <div className="row m-0 p-0">
//                     <div className="bracket_header_title col-12 m-0 p-0 d-flex justify-content-between align-items-center">
//                         <div></div>
//                         {bracketData && bracketData.tournamentName}
//                         <div className="pr-3 d-flex ">
//                             {/* {dropdown} */}
//                             {/* <DropdownModals>
//                                 <li onClick={()=>{setDropdown("Division 1")}}>Division 1</li>
//                                 <li onClick={()=>{setDropdown("Division 2")}}>Division 2</li>
//                                 <li onClick={()=>{setDropdown("Division 3")}}>Division 3</li>
//                                 <li onClick={()=>{setDropdown("Division 4")}}>Division 4</li>
//                                 <li onClick={()=>{setDropdown("Division 5")}}>Division 5</li>
//                             </DropdownModals> */}
//                             {divisionDropdown.id}
//                             <DropdownModals>
//                                 {bracketData && bracketData.division && bracketData.division.map((division,i)=>(
//                                     <li
//                                     key={i}
//                                     onClick={()=>setDivisionDropdown({div:division,id:division.div_id})}
//                                     >
//                                         {division.div_id}
//                                     </li>
//                                 ))}
//                             </DropdownModals>
//                             {metal}
//                             <DropdownModals>
//                                 <li onClick={()=>{setMetal("Gold")}}>Gold</li>
//                                 <li onClick={()=>{setMetal("Silver")}}>Silver</li>
//                                 <li onClick={()=>{setMetal("Bronze")}}>Bronze</li>
//                             </DropdownModals>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={fullscreen?"container-fluid bracket_body_fullscreen m-0 p-0":"container-fluid bracket_body m-0 p-0"}>
//                 <img className="bracket_zoom" src={zoomButton} alt="" onClick={()=>{setFullscreen(!fullscreen)}}/>
//                 {/* <div className="" style={{position:'relative'}}> */}
//                     {/* {saveLoading?((createTournamentError === null || createTournamentError === undefined)?<div className="on_save_message d-flex justify-content-center align-items-center"><LoadingSpinner/><div className="pl-2">Creating Event...</div></div>:<div className="on_save_error">{createTournamentError && createTournamentError.message}</div>):<></>}             */}
//                     <button className="bracket_save" id="yellow-button-hover" style={{outline:'none'}}>
//                         <span className="lower-back-button-text">SAVE</span>
//                     </button>
//                 {/* </div> */}
//                 <DragDropContext onDragEnd={onDragEnd}>
//                 {/* {table.column.map((col,ind)=> */}
//                 {divisionDropdown && divisionDropdown.div && divisionDropdown.div.Bracket.map((col,ind)=>
//                 <div className="bracket_body_column d-flex flex-column m-0 p-0" style={{backgroundColor:'#f3f4f6'}}>
//                     {ind===0?(
//                     <div className="bracket_header_date d-flex justify-content-start align-items-center" >
//                         <DatePicker
//                         format="MM/DD/YYYY"
//                         style={{
//                             //  width: 150, 
//                              color: '#747474', cursor:'pointer'}}
//                         bordered={false}
//                         suffixIcon={<img src={calenderIconRight} alt="" />}
//                         className="pr-0 text-uppercase p-0 input-styling bracket_date_picker"
//                         allowClear={false}
//                         value={date1}
//                         onChange={(e) => setDate1(e)}
//                         placeholder="FRIDAY | JULY 23RD"
//                         popupStyle={{}}
//                         disabledDate={disabledStartDate}
//                         />
//                     </div>):(
//                         <div className="bracket_header_date d-flex justify-content-start align-items-center" >
//                         </div>
//                     )}

//                     {/* {matches.matchList1.map((match,i)=> */}
//                     {col.match_list.map((match,i)=>
//                     <div className={fullscreen?`bracket_match_box${ind+1}_fs d-flex flex-column m-0 p-0 pr-2 pl-2`:`bracket_match_box${ind+1} d-flex flex-column m-0 p-0 pr-2 pl-2`}>
//                         <div className="bracket_match_header d-flex justify-content-between align-items-center mr-0 ml-0 mb-0 p-0">
//                             <div className="bracket_match_index">
//                                 # 1
//                             </div>
//                             <div className="bracket_match_court_date d-flex">
//                                 {/* Court 04 | 12:34 PM */}
//                                 Court
//                                 <input
//                                     className="form-control m-0 p-0 pl-1 text-center"
//                                     type="text"
//                                     maxLength="2"
//                                     placeholder='00'
//                                     style={{width:20, height:16, direction:'rtl', backgroundColor:'transparent', outline:'none', border:'none', fontSize:10, height:17}}
//                                 />
//                                 |
//                                 <TimePicker
//                                 // use12Hours
//                                 format="h:mm A"
//                                 style={{ width: 45,height:18,cursor:'pointer',}}
//                                 bordered={false}
//                                 // suffixIcon={<img src={downArrow} alt="" />}
//                                 suffixIcon={null}
//                                 className="pr-0 text-uppercase p-0"
//                                 allowClear={false}
//                                 value={startTime}
//                                 onChange={(e) => setStartTime(e)}
//                                 placeholder=""
//                                 id="bracket_timepicker"
//                             />
//                             </div>
//                         </div>
                        
//                         <Droppable droppableId={`droppable_${i}_${ind}`}>
//                             {(provided, snapshot) => (
//                                 <div className="m-0 p-0"
//                                 ref={provided.innerRef}
//                                 style={getListStyle(snapshot.isDraggingOver)}
//                                 >
//                                     {/* {match[`droppable_${i}_${ind}`] && match[`droppable_${i}_${ind}`].map((item, index) => ( */}
//                                         {matchesIndividual[ind][i][`droppable_${i}_${ind}`].map((item, index) => (
//                                         <Draggable
//                                         key={item.id}
//                                         draggableId={item.id}
//                                         index={index}>
//                                             {(provided, snapshot) => (
//                                                 <div className={fullscreen?"bracket_match_team_1_fs row m-0 p-0":"bracket_match_team_1 row m-0 p-0"} ref={provided.innerRef}
//                                                 {...provided.draggableProps}
//                                                 {...provided.dragHandleProps}
//                                                 // style={getItemStyle(
//                                                 //     snapshot.isDragging,
//                                                 //     provided.draggableProps.style
//                                                 // )}

//                                                 // style={{marginTop:10}}
//                                                 > 
//                                                     <div className={ind===3?`bracket_match_team_winner_${index} col-2 m-0 p-0 d-flex justify-content-center align-items-center`: `bracket_match_team_no_${index} col-2 m-0 p-0 d-flex justify-content-center align-items-center`}>
//                                                         1
//                                                     </div>
//                                                     <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center">
//                                                         <img src={profilePic} className={fullscreen?"bracket_match_player_1_img_fs img-fluid m-auto p-auto":"bracket_match_player_1_img"} alt=""/>
//                                                         <img src={DefaultImage} className={fullscreen?"bracket_match_player_2_img_fs img-fluid m-auto p-auto":"bracket_match_player_2_img"} alt=""/>
//                                                     </div>
//                                                     <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
//                                                         <div className="row m-0 p-0">
//                                                             <div className="bracket_match_player_1 m-auto">
//                                                                 Taylor C.
//                                                             </div>
//                                                             <div className="bracket_match_player_2 m-auto">
//                                                                 {/* Mike G. */}
//                                                                 {item.content}
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center">
//                                                         <div className="row m-0 p-0">
//                                                                 <input
//                                                                 type='text'
//                                                                 className="col-3 m-0 bracket_score form-control pl-1 pr-1"
//                                                                 autoComplete="off"
//                                                                 value=""
//                                                                 placeholder="00"
//                                                                 />
//                                                                 <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
//                                                                 <input
//                                                                 type='text'
//                                                                 className="col-3 m-0 bracket_score form-control pl-1 pr-1"
//                                                                 autoComplete="off"
//                                                                 value=""
//                                                                 placeholder="00"
//                                                                 />
//                                                                 <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
//                                                                 <input
//                                                                 type='text'
//                                                                 className="col-4 m-0 bracket_score form-control pl-1 pr-1"
//                                                                 autoComplete="off"
//                                                                 value=""
//                                                                 placeholder="00"
//                                                                 />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </Draggable>
//                                         ))}
//                                     {provided.placeholder}
//                                 </div>
//                             )}
//                         </Droppable>
//                     </div>
//                     )}
//                 </div>
//                 )}
//                 <div className="bracket_body_column d-flex flex-column m-0 p-0">
//                 <div className="bracket_header_date d-flex justify-content-start align-items-center" >
//                         <DatePicker
//                         format="MM/DD/YYYY"
//                         style={{
//                             //  width: 150, 
//                              color: '#747474', cursor:'pointer'}}
//                         bordered={false}
//                         suffixIcon={<img src={calenderIconRight} alt="" />}
//                         className="pr-0 text-uppercase p-0 input-styling bracket_date_picker"
//                         allowClear={false}
//                         value={date1}
//                         onChange={(e) => setDate1(e)}
//                         placeholder="FRIDAY | JULY 23RD"
//                         popupStyle={{}}
//                         disabledDate={disabledStartDate}
//                         />
//                 </div>
//                 <img className={`bracket_event_icon${matchesIndividual.length + 1} pl-3 img-fluid`} src={tournamentIcon} alt=""/>
//                 </div>
//                 </DragDropContext>
//             </div>
//         </>
//     )
// }

// export default Bracket


import React, { useState, useEffect, useContext, useRef } from 'react'
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import cardIcon from '../../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../../assets/images/icon-menu-list.svg';
import profilePic from '../../assets/images/profilepic.jpg';
import DefaultImage from '../../assets/images/DefaultImage.jpg';
import zoomButton from '../../assets/images/icon-menu-fullscreen.svg'
import tournamentIcon from '../../assets/images/bracket icon.png'
import './Bracket.css'
import BracketMatchBox from '../../components/BracketMatchBox/BracketMatchBox';
import BracketMatchTeam from '../../components/BracketMatchBox/BracketMatchTeam';
import { DatePicker } from 'antd';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';
import moment from 'moment';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DropdownModals from '../../components/DropdownModals';

const Bracket = (props) => {

    function disabledStartDate(current) {
        return current < moment().startOf('day')
    }

    const [date1, setDate1] = useState();
    const [fullscreen, setFullscreen] = useState(false);
    const [dropdown, setDropdown] = useState('Division 1');

    console.log("SSSSSSSSSSSSSSSSS")


    const getItems = (count, j) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}-${j}`,
        content: `item ${k}`
    }));

// a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        var dropDest=droppableDestination.index;

        const earlyResult ={};
        earlyResult[droppableSource.droppableId] = sourceClone;
        earlyResult[droppableDestination.droppableId] = destClone;
        console.log("Early result",earlyResult)
        
        if(droppableDestination.index===2){
            dropDest=1;
        }
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        const [removedFromDest] = destClone.splice(dropDest,1)

        destClone.splice(dropDest, 0, removed);
        sourceClone.splice(droppableSource.index,0,removedFromDest);
    
        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
        console.log("Move result",result)
    
        return result;
    };
    
    const grid = 8;
    
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,
    
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',
    
        // styles we need to apply on draggables
        ...draggableStyle
    });
    
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250
    });
    
    const [lists, setLists] = useState({
      droppable_0: getItems(2,0),
      droppable_1: getItems(2,1),
      droppable_2: getItems(2,2),
      droppable_3: getItems(2,3),
      droppable_4: getItems(2,4),
      droppable_5: getItems(2,5),
      droppable_6: getItems(2,6),
      droppable_7: getItems(2,7),
    })

    const [matches, setMatches] = useState({
        matchList1: getItems(8),
        matchList2: getItems(4),
        matchList3: getItems(2),
        matchList4: getItems(1),
    })
    
    const onDragEnd = result => {
        const { source, destination } = result;
        console.log("source",source)
        console.log("destination",destination)
    
        // dropped outside the list
        if (!destination) {
            return;
        }
    
        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                lists[source.droppableId],
                source.index,
                destination.index
            );
    
            setLists((prevState)=>({
              ...prevState,
              [source.droppableId]:items
            }))
        } else {
          console.log(lists[source.droppableId])
            const result = move(
                lists[source.droppableId],
                lists[destination.droppableId],
                source,
                destination
            );

            setLists((prevState)=>({
                ...prevState,
                [Object.keys(result)[0]]:result[Object.keys(result)[0]],
                [Object.keys(result)[1]]:result[Object.keys(result)[1]],
              }))
        }
    };
    
    useEffect(() => {
    console.log("lists",lists)
    console.log("matches",matches)
    }, [lists,matches])

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
                <li className="nav-item">
                    <a
                    className="nav-link disabled"
                    href="#/"
                    tabIndex="-1"
                    aria-disabled="true"
                    >
                    <img alt="menu" src={cardIcon} className="profile-image" />
                    </a>
                </li>
                <li
                    className="nav-item"
                    onClick={() => props.history.push('/managers')}
                >
                    <a
                    className="nav-link disabled"
                    href="#/"
                    tabIndex="-1"
                    aria-disabled="true"
                    >
                    <img alt="menu" src={listIcon} className="profile-image" />
                    </a>
                </li>
                </ul>
            </Header>
            <div className="bracket_header container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                    <div className="bracket_header_title col-12 m-0 p-0 d-flex justify-content-between align-items-center">
                        <div></div>
                        Sunshine Classic 2020
                        <div className="pr-3 d-flex">
                            {dropdown}
                            <DropdownModals>
                                <li onClick={()=>{setDropdown("Division 1")}}>Division 1</li>
                                <li onClick={()=>{setDropdown("Division 2")}}>Division 2</li>
                                <li onClick={()=>{setDropdown("Division 3")}}>Division 3</li>
                                <li onClick={()=>{setDropdown("Division 4")}}>Division 4</li>
                                <li onClick={()=>{setDropdown("Division 5")}}>Division 5</li>
                            </DropdownModals>
                        </div>
                    </div>
                </div>
            </div>
            <div className={fullscreen?"container-fluid bracket_body_fullscreen m-0 p-0":"container-fluid bracket_body m-0 p-0"}>
                <img className="bracket_zoom" src={zoomButton} alt="" onClick={()=>{setFullscreen(!fullscreen)}}/>
                <DragDropContext onDragEnd={onDragEnd}>
                <div className="bracket_body_column_4v4 d-flex flex-column m-0 p-0" style={{backgroundColor:'#f3f4f6'}}>
                    <div className="bracket_header_date d-flex justify-content-start align-items-center" >
                        <DatePicker
                        format="MM/DD/YYYY"
                        style={{
                            //  width: 150, 
                             color: '#747474', cursor:'pointer'}}
                        bordered={false}
                        suffixIcon={<img src={calenderIconRight} alt="" />}
                        className="pr-0 text-uppercase p-0 input-styling bracket_date_picker"
                        allowClear={false}
                        value={date1}
                        onChange={(e) => setDate1(e)}
                        placeholder="FRIDAY | JULY 23RD"
                        popupStyle={{}}
                        disabledDate={disabledStartDate}
                        />
                    </div>
                    {matches.matchList1.map((match,i)=>
                    <div className={`bracket_match_box_4v4 d-flex flex-column m-0 p-0 pr-2 pl-2`}>
                        <div className="bracket_match_header d-flex justify-content-between align-items-center mr-0 ml-0 mb-0 p-0">
                            <div className="bracket_match_index">
                                # 1
                            </div>
                            <div className="bracket_match_court_date">
                                Court 04 | 12:34 PM
                            </div>
                        </div>
                        
                        <Droppable droppableId={`droppable_${i}`}>
                            {(provided, snapshot) => (
                                <div className="m-0 p-0"
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {lists[`droppable_${i}`] && lists[`droppable_${i}`].map((item, index) => (
                                        <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                            {(provided, snapshot) => (
                                                <div className="bracket_match_team_1_6v6 row m-0 p-0" ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                // style={getItemStyle(
                                                //     snapshot.isDragging,
                                                //     provided.draggableProps.style
                                                // )}
                                                > 
                                                    <div className={`bracket_match_team_no_${index} col-2 m-0 p-0 d-flex justify-content-center align-items-center`}>
                                                        1
                                                    </div>
                                                    <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-center pl-4 align-items-center flex-column">
                                                        <div className="d-flex m-0 p-0 flex-row">
                                                        <img src={profilePic} className="bracket_match_player_1_img_4v4" alt=""/>
                                                        <img src={DefaultImage} className="bracket_match_player_2_img" alt=""/>
                                                        </div>
                                                        <div className="d-flex m-0 p-0 flex-row">
                                                        <img src={profilePic} className="bracket_match_player_1_img_4v4" alt=""/>
                                                        <img src={DefaultImage} className="bracket_match_player_2_img" alt=""/>
                                                        </div>
                                                        <div className="d-flex m-0 p-0 flex-row">
                                                        <img src={profilePic} className="bracket_match_player_1_img_4v4" alt=""/>
                                                        <img src={DefaultImage} className="bracket_match_player_2_img" alt=""/>
                                                        </div>

                                                    </div>
                                                    <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                                                        <div className="row m-0 p-0">
                                                            <div className="bracket_match_player_1 m-auto pb-2">
                                                                Taylor C.
                                                            </div>
                                                            <div className="bracket_match_player_2 m-auto pb-2">
                                                                Mike G.
                                                            </div>
                                                            <div className="bracket_match_player_1 m-auto pb-2">
                                                                Jake L.
                                                            </div>
                                                            <div className="bracket_match_player_2 m-auto pb-2">
                                                                Amy D.
                                                            </div>
                                                            <div className="bracket_match_player_1 m-auto">
                                                                Kyle L.
                                                            </div>
                                                            <div className="bracket_match_player_2 m-auto">
                                                                An D.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center">
                                                        <div className="row m-0 p-0">
                                                                <input
                                                                type='text'
                                                                className="col-3 m-0 bracket_score form-control pl-1 pr-1"
                                                                autoComplete="off"
                                                                value=""
                                                                placeholder="00"
                                                                />
                                                                <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
                                                                <input
                                                                type='text'
                                                                className="col-3 m-0 bracket_score form-control pl-1 pr-1"
                                                                autoComplete="off"
                                                                value=""
                                                                placeholder="00"
                                                                />
                                                                <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
                                                                <input
                                                                type='text'
                                                                className="col-4 m-0 bracket_score form-control pl-1 pr-1"
                                                                autoComplete="off"
                                                                value=""
                                                                placeholder="00"
                                                                />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    )}
                </div>
                </DragDropContext>
            </div>
        </>
    )
}

export default Bracket

