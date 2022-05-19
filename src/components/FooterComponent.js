import React, {Component} from 'react';
import '../assets/styles/FooterComponent.css'

class Footer extends Component{
    constructor(props){
        super(props)

        this.state={}
    }

    render(){
        return(
            <div className="Footerr">
                <div className="NewManagerr">
                    <div className="ManagerText">New Manager</div>
                </div>
            </div>
        )
    }
}

export default Footer;