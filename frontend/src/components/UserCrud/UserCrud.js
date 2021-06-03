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

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user }) 
    } 
    
    getUpdateList(user, add = true) {
        const list = this.state.list.filter( u => u.id !== user.id)
        if (add) list.unshift(user)
        this.setState({ list }) 
    }
    clear() {
        this.setState({user: initialState.user}) 
    } 

    load(user) {
        this.setState({user}) 
    } 

    async save() {
        const user = this.state.user
        const resp = await update(user)
        const list = this.getUpdateList(resp) 
        this.setState({user: initialState, list}) 
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
