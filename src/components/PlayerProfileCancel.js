import React, {Component} from 'react';
import '../assets/styles/PlayerProfileCancel.css'


class PlayerProfileCancel extends Component{
    constructor(props){
        super(props)
        this.state={
            open:false
        }
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    onOpenModal() {
        this.setState({
          open: true
        });
      }
  
      onCloseModal() {
        this.setState({
          open: false
        });
      }


    STAY=()=>{
        this.props.handleBack(0)
        // this.props.handleBack(this.props.previousStep)
    }

    render(){

        if (this.props.currentStepT !== -1) { // Prop: The current step
            return null
          }

        return(
            
            <div className="PlayerProfileCancelContainer">
                <h1 className="CancelHeading">Are you sure you want to leave?</h1>
                <h4 className="CancelSubheading">All selected Division information will be erased!</h4>
                <div className="CancelButtonFlex">
                    <div className="CancelStay" onClick={this.STAY}>
                        <span className="NoSTAY" >No, STAY</span>
                    </div>
                    <div className="CancelLeave">
                        <span className="YesLEAVE" onClick={this.props.onCloseModal}>YES, LEAVE</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerProfileCancel;