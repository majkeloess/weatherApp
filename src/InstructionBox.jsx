import Escape from "./weatherType/Escape";
import Arrows from "./weatherType/Arrows";

export default function InstructionBox(props){
      return (
            <div className="xs:hidden">
                  {props.lang == 'en' ?
                  <>
                        <p className="mt-20 mb-2 text-center text-2xl font-medium">You can use your keyboard!</p>
                        <ul className="flex flex-col items-center justify-center">
                              <li className="flex flex-row items-center gap-4"><Arrows /><p>Use <span className="font-bold">arrows</span> to choose the language</p></li>
                              <li className="flex flex-row items-center gap-4"><Escape /><p>Use <span className="font-bold">escape</span> to go back</p></li>
                        </ul>
                  </> 
                  :
                  <>
                        <p className="mt-20 mb-2 text-center text-2xl font-medium">Możesz używać klawiatury!</p>
                        <ul className="flex flex-col items-center justify-center">
                              <li className="flex flex-row items-center gap-4"><Arrows /><p>Kliknij <span className="font-bold">strzałki</span>, żeby wybrać język </p></li>
                              <li className="flex flex-row items-center gap-4"><Escape /><p>Użyj przycisku <span className="font-bold">escape</span> aby wrócić do tyłu</p></li>
                        </ul>
                  </>
                  }           
            </div>
      );
}