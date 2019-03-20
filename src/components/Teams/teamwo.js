import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row} from "react-bootstrap";

import "./team.css";
class Teamwo extends Component {
	state = {};
	render() {
		return (
			<div className="card">
				<img className="photo" alt="teams" src={this.props.image} />
				<div>
					<h1>{this.props.name}</h1>
					<h1>{this.props.number}</h1>
					<Row className="media1">
						<a href={this.props.github} target="_blank" rel="noopener noreferrer">
							<img className="media" alt="media" src={require("../../resources/commingSoon/github.png")} />
						</a>
						<a href={this.props.instagram} target="_blank" rel="noopener noreferrer">
							<img className="media" alt="media" src={require("../../resources/commingSoon/instagram.png")} />
						</a>
						<a href={this.props.linkedin} target="_blank" rel="noopener noreferrer">
							<img className="media" alt="media" src={require("../../resources/commingSoon/linkedin.png")} />
						</a>
					</Row>
				</div>
			</div>
		);
	}
}

Teamwo.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	github: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired,
	instagram: PropTypes.string.isRequired
};

export default Teamwo;
