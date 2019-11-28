import React from 'react';

const AddText = props => {
  return (
    <div className='mobileNo'>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <br />{' '}
    </div>
  );
};

export default AddText;
