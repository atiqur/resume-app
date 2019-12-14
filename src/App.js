import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

// import HomePage from './pages/homepage.component';
import ResumeForm from './forms/resume-form.component';
import Header from './components/header/header.component';
import ResumeView from './forms/resume-view.component';

function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={ResumeForm} />
      </Switch>
    </div>
  );
}

export default App;
