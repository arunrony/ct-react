import {call, put} from "redux-saga/effects";
import {passwordResetRequest} from "../requests/passwordResetRequest";
import {setpasswordResetErrorAction, setpasswordResetSuccessAction} from "../../slices/passwordResetSlice";

export function* passwordResetHandler(action) {
    try {
        const response = yield call(passwordResetRequest, action.payload);
        console.log(response)
        const {data} = response
        yield put(setpasswordResetSuccessAction({...data}))
    } catch (error) {
        console.log(error.response.data)
        yield put(setpasswordResetErrorAction({...error.response.data}))
    }
}