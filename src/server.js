require("babel-core/register");

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

/**
 * Initialize the server and configure support ejs templates
 */

const app =  new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/**
 * The folder that will be used for static assets
 */
app.use(Express.static(path.join(__dirname, 'public')));

/**
 * universal routing and rendering
 */
app.get('*', (req, res) => {
    match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {
            /**
             * In case of error display the error message
             */
            if (err) {
                return res.status(500).send(err.message);
            }
            /**
             * In case of redirect propagate the redirect to the browser
             */
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }
            /**
             * Generate the React markup for the current route
             */
            let markup;
            if (renderProps) {
                /**
                 * If the current route matched we have renderProps
                 */
                markup = renderToString(<RouterContext {...renderProps} />);
            } else {
                /**
                 * Otherwise we can render a 404 page
                 */
                markup = renderToString(<NotFoundPage/>);
                res.status(404);
            }
            /**
             * Render the index template with the embedded React markup
             */
            return res.render('index', { markup });
        }
    );
});

/**
 * Start the server
 */
const port = process.env.PORT || 3000;
const env  = process.env.NODE_ENV || 'production';
app.set('port', port);
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});