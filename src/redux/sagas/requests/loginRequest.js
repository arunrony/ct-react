import PublicAPI from "../../../utils/PublicAPI";

export function loginRequest(payload) {
    return PublicAPI.request({
        method: "post",
        url: "api/v3/auth/login/",
        data: payload
    })
}

export function googleLoginRequest(payload) {
    return PublicAPI.request({
        method: "post",
        url: "api/v3/auth/google-login/",
        data: payload
    })
}