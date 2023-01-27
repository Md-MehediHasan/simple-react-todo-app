
import './App.css';
import {useState} from 'react'

function App() {
const [todoTitle,setTodoTitle]=useState("")
const [todoList,setTodoList]=useState([])
const [editMode,setEditMode]=useState(false)
const [editAble,setEditAble]=useState(null)

// creating new element
const createHandler=(e)=>{
    if(todoTitle !==""){
            const newTodo={
              id:Date.now(),
              title:todoTitle,
              isComplete:false
            }
            setTodoList([...todoList,newTodo])
            setTodoTitle("")
    }
    else{
      alert("Please enter a valid todo")
    }
}


// deleting target element
const deleteHandler=(id)=>{
  const targetTodoList=todoList.filter((todo)=>todo.id !==id)
  setTodoList(targetTodoList)
}

// editing and updating

const editHandler=(id)=>{
  const tobeEdited=todoList.find(todo=>todo.id===id)
  setTodoTitle(tobeEdited.title)
  setEditMode(true)
  setEditAble(tobeEdited)
}

// updating todo
const updateTodo=()=>{
 setTodoList(todoList.map(todo=>{
  if(todo.id===editAble.id){
    todo.title=todoTitle
  }
  return todo
 }))
 setTodoTitle("")
  setEditMode(false)
  setEditAble(null)


}

  return (
    <div className="App">
      <input type='text'value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
      <button onClick={()=>editAble?updateTodo():createHandler()}>{editAble==null?"Add Todo":"Update Todo"}</button>
      <ul>
        {todoList.map(todo=>(
          <li>
            <span>{todo.title}</span>
            <button onClick={()=>editHandler(todo.id)}>Edit</button>
            <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
