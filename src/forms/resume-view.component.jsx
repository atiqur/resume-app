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
      {props.experience.map(e => {
        if (!e.durationStartDate) {
          var textDurationStartDate = '';
        } else {
          var textDurationStartDate = e.durationStartDate.toLocaleDateString(
            'en-IN'
          );
        }
        if (!e.durationEndDate) {
          var textDurationEndDate = '';
        } else {
          var textDurationEndDate =
            ' to ' + e.durationEndDate.toLocaleDateString('en-IN');
        }

        // let text = `Company: ${e.companyName} \n
        //   Designation: ${e.designation} \n
        //   Key Responsibilities: ${e.keyResponsibilities} \n
        //   Duration From: ${textDurationStartDate} to ${textDurationEndDate} \n
        //   Current Company: ${e.isCurrentCompany} \n
        //   `;

        // let textInNewLines = text.split('\n').map(i => {
        //   return <p>{i}</p>;
        // });

        // return textInNewLines;
        return (
          <div>
            <p>
              {e.isCurrentCompany ? (
                <strong>Current Company: </strong>
              ) : (
                <strong>Company: </strong>
              )}
              {e.companyName}
            </p>
            <p>
              <strong>Designation: </strong>
              {e.designation}
            </p>
            <p>
              <strong>Duration: </strong>
              {textDurationStartDate}
              {textDurationEndDate}
            </p>
            <p>
              <strong>Key Responsibilities: </strong>
              {e.keyResponsibilities}
            </p>
          </div>
        );
      })}{' '}
      <br />
      {/* <h3>Projects</h3>
      {props.projectName} <br />
      {props.projectStartDate
        ? props.projectStartDate.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      to
      {props.projectEndDate
        ? props.projectEndDate.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      <br />
      {props.projectDetails} <br /> */}
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
