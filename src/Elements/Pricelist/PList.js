import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/PList.css';


class PList extends React.Component {
	render() {
		return(
				<section className='List'>
				
					<table className='PricelistTable'>
					  <tr className='PricelistTableRow'>
					    <td>Strzyżenie - włosy krótkie</td>
					    <td className='innertable'>
						    <td>70 zł</td>
						    <td>30 min</td>
						</td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Strzyżenie - włosy długie</td>
					    <td className="innertable">
						    <td>80 zł</td>
						    <td>40 min</td>
					    </td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Skracanie brody</td>
					    <td className="innertable">
						    <td>70 zł</td>
						    <td>30 min</td>
						</td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Farbowanie włosów</td>
					    <td className="innertable">
						    <td>120 zł</td>
						    <td>120 min</td>
						</td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Repigmentacja</td>
					    <td className="innertable">
						    <td>90 zł</td>
						    <td>45 min</td>
						</td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Modelowanie brody</td>
					    <td className="innertable">
						    <td>80 zł</td>
						    <td>35 min</td>
						</td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Kuracja regenerująca</td>
					    <td className="innertable">
						    <td>110 zł</td>
						    <td>30 min</td>
						</td>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Pakiet Full</td>
					    <td className="innertable">
						    <td>350 zł</td>
						    <td>150 min</td>
						</td>
					  </tr>
					</table>
				
				</section>

	)}

}
export default PList;