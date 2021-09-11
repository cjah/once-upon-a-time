import React from 'react';
import HeroImage from './HeroImage';
import stringifyDates from '../services/stringifyDates';

class Hero extends React.Component {
	render() {
		console.log('in Hero')
		console.log(this.props)

		//if (!this.props.heroText) return null;
		var dateText = stringifyDates(this.props.heroText.date), title = this.props.heroText.title.slice(11), subtitle = this.props.heroText.subtitle;

		return (
			<div className="hero">
				<HeroImage heroData={this.props.heroData} />
				<div className="heroText">
					<div className="heroTitle">Screening: <br />{title}</div>
					<br />
					<div className="heroDate">{dateText}</div>
					<br />
					<div className="heroSubtitle">{subtitle}</div>
				</div>
			</div>
		)
	}
};

export default Hero;