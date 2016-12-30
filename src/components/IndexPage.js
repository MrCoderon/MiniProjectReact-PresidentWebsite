import React from 'react';
import PresidentPreview from './PresidentPreview';
import presidents from '../data/presidents';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className="home col-lg-12">
				<div className="presidents-selector row">
					{ presidents.map(presidentData => <PresidentPreview key={presidentData.id} {...presidentData}/>) }
				</div>
			</div>
		);
	}
}