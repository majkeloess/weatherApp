import Humidity from "./weatherType/Humidity";
import Pressure from "./weatherType/Pressure";
import Drizzle from "./weatherType/Drizzle";
import Rain from "./weatherType/Rain"
import Snow from "./weatherType/Snow"
import Mist from "./weatherType/Mist";
import Clear from "./weatherType/Clear"
import Cloud from "./weatherType/Cloud"
import Thunderstorm from "./weatherType/Thunderstorm";
import Wind from "./weatherType/Wind";
import NewContext from "./NewContext";
import { useContext } from "react";

export default function WeatherBox(props) { 
      const {status, setStatus, weatherData, setWeatherData} = useContext(NewContext);
      let image; /// [Thunderstorm, Drizzle, Rain, Snow , same for(Mist, Smoke, Haze, Dust, Fog, Sand, Squall, Tornado), Clear, Clouds]
      if (weatherData.type == 'Thunderstorm') {
            image = <Thunderstorm />;
      }
      else if (weatherData.type == 'Drizzle'){
            image = <Drizzle />;
      }
      else if (weatherData.type == 'Rain'){
            image = <Rain />
      }
      else if (weatherData.type == 'Snow'){
            image = <Snow />
      }
      else if (weatherData.type == 'Mist'){
            image = <Mist />
      }
      else if (weatherData.type == 'Clear'){
            image = <Clear />;
      }
      else if (weatherData.type == 'Clouds'){
            image = <Cloud />;
      }


      return(
            <div className="flex flex-col justify-center items-center">
                  <h1 className="m-2 text-3xl font-medium">{weatherData.city}, {weatherData.country}</h1>
                  <ul className="flex flex-row items-center gap-6 m-4">
                        <li>{image}</li>
                        <li className="text-5xl font-medium">{weatherData.temp}°C</li>
                  </ul>
                  <ul className="flex flex-row gap-10 m-4">
                        <li><Pressure /><p>{weatherData.pressure} hPa</p></li>
                        <li><Wind />{weatherData.wind} ms</li>
                        <li><Humidity />{weatherData.humidity} %</li>
                  </ul>
                  <p className="text-2xl">{weatherData.description}</p>
                  <button className="fx-5 py-1.5 px-5 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl text-sm shadow-xl" onClick={() => setStatus('input')}>Check weather for other city!</button>
            </div>
      )
}