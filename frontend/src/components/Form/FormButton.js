import React from 'react'

function FormButton(props) {
    return (
        <button 
            className = {props.className}
            onClick = { e => props.onClick(e) }
            >
            {props.title}
        </button>
    )
}

export default FormButton