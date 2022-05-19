import React, {Component} from 'react';
import MasterForm from './WizardFormComponent'
import PoolForm from './PoolFormComponent'
import PointsForm from './PointsFormComponent'
import '../assets/styles/WizardFormComponent.css'


class MasterTemplateForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
        currentStep: 1, // Default is Step 1
        age: 'Adult',
        selectedAgeRange: [
          {name:"Open",checked:false},
          {name:"Sixty",checked:false},
          {name:"Ninety",checked:false},
          {name:"U26",checked:false},
          {name:"Seventy",checked:false},
          {name:"Other",checked:false},
          {name:"Fifty",checked:false},
          {name:"Eighty",checked:false}
        ],
        selectedGender:[
          {name:"Mens",checked:false},
          {name:"Womens",checked:false},
          {name:"Coed",checked:false}
        ],
        selectedSkill:[
          {name:"Pro",checked:false},
          {name:"Open",checked:false},
          {name:"AAA",checked:false},
          {name:"AA",checked:false},
          {name:"A",checked:false},
          {name:"BB",checked:false},
          {name:"Masters",checked:false},
          {name:"Novice",checked:false},
          {name:"Rec",checked:false}
        ],
        teamSize:"8",
        teamFormat:"2v2",
        jselectedGender:[
          {name:"Boys",checked:false},
          {name:"Girls",checked:false},
          {name:"Coed",checked:false}
        ],
        jselectedAgeRange:[
          {name:"11-U",checked:false},
          {name:"12-U",checked:false},
          {name:"13-U",checked:false},
          {name:"14-U",checked:false},
          {name:"15-U",checked:false},
          {name:"16-U",checked:false},
          {name:"17-U",checked:false},
          {name:"18-U",checked:false}
        ],
        jselectedSkill: [
          {name:"Club",checked:false},
          {name:"High School",checked:false},
          {name:"Gold",checked:false},
          {name:"Silver",checked:false},
          {name:"Bronze",checked:false},
        ], 
        earlyBird:'Yes',
        earlyBirdAmount:"",
        lateAmount:"",
        normalAmount:"",
        divisionName:""
      }

        this.handleChange = this.handleChange.bind(this)
        this.onCheck = this.onCheck.bind(this)
        this.onAgeCheck = this.onAgeCheck.bind(this)
        this.onSkillCheck = this.onSkillCheck.bind(this)
        this.onjCheck = this.onjCheck.bind(this)
        this.onjAgeCheck = this.onjAgeCheck.bind(this)
        this.onjSkillCheck = this.onjSkillCheck.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }
  
    // Use the submitted data to set the state
    handleChange(event) {
      // console.log(event.target.value)
      const {name, value} = event.target

      this.setState({
        [name]: value
      })  
    }

    onCheck(event){
      // console.log(event.target.name,event.target.checked)
      const{name,checked}=event.target
      let selectedGender=this.state.selectedGender
      var ne=[{name,checked}]
      var res=selectedGender.map(obj=>ne.find(o=>o.name==obj.name)||obj)

      this.setState({
        selectedGender:res
      })
    }

    onAgeCheck(event){
      // console.log(event.target.name,event.target.checked)
      const{name,checked}=event.target
      let selectedAgeRange=this.state.selectedAgeRange
      var ageCheck=[{name,checked}]
      var res=selectedAgeRange.map(obj=>ageCheck.find(o=>o.name==obj.name)||obj)

      this.setState({
        selectedAgeRange:res
      })
    }

    onSkillCheck(event){
      // console.log(event.target.name,event.target.checked)
      const{name,checked}=event.target
      let selectedSkill=this.state.selectedSkill
      var skillCheck=[{name,checked}]
      var res=selectedSkill.map(obj=>skillCheck.find(o=>o.name==obj.name)||obj)

      this.setState({
        selectedSkill:res
      })
    }

    onjCheck(event){
      // console.log(event.target.name,event.target.checked)
      const{name,checked}=event.target
      let jselectedGender=this.state.jselectedGender
      var ne=[{name,checked}]
      var res=jselectedGender.map(obj=>ne.find(o=>o.name==obj.name)||obj)

      this.setState({
        jselectedGender:res
      })
    }

    onjAgeCheck(event){
      // console.log(event.target.name,event.target.checked)
      const{name,checked}=event.target
      let jselectedAgeRange=this.state.jselectedAgeRange
      var ageCheck=[{name,checked}]
      var res=jselectedAgeRange.map(obj=>ageCheck.find(o=>o.name==obj.name)||obj)

      this.setState({
        jselectedAgeRange:res
      })
    }

    onjSkillCheck(event){
      // console.log(event.target.name,event.target.checked)
      const{name,checked}=event.target
      let jselectedSkill=this.state.jselectedSkill
      var skillCheck=[{name,checked}]
      var res=jselectedSkill.map(obj=>skillCheck.find(o=>o.name==obj.name)||obj)

      this.setState({
        jselectedSkill:res
      })
    }
    
    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault()
      if(this.state.currentStep===11){
        const { age, selectedGender, selectedAgeRange ,selectedSkill, teamSize, teamFormat, earlyBird,earlyBirdAmount,lateAmount,normalAmount,divisionName,jselectedGender, jselectedAgeRange, jselectedSkill} = this.state

        console.log(age)
        console.log(selectedGender)
        console.log(selectedSkill)
        console.log(selectedAgeRange)
        console.log(teamSize)
        console.log(teamFormat)
        console.log(earlyBird)
        console.log(earlyBirdAmount)
        console.log(lateAmount)
        console.log(normalAmount)
        console.log(divisionName)
        console.log(jselectedGender)
        console.log(jselectedAgeRange)
        console.log(jselectedSkill)
      }

      if(this.state.currentStep===12){
        const { age, jselectedGender, jselectedSkill} = this.state

        console.log(age)
        console.log(jselectedGender)
        console.log(jselectedSkill)
      }
    }

    _next() {
        let currentStep = this.state.currentStep
        if(currentStep===1){
          if(this.state.age==='Adult'){
            this.setState({
              currentStep: 2
            })
          }
          else{
            this.setState({
              currentStep: 12
            })
          }
        }

        if(currentStep===2||currentStep===3||currentStep===4||currentStep===5||currentStep===6||currentStep===8||currentStep===9||currentStep===10||currentStep===12||currentStep===13){
          this.setState({
            currentStep:currentStep+1
          })
        }
        if(currentStep===11){
          this.setState({
            currentStep: 11
          })
        }
        if(currentStep===14){
          this.setState({
            currentStep: 5
          })
        }
        if(currentStep===7){
          if(this.state.earlyBird==='Yes'){
            this.setState({
              currentStep:8
            })
          }
          else{
            this.setState({
              currentStep:9
            })
          }
        }

    }

    _prev() {
        let currentStep = this.state.currentStep
        if(currentStep===2||currentStep===12||currentStep===1 ){
          this.setState({
            currentStep:1
          })
        }
        if(currentStep===4||currentStep===3||currentStep===5||currentStep===6||currentStep===7||currentStep===9||currentStep===8||currentStep===11||currentStep===13||currentStep===14||currentStep===10 ){
          this.setState({
            currentStep:currentStep-1
          })
        }
      }

      // The "next" and "previous" button functions
    get previousButton(){
      let currentStep = this.state.currentStep;
      if(currentStep !==0){ /**Changed 1 to 0 here!!!! */
        return (
          <button 
            className="WFPreviousButton" 
            type="button" onClick={this._prev}>
            <span className="WFPreviousButtonText">PREVIOUS</span>
          </button>
        )
      }
      return null;
    }

    get nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep !==11){
        return (
          <button 
            className="WFNextButton" 
            type="button" onClick={this._next}>
            <span className="WFNextButtonText">NEXT</span>
          </button>        
        )
      }
      return null;
    }
    
    render() {    

      // const items = [
      //   'Mens',
      //   'Womens',
      //   'Coed',
      // ];

        return (
          <div className="WizardFormContainer">
          <div className="WizardForm">
          <p className="Step">{this.state.currentStep} / 11 </p> 
            
          <form onSubmit={this.handleSubmit}>
          
            <MasterForm/>
            <PoolForm/>
            <PointsForm/>

            <div className="buttons">
            {this.previousButton}
            {this.nextButton}
            </div>
        
          </form>
          </div>
          </div>
        )
        }
  }

  export default MasterTemplateForm;