import React from 'react';

const AddLanguage = props => {
  return props.stateLanguages.map((el, i) => (
    <div key={i}>
      <label htmlFor='languagesKnown'></label>
      <input
        type='text'
        // value={el || ''}
        onChange={props.handleLanguage.bind(this, i)}
      />
      <input
        type='button'
        value='Remove'
        onClick={props.removeLanguage.bind(this, i)}
      />
      <input
        type='button'
        value='Add Language'
        onClick={props.addLanguage.bind(this)}
      />{' '}
    </div>
  ));
};

export default AddLanguage;
