import React,{useState} from 'react'
import '../assets/styles/TemplateDivisionSaved.css'
import { Link } from 'react-router-dom';
import iconorangepools from '../assets/images/icon-orange-pools.svg'
import menuchevrondownicon from '../assets/images/icon-menu-chevron-down.svg';
import division from '../assets/images/division.svg'
import hamburgericon from '../assets/images/icon-menu-hamburger.svg'
import iconorangepoints from '../assets/images/icon-orange-points.svg'
import iconorangeplayersplus from '../assets/images/icon-orange-players-plus.svg'
import iconorangeplayers from '../assets/images/icon-orange-players.svg'
import iconorangepemail from '../assets/images/icon-orange-email.svg'
import iconorangepurse from '../assets/images/icon-orange-purse.svg'
import iconorangebird from '../assets/images/bird.svg'
import iconorangecalender from '../assets/images/icon-orange-calender.svg'
import iconorangewallet from '../assets/images/wallet.svg'


function HamburgerDropdown(){
    return(
        <div className="TemplatehamburgerDropdown">
            <Link to="/TemplateDivisionEdit" href="#/" className="li-link" style={{margin:0,padding:0}}>
                <div className="TemplatehamburgerDropdownEdit">Edit</div>
            </Link>
            <div className="TemplatehamburgerDropdownInactive">Generate Pool Schedule</div>
            <div className="TemplatehamburgerDropdownRemove">Delete</div>
        </div>
    )
}

function Mens2v2Addendum() {
    return (
      <div> 
            <div className="EventFormatEditAddress">Details</div>

            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangeplayersplus} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Registration Cap</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangeplayers} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Team Size</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>

            <div className="EventFormatEditAddress">Finance</div>

            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangepemail} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Online Pay</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangepurse} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Purse Amount</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangebird} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Early Bird</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangecalender} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Early Bird Date</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Early Bird Amount</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Registration Amount</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Late Amount</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
      </div>
    );
  }

  function Mens4v4Addendum() {
    return (
      <div> 
            <div className="EventFormatEditAddress">Details</div>

            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangeplayersplus} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 2s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangeplayersplus} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 4s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>

            <div className="EventFormatEditAddress">Finance</div>

            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangepemail} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 2s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangepurse} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 4s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangebird} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 2s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangecalender} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 4s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 2s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 4s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
            <div className="EventFormatEditTeamPlayer">
                <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                <div className="EventFormatEditTeamPlayerTitle">Mens 2s</div>
                <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
            </div>
      </div>
    );
  }


const TemplateDivisionSaved =(props)=>{

    const [hamburgerDropdown1Open,hamburgerDropdown1]=useState(false);
    const [showMens2v2,mens2v2Render]=useState(false);
    const [showMens4v4,mens4v4Render]=useState(false);
     
        return(
            <div className="container-fluid EventFormatEditContainer">
                <div className="row">
                <div className="col-12">
                
                <img className="RegEvenTeamViewtHamburger" src={hamburgericon} alt = ""
                    onClick={() => hamburgerDropdown1(!hamburgerDropdown1Open)}></img> 

                {hamburgerDropdown1Open?<HamburgerDropdown/>:null}

                <div className="EventFormatEditHeaderFlex">
                    <img className="EventFormatEditHeaderImage" src={division} alt = ""></img>
                    <div className="EventFormatEditHeaderInfoFlex">
                        <div className="EventFormatEditHeaderTitle">Best of the Best</div>
                        <div className="EventFormatEditHeaderhr"></div>
                    </div>
                </div>

                <div className="EventFormatEditAddress">Global Details</div>

                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangepoints} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Placement Points</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangeplayersplus} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Registration Cap</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangeplayers} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Team Size</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>

                <div className="EventFormatEditAddress">Global Finance</div>

                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangepemail} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Online Pay</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangepurse} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Purse Amount</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangebird} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Early Bird</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangecalender} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Early Bird Date</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Early Bird Amount</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Registration Amount</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>
                <div className="EventFormatEditTeamPlayer">
                    <img className="EventFormatEditTeamPlayerImage" src={iconorangewallet} alt = ""></img>
                    <div className="EventFormatEditTeamPlayerTitle">Late Amount</div>
                    <div className="EventFormatEditTeamPlayerName">10 pools of 4 on 4 courts</div>
                </div>

                <div className="RegEventEditMens2v2Flex">
                <div className="TemplateDivisionSavedMens4v4">Mens 4v4 U 26</div>
                <div className="RegEventEditMens2v2hr"></div>
                <img
                  className="RegEventEditMens2v2Arrow"
                  src={menuchevrondownicon} alt = ""
                  onClick={() => mens2v2Render(!showMens2v2)}
                ></img>
                </div>

                {showMens2v2 ? <Mens2v2Addendum /> : null}


                <div className="RegEventEditMens2v2Flex">
                <div className="TemplateDivisionSavedMens4v4">Mens 4v4 70</div>
                <div className="RegEventEditMens2v2hr"></div>
                <img
                  className="RegEventEditMens2v2Arrow"
                  src={menuchevrondownicon} alt = ""
                  onClick={() => mens4v4Render(!showMens4v4)}
                ></img>
                </div>

                {showMens4v4 ? <Mens4v4Addendum /> : null}

                </div>
                </div>
            </div>
        )

}

export default TemplateDivisionSaved;