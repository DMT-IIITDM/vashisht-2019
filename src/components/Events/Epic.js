import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./club-events.css";

class Epic extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth
		};
		this.bid_bad = this.bid_bad.bind(this);
		this.tic_tac = this.tic_tac.bind(this);
		this.vbc = this.vbc.bind(this);
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

	bid_bad() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("epic").classList.toggle("active");
			}
			document.getElementById("bid_bad").hidden = true;
			document.getElementById("tic-tac").hidden = true;
			document.getElementById("business").hidden = true;
			document.getElementsByClassName("epic-now")[0].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "BID_BADVIEW" });
		} else {
			document.getElementsByClassName("epic-now")[0].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "BID_BADCLOSE" });
		}
	}

	tic_tac() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("epic").classList.toggle("active");
			}
			document.getElementById("bid_bad").hidden = true;
			document.getElementById("tic-tac").hidden = true;
			document.getElementById("business").hidden = true;
			document.getElementsByClassName("epic-now")[1].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "TIC_TACVIEW" });
		} else {
			document.getElementsByClassName("epic-now")[1].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "IC_TACCLOSE" });
		}
	}

	vbc() {
		if (!this.props.clicked_event) {
			if (this.state.width < 575) {
				document.getElementById("epic").classList.toggle("active");
			}
			document.getElementById("bid_bad").hidden = true;
			document.getElementById("tic-tac").hidden = true;
			document.getElementById("business").hidden = true;
			document.getElementsByClassName("epic-now")[2].classList.toggle("active");
			this.props.dispatch({ type: "VIEW" });
			this.props.dispatch({ type: "VBCVIEW" });
		} else {
			document.getElementsByClassName("epic-now")[2].classList.toggle("active");
			this.props.dispatch({ type: "CLOSE" });
			this.props.dispatch({ type: "VBCCLOSE" });
		}
	}

	render() {
		return (
			<Container className="club-events right-epic">
				<Row className="contest" id="bid_bad">
					<p onClick={this.bid_bad}>Bid or Bad</p>
				</Row>
				<Row className="contest" id="tic-tac">
					<p onClick={this.tic_tac}>Tic TAG Toe</p>
				</Row>
				<Row className="contest fonts1" id="business">
					<p onClick={this.vbc}>Stockastic (Workshop and competition)</p>
				</Row>
				<Container className="details-container epic-now pos3 active">
					<Row className="event-details">
						<h1>Bid or Bad:</h1>
						<h3 className="display-pos">Abstract :</h3>
						<h4>Are you interested in creating solutions to business problems?</h4>
						<h4>Can you pitch those ideas and convenience people around you to invest?</h4>
						<h4>Do you think what you spend is an investment?</h4>
						<h4>Do you even spend on the right people and things?</h4>
						<h4>
							Come, challenge your skills... We are providing you a platform where you get to solve business problems,
							pitch your ideas, auction for the best and invest.
						</h4>
						<h4>EPIC presents &quot;BID or BAD&quot;.</h4>
						<hr />

						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>
									Every team will be provided with an initial amount which they can use to invest in their own idea as
									well as in other’s ideas.
								</h4>
							</li>
							<li>
								<h4>
									Each team will be given a problem statement, team members have to discuss the solution to the problem
									and pitch the idea in front of judge panel and other teams.
								</h4>
							</li>
							<li>
								<h4>The pitching team has to come up with an amount to invest in their own idea.</h4>
							</li>
							<li>
								<h4>
									Pitching will be followed by an auction round in which other teams have a chance to invest some amount
									of money in the idea of pitching team.
								</h4>
							</li>
							<li>
								<h4>The team with highest bid gets a partnership in the idea.</h4>
							</li>
							<li>
								<h4>
									After all the teams have finished pitching and bidding, another round of bidding will be held for all
									the teams. The team with the cumulative highest wins the bid. (priority will be given to the team who
									won the first round of bidding for the given team in case of tie).
								</h4>
							</li>
							<li>
								<h4>A list will be prepared on the basis of investment received and the pitching for each team.</h4>
							</li>
							<li>
								<h4>
									The list will decide the percentage of increment/decrement in the amount invested in the ideas. The
									percentage will be beared by the teams who invested in the idea. Amount will be returned to the teams
									with the respective percentage of increment/decrement.
								</h4>
							</li>
							<li>
								<h4>The team with the highest amount after the return of investment wins.</h4>
							</li>
						</ul>
						<hr />
						<h3>Judging criteria : </h3>
						<ul>
							<li>
								<h4>Creative thinking, Pitching skills, Clarity about the problem</h4>
							</li>
						</ul>
						<hr />
						<h3>Team size : </h3>
						<h4>3-6 members</h4>
						<hr />
						<h3>Prize money :</h3>
						<h4>Total: Rs 3500</h4>
						<ul>
							<li>
								<h4>1st: Rs 2000</h4>
							</li>
							<li>
								<h4>2nd : Rs 1500</h4>
							</li>
							<li>
								<h4>3rd: Rs 1000</h4>
							</li>
						</ul>

						<hr />
						<h3>Time :</h3>
						<ul>
							<li>
								<h4>2-4 hrs One day event. (Prefered day: 2nd day of the the fest, in afternoon)</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container epic-now pos4 active">
					<Row className="event-details">
						<h1>Tic TAG Toe:</h1>
						<h3 className="display-pos">Abstract :</h3>
						<hr />
						<h4>You know how some slogans get you? Like,</h4>
						<h4>&quot;Just do it&quot;</h4>
						<h4>&quot;Good food good life&quot;</h4>
						<h4>&quot;Wherever you go, our network follows&quot;</h4>
						<h4>&quot;Humara Bajaj&quot;</h4>
						<h4>How can anyone forget these lines...</h4>
						<h4>Have you tried something similar but were humiliated by your friends,</h4>
						<h4>Have you ever blurted rhyming sentences and got something meaningless yet meaningful,</h4>
						<h4>Your skills were rejected everywhere because no one could appreciate your talent,</h4>
						<h4>You always felt like your ability have been wasted on ignorant people?</h4>
						<h4>But wait we&#39;ve got a chance for you...</h4>
						<h4>
							EPIC presents &quot;Tic TAG Toe&quot;, an event in VASHISHTH 2019 where you have a chance to show off your
							expertise in creating taglines/slogans for products.
						</h4>
						<hr />
						<h3>Rules and Regulations : </h3>
						<ul>
							<li>
								<h4>Register for Vashishth 2019.</h4>
							</li>
							<li>
								<h4>Follow the Instagram page “epicclub_iiitdm”.</h4>
							</li>
							<li>
								<h4>
									Every once in a while there will be posts (and stories) with caption “Tic TAG Toe product No.
									&lt;1/2/3/4...&gt;” on the instagram page. These posts will consist of pictures showing some products.
								</h4>
							</li>
							<li>
								<h4>Comment your best, catchy, creative taglines/slogans/punchlines for the product on the post.</h4>
							</li>
							<li>
								<h4>Taglines/slogans/punchlines are free from all kinds of language barriers.</h4>
							</li>
							<li>
								<h4>A comment for the product should be less than or equal to 3 lines.</h4>
							</li>
							<li>
								<h4>
									A user can come up with more than one tagline/slogan/punchline for a product (make it a different
									comment).
								</h4>
							</li>
							<li>
								<h4>A user can comment on more than one post.</h4>
							</li>
							<li>
								<h4>The best tagline/slogan/punchline will be declared the the winner of Tic TAG Toe.</h4>
							</li>
							<li>
								<h4>
									Only the comments dated before &lt;last day of vashisht 2019&gt; will be considered for
									participation.
								</h4>
							</li>
						</ul>
						<hr />
						<h3>Judging criteria : </h3>
						<ul><li>
							<h4>Most attractive and fun comment will be considered the winning TAG.</h4>
						</li>
						</ul>
						<hr />
						<h3>Prize money :</h3>
						<h4>Total: Rs 600</h4>
						<ul>
							<li>
								<h4>1st: Rs 250</h4>
							</li>
							<li>
								<h4>2nd : Rs 200</h4>
							</li>
							<li>
								<h4>3rd: Rs 150</h4>
							</li>
						</ul>
					</Row>
				</Container>
				<Container className="details-container epic-now pos4 active">
					<Row className="event-details headsmall">
						<h1>Stockastic (Workshop and competition):</h1>
						<h3 className="display-pos1">Abstract :</h3>
						<h4>
							Do you feel Wolf of Wall street is the kind of work you wanna do, but you don’t know where to start from.
							You ever had the thought of investing your money in stocks but don’t know how it works? Are you interested
							to know how the stock market works? Want to experience real live stock trading and get the feel of hands
							on trade?
						</h4>
						<h4>
							Let EPIC club bring you a one stop solution to all you desires, “Stockastic” a hands on Workshop and
							Competition held by Mr. Vivek Karwa, a Certified Financial Planner, Stock Market, Mutual Funds & Insurance
							Adviser.
						</h4>
						<hr />
						<h3>How the event goes:</h3>
						<ul>
							<li>
								<h4>The event will be conducted in a series of two slots</h4>
							</li>
							<li>
								<h4>Forenoon : Workshop with the Experts</h4>
							</li>
							<li>
								<h4>Afternoon : Real time Stock Market Experience (Competition)</h4>
							</li>
							<h3>Slot 1</h3>
							<h4>
								A workshop conducted by the Mr Vivek Karwa who knows his way around the stock market, will share his
								experiences and views to the budding young minds of the institution who aspire to get into where money
								and luck go hand in hand.
							</h4>
							<h3>Slot 2</h3>
							<h4>
								To see how well they have understood the topics and things taught, a competition will be conducted among
								the participants. An online game, where a real time scenario will be given during a busy season and
								digital money will be used in the stock market. The participant who gains the highest stock during the
								time frame given to them, will be declared as the winner.
							</h4>
						</ul>
						<hr />
						<h3>Regsitration fees:</h3>
						<ul>
							<li>
								<h4>Rs.100</h4>
							</li>
						</ul>
						<hr />
						<h3>Time: </h3>
						<ul>
							<h4>
								<li>March 30th</li>
							</h4>
							<h4>
								<li>Prefered Morning 11am</li>
							</h4>
							<h4>
								<li>4-5 hours talk + event</li>
							</h4>
						</ul>
					</Row>
				</Container>
			</Container>
		);
	}
}

Epic.propTypes = {
	clicked_event: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
	return {
		clicked_event: state.clicked_event
	};
};

export default connect(mapStateToProps)(Epic);
