export default (aqi) => {
    var className = '';
    var description = '';
    if (aqi < 0) {
        className = 'unhealty';
        description = '//';
        aqi = '//'
} else if (aqi < 51) {
  className = 'good';
  description = 'Good';
} else if (aqi > 51 && aqi < 101) {
  className = 'moderate';
  description = 'Moderate';
} else if (aqi > 51 && aqi < 101) {
  className = 'moderate';
  description = 'Moderate';
} else if (aqi > 101 && aqi < 151) {
  className = 'unhealty-s';
  description = 'Unhealty for sensitive group';
} else if (aqi > 101 && aqi < 151) {
  className = 'unhealty-s';
  description = 'Unhealty for sensitive group';
} else if (aqi > 201 && aqi < 300) {
  className = 'very-unhealty';
  description = 'Very unhealty';
} else if (aqi > 301) {
  className = 'hazardous';
  description = 'Hazardous';
}

return ` <div class="aqi-card ${className}">
        <p id="aqi-aqi">${aqi}</p>
        </div>
        <p><i class="fas fa-smog"></i> ${description} air quality</p>`
}
