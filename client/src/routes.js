// src/routes.js
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Login from './components/Login';
import GameList from './components/GameList';
import StreamsList from './components/StreamsList';
import HistoryList from './components/HistoryList';
import StreamCanvas from './components/StreamCanvas';

const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={StreamsList}/>
          <Route path="/games" component = {GameList}/>>
          <Route path="/streams/:query" component={StreamsList}/>
          <Route path="/history" component={HistoryList}/>
          {/* <Route path="/search/:query" component={StreamsList}/> */}
        </Route>
    </Router>
);

export default Routes;
