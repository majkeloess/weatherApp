import UnitedStates from "./weatherType/UnitedStates";
import Poland from "./weatherType/Poland";
import { useContext, useEffect } from "react";
import NewContext from "./NewContext";
import { motion } from "framer-motion";
export default function LanguageBox(props) {
  const { language, setLanguage, status, setStatus } = useContext(NewContext);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") {
        setLanguage("pl");
        setStatus("input");
      } else if (event.key === "ArrowLeft") {
        setLanguage("en");
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
    >
      <h2 className="text-3xl xs:text-2xl text-center m-10 font-medium">
        {props.lang == "en" ? "Choose your language:" : "Wybierz swój język: "}
      </h2>
      <div className="flex gap-10 xs:gap-7 items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setLanguage("en");
            setStatus("input");
          }}
        >
          <UnitedStates />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setLanguage("pl");
            setStatus("input");
          }}
        >
          <Poland />
        </motion.button>
      </div>
    </motion.div>
  );
}
