// App.js
import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";




function App() {

  


  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/body"
            element={
              <ProtectedRoute>
                <Body />
              </ProtectedRoute>
            }
          />
          
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;
