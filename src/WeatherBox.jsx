import Humidity from "./weatherType/Humidity";
import Pressure from "./weatherType/Pressure";
import Thunderstorm from "./weatherType/Thunderstorm";
import Wind from "./weatherType/Wind";
import NewContext from "./NewContext";
import { useContext } from "react";

export default function WeatherBox(props) { 
      const {status, setStatus} = useContext(NewContext);
      
      return(
            <div className="flex flex-col justify-center items-center">
                  <h1 className="m-2 text-3xl font-medium">{data.city}, {data.country}</h1>
                  <ul className="flex flex-row items-center gap-6 m-4">
                        <li>[IMG]</li>
                        <li className="text-5xl font-medium">{data.temp}°C</li>
                  </ul>
                  <ul className="flex flex-row gap-10 m-4">
                        <li><Pressure /><p>{data.pressure} hPa</p></li>
                        <li><Wind />{data.wind} ms</li>
                        <li><Humidity />{data.humidity}</li>
                  </ul>
                  <p className="text-2xl">{data.description}</p>
                  <button className="fx-5 py-1.5 px-5 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl text-sm shadow-xl" onClick={() => setStatus('input')}>Check weather for other city!</button>
            </div>
      )
}