import React from 'react';

String.prototype.Capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const DynamicInput = props => {
  return props.fieldState.map((val, idx) => {
    let fieldId = `${props.field}-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={fieldId}>
          {props.field.Capitalize() + `#${idx + 1}`}
        </label>
        <input
          type='text'
          name={fieldId}
          data-id={idx}
          id={fieldId}
          value={fieldId[idx].val}
          className={props.name}
          onChange={props.onChange}
        />
      </div>
    );
  });
};
export default DynamicInput;
