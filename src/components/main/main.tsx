import "../../styles/main/main.css";
import LeftSideBar from "../Sidebar/sidebars";

export default function Main() {
  return (
    <div className="main">
      <LeftSideBar />
      <div className="homework"></div>
      <div className="sidebar right_Sidebars"></div>
    </div>
  );
}
