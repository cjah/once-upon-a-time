import React from 'react';
import axios from 'axios';


 class App extends React.Component {
	 async componentDidMount() {
		 const response = await axios.get('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge');

		 console.log(response.data);
	 }

	 render() {
		 return <div>App</div>;
	 }
 };

 export default App;