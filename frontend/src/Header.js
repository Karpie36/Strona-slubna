import React from 'react';
import pattern from './assets/Images/pattern.png';
import header_img from './assets/Images/header_img.JPG';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		const imageLoader = new Image();
		imageLoader.src = header_img;

		imageLoader.onload = () => {
		  this.showHeader();
		};

	}
	
	showHeader() {
		document.querySelector('.App-Header').style.backgroundImage = `url(${header_img})`;
		setTimeout(() => {
			document.querySelector('.Heart-container').style.display = "none";
			document.querySelector('.App').style.opacity = 1.0;
			document.querySelector('.App-title').style.transform = " scale(1.0)";
			document.querySelector('.App-title').style.opacity = 1.0;
			document.querySelector('.patternUp').style.transform = "translateY(0px) rotate(180deg)";
			document.querySelector('.patternUp').style.opacity = 1.0
			document.querySelector('.patternDown').style.transform = "translateY(0px)";
			document.querySelector('.patternDown').style.opacity = 1.0
			setTimeout(() => {
				document.querySelector('.AboutUs-img').style.display = "block";
			}, 1000)
		}, 500)
	}
	
	render() {
		return (
			<header className="App-Header">
				<div className="title-box">
					<img className="patternUp" src={pattern} />
					<h1 className="App-title">Karolina i Karol</h1>
					<img className="patternDown" src={pattern} />
				</div>
			</header>
		) 
	}
}

export default Header;