import React, { useContext, useEffect, useState } from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import iconorangepools from '../assets/images/icon-orange-pools.svg';
import SelectOptions from './selectOptions/SelectOptions';
import Footer from './footer/Footer';
import EventContext from '../context/event/eventContext';
import '../assets/styles/EventFormatSaved.css';

const EventFormatEdit = (props) => {
  // context
  const eventContext = useContext(EventContext);
  const { saveEventFormatData, eventFormatInfo } = eventContext;

  const [mens2sState, setMens2sState] = useState(
    eventFormatInfo !== null ? eventFormatInfo.mens2sState : ''
  );
  const [mens4sState, setMens4sState] = useState(
    eventFormatInfo !== null ? eventFormatInfo.mens4sState : ''
  );
  const [mens6sState, setMens6sState] = useState(
    eventFormatInfo !== null ? eventFormatInfo.mens6sState : ''
  );
  const [womens2sState, setWomens2sState] = useState(
    eventFormatInfo !== null ? eventFormatInfo.womens2sState : ''
  );
  const [womens4sState, setWomens4sState] = useState(
    eventFormatInfo !== null ? eventFormatInfo.womens4sState : ''
  );
  const [womens6sState, setWomens6sState] = useState(
    eventFormatInfo !== null ? eventFormatInfo.womens6sState : ''
  );

  const onSave = () => {
    if (
      mens2sState !== '' &&
      mens4sState !== '' &&
      mens6sState !== '' &&
      womens2sState !== '' &&
      womens4sState !== '' &&
      womens6sState !== ''
    ) {
      console.log({
        mens2sState,
        mens4sState,
        mens6sState,
        womens2sState,
        womens4sState,
        womens6sState,
      });
      saveEventFormatData({
        mens2sState,
        mens4sState,
        mens6sState,
        womens2sState,
        womens4sState,
        womens6sState,
      });
      props.history.push('/EventFormatSaved');
    }
  };

  useEffect(() => {
    console.log(eventFormatInfo);
  }, [eventFormatInfo]);

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
      <div className="new-event-profile container p-0 event-format-edit">
        <div className="row p-0 footer-margin" style={{marginBottom:120}}>
          <div className="col-6 m-auto text-center p-0">
            <div className="row main-width">
              <div className="col-12">
                {/* image and event name */}
                <div className="row">
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
                    </div>
                    <div className="saved-event-date-and-time text-left p-0">
                      THURSDAY | JUL 3RD-$th @ 9AM-10PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 p-0" style={{ marginTop: 24 }}>
                <div className="text-left address-title">Play Format</div>

                {/* Mens 2s */}
                <div className="container event-format-edit-rectangle">
                  <div className="row  mt-0">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={iconorangepools}
                        alt=""
                        className="img-fluid my-1 event-format-image"
                      />
                    </div>
                    <div className="col-4 p-0 text-left event-format-label mt-auto mb-auto pl-4">
                      Mens 2s
                    </div>
                    <div className="col-6 p-0 text-right event-format-label m-auto">
                      {mens2sState}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setMens2sState('YES')}
                        noChoice={() => setMens2sState('NO')}
                      />
                    </div>
                  </div>
                </div>
                {/* Mens 4s */}
                <div className="container event-format-edit-rectangle">
                  <div className="row">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={iconorangepools}
                        alt=""
                        className="img-fluid my-1 event-format-image"
                      />
                    </div>
                    <div className="col-4 p-0 text-left event-format-label mt-auto mb-auto pl-4">
                      Mens 4s
                    </div>
                    <div className="col-6 p-0 text-right event-format-label m-auto">
                      {mens4sState}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setMens4sState('YES')}
                        noChoice={() => setMens4sState('NO')}
                      />
                    </div>
                  </div>
                </div>

                {/* Mens 6s */}
                <div className="container event-format-edit-rectangle">
                  <div className="row ">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={iconorangepools}
                        alt=""
                        className="img-fluid my-1 event-format-image"
                      />
                    </div>
                    <div className="col-4 p-0 text-left event-format-label mt-auto mb-auto pl-4">
                      Mens 6s
                    </div>
                    <div className="col-6 p-0 text-right event-format-label m-auto">
                      {mens6sState}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setMens6sState('YES')}
                        noChoice={() => setMens6sState('NO')}
                      />
                    </div>
                  </div>
                </div>

                {/* Womens 2s */}
                <div className="container event-format-edit-rectangle">
                  <div className="row ">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={iconorangepools}
                        alt=""
                        className="img-fluid my-1 event-format-image"
                      />
                    </div>
                    <div className="col-4 p-0 text-left event-format-label mt-auto mb-auto pl-4">
                      Womens 2s
                    </div>
                    <div className="col-6 p-0 text-right event-format-label m-auto">
                      {womens2sState}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setWomens2sState('YES')}
                        noChoice={() => setWomens2sState('NO')}
                      />
                    </div>
                  </div>
                </div>

                {/* Womens 4s */}
                <div className="container event-format-edit-rectangle">
                  <div className="row ">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={iconorangepools}
                        alt=""
                        className="img-fluid my-1 event-format-image"
                      />
                    </div>
                    <div className="col-4 p-0 text-left event-format-label mt-auto mb-auto pl-4">
                      Womens 4s
                    </div>
                    <div className="col-6 p-0 text-right event-format-label m-auto">
                      {womens4sState}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setWomens4sState('YES')}
                        noChoice={() => setWomens4sState('NO')}
                      />
                    </div>
                  </div>
                </div>

                {/* Womens 6s */}
                <div className="container event-format-edit-rectangle">
                  <div className="row ">
                    <div className="col-1 p-0 text-left pl-2">
                      <img
                        src={iconorangepools}
                        alt=""
                        className="img-fluid my-1 event-format-image"
                      />
                    </div>
                    <div className="col-4 p-0 text-left event-format-label mt-auto mb-auto pl-4">
                      Womens 6s
                    </div>
                    <div className="col-6 p-0 text-right event-format-label m-auto">
                      {womens6sState}
                    </div>
                    <div className="col-1 p-0 text-right m-auto">
                      <SelectOptions
                        yesChoice={() => setWomens6sState('YES')}
                        noChoice={() => setWomens6sState('NO')}
                      />
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer>
        <div className="m-0 col-auto ml-auto mt-3">
          <div className="lower-back-button-cancel">
            <span className="lower-back-button-text">CANCEL</span>
          </div>
        </div>
        <div className="m-0 col-auto mt-3" onClick={onSave}>
          <div className="lower-back-button">
            <span className="lower-back-button-text">SAVE</span>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default EventFormatEdit;
