import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/ContactHeader.css';
import Worker from './Worker.js';
import {useState} from 'react';

//Bar with worker mini image and short description

const ContactHeader = ({showWorkerBigContainer}) => {

		return(
			<header className='contactheader'>
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
			</header>
	)}


export default ContactHeader;