import React from 'react';

class HeroImage extends React.Component {
	state = {
		activeIndex: 0,
	};

	thumbnailClick = (i) => {
		this.setState({ activeIndex: i})
	}

	handleTouchStart = (e) => {
		console.log('handleTouchStart', e.changedTouches[0].clientX);
		this.setState({ touchStart: e.changedTouches[0].clientX});
	}

	handleTouchEnd = (e) => {
		console.log('handleTouchEnd', e.changedTouches[0].clientX);
		this.setState({ activeIndex: this.state.touchStart < e.changedTouches[0].clientX ? (this.state.activeIndex + 1) % 3 : this.state.activeIndex === 0 ? 2 : this.state.activeIndex - 1 });
	}

	render() {
		//refactor to not use this.state.timeout =
		clearTimeout(this.state.timeout);
		this.state.timeout = setTimeout(() => this.thumbnailClick((this.state.activeIndex + 1) % 3), 5000);
		
		const imageArr = this.props.heroData.map((src, i) => {
			return (
				<div
					className={i === this.state.activeIndex ? 'heroImage active' : 'heroImage'}
					style={{ backgroundImage: "url(" + src.image + ")", ariaLabel: src.alt }} 
					key={src.alt} 
					ref={i}
				/>
			)
		});

		const thumbnails = this.props.heroData.map((el, i) => {
			return <li className={i === this.state.activeIndex ? 'activeThumbnail' : ''} ref={i} key={i + 'thumbnail'} onClick={(e) => this.thumbnailClick(i)}></li>
		});

		return (
			<div>
				{imageArr}
				<ol>
					{thumbnails}
				</ol>
				<div className="shade" />
				<div
					className="outerLayer"
					onTouchStart={(e) => this.handleTouchStart(e)}
					onTouchEnd={(e) => this.handleTouchEnd(e)}	
				/>
			</div>
		)
	}
};

export default HeroImage;