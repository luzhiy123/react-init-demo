import request from '@/untils/request'
import type { TableAxiosResponse } from 'axios'
import { makeAutoObservable } from 'mobx'

export interface TableItem {
  key: string;
  name: string;
  age: number;
  city: string;
  created: string;
}
export class TabseService {
  data: TableItem[] = []
  total = 0

  constructor() {
    makeAutoObservable(this)
  }

  loadData = async () => {
    const {
      data: { data, total }
    } = await request<TableAxiosResponse<TableItem>>('/api/getList')
    this.data = data
    this.total = total
  }
}
