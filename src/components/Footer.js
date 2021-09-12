import React from 'react';
import Form from './Form';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="newsletter">Sign up for our Newsletter</div>
				<Form />
				<div className="socials"> 2021 <hr style={{ borderBottom: '1px solid black', width: '12px', marginBottom: '2px', display: 'inline-block' }}></hr>  SPARTA PLAESENT - <span style={{ textDecoration: 'underline' }}>INSTAGRAM</span> - <span style={{ textDecoration: 'underline' }}>FACEBOOK</span> - <span style={{ textDecoration: 'underline' }}>TWITTER</span>
				</div>
			</div>
		)
	}
}

export default Footer;