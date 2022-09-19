import { Routes, Route } from "react-router";
import HomeWork from "./components/homework/homework";
import "./styles/main/main.css";

import Home from "./components/Home/Home";
import MainCompoenets from "./components/Home/Main";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainCompoenets />}>
        <Route path="/" element={<Home />} />
        <Route path={"/:id"} element={<HomeWork />} />
      </Route>
    </Routes>
  );
}
