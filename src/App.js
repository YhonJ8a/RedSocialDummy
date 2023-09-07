import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./componets/inicio.js";
import Login from "./componets/login.js";
import "./App.css";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Inicio />} />
            </Routes>
        </div>
    );
}

export default App;
