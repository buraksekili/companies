import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    input: {
      weight: 400,
      padding: "6px",
    },
  },
  button: {
    border: {
      radius: "8px",
    },
  },
  formField: {
    label: {
      color: "dark-3",
      size: "medium",
      margin: { vertical: "0", bottom: "small", horizontal: "0" },
      weight: 500,
    },
    border: {
      color: "none",
    },
    margin: { bottom: "0", horizontal: "0", top: "medium" },
    padding: "small",
  },
};

ReactDOM.render(
  <Grommet theme={theme} full themeMode="dark">
    <App />
  </Grommet>,
  document.getElementById("root")
);
