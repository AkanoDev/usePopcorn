import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Star from "./StarRating";
import App from "./App";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Star />
    <Star
      message={["D Tier", "C Tier", "B Tier", "A Tier", "S Tier"]}
      maxRating={5}
      color="green"
    /> */}
  </React.StrictMode>
);
