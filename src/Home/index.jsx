import React from 'react'
import './index.css'

const index = () => {
    return (
        <div className="home-main">
            <div className="banner-main h-screen w-full bg-white">
                <h2>
                    Banner
                </h2>
            </div>
            <div className="services-carou h-screen w-full bg-gray-100">
                <h2 className='text-center text-violet-500'>
                    Services
                </h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default index