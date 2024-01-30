import React from 'react'

const Footer = () => {
  return (
    <div className='Footer min-w-screen font-bold'>
        <div className="footer-container p-4 flex justify-between">
            <div className="left">
                <div className="location">
                    <h2>🇬🇧 United Kingdom</h2>
                </div>
            </div>
            <div className="right flex justify-around items-center gap-4">
                <div className="soc-media">Instagram</div>
                <div className="soc-media">Facebook</div>
                <div className="soc-media">Twitter</div>
            </div>
        </div>
    </div>
  )
}

export default Footer