import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
const woje = [
  "podlaskie",
  "warmińsko - mazurskie",
  "pomorskie",
  "zachodnio - pomorskie",
  "lubuskie",
  "wielkopolskie",
  "łódzkie",
  "kujawsko - pomorskie",
  "mazowieckie",
  "lubelskie",
  "świętokrzyskie",
  "podkarpackie",
  "małopolskie",
  "śląskie",
  "opolskie",
  "dolnośląskie" 
];
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App items={woje} />
  </React.StrictMode>,
  rootElement
);
