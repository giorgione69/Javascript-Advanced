import Aqi from './Aqi'

export default (find, data) => {
  if (find) {
    var dataValue =
`<div class="col-md-6">
<label><i class="fas fa-map-marker-alt"></i> Stazione di:</label>
<h2>${data.city.name}</h2>
<label>Air Quality Index (AQI)</label>
${Aqi(data.aqi)}
  </div>
<div class="col-md-6">
<label><i class="fas fa-tachometer-alt"></i> Valori rilevati</label>
<table class="table">
  <tbody>
  <tr>
<th scope="row">pm2.5<label>Polveri sottili</label></th>
<td>${((data.iaqi?.pm25?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm25?.v)}</td>
  </tr>
<tr>
<th scope="row">pm10<label>Particolato</label></th>
<td>${((data.iaqi?.pm10?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm10?.v)}</td>
  </tr>
<tr>
<th scope="row">o3<label>Ozono</label></th>
<td>${((data.iaqi?.o3?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm25?.v)}</td>
  </tr>
<tr>
<th scope="row">CO<label>Monossido di carbonio</label></th>
<td colspan="2">${((data.iaqi?.co?.v == undefined) ? "Dato non rilevato" : data.iaqi?.co?.v)}</td>
  </tr>
<tr>
<th scope="row">No2<label>Biossido di azoto</label></th>
<td colspan="2">${((data.iaqi?.no2?.v == undefined) ? "Dato non rilevato" : data.iaqi?.no2?.v)}</td>
  </tr>
</tbody>
</table>
</div>

`;


document.getElementById("data-value").innerHTML = dataValue;
document.getElementById("data-row").scrollIntoView();
  } else {

document.getElementById("data-value").innerHTML = `
  <div class="not-found">
  <p>Oops..</p>
  <h3>Non ho trovato nessuna stazione in questa citta!</h3>
</div>`;

document.getElementById("data-row").scrollIntoView();
}

}
