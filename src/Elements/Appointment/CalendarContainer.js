import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/CalendarContainer.css';

//Container with form to making an appointment. 
//For now it's hidden becouse it's needed to connect database and API wich will handle visits
//It's partially adapted to mobile devices
//version 0.1

class CalendarContainer extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() {
		return(
				<section className={this.props.classname}>
						<div className='barberchange'>
							<p>Wybrany barber: 'imie'</p>
							<button>Zmień barbera</button>
						</div>
						<div className='calendar'>
							<ul>
								<li>PN</li>
								<li>WT</li>
								<li>ŚR</li>
								<li>CZW</li>
								<li>PT</li>
								<li>SB</li>
								<li>ND</li>
							</ul>
						</div>
						<div className='calendarmain'>
							<div className='hours'>
								<table>
									<tr className='godziny'>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
										<td>09:00-10:00</td>
									</tr>
								</table>
							</div>
							<div className='summary'>
								<div>
									<h4>Łącznie:</h4>
									<div>
										<p>100zł</p>
										<p>1 godzina i 20 minut</p>
									</div>
								</div>
								<div>
									<form>
										<input type='text' placeholder='Podaj swoje imię' />
										<input type='tel' placeholder='Podaj swój numer telefonu' />
										<button id='summarubutton'>Umów wizytę</button>
									</form>
								</div>
							</div>
							<div className='services'>
								<table>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>
									<tr className='servicesrow'>
										<th>Strzyżenie</th>
										<tr className='servicescell'>
											<td>100zł</td>
											<td>1 godzina</td>
										</tr>
									</tr>

								</table>
							</div>
						</div>
				</section>
	)}}

export default CalendarContainer;