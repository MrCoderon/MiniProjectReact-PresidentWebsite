import React from 'react';
import { Link } from 'react-router';

export default class PresidentPreview extends React.Coomponent {
	render() {
		return (
			<Link to={`/president/${this.props.id}`}>
				<div className="president-preview">
					<img src={`img/${this.props.image}`}/>
					<h2 className="name">{this.props.name}</h2>
					<span className="party-img-container">
						<img src={`img/${this.props.political-party}`} />
					</span>
				</div>
			</Link>
		);
	}
}