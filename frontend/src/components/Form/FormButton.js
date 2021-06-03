import React from 'react'

function FormButton(props) {
    return (
        <button 
            className = {props.className}
            onClick = {props.onClick}
            >
            {props.title}
        </button>
    )
}

export default FormButton