import Card from '@/components/Card/Card';
import React from 'react'

const Shop = () => {
  return (
    <div className='Shop p-8 min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <h1 className='shop-title text-6xl p-12'>GO SPATIAL NOW</h1>
        <div className="shop-container grid md:grid-cols-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Shop;