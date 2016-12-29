import React from 'react';
import PresidentPreview from './PresidentPreview';
import presidents from '../data/presidents';

export default class IndexPage extends React.Coomponent {
	render() {
		return (
			<div className="home">
				<div className="presidents-selector">
					{ presidents.map(presidentData => <PresidentPreview key={presidentData.id} {...presidentData}/>) }
				</div>
			</div>
		);
	}
}