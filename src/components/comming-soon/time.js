import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import './comming-soon.css';

class CountdownTime extends Component{

	componentWillMount(){
		this.interval = setInterval(()=>this.props.dispatch({type:'GETTIME'}),1000);
	}

	componentWillUnmount(){
		clearTimeout(this.interval);
	}

	render(){
		return(
			<Row className='count-down'>
				<Col xs ={3} sm={3} className='timer'>
					<p className='ticking-time'>{this.props.days}</p>
					<p className="timer-text">Days</p>
				</Col>
				<Col xs ={3} sm={3} className='timer'>
					<p className="ticking-time">{this.props.hours}</p>
					<p className="timer-text">Hours</p>
				</Col>
				<Col xs ={3} sm={3} className='timer'>
					<p className="ticking-time">{this.props.minutes}</p>
					<p className="timer-text">Minutes</p>
				</Col>
				<Col xs ={3} sm={3} className='timer'>
					<p className="ticking-time">{this.props.seconds}</p>
					<p className="timer-text">Seconds</p>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = function(state){
	return{
		days : state.days,
		hours : state.hours,
		minutes : state.minutes,
		seconds : state.seconds
	}
}

export default connect(mapStateToProps)(CountdownTime);