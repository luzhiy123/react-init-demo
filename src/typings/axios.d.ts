import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    // 扩张自定义头
  }
  export type ExAxiosResponse<T = unknown> = {
    // 扩展默认返回
    data: T
    status: number
    msg?: string
  }
  export type TableAxiosResponse<T = unknown> = ExAxiosResponse<T[]> & {
    // 扩展列表默认返回
    total: number
    page: number
    size: number
  }
  export type ExAxiosPromise<T = unknown> = Promise<ExAxiosResponse<T>>
  export type TableAxiosPromise<T = unknown> = Promise<TableAxiosResponse<T>>
}
