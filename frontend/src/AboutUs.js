import React from "react";
import { Container } from "reactstrap";
import about_us from "./assets/Images/about_us.JPG"

class AboutUs extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="AboutUs">
				<img className="AboutUs-img" src={about_us} />
				<Container>
					<div className="AboutUs-text">
						<h2>Nasza historia</h2>
						<p className="AboutUs-title">
							Poznaliśmy się we wrześniu 2017 roku w Witowie na wyjeździe
							duszpasterstwa akademickiego „Sandał”. Od samego początku bardzo
							dobrze nam się ze sobą rozmawiało i utrzymywaliśmy ze sobą kontakt. Parą
							zostaliśmy w 2019 roku.
							Oboje kochamy góry – w Tatrach poznaliśmy się oraz mieliśmy sesję
							narzeczeńską. Karolina jest lekarzem a Karol programistą. Lubimy wspólnie
							gotować, jeść, chodzić na spacerki, ale też jeździć samochodem, oglądać
							filmy, pić wino oraz rozmawiać o przyszłości i wspólnych planach.
						</p>
					</div>
				</Container>
			</div>
		)
	}
}

export default AboutUs;