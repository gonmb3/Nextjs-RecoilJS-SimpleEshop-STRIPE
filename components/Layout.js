import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ( {children, title}) => {
  return (
    <>
        <Head>
        <title>E-shop | {title} </title>
        </Head>
            <Navbar/>
        {children}
    </>
  )
}

export default Layout