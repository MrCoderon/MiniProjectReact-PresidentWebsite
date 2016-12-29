import React from 'react';

export default class PresidentInfoHeading extends React.Component {
	render() {
		return (
			<ul className="info-heading-container">
				<li className="info-heading-title">
					<span className="title">{this.props.title}</span>
				</li>
				<li className="info-heading-office">
					<span className="office">{this.props.office}</span>
				</li>
				<li className="info-heading-nickname">
					<span className="nickname">{this.props.nickname}</span>
				</li>
				<li className="info-heading-born">
					<span className="born">{this.props.born}</span>
				</li>
				<li className="info-heading-death">
					<span className="death">{this.props.death}</span>
				</li>
			</ul>
		);
	}
}