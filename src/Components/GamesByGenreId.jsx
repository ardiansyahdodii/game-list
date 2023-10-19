import React, { useEffect } from 'react'

const GamesByGenreId = ({ gameList }) => {
    useEffect(() => {
        console.log("gameList", gameList)
    }, [])
    return (
        <div className='mt-5'>
            <h2 className='text-[30px] font-bold dark:text-white'>Popular Games</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            {gameList.map((item) => (
                <div className='bg-slate-400 p-3 rounded-lg pb-10 group hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                    <img src={item.background_image} className='w-full h-[80%] rounded-xl group object-cover' />
                    <h2 className='font-bold dark:text-white'>{item.name}<span className='text-[10px] rounded-sm bg-green-100 ml-3 px-1 py-0 text-green-700 font-medium'>{item.metacritic}</span></h2>
                    <h2 className='text-gray-500 dark:text-gray-300'>⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
                </div>
            ))}
        </div>
        </div>
    )
}

export default GamesByGenreId