import React from 'react'

import Header from '../Header';

function Main(props) {
    return (
        <>
            <Header {...props} />
            <main className='content'>
                Conteúdo
            </main>
        </>
    )
}

export default Main;