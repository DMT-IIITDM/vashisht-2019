import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './homepage.css';

class Teaser extends Component{
	render(){
   	return(
			<Container>
				<Row className='teaser'>
					<Col>
						<p>TEASER</p>
						<h2>Comming soon..</h2>
					</Col>
				</Row>
			</Container>
   	);
	}
}

export default Teaser;