import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <Header />
    //   <Body />
    // </div>
  );
}

export default App;
