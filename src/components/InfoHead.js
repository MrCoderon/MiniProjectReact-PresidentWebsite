import React from 'react';

export default class PresidentInfoHeading extends React.Component {
	render() {
		return (
			<ul className="info-heading-container">
				<li className="info-heading-office">
					<span className="office"><span>Office: </span>{this.props.president.office}</span>
				</li>
				<li className="info-heading-nickname">
					<span className="nickname"><span>Nickname: </span>{this.props.president.nickname}</span>
				</li>
				<li className="info-heading-born">
					<span className="born"><span>Birth: </span>{this.props.president.birth}</span>
				</li>
				<li className="info-heading-death">
					<span className="death"><span>Death: </span>{this.props.president.died}</span>
				</li>
			</ul>
		);
	}
}