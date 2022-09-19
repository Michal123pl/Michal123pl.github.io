import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/ContactHeader.css';
import Worker from './Worker.js';
import {useState} from 'react';

const ContactHeader = ({showWorkerBigContainer}) => {


		return(
			<div className='contactheader'>
				<h3>Nasza załoga</h3>
				<div className='crew' >
					<div onClick={showWorkerBigContainer}>
						<Worker />
					</div>
					<div onClick={showWorkerBigContainer}>
						<Worker />
					</div>
					<div onClick={showWorkerBigContainer}>
						<Worker />
					</div>
				</div>
			</div>
	)}


export default ContactHeader;