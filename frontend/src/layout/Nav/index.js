import React from 'react'
import './style.css';
import MenuItem from '../../components/MenuItem'

function Nav() {
    return (
        <aside className = 'menu-area'>
            <MenuItem icon = 'home' title = 'Início' href = '/' />
            <MenuItem icon = 'users' title = 'Usuários' href = '/users' />
        </aside>
    )
}

export default Nav
