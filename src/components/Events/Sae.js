import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./club-events.css";

class Sae extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth
		};
		this.training = this.training.bind(this);
		this.bridge = this.bridge.bind(this);
	}

	componentWillMount() {
		window.addEventListener("resize", () => {
			this.setState({ width: window.innerWidth });
		});
	}

	componentWillUnmount() {
		window.addEventListener("resize", () => {
			this.setState({
				width: window.innerWidth
			});
		});
	}

	training() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("sae").classList.toggle("active");
			}
			document.getElementById("training").hidden = true;
			document.getElementById("bridge").hidden = true;
			document.getElementsByClassName("sae")[0].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "TRAININGVIEW" });
		} else {
			document.getElementsByClassName("sae")[0].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "TRAININGCLOSE" });
		}
	}

	bridge() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("sae").classList.toggle("active");
			}
			document.getElementById("training").hidden = true;
			document.getElementById("bridge").hidden = true;
			document.getElementsByClassName("sae")[1].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "BRIDGEVIEW" });
		} else {
			document.getElementsByClassName("sae")[1].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "BRIDGECLOSE" });
		}
	}

	render() {
		return (
			<Container className="club-events left-sae">
				<Row className="contest fonts2" id="training">
					<p onClick={this.training}>Workshop on Electric Vehicle Design & Practical session on ATV</p>
				</Row>
				<Row className="contest fonts" id="bridge">
					<p onClick={this.bridge}>Mech-a-thon</p>
				</Row>
				<Container className="details-container active sae">
					<Row className="event-details headsmall">
						<h1>Workshop on Electric Vehicle Design & Practical session on ATV</h1>
						<h3 className="display-pos sae2">Introduction :</h3>
						<ul className="bottom-down">
							<li>
								<h4>
									{" "}
									Vashisht&#39;19 in collaboration with AMZ automotive is going to conduct 2-Days practical workshop on
									E-Vehicle Design and Dynamics. If you feel automobile is your passion, then this is your chance to
									learn and explore the very field.
								</h4>
							</li>
						</ul>
						<hr />
						<h3>What do I get?</h3>
						<ul>
							<li>
								<h4>
									Winners of the workshop will get free Industrial Training &amp; Visit opportunities in the associated
									domain.
								</h4>
							</li>
							<li>
								<h4>Participation certificate to all in collaboration with following companies:</h4>
								<ul>
									<li>Polaris Motors</li>
									<li>Indian Motorcycle</li>
									<li>AMK Industry</li>
									<li>Steel Bird</li>
									<li>RCDC India</li>
									<li>Xtra Premium (Indian Oil Sub Company)</li>
									<li>AMZ Automotive</li>
								</ul>
							</li>
							<li>
								<h4>Soft copy of the study material</h4>
							</li>
						</ul>
						<hr />
						<h3>Workshop highlight</h3>
						<ul>
							<li>
								<h4>Practical session on All Terrain Vehicle (ATV)</h4>
							</li>
						</ul>
						<hr />
						<h3>Workshop Details:</h3>
						<ul>
							<h4>
								<li>E-Vehicle Concepts</li>
							</h4>
							<h4>
								<li>Dynamics of Braking System</li>
							</h4>
							<h4>
								<li>Steering Dynamics and Designing</li>
							</h4>
							<h4>
								<li>Suspension Dynamics</li>
							</h4>
						</ul>
						<hr />
						<h3>Details</h3>
						<ul>
							<h4>
								<li>Date: 30 and 31 March 2019</li>
							</h4>
							<h4>
								<li>Duration: 2 days ( 4hrs/ day)</li>
							</h4>
							<h4>
								<li>Course Fee: Rs 1000 per participant</li>
							</h4>
							<h4>
								{" "}
								<li>
									Register at:{" "}
									<a href="https://forms.gle/DJjFjQS8eM6YYUJdA" target="_blank" rel="noopener noreferrer">
										Google Form
									</a>{" "}
								</li>
							</h4>
						</ul>
					</Row>
				</Container>
				<Container className="details-container active sae sae1">
					<Row className="event-details">
						<h1>Mech-a-thon</h1>
						<h3 className="display-pos sae1">Abstract :</h3>
						<h4>
							Ever wondered what makes a design so iconic? Design for Manufacturing, Effect Analysis, Assembly,
							everything matters. Here, we give you a chance to design your own bridge model outside CAD and explore how
							to manage load distribution and vibration associated with the same.
						</h4>
						<hr />
						<h3>Problem Statement :</h3>
						<ul>
							<li>
								<h4>
									Design and fabrication of your own truss bridge capable of holding given weight using only the
									materials provided.
								</h4>
							</li>
						</ul>
						<hr />
						<h3>Prize Money: </h3>
						<h4>10,000*</h4>
						<hr />
						<h3>No of Rounds: 2</h3>
						<ul>
							<li>
								<h4>Round #1: On-spot Quiz. Simple questions will be framed from basic engineering and physics.</h4>
							</li>
							<li>
								<h4>
									Round #2: Fabrication of bridge using only materials provided adhering to the constraints given.
								</h4>
							</li>
							<li>
								<h4>Materials to be given: Popsicles (ice-cream sticks), pencils, thread, glue & tape</h4>
							</li>
						</ul>
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Your performance in Round 01 will decide selection in Round 02.</h4>
							</li>
							<li>
								<h4>Minimum length of bridge: 50cm**</h4>
							</li>
							<li>
								<h4>Minimum width: 20cm**</h4>
							</li>
							<li>
								<h4>Limited number of popsicle sticks will be provided</h4>
							</li>
							<li>
								<h4>Base Column support is not allowed</h4>
							</li>
							<li>
								<h4>No major change in design at further stage will be allowed.</h4>
							</li>
							<li>
								<h4>No overlapping of popsicle sticks. Only one joint at a point is allowed.</h4>
							</li>
							<li>
								<h4>In case of tie between teams, load will be applied until the bridge ruptures.</h4>
							</li>
							<li>
								<h4>Team size: max 3 mem</h4>
							</li>
						</ul>
						<hr />
						<h3>Judging Criterion : </h3>
						<ul>
							<li>
								<h4>Round 01 score</h4>
							</li>
							<li>
								<h4>Efficiency and deflection of your design</h4>
							</li>
							<li>
								<h4>Negative points for dimensional inaccuracy.</h4>
							</li>
						</ul>
						<hr />
						<h3>
							Register at:{" "}
							<a href="https://forms.gle/uofMdGe8s1tqVD4d9" target="_blank" rel="noopener noreferrer">
								Google Form
							</a>{" "}
						</h3>
					</Row>
				</Container>
			</Container>
		);
	}
}

Sae.propTypes = {
	clicked_event: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
	return {
		clicked_event: state.clicked_event
	};
};

export default connect(mapStateToProps)(Sae);
