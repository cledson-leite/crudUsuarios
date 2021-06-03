import { combineReducers } from "redux";

import Reducer from "./Reducer";

const rootReducer = combineReducers({
    crudUser: Reducer
})

export default rootReducer