import React from 'react';
import { Link } from 'react-router-dom';
import './resume-form.styles.css';
import ResumeView from './resume-view.component';
import AddInput from '../components/add-input';
import AddMultipleInput from '../components/add-multiple-input.component';
import AddExperience from '../components/add-experience.component';
import AddEducation from '../components/add-education.component';
import AddPersonalDetails from '../components/add-personal-details.component';

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
      languagesKnown: ['English', 'Hindi']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleMobileNos(i, event) {
    let candidateMobileNos = [...this.state.candidateMobileNos];
    candidateMobileNos[i] = event.target.value;
    this.setState({ candidateMobileNos });
  }

  addMobile() {
    this.setState(prevState => ({
      candidateMobileNos: [...prevState.candidateMobileNos, '']
    }));
  }

  removeMobile(i) {
    let candidateMobileNos = [...this.state.candidateMobileNos];
    candidateMobileNos.splice(i, 1);
    this.setState({ candidateMobileNos });
  }

  handleEmails(i, event) {
    let candidateEmail = [...this.state.candidateEmail];
    candidateEmail[i] = event.target.value;
    this.setState({ candidateEmail });
  }

  addEmail() {
    this.setState(prevState => ({
      candidateEmail: [...prevState.candidateEmail, '']
    }));
  }

  removeEmail(i) {
    let candidateEmail = [...this.state.candidateEmail];
    candidateEmail.splice(i, 1);
    this.setState({ candidateEmail });
  }

  handleLanguage(i, event) {
    // const value =
    // event.target.type === 'checkbox'
    //   ? event.target.checked
    //   : event.target.value;
    let languagesKnown = [...this.state.languagesKnown];
    languagesKnown[i] = event.target.value;
    this.setState({ languagesKnown });
  }

  addLanguage() {
    this.setState(prevState => ({
      languagesKnown: [...prevState.languagesKnown, '']
    }));
  }

  removeLanguage(i) {
    let languagesKnown = [...this.state.languagesKnown];
    languagesKnown.splice(i, 1);
    this.setState({ languagesKnown });
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

  handleSubmit(event) {
    event.preventDefault();
  }

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
              <label htmlFor='mobile'>Mobile Numbers: </label> <br />
              <AddInput
                type={'number'}
                name={'Mobile'}
                label={'Mobile'}
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
              <label htmlFor='email'>Email ID: </label> <br />
              <AddInput
                type={'email'}
                name={'Email'}
                label={'Email'}
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
              handleLanguage={this.handleLanguage.bind(this)}
              removeLanguage={this.removeLanguage.bind(this)}
              addField={this.addLanguage.bind(this)}
            />
            <Link className='resume-form-button'>
              <button>
                <h3>Next --></h3>
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
