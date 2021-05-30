import axios from "axios";

const baseUrl = 'http://localhost:3001/users'

const getAll = async user => {
    const resp = await axios(baseUrl)
    return resp.data
}

const update = async user => {
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
    const resp = await axios[method](url, user)
    return resp.data 
}

const removeOne = async user => {
    await axios.delete(`${baseUrl}/${user.id}`) 
}

export {getAll, update, removeOne}
