import React from 'react';
import { Link } from 'react-router-dom';
import './resume-form.styles.css';
import DatePicker from 'react-date-picker';
import ResumeView from './resume-view.component';
import AddInput from '../components/add-input';
import AddMultipleInput from '../components/add-multiple-input.component';
import AddExperience from '../components/add-experience.component';

class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        }
      ],
      projectName: '',
      projectStartDate: undefined,
      projectEndDate: undefined,
      projectDetails: '',
      course: '',
      institute: '',
      university: '',
      yearOfPassing: '',
      aggregate: '',
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
    if (name == 'companyName') {
      experience[i].companyName = value;
    } else if (name === 'designation') {
      experience[i].designation = value;
    } else if (name === 'keyResponsibilities') {
      experience[i].keyResponsibilities = value;
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
                removeExperience={this.removeExperience.bind(this)}
              />
              <br />
              <input
                type='button'
                value='Add Experience'
                onClick={this.addExperience.bind(this)}
              />{' '}
              <br />
              <h3>Projects: </h3>
              <label>Project Name: </label>
              <input
                type='text'
                name='projectName'
                value={this.state.projectName}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Duration: </label>
              <label>From: </label>
              <DatePicker
                name='projectStartDate'
                format='dd-MM-yyyy'
                dayPlaceholder='dd'
                monthPlaceholder='mm'
                yearPlaceholder='yyyy'
                clearIcon={null}
                value={this.state.projectStartDate}
                onChange={value =>
                  this.setState({ projectStartDate: new Date(value) })
                }
              />{' '}
              <label>To: </label>
              <DatePicker
                name='projectEndDate'
                format='dd-MM-yyyy'
                dayPlaceholder='dd'
                monthPlaceholder='mm'
                yearPlaceholder='yyyy'
                clearIcon={null}
                value={this.state.projectEndDate}
                onChange={value =>
                  this.setState({ projectEndDate: new Date(value) })
                }
              />{' '}
              <br />
              <label>Project Details: </label> <br />
              <textarea
                name='projectDetails'
                id='projectDetails'
                cols='30'
                rows='10'
                value={this.state.projectDetails}
                onChange={this.handleChange}
              />
            </div>
            <hr />
            <div className='academic-credentials'>
              <h2 className='section-header'>Academic Credentials</h2>
              <label>Course</label>
              <input
                type='text'
                name='course'
                value={this.state.course}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Institute</label>
              <input
                type='text'
                name='institute'
                value={this.state.institute}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>University</label>
              <input
                type='text'
                name='university'
                value={this.state.university}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Year of Passing</label>
              <input
                type='text'
                name='yearOfPassing'
                value={this.state.yearOfPassing}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Aggregate</label>
              <input
                type='text'
                name='aggregate'
                value={this.state.aggregate}
                onChange={this.handleChange}
              />{' '}
              <br />
              <hr />
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
                <div className='personal-details'>
                  <h2 className='section-header'>Personal Details</h2>
                  <label>Date of Birth: </label>
                  <DatePicker
                    name='dateOfBirth'
                    format='dd-MM-yyyy'
                    dayPlaceholder='dd'
                    monthPlaceholder='mm'
                    yearPlaceholder='yyyy'
                    clearIcon={null}
                    value={this.state.dateOfBirth}
                    onChange={value => this.setState({ dateOfBirth: value })}
                  />{' '}
                  <br />
                  <label>Gender: </label> <br />
                  <input
                    type='radio'
                    name='gender'
                    id='gender'
                    value='male'
                    checked={this.state.gender === 'male'}
                    onChange={this.handleChange}
                  />{' '}
                  Male <br />
                  <input
                    type='radio'
                    name='gender'
                    id='gender'
                    value='female'
                    checked={this.state.gender === 'female'}
                    onChange={this.handleChange}
                  />{' '}
                  Female <br />
                  <input
                    type='radio'
                    name='gender'
                    id='gender'
                    value='other'
                    checked={this.state.gender === 'other'}
                    onChange={this.handleChange}
                  />{' '}
                  Other <br />
                  <label>Marital Status: </label>
                  <input
                    type='radio'
                    name='maritalStatus'
                    id='maritalStatus'
                    value='married'
                    checked={this.state.maritalStatus === 'married'}
                    onChange={this.handleChange}
                  />{' '}
                  Married{' '}
                  <input
                    type='radio'
                    name='maritalStatus'
                    id='maritalStatus'
                    value='single'
                    onChange={this.handleChange}
                  />{' '}
                  Single <br />
                  <label>Hobbies: </label>
                  <input
                    type='text'
                    name='hobbies'
                    id='hobbies'
                    value={this.state.hobbies}
                    onChange={this.handleChange}
                  />{' '}
                  <br />
                  <label>Languages Known: </label>
                  <select name='languagesKnown' onChange={this.handleChange}>
                    <option value='english'>English</option>
                    <option value='hindi'>Hindi</option>
                    <option value='assamese'>Assamese</option>
                  </select>
                </div>
              </div>
            </div>
            <Link className='resume-form-button' to='/resume-view'>
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
