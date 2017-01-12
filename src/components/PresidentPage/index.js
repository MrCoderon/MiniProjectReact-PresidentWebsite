/**
 * Imported Modules
 */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import presidents from './../../data/presidents';
import { browserHistory } from 'react-router';

/**
 * Imported Components
 */
import NotFoundPage from './../NotFoundPage';

/**
 * Imported Images and Styles
 */
import "./style.css";

/**
 * Component
 */
export default class PresidentPage extends Component {
    render() {
        const id = this.props.params.id;
        const president = presidents.filter((president) => president.id === id)[0];
        const president2 = presidents.filter((president) => president.id === id)[0];
        const president3 = presidents.filter((president) => president.id === id)[0];
        if(!president) {
            return <NotFoundPage />;
        }
        const headerStyle = { backgroundImage: `url(./../static/img/${president.cover})` };
        const portraitStyle = { backgroundImage: `url(./../static/img/${president.image})` };
        const prevportraitstyle = { backgroundImage: `url(./../static/img/${president.prev.img})` };
        const nextportraitstyle = { backgroundImage: `url(./../static/img/${president.next.img})` };
        const checkPrevName = president.prev.name === "none" ? <div></div> : president.prev.name;
        const checkNextName = president.next.name === "none" ? <div></div> : president.next.name;
        function prevPortrait() {
            if (president.prev.img === "none") {
                return <div></div>;
            } else {
                return <p className="Portrait-left"><a href={`/president/${president.prev.id}`}><div className="portrait" style={ prevportraitstyle }></div></a></p>;
            }
        }
        function nextPortrait() {
            if (president.next.img === "none") {
                return <div></div>;
            } else {
                return <p className="Portrait-right"><a href={`/president/${president.next.id}`}><div className="portrait" style={ nextportraitstyle }></div></a></p>;
            }
        }
        return (
            <section className="PresidentPage">
                <Grid fluid>
                    <Row>
                        <Col lg={12}>
                            <Row>
                                <div className="hero" style={ headerStyle }></div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                    <Grid>
                        <Col lg={4} className="">
                            <Row>
                                {prevPortrait()}
                                <h1>{checkPrevName}</h1>
                            </Row>
                        </Col>
                            <Col lg={4} className="">
                                <Row>
                                    <p className="Portrait-center">
                                        <div className="portrait" style={ portraitStyle }></div>
                                        <h1>{president.name}</h1>
                                    </p>
                                </Row>
                            </Col>
                            <Col lg={4} className="">
                                <Row>
                                    <p className="Portrait-right">
                                        {nextPortrait()}
                                        <h1>{checkNextName}</h1>
                                    </p>
                                </Row>
                            </Col>
                        </Grid>
                    </Row>
                </Grid>
            </section>
        );
    }
}