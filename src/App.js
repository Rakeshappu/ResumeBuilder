// App.js
import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
// import { useEffect } from "react";
// import {gapi} from 'gapi-script'
// import LoginButton from "./components/login";
// import LogoutButton from "./components/login";


// const clientId = '453773849620-ielhub36alcrocta0av375e4e98j2900.apps.googleusercontent.com';  // Replace with your Google Client ID




function App() {
  // useEffect(()=>{
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };
  //   gapi.load('client:auth2,start');
  // })  
  


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
    // <div className="App">
    //   <LoginButton/>
    //   <button>asdaaf</button>
    //   <LogoutButton/>
    // </div>
  );
}

export default App;
