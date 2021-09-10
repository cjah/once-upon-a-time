import React from 'react';

class HeroImage extends React.Component {
	render() {
		console.log('in HeroImage')
		console.log(this.props.heroData)

		var imageArr = [];
		if (this.props.heroData) {
			imageArr = this.props.heroData.map((src, i) => {
				return i === 0 ? <img src={src.image} alt={src.alt} className="active" key={src.alt} /> : <img src={src.image} alt={src.alt} key={src.alt} />
			});
		}

		return (
			<div>
				{imageArr}
				<div className="shade" />
			</div>
		)
	}
};

export default HeroImage;