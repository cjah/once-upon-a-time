import React from 'react';
import axios from 'axios';
import Header from './Header';
import Hero from './Hero';


 class App extends React.Component {
	 async componentDidMount() {
		 const response = await axios.get('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge');

		 console.log(response.data);
	 }

	 render() {
		 return (
			 <div>
				 <Header />
				 <Hero />
			 </div>
		 )
	 }
 };

 export default App;