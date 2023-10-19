import React, { useEffect } from 'react'

const Banner = ({ gameBanner }) => {

    useEffect(() => {
        // console.log("gameBanner", gameBanner)
    })
    return (
        <div className='relative'>
            <div className='absolute bottom-0 p-5  w-full bg-gradient-to-t from-slate-900 to-transparent rounded-lg'>
                <h2 className='text-[24px] font-bold text-white '>{gameBanner.name}</h2>
                <button className='bg-blue-600 w-20 h-8 font-semibold rounded-md text-white cursor-pointer'>Get Now</button>
            </div>
            <img src={gameBanner.background_image} className='md:h-[320px] w-full object-center rounded-lg'/>
        </div>
    )
}

export default Banner