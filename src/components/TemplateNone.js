import React, { useEffect } from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import iconorangepencil from '../assets/images/pencil.png';
import { Link, withRouter } from 'react-router-dom';
import '../assets/styles/DashboardNone.css';
import Footer from './footer/Footer';
import TemplateForm from './TemplateFormComponent';

const TemplateNone = (props) => {
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
              <img src={iconorangepencil} alt="" className="image-fluid" />
            </div>
            <div className="col-12 text-center dashboard-none-data ">
              Looks like you have no Templets yet. Start by creating a &nbsp;
              {/* <span className="none-screen-highlight">New Template</span> */}
              <TemplateForm propsData={props.propsData} type="none"></TemplateForm>

              {/* <Link to="/newEventProfile" href="#/" className="li-link dashboard-none-data-link">
                          New Template
                          </Link> */}
            </div>
            {/* <hr className="col-12 p-0 m-0"/>
                      <div className="NoneButton col-12 text-right">
                          <Link to="/" href="#/" className="li-link">
                              <div className=" NewPlayerButtonD align-right">
                                  <div className="NewPlayerButtonText">NEW TEMPLATE</div>                               
                              </div>
                          </Link>
                      </div> */}
            <Footer>
              <div className="m-0 col-auto d-flex align-items-center ml-auto">
                <TemplateForm
                  propsData={props.propsData}
                  type="table"
                ></TemplateForm>
              </div>
            </Footer>
          </div>
        </div>
      </>
    </div>
  );
};

export default withRouter(TemplateNone);
