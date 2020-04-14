import React, { Component } from 'react'
import style from './Style.module.css'

export default class AddPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           name:'' 
        }
    }
    addName=(e)=>{
        this.setState({name:e.target.value})
    }

    createPost=()=>{
        this.props.add(this.state.name)
    }

    render() {
        return (
            <div>
                <input className={style.input} onChange={this.addName} placeholder='Write here what you need to do'/>
                <br></br> 
                <button onClick={this.createPost}>Create</button>
            </div>
        )
    }
}
