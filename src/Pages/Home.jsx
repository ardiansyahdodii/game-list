import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalAPI from "../Services/GlobalAPI"
import Banner from "../Components/Banner"
import Trending from "../Components/Trending"

const Home = () => {

    const [allGamesList, setAllGamesList] = useState([])

    useEffect(() => {
        GetAllGames()
    }, [])

    const GetAllGames = () => {
        GlobalAPI.getAllGames.then((res) => {
            // console.log(res.data.results)
            setAllGamesList(res.data.results)
        })
    }
    return (
        <div className="grid grid-cols-4 px-8">
            <div className="hidden md:block">
                <GenreList />
            </div>
            <div className="col-span-4 md:col-span-3 p-4">
                {allGamesList.length > 0 ?
                    <Banner gameBanner={allGamesList[0]} />
                    : null}
                    <Trending gameList={allGamesList}/>
            </div>
        </div>
    )
}

export default Home