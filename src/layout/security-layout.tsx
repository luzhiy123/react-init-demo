import { ConfigProvider } from 'antd'
import zhCn from 'antd/lib/locale/zh_CN'
import React from 'react'
import { Outlet } from 'react-router-dom'

const SecurityLayout: React.FC = () => {
  return (
    <ConfigProvider locale={zhCn} componentSize="small">
      <Outlet />
    </ConfigProvider>
  )
}

export default SecurityLayout
