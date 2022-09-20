import { Routes, Route } from "react-router-dom";
import HomeWork from "./components/homework/homework";
import "./styles/main/main.css";
import Home from "./components/Home/Home";
import MainComponents from "./components/Home/Main";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainComponents />}>
        <Route path="/" element={<Home />} />
        <Route path={"/:id"} element={<HomeWork />} />
      </Route>
    </Routes>
  );
}
