import React from "react";
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./GlobalContext/UserContext";

function App() {

  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login/*" element={<Login/>}/>
          </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
