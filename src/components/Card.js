import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.cardData.image} alt={this.props.cardData.title} className={this.props.className} />
				<div>{this.props.cardData.date}</div>
				<div>{this.props.cardData.title}</div>
				<div>Presented by {this.props.cardData.author}</div>
			</div>
		)
	}
}

export default Card;