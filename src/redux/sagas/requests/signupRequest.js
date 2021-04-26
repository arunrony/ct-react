import API from "../../../utils/API";

export function signupRequest(payload) {
    return API.request({
        method: "post",
        url: "api/v3/auth/register/",
        data: payload
    })
}