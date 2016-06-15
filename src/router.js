import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './routes/Home';

/**
 * Application Router
 */
export default (
  <Router history={ browserHistory }>
    <Route path='/'>
      {[ Home ]}
    </Route>
  </Router>
);
