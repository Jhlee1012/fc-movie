import { Component } from "../core/heropy";
import moiveStore from '../store/movie'
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
    constructor(){
        super()
        moiveStore.subscribe('movies',()=>this.render())
        moiveStore.subscribe('loading',()=>this.render())
    }
    render(){
        this.el.classList.add('movie-list')
        this.el.innerHTML = /*html*/`
            ${moiveStore.state.message
                ?`<div class="message">${moiveStore.state.message}</div>`
                :'<div class="movies"></div>'}
            
            <div class="the-loader hide"></div>
        `
    
        const moviesEl = this.el.querySelector('.movies')
        moviesEl?.append(
            ...moiveStore.state.movies.map(movie=> new MovieItem({movie}).el)        
        )

        const loaderEl = this.el.querySelector('.the-loader')
        moiveStore.state.loading 
        ? loaderEl.classList.remove('hide') 
        : loaderEl.classList.add('hide') 
    }

}