// src/routes.js
import React from 'react';
import {Router, Route} from 'react-router';

import App from './App';
// import Login from './Login';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
          {/*<Route path="/login" component={Login}/>*/}
        </Route>
    </Router>
);

export default Routes;
