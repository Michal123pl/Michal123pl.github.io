import React from 'react';
import ReactDOM from 'react-dom/client';
import '../PagesStyles/PriceList.css';
import PriceHeader from '../Elements/Pricelist/PriceHeader.js';
import PList from '../Elements/Pricelist/PList.js';


class PriceList extends React.Component {
	render() {
		return(
			<section className='Pricelist'>
				<PriceHeader />
				<PList />
			</section>
	
	)}

}

export default PriceList;