// src/routes.js
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import Login from './components/Login';
import ChannelList from './components/ChannelList';
import GameList from './components/GameList';
import StreamsList from './components/StreamsList';
import StreamCanvas from './components/StreamCanvas';

const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/games" component = {GameList}/>
          <Route path="/channels" component = {ChannelList}/>
          <Route path="/streams/:query" component={StreamsList}/>
        </Route>
    </Router>
);

export default Routes;
