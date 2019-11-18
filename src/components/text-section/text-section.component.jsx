import React from 'react';
import './text-section.styles.css';

const TextSection = ({ sectionHeader, sectionContent }) => (
  <div className='section-header'>
    <h2>{sectionHeader.toUpperCase()}</h2>
    <hr />
    <div className='section-content'>{sectionContent}</div>
  </div>
);

export default TextSection;
