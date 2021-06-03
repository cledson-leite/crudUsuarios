import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import FormButton from './FormButton'
import { clear, save } from "../../Store/Actions/index"

export const FormRowButton = (props) => {
    return (
        <div className = 'col-12 d-flex justify-content-end'>
              <FormButton className = 'btn btn-primary' title = 'Salvar' onClick = {props.save}/>
              <FormButton className = 'btn btn-secondary' title = 'Cancelar' onClick = {props.clear}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => 
bindActionCreators({ clear, save }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormRowButton)