import React from 'react';
import Logo from '../logo/logo.svg';

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<img src={Logo} alt='logo' />
				<div>212.555.5555</div>
				<button>LOGIN</button>
				<button className='sandwich'></button>
			</div>
		)
	}
};

export default Header;