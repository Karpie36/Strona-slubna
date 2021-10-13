import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReCAPTCHA from "react-google-recaptcha";

class WeddingForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.onWeddingPresence = this.onWeddingPresence.bind(this);
		this.onWeddingAbsence = this.onWeddingAbsence.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		
		this._reCaptchaRef = React.createRef();
		
		this.state = {
			weddingPresence: false,
			guestsNames: "",
			email: "",
			phone: "",
			covid_vaccination_number: "Wszyscy",
			diet: "",
			fromHotelToChurch: false,
			fromChurchToWedding: false,
			trasportFromWedding: "",
		}
	}
	
	onWeddingPresence() {
		this.setState({
			weddingPresence: true
		})
	}
	
	addElements() {
		document.querySelector('.additionalElements').classList.add('add');
		return (
			<>
				<FormGroup row>
					<Label for="covid_vaccination_number">Czy 30.04.2022 będziecie zaszczepieni przeciwko SARS-CoV-2?<br/>Podaj proszę liczbę osób zaszczepionych:</Label>
					<Input type="select" name="covid_vaccination_number" id="covid_vaccination_number" onChange={this.handleInputChange}>
						<option>Wszyscy</option>
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
					</Input>
				</FormGroup>
				<FormGroup row>
					<Label for="diet">Czy któraś z osób biorących udział w weselu ma jakąś szczególną dietę? Kto i jaką?</Label>
					<Input type="textarea" name="diet" id="diet" onChange={this.handleInputChange} required/>
				</FormGroup>
				<FormGroup tag="fieldset" row>
					<Label>Czy chcesz skorzystać z transportu z hotelu do kościoła?</Label>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="fromHotelToChurch" value={true} onChange={this.handleInputChange} required/>{' '}
							Tak
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="fromHotelToChurch" value={false}/>{' '}
							Nie
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup tag="fieldset" row>
					<Label>Czy chcesz skorzystać z transportu z kościoła po mszy świętej na przyjęcie weselne?</Label>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="fromChurchToWedding" value={true} onChange={this.handleInputChange} required/>{' '}
							Tak
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="fromChurchToWedding" value={false}/>{' '}
							Nie
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup row>
					<Label for="trasportFromWedding">Czy chcesz skorzystać z transportu z przyjęcia weselnego do Warszawy/hotelu?</Label>
					<Input type="select" name="trasportFromWedding" id="trasportFromWedding" onChange={this.handleInputChange}>
						<option>Tak, chcę skorzystać z transportu o 23:00</option>
						<option>Tak, chcę skorzystać z transportu o 1:30</option>
						<option>Tak, chcę skorzystać z transportu o 4:15</option>
						<option>Nie</option>
					</Input>
				</FormGroup>
			</>
		)
	}
	
	onWeddingAbsence() {
		document.querySelector('.additionalElements').classList.remove("add");
		this.setState({
			weddingPresence: false
		})
	}
	
	handleInputChange(event) {
		const target = event.target;
		let value = target.value;
		if (target.type == "radio") {
			value = value == "true" ? true : false;
		}
		const name = target.name;
		this.setState({
			...this.state,
			[name]: value,
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this._reCaptchaRef.current.execute();
		const {weddingPresence, guestsNames, email, phone, covid_vaccination_number, diet, fromHotelToChurch, fromChurchToWedding, trasportFromWedding} = this.state;
		fetch('/api/v1/guest', {
			method: 'POST',
			body: JSON.stringify({
				wedding_presence: weddingPresence,
				guests_names: guestsNames,
				email: email,
				phone: phone,
				covid_vaccination_number: covid_vaccination_number,
				diet: diet,
				from_hotel_to_church: fromHotelToChurch,
				from_church_to_wedding: fromChurchToWedding,
				transport_from_wedding: trasportFromWedding,
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log('Success: ', data);
			document.querySelector('.WeddingForm-btn').style.display = 'none';
			document.querySelector('.WeddingForm-feedback').style.display = 'block';
			const formInputs = document.querySelectorAll('input');
			formInputs.forEach(input => {
				input.disabled = true;
			})
			const formTextarea = document.querySelectorAll('textarea');
			formTextarea.forEach(textarea => {
				textarea.disabled = true;
			})
			setTimeout(() => {
				document.querySelector('.WeddingForm-feedback').style.opacity = 1.0;
			}, 500)
		})
		.catch(error => {
			alert("Sprawdź połączenie z internetem i spróbuj ponownie. Jeśli problem się powtórzy to zgłoś to wysyłając wiadomość SMS pod numer 728130832")
			console.error("Error: ", error);
		})
	}
	
	render() {
		return (
			<div style={{backgroundColor: '#fffab4'}}>
				<Container>
					<div className="WeddingForm-box">
						<h2 className="WeddingForm-title">Formularz</h2>
						<Form className="WeddingForm" onSubmit={this.handleSubmit}>
							<FormGroup row>
								<Label for="guestsNames">Podaj swoje imię i nazwisko oraz imiona i nazwiska osób, za które wypełniasz formularz</Label>
								<Input type="textarea" name="guestsNames" id="guestsNames" onChange={this.handleInputChange} required/>
							</FormGroup>
							<FormGroup row>
								<Label for="email">Email</Label>
								<Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleInputChange} required/>
							</FormGroup>
							<FormGroup row>
								<Label for="phoneNumber">Nr telefonu komórkowego</Label>
								<Input type="tel" id="phoneNumber" name="phone" onChange={this.handleInputChange}
								   pattern="( )*(?:\+48|\+48 |)(?:(([0-9]{3}-[0-9]{3}-[0-9]{3})|([0-9]{9})|([0-9]{3} [0-9]{3} [0-9]{3})))( )*"
								   size="15" maxlength="15" required />
							</FormGroup>
							<FormGroup tag="fieldset" row>
								<Label>Czy potwierdzasz obecność na weselu?</Label>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="weddingPresence" value={true} onChange={this.onWeddingPresence} required/>{' '}
										Tak
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="weddingPresence" value={false} onChange={this.onWeddingAbsence}/>{' '}
										Nie
									</Label>
								</FormGroup>
							</FormGroup>
							<div className="additionalElements">
								{this.state.weddingPresence ? this.addElements() : []}
							</div>
							<Button className="WeddingForm-btn">Prześlij</Button>
							<Label className="WeddingForm-feedback">Dziękujemy</Label>
							<ReCAPTCHA
							  ref={this._reCaptchaRef}
							  size="invisible"
							  sitekey="6Ldh5MMcAAAAAA39DR1uysz73OVnor_z-BpZwc4q"
							/>
						</Form>
					</div>
				</Container>
			</div>
		)
	}
}

export default WeddingForm;