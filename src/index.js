import React from "react";
import ReactDOM from "react-dom";
import { SearchContextProvider } from "./contexts/Search";
import App from "./App";
import "antd/dist/antd.css";
import "./css/app.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

ReactDOM.render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>,
  document.getElementById("root")
);
