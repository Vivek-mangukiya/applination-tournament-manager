
import searchIcon from '../../assets/images/icon-sidemenu-search.svg';
import ActiveHistoryContext from '../../context/profileActiveHistory/activeHistoryContext';
import filterIcon from '../../assets/images/icon-filter-arrow.svg';

import React ,{useEffect, useState, useContext} from 'react'
import '../../assets/styles/PlayerListComponent.css'
import '../../shared/PlayerListData'
// import { PlayerListItemData } from '../../shared/PlayerListData';
import orangedownarrow from '../../assets/images/icon-filter-arrow.svg'
import orangeuparrow from '../../assets/images/orange-up-arrow.png'
import greyuparrow from '../../assets/images/orange-up-arrow-grey.png'
import greydownarrow from '../../assets/images/grey-down-arrow.png'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import cardIcon from '../../assets/images/icon-menu-cards-disable.svg';
import listIcon from '../../assets/images/icon-menu-list.svg';
import profilePic from '../../assets/images/profilepic.jpg'
import { Link } from 'react-router-dom';
import PlayerContext from '../../context/playerProfile/playerProfileContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'


const imagesPath = {
  orange: orangedownarrow,
  white: orangeuparrow,
  greyup: greyuparrow,
  greydown: greydownarrow
}

