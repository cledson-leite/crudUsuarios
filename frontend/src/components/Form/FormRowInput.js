import React from 'react'
import FormInput from './FormInput'

function FormRowInput(props) {
    return (
        <div className = 'col-12 col-md-6'>
            <FormInput  {...props} name = 'name' label = 'Nome' value = {props.valueName}/>
            <FormInput  {...props} name = 'email' label = 'Email'/>
        </div>
    )
}

export default FormRowInput
