import React from 'react'

import '../static/style/components/header.css'

import { Row, Col, Menu } from 'antd'
import { HomeOutlined, PlayCircleOutlined, LinkOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <div className='header'>
      <Row justify='center'>
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className='head-logo'>logo</span>
          <span className='head-text'>这是一个用next搭建的项目</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu className='menu-div' mode='horizontal'>
            <Menu.Item>
              <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item>
              <PlayCircleOutlined />
              视频
            </Menu.Item>
            <Menu.Item>
              <LinkOutlined />
              友情链接
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header