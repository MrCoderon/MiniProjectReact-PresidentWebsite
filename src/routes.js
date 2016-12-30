import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import PresidentPage from './components/PresidentPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={ Layout }>
		<IndexRoute component={ IndexPage }/>
		<Route path="athlete/:id" component={ PresidentPage } />
		<Route path="*" components={ NotFoundPage } />
	</Route>
);

export default routes;