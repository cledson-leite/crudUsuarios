import React from 'react'
import FormRowButton from './FormRowButton'
import FormRowInput from './FormRowInput'

function Form(props) {
    return (
        <>
            <FormRowInput {...props}/>
            <FormRowButton {...props}/>
        </>
    )
}

export default Form
