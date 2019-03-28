import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./club-events.css";

class Electronics extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth
		};
		this.break_the_circuit = this.break_the_circuit.bind(this);
		this.technothon = this.technothon.bind(this);
		this.aavishkar = this.aavishkar.bind(this);
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

	break_the_circuit() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("electronics").classList.toggle("active");
			}
			document.getElementById("break-the-circuit").hidden = true;
			document.getElementById("technothon").hidden = true;
			document.getElementById("aavishkar").hidden = true;
			document.getElementsByClassName("electronic")[0].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "BREAKTHECVIEW" });
		} else {
			document.getElementsByClassName("electronic")[0].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "BREAKTHECCLOSE" });
		}
	}

	technothon() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("electronics").classList.toggle("active");
			}
			document.getElementById("break-the-circuit").hidden = true;
			document.getElementById("technothon").hidden = true;
			document.getElementById("aavishkar").hidden = true;
			document.getElementsByClassName("electronic")[1].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "TECHNOTHONVIEW" });
		} else {
			document.getElementsByClassName("electronic")[1].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "TECHNOTHONCLOSE" });
		}
	}

	aavishkar() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("electronics").classList.toggle("active");
			}
			document.getElementById("break-the-circuit").hidden = true;
			document.getElementById("technothon").hidden = true;
			document.getElementById("aavishkar").hidden = true;
			document.getElementsByClassName("electronic")[2].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "AAVISHKARVIEW" });
		} else {
			document.getElementsByClassName("electronic")[2].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "AAVISHKARCLOSE" });
		}
	}

	render() {
		return (
			<Container className="club-events left">
				<Row className="contest" id="break-the-circuit">
					<p onClick={this.break_the_circuit}>Break The Circuit</p>
				</Row>
				<Row className="contest" id="technothon">
					<p onClick={this.technothon}>Technothon</p>
				</Row>
				<Row className="contest" id="aavishkar">
					<p onClick={this.aavishkar}>Aavishkar</p>
				</Row>
				<Container className="details-container electronic active">
					<Row className="event-details">
						<h1>Break The Circuit</h1>
						<h3 className="display-pos electronic1">Description :</h3>
						<h4>
							Think circuit analysis is something so interesting and reflects on all your logical understanding? Here is
							a platform to prove your skills on Circuit analysis.
						</h4>
						{/* <li> */}
						<h5>
							Register at :{" "}
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSdhT7_F6yOurgGfAd_S849dwx6Wurvm7Est2RNV0mx6ScPwEw/viewform"
								target="_blank"
								rel="noopener noreferrer"
							>
								Break the circuit registrations
							</a>{" "}
						</h5>
						{/* </li> */}
						<hr />
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Teams with a max size of 2 can participate</h4>
							</li>
							<li>
								<h4>Usage of the Internet and mobile phones are strictly prohibited unless told.</h4>
							</li>
							<li>
								<h4>Time limits must be strictly adhered to.</h4>
							</li>
							<li>
								<h4>Soldering should be performed as per the rules and protocols.</h4>
							</li>
							<li>
								<h4>The decision of the judges will be final.</h4>
							</li>
							<li>
								<h4>The circuits will be randomly chosen.</h4>
							</li>
							<li>
								<h4>All the PCB soldering rules must be followed.</h4>
							</li>
						</ul>
						<hr />
						<h3>Format : </h3>
						<ul>
							{/* <li> */}
							<h4>ROUND 1: Circuit Analysis and Debugging</h4>
							{/* </li> */}
							<li>
								<h5>
									A circuit analysis round to spot and debug the given circuit on a simulation platform like Multisim.
									The circuits will be based on the basic concepts of Power electronics, Analog circuits, and Digital
									Electronics. Teams debugging the highest number of circuits will be qualified for the next round.
								</h5>
							</li>
							<li>
								<h5>Duration : 1 hr</h5>
							</li>
							{/* <li> */}
							<h4>ROUND 2: Soldering PCB </h4>
							{/* </li> */}
							<li>
								<h5>
									Collect the required components from the storehouse (in the lab), design and solder the given Circuit
									within the given time frame. All the required soldering materials will be given.
								</h5>
							</li>
							<li>
								<h5>Duration : 1.5 hrs</h5>
							</li>
							{/* <li> */}
							{/* </li> */}
						</ul>
						<hr />
						<h3>Venue :</h3>
						<br clear="all" />
						<br />
						<ul>
							<li>
								<h5 className="top-down">Date : March 31</h5>
							</li>
							<li>
								<h5>Venue : H210 lab</h5>
							</li>
							<li>
								<h5>Prize pool : 7k*</h5>
							</li>
						</ul>
						<hr />
						<h3>Contact :</h3>
						<ul>
							<li>
								<h5 className="top-down">Jeeva Keshav S - (+91) 9943677801</h5>
							</li>
							<li>
								<h5>Madhuvanthi R - (+91) 9884937757</h5>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container electronic pos1 active">
					<Row className="event-details">
						<h1>Technothon</h1>
						<h3 className="display-pos">Description :</h3>
						<h4>
							Are you a techie? A keen follower of the latest technology and gadgets? Have strong engineering
							fundamentals? Then, participate to test your technical mastery skills.
						</h4>
						<hr />
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Teams with a max size of 2 can participate</h4>
							</li>
							<li>
								<h4>Teams must qualify Round 1 to participate in Round 2</h4>
							</li>
							<li>
								<h4>
									The Tech quiz can be attended only once during the allotted time. Shortlisted teams will qualify for
									the next round.
								</h4>
							</li>
							<li>
								<h4>
									One in every qualified team has to participate in the JAM while the other can help in information
									gathering.
								</h4>
							</li>
							<li>
								<h4>JAM should be a non-stop talk on the chosen technology without break and repetition.</h4>
							</li>
							<li>
								<h4>Teams must bring Laptop installed with Fritzing software installed for the main event.</h4>
								<a href="http://fritzing.org/download" target="_blank" rel="noopener noreferrer">
									http://fritzing.org/download
								</a>
							</li>
						</ul>
						<hr />
						<h3>Format : </h3>
						<ul>
							<h3>ROUND 1: Online tech quiz</h3>
							<li>
								<h5>
									An online tech quiz based on the technological developments in this global world, their primary needs,
									electronics fundamentals, and logical thinking on 27th March 2019 from 9:00 - 9:30 PM.
								</h5>
							</li>
							<li>
								<h5>
									Register here for the test : Register at :{" "}
									<a href="https://goo.gl/forms/JglGAmNHKGntxQ623" target="_blank" rel="noopener noreferrer">
										EDC Tech Quiz Registration
									</a>{" "}
								</h5>
							</li>
							<h3>ROUND 2: </h3>
							<li>
								<h4>JAM (Just A Minute)</h4>
							</li>
							<li>
								<h5>
									The participants will be given a topic related to any aspect of technology and five minutes of prep
									time, after which they will have to make a minute long speech about the given topic.
								</h5>
							</li>
							<li>
								<h4>CODING</h4>
							</li>
							<li>
								<h5>
									All the participants who qualify Round 1 will receive a link by the end of the day. They must a
									complete a 4 hrs online course on Micropython from a renowned online learning platform UDEMY with the
									help of the link at free of cost. On the day of main event, 31st March, build a mini project using
									Fritzing tool within a duration of 1.5 hrs.
								</h5>
							</li>
						</ul>
						<hr />
						<h3>Details :</h3>
						<ul>
							<li>
								<h5 className="top-down">Date : March 27th and 31st</h5>
							</li>

							<li>
								<h5>Venue : Acad Lab</h5>
							</li>
							<li>
								<h5>Prize pool: 5k*</h5>
							</li>
						</ul>

						<hr />
						<h3>Contact :</h3>
						<ul>
							<li>
								<h5 className="top-down">Jeeva Keshav S - (+91) 9943677801</h5>
							</li>
							<li>
								<h5>Madhuvanthi R - (+91) 9884937757</h5>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container electronic pos2 active">
					<Row className="event-details">
						<h1>Aavishkar</h1>
						<h3 className="display-pos">Description :</h3>
						<h4>
							Have you ever thought you could solve real-time problems and give an effective solution? It’s time to put
							your thinking caps on. Explore and obtain the most optimal solution for the defined problem statement and
							win the contest.
						</h4>
						<hr />
						<h3>Rules : </h3>
						<ul>
							<li>
								<h4>Teams with a max size of 3 can participate</h4>
							</li>
							<li>
								<h4>Teams can participate in both the rounds and the cumulative will make the winner.</h4>
							</li>
							<li>
								<h4>
									Submit your ideas at{" "}
									<a href="https://goo.gl/forms/WD79wHCez3oRFId12" target="_blank" rel="noopener noreferrer">
										Aavishkar Registration
									</a>{" "}
									by 26/03/2019
								</h4>
							</li>
							<li>
								<h4>PPT defining your idea is must for Category 1 but optional for Category 2.</h4>
							</li>
							<li>
								<h4>
									For Category 1, the PPT must contain the Problem Statement and all the necessary parameters to present
									your solution.
								</h4>
							</li>
							<li>
								<h4>The prototypes should be stable, robust and appealing to the said solution.</h4>
							</li>
							<li>
								<h4>Decisions by the panel will be final.</h4>
							</li>
						</ul>
						<hr />
						<h3>Format : </h3>
						<ul>
							<h3>ROUND 1 </h3>

							<li>
								<h5>
									Each team of max. 3 members has to appeal to the given Albert Einstein’s quote and find an innovative
									approach in technology for a chosen particular social cause.
								</h5>
							</li>
							<h5>E.g, A helping hand for the elderly, Pollution.</h5>
							<li>
								<h5>
									Each presentation should discuss the complete technological solution you present will all the
									parameters, challenges and assumptions taken.
								</h5>
							</li>
							<li>
								<h5>Duration : 10 minutes for presentation + 5 minutes for questions.</h5>
							</li>

							<h3>ROUND 2</h3>

							<li>
								<h5>
									A real-time problem statement will be given during the event and 1 hour of time to brainstorm and
									present a feasible solution to the panel of judges with a Powerpoint presentation. It&#39;s an opportunity
									for all the logical problem-solving minds out there.
								</h5>
							</li>
							<li>
								<h5>Duration : 1.5 hrs</h5>
							</li>
						</ul>
						<hr />
						<h3>Details :</h3>
						<ul>
							<li>
								<h5 className="top-down">Date : March 31 st</h5>
							</li>
							<li>
								<h5>Venue : Acad Block</h5>
							</li>
							<li>
								<h5>Prize pool: 5k*</h5>
							</li>
						</ul>
						<hr />
						<h3>Contact :</h3>
						<ul>
							<li>
								<h5 className="top-down">Jeeva Keshav S - (+91) 9943677801</h5>
							</li>
							<li>
								<h5>Madhuvanthi R - (+91) 9884937757</h5>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Electronics.propTypes = {
	clicked_event: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
	return {
		clicked_event: state.clicked_event
	};
};

export default connect(mapStateToProps)(Electronics);
