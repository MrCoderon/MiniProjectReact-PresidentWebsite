import React from 'react';
import { Link } from 'react-router';
import presidents from '../data/presidents';

export default class PresidentMenu extend React.Coomponent {
	render() {
		return (
		<nav className="president-menu">
			{presidents.map()}

		</nav>
		);
			}
	}
}