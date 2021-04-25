import API from "../../../utils/API";

export function loginRequest(payload) {
    return API.request({
        method: "post",
        url: "api/v2/login/",
        data: payload
    })
}