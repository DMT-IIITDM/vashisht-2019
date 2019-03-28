import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./homepage.css";
import arrow from "../../resources/homepage/unnamed.png";
class Teaser extends Component {
	render() {
		return (
			<Container>
				<Row className="teaser">
					<Col>
						<p>TRAILER</p>
						<iframe
							className="y-link"
							src="https://www.youtube.com/embed/wD6XiiI8mF0"
							title="teaser"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						{/* <h2>Coming soon..</h2> */}
						<a className="logo4" href="#Home">
							<img src={arrow} alt="arrow down" />
						</a>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Teaser;
