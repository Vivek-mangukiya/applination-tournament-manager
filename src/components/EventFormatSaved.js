import React, { useContext } from 'react';
import '../assets/styles/EventFormatSaved.css';
import iconorangepools from '../assets/images/icon-orange-pools.svg';
import hamburgerIcon from '../assets/images/icon-menu-hamburger.svg';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import EventContext from '../context/event/eventContext';

const EventFormatSaved = (props) => {
  //context
  const eventContext = useContext(EventContext);
  const { eventFormatInfo } = eventContext;
  return (
    <>
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
        </ul>
      </Header>
      <div className="new-event-profile container p-0 event-format-saved">
        <div className="row">
          <div className="col-6 m-auto text-center p-0">
            <div className="row main-width">
              <div className="col-12">
                {/* image and event name */}
                <div className="row">
                  <div className="col-12 text-right p-0">
                    {/* Hamburger */}
                    <a href="#/" id="score-hamburger">
                      <div>
                        <img src={hamburgerIcon} alt="" />
                        <span className="tooltiptext2 p-0">
                          <ul>
                            <li
                              onClick={() =>
                                props.history.push('EventFormatEdit')
                              }
                            >
                              Edit
                            </li>
                            <li>Revert</li>
                          </ul>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-4 p-0 text-left">
                    <img
                      src="https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
                      alt=""
                      className="img-fluid event-img"
                    />
                  </div>

                  <div className="col-8 m-auto mr-0 p-0">
                    <div className="saved-event-name text-left p-0 event-title-border">
                      Name
                      {/* {eventInfo && eventInfo.eventName} */}
                    </div>
                    <div className="saved-event-date-and-time text-left p-0">
                      THURSDAY | JUL 3RD-12th @ 9AM-10PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Format */}
              <div className="col-12 p-0 play-format-div">
                <div className="text-left address-title">Play Format</div>
                <div className="">
                  {/* Mens 2s */}
                  <div className="container event-format-rectangle">
                    <div className="row mt-0">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={iconorangepools}
                          alt=""
                          className="img-fluid m-1 event-format-image"
                        />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4 event-format-label">
                        Mens 2s
                      </div>

                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {eventFormatInfo && eventFormatInfo.mens2sState}
                      </div>
                    </div>
                  </div>
                  {/*Mens 4s */}
                  <div className="container event-format-rectangle">
                    <div className="row">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={iconorangepools}
                          alt=""
                          className="img-fluid m-1 event-format-image"
                        />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4 event-format-label">
                        Mens 4s
                      </div>

                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {eventFormatInfo && eventFormatInfo.mens4sState}
                      </div>
                    </div>
                  </div>
                  {/* Mens 6s */}
                  <div className="container event-format-rectangle">
                    <div className="row">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={iconorangepools}
                          alt=""
                          className="img-fluid m-1 event-format-image"
                        />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4 event-format-label">
                        Mens 6s
                      </div>

                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {eventFormatInfo && eventFormatInfo.mens6sState}
                      </div>
                    </div>
                  </div>
                  {/* Womens 2s */}
                  <div className="container event-format-rectangle">
                    <div className="row">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={iconorangepools}
                          alt=""
                          className="img-fluid m-1 event-format-image"
                        />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4 event-format-label">
                        Womens 2s
                      </div>
                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {eventFormatInfo && eventFormatInfo.womens2sState}
                      </div>
                    </div>
                  </div>
                  {/* Womens 4s */}
                  <div className="container event-format-rectangle">
                    <div className="row">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={iconorangepools}
                          alt=""
                          className="img-fluid m-1 event-format-image"
                        />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4 event-format-label">
                        Womens 4s
                      </div>
                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {eventFormatInfo && eventFormatInfo.womens4sState}
                      </div>
                    </div>
                  </div>

                  {/* Womens 6s */}
                  <div className="container event-format-rectangle">
                    <div className="row">
                      <div className="col-1 p-0 text-left pl-2">
                        <img
                          src={iconorangepools}
                          alt=""
                          className="img-fluid m-1 event-format-image"
                        />
                      </div>
                      <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-4 event-format-label">
                        Womens 6s
                      </div>
                      <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                        {eventFormatInfo && eventFormatInfo.womens6sState}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventFormatSaved;
