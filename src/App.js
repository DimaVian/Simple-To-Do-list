import React, { Component } from 'react'
import './App.css';
import Names from './components/Names';
import Add from './components/Add';
export default class App extends Component {

   state={
     list:[{ToDo:'Homework'},{ToDo:'Clean the house'},{ToDo:'Training'}]
   }

   create=(n)=>{

    this.setState({list:[{ToDo:n},...this.state.list]})

   }

   deletePost=(i)=>{
    let tempPost=this.state.list.filter((element,index)=>(index!=i))
    this.setState({list:[...tempPost]})
   }



  render() {
    return (
      <div className='App'>
        
        <Add add={this.create}/>
        

        {this.state.list.map((element,i)=>{
          return <Names name={element.ToDo}  index={i} del={this.deletePost}/>
        })}
        
      </div>
    )
  }
}

