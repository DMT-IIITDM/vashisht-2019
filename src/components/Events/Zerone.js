import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./club-events.css";

class Zerone extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth
		};
		this.code_wars = this.code_wars.bind(this);
		this.hackathon = this.hackathon.bind(this);
		this.deeplearning = this.deeplearning.bind(this);
		this.ainigma = this.ainigma.bind(this);
		this.decode = this.decode.bind(this);
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

	code_wars() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("zerone").classList.toggle("active");
			}
			document.getElementById("codewars").hidden = true;
			document.getElementById("hackathon").hidden = true;
			document.getElementById("deeplearning").hidden = true;
			document.getElementById("ainigma").hidden = true;
			document.getElementById("decode").hidden = true;
			document.getElementsByClassName("details-container")[0].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "ZERONEVIEW" });
		} else {
			document.getElementsByClassName("details-container")[0].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "ZERONECLOSE" });
		}
	}

	hackathon() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("zerone").classList.toggle("active");
			}
			document.getElementById("codewars").hidden = true;
			document.getElementById("hackathon").hidden = true;
			document.getElementById("deeplearning").hidden = true;
			document.getElementById("ainigma").hidden = true;
			document.getElementById("decode").hidden = true;
			document.getElementsByClassName("details-container")[1].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "HACKATHONVIEW" });
		} else {
			document.getElementsByClassName("details-container")[1].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "HACKATHONCLOSE" });
		}
	}

	deeplearning() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("zerone").classList.toggle("active");
			}
			document.getElementById("codewars").hidden = true;
			document.getElementById("hackathon").hidden = true;
			document.getElementById("deeplearning").hidden = true;
			document.getElementById("ainigma").hidden = true;
			document.getElementById("decode").hidden = true;
			document.getElementsByClassName("details-container")[2].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "DEEPLEARNINGVIEW" });
		} else {
			document.getElementsByClassName("details-container")[2].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "DEEPLEARNINGCLOSE" });
		}
	}

	ainigma() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("zerone").classList.toggle("active");
			}
			document.getElementById("codewars").hidden = true;
			document.getElementById("hackathon").hidden = true;
			document.getElementById("deeplearning").hidden = true;
			document.getElementById("ainigma").hidden = true;
			document.getElementById("decode").hidden = true;
			document.getElementsByClassName("details-container")[3].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "AINIGMAVIEW" });
		} else {
			document.getElementsByClassName("details-container")[3].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "AINIGMACLOSE" });
		}
	}

	decode() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("zerone").classList.toggle("active");
			}
			document.getElementById("codewars").hidden = true;
			document.getElementById("hackathon").hidden = true;
			document.getElementById("deeplearning").hidden = true;
			document.getElementById("ainigma").hidden = true;
			document.getElementById("decode").hidden = true;
			document.getElementsByClassName("details-container")[4].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "DECODEVIEW" });
		} else {
			document.getElementsByClassName("details-container")[4].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "DECODECLOSE" });
		}
	}

	render() {
		return (
			<Container className="club-events right">
				<Row className="contest" id="codewars">
					<p onClick={this.code_wars}>Code Wars</p>
				</Row>
				<Row className="contest active" id="hackathon">
					<p onClick={this.hackathon}>Hackathon</p>
				</Row>
				<Row className="contest fonts active" id="deeplearning">
					<p onClick={this.deeplearning}>Deep Learning Workshop</p>
				</Row>
				<Row className="contest active" id="ainigma">
					<p onClick={this.ainigma}>Ainigma</p>
				</Row>
				<Row className="contest active" id="decode">
					<p onClick={this.decode}>Decode Battle</p>
				</Row>
				<Container className="details-container active">
					<Row className="event-details">
						<h1>Code Wars</h1>
						<h3 className="display-pos">Description :</h3>
						<h4>
							Code Wars is a tournament based event mixing the idea of ‘Duel’ and ‘Coding’ where two teams will be put
							against each other in order to qualify to the next round.
						</h4>
						<hr />
						<h3>Judging criteria : </h3>
						<ul>
							<li>
								<h4>
									There will be a prelims round out of which 32 or 16 teams will make to the next round depending upon
									the total numbers of participants. Each question will have marks and the teams with top 32 or 16 marks
									will qualify
								</h4>
							</li>
							<li>
								<h4>
									In the next round, each team will be paired up with another team such that they compete with each
									other and only one of them makes it further. This will continue until one final team is left. Team
									having the highest marks will qualify further.
								</h4>
							</li>
						</ul>
						<hr />
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Prelims will be online whereas further rounds will be offline.</h4>
							</li>
							<li>
								<h4>Copying black boxes is allowed.</h4>
							</li>
							<li>
								<h4>Prelims will have partial marking whereas further rounds won’t.</h4>
							</li>
							<li>
								<h4>If there is a tie in offline round, the team with a higher rank in prelims will qualify.</h4>
							</li>
							<li>
								<h4>Team size - Max 2</h4>
							</li>
							<li>
								<h4>Only one laptop per team is allowed in offline round</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container active hack-pos">
					<Row className="event-details">
						<h1>Hackathon</h1>
						<h3 className="display-pos">Description :</h3>
						<h4>
							An 8 hour long coding marathon where participants will be given a real world problem to solve in any
							coding platform they feel comfortable in.
						</h4>
						<hr />
						<h3>Judging criteria : </h3>
						<ul>
							<li>
								<h4>Judging criteria will be in terms of performance, code quality, UI.</h4>
							</li>
						</ul>
						<hr />
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Usage of open source libraries are allowed.</h4>
							</li>
							<li>
								<h4>Copying from an already existing source will result in disqualification</h4>
							</li>
							<li>
								<h4>The event will go on for 8 hours.</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container active deep-pos">
					<Row className="event-details">
						<h1>Deep Learning Workshop</h1>
						<h3 className="display-pos zerone1">Description :</h3>
						<h4>A practical hands on Deep Learning workshop using Python.</h4>
						<hr />
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>There will be two sessions, 3 hours each.</h4>
							</li>
							<li>
								<h4>Entry fee of 150 Rs. will be there.</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container active deep-pos">
					<Row className="event-details">
						<h1>Ainigma</h1>
						<h3 className="display-pos">Description :</h3>
						<h4>
							The participants are given 90 minutes. The programming language is fixed. The students are given one hour
							(the first 60 minutes) to study the programming language and get familiar with it to a very minimalistic
							level.
						</h4>
						<h4>
							Internet access is given to them only for the first 60 minutes and not the for the next 30 minutes.
							(Mobile phones will be restricted for those 30 minutes)
						</h4>
						<h4>
							Then a problem is given to them considering the amount of familiarity a beginner can gain in 60 minutes to
							a new programming language. This is an individual event. The problem is to be solved using the fixed
							language. Participants are supposed to have laptops.
						</h4>
						<hr />
						<h3>Motive</h3>
						<ul>
							<h4>To gain a friendly environmental attitude towards learning and not competing.</h4>
						</ul>
						<h3>Constraints</h3>
						<ul>
							<h4>This event is only for the first years. (2018 batch) </h4>
						</ul>
						<hr />
						<h3>Prizes</h3>
						<ul>
							<h4>There are only two positions for the winners in this event. 1st and 2nd.</h4>
						</ul>

						<h3>Venue</h3>
						<ul>
							<h4>Old Library</h4>
						</ul>
					</Row>
				</Container>
				<Container className="details-container active deep-pos">
					<Row className="event-details">
						<h1>Decode Battle</h1>
						<h3 className="display-pos">Description :</h3>
						<ul>
							<h4>There are two problems in this event.</h4>

							<li>
								<h4>A computational or an algorithmic problem where the answer is a number, or a string.</h4>
							</li>
							<li>
								<h4>This problem is encrypted or encoded with the answer obtained above.</h4>
							</li>
						</ul>
						<h4>
							The problem will be given as a file. The contents of the file will be encoded with the above obtained
							answer. The participants are supposed to decode the problem and then solve it.
						</h4>
						<h4>
							This will cover their logical thinking skills for the first problem and their applicational skills via the
							second problem. There is no language constraint forthis event.
						</h4>
						<hr />
						<h3>Details : </h3>
						<ul>
							<li>
								<h4>Deadline: The event will run for two hours.</h4>
							</li>
							<li>
								<h4>Constraints: This event is open to everyone in any branch of the Institute.</h4>
							</li>
							<li>
								<h4>Venue: Preferably H05 with internet access.</h4>
							</li>
							<li>
								<h4>Prizes: There are again only 2 winners (preferably cash).</h4>
							</li>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Zerone.propTypes = {
	clicked_event: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
	return {
		clicked_event: state.clicked_event,
		zerone_event: state.zerone_event,
		hackathon_event: state.hackathon_event,
		deeplearning_event: state.deeplearning_event,
		ainigma_event: state.ainigma_event,
		decode_event: state.decode_event
	};
};

export default connect(mapStateToProps)(Zerone);
