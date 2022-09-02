import { Routes, Route, Outlet } from "react-router";
import Header from "./components/Header/Header";
import HomeWork from "./components/homework/homework";
import "./styles/main/main.css";
import LeftSideBar from "./components/Sidebar/sidebars";
import { useRecoilValue } from "recoil";
import { character } from "./Atoms/Atom";
import Home from "./components/Home/Home";

export default function HomeRoutes() {
  const Job = useRecoilValue(character);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <div className="main">
              <LeftSideBar />
              <Outlet />
              <div className="sidebar right_Sidebars"></div>
            </div>
          </>
        }
      >
        <Route path="/" element={<Home />}></Route>
        {Job.job.map((p, i) => (
          <Route
            key={i}
            path={"/" + p.name}
            element={<HomeWork {...p.Work} />}
          />
        ))}
      </Route>
    </Routes>
  );
}
