'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, Link, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import LeftPage from './components/LeftPage';
import RightPage from './components/RightPage';

const root =  document.getElementById('content');

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LeftPage}/>
                <Route path="right" component={RightPage}/>
            </Route>
         </Router>),root);


injectTapEventPlugin();





