import React, { Component } from 'react'

import Main from "../../layout/Main";
import { getAll, removeOne, update } from '../../services/Axios';
import Form from '../Form';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e excluir'
}

const initialState = {
    user: {name: '', email: ''},
    list: []
}

export class UserCrud extends Component {
    state = {...initialState}
    
    async componentDidMount(){
        const resp = await getAll()
        this.setState({list: resp })
    }
    getUpdateList(user, add = true) {
        const list = this.state.list.filter( u => u.id !== user.id)
        list.unshift(user)
        this.setState({ list }) 
    } 

    load(user) {
        this.setState({user}) 
    }

    async remove(user) {
        await removeOne(user)
        const list = this.getUpdateList(user, false) 
        this.setState({ list }) 
    }


    render() {
        return (
            <Main {...headerProps}>
                <Form
                    onChange = {this.updateField}
                    valueName = {this.state.user.name}
                    valueEmail = {this.state.user.email}
                    salvar = {this.save}
                    cancelar = {this.clear}
                />
            </Main>
        )
    }
}

export default UserCrud
