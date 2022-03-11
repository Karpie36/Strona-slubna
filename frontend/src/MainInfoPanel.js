import React from 'react';
import { Container } from 'reactstrap';
import MainInfo from './MainInfo.js';

class MainInfoPanel extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div style={{backgroundColor: "#fff"}}>
				<Container className="MainInfoPanel">
					<MainInfo title={"Ślub"}
						text={"Ślub odbędzie się 30 kwietnia 2022 roku o godzinie 15:00 w kościele Najświętszego Zbawiciela przy ul. Marszałkowskiej 37 w Warszawie. Przy kościele Najświętszego Zbawiciela działa duszpasterstwo „Sandał”."}
					/>
					<div className="MainInfo">
						<h2>Przyjęcie weselne</h2>
						<p className="MainInfo-text">Wesele odbędzie się w karczmie Hotelu Panorama w Zbiroży k. Mszczonowa <a href="https://www.google.com/maps/place/%C5%9Aw.+Anny+12,+96-320+Zbiro%C5%BCa/@51.9577495,20.5922749,448m/data=!3m2!1e3!4b1!4m15!1m9!3m8!1s0x47194106734718b7:0x19cfccbfdc6a6443!2sHotel+Panorama!5m2!4m1!1i2!8m2!3d51.9739774!4d20.5382976!3m4!1s0x471940618f30b113:0x55ea0396f810f227!8m2!3d51.9577462!4d20.5944636" target="_blank">(ul. Św. Anny 12 96-320 Zbiroża)</a>. Podróż z kościoła na sale weselną trwa ok. 45min.</p>
					</div>
					<MainInfo title={"Nocleg"}
						text={"Dla rodziny organizujemy nocleg w Hotelu Panorama. Osoby, które chcą skorzystać z noclegu, prosimy o wcześniejszy kontakt. Hotel znajduje się przy ul. Tarczyńskiej 109A w Mszczonowie - 5min drogi samochodem od karczmy. Przed ślubem będzie możliwość przyjechania do hotelu celem zostawienia bagaży. Rano po weselu goście hotelowi mają zapewnione śniadanie."}
					/>
					<MainInfo title={"Covid"}
						text={"Zależy nam, aby nasze wesele było bezpieczne, dlatego bardzo prosimy o zaszczepienie się przeciwko SARS-CoV-2."}
					/>
					<MainInfo title={"Prezenty"}
						text={"Bardzo prosimy o zrezygnowanie ze zwyczaju kupowania kwiatów ciętych. Zamiast kwiatów większą przyjemność sprawi nam np. butelka Waszego ulubionego wina."}
					/>
					<MainInfo title={"Transport"}
						text={"Organizujemy transport autokarem:\n- przed mszą ślubną z Hotelu Panorama do kościoła\n- po mszy ślubnej z kościoła do karczmy\n- w nocy z karczmy do hotelu (planujemy 3 tury)\n- w nocy z karczmy do hotelu/Warszawy (planujemy 3 tury)\nW celu organizacji transportu osoby chętne prosimy o zaznaczenie w formularzu odpowiednich opcji.\nTransport do Warszawy będzie zatrzymywał się przy metrze Politechnika."}
					/>
				</Container>
			</div>
		)
	}
	
}

export default MainInfoPanel;