import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Normalize />
    <App />
  </>,
  rootElement
);
