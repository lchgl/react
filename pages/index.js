import React from 'react'

import Head from 'next/head'

import { Button } from 'antd'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Button type='primary'>btn</Button>
      </div>
    </>
  )
}

export default Home