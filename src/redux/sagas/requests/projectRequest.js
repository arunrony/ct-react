import PrivateAPI from "../../../utils/PrivateAPI";

export function getProjectRequest() {
    return PrivateAPI.request({
        method: "get",
        url: "api/v2/project/"
    })
}

export function updateProjectNameRequest(payload) {
    const {projectId, data } = payload
    return PrivateAPI.request({
        method:"patch",
        url: `api/v2/project/${projectId}`,
        data:data
    })
}