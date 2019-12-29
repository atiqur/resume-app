import React from 'react';
import RichTextEditor from 'react-rte';

const AddText = props => {
  return (
    <RichTextEditor value={props.state} onChange={props.onChange.bind(this)} />
  );
};

export default AddText;
