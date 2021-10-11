import React from 'react';
import Karolinka from "./assets/Images/Karolinka.jpg";
import Karol from "./assets/Images/Karol.jpg";
import Heart from "./assets/Images/heart_ecru.png";
import { Container } from 'reactstrap';
import FacePhotosImage from "./FacePhotosImage.js";

class FacePhotos extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{backgroundColor: "#fff"}}>
				<Container>
					<div className="FacePhotos">
						<FacePhotosImage image={Karolinka} name="Karolina" />
						<img src={Heart} className="FacePhotos-heart" />
						<FacePhotosImage image={Karol} name="Karol" />
					</div>
				</Container>
			</div>
		) 
	}
}

export default FacePhotos;