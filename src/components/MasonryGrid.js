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

	const buildDesktop = (cards) => {
		const columnsArr = [[],[],[]];

		cards.forEach((card, i) => {
			columnsArr[i % 3].push(<Card cardData={card} key={card.title} />);
		});

		return columnsArr.map((cards, i) => <CardColumn cards={cards} key={i} />);
	};

	const buildTablet = (cards) => {
		const columnsArr = [[],[]];

		cards.forEach((card, i) => {
			columnsArr[i % 2].push(<Card cardData={card} key={card.title} />);
		});

		return columnsArr.map((cards, i) => <CardColumn cards={cards} key={i} />);
	};

	const buildMobile = (cards) => {
		return <CardColumn cards={cards.map((card, i) => <Card cardData={card} key={card.title} />)} />;
	};

		let sortedArr = sortCards(cards), cardColArr = [];

		switch(breakpoints[currentBreakpoint]) {
			case breakpoints.mobile:
				cardColArr = buildMobile(sortedArr);
				break;
			case breakpoints.smallTablet:
				cardColArr = buildTablet(sortedArr);
				break;
			case breakpoints.tablet:
				cardColArr = buildTablet(sortedArr);
				break;
			case breakpoints.desktop:
				cardColArr = buildDesktop(sortedArr);
				break;
			case breakpoints.largeDesktop:
				cardColArr = buildDesktop(sortedArr);
				break;
			default:
				break;
		};

		return (
			<div className="masonryGrid">
				{cardColArr}
			</div>
		);
};

export default withBreakpoints(MasonryGrid);