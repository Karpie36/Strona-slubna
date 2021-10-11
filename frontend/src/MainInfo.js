import React from 'react';
import { Container, Label} from 'reactstrap';

class MainInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="MainInfo">
				<h2>{this.props.title}</h2>
				<p className="MainInfo-text">{this.props.text}</p>
			</div>
		)
	}
	
}

export default MainInfo;