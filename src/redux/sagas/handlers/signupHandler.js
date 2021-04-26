import {call, put} from "redux-saga/effects";
import {signupRequest} from "../requests/signupRequest";
import {yellow} from "@material-ui/core/colors";
import {setSignupErrorResponse, setSignupSuccessResponse} from "../../slices/signupSlice";

export function* signupHandler(action) {
    try {
        const response = yield call(signupRequest, action.payload);
        console.log(response)
        yield put(setSignupSuccessResponse({...response.data}))
        // yield put(setUser({...data}))
    } catch (error) {
        console.log('Error console')
        yield put(setSignupErrorResponse({...error.response.data}))
    }
}