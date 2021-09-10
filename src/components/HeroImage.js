import React from 'react';

class HeroImage extends React.Component {
	state = {
		activeIndex: 0,
	};

	thumbnailClick = (i) => {
		this.setState({ activeIndex: i });
		console.log('activeIndex: ' + this.state.activeIndex)
	}

	render() {
		console.log('in HeroImage')
		console.log(this.props.heroData)

		var imageArr = [], thumbnails = [];
		if (this.props.heroData) {
			imageArr = this.props.heroData.map((src, i) => {
				return i === this.state.activeIndex ? <div className="heroImage active" style={{ backgroundImage: "url(" + src.image + ")", ariaLabel: src.alt }} key={src.alt} ref={i} /> : <div className="heroImage" style={{ backgroundImage: "url(" + src.image + ")", ariaLabel: src.alt }} key={src.alt} ref={i} />
			});
			thumbnails = this.props.heroData.map((el, i) => {
				return <li ref={i} key={i + 'thumbnail'} onClick={(e) => this.thumbnailClick(i)}></li>
			});
		}

		console.log(imageArr)

		return (
			<div>
				{imageArr}
				<ol>
					{thumbnails}
				</ol>
				<div className="shade" />
			</div>
		)
	}
};

export default HeroImage;