/**
 * Imported Modules
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

/**
 * Imported Images and Styles
 */
import './style.css';

/**
 * Component
 */

const MainNavApp = title => (
    <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
        <AppBar iconStyleLeft={{display: "none"}} className="Nav-Main" title={title}/>
    </MuiThemeProvider>
);

export default MainNavApp;