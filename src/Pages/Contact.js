import React from 'react';
import ReactDOM from 'react-dom/client';
import '../PagesStyles/Contact.css';
import ContactHeader from '../Elements/Contact/ContactHeader.js';
import ContactInfo from '../Elements/Contact/ContactInfo.js';
import Footer from '../Elements/Contact/Footer.js';
import WorkerBig from '../Elements/Contact/WorkerBig.js';
import { useState } from 'react';


class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			classname: 'WorkerBigHide'
		}
	}

	render() {
		const showWorkerBigContainer = (event) => {
			const WorkerBigShow = 'WorkerBigShow';
			console.log('k')
			return(this.setState({classname: WorkerBigShow}));
	}
	const hideWorkerBigContainer = (event) => {
			const WorkerBigHide = 'WorkerBigHide';
			console.log('k')
			return(this.setState({classname: WorkerBigHide}));
	}
		return(
			<div className='contact'>
				<ContactHeader showWorkerBigContainer={showWorkerBigContainer}/>
				<WorkerBig classname = {this.state.classname} hideWorkerBigContainer={hideWorkerBigContainer}/>
				<ContactInfo />
				<Footer />
			</div>
			

	)}

}

export default Contact;