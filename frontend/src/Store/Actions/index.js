import { register } from "../../services/Axios"

export const changeName = event =>({
    type: 'NAMECHANGED',
    payload: event.target.value
})

export const changeEmail = event =>({
    type: 'EMAILCHANGED',
    payload: event.target.value
})

export const clear = () => ({type: 'CLEARED'})

export const save = (name, email) => {
    return dispatch => {
        const user = {name, email}
        register(user)
            .then(dispatch(clear())) 
            .then(resp => dispatch({
                type: 'USERSAVED',
                payload: resp.data
            }))
    }
}
    