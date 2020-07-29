import React from 'react'

import { Layout, Menu } from 'antd'

const { Sider } = Layout

const LeftSider = () => {
  return (
    <Sider theme="light">
      <Menu className="page--side-menu">
        <Menu.Item key="pres">Presence</Menu.Item>
        <Menu.Item key="prat">Pratter</Menu.Item>
        <Menu.Item key="perf">Perfect</Menu.Item>
        <Menu.Item key="media">Media</Menu.Item>
      </Menu>
    </Sider>
  )
}

export default LeftSider
