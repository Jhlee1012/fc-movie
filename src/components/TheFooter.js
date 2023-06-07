import {Component} from '../core/heropy'
import aboutStore from '../store/about'

export default class THeFooter extends Component {
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render(){
        const {github,repository} = aboutStore.state

        this.el.innerHTML = /*html */`
         <div>
            <a href = '${repository}'>github Repository</a>
         </div>
         <div>
            <a href= "${github}">
                ${new Date().getFullYear()} TAYLOR LEE
            </a>
        </div>
        `
    }

}