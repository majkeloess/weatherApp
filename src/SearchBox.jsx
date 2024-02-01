import { useState, useContext } from "react"
import NewContext from "./NewContext";
import { getData } from "./utils";

export default function SearchBox(props) { 
      const [city, setCity] = useState('');
      const {status, setStatus} = useContext(NewContext);

      async function handleSubmit(e){
            e.preventDefault();
            data = await getData(city, props.lang);
            setCity('')
            setStatus('data');
            console.log(data);
      }

      return(
            <div className="flex justify-center flex-row">
                  <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
                        <input className="bg-white/50 rounded-xl shadow-xl px-2 py-1 m-5" type="text" value={city} onChange={e => setCity(e.target.value)} />
                              <button className="fx-5 py-1.5 px-5 font-normal bg-blue-100 hover:bg-blue-200 hover:text-black text-black rounded-xl text-sm shadow-xl" type="submit">Check the weather!</button>
                       
                  </form>
            </div>
      )
}

