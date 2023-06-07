import { Component } from "../core/heropy";
import aboutStore from '../store/about';

export default class About extends Component {
    render(){
        const {photo,name,email,github,blog} = aboutStore.state 
        this.el.classList.add('about')
        this.el.innerHTML = /*html */`
            <img src='${photo}' alt="user">
            <h3>${name}</h3>
            <div class='links'>
                <a href="mailto:${email}">leejinhyun327@gmail.com</a>
                <a href="${github}">github</a>
                <a href="${blog}">blog</a>
            </div>
        `
    }

}