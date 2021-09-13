import React from 'react';
import stringifyDates from '../functions/stringifyDates';

const Card = ({ cardData }) => {
		return (
			<div className="card">
				<img className="cardImage" src={cardData.image} alt={cardData.title} />
				<div className="cardDate">{stringifyDates(cardData.date).toUpperCase()}</div>
				<div className="cardTitle">{cardData.title}</div>
				<div className="cardAuthor">Presented by <span style={{ borderBottom: '1px solid #000', paddingBottom: '2px' }}>{cardData.author.toUpperCase()}</span></div>
			</div>
		);
};

export default Card;