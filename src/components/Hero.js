import React from 'react';
import HeroImage from './HeroImage';

class Hero extends React.Component {
	render() {
		return (
			<div className="hero">
				<HeroImage />
			</div>
		)
	}
};

export default Hero;