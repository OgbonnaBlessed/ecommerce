import { getAllProducts } from '@/sanity/lib/client'
import React from 'react'

const Home = async () => {
  const products = await getAllProducts()

  return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}

export default Home