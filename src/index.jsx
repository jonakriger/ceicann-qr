// Import React
import React from "react";

// Import React DOM
import ReactDOM from "react-dom/client";

// Import Components
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// Init Function
const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);

// Init Service Worker
serviceWorkerRegistration.unregister();

// Init Web Vitals
reportWebVitals();
