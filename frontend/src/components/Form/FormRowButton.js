import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormButton from './FormButton'
import { clear, saveRequest} from "../../Store/Actions"

export const FormRowButton = (props) => {
    return (
        <div className = 'col-12 d-flex justify-content-end'>
              <FormButton className = 'btn btn-primary m-2' title = 'Salvar' onClick = { () => props.saveRequest(props.user)}/>
              <FormButton className = 'btn btn-secondary m-2' title = 'Cancelar' onClick = {props.clear}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.crudUser.user
})

const mapDispatchToProps = dispatch => 
bindActionCreators({clear, saveRequest}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormRowButton)