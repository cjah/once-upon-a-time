import React from 'react';
import axios from 'axios';
import Form from './Form';

class Footer extends React.Component {
	state = {
		value: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge', { email: this.state.value });
		this.setState({ value: '', successEmail: true });
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<div className="footer">
				<div className="newsletter">{ this.state.successEmail ? 'Thank you for signing up!' : 'Sign up for our Newsletter' }</div>
				<Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
				<div className="socials"> 2021 <hr className="hr"></hr>  SPARTA PLAESENT - <span className="socialText">INSTAGRAM</span> - <span className="socialText">FACEBOOK</span> - <span className="socialText">TWITTER</span>
				</div>
			</div>
		)
	}
}

export default Footer;