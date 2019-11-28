import React from 'react';

import './resume-view.styles.css';

const ResumeView = props => {
  return (
    <div className='resume-view'>
      <h1>Resume View</h1>
      <h2>Contact Details</h2>
      Name: {props.candidateName} <br />
      Mobile Nos:{' '}
      {props.candidateMobileNos
        .map(mobile => (mobile === undefined ? '' : `${mobile}`))
        .join(', ')}{' '}
      <br />
      Email:{' '}
      {props.candidateEmail
        .map(email => (email === undefined ? '' : `${email}`))
        .join(', ')}{' '}
      <br />
      <br />
      <hr />
      <h2>Objective</h2>
      {props.objective} <br /> <br />
      <hr />
      <h2>Professional Experience</h2>
      {props.company} <br />
      {props.designation} <br />
      {props.durationStartDate
        ? props.durationStartDate.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      to
      {props.durationEndDate
        ? props.durationEndDate.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      <br />
      {props.keyResponsibilities} <br />
      <h3>Projects</h3>
      {props.projectName} <br />
      {props.projectStartDate
        ? props.projectStartDate.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      to
      {props.projectEndDate
        ? props.projectEndDate.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      <br />
      {props.projectDetails} <br />
      <hr />
      <h2>Academic Credentials</h2>
      {props.course} <br />
      {props.institute} <br />
      {props.university} <br />
      {props.yearOfPassing} <br />
      {props.aggregate} <br />
      <hr />
      <h2>Other Skills</h2>
      {props.otherSkills} <br />
      <hr />
      <h2>Personal Details</h2>
      {props.dateOfBirth
        ? props.dateOfBirth.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      <br />
      {props.gender} <br />
      {props.maritalStatus} <br />
      {props.hobbies} <br />
      {props.languagesKnown} <br />
      <hr />
    </div>
  );
};

export default ResumeView;
