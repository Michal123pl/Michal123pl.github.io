import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderAppointment from '../Elements/Appointment/HeaderAppointment.js';
import CalendarContainer from '../Elements/Appointment/CalendarContainer.js';
import '../PagesStyles/Appointment.css';
import { useState } from 'react';

class Appointment extends React.Component {	
	constructor(props) {
		super(props)
		this.state = {
			classname: 'calendarcontainer'
		}
	}
	render() {
		//Shows container with form to making an appointment.
		const showCalendarContainer = (event) => {
			const sec = 'two';
			return(this.setState({classname: sec}));
		}
		return(
			<section className='appointment'>
				<HeaderAppointment />
				<div className="appointmentbuttons">
					<button type="button" onClick={showCalendarContainer}>U nas ze zniżką!</button>
					<button type="button" >Booksy</button>
				</div>
				<CalendarContainer classname = {this.state.classname}/>
			</section>
	)}
}

export default Appointment;

