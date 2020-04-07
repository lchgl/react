import { Avatar, Divider } from 'antd'

import { UserOutlined, GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

import '../static/style/components/author.css'

const Author = () => {
  return (
    <div className='author-div'>
      <div><Avatar size="large" icon={<UserOutlined />} /></div>
      <div className='author-introduction'>
        个人信息，基本状态介绍
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className='account' />
        <Avatar size={28} icon={<QqOutlined />} className='account' />
        <Avatar size={28} icon={<WechatOutlined />} className='account' />
      </div>
    </div>
  )
}

export default Author