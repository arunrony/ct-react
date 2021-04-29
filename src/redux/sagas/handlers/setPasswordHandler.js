import {call, put} from "redux-saga/effects";
import {setPasswordRequest} from "../requests/setPasswordRequest";
import {setPasswordErrorAction, setPasswordSuccessAction} from "../../slices/setPasswordSlice";

export function* setPasswordHandler(action) {
    try {
        const response = yield call(setPasswordRequest, action.payload)
        console.log(response)
        yield put(setPasswordSuccessAction())
    } catch (error) {
        console.log(error)
        yield put(setPasswordErrorAction({...error.response.data}))
    }
}