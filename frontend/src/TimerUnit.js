import React from "react";
import { Label } from 'reactstrap';

class TimerUnit extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="TimerUnit">
				<Label>{this.props.number}</Label>
				<Label>{this.props.name}</Label>
			</div>
		);
	}
}

export default TimerUnit;