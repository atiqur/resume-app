import React from 'react';
import DatePicker from 'react-date-picker';

const AddExperience = props => {
  return props.stateValue.map((e, i) => (
    <div key={i}>
      <label htmlFor='company'>Company: </label>
      <input
        type='text'
        name='companyName'
        value={e.companyName || ''}
        onChange={props.onChange.bind(this, i)}
      />{' '}
      <input
        type='checkbox'
        name='isCurrentCompany'
        value={e.isCurrentCompany || ''}
        onChange={props.onChange.bind(this, i)}
      />{' '}
      <label htmlFor='isCurrentCompany'>Current Company</label>
      <br />
      <label>Designation: </label>
      <input
        type='text'
        name='designation'
        value={e.designation || ''}
        onChange={props.onChange.bind(this, i)}
      />{' '}
      <br />
      <label>Duration: </label>
      <span>From: </span>
      <DatePicker
        name='durationStartDate'
        format='dd-MM-yyyy'
        dayPlaceholder='dd'
        monthPlaceholder='mm'
        yearPlaceholder='yyyy'
        clearIcon={null}
        value={e.durationStartDate}
        onChange={value => props.changeStartDate(value, i)}
      />{' '}
      {e.isCurrentCompany ? null : (
        <span>
          <span>To: </span>
          <DatePicker
            name='durationEndDate'
            format='dd-MM-yyyy'
            dayPlaceholder='dd'
            monthPlaceholder='mm'
            yearPlaceholder='yyyy'
            clearIcon={null}
            value={e.durationEndDate}
            onChange={value => props.changeEndDate(value, i)}
          />
        </span>
      )}{' '}
      <br />
      <label>Key Responsibilities: </label> <br />
      <textarea
        name='keyResponsibilities'
        cols='30'
        rows='10'
        value={e.keyResponsibilities || ''}
        onChange={props.onChange.bind(this, i)}
      />{' '}
      <br />
      {/* <AddProject
        name='projects'
        projects={e.projects}
        onChange={props.onChange.bind(this, i)}
        changeProjectStartDate={value => props.changeProjectStartDate(value, i)}
        changeProjectEndDate={value => props.changeProjectEndDate(value, i)}
        removeProject={props.removeProject.bind(this, i)}
      />
      <br />
      <input
        type='button'
        value='Add Project'
        onClick={props.handleAddProject.bind(this)}
      />{' '}
      <br /> */}
      <input
        type='button'
        value='Remove'
        onClick={props.removeExperience.bind(this, i)}
      />
    </div>
  ));
};

export default AddExperience;
