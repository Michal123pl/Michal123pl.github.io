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
			navclass: 'navHide',
			burgericonclass: 'burgerContainerShown',
			xiconclass: 'xIconHidden'
		}
	}
	render() {
		//Shows navigation and changes icon "burger" to "x"
		const showNavigation = (event) => {
			const showNav = 'navShow';
			const hideburger = 'burgerContainerHidden'
			const showx = 'xIconShown'

			return(this.setState({navclass: showNav, burgericonclass: hideburger, xiconclass: showx}));
		}
		//Hides navigation and changes icon "x" to "burger"
		const hideNavigation = (event) => {
			const hideNav = 'navHide';
			const showburger = 'burgerContainerShown'
			const hidex = 'xIconHidden'

			return(this.setState({navclass: hideNav, burgericonclass: showburger, xiconclass: hidex}));
		}
		return(
			<div className="Navbar">
				<div className="Navlogo">
					<img src={require("../../Images/logomin.png")}/>
				</div>

				<div className= {this.state.burgericonclass} onClick={showNavigation}>
					<div className='burger'></div>
					<div className='burger'></div>
					<div className='burger'></div>
				</div>

				<div className= {this.state.xiconclass} onClick={hideNavigation}>
					<div className='xBoth xFirst'></div>
					<div className='xBoth xSecond'></div>
				</div>
				<nav className= {this.state.navclass} >
					<Link activeClass="active" smooth spy to="appointment">
					Umów się
					</Link>
					<Link activeClass="active" smooth spy to="Pricelist">
					Cennik
					</Link>
					{/*<Link activeClass="active" smooth spy to="products">
					Nasze produkty
					</Link>*/}
					<Link activeClass="active" smooth spy to="contact">
					Kontakt
					</Link>
				</nav>
			</div>
	)}
}


export default Navbar;
