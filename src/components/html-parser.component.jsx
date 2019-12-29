import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const HtmlComponent = props => {
  const string = props.state.toString('html');
  return <div>{ReactHtmlParser(string)}</div>;
};

export default HtmlComponent;
