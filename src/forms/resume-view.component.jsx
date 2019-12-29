import React from 'react';

import './resume-view.styles.css';
import HtmlComponent from '../components/html-parser.component';

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
      <HtmlComponent state={props.objective} />
      <br /> <br />
      <hr />
      <h2>Professional Experience</h2>
      {props.experience.map(e => {
        let textDurationStartDate, textDurationEndDate;
        if (!e.durationStartDate) {
          textDurationStartDate = '';
        } else {
          textDurationStartDate = e.durationStartDate.toLocaleDateString(
            'en-IN'
          );
        }
        if (!e.durationEndDate) {
          textDurationEndDate = '';
        } else {
          textDurationEndDate =
            ' to ' + e.durationEndDate.toLocaleDateString('en-IN');
        }

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
      {props.education.map((e, i) => (
        <div key={i}>
          <p>Course: {e.course}</p>
          <p>Institute: {e.institute}</p>
          <p>University / Board: {e.university}</p>
          <p>Year: {e.yearOfPassing}</p>
          <p>Aggreggate: {e.aggregate}</p>
        </div>
      ))}
      <hr />
      <h2>Other Skills</h2>
      <HtmlComponent state={props.otherSkills} />
      <br />
      <hr />
      <h2>Personal Details</h2>
      {props.dateOfBirth
        ? props.dateOfBirth.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      <br />
      {props.gender} <br />
      {props.maritalStatus} <br />
      {props.hobbies} <br />
      Languages Known:{' '}
      {props.languagesKnown
        .map(language => (language === undefined ? '' : `${language}`))
        .join(', ')}{' '}
      <br />
      <hr />
    </div>
  );
};

export default ResumeView;
