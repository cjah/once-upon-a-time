import React from 'react';

class CardColumn extends React.Component {
	render() {
		return (
			<div className="cardColumn">{this.props.cards}</div>
		)
	}
}

export default CardColumn;