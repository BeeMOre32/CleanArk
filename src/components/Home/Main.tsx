import { Outlet } from "react-router";
import Header from "../Header/Header";
import LeftSideBar from "../Sidebar/LeftSidebars";

export default function MainCompoenets() {
  return (
    <>
      <Header />
      <div className="main">
        <LeftSideBar />
        <Outlet />
      </div>
    </>
  );
}
