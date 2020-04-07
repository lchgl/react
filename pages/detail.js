import React, { useState } from 'react'

import Head from 'next/head'

import { Row, Col, Breadcrumb } from 'antd'

import Header from '../components/header'
import Author from '../components/Author'
import Adevert from '../components/adevert'
import Footer from '../components/footer'

import ReactMarkdown from 'react-markdown'

const Detail = () => {
  let markdown = '# P01:11111\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:22222222222\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:3333333\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:4444444\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '#5 p05:55555555\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:66666666\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:77777777\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'
  return (
    <>
      <Head>
        <title>详情</title>
      </Head>
      <Header />
      <Row className='comm-main' justify='center'>
        <Col className='comm-left' sm={24} sl={24} md={16} lg={18} xl={14}>
          <div className='bread-div'>
            <Breadcrumb.Item>
              <a href="/">首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              视频列表
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              详情页
            </Breadcrumb.Item>
          </div>
          <div>
            <div className='detail-title'>
             这是一个标题
            </div>
            <div className='detail-content'>
              <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              />
            </div>
          </div>
        </Col>
        <Col className='comm-right' sm={0} sl={0} md={7} lg={5} xl={4}>
          <Author />
          <Adevert />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Detail