import axios from "axios";

const baseUrl = 'http://localhost:3001/users'

const getAll = async user => {
    const resp = await axios(baseUrl)
    return resp
}

const register = async user => {
    const resp = await axios.post(baseUrl, user)
    return resp
}

const removeOne = async user => {
    await axios.delete(`${baseUrl}/${user.id}`) 
}

export {getAll, register, removeOne}
