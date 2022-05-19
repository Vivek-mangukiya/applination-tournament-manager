import React from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import iconorangeplayer from '../assets/images/icon-orange-player.svg';
import { Link, withRouter } from 'react-router-dom';
import Footer from './footer/Footer';
import '../assets/styles/DashboardNone.css'

const PlayerNone=(props)=> {
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
                            <img alt="menu" src={backIcon} alt="" className="profile-image" />
                        </a>
                        </li>
                    </ul>
                </Header>
                <div className="container none-screen">
                    <div className="row">
                        <div className="col-12 text-center dashboard-none-image">
                            <img src={iconorangeplayer} className="image-fluid"/>
                        </div>
                        {/* <div className="col-12 text-center dashboard-none-data ">
                            Looks like you haven’t any player(s) associated with your orginization. Start by creating a 
                            &nbsp;<span className="none-screen-highlight" onClick={() => props.history.push('/newProfile')}>New Player</span>
                        </div> */}
                        <div className="col-12 text-center dashboard-none-data ">
                            Looks like you haven’t any player(s) associated with your orginization.
                            {/* &nbsp;<span className="none-screen-highlight" onClick={() => props.history.push('/newProfile')}>New Player</span> */}
                        </div>
                        <Footer>
                            <div className="m-0 col-auto d-flex align-items-center ml-auto">
                            <div
                                className="lower-back-button-manager"
                                onClick={() => props.history.push('/PlayerTable')}
                            >
                                <span className="lower-back-button-text">PLAYER LIST</span>
                            </div>
                            </div>
                        </Footer>
                    </div>
                </div>
            </>
        </div>
    );
}

export default withRouter(PlayerNone);
