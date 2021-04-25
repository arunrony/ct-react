import API from "../../../utils/API";

export function signupRequest(payload) {
    return API.request({
        method: "post",
        url: "api/v2/signup/",
        data: payload
    })
}