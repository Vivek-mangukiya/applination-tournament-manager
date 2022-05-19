import React, { useState, useContext, useEffect } from 'react';
import './TemplatePools.css';
import divisionImage from '../../assets/images/division.svg';
import Header from '../../components/header/Header';
import hamburgerIcon from '../../assets/images/icon-menu-hamburger.svg';
import iconavatarpools from '../../assets/images/icon-avatar-pools.svg';
import backIcon from '../../assets/images/icon-menu-back.svg';
import TemplatePoolsContext from '../../context/template_pool/templatePoolsContext';
import TemplatePoolsDropDown from './TemplatePoolsDropDown';
import RegEventDropDown from '../../components/RegEventDropDown';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import TemplatePointsContext from '../../context/template_points/templatePointsContext';

const TemplatePoolsSaved = (props) => {
  //context
  const templatePoolsContext = useContext(TemplatePoolsContext);
  const {
    getTemplatePoolById,
    templatePoolsDataById,
    createTemplateLoading,
    createPoolsTemplate,
    createPoolsTemplateLoading,
    getPoolsByIdError,
  } = templatePoolsContext;

  const templatePointsContext = useContext(TemplatePointsContext);
  const { deleteData } = templatePointsContext;

  useEffect(() => {
    console.log({ createPoolsTemplateLoading, templatePoolsDataById });
  }, [createPoolsTemplateLoading, templatePoolsDataById]);

  useEffect(() => {
    createTemplateLoading();
    getTemplatePoolById(props.match.params.pool_id);
  }, []);

  useEffect(() => {
    console.log({ templatePoolsDataById });
  }, [templatePoolsDataById]);

  const exampleData = {
    type: 'pools',
    no_of_teams: 4,
    no_of_pools: 4,
    no_of_courts: 2,
    name: 'main name',
    details: 'few details',
    status: 2,
    schedules: [
      {
        court_no: 1,
        label: 'side heading 1',
        games: [
          {
            game: 'A 2',
            team1: '2 1',
            team2: '1 2',
            reffingTeam: '2 2',
          },
          {
            game: 'A 4',
            team1: '2 2',
            team2: '1 2',
            reffingTeam: '1 2',
          },
          {
            game: 'A 3',
            team1: '1 2',
            team2: '2 1',
            reffingTeam: '2 2',
          },
          {
            game: 'A 2',
            team1: '2 1',
            team2: '2 2',
            reffingTeam: '2 1',
          },
          {
            game: 'A 3',
            team1: '2 1',
            team2: '2 1',
            reffingTeam: '3 1',
          },
          {
            game: 'A 3',
            team1: '4 1',
            team2: '3 2',
            reffingTeam: '2 2',
          },
        ],
      },
      {
        court_no: 2,
        label: 'side heading 2',
        games: [
          {
            game: 'B 3',
            team1: '1 2',
            team2: '2 1',
            reffingTeam: '4 1',
          },
          {
            game: 'B 2',
            team1: '2 2',
            team2: '1 2',
            reffingTeam: '2 1',
          },
          {
            game: 'B 2',
            team2: '2 1',
            team1: '4 1',
            reffingTeam: '1 2',
          },
          {
            game: 'B 3',
            team1: '2 1',
            team2: '2 1',
            reffingTeam: '2 1',
          },
          {
            game: 'B 4',
            team1: '2 2',
            team2: '2 1',
            reffingTeam: '2 2',
          },
          {
            game: 'B 3',
            team1: '2 1',
            team2: '2 2',
            reffingTeam: '4 1',
          },
        ],
      },
    ],
  };

  console.log(exampleData);
  const [dummySchedule, setDummySchedule] = useState('');

  const duplicateData = async () => {
    // setDummySchedule((prevState) => {
    //   let temp;
    //   if (templatePoolsDataById !== null) {
    //     temp = templatePoolsDataById;
    //     for (let i = 0; i < templatePoolsDataById.schedules.length; i++) {
    //       for (let j = 0; j < templatePoolsDataById.schedules[i].games; j++) {
    //         remove templatePoolsDataById.schedules[i].games[j]);
    //       }
    //     }
    //   }

    //   return temp;
    // });
    // console.log(dummySchedule);

    // console.log(dummySchedule);
    console.log({
      name: `${templatePoolsDataById.name} (copy)`,
      no_of_courts: templatePoolsDataById.no_of_courts,
      no_of_pools: templatePoolsDataById.no_of_pools,
      no_of_teams: templatePoolsDataById.no_of_teams,
      schedules: templatePoolsDataById.schedules,
      type: 'pools',
    });

    // await createPoolsTemplate(
    //   JSON.stringify({
    //     name: `${templatePoolsDataById.name} (copy)`,
    //     no_of_courts: templatePoolsDataById.no_of_courts,
    //     no_of_pools: templatePoolsDataById.no_of_pools,
    //     no_of_teams: templatePoolsDataById.no_of_teams,
    //     schedules: templatePoolsDataById.schedules,
    //     type: 'pools',
    //   }),
    //   props.history
    // );
    // await createTemplateLoading();
    // await getTemplatePoolById(props.match.params.pool_id);
  };

  const deleteDataFun = () => {
    let points = 'pools';
    deleteData(templatePoolsDataById.id, points, props.history);
  };

  const TableData = ({
    game,
    team1,
    team2,
    reffingTeam,
    number,
    courtNumber,
    individualGame,
  }) => {
    return (
      <tr
        style={{ height: 20 }}
        onClick={() => console.log(individualGame.reffingteam)}
      >
        <td>
          <div className="mt-2" style={{ fontFamily: 'FuturaMedium' }}>
            {courtNumber % 2 !== 0 && number}
          </div>
        </td>
        <td className="template-pools-col" style={{ width: 1, paddingTop: 20 }}>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div
                className="col-12 p-auto p-0 m-0"
                style={{
                  height: 40,
                  padding: 0,
                  // borderRadius: 3,
                  // boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto">
                    <div
                      className="col-12 p-0 m-0"
                      style={{ fontFamily: 'FuturaMedium' }}
                    >
                      {game}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="mt-2" style={{ fontFamily: 'FuturaMedium' }}></div>
        </td>
        <td
          className="template-pools-col-3"
          style={{
            marginLeft: 30,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
            // boxShadow: '0px 1px 2px 0px rgb(0 0 0 / 20%)',
          }}
        >
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div
                className="col-12 p-auto pt-2 m-0"
                style={{
                  height: 40,
                  // borderRadius: 3,
                  // boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto">
                    <div
                      className="col-12 p-0 m-0"
                      style={{ fontFamily: 'FuturaMedium' }}
                    >
                      {team1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className="template-pools-col-vs" style={{ paddingTop: 20 }}>
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div
                className="col-12 p-0 m-auto"
                style={{
                  height: 25,
                  borderRadius: 3,
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#ffd420',
                  fontFamily: 'FuturaMedium',
                  width: 10,
                }}
              >
                VS
              </div>
            </div>
          </div>
        </td>
        <td
          className="template-pools-col-4"
          // style={{ boxShadow: '0px 1px 2px 0px rgb(0 0 0 / 20%)' }}
        >
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div
                className="col-12 p-auto pt-2 m-0"
                style={{
                  height: 40,
                  // borderRadius: 3,
                  // boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                  border: ' 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="container p-0 m-auto">
                  <div className="row p-0 m-auto">
                    <div
                      className="col-12 p-0 m-0"
                      style={{ fontFamily: 'FuturaMedium' }}
                    >
                      {team2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="mt-2" style={{ fontFamily: 'FuturaMedium' }}></div>
        </td>
        <td className="template-pools-col">
          <div className="container p-0 m-0">
            <div className="row p-0 m-0">
              <div
                className="col-12 p-auto pt-2 m-0"
                style={{
                  height: 40,
                  // borderRadius: 3,
                  // boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="container p-0 m-auto">
                  <div
                    className="row p-0 m-auto"
                    onClick={() => console.log(individualGame.reffingteam)}
                  >
                    <div
                      className="col-12 p-0 m-0"
                      style={{ fontFamily: 'FuturaMedium' }}
                    >
                      {individualGame === undefined
                        ? ''
                        : individualGame.reffingteam}
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
      <Header>
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item"
            onClick={() =>props.history.push('/TemplateTable')}
          >
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
      {createPoolsTemplateLoading || templatePoolsDataById === undefined ? (
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      ) : getPoolsByIdError !== null || templatePoolsDataById === null ? (
        <div className="text-center mt-5">
          <h4 style={{ color: '#ff2072' }}>{getPoolsByIdError}</h4>
        </div>
      ) : (
        <div className="new-event-profile container">
          <div className="row">
            <div
              className="col-12 p-0"
              style={{ marginBottom: 50, marginTop: 32 }}
            >
              <div className="row container p-0 m-0">
                <div className="col-sm-2 col-lg-2 p-0 text-left">
                  <img src={iconavatarpools} alt="" />
                </div>
                <div className="col-sm-7 col-lg-7 m-auto p-0">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <div>
                      <div
                        className="form-control event-input"
                        style={{ fontSize: 36 }}
                      >
                        {templatePoolsDataById.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3 m-auto p-0 pr-5">
                  <RegEventDropDown>
                    <li
                      onClick={() => {
                        props.history.push(
                          `/templatePoolsUpdate/${templatePoolsDataById.no_of_teams}/${templatePoolsDataById.no_of_pools}/${templatePoolsDataById.no_of_courts}/${props.match.params.pool_id}`
                        );
                        console.log({
                          teams: templatePoolsDataById.no_of_teams,
                          pools: templatePoolsDataById.no_of_pools,
                          courts: templatePoolsDataById.no_of_courts,
                          pool_id: Number(props.match.params.pool_id),
                        });
                      }}
                    >
                      Edit
                    </li>
                    <li onClick={() => duplicateData()}>Duplicate</li>
                    <li
                      style={{ color: '#ff2072' }}
                      onClick={() => deleteDataFun()}
                    >
                      Delete
                    </li>
                  </RegEventDropDown>
                </div>
              </div>
            </div>

            {/* main content */}
            <div className="col-12 text-center">
              <div className="row container">
                {templatePoolsDataById.schedules !== null &&
                  templatePoolsDataById.schedules.map(
                    (data, index1) =>
                      data.games.length !== 0 && (
                        <div className="col-lg-6 col-sm-12 " key={index1}>
                          {/* input */}
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              borderBottom: '1px solid #979797',
                            }}
                          >
                            <div>
                              <div className="form-control event-input">
                                {data.label}
                              </div>
                            </div>
                          </div>
                          <div className="table-responsive-sm ">
                            <table
                              className="table table-borderless mt-5 table-tempalte-pools"
                              style={{ height: 120 }}
                            >
                              <thead>
                                <tr style={{ height: 20 }}>
                                  <th></th>
                                  <th style={{ width: 88 }}>Game #</th>
                                  <th></th>
                                  <th></th>
                                  <th>Court {index1 + 1}</th>
                                  <th></th>
                                  <th></th>
                                  <th>Work</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.games.map((individualGame, index2) => (
                                  <TableData
                                    key={index2}
                                    game={individualGame.game}
                                    team1={individualGame.team1}
                                    team2={individualGame.team2}
                                    reffingTeam={individualGame.reffingteam}
                                    number={index2 + 1}
                                    courtNumber={index1 + 1}
                                    individualGame={individualGame}
                                  />
                                ))}
                                {/* <TableData />
                          <TableData />
                          <TableData />
                          <TableData />
                          <TableData /> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatePoolsSaved;
