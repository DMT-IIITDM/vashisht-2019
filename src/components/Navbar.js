import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import logo from '../resources/homepage/Vashisht top text@2x.png';
import '../styles/navbar.css';
import ham from '../resources/mobile/Ham.png';
import close from '../resources/mobile/close.png';

const fbAddress= 'https://www.facebook.com/vashishtthetechfest/';
const instaAddress= 'https://www.instagram.com/vashisht_techfest/?hl=en' ;
const googleDocsAddress = 'https://docs.google.com/document/d/1DiTOZ2XBqk0ww0upVVYZk_roZa9Nh7wcnBQRpFgrFHU/edit';

class Navbar extends Component{
	constructor(){
		super();
		this.handleMenu = this.handleMenu.bind(this);
	};

	handleMenu(e){
		e.preventDefault();
		let ham_icon = document.getElementsByClassName('nav-header');
		ham_icon[0].classList.toggle('active');
		document.getElementsByClassName('side-header')[0].classList.toggle('active');
	};

	render(){
		return(
			<div className='side-header active'>
				<div className='hamburger'>
					<img src={ham} alt='hamburger icon' onClick={this.handleMenu}/>
				</div>
				<Container className='nav-header active backg'>
					<Row className='nav-header-row '>
						<Col sm={3} className='main-head'>
							<div>
								<NavLink to='/'><img src={logo} className="upper-image" alt='vashisht logo'/></NavLink>
								<img src={close} className='close'alt='close button' onClick={this.handleMenu}/>
							</div>
						</Col>
						<Col sm={6} className='navbar'>
							<span onClick={this.handleMenu}><NavLink to='/'><p>HOME</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/events'><p>EVENTS</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/talks'><p>TALKS</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/team'><p>TEAM</p></NavLink></span>
							<span onClick={this.handleMenu}><NavLink to='/sponsors'><p>SPONSORS</p></NavLink></span>
							<span><a href={googleDocsAddress} target="_blank" rel="noopener noreferrer"><p>PAPER PRESENTATION</p></a></span>
							<span onClick={this.handleMenu}><NavLink to='/register'><p>REGISTER</p></NavLink></span>
						</Col>
						<Col sm={3} className='social-col'>
							<div className='social-icons'>
								<a href={instaAddress} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x" /></a>
								<a href={fbAddress} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x" /></a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Navbar;
