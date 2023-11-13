import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
