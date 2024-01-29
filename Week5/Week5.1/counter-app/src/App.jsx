import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
  {
    title : "Go To Gym",
    description : " Go to gym from 7-9",
    completed : false
  },{
    title : "Study DSA",
    description : " Study DSA from 9 - 10",
    completed : true
  }
]);
  
function addTodo(){
  setTodos([...todos, {title : " New Title", description : " New Description"}])
}

  return (
    
      <div>
       <button onClick={addTodo}>Add a Random Todo</button>
        {todos.map(function(todo){
          return <Todo title={todo.title} description = {todo.description}/>
        })}
      </div>
  )
}





function Todo(props){

  return <div>
    
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>

}


export default App
