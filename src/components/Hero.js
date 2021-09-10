import React from 'react';
import HeroImage from './HeroImage';

class Hero extends React.Component {
	render() {
		console.log('in Hero')
		console.log(this.props)
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		var date, dateText = '', title = '', subtitle = '';

		if (!this.props.heroText) return <div></div>;

			date = new Date(this.props.heroText.date);
			dateText = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
			title = this.props.heroText.title.slice(11);
			subtitle = this.props.heroText.subtitle;

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