import axios from 'axios'
import Render from './Render'

export default async (city, position) => {
  try{
var res = await axios.get(GetApiLink(city, position));
Render(true, res.data.data)
 }  catch (error) {
  Render(false, error.data)
  }
}

function GetApiLink(city, position){

  const Token = process.env.TOKEN;
    if (city != undefined) {
        return process.env.APILINK + `${city}/?token=${Token}`
    } else {

    if (position == undefined) {
      throw "Position is not defined"
    }
return process.env.APILINK + `geo:${position.latitude};${position.longitude}/?token=${Token}`
  }
}
