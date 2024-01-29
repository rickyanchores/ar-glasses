import React from 'react'

const Card = () => {
  return (
    <div className='Card p-4 rounded-md'>
        <img className='card-image rounded-md' src="https://uk.shop.xreal.com/cdn/shop/files/Frame196441.jpg?v=1705912039&width=360" alt="image card" />
        <div className="text-box">
            <div className="title">
                <h4>XReal Glass custom version</h4>
            </div>
            <div className="price">£ 80</div>
        </div>
    </div>
  )
}

export default Card;