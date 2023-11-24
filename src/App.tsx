import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryList from "./Components/CountryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Country from "./Pages/Country";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/country/:countryId"
            element={<Country></Country>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
