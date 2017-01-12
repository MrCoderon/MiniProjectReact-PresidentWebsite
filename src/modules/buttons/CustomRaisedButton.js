/**
 * Imported Modules
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Imported Images and Styles
 */
import './style.css';

/**
 * Component
 */
const CustomRaisedButton = label => (
    <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
        <RaisedButton label={label}/>
    </MuiThemeProvider>
);

export default CustomRaisedButton;