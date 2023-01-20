import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/ContactForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    fetch('http://localhost:8000/mail', {
    	method: 'POST',
    	headers: { 
    		'Content-Type': 'application/json',
    		'Accept': 'application/json'
    		 },
    	body: JSON.stringify({
    		name: state.name,
    		phone: state.phone,
    		email: state.email,
    		subject: state.subject,
    		message: state.message
    	})
    }).then( response => {
    	return response.json();
    })
    
  };
  const onInputChange = event => {
    const { name, value } = event.target;
    console.log(name + ' ' + value)

   if (name == "phone")  {					//Checking is proper sign in input "phone"
   	if (!isNaN(value)) {						//
   		console.log("true " + value)	//
   		setState({										//
   		...state,											//
   			[name]: value								//
   		})														//
   	}else {													//
   		console.log("not a number")		//
   	}}else{													//
   	setState({
   		...state,
   			[name]: value
   		})}
   };
	


	return (
		<form id='booking' onSubmit={sendEmail} autoComplete="off">
			<label name="title" id="bookingTitle">Napisz do nas!</label>
			<div id="name">
	          <input 
	          	required
	            type="text"
	            name="name"
	            value={state.name}
	            placeholder="Podaj imię *"
	            onChange={onInputChange}
	            maxLength="30"

	          />
	        </div>

	        <div id="phone">
	          <input 
	            type="tel"
	            name="phone"
	            value={state.phone}
	            placeholder="Wpisz swój numer: 123456789"
	            onChange={onInputChange}
	            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
	            maxLength="9"

	          />
	        </div>

	        <div id="mail">
	          <input 
	          	required
	            type="mail"
	            name="email"
	            value={state.email}
	            placeholder="Wpisz swój mail *"
	            onChange={onInputChange}
	          />
	        </div>

	        <div id="subject">
	          <input 
	          	required
	            type="text"
	            name="subject"
	            value={state.subject}
	            placeholder="Tytuł *"
	            onChange={onInputChange}
	            maxLength="50"
	          />
	        </div>

	        <div id="message">
	          <textarea
	          	required
	          	id="bookingTextArea"
	          	form="booking"
	          	maxLength="300" 
	            name="message"
	            value={state.message}
	            placeholder="Wiadomość *"
	            onChange={onInputChange}
	          />
	        </div>

	        <div id="bookingSubmit" >
	        	<button id="bookingSubmitButton"name="submit" type="submit">Wyślij</button>
	        </div>
		</form>
	);
}

export default ContactForm;