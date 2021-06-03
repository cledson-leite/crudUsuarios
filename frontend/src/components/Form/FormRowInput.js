import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import FormInput from './FormInput'
import { changeName, changeEmail} from "../../Store/Actions/index";

export const FormRowInput = (props) => {
    const { name, email} = props.user
    return (
        <div className = 'col-12 col-md-6'>
            <FormInput onChange = {props.changeName} label = 'Nome' value = {name}/>
            <FormInput onChange = {props.changeEmail} label = 'Email' value = {email}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.crudUser.user
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeName, changeEmail}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormRowInput)