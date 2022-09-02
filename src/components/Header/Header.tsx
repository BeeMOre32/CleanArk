import { Link } from "react-router-dom";
import "../../styles/header/header.css";

export default function Header() {
  return (
    <header>
      <div className="headerLogo">
        <span>CleanArk</span>
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
    </header>
  );
}
