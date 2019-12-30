import React from 'react';
import RichTextEditor from 'react-rte';

const AddText = props => {
  return (
    <RichTextEditor
      name={props.name}
      value={props.state}
      onChange={props.onChange}
    />
  );
};

export default AddText;
