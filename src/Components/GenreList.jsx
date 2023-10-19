import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

const GenreList = ({genresId, selectedGenreName}) => {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState([])

    useEffect(() => {
        GetGenreList()
    })

    const GetGenreList = () => {
        GlobalAPI.getGenreList.then((res) => {
            // console.log(res.data.results)
            setGenreList(res.data.results)
        })
    }
    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {genreList.map((item, index) => (
                <div key={item.id} onClick={() => {setActiveIndex(index);genresId(item.id);selectedGenreName(item.name)}}
                className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-3 rounded-lg group dark:hover:bg-gray-600
                ${activeIndex == index ? " bg-gray-300 dark:bg-gray-600" : null}`}>
                    <img src={item.image_background} 
                    className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
                    ${activeIndex == index ? " scale-105" : null}`} />
                    <h3 className={`text-lg group-hover:font-bold dark:text-white
                    ${activeIndex == index ? " font-bold" : null}`}>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList