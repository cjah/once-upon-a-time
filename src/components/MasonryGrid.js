import React from 'react';
import Card from './Card';

class MasonryGrid extends React.Component {

	sortCards = (cards) => {
		return cards.sort((a,b) => {
			const cardA = new Date(a.date).getTime();
			const cardB = new Date(b.date).getTime();

			let comparison = 0;
			if (cardA < cardB) comparison = 1;
			else comparison = -1;
			return comparison;
		});
	}

	render() {
		let cardsArr = [];
		if (this.props.cards) {
			cardsArr = this.sortCards(this.props.cards).map((card, i) => <Card cardData={card} key={card.title} />);
		}
		return (
			<div className="masonryGrid">
				{cardsArr}
			</div>
		)
	}
}

export default MasonryGrid;