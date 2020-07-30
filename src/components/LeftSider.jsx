import React from 'react'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout

const LeftSider = () => {
  return (
    <Sider theme="light">
      <Menu className="page--side-menu" defaultSelectedKeys="pres">
        <Menu.Item key="pres">
          <Link to="/prasence">Präsens</Link>
        </Menu.Item>
        <Menu.Item key="prat">
          <Link to="/pratter">Prätter</Link>
        </Menu.Item>
        <Menu.Item key="perf">
          <Link to="/perfect">Perfect</Link>
        </Menu.Item>
        <Menu.Item key="media">
          <Link to="/media/5">Media</Link>
        </Menu.Item>
        <Menu.Item key="tasks">
          <Link to="/task/1">Tasks</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default LeftSider
