import React, { Component } from 'react'

import Main from "../../layout/Main";
import { getAll, removeOne, update } from '../../services/Axios';

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
                Cadastro Usuários
            </Main>
        )
    }
}

export default UserCrud
