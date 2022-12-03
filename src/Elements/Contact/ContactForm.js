import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/ContactForm.css';
import { useState } from 'react';

const ContactForm = () => {

	const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

	const sendEmail = event => {
    event.preventDefault();

    console.log('We will fill this up shortly.');
    // code to trigger Sending email
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    console.log(name + ' ' + value)

    setState({
      ...state,
      [name]: value
    });
  };
	


	return (
		<form id='booking' onSubmit={sendEmail}>

			<div controlId="name">
	          <label>Imię</label>
	          <input 
	            type="text"
	            name="name"
	            value={state.name}
	            placeholder="Podaj imię"
	            onChange={onInputChange}
	          />
	        </div>

	        <div controlId="phone">
	          <label>Numer telefonu</label>
	          <input 
	            type="tel"
	            name="phone"
	            value={state.phone}
	            placeholder="Wpisz swój numer"
	            onChange={onInputChange}
	          />
	        </div>

	        <div controlId="mail">
	          <label>E-mail</label>
	          <input 
	            type="mail"
	            name="email"
	            value={state.email}
	            placeholder="Wpisz swój mail"
	            onChange={onInputChange}
	          />
	        </div>

	        <div controlId="subject">
	          <label>Tytuł</label>
	          <input 
	            type="subjcet"
	            name="text"
	            value={state.subject}
	            placeholder="Tytuł"
	            onChange={onInputChange}
	          />
	        </div>

	        <div controlId="message">
	          <label>Wiadomość</label>
	          <textarea
	          	id="bookingTextArea"
	          	form="booking"
	          	maxlength="300" 
	            name="message"
	            value={state.message}
	            placeholder="Wiadomość"
	            onChange={onInputChange}
	          />
	        </div>
		</form>
	);
}

export default ContactForm;