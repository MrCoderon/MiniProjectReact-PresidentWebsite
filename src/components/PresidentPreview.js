import React from 'react';
import { Link } from 'react-router';

export default class PresidentPreview extends React.Component {
	render() {
		return (
			<Link className="preview-container col-xs-12 col-sm-6 col-md-4 col-lg-3" to={`/president/${this.props.id}`}>
			 	<div className="preview row">
					<img className="img-preview col-xs-1 col-sm-1 col-lg-12" src={`img/${this.props.image}`}/>
					<img className="party-img" src={`img/${this.props.politicalpartyimg}`} />
					<h2 className="img-preview-txt">{this.props.name}</h2>
				</div>
			</Link>
		);
	}
}