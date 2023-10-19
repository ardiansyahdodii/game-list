import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

const GenreList = () => {

    useEffect(()=>{
        GetGenreList()
    })

    const GetGenreList = () =>{
        GlobalAPI.getGenreList.then((res) =>{
            console.log(res.data.results)
        })
    }
  return (
    <div>GenreList -----</div>
  )
}

export default GenreList