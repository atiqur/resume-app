import React from 'react';
import { Link } from 'react-router-dom';
import './resume-form.styles.css';
import ResumeView from './resume-view.component';
import AddInput from '../components/add-input';
import AddMultipleInput from '../components/add-multiple-input.component';
import AddExperience from '../components/add-experience.component';
import AddEducation from '../components/add-education.component';
import AddPersonalDetails from '../components/add-personal-details.component';
import { trimExt } from 'upath';

class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      candidateName: '',
      candidateMobileNos: [undefined],
      candidateEmail: [undefined],
      objective: '',
      experience: [
        {
          companyName: '',
          designation: '',
          durationStartDate: undefined,
          isCurrentCompany: false,
          durationEndDate: undefined,
          keyResponsibilities: ''
          // hasProjects: true,
          // projects: [
          //   {
          //     projectName: '',
          //     projectStartDate: undefined,
          //     projectEndDate: undefined,
          //     projectDetails: ''
          //   }
          // ]
        }
      ],
      education: [
        {
          course: '',
          institute: '',
          university: '',
          yearOfPassing: '',
          aggregate: ''
        }
      ],
      otherSkills: '',
      dateOfBirth: undefined,
      gender: '',
      maritalStatus: '',
      hobbies: '',
      languagesKnown: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
  }

  // addInput(type, name, eventHandler, stateField, removeField) {
  //   return stateField.map((el, i) => (
  //     <div key={i}>
  //       <label htmlFor={name}>
  //         {name}#{i + 1}
  //       </label>
  //       <input
  //         type={type}
  //         value={el || ''}
  //         onChange={eventHandler.bind(this, i)}
  //       />
  //       <input
  //         type='button'
  //         value='remove'
  //         onClick={removeField.bind(this, i)}
  //       />
  //     </div>
  //   ));
  // }

  // handleInput(i, e) {
  //   [e.target.name] = e.target.name;
  //   [e.target.name[i]] = e.target.value;
  //   this.setState( prevState => ( ...prevState,  [e.target.name[i]]: value )
  // }

  handleMobileNos(i, event) {
    let candidateMobileNos = [...this.state.candidateMobileNos];
    candidateMobileNos[i] = event.target.value;
    this.setState({ candidateMobileNos });
  }

  handleEmails(i, event) {
    let candidateEmail = [...this.state.candidateEmail];
    candidateEmail[i] = event.target.value;
    this.setState({ candidateEmail });
  }

  addMobile() {
    this.setState(prevState => ({
      candidateMobileNos: [...prevState.candidateMobileNos, '']
    }));
  }

  addEmail() {
    this.setState(prevState => ({
      candidateEmail: [...prevState.candidateEmail, '']
    }));
  }

  removeMobile(i) {
    let candidateMobileNos = [...this.state.candidateMobileNos];
    candidateMobileNos.splice(i, 1);
    this.setState({ candidateMobileNos });
  }

  removeEmail(i) {
    let candidateEmail = [...this.state.candidateEmail];
    candidateEmail.splice(i, 1);
    this.setState({ candidateEmail });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleExperience(i, event) {
    const { name, value } = event.target;
    let experience = [...this.state.experience];
    if (name === 'isCurrentCompany') {
      experience[i].isCurrentCompany = !experience[i].isCurrentCompany;
    } else {
      experience[i][name] = value;
    }
    this.setState({ experience });
  }

  addExperience() {
    this.setState(prevState => ({
      experience: [...prevState.experience, {}]
    }));
  }

  removeExperience(i) {
    let experience = [...this.state.experience];
    experience.splice(i, 1);
    this.setState({ experience });
  }

  handleEducation(i, event) {
    const { name, value } = event.target;
    let education = [...this.state.education];
    education[i][name] = value;
    this.setState({ education });
  }

  addEducation() {
    this.setState(prevState => ({
      education: [...prevState.education, {}]
    }));
  }

  removeEducation(i) {
    let education = [...this.state.education];
    education.splice(i, 1);
    this.setState({ education });
  }

  // addProject() {
  //   this.setState(prevState => ({
  //     project: [...prevState.project, {}]
  //   }));
  // }

  // removeProject(i, count) {
  //   let projects = [...this.state.experience[count].projects];
  //   projects.splice(i, 1);
  //   this.setState({ projects });
  // }

  handleSubmit(event) {
    event.preventDefault();
  }

  // handleMobileNos = event => {
  //   let candidateMobileNos = [...this.state.candidateMobileNos];
  //   candidateMobileNos[event.target.dataset.id] = event.target.value;
  //   this.setState({ candidateMobileNos });
  // };

  // handleEmails = event => {
  //   let candidateEmail = [...this.state.candidateEmail];
  //   candidateEmail[event.target.dataset.id] = event.target.value;
  //   this.setState({ candidateEmail });
  // };

  // addMobile = e => {
  //   this.setState(prevState => ({
  //     candidateMobileNos: [...prevState.candidateMobileNos, undefined]
  //   }));
  // };

  // addEmail = e => {
  //   this.setState(prevState => ({
  //     candidateEmail: [...prevState.candidateEmail, undefined]
  //   }));
  // };

  render() {
    return (
      <div className='resume-container'>
        <div className='resume-form'>
          <h1>Resume Form</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='contact-details'>
              <h2 className='section-header'>Contact Details</h2>
              <label>Name: </label>
              <input
                type='text'
                name='candidateName'
                value={this.state.candidateName}
                onChange={this.handleChange}
              />{' '}
              <br />
              {/* <DynamicInput
                name='candidateMobileNo'
                type='number'
                fieldState={this.state.candidateMobileNos}
                onChange={this.handleMobileNos}
                onRemove={this.removeClick}
                field='mobile'
              /> */}
              {/* <button onClick={this.addMobile}>Add Mobile Number</button> <br />{' '} */}
              {/* {this.addInput(
                'number',
                'Mobile',
                this.handleMobileNos,
                this.state.candidateMobileNos,
                this.removeMobile
              )} */}
              <AddInput
                type={'number'}
                name={'Mobile'}
                eventHandler={this.handleMobileNos.bind(this)}
                stateField={this.state.candidateMobileNos}
                removeField={this.removeMobile.bind(this)}
              />
              <input
                type='button'
                value='Add Mobile'
                onClick={this.addMobile.bind(this)}
              />{' '}
              <br />
              <AddInput
                type='email'
                name='Email'
                eventHandler={this.handleEmails.bind(this)}
                stateField={this.state.candidateEmail}
                removeField={this.removeEmail.bind(this)}
              />
              <input
                type='button'
                value='Add Email'
                onClick={this.addEmail.bind(this)}
              />{' '}
              <br />
            </div>{' '}
            <br />
            <hr />
            <div className='objective'>
              <h2 className='section-header'>Objective</h2>
              <AddMultipleInput
                name='objective'
                type='textarea'
                cols='30'
                rows='10'
                value={this.state.objective}
                eventHandler={this.handleChange.bind(this)}
              />
            </div>{' '}
            <br />
            <hr />
            <div className='professional-experience'>
              <h2 className='section-header'>Professional Experience</h2>
              <AddExperience
                stateValue={this.state.experience}
                onChange={this.handleExperience.bind(this)}
                changeStartDate={(value, i) => {
                  let experience = [...this.state.experience];
                  experience[i].durationStartDate = new Date(value);
                  this.setState({ experience });
                }}
                changeEndDate={(value, i) => {
                  let experience = [...this.state.experience];
                  experience[i].durationEndDate = new Date(value);
                  this.setState({ experience });
                }}
                // handleAddProject={this.addProject.bind(this)}
                // changeProjectStartDate={(value, i, count) => {
                //   let projects = [...this.state.experience[count].projects];
                //   projects[i].projectStartDate = new Date(value);
                //   this.setState({ projects });
                // }}
                // changeProjectEndDate={(value, i, count) => {
                //   let projects = [...this.state.experience[count].projects];
                //   projects[i].projectEndDate = new Date(value);
                //   this.setState({ projects });
                // }}
                // removeProject={this.removeProject.bind(this)}
                removeExperience={this.removeExperience.bind(this)}
              />
              <br />
              <input
                type='button'
                value='Add Experience'
                onClick={this.addExperience.bind(this)}
              />{' '}
              <br />
            </div>
            <hr />
            {/* Educational Qualification */}
            <div className='educational-qualification'>
              <h2 className='section-header'>Educational Qualification</h2>
              <AddEducation
                stateValue={this.state.education}
                onChange={this.handleEducation.bind(this)}
                removeEducation={this.removeEducation.bind(this)}
              />
              <br />
              <input
                type='button'
                value='Add Education'
                onClick={this.addEducation.bind(this)}
              />{' '}
            </div>
            <hr />
            {/* Other Skills */}
            <div className='other-skills'>
              <h2 className='section-header'>Other Skills</h2>
              <textarea
                name='otherSkills'
                id='otherSkills'
                cols='30'
                rows='10'
                value={this.state.otherSkills}
                onChange={this.handleChange}
              />
              <hr />
            </div>
            {/* Personal Details */}
            <AddPersonalDetails
              name='personal-details'
              handleDOB={value => this.setState({ dateOfBirth: value })}
              state={this.state}
              handleChange={this.handleChange.bind(this)}
            />
            <Link className='resume-form-button'>
              <button>
                <h1>Next --></h1>
              </button>
            </Link>
          </form>
        </div>
        <ResumeView {...this.state} />
      </div>
    );
  }
}

export default ResumeForm;
