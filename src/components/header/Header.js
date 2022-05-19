import React, { useContext } from 'react';
import './Header.css';
import AuthContext from '../../context/auth/authContext';
import defaultIcon2 from '../../assets/images/defaultIcon2.png';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
  const authContext = useContext(AuthContext);
  const { managerPic, setSideBarMax } = authContext;
  // console.log(managerPic);
  return (
    <div style={{all:"none", height:"50px"}}>
    <nav
      className="navbar navbar-expand-sm "
      style={{ 
        paddingRight: 24, 
        borderBottom: '1px solid #ffd420', 
        position:"fixed" ,
        // overflow: 'hidden',
        top: 0,
        width: "100%",
        backgroundColor:'white',
        zIndex:'99',
         }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="col-md-10 col-lg-11 d-flex" >
          {/* <ul className="navbar-nav mr-auto">
        <li className="nav-item"  onClick={()=>{setSideBarMax()}}>
          <a
            className="nav-link disabled"
            href="#/"
            tabIndex="-1"
            aria-disabled="true"
          >
            <img alt="menu" src={exitIcon} className="profile-image"/>
          </a>
        </li>
      </ul> */}
          {props.children}

          <ul className="navbar-nav ml-auto"  >
          <li
          style={{paddingRight:"20px"}}
            className="nav-item"
            onClick={() => props.history.push('/completeProfileInfo')}
            // onClick={() => console.log(props)}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <a
                className="nav-link disabled"
                href="#/"
                tabIndex="-1"
                aria-disabled="true"
              >
                <img
                  // alt="menu"
                  // src="https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
                  src={localStorage.getItem('profile_pic')}
                  alt=""
                  onError={(e) => (e.target.src = defaultIcon2)}
                  className="profile-image"
                />
              </a>
              <div className="text-dark m-auto">
                Hey, {localStorage.getItem('name')}
              </div>
            </div>
          </li>
        </ul>
      
        </div>
        
       
       
      
      </div>
    </nav>
    </div>
  );
};

export default withRouter(Header);
