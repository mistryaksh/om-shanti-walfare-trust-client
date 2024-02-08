import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Default } from "./constants";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById(Default.ROOT) as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
