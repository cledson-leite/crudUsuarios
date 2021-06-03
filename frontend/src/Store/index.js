import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/index";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer)

export default store