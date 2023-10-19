import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

const GenreList = () => {

    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        GetGenreList()
    })

    const GetGenreList = () => {
        GlobalAPI.getGenreList.then((res) => {
            console.log(res.data.results)
            setGenreList(res.data.results)
        })
    }
    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {genreList.map((item) => (
                <div key={item.id} className='flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg group dark:hover:bg-gray-600 '>
                    <img src={item.image_background} 
                    className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300' />
                    <h3 className='text-lg group-hover:font-bold dark:text-white'>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList