import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/Navbar.css';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import { useState } from 'react';

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			classname: 'navShow'
		}
	}
	render() {
		//Shows navigation
		const showNavigation = (event) => {
			const showNav = 'navShow';

			return(this.setState({classname: showNav}));
		}
		//Hides navigation
		const hideNavigation = (event) => {
			const hideNav = 'navHide';

			return(this.setState({classname: hideNav}));
		}
		return(
			<div className="Navbar">
				<div className="Navlogo">
					<img src={require("../../Images/logomin.png")}/>
				</div>

				<div className='burgerContainer'>
					<div className='burger topBun'></div>
					<div className='burger meat'></div>
					<div className='burger bottomBun'></div>
				</div>
				<nav>
					<Link activeClass="active" smooth spy to="appointment">
					Umów się
					</Link>
					<Link activeClass="active" smooth spy to="Pricelist">
					Cennik
					</Link>
					<Link activeClass="active" smooth spy to="products">
					Nasze produkty
					</Link>
					<Link activeClass="active" smooth spy to="contact">
					Kontakt
					</Link>
				</nav>
			</div>
	)}
}


export default Navbar;
