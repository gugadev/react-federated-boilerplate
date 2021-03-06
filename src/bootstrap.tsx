import React from "react";
import ReactDOM from "react-dom";

import { App } from "src/app";
import "src/assets/styles/variables.scss";

const injectionNode = document.getElementById("app");

ReactDOM.render(<App />, injectionNode);
