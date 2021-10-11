import React from 'react';
import { Container } from 'reactstrap';
import ShortInfo from './ShortInfo.js';

class ShortInfoPanel extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div style={{backgroundColor: "#fffab4"}}>
				<Container className="ShortInfoPanel">
					<ShortInfo img_src={"guests"} title={"Goście"}
						text={"Nasze kochane rodziny\noraz wspaniali przyjaciele i znajomi"}
					/>
					<ShortInfo img_src={"church"} title={"Miejsce"}
						text={"Kościół Najświętszego Zbawiciela\nul.Marszałkowska 37\nWarszawa"}
					/>
					<ShortInfo img_src={"time"} title={"Czas"}
						text={"30 kwietnia 2022 roku\n 15:00"}
					/>
				</Container>
			</div>
		)
	}
	
}

export default ShortInfoPanel;