const ActiveHistory =(props) =>{

    const activeHistoryContext = useContext(PlayerContext);
    const {
        playerHistory,
        getPlayerHistory,
        playerId,
        historyListLoading,
    }=activeHistoryContext;

    // useEffect(() => {
    // console.log("PlayerId in history screen:",playerId)
    // getPlayerHistory(playerId);
    // console.log("PlyerHistory:",playerHistory)
    // }, [playerId]);

    useEffect(()=>{
    setCommonState((prevState) => ({ ...prevState, playerHistory}))
    console.log("PlyerListItemData",playerHistory)
    },[playerHistory])


    const [commonState, setCommonState] = useState({
          playerHistory:[],
          searchedItem:[],
          FNsortType:true,
          LNsortType:true,
          IDsortType:true,
          PointssortType:true,
          LocsortType:true,
          StatussortType:true,
          FNopen: true,
          LNopen: true,
          IDopen: true,
          Pointsopen: true,
          Locopen: true,
          Statusopen: true,
          FNclicked: false,
          LNclicked: false,
          IDclicked: false,
          Pointsclicked: false,
          Locclicked: false,
          Statusclicked: false,          
        })



      const onFNSort=(FNsortType)=> {
        setCommonState((prevState) => ({
          ...prevState,
          FNsortType: !FNsortType,
          FNopen: !commonState.FNopen,
          FNclicked: true,
          LNclicked: false,
          IDclicked: false,
          Pointsclicked: false,
          Locclicked: false,
          Statusclicked: false,
        }));
      }
        
      const onLNSort=(LNsortType)=> {
        setCommonState((prevState) => ({
          ...prevState,
          LNsortType: !LNsortType,
          LNopen: !commonState.LNopen,
          LNclicked: true,
          FNclicked: false,
          IDclicked: false,
          Pointsclicked: false,
          Locclicked: false,
          Statusclicked: false,
        }));
      }
    
      const onIDSort=(IDsortType)=> {
        setCommonState((prevState) => ({
          ...prevState,
          IDsortType: !IDsortType,
          IDopen: !commonState.IDopen,
          IDclicked: true,
          FNclicked: false,
          LNclicked: false,
          Pointsclicked: false,
          Locclicked: false,
          Statusclicked: false,
        }));
      }
    
      const onPointsSort=(PointssortType)=> {
        setCommonState((prevState) => ({
          ...prevState,
          PointssortType: !PointssortType,
          Pointsopen: !commonState.Pointsopen,
          Pointsclicked: true,
          FNclicked: false,
          LNclicked: false,
          IDclicked: false,
          Locclicked: false,
          Statusclicked: false,
        }));
      }
    
      const onLocSort=(LocsortType)=> {
        setCommonState((prevState) => ({
          ...prevState,
          LocsortType: !LocsortType,
          Locopen: !commonState.Locopen,
          Locclicked: true,
          FNclicked: false,
          LNclicked: false,
          IDclicked: false,
          Pointsclicked: false,
          Statusclicked: false,
        }));
      }
    
      const onStatusSort=(StatussortType)=> {
        setCommonState((prevState) => ({
          ...prevState,
          StatussortType: !StatussortType,
          Statusopen: !commonState.Statusopen,
          Statusclicked: true,
          FNclicked: false,
          LNclicked: false,
          IDclicked: false,
          Pointsclicked: false,
          Locclicked: false,
        }));
      }
    
      const getFNImageName = () =>{
        if(commonState.FNclicked===true){
            if(commonState.FNopen===true){
                return 'orange'
            }
            return 'white'
        }
        else{
            return 'greydown'
        }
    }
    const getLocImageName = () =>{
        if(commonState.Locclicked===true){
            if(commonState.Locopen===true){
                return 'orange'
            }
            return 'white'
        }
        else{
            return 'greydown'
        }
    }
    const getLNImageName = () =>{
        if(commonState.LNclicked===true){
            if(commonState.LNopen===true){
                return 'orange'
            }
            return 'white'
        }
        else{
            return 'greydown'
        }
    }
    const getIDImageName = () =>{
        if(commonState.IDclicked===true){
            if(commonState.IDopen===true){
                return 'orange'
            }
            return 'white'
        }
        else{
            return 'greydown'
        }
    }
    const getPointsImageName = () =>{
        if(commonState.Pointsclicked===true){
            if(commonState.Pointsopen===true){
                return 'orange'
            }
            return 'white'
        }
        else{
            return 'greydown'
        }
    }
    const getStatusImageName = () =>{
        if(commonState.Statusclicked===true){
            if(commonState.Statusopen===true){
                return 'orange'
            }
            return 'white'
        }
        else{
            return 'greydown'
        }
    }
    
    const LNimageName = getLNImageName();
    const LocimageName = getLocImageName();
    const IDimageName = getIDImageName();
    const PointsimageName = getPointsImageName();
    const FNimageName = getFNImageName();
    const StatusimageName = getStatusImageName();

      let options;
      if(commonState.searchedItem.length){
        //   const searchPattern = new RegExp(this.state.searchedItem.map(term => `(?=.*${term})`).join(''), 'i');
          options = commonState.playerHistory.filter((data) => {
              const regExp = new RegExp(commonState.searchedItem.map(term => `(?=.*${term})`).join(''), 'i');
              return (
                data.player_name.match(regExp) ||
                data.start_date.match(regExp) ||
                data.div_name.match(regExp) ||
                data.team_rank.match(regExp) ||
                data.team_final_points.toString().match(regExp) ||
                data.partner_name.match(regExp)
              );
            }
          );
      }

      else {
          options = commonState.playerHistory;
      }

      let sortedList;
      let {FNsortType,LNsortType,IDsortType,PointssortType,LocsortType,StatussortType}=commonState;
      if(FNsortType===true&&commonState.FNclicked===true)
          sortedList=options.sort((a,b)=>a.player_name.localeCompare(b.player_name))
      if(FNsortType===false&&commonState.FNclicked===true)
          sortedList=options.sort((a,b)=>-1*(a.player_name.localeCompare(b.player_name)))


      if(LNsortType===true&&commonState.LNclicked===true)
          sortedList=options.sort((a,b)=>a.start_date.localeCompare(b.start_date))
      if(LNsortType===false&&commonState.LNclicked===true)
          sortedList=options.sort((a,b)=>-1*a.start_date.localeCompare(b.start_date))


      if(IDsortType===true&&commonState.IDclicked===true)
          sortedList=options.sort((a,b)=>a.div_name.localeCompare(b.div_name))
      if(IDsortType===false&&commonState.IDclicked===true)
          sortedList=options.sort((a,b)=>-1*a.div_name.localeCompare(b.div_name))


      if(PointssortType===true&&commonState.Pointsclicked===true)
          sortedList=options.sort((a,b)=>a.team_rank-(b.team_rank))
      if(PointssortType===false&&commonState.Pointsclicked===true)
          sortedList=options.sort((a,b)=>-1*(a.team_rank-(b.team_rank)))

      
      if(LocsortType===true&&commonState.Locclicked===true)
          sortedList=options.sort((a,b)=>a.team_final_points.localeCompare(b.team_final_points))
      if(LocsortType===false&&commonState.Locclicked===true)
          sortedList=options.sort((a,b)=>-1*a.team_final_points.localeCompare(b.team_final_points))

      
      if(StatussortType===true&&commonState.Statusclicked===true)
          sortedList=options.sort((a,b)=>a.partner_name.localeCompare(b.partner_name))
      if(StatussortType===false&&commonState.Statusclicked===true)
          sortedList=options.sort((a,b)=>-1*a.partner_name.localeCompare(b.partner_name))

      
      else{
          sortedList=options;
      }
      const ListItems =()=>{
      const listItems = sortedList.map((item) =>
      <li className="row mx-0 px-0 rectangleTable" key={item.event_id} style={{cursor:'default'}}>
          <div className="col-1 mx-0 px-0 d-flex justify-content-center align-items-center"><img className="Playerteam-logo" src={profilePic}></img></div>
          <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center"><div className="text-truncate">{item.player_name}</div></div>
          <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center"><div className="text-truncate">{item.start_date}</div></div>
          <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center"><div className="text-truncate">{item.div_name}</div></div>
          <div className="col-1 mx-0 px-0 d-flex justify-content-start align-items-center"><div className="text-truncate">{item.team_rank}</div></div>
          <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center"><div className="text-truncate">{item.team_final_points}</div></div>
          <div className="col-2 mx-0 px-0 d-flex justify-content-start align-items-center"><div className="text-truncate">{item.partner_name}</div></div>
      </li>
      );
      return(listItems)
    }

      return(
          <>
          <div className="container-fluid text-center playerTable px-0" >
              <div className="row mx-0 px-0">
                  <div className="col-10 text-center m-auto px-0">
                      <div className="row m-0 p-0 table-width">

                          <div className="col-12 m-0 p-0 d-flex justify-content-start">
                              <input className="Box-Search" placeholder="Search" onChange={(e) => setCommonState((prevState) => ({ ...prevState, searchedItem: e.target.value.split(' ')}))} style={{paddingLeft:50}}></input>
                          </div>

                          <div className="col-12 m-0 p-0">
                              <div className="row m-0 p-0 headerTable">
                                  <div className="col-1 m-0 p-0 d-flex justify-content-end align-items-center">
                                  <img className="table-arrow-1" src={imagesPath[FNimageName]} onClick={() => onFNSort(commonState.FNsortType)}/>
                                  </div>
                                  <div className="col-2 m-0 p-0 d-flex justify-content-between align-items-center">
                                      TITLE
                                      <img className="table-arrow-2" src={imagesPath[LNimageName]} onClick={() => onLNSort(commonState.LNsortType)}/>
                                  </div>
                                  <div className="col-2 m-0 p-0 d-flex justify-content-between align-items-center">
                                      DATE
                                      <img className="table-arrow-3" src={imagesPath[IDimageName]} onClick={() => onIDSort(commonState.IDsortType)}/>
                                  </div>
                                  <div className="col-2 m-0 p-0 d-flex justify-content-between align-items-center">
                                      DIVISION
                                      <img className="table-arrow-4" src={imagesPath[PointsimageName]} onClick={() => onPointsSort(commonState.PointssortType)}></img>
                                  </div>
                                  <div className="col-1 m-0 p-0 d-flex justify-content-between align-items-center">
                                      FINISH
                                      <img className="table-arrow-5" src={imagesPath[LocimageName]} onClick={() => onLocSort(commonState.LocsortType)}></img>
                                  </div>
                                  <div className="col-2 m-0 p-0 d-flex justify-content-between align-items-center">
                                      POINTS
                                      <img className="table-arrow-6" src={imagesPath[StatusimageName]} onClick={() => onStatusSort(commonState.StatussortType)}></img>
                                  </div>
                                  <div className="col-2 m-0 p-0 d-flex justify-content-start align-items-center">
                                      PARTNER
                                  </div>
                              </div>
                          </div>

                          <div className="col-12 m-0 p-0 table">
                              {historyListLoading ? <LoadingSpinner/> : <ListItems/>}
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          </>
      )
}

export default ActiveHistory;
