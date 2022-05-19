import React, {Component} from 'react';
import {Modal, ModalBody, Button} from 'reactstrap'
import '../assets/styles/PoolFormComponent.css'
import PointsStep1 from './PointsStep1'
import PointsStep2 from './PointsStep2'

class PointsForm extends Component{
    constructor(props){
        super(props)
        this.state={
            currentStepS: 1, // Default is Step 1
            spots:"4",
            PointstemplateName:"",
            isModalOpen: false
        }
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.handleDropdown=this.handleDropdown.bind(this);

    }

    // Use the submitted data to set the state
    handleChange(event) {
        //  console.log(event.target.value)
        const {name, value} = event.target
        this.setState({
            [name]: value
        })  
    }

    handleDropdown(dropdownValue) {
      console.log(dropdownValue)
      this.setState({
        poolTeams: dropdownValue
      }) ;
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.currentStepS===2){
            const {spots,PointstemplateName} = this.state    
            console.log(`Number of spots:${spots}`)
            console.log(`Points Template Name:${PointstemplateName}`)
        }
    }
    
    _next() {
        let currentStepS = this.state.currentStepS
        if(currentStepS===1){
            this.setState({
                currentStepS:currentStepS+1
            })
        }
        if(currentStepS===2){
          this.setState({
            currentStepS:2
          })
        }
        
    }

    _prev() {
        let currentStepS = this.state.currentStepS
        if(currentStepS===2){
          this.setState({
            currentStepS:currentStepS-1
          })
        }
        if(currentStepS===1){
          this.setState({
            currentStepS:1
          })
        }
      }

    // The "next" and "previous" button functions
    get previousButton(){
      let currentStepS = this.state.currentStepS;
      if(currentStepS !==0){ /**Changed 1 to 0 here!!!! */
        return (
          <button 
            className="WFPreviousButton" 
            type="button" onClick={this._prev} style={{outline:0}}>
            <span className="WFPreviousButtonText">BACK</span>
          </button>
        )
      }
      return null;
    }

    get nextButton(){
      let currentStepS = this.state.currentStepS;
      if(currentStepS !==2){
        return (
          <button 
            className="WFNextButton" 
            type="button" onClick={this._next} style={{outline:0}}>
            <span className="WFNextButtonText">NEXT</span>
          </button>        
        )
      }
      return null;
    }

    
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    handleLogin(event) {
      this.toggleModal();
      alert("Username: " + this.username.value + " Password: " + this.password.value
          + " Remember: " + this.remember.checked);
      event.preventDefault();
    }

    render(){

        return(
          <>
            <div className="container-fluid PoolFormContainer">
              <div className="row">
                <div className="col-12">
            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
            <Modal className="modal-dialog modal-dialog-centered modal-sm" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalBody toggle={this.toggleModal}>
                    <div className="PoolForm">
                    <p className="Step">{this.state.currentStepS} / 2 </p>
                    <form onSubmit={this.handleSubmit}>
                    
                        <PointsStep1
                        currentStepS={this.state.currentStepS} 
                        handleChange={this.handleChange}
                        spots={this.state.spots}
                        handleMainDropdown={this.handleDropdown}
                        />

                        <PointsStep2
                        currentStepS={this.state.currentStepS} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        PointstemplateName={this.state.PointstemplateName}
                        />

                        <div className="buttons">
                        {this.previousButton}
                        {this.nextButton}
                        </div>
                    
                    </form>
                    </div>
              </ModalBody>
            </Modal>
            </div>
            </div>
          </div>
          </>
        )
    }
}

export default PointsForm;