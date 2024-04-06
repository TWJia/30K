import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}