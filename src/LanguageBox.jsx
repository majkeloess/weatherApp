import UnitedStates from "./weatherType/UnitedStates";
import Poland from "./weatherType/Poland";
import { useContext } from "react";
import NewContext from "./NewContext";

export default function LanguageBox(props){

      const {language, setLanguage, status, setStatus} = useContext(NewContext);

      return(
            <div>
                  <h2 className="text-2xl text-center m-10">{props.lang == 'en' ? 'Choose your language:': 'Wybierz swój język: ' }</h2>
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