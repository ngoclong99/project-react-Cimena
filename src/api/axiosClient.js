import axios from 'axios'
import { BaseURL } from '../util/setting/config'
import StorageKeys from '../util/setting/storage-keys'
const axiosClient = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor ( áp dụng chung cho tất cả request )
axiosClient.interceptors.request.use(
  async (config) => {
    const customHeaders = {}
    const accessToken = 'Bearer ' + localStorage.getItem(StorageKeys.TOKEN)
    if (accessToken) {
      customHeaders.Authorization = accessToken
    }
    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers // but you can override for some requests
      }
    }
  },
  async (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosClient
