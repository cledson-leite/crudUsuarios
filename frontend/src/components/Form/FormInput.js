import React from 'react'

function FormInput(props) {
    return (
        <>
            <label>{props.label}</label>
            <input type = 'text' className = 'form-control'
                name = {props.name}
                value = {props.value}
                onChange = {e => props.onChange(e)}
                placeholder = {`Digite seu ${props.name} ...`}
            />
            
        </>
    )
}

export default FormInput