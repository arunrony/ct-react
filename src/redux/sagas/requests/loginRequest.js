import API from "../../../utils/API";

export function loginRequest(payload) {
    return API.request({
        method: "post",
        url: "api/v3/auth/login/",
        data: payload
    })
}

export function googleLoginRequest(payload) {
    return API.request({
        method: "post",
        url: "api/v3/auth/google-login/",
        data: payload
    })
}