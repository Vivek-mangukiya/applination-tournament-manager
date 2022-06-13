import React from "react";
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
import { Link } from "react-router-dom";
export default function SelectCheckinDivision() {
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
        <div className="col-12 text-left quick-start">
          Select from the below options
        </div>
        <div className="col-md-3 text-decoration-none">
          <div
            className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
            style={{ cursor: "pointer" }}
          >
            <img src={iconorangemanager} alt="" className="img-quick-start " />
          </div>
          <div className="upper-box-tile" style={{ cursor: "pointer" }}>
            + Select Divisions
          </div>
        </div>
        <div className="col-md-3 offset-md-1 text-decoration-none">
          <Link to="/selectsection/selfcheckin">
            <div
              className="img-quick-start-container d-flex justify-content-center align-items-center upper-box m-auto"
              style={{ cursor: "pointer" }}
            >
              <img
                src={iconorangemanager}
                alt=""
                className="img-quick-start "
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="upper-box-tile" style={{ cursor: "pointer" }}>
              + Self Checkin
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
