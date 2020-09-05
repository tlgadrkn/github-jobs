import React, { useState, useEffect } from 'react';
import { useFetch } from '../customHooks/useFetch';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const GITHUB_JOBS_BASE_URL = 'https://jobs.github.com/positions.json';

  const [jobs, setJobs] = useFetch(`${CORS_PROXY}${GITHUB_JOBS_BASE_URL}`);

  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
    </Switch>
  );
};

export default App;
