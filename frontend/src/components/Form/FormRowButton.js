import React from 'react'
import FormButton from './FormButton'

function FormRowButton(props) {
    return (
        <div className = 'col-12 d-flex justify-content-end'>
              <FormButton {...props} className = 'btn btn-primary' title = 'Salvar' onClick = {props.salvar}/>
              <FormButton {...props} className = 'btn btn-secondary' title = 'Cancelar' onClick = {props.cancelar}/>
        </div>
    )
}

export default FormRowButton
