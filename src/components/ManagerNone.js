import React from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import iconorangemanager from '../assets/images/icon-orange-manager.png';
import { Link, withRouter } from 'react-router-dom';
import Footer from './footer/Footer';
import '../assets/styles/DashboardNone.css'

const ManagerNone=(props)=> {
    console.log(props.history)
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
                            <img src={iconorangemanager} className="image-fluid"/>
                        </div>
                        <div className="col-12 text-center dashboard-none-data ">
                            Looks like you haven’t any Manager(s) yet. Start by creating a 
                          &nbsp;<span className="none-screen-highlight" onClick={()=>props.history.push('/newManagerProfileCreated')}>New Manager.</span>
                            {/* <Link to="/newManagerProfileEdit" href="#/" className="li-link dashboard-none-data-link">
                                <span className="dashboard-none-data-link"> New Manager.</span>
                            </Link> */}
                        </div>
                        {/* <hr className="col-12 p-0 m-0"/>
                        <div className="NoneButton col-12 text-right">
                            <Link to="/newManagerProfileEdit" href="#/" className="li-link">
                                <div className=" NewPlayerButtonD align-right">
                                    <div className="NewPlayerButtonText">NEW MANAGER</div>                               
                                </div>
                            </Link>
                        </div> */}
                            <Footer style={{paddingTop:300}}>
                            <div className="m-0 col-auto d-flex align-items-center ml-auto">
                            <div
                                className="lower-back-button-manager"
                                onClick={() => props.history.push('/newManagerProfileCreated')}
                            >
                                <span className="lower-back-button-text">NEW MANAGER</span>
                            </div>
                            </div>
                            </Footer>
                    </div>
                </div>
            </>

        </div>
    );
}

export default withRouter(ManagerNone);
