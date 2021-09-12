import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<form>
				<input className="emailInput" type="text" placeholder="Email" />
				<button className="emailButton">SUBMIT</button>
			</form>
		)
	}
}

export default Form;