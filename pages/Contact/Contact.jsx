import React from 'react'

const Contact = () => {
  return (
    <div className='Contact min-w-screen p-6'>
        <div className="contact-container md:grid md:grid-cols-4 p-4">
        <div className="">
            <div className="title">
            Explore & Learn
            </div>
            <span></span>
            <div className="links text-stone-400">
                <div className="link">X-Real Homepage</div>
                <div className="link">Air & Air2 Pro</div>
                <div className="link">Air</div>
                <div className="link">Beam</div>
                <div className="link">Adapter</div>
            </div>
        </div>
        <div className="">
            <div className="title">
            Where to buy
            </div>
            <span></span>
            <div className="links text-stone-400">
                <div className="link">Amazon Shop</div>
            </div>
        </div>
        <div className="">
            <div className="title">
            Community
            </div>
            <span></span>
            <div className="links text-stone-400">
                <div className="link">Reddit</div>
                <div className="link">Discord</div>
                <div className="link">Community</div>
            </div>
        </div>
        <div className="">
            <div className="title">
            Help & Support
            </div>
            <span></span>
            <div className="links text-stone-400">
                <div className="link">Custom Service</div>
                <div className="link">Refund & Return</div>
                <div className="link">Track Order</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact;