import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalAPI from "../Services/GlobalAPI"

const Home = () => {

    const [allGamesList, setAllGamesList] = useState([])

    useEffect(() =>{
        GetAllGames()
    },[])

    const GetAllGames = () => {
        GlobalAPI.getAllGames.then((res) =>{
            console.log(res.data.results)
            setAllGamesList(res.data.results)
        })
    }
    return (
        <div className="grid grid-cols-4 px-8">
            <div className="hidden md:block">
                <GenreList />
            </div>
            <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
        </div>
    )
}

export default Home