import PrivateAPI from "../../../utils/PrivateAPI";
import PrivateRequestBase from "./rootRequest";
import {createGeoTIFFProjectHandler} from "../handlers/projectHandler";

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

export function deleteProjectRequest(payload) {
    const {projectId } = payload
    return PrivateAPI.request({
        method:"delete",
        url: `api/v2/project/delete/${projectId}/`,
    })
}

export function createRawProjectRequest(payload) {
    return PrivateAPI.request({
        method: "post",
        url: "api/v2/project/raw/create/",
        data: payload.formData
    })
}

export function uploadRawProjectImageRequest(payload) {
    return PrivateRequestBase("post", "api/v2/project/raw/upload/", payload.formData)
}

export function createGeoTIFFProjectHandlerRequest(payload) {
    return PrivateRequestBase("post", "api/v2/project/", payload.formData)
}