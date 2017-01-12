/**
 * Imported Modules
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
const MainFooter = title => (
    <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
        <AppBar iconStyleLeft={{display: "none"}} className="Footer-Main" title={title}/>
    </MuiThemeProvider>
);

export default MainFooter;