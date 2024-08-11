import ProForm, { ProFormDigit, ProFormText } from '@ant-design/pro-form'
import { Form } from 'antd'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { FormStore } from './form-store'
import type { UserFormItem } from './interface'

const service = new FormStore()

function TablePage() {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const submit = (data: UserFormItem) => {
    return service.submit(data).then(() => {
      navigate('/table')
    })
  }

  return (
    <ProForm form={form} onFinish={submit}>
      <ProFormText
        label="姓名"
        name="name"
        rules={[
          {
            required: true
          }
        ]}
      />
      <ProFormDigit
        label="年龄"
        name="age"
        min={0}
        fieldProps={{
          step: 1
        }}
        rules={[
          {
            required: true
          }
        ]}
      />
      <ProFormText label="城市" name="city" />
    </ProForm>
  )
}

export default observer(TablePage)
