import { useState } from "react";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import WeatherBox from "./WeatherBox";
import LanguageBox from "./LanguageBox";
import NewContext from "./NewContext";
import InstructionBox from "./InstructionBox";
import { motion } from "framer-motion";

export default function App() {
  const [language, setLanguage] = useState("en"); //[en,pl]
  const [status, setStatus] = useState("choose"); //[choose, input, data]
  const [weatherData, setWeatherData] = useState(null);

  return (
    <NewContext.Provider
      value={{
        weatherData,
        setWeatherData,
        language,
        setLanguage,
        status,
        setStatus,
      }}
    >
      <div className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 bg-auto h-screen w-screen flex flex-col align-middle items-center xs:overflow-hidden">
        <img
          className="w-[500px] xs:w-[350px] mt-10 xs:mt-1"
          src="https://res.cloudinary.com/dq5exroyd/image/upload/v1706906594/logo_w6v4zt.png"
          alt=""
        />

        {status == "choose" && <LanguageBox lang={language} />}
        {status == "input" && <SearchBox lang={language} />}
        {status == "data" && <WeatherBox lang={language} />}

        {(status == "choose" || status == "input") && (
          <InstructionBox lang={language} />
        )}
        <Footer lang={language} />
      </div>
    </NewContext.Provider>
  );
}
