import React, {Component} from 'react';
import '../assets/styles/PoolFormComponent.css'
import {Modal, ModalBody, Button} from 'reactstrap'
import PoolStep1 from './PoolStep1'
import PoolStep2 from './PoolStep2'
import PoolStep3 from './PoolStep3'
import PoolStep4 from './PoolStep4'

class PoolForm extends Component{
    constructor(props){
        super(props)
        this.state={
            currentStepO: 1, // Default is Step 1
            poolTeams:"4",
            pools:"4",
            courts:"4",
            templateName:"",
            isModalOpen: false
        }
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.handleDropdown=this.handleDropdown.bind(this);
        this.handleDropdown2=this.handleDropdown2.bind(this);
        this.handleDropdown3=this.handleDropdown3.bind(this);
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

    handleDropdown2(dropdownValue) {
      console.log(dropdownValue)
      this.setState({
        pools: dropdownValue
      }) ;
    }

    handleDropdown3(dropdownValue) {
      console.log(dropdownValue)
      this.setState({
        courts: dropdownValue
      }) ;
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.currentStepO===4){
            const { poolTeams,pools,courts,templateName} = this.state    
            // console.log(poolTeams)
            // console.log(pools)
            // console.log(courts)
            // console.log(templateName)
            const result=[poolTeams,pools,courts,templateName]
            console.log(result)
        }
    }
    
    _next() {
        let currentStepO = this.state.currentStepO
        if(currentStepO===1||currentStepO===2||currentStepO===3){
            this.setState({
                currentStepO:currentStepO+1
            })
        }
        if(currentStepO===4){
          this.setState({
            currentStepO:4
          })
        }
        
    }

    _prev() {
        let currentStepO = this.state.currentStepO
        if(currentStepO===4||currentStepO===3||currentStepO===2){
          this.setState({
            currentStepO:currentStepO-1
          })
        }
        if(currentStepO===1){
          this.setState({
            currentStepO:1
          })
        }
      }

    // The "next" and "previous" button functions
    get previousButton(){
      let currentStepO = this.state.currentStepO;
      if(currentStepO !==0){ /**Changed 1 to 0 here!!!! */
        return (
          <button 
            className="WFPreviousButton" 
            type="button" onClick={this._prev}> style={{outline:0}}
            <span className="WFPreviousButtonText">BACK</span>
          </button>
        )
      }
      return null;
    }

    get nextButton(){
      let currentStepO = this.state.currentStepO;
      if(currentStepO !==4){
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
            <div className="container-fluid PoolFormContainer">
              <div className="row">
                <div className="col-12">
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>

                <Modal className="modal-dialog modal-dialog-centered modal-sm" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalBody toggle={this.toggleModal}>
                    <div className="PoolForm">
                    <p className="Step">{this.state.currentStepO} / 4 </p>
                    <form onSubmit={this.handleSubmit}>
                    
                        <PoolStep1
                        currentStepO={this.state.currentStepO} 
                        handleChange={this.handleChange}
                        poolTeams={this.state.poolTeams}
                        handleMainDropdown={this.handleDropdown}
                        />

                        <PoolStep2
                        currentStepO={this.state.currentStepO} 
                        handleChange={this.handleChange}
                        pools={this.state.pools}
                        handleMainDropdown={this.handleDropdown2}
                        />

                        <PoolStep3
                        currentStepO={this.state.currentStepO} 
                        handleChange={this.handleChange}
                        courts={this.state.courts}
                        handleMainDropdown={this.handleDropdown3}
                        />

                        <PoolStep4
                        currentStepO={this.state.currentStepO} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        templateName={this.state.templateName}
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
        )
    }
}

export default PoolForm;