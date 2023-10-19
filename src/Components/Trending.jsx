import React, { useEffect } from 'react'

const Trending = ({ gameList }) => {

    useEffect(() => {
        // console.log("gameList", gameList)
    }, [])

    return (
        <div className='mt-5 hidden md:block'>
            <h2 className='text-[30px] font-bold dark:text-white'>Trending Games</h2>
            <div className='hodden gap-3 md:grid md:grid-cols-3 lg:grid-cols-4 rounded-lg mt-5'>
                {gameList.map((tren, index) => index < 4 && (
                    <div key={tren.id} className='bg-slate-400 rounded-lg group hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                        <img src={tren.background_image} className='h-[270px] object-cover rounded-t-lg'/>
                        <h2 className=' dark:text-white text-xl font-semibold p-2'>{tren.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending