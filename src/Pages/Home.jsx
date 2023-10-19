import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalAPI from "../Services/GlobalAPI"
import Banner from "../Components/Banner"
import Trending from "../Components/Trending"
import GamesByGenreId from "../Components/GamesByGenreId"

const Home = () => {

    const [allGamesList, setAllGamesList] = useState([])
    const [gameGenreById, setGameGenreById] = useState([])
    const [selectedGenreName, setSelectedGenreName] = useState('Action')

    useEffect(() => {
        GetAllGames()
        GetGamesGenreById(4)
    }, [])

    const GetAllGames = () => {
        GlobalAPI.getAllGames.then((res) => {
            console.log(res.data.results)
            setAllGamesList(res.data.results)
            // setGameGenreById(res.data.results)
        })
    }

    const GetGamesGenreById = (id) => {
        // console.log("GENREID", id)
        GlobalAPI.getGameListById(id).then((res) => {
            // console.log("game list by Id genres", res.data.results)
            setGameGenreById(res.data.results)
        })
    }

    return (
        <div className="grid grid-cols-4 px-8">
            <div className="hidden md:block">
                <GenreList genresId={(genresId) => GetGamesGenreById(genresId)}
                selectedGenreName={(name) => setSelectedGenreName(name)}/>
            </div>
            <div className="col-span-4 md:col-span-3 p-4">
                {allGamesList.length > 0 && gameGenreById.length >0 ?
                    <div>
                        <Banner gameBanner={allGamesList[0]} />
                        <Trending gameList={allGamesList} />
                        <GamesByGenreId gameList={gameGenreById} 
                        selectedGenreName={selectedGenreName}/>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Home