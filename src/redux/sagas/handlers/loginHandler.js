import {call, put} from "redux-saga/effects"
import {loginRequest} from "../requests/loginRequest";
import {setUser} from "../../slices/loginSlice";

export function* loginHandler(action) {
    try {
        const response = yield call(loginRequest, action.payload);
        console.log(response)
        const {data} = response
        yield put(setUser({...data}))
    } catch (error) {
        console.log('Error console')
        console.log(error)
    }
}