import React from 'react';

export default class Events extends React.Component {
	render() {
		return (
			<li className="event">
				<span className="year">{this.props.year}</span>
				<span className="event-event">{this.props.event}</span>
			</li>
		);
	}
}