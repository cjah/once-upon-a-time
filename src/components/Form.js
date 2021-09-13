import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<input className="emailInput" type="email" placeholder="Email" value={this.props.value} onChange={this.props.handleChange} />
				<input className="emailButton" type="submit" value="SUBMIT" />
			</form>
		)
	}
}

//pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i' title="YOUR_WARNING_TEXT"
//<button className="emailButton">SUBMIT</button>

export default Form;