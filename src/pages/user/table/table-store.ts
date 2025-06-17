import request from '@/untils/request'
import type { TableAxiosResponse } from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import type { UserItem } from '../interface/base'

export class TabseService {
  data: UserItem[] = []
  total = 0

  constructor() {
    makeAutoObservable(this)
  }

  loadData() {
    return request<TableAxiosResponse<UserItem>>('/api/getList').then(({ data }) => {
      runInAction(() => {
        this.data = data.data
        this.total = data.total
      })
    })
  }
}
