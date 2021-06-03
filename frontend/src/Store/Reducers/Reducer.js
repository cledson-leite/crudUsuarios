const initialState = {
    user: {name: '', email: ''},
    list: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NAMECHANGED':
            return {...state, user:{ name: action.payload }}
        
        case 'EMAILCHANGED':
            return {...state, user:{ email: action.payload }}
        
        case 'CLEARED':
            return {...state, user: {name: '', email: ''}}
        
        case 'USERSAVED':
            const list = 
                this.state.list.filter( u => u.id !== action.payload.id)
            list.unshift(action.payload)
            return {...state, list}
    
        default:
            return state
    }
}

export default Reducer