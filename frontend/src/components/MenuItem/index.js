import React from 'react'
import { Link } from "react-router-dom";

function MenuItem(props) {
    return (
        <Link to ={props.href} className = 'menu-item' >
            <i className = {`fa fa-${props.icon}`} /> {props.title}
        </Link>
    )
}
export default MenuItem
