import React from 'react'
import Main from '../../layout/Main'

function Home() {
    return (
        <Main icon = 'home' title = 'Início'
            subtitle = 'Estudo de Caso: Cadastro de Usuário'>
                <div className = 'display-4'>Bem Vindo</div>
                <hr />
                <p className = 'mb-0'>
                    Sistema para exemplificar a construção do Cadastro
                </p>
        </Main>
    )
}

export default Home
