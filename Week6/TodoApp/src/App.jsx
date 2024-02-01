import { useState } from 'react'
import Todos from './Components/Todos'
import './App.css'

let counter = 4;

function App() {
  
  const [todos, setTodos] = useState([
    {
      id : 1,
      title : "Title1",
      description : "Description1"
    },
    {
      id : 2,
      title : "Title2",
      description : "Description2"
    },
    {
      id : 3,
      title : "Title3",
      description : "Description3"
    }
  ])

  function onClickHandler(){
    setTodos([...todos , {
      id : counter++,
      title : "titleRandom", 
      description : "descriptionRandom"
      
    }])
  }
  return (
    <>
      <button onClick={onClickHandler}>Add a Todo</button>
       {todos.map(function(todo){
        return <Todos key = {todo.id} title = {todo.title} description = {todo.description}/>
      })} 
    </>
  )
}

export default App
