import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import presidents from './../../data/presidents';
import { browserHistory } from 'react-router';

import './style.css';

injectTapEventPlugin();

import georgewashingtoncover from './../../img/georgewashingtoncover.jpg';

const MainCard = (name, subTitle, image) => (
    <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
        <Card className="MainCard">
            <CardMedia className="title" overlay={<CardTitle  className="overlay-title" title={name} subtitle={subTitle} />} >
                <img src={`./../static/img/${image}`} alt=""/>
            </CardMedia>
            <CardText>
                George Washington was an American politician and soldier who served 
                as the first President of the United States from 1789 to 1797. During the American Revolutionary War, 
                Washington served as Commander-in-Chief of the Continental Army.
            </CardText>
            <FlatButton hoverColor="#1565C0" style={{position: 'absolute', right: '0', marginRight: '1em'}}label="More"/>
        </Card>
    </MuiThemeProvider>
);

export default MainCard;