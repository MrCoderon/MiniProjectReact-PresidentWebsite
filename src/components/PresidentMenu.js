import React from 'react';
import { Link } from 'react-router';
import presidents from '../data/presidents';

export default class PresidentMenu extends React.Component {
	render() {
		return (
			<header>
				<nav className="president-menu">
					{presidents.map(menuPresident => {
						return <Link key={menuPresident.id} to={`/president/${menuPresident.id}`} activeClassName="active">
							<p className="menulinks">{menuPresident.name}</p>			
						</Link>;
					})}
				</nav>
			</header>
		);
	}
}