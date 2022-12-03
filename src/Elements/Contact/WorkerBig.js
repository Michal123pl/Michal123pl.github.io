import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/WorkerBig.css';

//Container with big image of specific worker and wider description.
//In future it'll take data from database.
//It's needed to add and connect with specific worker

const WorkerBig = ({hideWorkerBigContainer, classname}) => {
		return(
			<section className={classname}>
			<div className='exitbutton' onClick={hideWorkerBigContainer}>
				<div className='exitbutton1'></div>
				<div className='exitbutton2'></div>
			</div>
				
				<article className='WorkerBio'>
					An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.

					An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.

					An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.
				</article>

				<img className='WorkerBigImg' height="400" width="400" src={require("../../Images/barbergirl2.jpeg")} />
			</section>
		)}
	

export default WorkerBig;