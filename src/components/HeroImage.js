import React from 'react';

class HeroImage extends React.Component {
	render() {
		console.log('in HeroImage')
		console.log(this.props.heroData)
		var imageArr = this.props.heroData.map((src, i) => {
			return i === 0 ? <img src={src.image} alt={src.alt} className="active" /> : <img src={src.image} alt={src.alt} />
		});

		return (
			<div>
				{imageArr}
			</div>
		)
	}
};

export default HeroImage;