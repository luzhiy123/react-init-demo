import request from '@/untils/request'
import { message } from 'antd'
import { makeAutoObservable } from 'mobx'
import type { UserFormItem } from './interface'

export class FormStore {
  constructor() {
    makeAutoObservable(this)
  }

  submit = async (data: UserFormItem) => {
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
