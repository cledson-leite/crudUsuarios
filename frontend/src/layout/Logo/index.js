import React from 'react'

import logo from '../../assets/MeuLogo.png'
import './style.css';

function Logo() {
    return (
        <aside className = 'logo'>
            <a href = '/' className = 'logo'>
                <img src = {logo} alt = 'logo' />
            </a>
        </aside>
    )
}

export default Logo
