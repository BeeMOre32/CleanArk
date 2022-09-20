import { Link } from "react-router-dom";
import "../../styles/header/header.css";
import { useRecoilState } from "recoil";
import { DarkMode } from "../../Atoms/Atom";
import cn from "classnames";

export default function Header() {
  const [darkMode, setDarkMode] = useRecoilState(DarkMode);

  const onClickHandel = () =>
    setDarkMode((currVal: any) => {
      return !currVal;
    });

  return (
    <header className={cn(darkMode ? "dark_mode" : "")}>
      <div className="headerLogo">
        <span>CleanArk</span>
        <Link to="/">
          <span className={cn(darkMode ? "dark_mode" : "")}>Home</span>
        </Link>
      </div>
      <button onClick={onClickHandel}>Click me!</button>
      {darkMode ? <span>DarkMode on</span> : null}
    </header>
  );
}
