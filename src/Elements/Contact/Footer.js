import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/Footer.css';


class Footer extends React.Component {
	render() {
		return(
			<div className='footer'>
				<section className='links'>
					<div><a href='#'>Kariera</a></div>
					<div><a href='#'>Cennik</a></div>
					<div><a href='#'>RODO</a></div>
					<div><a href='#'>Polityka prywatności</a></div>
				</section>

				<section className='social'>
					  <img src={require("../../Images/fbic.png")}/>
					  <img src={require("../../Images/instaic.png")}/>
					  <img src={require("../../Images/tiktokic.png")}/>
					  <img src={require("../../Images/linkedinic.png")}/>
					  
				</section>
			</div>
		
	)}
}

export default Footer;