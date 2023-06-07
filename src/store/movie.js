import { Store } from "../core/heropy";

const store = new Store({
    searchText : '',
    page : 1,
    pageMax: 1,
    movies : [],
    movie: {},
    loading: false,
    message: 'Search for the movie title'
})
export default store 

export const searchMoives = async page =>{
    store.state.loading = true
    store.state.message = ''
    store.state.page = page
    if (page === 1){
        store.state.movies = []
        
    }

    try{
        const res = await fetch(`https://www.omdbapi.com/?apikey=107804be&s=${store.state.searchText}&page=${page}`)
        const { Search, totalResults, Response, Error } = await res.json()
        if (Response === 'True'){
            store.state.movies = [
                //페이지 정보 누적 시키기 위해 전개 연산자 사용 
                ...store.state.movies,
                ...Search
            ]
            store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        } else {
            store.state.message = Error
        }

    } catch (error){
        console.log('searchMovies error:',error)
    } finally{
        store.state.loading = false
    }   
    
}

export const getMovieDetails = async id => {
    try{
        const res = await fetch(`https://www.omdbapi.com/?apikey=107804be&i=${id}&plot=full}`)
        store.state.movie = await res.json()
    } catch (err){
        console.log('getMovieDetails error:',err)
    }
}