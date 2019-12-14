import React from 'react';
import DatePicker from 'react-date-picker';

const AddProject = props => {
  return props.projects.map((e, i) => (
    <div key={i}>
      <label>Project Name: </label>
      <input
        type='text'
        name='projectName'
        value={e.projectName || ''}
        onChange={props.onChange.bind(this, i)}
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
        value={e.projectStartDate}
        // onChange={value => props.changeProjectStartDate(value, i)}
      />{' '}
      <label>To: </label>
      <DatePicker
        name='projectEndDate'
        format='dd-MM-yyyy'
        dayPlaceholder='dd'
        monthPlaceholder='mm'
        yearPlaceholder='yyyy'
        clearIcon={null}
        value={e.projectEndDate}
        // onChange={value => props.changeProjectEndDate(value, i)}
      />{' '}
      <br />
      <label>Project Details: </label> <br />
      <textarea
        name='projectDetails'
        id='projectDetails'
        cols='30'
        rows='10'
        value={e.projectDetails || ''}
        // onChange={props.onChange.bind(this, i)}
      />
      <br />
      <input
        type='button'
        value='Remove'
        onClick={props.removeProject.bind(this, i)}
      />
    </div>
  ));
};

export default AddProject;
