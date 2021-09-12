import React from 'react';
import Logo from '../logo/logo.svg';

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<img src={Logo} alt='logo' />
				<div>212.555.5555</div>
				<button className="loginButton">LOGIN</button>
				<button className='sandwich'><div className="lines" style={{ marginTop: '18px' }}></div><div className="lines" style={{ marginBottom: '18px' }}></div><div className="lines"></div></button>
			</div>
		)
	}
};

export default Header;