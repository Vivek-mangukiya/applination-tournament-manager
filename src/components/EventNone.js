import React from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import iconorangeteams from '../assets/images/icon-orange-teams.png';
import { Link, withRouter } from 'react-router-dom';
import Footer from './footer/Footer';
import '../assets/styles/DashboardNone.css'

const EventNone=(props)=> {
    return (
        <div>
            <>
                <Header>
                    <ul className="navbar-nav mr-auto">
                        <li
                        className="nav-item"
                        onClick={() => props.history.goBack()}
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
                <div className="container none-screen">
                    <div className="row">
                        <div className="col-12 text-center dashboard-none-image">
                            <img src={iconorangeteams} alt="" className="image-fluid"/>
                        </div>
                        <div className="col-12 text-center dashboard-none-data ">
                            Looks like you haven’t any Tournaments yet. Start by creating a 
                            &nbsp;<span className="none-screen-highlight" onClick={() => props.history.push('/newEventProfile')}>New Tournament</span>
                            {/* <Link to="/newEventProfile" href="#/" className="li-link dashboard-none-data-link">
                            New Tournament
                            </Link> */}
                        </div>
                        {/* <hr className="col-12 p-0 m-0"/>
                        <div className="NoneButton col-12 text-right">
                            <Link to="/newEventProfile" href="#/" className="li-link">
                                <div className=" NewPlayerButtonD align-right">
                                    <div className="NewPlayerButtonText">NEW TOURNAMENT</div>                               
                                </div>
                            </Link>
                        </div> */}
                        <Footer>
                            <div className="m-0 col-auto d-flex align-items-center ml-auto">
                            <div
                                className="lower-back-button-manager"
                                onClick={() => props.history.push('/newEventProfile')}
                            >
                                <span className="lower-back-button-text">NEW TOURNAMENT</span>
                            </div>
                            </div>
                        </Footer>
                    </div>
                </div>
            </>
        </div>
    );
}

export default withRouter(EventNone);