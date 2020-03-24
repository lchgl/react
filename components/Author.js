import { Avatar, Divider } from 'antd'

import { UserOutlined } from '@ant-design/icons'

import '../static/style/components/author.css'

const Author = () => {
  return (
    <div className='author-div'>
      <div><Avatar size="large" icon={<UserOutlined />} /></div>
      <div className='author-introduction'>
        个人信息，基本状态介绍
        <Divider>社交账号</Divider>
        <Avatar size={28} icon='github' className='account' />
        <Avatar size={28} icon='qq' className='account' />
        <Avatar size={28} icon='wechat' className='account' />
      </div>
    </div>
  )
}

export default Author