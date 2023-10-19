import axios from "axios"

const key = "d811e5a8d38243de96d3eb96f280fdd7"
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)

export default{
    getGenreList, getAllGames
}