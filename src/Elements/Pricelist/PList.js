import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/PList.css';


class PList extends React.Component {
	render() {
		return(
				<article className='List'>
					<table>
					  <tr>
					    <td>Strzyżenie - włosy krótkie</td>
					    <td>70 zł</td>
					    <td>30 min</td>
					  </tr>
					  <tr>
					    <td>Strzyżenie - włosy długie</td>
					    <td>80 zł</td>
					    <td>40 min</td>
					  </tr>
					  <tr>
					    <td>Skracanie brody</td>
					    <td>70 zł</td>
					    <td>30 min</td>
					  </tr>
					  <tr>
					    <td>Farbowanie włosów</td>
					    <td>120 zł</td>
					    <td>120 min</td>
					  </tr>
					  <tr>
					    <td>Repigmentacja</td>
					    <td>90 zł</td>
					    <td>45 min</td>
					  </tr>
					  <tr>
					    <td>Modelowanie brody</td>
					    <td>80 zł</td>
					    <td>35 min</td>
					  </tr>
					  <tr>
					    <td>Kuracja regenerująca</td>
					    <td>110 zł</td>
					    <td>30 min</td>
					  </tr>
					  <tr>
					    <td>Pakiet Full</td>
					    <td>350 zł</td>
					    <td>150 min</td>
					  </tr>
					</table>
				</article>

	)}

}
export default PList;