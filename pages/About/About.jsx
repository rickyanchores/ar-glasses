import React from 'react'

const About = () => {
  return (
    <div className='About p-14 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 justify-around items-center'>
        <div className="text-container">
            <h3 className="font-semibold">EXCLUSIVE DEAL: DISCOVER THE NEW AR GLASSES</h3>
            <h1 className="text-4xl font-bold">XREAL Air Glasses</h1>
            <span></span>
            <h2 className="font-semibold">£80 instant discount.</h2>
            <span></span>
            <button className="btn">Buy Now</button>
        </div>
        <div className="image-box w-[680px] h-[460px]">
            
        </div>
    </div>
  )
}

export default About