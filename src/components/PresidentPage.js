import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PresidentsMenu from './PresidentMenu';
import presidents from '../data/presidents';
import Task from './Task';

export default class PresidentPage extends React.Coomponent {
	render() {
		const id = this.props.params.id;
		const president = presidents.filter((president) => president.id === id)[0];
		if(!athlete) {
			return <NotFoundPage />;
		}
		const headerStyle = { backgroundImage: `url(/img/${president.cover})` };
		return (
			<div className="president-full">
				<PresidentsMenu />
				<div className="president">
					<header style={headerStyle} />
					<div className="picture-container">
						<img src={`/img/${president.image}`}/>
						<h2 className="name">{president.name}</h2>
					</div>
					<section className="description">
						Find out more on <a href={president.link} target="_blank">Wikipedia</a>
					</section>
					<section className="events">
						<ul>
							{president.events.map((task, i) => <Medal key={i} {...medal} />)}
						</ul>
					</section>
				</div>
				<div className="navigateBack">
					<Link to=""> Back to Home</Link>
				</div>
			</div>
		);
	}
}