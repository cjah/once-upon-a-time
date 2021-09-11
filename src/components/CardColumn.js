import React from 'react';
import Card from './Card';

class CardColumn extends React.Component {
	render() {
		return (
			<div className="cardColumn">{this.props.cards}</div>
		)
	}
}

export default CardColumn;