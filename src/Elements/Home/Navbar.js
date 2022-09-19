import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/Navbar.css';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
	render() {
		return(
			<div className="Navbar">
				<div className="Navlogo">
					<img width="150" heigth="150" src={require("../../Images/logomin.png")}/>
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
