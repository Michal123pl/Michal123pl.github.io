import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/PList.css';


class PList extends React.Component {
	render() {
		return(
				<article className='List'>
					<table className='PricelistTable'>
					  <tr className='PricelistTableRow'>
					    <td>Strzyżenie - włosy krótkie</td>
					    <div className='innertable'>
						    <td>70 zł</td>
						    <td>30 min</td>
						</div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Strzyżenie - włosy długie</td>
					    <div className="innertable">
						    <td>80 zł</td>
						    <td>40 min</td>
					    </div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Skracanie brody</td>
					    <div className="innertable">
						    <td>70 zł</td>
						    <td>30 min</td>
						</div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Farbowanie włosów</td>
					    <div className="innertable">
						    <td>120 zł</td>
						    <td>120 min</td>
						</div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Repigmentacja</td>
					    <div className="innertable">
						    <td>90 zł</td>
						    <td>45 min</td>
						</div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Modelowanie brody</td>
					    <div className="innertable">
						    <td>80 zł</td>
						    <td>35 min</td>
						</div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Kuracja regenerująca</td>
					    <div className="innertable">
						    <td>110 zł</td>
						    <td>30 min</td>
						</div>
					  </tr>
					  <tr className='PricelistTableRow'>
					    <td>Pakiet Full</td>
					    <div className="innertable">
						    <td>350 zł</td>
						    <td>150 min</td>
						</div>
					  </tr>
					</table>
				</article>

	)}

}
export default PList;