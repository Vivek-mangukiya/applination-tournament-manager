import React, { useEffect, useState, useContext } from 'react';
import './TemplatePools.css';
import divisionImage from '../../assets/images/division.svg';
import clearIcon from '../../assets/images/icons-x-input.svg';
import Footer from '../../components/footer/Footer';
import DropdownPoints from '../../components/dropdownPoints/DropdownPoints';
import iconavatarpools from '../../assets/images/icon-avatar-pools.svg';
import Header from '../../components/header/Header';
import RegEventDropDown from '../../components/RegEventDropDown';
import TemplatePoolsDropDown from './TemplatePoolsDropDown';
import TemplatePoolsInput from './TemplatePoolsInput';
import TemplatePoolsCourtInput from './TemplatePoolsCourtInput';
import TemplatePoolsContext from '../../context/template_pool/templatePoolsContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Modal } from 'react-responsive-modal';
import { padding } from 'aes-js';
import ShadowContainerDropdown from '../new_event/ShadowContainerDropdown';

import downArrow from '../../assets/images/icon-menu-chevron-down.svg';



const TemplatePoolsDifferent = (props) => {
  //context
  const templatePoolsContext = useContext(TemplatePoolsContext);
  const {
    createPoolsTemplate,
    createPoolsTemplateLoading,
    createdPoolId,
    createTemplateLoading,
    createTemplateLoadingFalse,
    createPoolTemplateError,
    getPoolScheduleData,
  } = templatePoolsContext;

  const [templateName, setTemplateName] = useState('');
  const [block1, setBlock1] = useState('');
  const [block2, setBlock2] = useState('');
  const [block3, setBlock3] = useState('');
  const [block4, setBlock4] = useState('');
  const [poolsName, setPoolsName] = useState(props.match.params.templateName);

  // modal states
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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

  //same for rows
  const [trNumber, setTrNumber] = useState(
    (Number(props.match.params.teams) *
      (Number(props.match.params.teams) - 1)) /
      2
  );

  //different for dropdowns
  const [dropNumber, setDropNumber] = useState(
    ((Number(props.match.params.teams) *
      (Number(props.match.params.teams) - 1)) /
      4) *
      Number(props.match.params.pools)
  );

  console.log(
    ((Number(props.match.params.teams) *
      (Number(props.match.params.teams) - 1)) /
      4) *
      Number(props.match.params.pools)
  );

  const n = Number(props.match.params.pools);
  const m = Number(props.match.params.teams);
  const dropDownValues = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // console.log(`${i},${j}`);
      dropDownValues.push(`${i} ${j}`);
    }
  }

  const isEmptyNFullObject = (Obj) =>{
    let count=0;
    Obj!==undefined && Object.keys(Obj).map(function(key, index) {
      if( Obj[key]!==undefined){
        count++;
      }
    });

    if(count===0 || count===4)
      return true;
    else 
      return false;
  } 

const isFieldFull = () =>{
   var full = true;
   x.schedules.length>0 && x.schedules.map((schedule,index)=>{
    schedule.games.map((game,index2)=>{
        if(!isEmptyNFullObject(game)){
          full = false;
          console.log(false)
          return;
        }            
    })
        if(full===false)
        return;
  })
  return full;
}


const [incomplteFieldMsg, setFieldMsg] = useState(null);

// useEffect(()=>{
//   if(isFieldFull()){

