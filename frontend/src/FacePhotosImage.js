import React from 'react';
import { Label } from "reactstrap";

class FacePhotosImage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="FacePhotosImage">
				<img src={this.props.image} className="FacePhotos-img" />
				<Label>{this.props.name}</Label>
			</div>
		) 
	}
}

export default FacePhotosImage;