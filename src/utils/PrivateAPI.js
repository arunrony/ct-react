import axios from "axios";

const PrivateAPI = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

PrivateAPI.defaults.headers.Authorization = `Token ${localStorage.getItem("token")}`

export default PrivateAPI