import { call, put, all, takeLatest } from "redux-saga/effects";
import { register } from "../../services/Axios";
import { clear, saveFailure, saveSuccess } from "../Actions";

function* saveRequest(action) {
    const user = action.payload
    try {
        yield call(register, user)
        yield put(saveSuccess())
        yield put(clear())
    } catch (error) {
        yield put(saveFailure())
    }
    
}

export default  all([takeLatest('USERSAVEREQUEST', saveRequest) ]);