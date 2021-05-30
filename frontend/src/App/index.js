import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import React from 'react'
import { BrowserRouter } from "react-router-dom";

import Logo from "../layout/Logo";
import Nav from "../layout/Nav";
import Router from "../Router";
import Footer from "../layout/Footer";



function App() {
    return (
        <BrowserRouter>
            <div className = 'app'>
                <Logo />
                <Nav />
                <Router />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App