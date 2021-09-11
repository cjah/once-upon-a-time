import React from 'react';
import stringifyDates from '../services/stringifyDates';

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img className="cardImage" src={this.props.cardData.image} alt={this.props.cardData.title} />
				<div className="cardDate">{stringifyDates(this.props.cardData.date).toUpperCase()}</div>
				<div className="cardTitle">{this.props.cardData.title}</div>
				<div className="cardAuthor">Presented by <span style={{ borderBottom: '1px solid #000', paddingBottom: '2px' }}>{this.props.cardData.author.toUpperCase()}</span></div>
			</div>
		)
	}
}

export default Card;