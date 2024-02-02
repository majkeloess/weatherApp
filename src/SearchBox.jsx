import {useEffect, useState, useContext } from "react"
import NewContext from "./NewContext";
import { getData } from "./utils";
import Back from "./weatherType/GoBack";
import { motion } from "framer-motion";

export default function SearchBox(props) { 
      const [city, setCity] = useState('');
      const [error, setError] = useState('');
      const {weatherData, setWeatherData, setStatus} = useContext(NewContext);

      useEffect(() => {
            function handleKeyDown(event) {
                if (event.key === 'Escape') {
                    setStatus('choose');
                }
            };
    
            window.addEventListener('keydown', handleKeyDown);
    
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, []);


      async function handleSubmit(e){
            e.preventDefault();
            if(!city){
                  return null;
            }
            const data = await getData(city, props.lang);
            if(data.cod == 200){
            setWeatherData(data);
            setCity('');
            setError('');
            setStatus('data');
            }
            else{
                  let message = props.lang == 'en' ? "Wrong city, try again!": "Złe miasto, spróbuj jeszcze raz!"
                  setError(message);
            }
      }

      return(
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex justify-center flex-row m-10">
                  <form name="weatherSearch" className='flex flex-col items-start justify-center' onSubmit={handleSubmit}>
                        <label htmlFor="city-input" className="text-xl xs:text-lg">{props.lang == 'en' ? 'Enter City:' : 'Wprowadź Miasto:'}</label>
                        <input autoFocus id="city-input" className="bg-white/50 rounded-xl shadow-xl text-2xl xs:text-lg py-1 mt-2 px-14 xs:px-12" type="text" value={city} onChange={e => setCity(e.target.value)} />
                        <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className="mt-4 xs:mt-2 ">{error}</motion.p>
                        <div className="flex flex-row gap-8 m-12">
                              <motion.button     
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
    className="text-xl xs:text-lg px-10 xs:px-2 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl  shadow-xl" type="submit">{props.lang == 'en' ? 'Check the weather': 'Sprawdź pogodę'}</motion.button>
                              <motion.button  
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                              onClick={() => setStatus('choose')}><Back /></motion.button>
                        </div>
                  </form>
                  
            </motion.div>
      );
}
