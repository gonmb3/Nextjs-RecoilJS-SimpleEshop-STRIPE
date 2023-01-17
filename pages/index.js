import Layout from '@/components/Layout'
import Products from '@/components/Products'
import React from 'react'

import data from "../data.json"
 

const Home = () => {
  return (
    <Layout title="Home">
      <div className='container mx-auto'>
          <h1 className='text-4xl text-center mt-4 '>Our Products</h1>
          
          <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
              {
                data.map(product => (
                  <Products product={product} key={product.id}/>
                ))
              }
          </div>
      </div>
    </Layout>
  )
}

export default Home