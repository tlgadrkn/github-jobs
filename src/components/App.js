import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;