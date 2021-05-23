import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'

function Header(props) {
    return (
        <header className='header d-sm-flex flex-column'>
            <h1 className='mt-3'>
                <i className={`fa fa-${props.icon}`} />{props.title}
            </h1>
            <p className = 'lead text-muted'>{props.subtitle}</p>
        </header>
    )
}
export default Header
