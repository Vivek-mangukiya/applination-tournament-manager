import React, { useEffect, useState } from "react";
import "./SelectCheckinDivision.css";
import Header from "../../components/header/Header";
import backIcon from "../../assets/images/icon-menu-back.svg";
import listIcon from "../../assets/images/icon-menu-list.svg";
import "../../assets/styles/DashboardComponent.css";
import iconorangemanager from "../../assets/images/icon-orange-manager.png";
import iconorangeplayer from "../../assets/images/icon-orange-player.svg";
import iconorangeteams from "../../assets/images/icon-orange-teams.svg";
import iconorangemap from "../../assets/images/icon-orange-map.png";
import iconorangecalendar from "../../assets/images/icon-orange-calender.png";
import iconOrangeLevel from "../../assets/images/icon-orange-level.svg";
import iconOrangePoints from "../../assets/images/icon-orange-points.svg";
import iconmenuchevronclose from "../../assets/images/icon-menu-chevron-close.svg";
import DataTable from "react-data-table-component";
import { Col, Row } from "react-bootstrap";
export default function SelfCheckinDivision() {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    // setFilteredList();
  }, []);

  const filter = (event) => {
    const { value } = event.target;
    const list = tournamentList.filter((items) => {
      return (
        items.name.includes(value) ||
        items.address.includes(value) ||
        items.NoOfTeams.includes(value) ||
        items.start_date.includes(value) ||
        items.end_date.includes(value)
      );
    });
    setFilteredList(list);
  };
  const columns = [
    {
      id: 1,
      name: "IMAGE",
      selector: (row) => {
        return (
          <img
            src={
              row.tournament_pic
                ? process.env.REACT_APP_PLAYER_COURT_URL + row.tournament_pic
                : defaultImage
            }
            style={{
              width: "35px",
            }}
          />
        );
      },
      sortable: false,
    },
    {
      id: 2,
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      id: 3,
      name: "TEAM SIZE",
      selector: (row) => row.team_size,
      sortable: true,
    },
    {
      id: 4,
      name: "START DATE",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      id: 5,
      name: "END DATE",
      selector: (row) => row.end_date,
      sortable: true,
    },
    {
      id: 6,
      name: "ADDRESS",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      id: 7,
      name: "NO OF TEAMS",
      selector: (row) => row.NoOfTeams,
      sortable: true,
    },
    {
      id: 8,
      name: "STATUS",
      selector: (row) => row.status_lable,
      sortable: true,
    },
  ];
  return (
    <div className="pools min-vh-100">
      {" "}
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
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
              <img alt="menu" src={listIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>
      <div className="container row">
        <div className="col-12 text-left quick-start">Players</div>
      </div>
      <Row>
        <Col>
          <DataTable
            columns={columns}
            data={filteredList}
            defaultSortFieldId={1}
            // sortIcon={<SortIcon />}
            pagination
            subHeaderComponent={
              <input
                className="Box-Search"
                placeholder="Search"
                onChange={(event) => filter(event)}
                style={{
                  padding: "0px",
                  margin: "0px",
                  paddingLeft: 50,
                }}
                // style={{ paddingLeft: 50 }}
              />
            }
            subHeader
          />
        </Col>
      </Row>
    </div>
  );
}
