import Humidity from "./weatherType/Humidity";
import Pressure from "./weatherType/Pressure";
import Drizzle from "./weatherType/Drizzle";
import Rain from "./weatherType/Rain";
import Snow from "./weatherType/Snow";
import Mist from "./weatherType/Mist";
import Clear from "./weatherType/Clear";
import Cloud from "./weatherType/Cloud";
import Thunderstorm from "./weatherType/Thunderstorm";
import Wind from "./weatherType/Wind";
import NewContext from "./NewContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

export default function WeatherBox(props) {
  const { status, setStatus, weatherData, setWeatherData } =
    useContext(NewContext);

  let image; /// [Thunderstorm, Drizzle, Rain, Snow , same for(Mist, Smoke, Haze, Dust, Fog, Sand, Squall, Tornado), Clear, Clouds]
  if (weatherData.type == "Thunderstorm") {
    image = <Thunderstorm />;
  } else if (weatherData.type == "Drizzle") {
    image = <Drizzle />;
  } else if (weatherData.type == "Rain") {
    image = <Rain />;
  } else if (weatherData.type == "Snow") {
    image = <Snow />;
  } else if (weatherData.type == "Mist") {
    image = <Mist />;
  } else if (weatherData.type == "Clear") {
    image = <Clear />;
  } else if (weatherData.type == "Clouds") {
    image = <Cloud />;
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setStatus("input");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex flex-col justify-center items-center"
    >
      <h1 className="m-2 xs:m-0 text-3xl font-medium">
        {weatherData.city}, {weatherData.country}
      </h1>
      <ul className="flex flex-row items-center gap-6 xs:m-2 m-4">
        <li>{image}</li>
        <li className="text-7xl xs:text-5xl font-medium">
          {weatherData.temp}°C
        </li>
      </ul>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "ease", duration: 3 }}
        className="text-4xl xs:text-3xl xs:mb-4 mb-8"
      >
        {weatherData.description}
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "ease", duration: 3 }}
        className="flex flex-row gap-10 m-4 xs:m-2"
      >
        <li className="flex flex-col align-middle justify-center items-center gap-3">
          <Pressure />
          <p className="text-2xl xs:text-xl font-medium">
            {weatherData.pressure} hPa
          </p>
        </li>
        <li className="flex flex-col align-middle justify-center items-center gap-3">
          <Wind />
          <p className="text-2xl xs:text-xl font-medium">
            {weatherData.wind} m/s
          </p>{" "}
        </li>
        <li className="flex flex-col align-middle justify-center items-center gap-3">
          <Humidity />
          <p className="text-2xl xs:text-xl font-medium">
            {weatherData.humidity} %
          </p>
        </li>
      </motion.ul>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fx-5 mt-10 py-2 px-5 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl text-lg shadow-xl"
        onClick={() => setStatus("input")}
      >
        {props.lang == "en"
          ? "Check weather for other city!"
          : "Sprawdź pogodę dla innego miasta!"}
      </motion.button>
    </motion.div>
  );
}
