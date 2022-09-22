import { AnimatePresence, motion, Variants } from "framer-motion";
import LightModeIcon from "../../Svgs/light-mode-icon.svg";
import DarkModeIcon from "../../Svgs/dark-mode-icon.svg";
import { useRecoilState } from "recoil";
import { DarkMode } from "../../Atoms/Atom";

const darkModeVar: Variants = {
  LightMode: {
    backgroundColor: "rgb(204,204,204)",
  },
  DarkMode: {
    backgroundColor: "rgb(126,126,126)",
  },
};

export default function DarkModeBtn() {
  const [darkMode, setDarkMode] = useRecoilState(DarkMode);

  const onDarkModeHandle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <motion.div
      data-isdarkmode={darkMode}
      variants={darkModeVar}
      animate={darkMode ? "DarkMode" : "LightMode"}
      className="setting_dark_mode"
      onClick={onDarkModeHandle}
    >
      <AnimatePresence>
        {darkMode ? (
          <motion.div layout>
            <motion.img alt="DarkMode_Icon" src={LightModeIcon} />
          </motion.div>
        ) : (
          <motion.div layout>
            <motion.img layout alt="DarkMode_Icon" src={DarkModeIcon} />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
