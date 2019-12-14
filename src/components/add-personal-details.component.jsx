import React from 'react';
import DatePicker from 'react-date-picker';

const AddPersonalDetails = props => (
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
      value={props.state.dateOfBirth}
      onChange={value => props.handleDOB(value)}
    />{' '}
    <br />
    <label>Gender: </label> <br />
    <input
      type='radio'
      name='gender'
      id='gender'
      value='male'
      checked={props.state.gender === 'male'}
      onChange={props.handleChange}
    />{' '}
    Male <br />
    <input
      type='radio'
      name='gender'
      id='gender'
      value='female'
      checked={props.state.gender === 'female'}
      onChange={props.handleChange}
    />{' '}
    Female <br />
    <input
      type='radio'
      name='gender'
      id='gender'
      value='other'
      checked={props.state.gender === 'other'}
      onChange={props.handleChange}
    />{' '}
    Other <br />
    <label>Marital Status: </label>
    <input
      type='radio'
      name='maritalStatus'
      id='maritalStatus'
      value='married'
      checked={props.state.maritalStatus === 'married'}
      onChange={props.handleChange}
    />{' '}
    Married{' '}
    <input
      type='radio'
      name='maritalStatus'
      id='maritalStatus'
      value='single'
      onChange={props.handleChange}
    />{' '}
    Single <br />
    <label>Hobbies: </label>
    <input
      type='text'
      name='hobbies'
      id='hobbies'
      value={props.state.hobbies}
      onChange={props.handleChange}
    />{' '}
    <br />
    <label>Languages Known: </label>
    <select name='languagesKnown' onChange={props.handleChange}>
      <option value='english'>English</option>
      <option value='hindi'>Hindi</option>
    </select>{' '}
  </div>
);

export default AddPersonalDetails;
