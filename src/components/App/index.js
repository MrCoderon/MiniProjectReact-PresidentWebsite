/**
 * Imported Modules
 */
import React, { Component } from 'react';
import MainNav from './../../modules/nav';
import MainFooter from './../../modules/footer';
import { Grid, Row } from 'react-bootstrap';

/**
 * Imported Images and Styles
 */
import "./style.css";

/**
 * Component
 */
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid fluid>
                    <Row>
                        { MainNav("The Presidents Library") }
                        { this.props.children }
                        { MainFooter("Copyright 2017 Q. Collins") }
                    </Row>
                </Grid>
            </div>
        );
    }
}