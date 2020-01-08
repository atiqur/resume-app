import React from 'react';
import { Link } from 'react-router-dom';
import './resume-view-page.styles.css';
import HtmlComponent from '../components/html-parser.component';

const ResumeViewPage = props => {
  return (
    <div className='resume-view'>
      <h1>Resume View</h1>
      <h2>Contact Details</h2>
      Name: {props.location.candidateName} <br />
      Mobile Nos:{' '}
      {props.location.candidateMobileNos
        .map(mobile => (mobile === undefined ? '' : `${mobile}`))
        .join(', ')}{' '}
      <br />
      Email:{' '}
      {props.location.candidateEmail
        .map(email => (email === undefined ? '' : `${email}`))
        .join(', ')}{' '}
      <br />
      <br />
      <hr />
      <h2>Objective</h2>
      <HtmlComponent state={props.location.objective} />
      <br /> <br />
      <hr />
      <h2>Professional Experience</h2>
      {props.location.experience.map(e => {
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
              <strong>Key Responsibilities: </strong> <br />
              <HtmlComponent state={e.keyResponsibilities} />
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
      {props.location.education.map((e, i) => (
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
      <HtmlComponent state={props.location.otherSkills} />
      <br />
      <hr />
      <h2>Personal Details</h2>
      {props.location.dateOfBirth
        ? props.location.dateOfBirth.toLocaleDateString('en-IN')
        : 'NA'}{' '}
      <br />
      {props.location.gender} <br />
      {props.location.maritalStatus} <br />
      {props.location.hobbies} <br />
      Languages Known:{' '}
      {props.location.languagesKnown
        .map(language => (language === undefined ? '' : `${language}`))
        .join(', ')}{' '}
      <br />
      <hr />
      <h2>Remark: </h2>
      <p className='remark'>{props.location.remark}</p>
      <br />
      <Link className='resume-form-button' to={{ pathname: '/edit', ...props }}>
        <button>
          <h3>Edit</h3>
        </button>
      </Link>
    </div>
  );
};

export default ResumeViewPage;
