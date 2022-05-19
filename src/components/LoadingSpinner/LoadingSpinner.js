import React from 'react'
import loadingIcon from '../../assets/images/icon-loading.jpg'
import './LoadingSpinner.css'

const LoadingSpinner = (props) => {
  return (
    <div className="loading_container d-flex justify-content-center align-items-center">
        <img src={loadingIcon} alt="" className="loading_icon"/>
    </div>
  )
}

export default LoadingSpinner;


// const LoadingSpinner = (props) =>{
//     return(
//     <>
//     {/* Loading... */}
//     <img src={loadingIcon} alt="" className="loading_icon"/>
//     </>
//     )
//   }