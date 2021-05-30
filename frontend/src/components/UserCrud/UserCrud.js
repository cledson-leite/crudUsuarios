import React, { Component } from 'react'

import Main from "../../layout/Main";

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
    render() {
        return (
            <Main {...headerProps}>
                Cadastro Usuários
            </Main>
        )
    }
}

export default UserCrud
