import React, { Component } from "react";
import { Form, FormGroup, Button, Container, Col, Row } from "react-bootstrap";
import "./regform.css";
import { SectionsContainer, Section } from "react-fullpage";
// import { Button, Form, Grid, Header, Segment, Message, Dimmer, Loader } from "semantic-ui-react";
// import {}

// const options = [
// 	{ key: "m", text: "Male", value: "male" },
// 	{ key: "f", text: "Female", value: "female" },
// 	{ key: "o", text: "Other", value: "other" }
// ];

class RegistrationForm extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		fname: "",
	// 		lname: "",
	// 		gender: "",
	// 		email: "",
	// 		mobile: "",
	// 		cname: "",
	// 		loadingStatus: null,
	// 		ID: null
	// 	};

	// 	this.handleValueChange = this.handleValueChange.bind(this);
	// 	this.handleGenderChange = this.handleGenderChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	let data = {
	// 		fname: this.state.fname,
	// 		lname: this.state.lname,
	// 		gender: this.state.gender,
	// 		number: this.state.mobile,
	// 		email: this.state.email,
	// 		college: this.state.cname
	// 	};
	// 	this.setState({ loadingStatus: 1 });
	// 	fetch("https://quiet-reef-46852.herokuapp.com/users", {
	// 		method: "POST",
	// 		mode: "cors",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify(data)
	// 	})
	// 		.then(response => {
	// 			var contentType = response.headers.get("content-type");

	// 			if (contentType && contentType.includes("application/json")) {
	// 				response.json().then(response => {
	// 					fetch("/send_mail", {
	// 						method: "POST",
	// 						headers: {
	// 							"Content-Type": "application/json"
	// 						},
	// 						body: JSON.stringify({
	// 							email: data.email,
	// 							name: data.fname,
	// 							id: response.samid
	// 						})
	// 					});
	// 				});
	// 			}

	// 			if (!response.ok) {
	// 				throw new Error();
	// 			}

	// 			this.setState({ fname: "", lname: "", gender: "", email: "", college: "", number: "", loadingStatus: 2 });
	// 		})
	// 		.catch(e => {
	// 			this.setState({ loadingStatus: 0 });
	// 		});
	// }

	// sendConfirmationEmail() {}

	// handleGenderChange(e, { value }) {
	// 	e.preventDefault();
	// 	this.setState({ gender: value });
	// }

	// handleValueChange(e) {
	// 	e.preventDefault();
	// 	if (e.target.name === "first-name") {
	// 		this.setState({ fname: e.target.value });
	// 	}
	// 	if (e.target.name === "last-name") {
	// 		this.setState({ lname: e.target.value });
	// 	}
	// 	if (e.target.name === "email") {
	// 		this.setState({ email: e.target.value });
	// 	}
	// 	if (e.target.name === "mobile") {
	// 		this.setState({ mobile: e.target.value });
	// 	}
	// 	if (e.target.name === "college-name") {
	// 		this.setState({ cname: e.target.value });
	// 	}
	// }
	constructor(props) {
		super(props);

		this.state = {
			gender: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render() {
		let options = {
			sectionClassName: "section",
			anchors: ["Form"],
			scrollBar: false,
			navigation: true,
			verticalAlign: false,
			arrowNavigation: true,
			recordHistory: false
		};
		return (
			<SectionsContainer {...options}>
				<Section>
					<Container className="regform">
						<h5>REGISTER</h5>
						<Row>
							<Col sm={4} />
							<Col sm={4}>
								<Form className="regform1">
									<FormGroup>
										<Form.Label>FirstName</Form.Label>
										<Form.Control type="name" placeholder="FirstName" />
									</FormGroup>
									<FormGroup>
										<Form.Label>LastName</Form.Label>
										<Form.Control type="name" placeholder="LastName" />
									</FormGroup>
									<Form.Group>
										<Form.Label>Gender</Form.Label>
										<br />
										<input
											value={this.state.gender}
											type="text"
											placeholder="Gender"
											name="gender"
											onChange={this.handleChange}
											className="emailField"
											list="data"
											autoComplete="off"
										/>
										<datalist id="data">
											<option value="Male" />
											<option value="Female" />
											<option value="Others" />
										</datalist>
									</Form.Group>
									<FormGroup>
										<Form.Label>Email</Form.Label>
										<Form.Control type="name" placeholder="Email" />
									</FormGroup>
									<FormGroup>
										<Form.Label>Mobile Number</Form.Label>
										<Form.Control type="name" placeholder="+91" />
									</FormGroup>
									<FormGroup>
										<Form.Label>College Name</Form.Label>
										<Form.Control type="name" placeholder="College Name" />
									</FormGroup>
									<Button className="button1" variant="primary" type="submit">
										Register
									</Button>
								</Form>
							</Col>
							<Col sm={4} />
						</Row>
					</Container>
				</Section>
			</SectionsContainer>
		);
	}
}

export default RegistrationForm;
