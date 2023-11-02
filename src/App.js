import "./App.css";
import catogoryApi from "./api/categorys";

import React, { useEffect } from "react";
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

  return <div className="App">hi</div>;
}

export default App;
