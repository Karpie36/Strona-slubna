import React from "react";
import { Container, Label, Row } from 'reactstrap';
import TimerUnit from './TimerUnit.js';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.deadline = "April, 30, 2022, 15:00:00 GMT+0100"
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}
  
	componentWillMount() {
		this.getTimeUntil(this.deadline);
	}
	
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.deadline), 1000);
	}
	
	leading0(num) {
		return num < 10 ? "0" + num : num;
	}
	
	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		let additionalHour = 0;
		if (Date.parse("October, 31, 2021, GMT+0100") - Date.parse(new Date()) > 0 || Date.parse("March, 27, 2022, GMT+0100") - Date.parse(new Date()) < 0) {
			additionalHour = -1;
		}
		if (time < 0) {
			this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		}
		else {
			const additionalHourInMiliseconds = additionalHour * 60 * 60 * 1000;
			time += additionalHourInMiliseconds;
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
			this.setState({ days, hours, minutes, seconds });
		}
	}
	
	render() {
		return (
			<div className="Timer">
				<Container className="Timer-container">
					<Label>POZOSTAŁO DO ŚLUBU</Label>
					<div className="Units-container">
						<TimerUnit number={this.leading0(this.state.days)} name="DNI" />
						<TimerUnit number={this.leading0(this.state.hours)} name="GODZIN" />
						<TimerUnit number={this.leading0(this.state.minutes)} name="MINUT" />
						<TimerUnit number={this.leading0(this.state.seconds)} name="SEKUND" />
					</div>
				</Container>
			</div>
		);
	}
}

export default Timer;