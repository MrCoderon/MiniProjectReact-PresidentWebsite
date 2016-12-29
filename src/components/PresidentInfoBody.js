import React from 'react';

export default class PresidentInfoBody extends React.Component {
	render() {
		return (
			<ul className="info-body-container">
				<li className="info-body-father">
					<span className="father">{this.props.father}</span>
				</li>
				<li className="info--body-mother">
					<span className="mother">{this.props.mother}</span>
				</li>
				<li className="info-body-wife">
					<span className="wife">{this.props.wife}</span>
				</li>
				<li className="info-body-children">
					<span className="children">{this.props.children}</span>
				</li>
				<li className="info-body-religion">
					<span className="religion">{this.props.religion}</span>
				</li>
				<li className="info-body-education">
					<span className="education">{this.props.education}</span>
				</li>
				<li className="info-body-occupation">
					<span className="occupation">{this.props.occupation}</span>
				</li>
				<li className="info-body-party">
					<span className="party">{this.props.party}</span>
				</li>
				<li className="info-body-vice">
					<span className="vice">{this.props.vice}</span>
				</li>
			</ul>
		);
	}
}