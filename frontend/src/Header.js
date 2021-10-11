import React from 'react';
import pattern from './assets/Images/pattern.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
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
		}, 2000)
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