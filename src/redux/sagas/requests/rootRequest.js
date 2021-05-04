import PrivateAPI from "../../../utils/PrivateAPI";

const PrivateRequestBase = (method, url, data) => {
  return PrivateAPI.request({
        method,
        url,
        data
    })
}

export default PrivateRequestBase