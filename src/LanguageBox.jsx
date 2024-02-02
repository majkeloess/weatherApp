import UnitedStates from "./weatherType/UnitedStates";
import Poland from "./weatherType/Poland";
import { useContext, useEffect } from "react";
import NewContext from "./NewContext";

export default function LanguageBox(props){

      const {language, setLanguage, status, setStatus} = useContext(NewContext);

      useEffect(() => {
                  function handleKeyDown(event){
                        if (event.key === 'ArrowRight') {
                              setLanguage('pl');
                              setStatus('input');
                        }
                        else if(event.key === 'ArrowLeft') {
                              setLanguage('en');
                              setStatus('input');
                        }
                };
    
            window.addEventListener('keydown', handleKeyDown);
    
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, []);



      return(
            <div>
                  <h2 className="text-3xl text-center m-10 font-medium">{props.lang == 'en' ? 'Choose your language:': 'Wybierz swój język: ' }</h2>
                  <div className="flex gap-10 items-center justify-center">
                        <button onClick={() => {
                              setLanguage('en');
                              setStatus('input');
                              }
                              }><UnitedStates /></button>
                        <button onClick={() => {
                              setLanguage('pl');
                              setStatus('input');
                              }}><Poland /></button>
                  </div>
            </div>
          );
}