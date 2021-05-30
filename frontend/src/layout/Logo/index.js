import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/MeuLogo.png'
import './style.css';

function Logo() {
    return (
        <aside className = 'logo'>
            <Link to = '/' className = 'logo'>
                <img src = {logo} alt = 'logo' />
            </Link>
        </aside>
    )
}

export default Logo
