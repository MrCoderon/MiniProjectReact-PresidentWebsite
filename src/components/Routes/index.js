/**
 * Imported Modules
 */
import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/**
 * Imported Components
 */
import App from "./../App";
import Home from "./../Home";
import PresidentPage from "./../PresidentPage";

export default class Routes extends Component {
    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ Home } />
                    <Route path="president/:id" component={ PresidentPage } />]
                </Route>
            </Router>
        );
    }
}