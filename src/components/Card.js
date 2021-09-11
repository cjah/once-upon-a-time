import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.cardData.image} alt={this.props.cardData.title} className={this.props.className}/>
			</div>
		)
	}
}

export default Card;