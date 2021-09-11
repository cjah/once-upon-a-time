import React from 'react';
import axios from 'axios';
import Header from './Header';
import Hero from './Hero';
import MasonryGrid from './MasonryGrid';

 class App extends React.Component {
	state = {};

	 async componentDidMount() {
		 const response = await axios.get('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge');

		 console.log('data in App', response.data);
		 this.setState({ heroData: response.data.hero_slides, heroText: response.data.hero_text, cards: response.data.cards });
	 };

	 render() {
		 if(!this.state.heroData) return null;
		 return (
			 <div>
				 <Header />
				 <Hero heroData={this.state.heroData} heroText={this.state.heroText} />
				 <MasonryGrid cards={this.state.cards} />
			 </div>
		 )
	 };
 };

 export default App;