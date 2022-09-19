import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/WorkerBig.css';

const WorkerBig = ({hideWorkerBigContainer, classname}) => {
		return(
			<div className={classname}>
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
			</div>
		)}
	

export default WorkerBig;