//   }
// },[incomplteFieldMsg])

  const onSave = async () => {
    console.log(x);
    if(isFieldFull()){
      await createPoolsTemplate(JSON.stringify(x), props.history);
    }else{
      setFieldMsg("Fill all fields in a game");
    }
    
    // await createTemplateLoading();
    // ex();
  };

  // const ex = () => {
  //   setTimeout(async () => {
  //     await console.log(createdPoolId);
  //     // props.history.push(`/templatePoolsSaved/${createdPoolId.id}`);
  //     await createTemplateLoadingFalse();
  //   }, 3000);
  // };

  useEffect(() => {
    console.log(createdPoolId);
  }, [createdPoolId]);

  const [x, setX] = useState({
    type: 'pools',
    no_of_teams: Number(props.match.params.teams),
    no_of_pools: Number(props.match.params.pools),
    no_of_courts: Number(props.match.params.courts),
    name: poolsName,
    status: 2,
    schedules: [],
  });
   


  // useEffect(() => {
  //   setX((prevState) => {
  //     prevState.name = templateName;

  //     return prevState;
  //   });
  // }, [templateName]);

  useEffect(() => {
    console.log(x);
  }, [x]);


  useEffect(  () => {
      const call = async () =>
        { 
          let data;
          await getPoolScheduleData( Number(props.match.params.teams)).
          then((response)=>{
            console.log(data)
            data = response;
              
            setX((prevState) => {
              let temp={...prevState}
              for (let i = 0; i < Number(props.match.params.courts); i++) {
                  
                  var gameIndexData = []; 
                  let noOfCourts = Number(props.match.params.courts);
                  let noOfPools = Number(props.match.params.pools)
                  let length = data.length ;
                  let poolLeft=  noOfPools -  noOfCourts;
                  let extraRows =  (length * poolLeft) /  noOfCourts;
                  if((length* poolLeft)% noOfCourts!==0){
                    extraRows = extraRows + poolLeft; 
                  }
           
                  let courtLen = (length +  extraRows);                

                  let row = extraRows;
                  let extraForEach = row/poolLeft;
                  let extraForEachLoop = 0;
                  let extraPools = noOfCourts; 
                  let poolsTeamPos = 0;
                  let fieldValue = 0;

                  let array = [];
                
                  for(let j=0;j<courtLen;j++){
                      
                      if(row >0 && (j%2===1 )){
                          if(Math.floor(extraForEachLoop) === Math.floor(extraForEach)  && noOfPools!==extraPools+1){
                            extraForEachLoop=0;
                            extraPools++;
                            if( noOfPools===extraPools)
                                  break;
                          }
                          let obj ={};
                          if(data[(extraForEachLoop)*(noOfCourts) +(i)]!==undefined){

                            obj={ 
                              game:(extraPools + 10).toString(36).toUpperCase()+ ` ${(extraForEachLoop)*(noOfCourts) +(i+1)  }`,
                              // game:data[j].game,
                              team1:extraPools+1+" "+ data[(extraForEachLoop)*(noOfCourts) +(i)].team1,
                              team2:extraPools+1+" "+ data[(extraForEachLoop)*(noOfCourts) +(i)].team2,
                              reffingteam:extraPools+1+" "+ data[(extraForEachLoop)*(noOfCourts) +(i)].reffingteam

                            }

                            array.push(obj);
                            gameIndexData.push(
                              obj
                            )
                            fieldValue++;
                          }                         
                          row--;
                          extraForEachLoop++;
                      }else{
                          gameIndexData.push(
                              { 
                                  game:(i+ 10).toString(36).toUpperCase()+ ` ${poolsTeamPos+1}`,
                                  // game:data[j].game,
                                  team1:i+1+" "+ data[poolsTeamPos].team1,
                                  team2:i+1+" "+ data[poolsTeamPos].team2,
                                  reffingteam:i+1+" "+ data[ poolsTeamPos].reffingteam
                              }
                          )
                          
                          poolsTeamPos++
                      }

                      temp.schedules[i]={ court_no: i + 1, games:gameIndexData, label: Number(props.match.params.pools) === Number(props.match.params.courts) ?('pool '+(i+1)):'' };
                    // for (let j = 0; j < trNumber; j++) {
                    //   prevState.schedules[i].games[j] = {};
                    // }
                  }


                  let extraTeamsInCourts = no_of_extra_teams_in_courts;
                  extraTeamsInCourts[i] = fieldValue;
                  setExtraTeamsInCourt(extraTeamsInCourts);
                  
                  setExtraTeamData((preState)=>{
                    let temp = [...preState];
                    temp[i] =array;
                    return temp;
                  })
                }
              return temp; 
            }  
            );
          });

          }
   call();
    
   }, []);



   const [no_of_teams_in_courts,setTeamsInCourt]=useState(
     ()=>{
       var array = [];
       for(var i=0;i<Number(Number(props.match.params.courts));i++){
          array.push(Number(props.match.params.teams));
       }
       return array;
      }
   ) 

   
   const [no_of_extra_teams_in_courts,setExtraTeamsInCourt]=useState(
    ()=>{
      var array = [];
      for(var i=0;i<Number(Number(props.match.params.courts));i++){
         array.push(Number(props.match.params.teams));
      }
      return array;
     }
  ) 


  const [extraTeamData,setExtraTeamData] = useState( 
    ()=>{
      var array = [];
      for(var i=0;i<Number(Number(props.match.params.courts));i++){
         array.push([]);
      }
      return array;
     }
  ) 

  const [team_data_loader,setTeamsDataLoader]=useState(
    ()=>{
      var array = [];
      for(var i=0;i<Number(Number(props.match.params.courts));i++){
         array.push(false);
      }
      return array;
     }
  ) 

  useEffect(()=>{
    console.log(team_data_loader)
  },[team_data_loader,])


  useEffect(()=>{
    console.log(extraTeamData);
  },[extraTeamData])

   const poolScheduleDataValues = async (court_number,teams) =>
   { 
     let data;
     await getPoolScheduleData(teams).then((response)=>{
       console.log(data)
         data = response;
         
         setX((prevState) => {
           let temp={...prevState}                    
          //start
              var gameIndexData = []; 
              let noOfCourts = Number(props.match.params.courts);
              let noOfPools = Number(props.match.params.pools)
              let length = data.length ;
              let poolLeft=  noOfPools -  noOfCourts;
              let extraRows =  no_of_extra_teams_in_courts[court_number];
              



              let courtLen = (length +  extraRows);

              let row = extraRows;
              let rowCount =0;

              let extraForEach = row/poolLeft;
              let extraForEachLoop = 0;
              let extraPools = noOfCourts; 
              let poolsTeamPos = 0;
             console.log(extraRows,   extraTeamData[court_number])
              for(let j=0;j<courtLen;j++){
                  
                  if(row >0 && (j%2===1)){
                    let obj ={}
                   
                     obj={ 
                        game:extraTeamData[court_number][rowCount].game,
                        team1:extraTeamData[court_number][rowCount].team1,
                        team2:extraTeamData[court_number][rowCount].team2,
                        reffingteam:extraTeamData[court_number][rowCount].reffingteam
                      }
                  
                    
                    gameIndexData.push(
                      obj
                   )
                      row--;
                      rowCount++;
                  }
                  else if(row >0 && (poolsTeamPos===length)) {
                        let obj={ 
                          game:extraTeamData[court_number][rowCount].game,
                          team1:extraTeamData[court_number][rowCount].team1,
                          team2:extraTeamData[court_number][rowCount].team2,
                          reffingteam:extraTeamData[court_number][rowCount].reffingteam
                        }
                        gameIndexData.push(
                            obj
                        )
                        row--;
                        rowCount++;
                  }
                  else{
                      gameIndexData.push(
                          { 
                              game:(court_number+ 10).toString(36).toUpperCase()+ ` ${poolsTeamPos+1}`,
                              // game:data[j].game,
                              team1:court_number+1+" "+ data[poolsTeamPos].team1,
                              team2:court_number+1+" "+ data[poolsTeamPos].team2,
                              reffingteam:court_number+1+" "+ data[ poolsTeamPos].reffingteam
                          }
                      )
                      poolsTeamPos++
                  }




                  // temp.schedules[court_number]={ court_no: court_number + 1, games:gameIndexData, label: 'pool '+(court_number+1) };
                // for (let j = 0; j < trNumber; j++) {
                //   prevState.schedules[i].games[j] = {};
                // }
              }

           //end

           if(temp.schedules[court_number] !==undefined)
              temp.schedules[court_number].games = gameIndexData;
           return temp; 
         });
     });
   }

   useEffect(()=>{
     console.log(no_of_teams_in_courts)
    
   },[no_of_teams_in_courts])




   const [noSetsDropdown,setNoSetsDropdown] = useState(
     ()=>{
       let array=[];
       Array.apply([],{length:Number(props.match.params.courts)})
            .map((e,j)=>{
              array.push(false);
            })
       return array;
     }
   );
  //  useEffect(()=>{
  //   console.log(noSetsDropdown)

  //  },[noSetsDropdown])

  const TableData = (pro) => {
    const [firstDrop, setFirstDro] = useState('');
    const [secondDrop, setSecondDrop] = useState('');
    const [thirdDrop, setThirdDrop] = useState('');
    const [forthDrop, setForthDrop] = useState('');

    useEffect(() => {
      if (firstDrop !== '') {
        console.log(firstDrop);
        // setX([firstDrop]);
      }
    }, [firstDrop]);

    const isEmptyObject = (Obj) =>{
      let count=0;
      Obj!==undefined && Object.keys(Obj).map(function(key, index) {
        console.log(Obj[key])
        if( Obj[key]!==undefined){
          count++;
        }
      });

      if(count===0)
        return true;
      else 
        return false;
    }
    
    
    // useEffect(() => {
    //   if (x.schedules[pro.courtNumber].data[pro.index - 1] !== undefined) {
    //     console.log(x.schedules[pro.courtNumber].data[pro.index - 1].game);
    //   }
    // }, [x]);

    return (
      <tr>
        <td>
          <div className="mt-2 fm">{pro.index}</div>
        </td>
        <td>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div className="col-12 p-0 m-0 pools-box">
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto pt-2">
                    <div className="col-8 p-0 m-0">
                      {x.schedules[pro.courtNumber] !== undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1] !==
                          undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1].game}
                    </div>
                    {/* <div className="col-8 p-0 m-0">
                      {x.length !== 0 && x !== undefined && (
                        // <span>{x[0].game}</span>
                        <span>{props.courtNumber}</span>
                      )}
                    </div> */}
                    <div className="col-2 p-0">
                      <TemplatePoolsDropDown>
                      <>
                          <li
                                  key={"Empty"}
                                  index={"Empty"}
                                  onClick={() => {
                                    setFirstDro(`Empty`);
                                    setX((prevState) => {
                                      let temp = {
                                        ...prevState
                                        // schedules: { ...prevState.schedules },
                                      };                           
                                      const value = temp.schedules[pro.courtNumber].games
                                      console.log(pro.index, value.length)
                                      

                                     if(value[pro.index-1]!==undefined && value[pro.index-1]["game"] !==undefined)
                                      delete value[pro.index-1]["game"]; 

                                      if(isEmptyObject(value[pro.index-1])){
                                        let t =  value.slice(0,pro.index-1)
                                        let s =  value.slice(pro.index, value.length);
                                        temp.schedules[pro.courtNumber].games = [...t,...s];
                                      }

                                      return temp;
                                    });
                                  }}
                                >
                                {`Select Game`}
                          
                          </li>


                        {Array.apply(null, { length: dropNumber }).map(
                          (e, j) => (
                            <li
                              key={j + 1}
                              index={j + 1}
                              onClick={() => {
                                setFirstDro(`${pro.game} ${j + 1}`);
                                setX((prevState) => {
                                  // let temp = {
                                  //   schedules: { ...prevState.schedules },
                                  // };
                                  // console.log(pro.index - 1);
                                  let temp = { ...prevState };
                                  temp.schedules[pro.courtNumber].games[
                                    pro.index - 1
                                  ] = {
                                    ...temp.schedules[pro.courtNumber].games[
                                      pro.index - 1
                                    ],
                                  };
                                  temp.schedules[pro.courtNumber].games[
                                    pro.index - 1
                                  ].game = `${pro.game} ${j + 1}`;
                                  // {
                                  //   game: `${pro.game} ${j + 1}`,
                                  //   // team1: '13',
                                  //   // team2: '14',
                                  //   // reffingteam: '34',
                                  // };

                                  return temp;
                                });
                              }}
                            >{`${pro.game} ${j + 1}`}
                            </li>
                          )
                        )}
                        </>
                      </TemplatePoolsDropDown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div className="col-12 p-0 pt-2 m-0 pools-box-medium">
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto">
                    <div className="col-8 p-0 m-0">
                      {x.schedules[pro.courtNumber] !== undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1] !==
                          undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1].team1}
                    </div>
                    <div className="col-2 p-0 m-0">
                      <TemplatePoolsDropDown>
                      <>
                          <li
                                  key={"Empty"}
                                  index={"Empty"}
                                  onClick={() => {
                                    setFirstDro(`Empty`);
                                    setX((prevState) => {
                                      let temp = {
                                        ...prevState
                                        // schedules: { ...prevState.schedules },
                                      };                           
                                      const value = temp.schedules[pro.courtNumber].games
                                      console.log(pro.index, value.length)
                                      // let t =  value.slice(0,pro.index-1)
                                      // let s =  value.slice(pro.index, value.length);
                                      // temp.schedules[pro.courtNumber].games = [...t,...s];
                                      if(value[pro.index-1]!== undefined && value[pro.index-1]["team1"] !==undefined ) 
                                            delete value[pro.index-1]["team1"]; 



                                      if(isEmptyObject(value[pro.index-1])){
                                        let t =  value.slice(0,pro.index-1)
                                        let s =  value.slice(pro.index, value.length);
                                        temp.schedules[pro.courtNumber].games = [...t,...s];
                                      }
                                      return temp;
                                    });
                                  }}
                                >
                                {`Select Team`}
                          
                          </li>

                      
                        {dropDownValues.map((data, i) => (
                         
                          <li
                            key={i}
                            onClick={() => {
                              setSecondDrop(data);
                              setX((prevState) => {
                                // let temp = {
                                //   schedules: { ...prevState.schedules },
                                // };
                                // console.log(pro.index - 1);
                                let temp = { ...prevState };
                                temp.schedules[pro.courtNumber].games[
                                  pro.index - 1
                                ] = {
                                  ...temp.schedules[pro.courtNumber].games[
                                    pro.index - 1
                                  ],
                                };
                                temp.schedules[pro.courtNumber].games[
                                  pro.index - 1
                                ].team1 = data;
                                // prevState.schedules[pro.courtNumber].games[
                                //   pro.index - 1
                                // ].team1 = data;
                                // {
                                //   game: `${pro.game} ${j + 1}`,
                                //   // team1: '13',
                                //   // team2: '14',
                                //   // reffingteam: '34',
                                // };

                                return temp;
                              });
                            }}
                          >
                            {data}
                          </li>
                        ))}
                        </>
                      </TemplatePoolsDropDown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div
                className="col-12 p-auto pt-2 m-0 text-center pools-box-medium"
                style={{
                  backgroundColor: '#ffd420',
                }}
              >
                VS
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div className="col-12 p-0 pt-2 m-0 pools-box-medium">
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto">
                    <div className="col-8 p-0 m-0">
                      {x.schedules[pro.courtNumber] !== undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1] !==
                          undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1].team2}
                    </div>
                    <div className="col-2 p-0 m-0">
                      <TemplatePoolsDropDown>
                        <>

                            <li
                                    key={"Empty"}
                                    index={"Empty"}
                                    onClick={() => {
                                      setFirstDro(`Empty`);
                                      setX((prevState) => {
                                        // let temp = {
                                        //   schedules: { ...prevState.schedules },
                                        // };   
                                        let temp = { ...prevState };
                          
                                        const value = temp.schedules[pro.courtNumber].games
                                        console.log(pro.index, value.length)
                                        // let t =  value.slice(0,pro.index-1)
                                        // let s =  value.slice(pro.index, value.length);
                                        // temp.schedules[pro.courtNumber].games = [...t,...s];

                                      if( value[pro.index-1] !== undefined && value[pro.index-1]["team2"] !== undefined )
                                        delete value[pro.index-1]["team2"]; 


                                        if(isEmptyObject(value[pro.index-1])){
                                          let t =  value.slice(0,pro.index-1)
                                          let s =  value.slice(pro.index, value.length);
                                          temp.schedules[pro.courtNumber].games = [...t,...s];
                                        }

                                        return temp;
                                      });
                                    }}
                                  >
                                  {`Select Team`}
                            
                            </li>

                        {dropDownValues.map((data, i) => (
                          <li
                            key={i}
                            onClick={() => {
                              setThirdDrop(data);
                              setX((prevState) => {
                                // let temp = {
                                //   schedules: { ...prevState.schedules },
                                // };
                                // console.log(pro.index - 1);

                                let temp = { ...prevState };
                                temp.schedules[pro.courtNumber].games[
                                  pro.index - 1
                                ] = {
                                  ...temp.schedules[pro.courtNumber].games[
                                    pro.index - 1
                                  ],
                                };
                                temp.schedules[pro.courtNumber].games[
                                  pro.index - 1
                                ].team2 = data;
                                // prevState.schedules[pro.courtNumber].games[
                                //   pro.index - 1
                                // ].team2 = data;
                                // {
                                //   game: `${pro.game} ${j + 1}`,
                                //   // team1: '13',
                                //   // team2: '14',
                                //   // reffingteam: '34',
                                // };

                                return temp;
                              });
                            }}
                          >
                            {data}
                          </li>
                        ))}
                        </>
                      </TemplatePoolsDropDown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div className="col-12 p-0 pt-2 m-0 pools-box-medium">
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto">
                    <div className="col-8 p-0 m-0">
                      {x.schedules[pro.courtNumber] !== undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1] !==
                          undefined &&
                        x.schedules[pro.courtNumber].games[pro.index - 1]
                          .reffingteam}
                    </div>
                    <div className="col-2 p-0 m-0">
                      <TemplatePoolsDropDown>
                      <>

                          <li
                                      key={"Empty"}
                                      index={"Empty"}
                                      onClick={() => {
                                        setFirstDro(`Empty`);
                                        setX((prevState) => {
                                          // let temp = {
                                          //   schedules: { ...prevState.schedules },
                                          // };         
                                          let temp = { ...prevState };
                                            
                                          const value = temp.schedules[pro.courtNumber].games
                                          console.log(pro.index, value.length)
                                          // let t =  value.slice(0,pro.index-1)
                                          // let s =  value.slice(pro.index, value.length);
                                          // temp.schedules[pro.courtNumber].games = [...t,...s];

                                          if(value[pro.index-1] !== undefined && value[pro.index-1]["reffingteam"]!==undefined){
                                            delete value[pro.index-1]["reffingteam"]; 

                                          }

                                          if(isEmptyObject(value[pro.index-1])){
                                                                  let t =  value.slice(0,pro.index-1)
                                                                  let s =  value.slice(pro.index, value.length);
                                                                  temp.schedules[pro.courtNumber].games = [...t,...s];
                                            }

                                          return temp;
                                        });
                                      }}
                                    >
                                    {`Select Team`}
                              
                          </li>
                        {dropDownValues.map((data, i) => (
                          <li
                            key={i}
                            onClick={() => {
                              setForthDrop(data);
                              setX((prevState) => {
                                // let temp = {
                                //   schedules: { ...prevState.schedules },
                                // };
                                // console.log(pro.index - 1);

                                let temp = { ...prevState };
                                temp.schedules[pro.courtNumber].games[
                                  pro.index - 1
                                ] = {
                                  ...temp.schedules[pro.courtNumber].games[
                                    pro.index - 1
                                  ],
                                };
                                temp.schedules[pro.courtNumber].games[
                                  pro.index - 1
                                ].reffingteam = data;
                                // prevState.schedules[pro.courtNumber].games[
                                //   pro.index - 1
                                // ].reffingTeam = data;
                                // {
                                //   game: `${pro.game} ${j + 1}`,
                                //   // team1: '13',
                                //   // team2: '14',
                                //   // reffingteam: '34',
                                // };

                                return temp;
                              });
                            }}
                          >
                            {data}
                          </li>
                        ))}
                        </>
                      </TemplatePoolsDropDown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {createPoolsTemplateLoading ? (
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="new-event-profile container">
          <div className="row">
            <div className="col-12 my-5">
              <div className="row p-0 m-0">
                <div className="col-sm-12 col-md-2 text-center">
                  <img src={iconavatarpools} alt="" />
                </div>
                <div className="col-sm-12 col-md-8 p-0 m-0 ml-3 main-pools-heading">
                  <div className="row p-0 m-0">
                    <div className="col-11 p-0 m-0">
                      <input
                        type="text"
                        placeholder={'Name...'}
                        className="form-control template-pools-input p-0 m-0"
                        value={poolsName}
                        onChange={(e) => {
                          setPoolsName(e.target.value);
                          setX((prevState) => {
                            var temp = { ...prevState };
                            temp.name = e.target.value;
                            return temp;
                          });
                          // setX((prevState) => {
                          //   prevState.name = e.target.value;
                          //   return prevState;
                          // });
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 m-0 mt-2 text-center">
                      <img
                        src={clearIcon}
                        alt=""
                        className="mt-4"
                        onClick={() => {
                          setPoolsName('');
                          setX((prevState) => {
                            var temp = { ...prevState };
                            temp.name = '';
                            return temp;
                          });
                        }}
                      />
                    </div>
                  </div>

                  {/* <TemplatePoolsInput
                    setName={(val) => {
                      setX((prevState) => {
                        let temp = { ...prevState };
                        // temp.schedules[i] = { ...temp.schedules[i] };
                        temp.name = val;
                        return temp;
                        // prevState.schedules[i].label = val;
                        // return prevState;
                      });
                    }}
                  /> */}
                </div>
              </div>
            </div>
            {/* <div
            className="col-9 offset-1 p-0"
            style={{ marginBottom: 50, marginTop: 32 }}
          >
            <div className="row container p-0">
              <div className="col-sm-4 col-md-2 p-0">
                <img src={iconavatarpools} alt="" />
              </div>
              <div
                className="col-sm-8 col-md-10 m-auto p-0"
                style={{ borderBottom: '1px solid #979797' }}
              >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Sample 1 - 6 pools of 4 on 4 courts"
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      className="form-control template-pools-input"
                    />
                  </div>
                  <div className="mt-auto mb-auto ml-auto">
                    <img
                      src={clearIcon}
                      alt=""
                      style={{ width: 10 }}
                      onClick={() => setTemplateName('')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            {/* main content */}
            <div className="col-12 text-center all-pools-tables-data">
           { !isFieldFull() && <div style={{color:"#E72660"}} >{incomplteFieldMsg}</div>}
              <div className="row container">
                {Array.apply(null, {
                  length: Number(props.match.params.courts),
                }).map((e, i) => (
                  <div 
                  className="col-lg-6 col-sm-12 " 
                  style={{ 
                            pointerEvents: team_data_loader[i] &&  'none',
                            opacity: team_data_loader[i] ? 0.5:1,
                        }}
                  key={i}>
                    {/* <div
                    className="row p-0 m-0"
                    style={{ borderBottom: '1px solid black' }}
                  >
                    <div className="col-11 p-0 m-0">
                      <input
                        type="text"
                        className="form-control template-pools-inner-input"
                        onChange={(e) => {
                          setX((prevState) => {
                            prevState.schedules[i].label = e.target.value;
                            return prevState;
                          });
                        }}
                      />
                    </div>
                    <div className="col-1 p-0 m-0 text-center">
                      <img
                        src={clearIcon}
                        alt=""
                        style={{ width: 10 }}
                        onClick={(e) => {
                          e.target.value = '';
                          setX((prevState) => {
                            prevState.schedules[i].label = '';

                            return prevState;
                          });
                        }}
                        className="mt-2"
                      />
                    </div>
                  </div> */}
                  <div className="row">
                      <div className="col-1"></div>
                      <div className="col-5">
                      {/* { 
                        
                        Number(props.match.params.pools) === Number(props.match.params.courts) &&
                          <TemplatePoolsCourtInput
                            placeHolder ={"pool "+((i+ 10).toString(36).toUpperCase())}
                            setName={(val) => {
                              setX((prevState) => {
                                let temp = { ...prevState };
                                temp.schedules[i] = { ...temp.schedules[i] };
                                temp.schedules[i].label = val;
                                return temp;
                                // prevState.schedules[i].label = val;
                                // return prevState;
                              });
                            }}
                          />
                      } */}
                    </div>

                    <div 
                          // style={{all:"none"}} 
                          className="col-6 " 
                          style={{float:"right"}}
                          onClick={() => {
                            
                                setNoSetsDropdown((preState)=>{
                                  let temp =  [...preState];
                                  temp[i]=!temp[i];
                                  return temp;
                                })
                            
                          }}>
                            <ShadowContainerDropdown
                              // srcImg={playTypeIcon}
                              text= {`No. of teams : ${no_of_teams_in_courts[i]}`}
                              // stateData={numberOfSets}
                              mainClasses="row shadow-box"
                            >
                            
                              <div >
                             
                                  <TemplatePoolsDropDown>

                                  <>
                                      
                                    {Array.apply([], { length: 6 }).map(
                                      (e, j) => (
                                        <li
                                          key={j + 1}
                                          index={j + 1}
                                          onClick={() => {
                                            // setFirstDro(`${pro.game} ${j + 1}`);
                                          
                                            let teamsIn = no_of_teams_in_courts;
                                            teamsIn[i]= Number(j+2)
                                            console.log(teamsIn)
                                            setTeamsInCourt(teamsIn)

                                            var loader = team_data_loader;
                                            loader[i] = true;
                                            setTeamsDataLoader(loader);
                                            //pool schedule api
                                            poolScheduleDataValues(i, teamsIn[i])

                                            setTimeout(() => {
                                                loader = team_data_loader;
                                                loader[i] = false;
                                                setTeamsDataLoader(loader);  
                                                }, 500);

                                          }}
                                        >{`${j + 2}`}</li>
                                      )
                                    )}
                                  </>
                                  </TemplatePoolsDropDown>
                              
                              </div>
                             
                            </ShadowContainerDropdown>
                        
                        
                         {/* <div 
                              className ="col-3" 
                              > 
                          </div>
                         <div 
                              className ="col-7" 
                              style={{fontSize:15}}
                              >   
                                  Team of size : {no_of_teams_in_courts[i]}
                          </div>
                          <div 
                          className ="col-2"  >
                        
                                <TemplatePoolsDropDown>

                                <>
                                    
                                  {Array.apply([], { length: 6 }).map(
                                    (e, j) => (
                                      <li
                                        key={j + 1}
                                        index={j + 1}
                                        onClick={() => {
                                          // setFirstDro(`${pro.game} ${j + 1}`);
                                        
                                          let teamsIn = no_of_teams_in_courts;
                                                              teamsIn[i]= Number(j+2)
                                                              console.log(teamsIn)
                                                              setTeamsInCourt(teamsIn)
                                                              //pool schedule api
                                                              poolScheduleDataValues(i, teamsIn[i])
                                        }}
                                      >{`${j + 2}`}</li>
                                    )
                                  )}
                                </>
                                </TemplatePoolsDropDown>
                          </div> */}
                    </div>

                 
                  </div>

                      {/* <div>
                        <label>Team Size : </label>

                        <input 
                      
                            type="text" 
                            placeholder="Enter no of Teams...."
                            style={{
                              margin:20,
                              padding:5
                            }}
                            onChange={
                              (e)=>{
                                let teamsIn = no_of_teams_in_courts;
                                teamsIn[i]= e.target.value!==''? 
                                                        Number(e.target.value):
                                                        Number(props.match.params.teams);
                                console.log(teamsIn)
                                setTeamsInCourt(teamsIn)
                                //pool schedule api
                                poolScheduleDataValues(i, teamsIn[i])
                              }
                            }
                        />
                      </div> */}
                    


                    {/* input */}
                    {/* <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      borderBottom: '1px solid #979797',
                    }}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="3 pools of 4 on two Courts"
                        value={block1}
                        onChange={(e) => setBlock1(e.target.value)}
                        className="form-control template-pools-inner-input"
                      />
                    </div>
                    <div className="mt-auto mb-auto ml-auto">
                      <img
                        src={clearIcon}
                        alt=""
                        style={{ width: 10 }}
                        onClick={() => setBlock1('')}
                      />
                    </div>
                  </div> */}

                    <div className="table-responsive-sm">
                      <table className="table table-borderless mt-5 table-tempalte-pools">
                        <thead>
                          <tr>
                            <th style={{ width: 80 }}></th>
                            <th style={{ width: 80 }}>Game #</th>
                            <th style={{ width: 80 }}></th>
                            <th style={{ width: 80 }}>Court {i + 1}</th>
                            <th style={{ width: 80 }}></th>
                            <th style={{ width: 80 }}>Work</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.apply(null, { length: 
                            ((Number(no_of_teams_in_courts[i]) *
                                  (Number(no_of_teams_in_courts[i]) - 1)) /
                                  2)+no_of_extra_teams_in_courts[i]
                            }).map(
                                (e, j) => (
                                  <TableData
                                    key={j + 1}
                                    index={j + 1}
                                    game={(i + 10).toString(36).toUpperCase()}
                                    courtNumber={i}
                                  />
                                )
                              )}
                          {/* <TableData />
                              <TableData />
                              <TableData />
                              <TableData />
                              <TableData /> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer>
            <div className="m-0 col-auto ml-auto mt-3">
              <div
                className="lower-back-button-cancel"
                onClick={onOpenModal}
                //onClick={() => props.history.push('/DashboardTemplate')}
              >
                <span className="lower-back-button-text">CANCEL</span>
              </div>
            </div>

            <div className="m-0 col-auto mt-3" style={{ position: 'relative' }}>
              {createPoolTemplateError !== null && (
                <div className="on_save_error">{createPoolTemplateError}</div>
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
                  onClick={() => props.history.push('/DashboardTemplate')}
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
    </div>
  );
};

export default  TemplatePoolsDifferent;
