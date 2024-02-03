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
        <input
          autoFocus
          id="city-input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="text-4xl bg-blue-200 "
        />
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            <Check />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setStatus("choose")}
          >
            <Back />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
