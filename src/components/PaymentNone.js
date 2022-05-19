import React from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import Footer from '../components/footer/Footer';
import iconorangeplayer from '../assets/images/icon-orange-player.png';
import { Link, withRouter } from 'react-router-dom';
import '../assets/styles/DashboardNone.css'

const PaymentNone=(props)=> {
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
                            {/* <img src={iconorangeplayer} className="image-fluid"/> */}
                        </div>
                        <div className="col-12 text-center dashboard-none-data ">
                            {/* Looks like you haven’t any player(s) assoseated with your orginization. Start by creating a New Player. */}
                            PAYMENTS
                            {/* <Link to="/profileEdit" href="#/" className="li-link dashboard-none-data-link">
                            New Player.
                            </Link> */}
                        </div>
                        <Footer>
                            <div className="col-12 text-right m-auto">
                            {/* <button
                                type="button"
                                id="white-button-hover"
                                className="btn-sm mr-2"
                                style={{
                                border: '1px solid #ffd420',
                                borderRadius: 15,
                                width: 112,
                                fontSize: 10,
                                height: 24,
                                backgroundColor: '#f9fafc',
                                outline: 0,
                                color:'4a4a4a'
                                }}
                                // onClick={onOpenModal}
                            >
                                CANCEL
                            </button> */}
                            <button
                                className="btn-sm pb-1 NewPlayerButton"
                                id="yellow-button-hover"
                                style={{
                                border: '1px solid yellow',
                                borderRadius: 15,
                                width: 137,
                                height: 24,
                                fontSize: 10,
                                backgroundColor: '#ffd420',
                                outline: 0,
                                color:'#4a4a4a'
                                }}
                                // onClick={onSave}
                            >
                                NEW PAYMENT
                            </button>
                            </div>
                        </Footer>
                        {/* <hr className="col-12 p-0 m-0"/>
                        <div className="NoneButton col-12 text-right">
                            <Link to="/profileEdit" href="#/" className="li-link">
                                <div className=" NewPlayerButtonD align-right">
                                    <div className="NewPlayerButtonText">NEW PAYMENT</div>                               
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </>
        </div>
    );
}

export default withRouter(PaymentNone);