import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";

// import Login from "./components/Login";
import Error404 from "./components/ErrorPages";
import Error418 from "./components/ErrorPages/Error418";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HashRouter> */}
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="portfolio_react_2023" element={<App />} />
        <Route path="portfolio_react_2023/coffe" element={<Error418 />} />
      </Routes>
      {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
