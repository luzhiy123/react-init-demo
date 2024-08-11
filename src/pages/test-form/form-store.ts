import request from '@/untils/request'
import { message } from 'antd'
import { makeAutoObservable } from 'mobx'

export interface TestFormData {
  name: string
  age: number
  city: string
}
export class FormStore {
  constructor() {
    makeAutoObservable(this)
  }

  submit = async (data: TestFormData) => {
    await request('/api/form', {
      method: 'post',
      data: {
        data
      }
    }).then(() => {
      message.success('提交成功')
    })
  }
}
