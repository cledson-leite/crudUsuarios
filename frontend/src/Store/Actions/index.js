export const changeName = event =>({
    type: 'NAMECHANGED',
    payload: event.target.value
})

export const changeEmail = event =>({
    type: 'EMAILCHANGED',
    payload: event.target.value
})

export const clear = () => ({type: 'CLEARED'})

export const saveSuccess = () => {
    return {type: 'USERSAVESUCCESS'}
}

export const saveRequest = (user) => {
    return {
        type: 'USERSAVEREQUEST',
        payload: user
    }
}

export const saveFailure = () => {
    return {type: 'USERSAVEFAILURE'}
}

    