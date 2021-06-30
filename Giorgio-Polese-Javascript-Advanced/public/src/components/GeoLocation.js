import Search from './Search'

export default () => {
navigator.geolocation.getCurrentPosition(success, error, options);

var options = {
enableHighAccuracy: true,
timeout: 5000,
maximumAge: 0
};

function success(pos) {
  Search(undefined, pos.coords)
}
      
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
 throw err.message
 }
}
