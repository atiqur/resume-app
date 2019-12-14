import React from 'react';

const AddEducation = props => {
  return props.stateValue.map((e, i) => (
    <span>
      <div key={i} onChange={props.onChange.bind(this, i)}>
        <label>Course</label>
        <input type='text' name='course' value={e.course || ''} /> <br />
        <label>Institute</label>
        <input type='text' name='institute' value={e.institute || ''} /> <br />
        <label>University</label>
        <input type='text' name='university' value={e.university || ''} />{' '}
        <br />
        <label>Year of Passing</label>
        <input
          type='number'
          name='yearOfPassing'
          value={e.yearOfPassing}
        />{' '}
        <br />
        <label>Aggregate</label>
        <input type='text' name='aggregate' value={e.aggregate} /> <br />
      </div>
      <input
        type='button'
        value='Remove'
        onClick={props.removeEducation.bind(this, i)}
      />
    </span>
  ));
};

export default AddEducation;
