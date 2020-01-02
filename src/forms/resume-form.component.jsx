import React from 'react';
import { Link } from 'react-router-dom';
import './resume-form.styles.css';
import ResumeView from './resume-view.component';
import AddInput from '../components/add-input';
import AddExperience from '../components/add-experience.component';
import AddEducation from '../components/add-education.component';
import AddPersonalDetails from '../components/add-personal-details.component';
import AddText from '../components/add-text.component';
import RichTextEditor from 'react-rte';

class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      candidateName: '',
      candidateMobileNos: [undefined],
      candidateEmail: [undefined],
      objective: RichTextEditor.createEmptyValue(),
      experience: [
        {
          companyName: '',
          designation: '',
          durationStartDate: undefined,
          isCurrentCompany: false,
          durationEndDate: undefined,
          keyResponsibilities: RichTextEditor.createEmptyValue()
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
      otherSkills: RichTextEditor.createEmptyValue(),
      dateOfBirth: undefined,
      gender: '',
      maritalStatus: '',
      hobbies: '',
      languagesKnown: ['English', 'Hindi'],
      remark: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMobileNos = this.handleMobileNos.bind(this);
    this.removeMobile = this.removeMobile.bind(this);
    this.addMobile = this.addMobile.bind(this);
    this.handleEmails = this.handleEmails.bind(this);
    this.removeEmail = this.removeEmail.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.handleObjective = this.handleObjective.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleObjective = this.handleObjective.bind(this);
    this.handleOtherSkills = this.handleOtherSkills.bind(this);
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

  handleKeyResponsibilities(value, i) {
    let experience = [...this.state.experience];
    experience[i].keyResponsibilities = value;
    this.setState({ experience });
  }

  addExperience() {
    this.setState(prevState => ({
      experience: [
        ...prevState.experience,
        { keyResponsibilities: RichTextEditor.createEmptyValue() }
      ]
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

  handleObjective(objective) {
    this.setState({ objective });
  }

  handleOtherSkills(otherSkills) {
    this.setState({ otherSkills });
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
                eventHandler={this.handleMobileNos}
                stateField={this.state.candidateMobileNos}
                removeField={this.removeMobile}
              />
              <input
                type='button'
                value='Add Mobile'
                onClick={this.addMobile}
              />{' '}
              <br />
              <label htmlFor='email'>Email ID: </label> <br />
              <AddInput
                type={'email'}
                name={'Email'}
                label={'Email'}
                eventHandler={this.handleEmails}
                stateField={this.state.candidateEmail}
                removeField={this.removeEmail}
              />
              <input type='button' value='Add Email' onClick={this.addEmail} />{' '}
              <br />
            </div>{' '}
            <br />
            <hr />
            <div className='objective'>
              <h2 className='section-header'>Objective</h2>
              <AddText
                name='objective'
                state={this.state.objective}
                onChange={this.handleObjective}
              />
            </div>{' '}
            <br />
            <hr />
            <div className='professional-experience'>
              <h2 className='section-header'>Professional Experience</h2>
              <AddExperience
                stateValue={this.state.experience}
                onChange={this.handleExperience}
                handleKeyResponsibilities={(value, i) => {
                  let experience = [...this.state.experience];
                  experience[i].keyResponsibilities = value;
                  this.setState({ experience });
                }}
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
                removeExperience={this.removeExperience}
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
              <AddText
                name='otherSkills'
                state={this.state.otherSkills}
                onChange={this.handleOtherSkills.bind(this)}
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
            <hr />
            <label htmlFor='remark'>Remark: </label> <br />
            <textarea
              name='remark'
              value={this.state.remark}
              onChange={this.handleChange}
            />{' '}
            <br />
            <Link
              className='resume-form-button'
              to={{ pathname: '/view', ...this.state }}
            >
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
