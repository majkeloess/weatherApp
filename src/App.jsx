import { useState } from "react";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import WeatherBox from "./WeatherBox";
import LanguageBox from "./LanguageBox";
import NewContext from "./NewContext";

export default function App() {
      
      const [language, setLanguage] = useState('en'); //[en,pl]
      const [status, setStatus] = useState('choose'); //[choose, input, data]
      const [weatherData, setWeatherData] = useState(null);

      return (
            <NewContext.Provider value={{weatherData, setWeatherData,  language, setLanguage, status, setStatus}}>
                  <div className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 bg-auto h-screen w-screen flex flex-col align-middle">
                        <h1 className="flex justify-center text-6xl font-medium p-10">weatherApp</h1>
                              {status == 'choose' && <LanguageBox lang={language} />}
                              {status == 'input' && <SearchBox lang={language} />}
                              {status == 'data' && <WeatherBox lang={language}/>}
                        
                        <Footer />
                  </div>
            </NewContext.Provider>
      );
}