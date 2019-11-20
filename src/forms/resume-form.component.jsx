import React from 'react';
import { Link } from 'react-router-dom';
import './resume-form.styles.css';
import DatePicker from 'react-date-picker';

class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: '',
      candidateMobileNo: '',
      candidateEmail: '',
      objective: '',
      company: '',
      designation: '',
      durationFrom: '',
      durationTo: '',
      keyResponsibilities: '',
      projectName: '',
      projectFrom: '',
      projectTo: '',
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
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ dateOfBirth: new Date(date) });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
              <label>Mobile No.:</label>
              <input
                type='number'
                name='candidateMobileNo'
                value={this.state.candidateMobileNo}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Email: </label>
              <input
                type='email'
                name='candidateEmail'
                value={this.state.candidateEmail}
                onChange={this.handleChange}
              />
            </div>{' '}
            <br />
            <hr />
            <div className='objective'>
              <h2 className='section-header'>Objective</h2>
              <textarea
                name='objective'
                id='objective'
                cols='30'
                rows='10'
                value={this.state.objective}
                onChange={this.handleChange}
              />
            </div>{' '}
            <br />
            <hr />
            <div className='professional-experience'>
              <h2 className='section-header'>Professional Experience</h2>
              <label>Company: </label>
              <input
                type='text'
                name='company'
                value={this.state.company}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Designation: </label>
              <input
                type='text'
                name='designation'
                value={this.state.designation}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Duration: </label>
              <span>From: </span>
              <input
                type='text'
                name='durationFrom'
                value={this.state.durationFrom}
                onChange={this.handleChange}
              />
              <span>To: </span>
              <input
                type='text'
                name='durationTo'
                value={this.state.durationTo}
                onChange={this.handleChange}
              />{' '}
              <br />
              <label>Key Responsibilities: </label> <br />
              <textarea
                name='keyResponsibilities'
                id='keyResponsibilities'
                cols='30'
                rows='10'
                value={this.state.keyResponsibilities}
                onChange={this.handleChange}
              />{' '}
              <br />
              <h3>Projects: </h3>
              <label>Project Name: </label>
              <input
                type='text'
                name='projectName'
                value={this.state.projectName}
                onChange={this.handleChange}
              />
              <label>Duration: </label>
              <label>From: </label>
              <input
                type='text'
                name='projectFrom'
                value={this.state.projectFrom}
                onChange={this.handleChange}
              />
              <label>To: </label>
              <input
                type='text'
                name='projectTo'
                value={this.state.projectTo}
                onChange={this.handleChange}
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
                    onChange={this.onChange}
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
        <div className='resume-view'>
          <h1>Resume View</h1>
          <h2>Contact Details</h2>
          Name: {this.state.candidateName} <br />
          Mobile No: {this.state.candidateMobileNo} <br />
          Email: {this.state.candidateEmail} <br />
          <br />
          <hr />
          <h2>Objectives</h2>
          {this.state.objective} <br /> <br />
          <hr />
          <h2>Professional Experience</h2>
          {this.state.company} <br />
          {this.state.designation} <br />
          {this.state.durationFrom} to {this.state.durationTo} <br />
          {this.state.keyResponsibilities} <br />
          <h3>Projects</h3>
          {this.state.projectName} <br />
          {this.state.projectFrom} to {this.state.projectTo} <br />
          {this.state.projectDetails} <br />
          <hr />
          <h2>Academic Credentials</h2>
          {this.state.course} <br />
          {this.state.institute} <br />
          {this.state.university} <br />
          {this.state.yearOfPassing} <br />
          {this.state.aggregate} <br />
          <hr />
          <h2>Other Skills</h2>
          {this.state.otherSkills} <br />
          <hr />
          <h2>Personal Details</h2>
          {this.state.dateOfBirth
            ? this.state.dateOfBirth.toLocaleDateString('en-IN')
            : 'NA'}{' '}
          <br />
          {this.state.gender} <br />
          {this.state.maritalStatus} <br />
          {this.state.hobbies} <br />
          {this.state.languagesKnown} <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default ResumeForm;
