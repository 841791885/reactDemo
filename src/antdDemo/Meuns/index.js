import React, { memo, useState } from 'react'

import { Menu, Button } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

const AntdMenus = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={toggleCollapsed}
        >
          Option 1
        </Menu.Item>
      </Menu>
    </div>
  )
})

export default AntdMenus
