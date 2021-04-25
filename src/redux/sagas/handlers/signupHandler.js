import {call} from "redux-saga/effects";
import {signupRequest} from "../requests/signupRequest";

export function* signupHandler(action) {
    try {
        const response = yield call(signupRequest, action.payload);
        console.log(response)
        const {data} = response
        console.log(data)
        // yield put(setUser({...data}))
    } catch (error) {
        console.log('Error console')
        console.log(error)
    }
}