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
				<div className="socials"> 2021 <hr style={{ borderBottom: '1px solid black', width: '12px', marginBottom: '2px', display: 'inline-block' }}></hr>  SPARTA PLAESENT - <span style={{ textDecoration: 'underline' }}>INSTAGRAM</span> - <span style={{ textDecoration: 'underline' }}>FACEBOOK</span> - <span style={{ textDecoration: 'underline' }}>TWITTER</span>
				</div>
			</div>
		)
	}
}

export default Footer;