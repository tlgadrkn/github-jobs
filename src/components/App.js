import React, { useState, useEffect, useRef } from 'react';
import { useFetch } from '../customHooks/useFetch';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fakeJob } from './mock';
const App = () => {
  // const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  // const GITHUB_JOBS_BASE_URL = 'https://jobs.github.com/positions.json';

  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
    </Switch>
  );
};

export default App;
