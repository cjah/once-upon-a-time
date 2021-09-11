import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ReactBreakpoints from 'react-breakpoints';
import '../src/styles/styles.scss';

const breakpoints = {
	mobile: 330,
	smallTablet: 480,
	tablet: 768,
	desktop: 1024,
	largeDesktop: 1440,
}

ReactDOM.render(<ReactBreakpoints breakpoints={breakpoints}><App /></ReactBreakpoints>, document.querySelector('#root'));