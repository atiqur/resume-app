import React from 'react';

// String.prototype.Capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

// const DynamicInput = props => {
//   return props.fieldState.map((val, idx) => {
//     let fieldId = `${props.field}-${idx}`;
//     return (
//       <div key={idx}>
//         <label htmlFor={fieldId}>
//           {props.field.Capitalize() + `#${idx + 1}`}
//         </label>
//         <input
//           type='text'
//           name={fieldId}
//           data-id={idx}
//           id={fieldId}
//           value={fieldId[idx].val}
//           className={props.name}
//           onChange={props.onChange}
//         />
//       </div>
//     );
//   });
// };

const AddInput = ({ type, name, stateField, eventHandler, removeField }) => {
  return stateField.map((el, i) => (
    <div key={i}>
      <label htmlFor={name}>
        {name}#{i + 1}
      </label>
      <input
        type={type}
        value={el || ''}
        onChange={eventHandler.bind(this, i)}
      />
      <input type='button' value='Remove' onClick={removeField.bind(this, i)} />
    </div>
  ));
};

export default AddInput;
