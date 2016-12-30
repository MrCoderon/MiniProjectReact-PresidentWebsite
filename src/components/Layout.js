import React from 'react';
import { Link } from 'react-router';
import './mainstyle.scss';

export default class Layout extends React.Component {
	render() {
		return (
			<div className="app-container container">
				<div className="row">
				<div className="app-content">{this.props.children}</div>
				</div>
			</div>
		);
	}
}