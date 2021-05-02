import PublicAPI from "../../../utils/PublicAPI";

export function setPasswordRequest(payload) {
    return  PublicAPI.request({
        method: "post",
        url: "/api/v3/auth/password/reset/confirm/",
        data:payload
    })
}