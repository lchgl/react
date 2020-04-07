import React, { useState } from 'react'

import Head from 'next/head'

import Router from 'next/router'

import { Row, Col, List } from 'antd'
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons'

import Header from '../components/header'

import Author from '../components/Author'

import Advert from '../components/adevert'

import Footer from '../components/footer'

import '../static/style/pages/index.css'

const Home = () => {
  const [ myList , setMyList ] = useState(
    [
      {title:'Create Next App - 用 Next.js 创建后端渲染的 React 应用',context:'服务端渲染，是指页面的渲染和生成由服务器来完成，并将渲染好的页面返回客户端。而客户端渲染是页面的生成和数据的渲染过程是在客户端（浏览器或APP）完成。\n' +
        '\n' +
        '随着前后端分离模式的兴起，从服务端渲染到服务端渲染的演进，前端Web App给前端开发带来了很大的便利，并减轻后端服务器压力。\n' +
        '\n' +
        '前后端解耦，让前端专注做好用户UI层，专注于提升用户体验，让后端专注于业务逻辑处理，分离成微服务，专心做好一件事。\n' +
        '\n' +
        '前后端分离前的服务端渲染技术有：PHP，ASP，JSP等方式，分离后的前端SPA（单页面应用）渲染拥有独立的路由和页面渲染（React，Vue和Angular等），而SPA的最大问题是对SEO不友好，当项目对SEO有需求时，SPA就不是一个好的选择。\n' +
        '\n' +
        '近两年来，React和Vue也开始支持服务端渲染（Server Side Render ），行业内也有这方面的实践，其中掘金就使用Vue的SSR功能做了全站服务端渲染，且效果良好。\n' +
        '\n' +
        '我们现在介绍一个React生态中表现突出的服务端渲染框架：Next.js。'},
      {title:'Create Next App - 用 Next.js 创建后端渲染的 React 应用',context:'服务端渲染，是指页面的渲染和生成由服务器来完成，并将渲染好的页面返回客户端。而客户端渲染是页面的生成和数据的渲染过程是在客户端（浏览器或APP）完成。\n' +
        '\n' +
        '随着前后端分离模式的兴起，从服务端渲染到服务端渲染的演进，前端Web App给前端开发带来了很大的便利，并减轻后端服务器压力。\n' +
        '\n' +
        '前后端解耦，让前端专注做好用户UI层，专注于提升用户体验，让后端专注于业务逻辑处理，分离成微服务，专心做好一件事。\n' +
        '\n' +
        '前后端分离前的服务端渲染技术有：PHP，ASP，JSP等方式，分离后的前端SPA（单页面应用）渲染拥有独立的路由和页面渲染（React，Vue和Angular等），而SPA的最大问题是对SEO不友好，当项目对SEO有需求时，SPA就不是一个好的选择。\n' +
        '\n' +
        '近两年来，React和Vue也开始支持服务端渲染（Server Side Render ），行业内也有这方面的实践，其中掘金就使用Vue的SSR功能做了全站服务端渲染，且效果良好。\n' +
        '\n' +
        '我们现在介绍一个React生态中表现突出的服务端渲染框架：Next.js。'},
      {title:'Create Next App - 用 Next.js 创建后端渲染的 React 应用',context:'服务端渲染，是指页面的渲染和生成由服务器来完成，并将渲染好的页面返回客户端。而客户端渲染是页面的生成和数据的渲染过程是在客户端（浏览器或APP）完成。\n' +
        '\n' +
        '随着前后端分离模式的兴起，从服务端渲染到服务端渲染的演进，前端Web App给前端开发带来了很大的便利，并减轻后端服务器压力。\n' +
        '\n' +
        '前后端解耦，让前端专注做好用户UI层，专注于提升用户体验，让后端专注于业务逻辑处理，分离成微服务，专心做好一件事。\n' +
        '\n' +
        '前后端分离前的服务端渲染技术有：PHP，ASP，JSP等方式，分离后的前端SPA（单页面应用）渲染拥有独立的路由和页面渲染（React，Vue和Angular等），而SPA的最大问题是对SEO不友好，当项目对SEO有需求时，SPA就不是一个好的选择。\n' +
        '\n' +
        '近两年来，React和Vue也开始支持服务端渲染（Server Side Render ），行业内也有这方面的实践，其中掘金就使用Vue的SSR功能做了全站服务端渲染，且效果良好。\n' +
        '\n' +
        '我们现在介绍一个React生态中表现突出的服务端渲染框架：Next.js。'},
    ]
  )
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className='comm-main' justify='center'>
        <Col className='comm-left' sm={24} sl={24} md={16} lg={18} xl={14}>
          <div>

          </div>
         <List
            header={<div>header</div>}
            dataSource={myList}
            itemLayout="vertical"
            renderItem={item=>(
              <List.Item>
                <div className='list-title'style={{cursor:'pointer'}} onClick={()=>{Router.push('/detail')}}>{item.title}</div>
                <div className='list-icon'>
                  <span><CalendarOutlined />2020-03-24</span>
                  <span><FolderOpenOutlined />视频教程</span>
                  <span><FireOutlined />查看</span>
                </div>
                <div className='list-context'>{item.context}</div>
              </List.Item>
            )}
         />
        </Col>
        <Col className='comm-box' sm={0} sl={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Home