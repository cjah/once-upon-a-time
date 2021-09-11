import React from 'react';
import Card from './Card';
import CardColumn from './CardColumn';

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

	buildColumns = (cards) => {
		const columnsArr = [[],[],[]];

		this.sortCards(this.props.cards).forEach((card, i) => {
			columnsArr[i % 3].push(<Card cardData={card} key={card.title} />);
		});

		return columnsArr.map((cards, i) => <CardColumn cards={cards} />);
	}

	render() {

		let sortedArr = [], cardColArr = [];
		if (this.props.cards) {
		// 	//cardsArr = this.sortCards(this.props.cards).map((card, i) => <Card cardData={card} key={card.title} />);
		// 	this.sortCards(this.props.cards.forEach((card, i) => {
		// 		cardsArr.push(<Card cardData={card} key={card.title} />);

		// 		if(i % 3 === 2 || i === this.props.cards.length - 1) {
		// 			cardColArr.push(<CardColumn cards={cardsArr} />)
		// 			cardsArr = [];
		// 		}
		// 	}));
			sortedArr = this.sortCards(this.props.cards);
			cardColArr = this.buildColumns(sortedArr);

		}

		return (
			<div className="masonryGrid">
				{cardColArr}
			</div>
		)
	}
}

export default MasonryGrid;