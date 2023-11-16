import "./App.css";

import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Footer from "./components/Fotter/Footer";
import Layout from "./features/Layout/Layout";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/home" Component={Header} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/product" Component={Layout} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
