import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar/Navbar";

const AppWithRouter = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
