import request from '@/untils/request'
import type { TableAxiosResponse } from 'axios'
import { makeAutoObservable } from 'mobx'
import type { UserItem } from '../interface/base'

export class TabseService {
  data: UserItem[] = []
  total = 0

  constructor() {
    makeAutoObservable(this)
  }

  loadData = async () => {
    const {
      data: { data, total }
    } = await request<TableAxiosResponse<UserItem>>('/api/getList')
    this.data = data
    this.total = total
  }
}
