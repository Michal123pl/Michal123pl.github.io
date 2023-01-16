import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/ContactInfo.css';
import ContactForm from './ContactForm.js';

class ContactInfo extends React.Component {
	render() {
		return(
			<div className='contactinfo'>
				<section id='infosectionfirst'>
					<div>
						<p> Chcesz  o coś dopytać? </p>
						<p> Potrzebujesz specjalej usługi? </p>
						<p> Masz pomysł na współpracę? </p>
						<p> Odezwij się! </p>
					</div>
					
				</section>
				<section id='infosectionsecond'>
					<div>
						<p> 123-456-789 </p>
						<p> mail@mail.pl </p>
						<p> adres 00-000 </p>
						<p> ul. ulica 10/2 </p>
					</div>
					<div>
						<iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=wroc%C5%82aw%20kabaczkowa%207&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
					</div>
				</section>	
				<ContactForm />	
			</div>
	)}
}

export default ContactInfo;