import React from 'react';

class HeroImage extends React.Component {
	render() {
		console.log('in HeroImage')
		console.log(this.props.heroData)

		var imageArr = [];
		if (this.props.heroData) {
			imageArr = this.props.heroData.map((src, i) => {
				return i === 0 ? <div src={src.image} className="heroImage active" style={{ backgroundImage: "url(" + src.image + ")", ariaLabel: src.alt }} key={src.alt} /> : <div className="heroImage" style={{ backgroundImage: "url(" + src.image + ")", ariaLabel: src.alt }} src={src.image} key={src.alt} />
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