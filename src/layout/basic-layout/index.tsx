import { useStore } from '@/store'
import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'
import SiderMenu from './sider-menu'

const { Header, Footer, Sider, Content } = Layout

const BasicLayout: React.FC = () => {
  const userStore = useStore('user')

  useEffect(() => {
    userStore.loadUser()
  }, [userStore])

  return (
    <Layout>
      <Sider className="zs-layout-sider">
        <SiderMenu />
      </Sider>
      <Layout>
        <Header className="zs-layout-header">Header</Header>
        <Content className="zs-layout-content">
          <Outlet />
        </Content>
        <Footer className="zs-layout-footer">Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default observer(BasicLayout)
