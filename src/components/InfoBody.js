import React from 'react';

export default class PresidentInfoBody extends React.Component {
	render() {
		return (
			<ul className="info-body-container">
				<li className="info-body-father">
					<span className="father"><span>Father: </span>{this.props.president.father}</span>
				</li>
				<li className="info--body-mother">
					<span className="mother"><span>Mother: </span>{this.props.president.mother}</span>
				</li>
				<li className="info-body-wife">
					<span className="wife"><span>Spouse: </span>{this.props.president.wife}</span>
				</li>
				<li className="info-body-children">
					<span className="children"><span>Children: </span>{this.props.president.children}</span>
				</li>
				<li className="info-body-religion">
					<span className="religion"><span>Religion: </span>{this.props.president.religion}</span>
				</li>
				<li className="info-body-education">
					<span className="education"><span>Education: </span>{this.props.president.education}</span>
				</li>
				<li className="info-body-occupation">
					<span className="occupation"><span>Occupation: </span>{this.props.president.occupation}</span>
				</li>
				<li className="info-body-party">
					<span className="party"><span>Political Party: </span>{this.props.president.politicalparty}</span>
				</li>
				<li className="info-body-vice">
					<span className="vice"><span>Vice President: </span>{this.props.president.vicepresident}</span>
				</li>
			</ul>
		);
	}
}