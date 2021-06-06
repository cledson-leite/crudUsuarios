import { all } from "redux-saga/effects";

import save from "./sagas";

export default function* rootSaga() {
    return yield all([save]) ;
}