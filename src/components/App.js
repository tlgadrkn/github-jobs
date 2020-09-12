import React, { useState, useEffect, useRef } from 'react';
import { useFetch } from '../customHooks/useFetch';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Spinner from './Spinner';

import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  // const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  // const GITHUB_JOBS_BASE_URL = 'https://jobs.github.com/positions.json';

  const [state, setState] = useState(null);
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const GITHUB_JOBS_BASE_URL = 'https://jobs.github.com/positions.json';

  const componentIsMounted = useRef(true);

  // CHECK ARTICLE FROM DEV.TO THAT HELPED ME LINK => https://dev.to/alexandrudanpop/correctly-handling-async-await-in-react-components-4h74

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const asyncResponse = await fetch(
          `${CORS_PROXY}${GITHUB_JOBS_BASE_URL}`
        );
        const data = await asyncResponse.json();

        if (componentIsMounted.current) {
          setState(data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  console.log(state);
  return (
    <Switch>
      {state ? (
        <Route exact path="/" render={() => <Home state={state} />} />
      ) : (
        <Spinner />
      )}
      {/* <Route exact path="/" render={() => <Home state={state} />} /> */}
    </Switch>
  );
};

export default App;
