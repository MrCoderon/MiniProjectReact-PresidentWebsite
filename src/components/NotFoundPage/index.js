/**
 * Imported Modules
 */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Imported Components
 */

/**
 * Imported Images and Styles
 */
import "./style.css";


/**
 * Component
 */
export default class NotFoundPage extends Component {
    render() {
        return (
            <section className="NotFoundPage">
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <h1>Not Found</h1>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}