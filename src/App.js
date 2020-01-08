import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

// import HomePage from './pages/homepage.component';
import ResumeForm from './forms/resume-form.component';
import Header from './components/header/header.component';
import ResumeViewPage from './forms/resume-view-page.component';
import CreatePDF from './forms/resume-pdf.component';

import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const text = ['Ram', 'Sham', 'Jodu', 'Modhu'];

const MyDoc = () => (
  <Document>
    <Page>
      <Text>{text.map(e => 'Name:' + e + '\n')}</Text>
    </Page>
  </Document>
);

function App() {
  return (
    // <div className='container'>
    //   <Header />
    //   <Switch>
    //     <Route exact path='/' component={ResumeForm} />
    //     <Route exact path='/pdf' component={CreatePDF} />
    //     <Route path='/view' render={props => <ResumeViewPage {...props} />} />
    //   </Switch>
    // </div>
    <button>
      <PDFDownloadLink document={<MyDoc />} fileName='somename.pdf'>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </button>
  );
}

export default App;
