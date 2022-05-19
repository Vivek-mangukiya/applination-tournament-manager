import React, {useState, useRef, useEffect} from 'react';
import '../assets/styles/Dropdown.css';
import downArrow from '../assets/images/icon-menu-chevron-down.svg';

const Dropdown = (props) =>{

  const addressInputValue = useRef('');



  const [showDD, setShowDD] = useState(false);

  const refSelect = useRef();
  useOnClickOutside(refSelect, () => setShowDD(false));

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      [ref, handler]
    );
  }

  // const { court_id, court_name, street_address, country, zip } = address;

  return(
    <>
    </>

  // <a href="#/" id="score-hamburger">
  // <div ref={ref}>
  //   <img src={iconHamburger} alt="" onClick={props.getAllCourts}/>
  //   {showDD && (
    
  //   <span
  //     className="tooltiptext2"
  //     style={{
  //       width: 432,
  //       height: 280,
  //       overflowY: 'auto',
  //     }}
  //   >
  //     <div
  //       className=" container row p-0 m-auto"
  //       style={{
  //         border: '1px solid #d8d8d8',
  //         borderRadius: 20,
  //         height: 32,
  //         width: 416,
  //         backgroundColor: '#ffffff',
  //       }}
  //     >
  //       <div className="col-1 p-0 m-auto">
  //         <img
  //           src={searchIcon}
  //           alt=""
  //           className="img-fluid"
  //         />
  //       </div>
  //       <div className="col-11">
  //         <input
  //           placeholder="Search by zipcode"
  //           type="text"
  //           ref={addressInputValue}
  //           style={{ height: 28 }}
  //           className=" form-control  p-0 dropdown-searchbar"
  //           onChange={(e) => {
  //             if (
  //               addressInputValue.current.value !== ''
  //             ) {
  //               props.addressFilter(e.target.value);
  //             } else {
  //               props.addressFilterClear();
  //             }
  //           }}
  //         />
  //       </div>
  //     </div>
  //     <hr
  //       style={{
  //         height: 1,
  //         backgroundColor: '#d8d8d8',
  //         marginTop: 7,
  //       }}
  //     />
  //     {eventAddresses.length === 0 ? (
  //       <div
  //         style={{ marginTop: 55 }}
  //         className="d-flex justify-content-center flex-column align-items-center"
  //       >
  //         <img src={ballIcon} alt="" />
  //         <p
  //           className="no-addresses-p"
  //           style={{ color: '#4a4a4a', marginTop: 24 }}
  //         >
  //           Sorry, no addresses were found
  //         </p>
  //       </div>
  //     ) : 

        
  //     (
  //       <div
  //       className="container row m-0 hover-list p-0"
  //       onClick={() => {
  //         setListAddress({
  //           court_id,
  //           court_name,
  //           street_address,
  //           country,
  //           zip,
  //         });
  //         setCourtName(court_name);
  //         setStreetAddress(street_address);
  //         setCountry(country);
  //         setZip(zip);
  //         setCity(city);
  //         setShowSaveToList(false);
  //         setShowDD(false);
  //         notify();
  //         setCourt_id(court_id);
  //       }}
  //     >
  //       {' '}
  //       <div
  //         className="col-2 m-auto text-center p-0"
  //         style={{
  //           paddingLeft: 8,
  //           paddingRight: 8,
  //         }}
  //       >
  //         <img
  //           alt="player"
  //           onError={(e) => (e.target.src = profilePic)}
  //           src={`http://fanwins.in/${address.picture}`}
  //           style={{
  //             borderRadius: '50%',
  //             width: 25,
  //             height: 25,
  //             backgroundColor: 'black',
  //           }}
  //         />
  //       </div>
  //       <div className="col-10 text-left text-dark address-contact-list-content p-0">
  //         {court_id},{court_name}, {street_address}, {address.zip}
  //       </div>
  //     </div>
  //     )}
  //   </span>
  //   )}
  //   <div className="text-center">Address List</div>
  // </div>
  // </a>
  );
}

export default Dropdown;