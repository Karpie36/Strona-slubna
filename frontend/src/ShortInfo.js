import React from 'react';
import { Container, Label} from 'reactstrap';
import guests from "./assets/Images/guests.png";
import church from "./assets/Images/church.png";
import time from "./assets/Images/time.png";

class ShortInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let images = {"guests": guests, "church": church, "time": time}
		return (
			<Container className="ShortInfo">
				<img className="ShortInfo-img" src={images[this.props.img_src]} />
				<h2>{this.props.title}</h2>
				<p className="ShortInfo-text">{this.props.text}</p>
			</Container>
		)
	}
	
}

export default ShortInfo;