import {call, put} from "redux-saga/effects"
import {googleLoginRequest, loginRequest} from "../requests/loginRequest";
import {setLoginErrorResponse, setLoginSuccessResponse} from "../../slices/loginSlice";

export function* loginHandler(action) {
    try {
        const response = yield call(loginRequest, action.payload);
        console.log(response)
        const {data} = response
        yield put(setLoginSuccessResponse({...data}))
    } catch (error) {
        console.log(error.response.data)
        yield put(setLoginErrorResponse({...error.response.data}))
    }
}

export function* googleLoginHandler(action) {
    try {
        const response = yield call(googleLoginRequest, action.payload)
        console.log(response)
        yield put(setLoginSuccessResponse({...response.data}))
    } catch (error) {
        console.log(error)
        const data = {non_field_error: error.description}
        yield put(setLoginErrorResponse(data))
    }
}
