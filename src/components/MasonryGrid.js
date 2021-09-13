import React from 'react';
import Card from './Card';
import CardColumn from './CardColumn';
import { withBreakpoints } from 'react-breakpoints';

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

	buildDesktop = (cards) => {
		const columnsArr = [[],[],[]];

		this.sortCards(cards).forEach((card, i) => {
			columnsArr[i % 3].push(<Card cardData={card} key={card.title} />);
		});

		return columnsArr.map((cards, i) => <CardColumn cards={cards} key={i} />);
	}

	buildTablet = (cards) => {
		const columnsArr = [[],[]];

		this.sortCards(cards).forEach((card, i) => {
			columnsArr[i % 2].push(<Card cardData={card} key={card.title} />);
		});

		return columnsArr.map((cards, i) => <CardColumn cards={cards} key={i} />);
	}

	buildMobile = (cards) => {
		const columnsArr = [];
		//can be refactored with map
		this.sortCards(cards).forEach((card, i) => {
			columnsArr.push(<Card cardData={card} key={card.title} />);
		});

		return <CardColumn cards={columnsArr} />;
	}

	render() {
		const { breakpoints, currentBreakpoint, cards } = this.props;

		let sortedArr = this.sortCards(cards), cardColArr = [];

		switch(breakpoints[currentBreakpoint]) {
			case breakpoints.mobile:
				cardColArr = this.buildMobile(sortedArr);
				break;
			case breakpoints.smallTablet:
				cardColArr = this.buildTablet(sortedArr);
				break;
			case breakpoints.tablet:
				cardColArr = this.buildTablet(sortedArr);
				break;
			case breakpoints.desktop:
				cardColArr = this.buildDesktop(sortedArr);
				break;
			case breakpoints.largeDesktop:
				cardColArr = this.buildDesktop(sortedArr);
				break;
			default:
				console.log('default')
				break;
		}

		return (
			<div className="masonryGrid">
				{cardColArr}
			</div>
		)
	}
}

export default withBreakpoints(MasonryGrid);