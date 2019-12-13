import React from 'react';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const AddMultipleInput = props => {
  const { name, type, cols, rows } = props;
  switch (props.type) {
    case 'text':
      return (
        <div>
          <label htmlFor={name}>{name.capitalize()}: </label>
          <input
            type={type}
            name={name}
            onChange={props.eventHandler.bind(this)}
          />
        </div>
      );
    case 'textarea':
      return (
        <div>
          <textarea
            type={type}
            name={name}
            cols={cols}
            rows={rows}
            onChange={props.eventHandler.bind(this)}
          />
        </div>
      );
  }
};

export default AddMultipleInput;
