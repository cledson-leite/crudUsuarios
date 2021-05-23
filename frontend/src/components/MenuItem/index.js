import React from 'react'
import './style.css';

function MenuItem(props) {
    return (
        <a className = 'menu-item' href ={props.href}>
            <i className = {`fa fa-${props.icon}`} /> {props.title}
        </a>
    )
}
export default MenuItem
