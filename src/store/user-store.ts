import request from '@/untils/request'
import type { ExAxiosResponse } from 'axios'
import { makeAutoObservable } from 'mobx'
import { redirect } from 'react-router-dom'

export type CurrentUser = {
  cpwd?: boolean
  email?: string
  is_admin?: boolean
  name?: string
  phone?: string
  resources?: string[]
  key?: string
}

async function queryCurrent() {
  return request<ExAxiosResponse<CurrentUser>>(`/api/user/self`, {
    method: 'get'
  })
}
async function clearCookie() {
  return request<ExAxiosResponse<CurrentUser>>(`/api/user/logout`, {
    method: 'post'
  })
}

export default class UserStore {
  user: CurrentUser | null = null
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  loadUser = async () => {
    this.loading = true
    const {
      data: { data }
    } = await queryCurrent()
      .catch(() => {
        this.goLogin()
        return Promise.reject()
      })
      .finally(() => {
        this.loading = false
      })
    this.user = data
  }
  endLogout = () => {
    this.loading = true
    this.goLogin()
    clearCookie().finally(() => {
      this.loading = false
    })
  }
  goLogin = () => {
    redirect('/login')
  }
}
