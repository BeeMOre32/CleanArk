import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideBar from "../Sidebar/sidebars";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Atoms/Atom";
import cn from "classnames";

export default function MainComponents() {
  const darkMode = useRecoilValue(DarkMode);
  return (
    <>
      <Header />
      <div className={cn("main", darkMode ? "dark_mode" : "")}>
        <LeftSideBar />
        <Outlet />
      </div>
    </>
  );
}
