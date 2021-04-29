import API from "../../../utils/API";

export function passwordResetRequest(payload) {
    return API.request({
        method: "post",
        url: "/api/v3/auth/password/reset/",
        data: payload
    })
}