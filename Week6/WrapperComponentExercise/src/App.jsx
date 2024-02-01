
import { useEffect } from 'react'
import './App.css'
import CardWrapper from './Components/CardWrapper'
import TextComponent from './Components/TextComponent'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          const json = await res.json();
          console.log(json)
          setTodos(json.todos);
    })
  }, 2000)
    
  }, [])

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
    </>
  )
}


function Todo({title, description}){
  return (
    <>
    <h1>{title}</h1>
    <h5>{description}</h5>
    </>
  )
}


export default App
