import "./App.css";
import catogoryApi from "./api/categorys";

import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Footer from "./components/Fotter/Footer";
import Layout from "./features/Layout/Layout";

function App() {
  useEffect(() => {
    const fetchCategory = async () => {
      const params = {
        _limit: 2,
      };
      const categogyList = await catogoryApi.getAll(params);
      console.log(categogyList);
    };
    fetchCategory();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/home" Component={Header} />
        <Route path="/product" Component={Layout} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
