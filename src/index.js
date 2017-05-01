import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import Home from './Components/Home/index';
import About from './Components/About/index';
import Trainings from './Components/Trainings/index';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/trainings" component={Trainings} history={history} />
    </App>
  </Router>
  ,
  document.getElementById('root')
);
