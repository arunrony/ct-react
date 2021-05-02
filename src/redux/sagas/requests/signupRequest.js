import PublicAPI from "../../../utils/PublicAPI";

export function signupRequest(payload) {
    return PublicAPI.request({
        method: "post",
        url: "api/v3/auth/register/",
        data: payload
    })
}