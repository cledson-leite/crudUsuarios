import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import React from 'react'

import Logo from "../layout/Logo";
import Nav from "../layout/Nav";
import Main from "../layout/Main";
import Footer from "../layout/Footer";



function App() {
    return (
        <div className = 'app'>
            <Logo />
            <Nav />
            <Main icon = 'home' title = 'Início'
                subtitle = 'Estudo de Caso: Cadastro de Usuário'/>
            <Footer />
        </div>
    )
}

export default App