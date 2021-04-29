import API from "../../../utils/API";

export function setPasswordRequest(payload) {
    return  API.request({
        method: "post",
        url: "/api/v3/auth/password/reset/confirm/",
        data:payload
    })
}