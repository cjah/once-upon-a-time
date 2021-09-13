import React from 'react';
import HeroImage from './HeroImage';
import stringifyDates from '../functions/stringifyDates';

const Hero = ({ heroText, heroData }) => {
	const dateText = stringifyDates(heroText.date), title = heroText.title.slice(11), subtitle = heroText.subtitle;

	return (
		<div className="hero">
			<HeroImage heroData={heroData} />
			<div className="heroText">
				<div className="heroTitle">Screening: <br />{title}</div>
				<br />
				<div className="heroDate">{dateText}</div>
				<br />
				<div className="heroSubtitle">{subtitle}</div>
			</div>
		</div>
	)
};

export default Hero;