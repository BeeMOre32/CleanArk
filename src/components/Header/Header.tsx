import { Link } from "react-router-dom";
import "../../styles/header/header.css";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Atoms/Atom";
import cn from "classnames";
import DarkModeBtn from "./DarkModeBtn";

export default function Header() {
  const darkMode = useRecoilValue(DarkMode);

  return (
    <header className={cn(darkMode ? "dark_mode" : "")}>
      <div className="headerLogo">
        <span>CleanArk</span>
        <Link to="/">
          <span className={cn(darkMode ? "dark_mode" : "")}>Home</span>
        </Link>
        <Link to="/setting">Settings</Link>
      </div>

      <DarkModeBtn />
    </header>
  );
}
