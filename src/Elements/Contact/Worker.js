import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/Worker.css';



class Worker extends React.Component {
	render() {
		return(
			<article className='worker'>
				<p>
					An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.
				</p>
				<div className='workername'>
					<div>Imie</div>
					<img className='workerimg' src={require("../../Images/barbergirl2.jpeg")}/>
				</div>
			</article>
	)}
}

export default Worker;