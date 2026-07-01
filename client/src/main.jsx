import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
            duration: 4000,
            style: {
                background: "#0b1020",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.08)"
            }
        }}
    />

    <App />
</React.StrictMode>
);