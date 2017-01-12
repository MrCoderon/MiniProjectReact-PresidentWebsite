/**
 * Imported Modules
 */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Imported Components
 */
import MainCard from './../../modules/cards';
import presidents from './../../data/presidents';

/**
 * Imported Images and Styles
 */
import "./style.css";


/**
 * Component
 */
export default class Home extends Component {
    render() {
    function renderCards() {
        const arr = [];
        for(var x = 0; x < presidents.length; x++) {
            const j = x;
            arr.push(<Col lg={4}><a href={`/president/${presidents[j].id}`}>{ MainCard(presidents[j].name, presidents[j].title, presidents[j].image) }</a></Col>);
        }
        return arr;
    }
        return (
            <div className="Home">
                <Grid>
                    <Row>
                        { renderCards() }
                    </Row>
                </Grid>
            </div>
        );
    }
}