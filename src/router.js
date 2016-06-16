import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './routes/Home';

/**
 * Application Router
 */
export default (
  <Router history={ hashHistory }>
    <Route path='/'>
      {[ Home ]}
    </Route>
  </Router>
);
