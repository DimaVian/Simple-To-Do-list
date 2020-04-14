import React, { Component } from 'react'

export default class Post extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             index:props.index
        }
    }
    
    delete=()=>{
        this.props.del(this.state.index)
    }


    render() {
        return (
            <div>
                <h2>To-do:{this.props.name}</h2>
                <button onClick={this.delete}>X</button>
            </div>
        )
    }
}
