import "./App.css";
import catogoryApi from "./api/categorys";

import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" Component={Header} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </div>
  );
}

export default App;
