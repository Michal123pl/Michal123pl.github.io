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
			<label name="title" id="bookingTitle">Napisz do nas!</label>
			<div id="name">
	          <input 
	            type="text"
	            name="name"
	            value={state.name}
	            placeholder="Podaj imię"
	            onChange={onInputChange}
	          />
	        </div>

	        <div id="phone">
	          <input 
	            type="tel"
	            name="phone"
	            value={state.phone}
	            placeholder="Wpisz swój numer"
	            onChange={onInputChange}
	          />
	        </div>

	        <div id="mail">
	          <input 
	            type="mail"
	            name="email"
	            value={state.email}
	            placeholder="Wpisz swój mail"
	            onChange={onInputChange}
	          />
	        </div>

	        <div id="subject">
	          <input 
	            type="subjcet"
	            name="text"
	            value={state.subject}
	            placeholder="Tytuł"
	            onChange={onInputChange}
	          />
	        </div>

	        <div id="message">
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

	        <div>
	        	<button type="submit">Wyślij</button>
	        </div>
		</form>
	);
}

export default ContactForm;