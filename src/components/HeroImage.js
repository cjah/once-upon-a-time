import React from 'react';

class HeroImage extends React.Component {
	state = { activeIndex: 0 };

	componentDidMount() {
		this.timer();
	}

	timer = () => {
		clearTimeout(this.state.timeout);
		this.setState({ timeout: setTimeout(() => this.thumbnailClick((this.state.activeIndex + 1) % 3), 5000) });
	}

	thumbnailClick = (i) => {
		//handles clicking on thumbnail to change image and active thumbnail
		this.setState({ activeIndex: i });
		this.timer();
	};

	handleTouchStart = (e) => {
		this.setState({ touchStart: e.changedTouches[0].clientX });
	};

	handleTouchEnd = (e) => {
		//handles mobile swipe to change image
		this.setState({ activeIndex: this.state.touchStart >= e.changedTouches[0].clientX ? (this.state.activeIndex + 1) % 3 : this.state.activeIndex === 0 ? 2 : this.state.activeIndex - 1 });
		this.timer();
	};

	render() {
		//builds images in Hero
		const imagesArr = this.props.heroData.map((src, i) => {
			return (
				<div
					className={i === this.state.activeIndex ? 'heroImage active' : 'heroImage'}
					style={{ backgroundImage: "url(" + src.image + ")", ariaLabel: src.alt }} 
					key={src.alt} 
					ref={i}
				/>
			);
		});

		//builds thumbnails
		const thumbnails = this.props.heroData.map((el, i) => {
			return <li className={i === this.state.activeIndex ? 'activeThumbnail' : ''} ref={i} key={i + 'thumbnail'} onClick={(e) => this.thumbnailClick(i)}></li>
		});

		return (
			<div>
				{imagesArr}
				<ol>{thumbnails}</ol>
				<div className="shade" />
				<div
					className="outerLayer"
					onTouchStart={(e) => this.handleTouchStart(e)}
					onTouchEnd={(e) => this.handleTouchEnd(e)}	
				/>
			</div>
		);
	};
};

export default HeroImage;