import React from 'react';
import Logo from '../logo/logo.svg';

const Header = () => {
	return (
		<div className='header'>
			<img src={Logo} alt='logo' />
			<div>212.555.5555</div>
			<button className="loginButton">LOGIN</button>
			<button className='sandwich'>
				<div className="lines"></div>
				<div className="lines"></div>
				<div className="lines"></div>
			</button>
		</div>
	);
};

export default Header;