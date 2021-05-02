import PublicAPI from "../../../utils/PublicAPI";

export function passwordResetRequest(payload) {
    return PublicAPI.request({
        method: "post",
        url: "/api/v3/auth/password/reset/",
        data: payload
    })
}