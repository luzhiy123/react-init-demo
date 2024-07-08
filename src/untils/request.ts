import axios from 'axios'

const request = axios.create({})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  res => {
    // 处理自己的业务逻辑
    return res
  },
  error => {
    const message = ''
    if (error && error.response) {
      // TODO 统一错误处理
    }
    return Promise.reject(message)
  }
)
export default request
