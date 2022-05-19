import React from 'react';
import './Roadmap.css';
import Header from '../../components/header/Header';
import backIcon from '../../assets/images/icon-menu-back.svg';
import listIcon from '../../assets/images/icon-menu-list.svg';
import calenderIconRight from '../../assets/images/icon-menu-calendar.svg';

const Roadmap = (props) => {
  return (
    <div>
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
      <div className="RoadmapHeader container m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-12 m-0">
            <div className="row">
              <div className="RoadmapHeaderDate col-3 d-flex justify-content-start align-items-center m-0 p-0">
                <img className="" src={calenderIconRight} alt=""></img>
                AUGUST | Thursday 17th
              </div>
              <div className="RoadmapHeaderTitle col-6 d-flex justify-content-center align-items-center m-0 p-0">
                AVP Manhattan Beach Open 2019
              </div>
              <div className="RoadmapHeaderDivision col-3 d-flex justify-content-end align-items-center m-0 p-0">
                Division 1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th scope="col"></th>
              <th scope="col" className="tableHeading">
                STADIUM
              </th>
              <th scope="col" className="tableHeading">
                COURT 1
              </th>
              <th scope="col" className="tableHeading">
                COURT 2
              </th>
              <th scope="col" className="tableHeading">
                COURT 3
              </th>
              <th scope="col" className="tableHeading">
                COURT 4
              </th>
              <th scope="col" className="tableHeading">
                COURT 5
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: 62 }}>
              <th
                scope="row"
                className="timeRowHeading justify-content-center d-flex align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                8 AM
              </th>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>
            </tr>

            <tr style={{ height: 62 }}>
              <th
                scope="row"
                className="timeRowHeading justify-content-center d-flex align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                9 AM
              </th>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>
            </tr>

            <tr style={{ height: 62 }}>
              <th
                scope="row"
                className="timeRowHeading justify-content-center d-flex align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                10 AM
              </th>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderF d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    F
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>
            </tr>

            <tr style={{ height: 62 }}>
              <th
                scope="row"
                className="timeRowHeading justify-content-center d-flex align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                11 AM
              </th>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderM d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderM d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderM d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>
            </tr>

            <tr style={{ height: 62 }}>
              <th
                scope="row"
                className="timeRowHeading justify-content-center d-flex align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                12 PM
              </th>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderM d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderM d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>

              <td
                className="justify-content-center align-items-center m-0 p-0"
                style={{ height: 62 }}
              >
                <div className="CourtCard d-flex row m-0 p-0">
                  <div
                    className="CourtCardGenderM d-flex justify-content-center align-items-center col-3 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M
                  </div>
                  <div
                    className="CourtCardId d-flex justify-content-center align-items-center col-4 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    M10
                  </div>
                  {/* <div className="CourtCardHr d-flex align-items-center"/> */}
                  <div
                    className="CourtCardTime d-flex justify-content-center align-items-center col-5 m-0 p-0"
                    style={{ height: 62 }}
                  >
                    9:15 AM
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roadmap;
