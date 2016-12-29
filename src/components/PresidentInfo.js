import React from 'react';
import PresidentInfoHeading from './PresidentInfoHeading';
import PresidentInfoBody from './PresidentInfoBody';
import PresidentInfoFooter from './PresidentInfoFooter';


export default class PresidentInfo extends React.Component {
	render() {
		return (
			<section>
				<PresidentInfoHeading />
				<PresidentInfoBody />
			</section>
		);
	}
}