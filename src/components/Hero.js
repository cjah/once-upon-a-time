import React from 'react';
import HeroImage from './HeroImage';

class Hero extends React.Component {
	render() {
		console.log('in Hero')
		console.log(this.props)
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		var date, dateText = '';
		if (this.props.heroText) {
			date = new Date(this.props.heroText.date);
			dateText = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
		}

		return (
			<div className="hero">
				<HeroImage heroData={this.props.heroData} />
				<div>{dateText}</div>
			</div>
		)
	}
};

export default Hero;