import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
