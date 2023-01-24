import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PagesStyles/Login.css';

const Login = () => {
	

	const [state, setState] = useState({
	login: '',
	password: ''
	});

	const login = event => {
	    event.preventDefault();
	    fetch('http://localhost:8000/login', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
				 },
			body: JSON.stringify({
				login: state.login,
				password: state.password
			})
		}).then( response => {
			return response.json();
		})    
  	};
  	const onInputChange = event => {
	    const { name, value } = event.target;
	    console.log(name + ' ' + value)
	   	setState({
	   		...state,
	   			[name]: value
	   	})
   	};
	
	return (
		<form id='login' onSubmit={login} autoComplete="off">
			<div id="user">
	          <input 
	          	required
	            type="text"
	            name="login"
	            value={state.login}
	            placeholder="Login"
	            onChange={onInputChange}
	            maxLength="20"

	          />
	        </div>
	        <div id="password">
	          <input 
	            type="password"
	            name="password"
	            value={state.password}
	            placeholder="Hasło"
	            onChange={onInputChange}
	            maxLength="20"
	          />
	        </div>
	        <div id="loginSubmit" >
	        	<button id="loginSubmitButton" name="submit" type="submit">Zaloguj</button>
	        </div>
		</form>
	);
}

export default Login;

// Dodać style i sam panel, 
//Dowiedzieć się jak zrobić przełączanie stron po adresie url
//