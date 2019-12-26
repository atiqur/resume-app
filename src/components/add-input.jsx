import React from 'react';

const AddInput = ({ type, name, stateField, eventHandler, removeField }) => {
  return stateField.map((el, i) => (
    <div key={i}>
      <input
        type={type}
        value={el || ''}
        onChange={eventHandler.bind(this, i)}
      />
      {i === 0 && name !== 'languagesKnown' ? (
        ''
      ) : (
        <input
          type='button'
          value='Remove'
          onClick={removeField.bind(this, i)}
        />
      )}
    </div>
  ));
};

export default AddInput;
