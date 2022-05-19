import React, { useContext, useEffect, useState } from 'react';
import plusIcon from '../assets/images/icon-menu-add.svg';
import { Modal } from 'react-responsive-modal';
import MainStepComponent from './MainStepComponent';
import AdultStep1 from './AdultStep1';
import AdultStep2 from './AdultStep2';
import AdultStep3 from './AdultStep3';
import AdultStep4 from './AdultStep4';
import AdultStep5 from './AdultStep5';
import AdultStep6 from './AdultStep6';
import AdultStep7 from './AdultStep7';
import AdultStep8 from './AdultStep8';
import AdultStep9 from './AdultStep9';
import AdultStep10 from './AdultStep10';
import AdultStep11 from './AdultStep11';
import JuniorStep1 from './JuniorStep1';
import JuniorStep2 from './JuniorStep2';
import JuniorStep3 from './JuniorStep3';
import JuniorStep4 from './JuniorStep4';

import PlayerProfileCancelD from './PlayerProfileCancelD';
import '../assets/styles/WizardFormComponent.css';
import SavedDivision from './SavedDivision';
import EventContext from '../context/event/eventContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import AdultStep16 from './AdultStep16';

const MasterForm = (props) => {
  const eventContext = useContext(EventContext);
  const {
    //get tournament data (id)
    getTournamentData,
    //add division api
    addDivision,
    sendDivisionDataToEvent,
    eventDropdownData,
    checkTemplateName,
    templateNameCounter,
    // add to template
    addToTemplateData,
    // add to division
    addToDivisionData,
    // early Bird Date State
    earlyBirdDateState,
  } = eventContext;

  useEffect(() => {
    console.log('TOURNAMENT DATA IN WIZARD FORM', getTournamentData);
  }, []);

  //state
  const [commonState, setCommonState] = useState({
    currentStep: 0,
    age: 'Adult',
    selectedAgeRange: [
      { name: 'Open', checked: false },
      { name: '60', checked: false },
      { name: '90', checked: false },
      { name: 'U26', checked: false },
      { name: '70', checked: false },
      { name: 'Other', checked: false },
      { name: '50', checked: false },
      { name: '80', checked: false },
      { name: '35+', checked: false },
      { name: '45+', checked: false },
      { name: '60+', checked: false },
      { name: '65+', checked: false },
      { name: '70+', checked: false },
      { name: '75+', checked: false },
      { name: '80+', checked: false },
      { name: '85+', checked: false },
      { name: 'Rotating Pairs', checked: false },
    ],
    selectedGender: [
      { name: 'Mens', checked: false },
      { name: 'Womens', checked: false },
      { name: 'Coed', checked: false },
    ],
    selectedSkill: [
      { name: 'Pro', checked: false },
      { name: 'Open', checked: false },
      { name: 'AAA', checked: false },
      { name: 'AA', checked: false },
      { name: 'A', checked: false },
      { name: 'BB', checked: false },
      { name: 'Masters', checked: false },
      { name: 'Novice', checked: false },
      { name: 'Rec', checked: false },
      { name: 'B', checked: false },
    ],
    teamSize: '8',
    teamFormat: '2v2',
    jselectedGender: [
      { name: 'Boys', checked: false },
      { name: 'Girls', checked: false },
      { name: 'Coed', checked: false },
    ],
    jselectedAgeRange: [
      { name: '11U', checked: false },
      { name: '12U', checked: false },
      { name: '13U', checked: false },
      { name: '14U', checked: false },
      { name: '15U', checked: false },
      { name: '16U', checked: false },
      { name: '17U', checked: false },
      { name: '18U', checked: false },
      { name: '15+', checked: false },
      { name: 'Rotating Pairs', checked: false },
    ],
    jselectedSkill: [
      { name: 'Club', checked: false },
      { name: 'High School', checked: false },
      { name: 'Gold', checked: false },
      { name: 'Silver', checked: false },
      { name: 'Bronze', checked: false },
    ],
    jselectedLevel: [
      { name: 'L1', checked: true },
      { name: 'L2', checked: false },
      { name: 'L3', checked: false },
      { name: 'L4', checked: false },
    ],
    earlyBird: 'Yes',
    earlyBirdAmount: '',
    lateAmount: '',
    normalAmount: '',
    divisionName: '',
    open: false,
    DivisionList: [],
    selectedTemplate: '',
    selectedTemplateName: '',
    save_as_template: '',
    earlyBirdDate: '',
    discountAmount: null,
    discountText: null,
    discount_applied: null,
    discount_voucher: null,
  });

  //close Icon
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#333">
          <g>
            <path
              d="M8 4c.276 0 .5.224.5.5v3h3c.245 0 .45.177.492.41L12 8c0 .276-.224.5-.5.5h-3v3c0 .245-.177.45-.41.492L8 12c-.276 0-.5-.224-.5-.5v-3h-3c-.245 0-.45-.177-.492-.41L4 8c0-.276.224-.5.5-.5h3v-3c0-.245.177-.45.41-.492z"
              transform="translate(-1059 -396) translate(1059 396) rotate(-45 8 8)"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  // functions
  const onOpenModal = () => {
    // setOpen(true);
    setCommonState((prevState) => ({
      ...prevState,
      open: true,
    }));
  };

  const onCloseModalOutside = () => {
    // console.log('The step to revert back to', commonState.currentStep);
    if (commonState.currentStep > 0) {
      setPreviousStep(commonState.currentStep);
    }
    setCommonState((prevState) => ({
      ...prevState,
      currentStep: -1,
    }));
  };

  const onCloseModal = () => {
    // setOpen(false);
    setCommonState((prevState) => ({
      ...prevState,
      open: false,
      currentStep: 0,
      //  Clear all state data here.
      age: 'Adult',
      selectedAgeRange: [
        { name: 'Open', checked: false },
        { name: '60', checked: false },
        { name: '90', checked: false },
        { name: 'U26', checked: false },
        { name: '70', checked: false },
        { name: 'Other', checked: false },
        { name: '50', checked: false },
        { name: '80', checked: false },
        { name: '35+', checked: false },
        { name: '45+', checked: false },
        { name: '60+', checked: false },
        { name: '65+', checked: false },
        { name: '70+', checked: false },
        { name: '75+', checked: false },
        { name: '80+', checked: false },
        { name: '85+', checked: false },
        { name: 'Rotating Pairs', checked: false },
      ],
      selectedGender: [
        { name: 'Mens', checked: false },
        { name: 'Womens', checked: false },
        { name: 'Coed', checked: false },
      ],
      selectedSkill: [
        { name: 'Pro', checked: false },
        { name: 'Open', checked: false },
        { name: 'AAA', checked: false },
        { name: 'AA', checked: false },
        { name: 'A', checked: false },
        { name: 'BB', checked: false },
        { name: 'Masters', checked: false },
        { name: 'Novice', checked: false },
        { name: 'Rec', checked: false },
        { name: 'Rec', checked: false },
      ],
      teamSize: '8',
      teamFormat: '2v2',
      jselectedGender: [
        { name: 'Boys', checked: false },
        { name: 'Girls', checked: false },
        { name: 'Coed', checked: false },
      ],
      jselectedLevel: [
        { name: 'L1', checked: true },
        { name: 'L2', checked: false },
        { name: 'L3', checked: false },
        { name: 'L4', checked: false },
      ],
      jselectedAgeRange: [
        { name: '11U', checked: false },
        { name: '12U', checked: false },
        { name: '13U', checked: false },
        { name: '14U', checked: false },
        { name: '15U', checked: false },
        { name: '16U', checked: false },
        { name: '17U', checked: false },
        { name: '18U', checked: false },
        { name: '15+', checked: false },
        { name: 'Rotating Pairs', checked: false },
      ],
      jselectedSkill: [
        { name: 'Club', checked: false },
        { name: 'High School', checked: false },
        { name: 'Gold', checked: false },
        { name: 'Silver', checked: false },
        { name: 'Bronze', checked: false },
      ],
      earlyBird: 'Yes',
      earlyBirdAmount: '',
      lateAmount: '',
      normalAmount: '',
      divisionName: '',
      open: false,
      DivisionList: [],
      selectedTemplate: '',
      selectedTemplateName: '',
      save_as_template: '',
      earlyBirdDate: '',
      discountAmount: null,
      discountText: null,
      discount_applied: null,
      discount_voucher: null,
    }));
  };

  // Use the submitted data to set the state
  const handleChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target;
    setCommonState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePriceChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target;
    let numberValue = value
      .replace(/\,/g, '')
      .replace('$', '')
      .replace('-', '');
    setCommonState((prevState) => ({
      ...prevState,
      [name]: numberValue,
    }));
  };

  const handleDropdown = (dropdownValue) => {
    // setAge(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      age: dropdownValue,
    }));
  };

  const handleDropdown2 = (dropdownValue) => {
    // setTeamSize(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      teamSize: dropdownValue,
    }));
  };

  const handleDropdown3 = (dropdownValue) => {
    // setTeamFormat(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      teamFormat: dropdownValue,
    }));
  };

  const handleDropdownDivisions = (dropdownId) => {
    // setTeamFormat(dropdownValue);
    setCommonState((prevState) => ({
      ...prevState,
      selectedTemplate: dropdownId.modalId,
      selectedTemplateName: dropdownId.modal1,
    }));
    console.log(
      'Template id selected in handleDropdown:',
      dropdownId.modalId,
      dropdownId.modal1
    );
  };

  const handleEarlyBirdDate = (earlyBirdDate) => {
    console.log(earlyBirdDate);
    setCommonState((prevState) => ({
      ...prevState,
      earlyBirdDate: earlyBirdDate,
    }));
    console.log('Template id selected in handleChange:', earlyBirdDate);
  };

  const onCheck = (event) => {
    // const { name, checked } = event.target;
    // let selected = selectedGender;
    // var ne = [{ name, checked }];
    // var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    // setSelectedGender(res);

    const { name, checked } = event.target;
    let selected = commonState.selectedGender;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      selectedGender: res,
    }));
  };

  const onAgeCheck = (event) => {
    // const { name, checked } = event.target;
    // let selected = selectedAgeRange;
    // var ageCheck = [{ name, checked }];
    // var res = selected.map(
    //   (obj) => ageCheck.find((o) => o.name === obj.name) || obj
    // );

    // setSelectedAgeRange(res);

    const { name, checked } = event.target;
    let selected = commonState.selectedAgeRange;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      selectedAgeRange: res,
    }));
  };

  const onTemplateSaveCheck = (event) => {
    const { name, checked } = event.target;
    // let selected = commonState.selectedAgeRange;
    // var ne = [{ name, checked }];
    // var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    console.log('save_as_template:', name, checked);
    // checked===true?setCheck(1):setCheck(0)
    // console.log("check, name",check,name)
    console.log('Name selected:', commonState.divisionName);
    checkTemplateName({
      data: JSON.stringify({ name: commonState.divisionName }),
      // profile_pic: file.raw,
    });
    // ch=function cha(){return checked?1:''}
    // console.log("ch",ch);
    // if(commonState.divisionName)
    // setCommonState((prevState) => ({
    //   ...prevState,
    //   save_as_template: check,
    // }));
    if (checked === true) {
      setCommonState((prevState) => ({
        ...prevState,
        save_as_template: 1,
      }));
    }
    if (checked === false) {
      setCommonState((prevState) => ({
        ...prevState,
        save_as_template: 0,
      }));
    }
    console.log('save_as_template:', commonState.save_as_template);
  };

  const onSkillCheck = (event) => {
    // const { name, checked } = event.target;
    // let selected = selectedSkill;
    // var skillCheck = [{ name, checked }];
    // var res = selected.map(
    //   (obj) => skillCheck.find((o) => o.name === obj.name) || obj
    // );
    // setSelectedSkill(res);

    const { name, checked } = event.target;
    let selected = commonState.selectedSkill;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      selectedSkill: res,
    }));
  };

  const onjCheck = (event) => {
    // const { name, checked } = event.target;
    // let jselected = jselectedGender;
    // var ne = [{ name, checked }];
    // var res = jselected.map(
    //   (obj) => ne.find((o) => o.name === obj.name) || obj
    // );
    // setJselectedGender(res);

    const { name, checked } = event.target;
    let selected = commonState.jselectedGender;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedGender: res,
    }));
  };

  const onjAgeCheck = (event) => {
    // const { name, checked } = event.target;
    // let jselected = jselectedAgeRange;
    // var ageCheck = [{ name, checked }];
    // var res = jselected.map(
    //   (obj) => ageCheck.find((o) => o.name === obj.name) || obj
    // );
    // setJselectedAgeRange(res);

    const { name, checked } = event.target;
    let selected = commonState.jselectedAgeRange;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedAgeRange: res,
    }));
  };

  const onjSkillCheck = (event) => {
    // const { name, checked } = event.target;
    // let jselected = jselectedSkill;
    // var skillCheck = [{ name, checked }];
    // var res = jselected.map(
    //   (obj) => skillCheck.find((o) => o.name === obj.name) || obj
    // );
    // setJselectedSkill(res);

    const { name, checked } = event.target;
    let selected = commonState.jselectedSkill;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedSkill: res,
    }));
  };

  const onjLevelCheck = (event) => {
    const { name, checked } = event.target;
    let selected = commonState.jselectedLevel;
    var ne = [{ name, checked }];
    var res = selected.map((obj) => ne.find((o) => o.name === obj.name) || obj);
    setCommonState((prevState) => ({
      ...prevState,
      jselectedLevel: res,
    }));
  };

  const handleSubmit = (event) => {
    console.log('url event id passed via props', parseInt(props.eventID));
    event.preventDefault();
    if (commonState.currentStep === 0) {
      if (isNaN(parseInt(props.eventID))) {
        console.log(
          'Template id selected:',
          commonState.selectedTemplate,
          commonState.selectedTemplateName
        );
        sendDivisionDataToEvent({
          template_id: commonState.selectedTemplate,
          selectedTemplateName: commonState.selectedTemplateName,
        });
        addToTemplateData({
          template_id: commonState.selectedTemplate,
          selectedTemplateName: commonState.selectedTemplateName,
        });
        onCloseModal();
      }
      if (isNaN(parseInt(props.eventID)) === false) {
        const data = JSON.stringify({
          tournament_id: parseInt(props.eventID),
          // isNaN(parseInt(props.eventID)) ? '' : (parseInt(props.eventID)),
          template_id: commonState.selectedTemplate,
          save_as_template: '0',
        });
        console.log(
          'Template id selected:',
          commonState.selectedTemplate,
          commonState.selectedTemplateName
        );
        sendDivisionDataToEvent({
          template_id: commonState.selectedTemplate,
          selectedTemplateName: commonState.selectedTemplateName,
        });
        addToTemplateData({
          template_id: commonState.selectedTemplate,
          selectedTemplateName: commonState.selectedTemplateName,
        });
        addDivision(data);
        onCloseModal();
      }
    }
    if (commonState.currentStep === 12) {
      if (commonState.age === 'Adult' || commonState.age === 'Dinosaur') {
        //selecetd age data
        let selectedAgeData = [];
        commonState.selectedAgeRange.map((item) => {
          if (item.checked === true) {
            selectedAgeData.push(item.name);
          }
        });

        //selected gender data
        let selectedGenderData = [];
        commonState.selectedGender.map((item) => {
          if (item.checked === true) {
            selectedGenderData.push(item.name);
          }
        });

        //selected skills data
        let selectedSkillData = [];
        commonState.selectedSkill.map((item) => {
          if (item.checked === true) {
            selectedSkillData.push(item.name);
          }
        });

        
        console.log({
          discount_amount: commonState.discountAmount,
          discount_applied: commonState.discount_applied,
          discount_voucher: commonState.discount_voucher,
          discount_text: commonState.discountText,
          tournament_id: isNaN(parseInt(props.eventID))
            ? ''
            : parseInt(props.eventID),
          // template_id: commonState.selectedTemplate,
          age_bracket: commonState.age === 'Adult' ? 'adult' : commonState.age,
          div_name: commonState.divisionName,
          early_bird: commonState.earlyBird.toLowerCase(),
          // early_bird_amount: commonState.earlyBirdAmount,
          early_bird_amount:
            commonState.earlyBird === 'Yes' ? commonState.earlyBirdAmount : '',
          late_amount: commonState.lateAmount,
          registration_amount: commonState.normalAmount,
          age_range: selectedAgeData,
          gender: selectedGenderData,
          skill_level: selectedSkillData,
          format:
            commonState.age === 'Adult' ? commonState.teamFormat.charAt(0) : 2,
          team_size: commonState.teamSize,
          save_as_template: commonState.save_as_template,
          template_id: commonState.selectedTemplate,
          // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
          // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
          early_bird_date:
            commonState.earlyBird === 'Yes'
              ? moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
              : '',
        });
        if (commonState.age !== null) {
          console.log(commonState.age);
          const data = JSON.stringify({
            // discount_amount: commonState.discountAmount,
            discount_applied: commonState.discount_applied,
            discount_voucher: commonState.discount_voucher,
            discount_amount: commonState.discountAmount,
            discount_text: commonState.discountText,
            tournament_id: isNaN(parseInt(props.eventID))
              ? ''
              : parseInt(props.eventID),
            age_bracket:
              commonState.age === 'Adult' ? 'adult' : commonState.age,
            div_name: commonState.divisionName,
            early_bird: commonState.earlyBird.toLowerCase(),
            early_bird_amount:
              commonState.earlyBird === 'Yes'
                ? commonState.earlyBirdAmount
                : '',
            late_amount: commonState.lateAmount,
            registration_amount: commonState.normalAmount,
            age_range: selectedAgeData,
            gender: selectedGenderData,
            skill_level: selectedSkillData,
            format:
              commonState.age === 'Dinosaur'
                ? 2
                : commonState.teamFormat.charAt(0),
            team_size: commonState.teamSize,
            save_as_template: commonState.save_as_template,
            template_id: commonState.selectedTemplate,
            early_bird_date:
              commonState.earlyBird === 'Yes'
                ? commonState.earlyBirdDate === ''
                  ? null
                  : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
                : '',
          });
          console.log(commonState.discountAmount);

          console.log(commonState.discountText);
          // if (commonState.discountText !== null) {
          //   data['discount_text'] = commonState.discountText;
          // }

          console.log({
            discount_amount: commonState.discountAmount,
            discount_applied: commonState.discount_applied,
            discount_voucher: commonState.discount_voucher,
            discount_text: commonState.discountText,
            tournament_id: isNaN(parseInt(props.eventID)),
            age: commonState.age.length,
            late_amount: commonState.lateAmount.length,
            normal_amount: commonState.normalAmount.length,
            selectedGender: selectedGenderData.length,
            selectedSkills: selectedSkillData.length,
            teamFormat:
              commonState.age === 'Adult'
                ? commonState.teamFormat.charAt(0)
                : 2,
            teamSize: commonState.teamSize.length,
            ageArray: selectedAgeData.length,
            templateNameCounter,
            diName: commonState.divisionName.length,
          });

          if (
            isNaN(parseInt(props.eventID)) &&
            commonState.age.length > 0 &&
            commonState.lateAmount.length > 0 &&
            commonState.normalAmount.length > 0 &&
            selectedGenderData.length > 0 &&
            // selectedSkillData.length > 0 &&
            //commonState.teamFormat.charAt(0).length > 0 &&
            commonState.teamSize.length > 0 &&
            selectedAgeData.length > 0 &&
            templateNameCounter === false
            // &&
            // commonState.divisionName.length > 0
          ) {
            console.log('getTournamentData', getTournamentData);
            const data = {
              discount_amount: commonState.discountAmount,
              discount_applied: commonState.discount_applied,
              discount_voucher: commonState.discount_voucher,
              discount_text: commonState.discountText,
              // tournament_id: getTournamentData !== null ? getTournamentData.id : '',
              tournament_id: '',
              template_id: commonState.selectedTemplate,
              age_bracket:
                commonState.age === 'Adult' ? 'adult' : commonState.age,
              div_name: commonState.divisionName,
              early_bird: commonState.earlyBird.toLowerCase(),
              // early_bird_amount: commonState.earlyBirdAmount,
              early_bird_amount:
                commonState.earlyBird === 'Yes'
                  ? commonState.earlyBirdAmount
                  : '',
              // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
              // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
              early_bird_date:
                commonState.earlyBird === 'Yes'
                  ? commonState.earlyBirdDate === ''
                    ? null
                    : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
                  : '',
              late_amount: commonState.lateAmount,
              registration_amount: commonState.normalAmount,
              age_range: selectedAgeData,
              gender: selectedGenderData,
              skill_level: selectedSkillData,
              format:
                commonState.age === 'Adult'
                  ? commonState.teamFormat.charAt(0)
                  : 2,
              team_size: commonState.teamSize,
              save_as_template: commonState.save_as_template,
              template_id: commonState.selectedTemplate,
              selectedTemplateName: commonState.selectedTemplateName,
            };
            if (commonState.discountAmount !== null) {
              data['discount_amount'] = commonState.discountAmount;
            }
            if (commonState.discountText !== null) {
              data['discount_text'] = commonState.discountText;
            }
            sendDivisionDataToEvent(data);
            console.log(data);
            addToDivisionData(data);
            notifyTemplateAdded();
            onCloseModal();
          }
          if (
            isNaN(parseInt(props.eventID)) === false &&
            templateNameCounter === false
            //  &&
            // commonState.divisionName.length > 0
          ) {
            console.log('getTournamentData', getTournamentData);
            console.log('Just before add division');
            console.log('Tournament id', getTournamentData.tournament.id);
            addDivision(data);
            notifyTemplateAdded();
            onCloseModal();
          }
        }
      }

      if (commonState.age === 'Junior') {
        //selecetd age data
        let selectedAgeData = [];
        commonState.jselectedAgeRange.map((item) => {
          if (item.checked === true) {
            selectedAgeData.push(item.name);
          }
        });

        //selected gender data
        let selectedGenderData = [];
        commonState.jselectedGender.map((item) => {
          if (item.checked === true) {
            selectedGenderData.push(item.name);
          }
        });

        //selected skills data
        let selectedSkillData = [];
        commonState.jselectedSkill.map((item) => {
          if (item.checked === true) {
            selectedSkillData.push(item.name);
          }
        });
         //selected Levels data
         let selectedLevelData = [];
         commonState.jselectedLevel.map((item) => {
           if (item.checked === true) {
             selectedLevelData.push(item.name);
           }
         });
        console.log({
          discount_amount: commonState.discountAmount,
          discount_applied: commonState.discount_applied,
          discount_voucher: commonState.discount_voucher,
          discount_text: commonState.discountText,
          tournament_id: getTournamentData !== null ? getTournamentData.id : '',
          template_id: commonState.selectedTemplate,
          age_bracket: commonState.age,
          div_name: commonState.divisionName,
          early_bird: commonState.earlyBird.toLowerCase(),
          // early_bird_amount: commonState.earlyBirdAmount,
          early_bird_amount:
            commonState.earlyBird === 'Yes' ? commonState.earlyBirdAmount : '',
          late_amount: commonState.lateAmount,
          registration_amount: commonState.normalAmount,
          age_range: selectedAgeData,
          gender: selectedGenderData,
          skill_level: selectedSkillData,
          format: commonState.teamFormat.charAt(0),
          team_size: commonState.teamSize,
          save_as_template: commonState.save_as_template,
          // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
          // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
          early_bird_date:
            commonState.earlyBird === 'Yes'
              ? commonState.earlyBirdDate === ''
                ? null
                : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
              : '',
        });
        if (commonState.age !== null) {
          const data = {
            discount_amount: commonState.discountAmount,
            discount_applied: commonState.discount_applied,
            discount_voucher: commonState.discount_voucher,
            discount_text: commonState.discountText,
            tournament_id: isNaN(parseInt(props.eventID))
              ? ''
              : parseInt(props.eventID),
            template_id: commonState.selectedTemplate,
            age_bracket: commonState.age.toLowerCase(),
            div_name: commonState.divisionName,
            early_bird: commonState.earlyBird.toLowerCase(),
            // early_bird_amount: commonState.earlyBirdAmount,
            early_bird_amount:
              commonState.earlyBird === 'Yes'
                ? commonState.earlyBirdAmount
                : '',
            late_amount: commonState.lateAmount,
            registration_amount: commonState.normalAmount,
            age_range: selectedAgeData,
            gender: selectedGenderData,
            skill_level: selectedSkillData,
            format: commonState.teamFormat.charAt(0),
            team_size: commonState.teamSize,
            save_as_template: commonState.save_as_template,
            // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
            // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
            early_bird_date:
              commonState.earlyBird === 'Yes'
                ? commonState.earlyBirdDate === ''
                  ? null
                  : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
                : '',
            level:selectedLevelData[0]

          };
          if (commonState.discountAmount !== null) {
            data['discount_amount'] = commonState.discountAmount;
          }
          if (commonState.discountText !== null) {
            data['discount_text'] = commonState.discountText;
          }
          if (
            isNaN(parseInt(props.eventID)) &&
            templateNameCounter === false
            // &&
            // commonState.divisionName.length > 0
          ) {
            const data = {
              discount_amount: commonState.discountAmount,
              discount_applied: commonState.discount_applied,
              discount_voucher: commonState.discount_voucher,
              discount_text: commonState.discountText,
              // tournament_id: getTournamentData !== null ? getTournamentData.tournament.id : '',
              tournament_id: '',
              template_id: commonState.selectedTemplate,
              age_bracket: commonState.age.toLowerCase(),
              div_name: commonState.divisionName,
              early_bird: commonState.earlyBird.toLowerCase(),
              // early_bird_amount: commonState.earlyBirdAmount,
              early_bird_amount:
                commonState.earlyBird === 'Yes'
                  ? commonState.earlyBirdAmount
                  : '',
              late_amount: commonState.lateAmount,
              registration_amount: commonState.normalAmount,
              age_range: selectedAgeData,
              gender: selectedGenderData,
              skill_level: selectedSkillData,
              format: commonState.teamFormat.charAt(0),
              team_size: commonState.teamSize,
              save_as_template: commonState.save_as_template,
              // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
              // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
              early_bird_date:
                commonState.earlyBird === 'Yes'
                  ? commonState.earlyBirdDate === ''
                    ? null
                    : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
                  : '',
              level:selectedLevelData[0]

            };
            if (commonState.discountAmount !== null) {
              data['discount_amount'] = commonState.discountAmount;
            }
            if (commonState.discountText !== null) {
              data['discount_text'] = commonState.discountText;
            }
            sendDivisionDataToEvent(data);
            console.log(data);
            addToDivisionData(data);
            notifyTemplateAdded();
            onCloseModal();
          }
          if (
            isNaN(parseInt(props.eventID)) === false &&
            templateNameCounter === false
            // &&
            // commonState.divisionName.length > 0
          ) {
            console.log('Just before add division');
            addDivision(JSON.stringify(data));
            notifyTemplateAdded();
            onCloseModal();
          }
        }
      }

      if (
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Father-Son' ||
        commonState.age === 'Mother-Daughter'
      ) {
        //selecetd age data
        let selectedAgeData = [];
        commonState.jselectedAgeRange.map((item) => {
          if (item.checked === true) {
            selectedAgeData.push(item.name);
          }
        });

        //selected gender data
        let selectedGenderData = [];
        commonState.jselectedGender.map((item) => {
          if (item.checked === true) {
            selectedGenderData.push(item.name);
          }
        });

        //selected skills data
        let selectedSkillData = [];
        commonState.jselectedSkill.map((item) => {
          if (item.checked === true) {
            selectedSkillData.push(item.name);
          }
        });
        console.log({
          discount_amount: commonState.discountAmount,
          discount_applied: commonState.discount_applied,
          discount_voucher: commonState.discount_voucher,
          discount_text: commonState.discountText,
          tournament_id: getTournamentData !== null ? getTournamentData.id : '',
          template_id: commonState.selectedTemplate,
          age_bracket: commonState.age,
          div_name: commonState.divisionName,
          early_bird: commonState.earlyBird.toLowerCase(),
          // early_bird_amount: commonState.earlyBirdAmount,
          early_bird_amount:
            commonState.earlyBird === 'Yes' ? commonState.earlyBirdAmount : '',
          late_amount: commonState.lateAmount,
          registration_amount: commonState.normalAmount,
          age_range: selectedAgeData,
          // gender: commonState.age === 'Father-Daughter'?['Father-Daughter']:['Mother-Son'],
          gender:
            commonState.age === 'Father-Daughter'
              ? ['Father-Daughter']
              : commonState.age === 'Father-Son'
              ? ['Father-Son']
              : commonState.age === 'Mother-Daughter'
              ? ['Mother-Daughter']
              : ['Mother-Son'],
          skill_level: selectedSkillData,
          format: '2',
          team_size: commonState.teamSize,
          save_as_template: commonState.save_as_template,
          // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
          // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
          early_bird_date:
            commonState.earlyBird === 'Yes'
              ? commonState.earlyBirdDate === ''
                ? null
                : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
              : '',
        });
        if (commonState.age !== null) {
          const data = {
            discount_amount: commonState.discountAmount,
            discount_applied: commonState.discount_applied,
            discount_voucher: commonState.discount_voucher,
            discount_text: commonState.discountText,
            tournament_id: isNaN(parseInt(props.eventID))
              ? ''
              : parseInt(props.eventID),
            template_id: commonState.selectedTemplate,
            age_bracket: commonState.age,
            div_name: commonState.divisionName,
            early_bird: commonState.earlyBird.toLowerCase(),
            // early_bird_amount: commonState.earlyBirdAmount,
            early_bird_amount:
              commonState.earlyBird === 'Yes'
                ? commonState.earlyBirdAmount
                : '',
            late_amount: commonState.lateAmount,
            registration_amount: commonState.normalAmount,
            age_range: selectedAgeData,
            gender:
              commonState.age === 'Father-Daughter'
                ? ['Father-Daughter']
                : commonState.age === 'Father-Son'
                ? ['Father-Son']
                : commonState.age === 'Mother-Daughter'
                ? ['Mother-Daughter']
                : ['Mother-Son'],
            skill_level: selectedSkillData,
            format: '2',
            team_size: commonState.teamSize,
            save_as_template: commonState.save_as_template,
            // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
            // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
            early_bird_date:
              commonState.earlyBird === 'Yes'
                ? commonState.earlyBirdDate === ''
                  ? null
                  : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
                : '',
          };
          if (commonState.discountAmount !== null) {
            data['discount_amount'] = commonState.discountAmount;
          }
          if (commonState.discountText !== null) {
            data['discount_text'] = commonState.discountText;
          }
          if (
            isNaN(parseInt(props.eventID)) &&
            templateNameCounter === false
            // &&
            // commonState.divisionName.length > 0
          ) {
            let data = {
              discount_amount: commonState.discountAmount,
              discount_applied: commonState.discount_applied,
              discount_voucher: commonState.discount_voucher,
              discount_text: commonState.discountText,
              // tournament_id: getTournamentData !== null ? getTournamentData.tournament.id : '',
              tournament_id: '',
              template_id: commonState.selectedTemplate,
              age_bracket: commonState.age,
              div_name: commonState.divisionName,
              early_bird: commonState.earlyBird.toLowerCase(),
              // early_bird_amount: commonState.earlyBirdAmount,
              early_bird_amount:
                commonState.earlyBird === 'Yes'
                  ? commonState.earlyBirdAmount
                  : '',
              late_amount: commonState.lateAmount,
              registration_amount: commonState.normalAmount,
              age_range: selectedAgeData,
              gender:
                commonState.age === 'Father-Daughter'
                  ? ['Father-Daughter']
                  : commonState.age === 'Father-Son'
                  ? ['Father-Son']
                  : commonState.age === 'Mother-Daughter'
                  ? ['Mother-Daughter']
                  : ['Mother-Son'],
              skill_level: selectedSkillData,
              format: '2',
              team_size: commonState.teamSize,
              save_as_template: commonState.save_as_template,
              // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
              // early_bird_date:moment(commonState.earlyBirdDate).format('YYYY-MM-DD')==='Invalid date'?"":moment(commonState.earlyBirdDate).format('YYYY-MM-DD'),
              early_bird_date:
                commonState.earlyBird === 'Yes'
                  ? commonState.earlyBirdDate === ''
                    ? null
                    : moment(commonState.earlyBirdDate).format('YYYY-MM-DD')
                  : '',
            };
            if (commonState.discountAmount !== null) {
              data['discount_amount'] = commonState.discountAmount;
            }
            if (commonState.discountText !== null) {
              data['discount_text'] = commonState.discountText;
            }
            sendDivisionDataToEvent(data);
            console.log(data);
            addToDivisionData(data);
            notifyTemplateAdded();
            onCloseModal();
          }
          if (
            isNaN(parseInt(props.eventID)) === false &&
            templateNameCounter === false
            //  &&
            // commonState.divisionName.length > 0
          ) {
            console.log('Just before add division');
            addDivision(JSON.stringify(data));
            notifyTemplateAdded();
            onCloseModal();
          }
        }
      }
    }

    if (commonState.currentStep === 13) {
      console.log(commonState.age);
      console.log(commonState.jselectedGender);
      console.log(commonState.jselectedSkill);
    }

    // onCloseModal();
    // notifyTemplateAdded();
  };

  let selectedGenderData = [];
  commonState.selectedGender.map((item) => {
    if (item.checked === true) {
      selectedGenderData.push(item.name);
    }
  });

  let selectedAgeData = [];
  commonState.selectedAgeRange.map((item) => {
    if (item.checked === true) {
      selectedAgeData.push(item.name);
    }
  });

  let selectedSkillData = [];
  commonState.selectedSkill.map((item) => {
    if (item.checked === true) {
      selectedSkillData.push(item.name);
    }
  });

  let jselectedAgeData = [];
  commonState.jselectedAgeRange.map((item) => {
    if (item.checked === true) {
      jselectedAgeData.push(item.name);
    }
  });

  //selected gender data
  let jselectedGenderData = [];
  commonState.jselectedGender.map((item) => {
    if (item.checked === true) {
      jselectedGenderData.push(item.name);
    }
  });

  //selected skills data
  let jselectedSkillData = [];
  commonState.jselectedSkill.map((item) => {
    if (item.checked === true) {
      jselectedSkillData.push(item.name);
    }
  });

    //selected Levels data
    let jselectedLevelData = [];
    commonState.jselectedLevel.map((item) => {
      if (item.checked === true) {
        jselectedLevelData.push(item.name);
      }
    });

  const notifyTemplateAdded = () =>
    toast.dark('Division will be created when Event Save Button is pressed.');

  //previous step
  const [previousStep, setPreviousStep] = useState(0);

  //modal error states
  const [ageError, setAgeError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [ageRangeError, setAgeRangeError] = useState(false);
  const [skillError, setSkillError] = useState(false);
  const [teamSizeError, setTeamSizeError] = useState(false);
  const [formatError, setFormatError] = useState(false);
  const [normalPriceError, setNormalPriceError] = useState(false);
  const [latePriceError, setLatePriceError] = useState(false);
  const [divNameTakenError, setDivNameTakenError] = useState(false);
  const [jGenderError, setJGenderError] = useState(false);
  const [jAgeRangeError, setJAgeRangeError] = useState(false);
  const [jSkillError, setJSkillError] = useState(false);
  const [jLevelError, setJLevelError] = useState(false);

  const [EBDateError, setEBDateError] = useState(false);
  const [EBAmountError, setEBAmountError] = useState(false);

  const [nextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    if (
      commonState.age === 'Adult' ||
      commonState.age === 'Dinosaur' ||
      commonState.age === 'Junior' ||
      commonState.age === 'Father-Daughter' ||
      commonState.age === 'Mother-Son' ||
      commonState.age === 'Father-Son' ||
      commonState.age === 'Mother-Daughter'
    ) {
      setAgeError(false);
      if (commonState.currentStep === 1) {
        setNextDisabled(false);
      }
    }
  }, [commonState.age]);

  useEffect(() => {
    if (selectedGenderData.length > 0) {
      setGenderError(false);
      if (commonState.currentStep === 2) {
        setNextDisabled(false);
      }
    }
  }, [selectedGenderData]);

  useEffect(() => {
    if (selectedSkillData.length > 0) {
      setSkillError(false);
      if (commonState.currentStep === 4) {
        setNextDisabled(false);
      }
    }
  }, [selectedSkillData]);

  useEffect(() => {
    if (selectedAgeData.length > 0) {
      setAgeRangeError(false);
      if (commonState.currentStep === 4) {
        setNextDisabled(false);
      }
    }
  }, [selectedAgeData]);

  useEffect(() => {
    if (commonState.teamSize.length > 0) {
      setTeamSizeError(false);
      if (commonState.currentStep === 5) {
        setNextDisabled(false);
      }
    }
  }, [commonState.teamSize]);

  useEffect(() => {
    if (commonState.teamFormat.length > 0) {
      setFormatError(false);
      if (commonState.currentStep === 6) {
        setNextDisabled(false);
      }
    }
  }, [commonState.teamFormat]);

  useEffect(() => {
    if (commonState.normalAmount.length > 0) {
      setNormalPriceError(false);
      if (commonState.currentStep === 10) {
        setNextDisabled(false);
      }
    }
  }, [commonState.normalAmount]);

  useEffect(() => {
    if (commonState.lateAmount.length > 0) {
      setLatePriceError(false);
      if (commonState.currentStep === 11) {
        setNextDisabled(false);
      }
    }
  }, [commonState.lateAmount]);

  useEffect(() => {
    if (jselectedGenderData.length > 0) {
      setJGenderError(false);
      if (commonState.currentStep === 13) {
        setNextDisabled(false);
      }
    }
  }, [jselectedGenderData]);

  useEffect(() => {
    // console.log("YEET",commonState.currentStep)
    if (jselectedSkillData.length > 0) {
      setJSkillError(false);
      if (commonState.currentStep === 15) {
        setNextDisabled(false);
      }
    }
  }, [jselectedSkillData]);

  useEffect(() => {
   
    if (jselectedLevelData.length > 0) {
      setJLevelError(false);
      if (commonState.currentStep === 13) {
        setNextDisabled(false);
      }
    }
  }, [jselectedLevelData]);


  useEffect(() => {
    // console.log("YEET",commonState.currentStep)
    if (jselectedAgeData.length > 0) {
      setJAgeRangeError(false);
      if (commonState.currentStep === 14) {
        setNextDisabled(false);
      }
    }
  }, [jselectedAgeData]);

  useEffect(() => {
    console.log(commonState.earlyBirdDate);
    if (
      commonState.earlyBirdDate !== '' &&
      commonState.earlyBirdDate !== 'Invalid date'
    ) {
      setEBDateError(false);
      if (commonState.currentStep === 8) {
        setNextDisabled(false);
      }
    }
  }, [commonState.earlyBirdDate]);

  useEffect(() => {
    if (commonState.currentStep === 8 && earlyBirdDateState !== null) {
      console.log(commonState.currentStep, earlyBirdDateState, nextDisabled);
      setNextDisabled(false);
    }
  }, [commonState.currentStep]);

  useEffect(() => {
    if (commonState.earlyBirdAmount.length > 0) {
      setEBAmountError(false);
      if (commonState.currentStep === 9) {
        setNextDisabled(false);
      }
    }
  }, [commonState.earlyBirdAmount]);

  useEffect(() => {
    if (
      commonState.currentStep === 3 ||
      commonState.currentStep === 15 ||
      commonState.currentStep === 17 ||
      commonState.currentStep === 7 ||
      commonState.currentStep === 16 ||
      prevButtonEnabled === true
    ) {
      setPrevButtonEnabled(false);
    } else {
      setNextDisabled(true);
      // if(commonState.age.length <1 ){
      //   setNextDisabled(true);
      // }
    }
  }, [commonState.currentStep]);

  const [prevButtonEnabled, setPrevButtonEnabled] = useState(false);

  useEffect(() => {
    console.log('prevButtonEnabled', prevButtonEnabled);
  }, [prevButtonEnabled]);

  const _next = () => {
    let current = commonState.currentStep;
    if (current === 1) {
      // setNextDisabled(true);
      if (commonState.age === 'Adult' || commonState.age === 'Dinosaur') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 2,
        }));
        setAgeError(false);
        setNextDisabled(false);
      } else if (commonState.age === 'Junior') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 13,
        }));
        setAgeError(false);
        setNextDisabled(false);
      } else if (
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Father-Son'
      ) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 14,
        }));
        setAgeError(false);
        setNextDisabled(false);
      } else if (
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Mother-Daughter'
      ) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 14,
        }));
        setAgeError(false);
        setNextDisabled(false);
      } else {
        setAgeError(true);
        // setNextDisabled(true);
      }
    }
    // console.log(selectedGenderData)
    if (current === 2) {
      setNextDisabled(true);
      if (selectedGenderData.length > 0) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 3,
        }));
        setGenderError(false);
        setNextDisabled(false);
      } else {
        setGenderError(true);
        setNextDisabled(true);
      }
    }

    if (current === 3) {
      setNextDisabled(true);
      if (commonState.age === 'Adult') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 4,
        }));
        setAgeRangeError(false);
        setNextDisabled(false);
      } else if (commonState.age === 'Dinosaur') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 5,
        }));
        setAgeRangeError(false);
        setNextDisabled(false);
      } else if (
        commonState.age !== 'Adult' ||
        commonState.age !== 'Dinosaur'
      ) {
        if (selectedAgeData.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 4,
          }));
          setAgeRangeError(false);
          setNextDisabled(false);
        } else {
          setAgeRangeError(true);
        }
      }
    }

    if (current === 4) {
      setNextDisabled(true);
      if (commonState.age !== 'Adult' || commonState.age !== 'Dinosaur') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 5,
        }));
        setSkillError(false);
        setNextDisabled(false);
      } else if (
        commonState.age === 'Adult' ||
        commonState.age === 'Dinosaur'
      ) {
        if (selectedSkillData.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 5,
          }));
          setSkillError(false);
        } else {
          setSkillError(true);
        }
      }
    }

    if (current === 5) {
      setNextDisabled(true);
      if (
        commonState.age === 'Dinosaur' ||
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Father-Son' ||
        commonState.age === 'Mother-Daughter'
      ) {
        if (commonState.teamSize.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 16,
          }));
          setTeamSizeError(false);
          setNextDisabled(false);
        } else {
          setTeamSizeError(true);
        }
      } else {
        if (commonState.teamSize.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 6,
          }));
          setTeamSizeError(false);
          setNextDisabled(false);
        } else {
          setTeamSizeError(true);
        }
      }
    }

    if (current === 6) {
      setNextDisabled(true);
      if (commonState.teamFormat.length > 0) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 16,
        }));
        setFormatError(false);
        setNextDisabled(false);
      } else {
        setFormatError(true);
      }
    }

    if (current === 16) {
      setNextDisabled(false);
      // if (commonState.teamFormat.length > 0) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStep: 7,
      }));
      // setFormatError(false);
      setNextDisabled(false);
      // } else {
      // setFormatError(true);
      // }
    }

    if (current === 10) {
      setNextDisabled(true);
      if (commonState.normalAmount.length > 0) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 11,
        }));
        setNormalPriceError(false);
        setNextDisabled(false);
      } else {
        setNormalPriceError(true);
      }
    }
    if (current === 11) {
      setNextDisabled(true);
      if (commonState.lateAmount.length > 0) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 12,
        }));
        setLatePriceError(false);
        setNextDisabled(false);
      } else {
        setLatePriceError(true);
      }
    }
    if (current === 13) {
      setNextDisabled(true);
      if (jselectedGenderData.length > 0) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 14,
        }));
        setJGenderError(false);
        setNextDisabled(false);
      } else {
        setJGenderError(true);
      }
    }
    if (current === 14) {
      setNextDisabled(true);
      if (
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Mother-Daughter' ||
        commonState.age === 'Father-Son'
      ) {
        if (jselectedAgeData.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 5,
          }));
          setJAgeRangeError(false);
          setNextDisabled(false);
        } else {
          setJAgeRangeError(true);
        }
      } else {
        if (jselectedAgeData.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 15,
          }));
          setJAgeRangeError(false);
          setNextDisabled(false);
        } else {
          setJAgeRangeError(true);
        }
      }
    }

      if (current === 15) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 17,
          }));
          setJLevelError(false);
    }

    if(current===17){
    if (commonState.age !== 'Adult' || commonState.age !== 'Dinosaur') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 5,
        }));
        setJSkillError(false);
      } else if (
        commonState.age === 'Adult' ||
        commonState.age === 'Dinosaur'
      ) {
        if (jselectedSkillData.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 5,
          }));
          setJSkillError(false);
        } else {
          setJSkillError(true);
        }
      }
    }

    if (current === 8) {
      setNextDisabled(true);
      console.log(commonState.earlyBirdDate);
      if (commonState.earlyBird === 'Yes') {
        if (
          commonState.earlyBirdDate !== '' &&
          commonState.earlyBirdDate !== 'Invalid date'
        ) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 9,
          }));
          setEBDateError(false);
          setNextDisabled(false);
        } else {
          setEBDateError(true);
        }
      }
      // else if(commonState.earlyBird==='No'){

      // }
    }

    if (current === 9) {
      setNextDisabled(true);
      if (commonState.earlyBird === 'Yes') {
        if (commonState.earlyBirdAmount.length > 0) {
          setCommonState((prevState) => ({
            ...prevState,
            currentStep: 10,
          }));
          setEBAmountError(false);
          setNextDisabled(false);
        } else {
          setEBAmountError(true);
        }
      }
    }

    if (current === -1) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStep: current + 1,
      }));
    }

    if (current === 12) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStep: 12,
      }));
    }

    if (current === 0) {
      if (commonState.selectedTemplate === '') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 1,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 12,
        }));
      }
    }

    if (current === 7) {
      if (commonState.earlyBird === 'Yes') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 8,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 10,
        }));
      }
    }
  };

  const _prev = () => {
    setPrevButtonEnabled(true);
    let current = commonState.currentStep;
    if (current === 13) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStep: 1,
      }));
    }

    if (
      current === 3 ||
      current === 4 ||
      current === 6 ||
      // current === 7 ||
      current === 8 ||
      current === 11 ||
      // current === 14 ||
      current === 10 ||
      current === 1 ||
      current === 2 ||
      current === 0 ||
      current === 15 ||
      current === 9
    ) {
      setCommonState((prevState) => ({
        ...prevState,
        currentStep: current - 1,
      }));
    }

    if (current === 5) {
      if (commonState.age === 'Adult') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 4,
        }));
      } else if (commonState.age === 'Dinosaur') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 3,
        }));
      } 
      else if(commonState.age === 'Junior'){
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 17,
        }));
      }
      else if (
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Mother-Daughter' ||
        commonState.age === 'Father-Son'
      ) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 14,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 15,
        }));
      }
    }

    if (current === 10) {
      if (commonState.earlyBird === 'Yes') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 9,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 7,
        }));
      }
    }

    if (current === 12) {
      if (commonState.selectedTemplate === '') {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 11,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 0,
        }));
      }
    }

    if (current === 14) {
      if (
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Mother-Daughter' ||
        commonState.age === 'Father-Son'
      ) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 1,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 13,
        }));
      }
    }

    if (current === 16) {
      if (
        commonState.age === 'Dinosaur' ||
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Mother-Daughter' ||
        commonState.age === 'Father-Son'
      ) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 5,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 6,
        }));
      }
    }

    if (current === 7) {
      if (
        commonState.age === 'Dinosaur' ||
        commonState.age === 'Father-Daughter' ||
        commonState.age === 'Mother-Son' ||
        commonState.age === 'Mother-Daughter' ||
        commonState.age === 'Father-Son'
      ) {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 16,
        }));
      } else {
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 16,
        }));
      }
    }

    if(current===17){
      if(commonState.age === 'Junior'){
        setCommonState((prevState) => ({
          ...prevState,
          currentStep: 15,
        }));
      }
  }
  };

  // The "next" and "previous" button functions
  const previousButton = () => {
    let current = commonState.currentStep;
    if (current !== -1 && current !== 0) {
      /**Changed 1 to 0 here!!!! */
      return (
        <button
          className="WFPreviousButton"
          id="white-button-hover"
          type="button"
          onClick={_prev}
          style={{ outline: 0 }}
        >
          <span className="WFPreviousButtonText">BACK</span>
        </button>
      );
    }
    if (current === 0 && commonState.selectedTemplate === '') {
      return (
        <button
          className="WFPreviousButton"
          id="white-button-hover"
          type="button"
          onClick={_prev}
          style={{ outline: 0 }}
        >
          <span className="WFPreviousButtonText">CANCEL</span>
        </button>
      );
    }
    if (current === 0 && commonState.selectedTemplate !== '') {
      return null;
    } else {
      return null;
    }
  };

  const nextButton = () => {
    let current = commonState.currentStep;
    if (current !== -1 && current !== 12 && current !== 0) {
      return (
        <button
          className={nextDisabled ? 'WFNextButtonDisabled' : 'WFNextButton'}
          id="yellow-button-hover"
          type="button"
          onClick={_next}
          style={{ outline: 0 }}
        >
          <span className="WFNextButtonText">NEXT</span>
        </button>
      );
    }
    if (current === 0 && commonState.selectedTemplate === '') {
      return (
        <button
          className="WFNextButton"
          id="yellow-button-hover"
          type="button"
          onClick={_next}
          style={{ outline: 0 }}
        >
          <span className="WFNextButtonText">NEW</span>
        </button>
      );
    }
    if (current === 0 && commonState.selectedTemplate !== '') {
      return (
        <div className="d-flex">
          <button
            className="WFPreviousButton"
            id="white-button-hover"
            style={{
              outline: 0,
              marginBottom: 0,
              fontSize: 10,
              marginBottom: 3,
            }}
            onClick={_prev}
          >
            <span className="WFPreviousButtonText">CANCEL</span>
          </button>
          <div
            className="li-link"
            id="yellow-button-hover"
            onClick={handleSubmit}
          >
            <button
              className="SubmitButton"
              style={{ outline: 0, marginBottom: 0 }}
            >
              {/* SAVE */}
              DONE
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const steps = () => {
    let current = commonState.currentStep;
    let age = commonState.age;
    let noOfPrompts = 12;
    let number = 0;
    if(age === 'Junior'){
      noOfPrompts = 13;
      number =1;
    }

    if (current === 13) return   `${2}/${noOfPrompts}` ;
    if (current === 14) return  `3/${noOfPrompts}`;
    if (current === 15) return  `4/${noOfPrompts}`;
    if (current === 11) return  `${12+number}/${noOfPrompts}`;
    if (current === 16) return `${7+number}/${noOfPrompts}`;
    if (current === 7) return `${8+number}/${noOfPrompts}`;
    if (current === 8) return  `${9+number}/${noOfPrompts}`;
    if (current === 9) return `${10+number}/${noOfPrompts}`;
    if (current === 10) return `${11+number}/${noOfPrompts}`;
    if (current === 17) return `5/${noOfPrompts}`;
    if (current === -1) return null;
    if (current === 0) return null;
    if (current === 12) return null;
    if (current === 1) return current+`/${noOfPrompts}`
    else return current+number +`/${noOfPrompts}`
  };

  //MODAL CODE STARTS HERE:
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleLogin = (event) => {
  //   // toggleModal();
  //   alert(
  //     'Username: ' +
  //       this.username.value +
  //       ' Password: ' +
  //       this.password.value +
  //       ' Remember: ' +
  //       this.remember.checked
  //   );
  //   event.preventDefault();
  // };

  const handleBack = (x) => {
    // setCurrentStep(x);
    setCommonState((prevState) => ({
      ...prevState,
      currentStep: x,
    }));
  };

  return (
    <>
      {/* <div className="NEW_EVENT" onClick={this.onOpenModal}> */}
      <img
        src={plusIcon}
        alt=""
        onClick={onOpenModal}
        className="img-fluid new-event"
      />
      {/* </div> */}
      {/* <button onClick={this.onOpenModal}>Open modal</button> */}
      <Modal
        open={commonState.open}
        onClose={onCloseModalOutside}
        center
        closeIcon={closeIcon}
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
            padding: 0,
            margin: 0,
            overflow: 'visible',
          },
        }}
      >
        {/* <h2>Simple centered modal</h2> */}
        <div
          className={
            commonState.currentStep === -1
              ? 'PlayerProfileCancelContainer'
              : 'WizardFormComponent'
          }
        >
          <div
            className={
              commonState.currentStep === -1
                ? 'PlayerProfileCancelContainer'
                : 'WizardForm'
            }
          >
            <div
              className={
                commonState.currentStep === -1
                  ? 'PlayerProfileCancelContainer'
                  : 'WizardFormComponent'
              }
            >
              <div>
                <p className="Step">{steps()}</p>

                <form onSubmit={handleSubmit}>
                  <PlayerProfileCancelD
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    handleBack={handleBack}
                    onCloseModal={onCloseModal}
                    previousStep={previousStep}
                  />

                  <SavedDivision
                    currentStep={commonState.currentStep}
                    handleChange={handleDropdownDivisions}
                    eventDropdownData={eventDropdownData}
                  />

                  <MainStepComponent
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    age={commonState.age}
                    ageError={ageError}
                    handleMainDropdown={handleDropdown}
                  />
                  <AdultStep1
                    currentStep={commonState.currentStep}
                    age={commonState.age}
                    handleChange={handleChange}
                    selectedGender={commonState.selectedGender}
                    genderError={genderError}
                    onCheck={onCheck}
                  />
                  <AdultStep2
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    ageRangeError={ageRangeError}
                    selectedAgeRange={commonState.selectedAgeRange}
                    selectedGender={commonState.selectedGender}
                    onAgeCheck={onAgeCheck}
                    age={commonState.age}
                  />
                  <AdultStep3
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    selectedSkill={commonState.selectedSkill}
                    skillError={skillError}
                    onSkillCheck={onSkillCheck}
                  />
                  <AdultStep4
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    teamSize={commonState.teamSize}
                    teamSizeError={teamSizeError}
                    handleMainDropdown={handleDropdown2}
                  />
                  <AdultStep5
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    teamFormat={commonState.teamFormat}
                    formatError={formatError}
                    handleMainDropdown={handleDropdown3}
                  />
                  <AdultStep16
                    currentStep={commonState.currentStep}
                    discount_applied={(e) =>
                      setCommonState((prevState) => ({
                        ...prevState,
                        discount_applied: e,
                      }))
                    }
                    discount_voucher={(e) =>
                      setCommonState((prevState) => ({
                        ...prevState,
                        discount_voucher: e,
                      }))
                    }
                    discountAmount={(e) =>
                      setCommonState((prevState) => ({
                        ...prevState,
                        discountAmount: e === '' ? null : e,
                      }))
                    }
                    discountText={(e) => {
                      setCommonState((prevState) => ({
                        ...prevState,
                        discountText: e === '' ? null : e,
                      }));
                    }}
                  />
                  <AdultStep6
                    currentStep={commonState.currentStep}
                    handleChange={handleChange}
                    earlyBird={commonState.earlyBird}
                  />
                  <AdultStep7
                    currentStep={commonState.currentStep}
                    handleChange={handlePriceChange}
                    earlyBirdAmount={commonState.earlyBirdAmount}
                    EBAmountError={EBAmountError}
                  />
                  <AdultStep8
                    currentStep={commonState.currentStep}
                    normalPriceError={normalPriceError}
                    handleChange={handlePriceChange}
                    normalAmount={commonState.normalAmount}
                  />
                  <AdultStep9
                    currentStep={commonState.currentStep}
                    latePriceError={latePriceError}
                    handleChange={handlePriceChange}
                    lateAmount={commonState.lateAmount}
                  />
                  <AdultStep10
                    currentStep={commonState.currentStep}
                    handleCheckbox={onTemplateSaveCheck}
                    divNameTakenError={divNameTakenError}
                    handleChange={handleChange}
                    divisionName={commonState.divisionName}
                    templateNameCounter={templateNameCounter}
                    disableCheckbox={false}
                    // handleSubmit={this.state.handleSubmit}
                  />
                  <AdultStep11
                    usedComponent="Event"
                    currentStep={commonState.currentStep}
                    handleChange={handleEarlyBirdDate}
                    EBDateError={EBDateError}
                    // divisionName={commonState.divisionName}
                    // handleSubmit={this.state.handleSubmit}
                  />
                  <JuniorStep1
                    currentStep={commonState.currentStep}
                    onjCheck={onjCheck}
                    jGenderError={jGenderError}
                    jselectedGender={commonState.jselectedGender}
                  />
                  <JuniorStep2
                    currentStep={commonState.currentStep}
                    onjAgeCheck={onjAgeCheck}
                    jAgeRangeError={jAgeRangeError}
                    jselectedAgeRange={commonState.jselectedAgeRange}
                    age={commonState.age}
                  />
                  <JuniorStep3
                    currentStep={commonState.currentStep}
                    onjSkillCheck={onjSkillCheck}
                    jSkillError={jSkillError}
                    jselectedSkill={commonState.jselectedSkill}
                  />
                  <JuniorStep4
                  currentStep={commonState.currentStep}
                  onjLevelCheck={onjLevelCheck}
                  jLevelError={jLevelError}
                  jselectedLevel={commonState.jselectedLevel}
                />

                  <div className="INbuttons">
                    {previousButton()}
                    {nextButton()}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MasterForm;
