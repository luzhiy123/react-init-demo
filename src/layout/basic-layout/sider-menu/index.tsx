import IconFont from '@/components/icon-font'
import { useStore } from '@/store'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Menu } from 'antd'
import { observer } from 'mobx-react'
import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { BasicMenuDataItem } from '../interdace'
import { baseMenuData, checkMenuData } from '../menu-data'
import './index.scss'

type MenuItem = Required<MenuProps>['items'][number];

function formatMenu(list?: BasicMenuDataItem[]): MenuItem[] | undefined {
  return list?.map((item) => {
    const it = item!

    if (it.children?.length) {
      return {
        key: it.key || it.path,
        icon: <IconFont className="zs-menu-icon" type={it.icon} />,
        label: it.name,
        children: formatMenu(it.children!)
      }
    }

    return {
      key: it.key || it.path,
      label: (
        <Link to={it.path} target={it.target}>
          {it.meta?.title || it.name}
        </Link>
      )
    }
  })
}

function SiderMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const userStore = useStore('user')
  const location = useLocation()
  const selectedKeys = [location.pathname]

  const menuInfo = useMemo(() => {
    const menuData = checkMenuData(userStore.user?.resources || [], baseMenuData)
    return formatMenu(menuData)
  }, [userStore.user?.resources])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        selectedKeys={selectedKeys}
        defaultOpenKeys={['demo']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuInfo}
      />
    </div>
  )
}

export default observer(SiderMenu)
