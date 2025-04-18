import axios from "axios";
import {baseUrl} from '../api/api'

let axiosInstance=axios.create({
    baseURL:baseUrl
})

export default axiosInstance