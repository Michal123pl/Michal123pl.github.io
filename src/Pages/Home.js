import React from 'react';
import ReactDOM from 'react-dom/client';
import '../PagesStyles/home.css';
import Navbar from '../Elements/Home/Navbar.js';
import Header from '../Elements/Home/Header.js';

class Home extends React.Component {
	render() {
		return(
				<div className="Home">
					<Navbar />
					<Header />
				</div>
	)}

}

export default Home;

