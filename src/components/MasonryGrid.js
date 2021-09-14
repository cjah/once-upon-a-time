import React from 'react';
import Card from './Card';
import CardColumn from './CardColumn';
import { withBreakpoints } from 'react-breakpoints';

const MasonryGrid = ({ breakpoints, currentBreakpoint, cards }) => {

	const sortCards = (cards) => {
		return cards.sort((a, b) => {
			const cardA = new Date(a.date).getTime();
			const cardB = new Date(b.date).getTime();

			if (cardA < cardB) return 1;
			else return -1;
		});
	};

	const buildColumns = (currentBp) => {
		const sortedArr = sortCards(cards);
		let columnsArr = [[], [], []], columns = 1;
		
		//desktop view
		if (currentBp >= breakpoints.desktop) {
			sortedArr.forEach((card, i) => {
				columnsArr[i % 3].push(<Card cardData={card} key={card.title} />);
			});
			columns = 3;
		}

		//tablet  view
		if (currentBp > breakpoints.mobile && currentBp <= breakpoints.tablet) {
			sortedArr.forEach((card, i) => {
				columnsArr[i % 2].push(<Card cardData={card} key={card.title} />);
			});
			columns = 2;
		}
		
		//mobile view
		if (currentBp <= breakpoints.mobile) {
				columnsArr[0].push(sortedArr.map((card, i) => <Card cardData={card} key={card.title} />));
		}

		return columnsArr.slice(0, columns).map((cards, i) => <CardColumn cards={cards} key={i} />);
	}

		return <div className="masonryGrid">{ buildColumns(breakpoints[currentBreakpoint]) }</div>;
};

export default withBreakpoints(MasonryGrid);