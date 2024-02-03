import { useEffect, useState, useContext } from "react";
import NewContext from "./NewContext";
import { getData } from "./utils";
import Back from "./weatherType/GoBack";
import Check from "./weatherType/Check";
import { motion } from "framer-motion";

export default function SearchBox(props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const { weatherData, setWeatherData, setStatus } = useContext(NewContext);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setStatus("choose");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!city) {
      return null;
    }
    const data = await getData(city, props.lang);
    if (data.cod == 200) {
      setWeatherData(data);
      setCity("");
      setError("");
      setStatus("data");
    } else {
      let message =
        props.lang == "en"
          ? "Wrong city, try again!"
          : "Złe miasto, spróbuj jeszcze raz!";
      setError(message);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex justify-center flex-col m-10"
    >
      <form
        name="weatherSearch"
        className="flex flex-col items-start justify-center"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full min-w-[200px] h-11">
          <input
            autoFocus
            id="city-input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border-2 border-black  rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-2 placeholder-shown:border focus:border-2 border-t-black focus:border-t-transparent  focus:border-gray-900"
            placeholder=" "
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-black peer-focus:before:!border-gray-900 after:border-black peer-focus:after:!border-gray-900">
            {props.lang == "en" ? "City" : "Miasto"}
          </label>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="mt-4 xs:mt-2 "
        >
          {error}
        </motion.p>
        <div className="flex flex-row gap-8 justify-center align-middle items-center m-12">
          <motion.button
            className="fx-5 py-2 px-5 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl text-lg shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            {" "}
            {props.lang == "en" ? "Check" : "Sprawdź"}
          </motion.button>
          <motion.button
            className=" py-2 px-5 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl text-lg shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setStatus("choose")}
          >
            {" "}
            {props.lang == "en" ? "Back" : "Wróć"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
