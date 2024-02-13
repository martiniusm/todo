import { Typography, TextField, List, ListItem, ListItemText, Checkbox, ListItemIcon } from '@mui/material'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  function updateTodo (index) {
    const currentTodos = [...todos]
    currentTodos[index].completed = !currentTodos[index].completed
    setTodos(currentTodos)
  }

  useEffect(() => {
      document.addEventListener("keydown", function(Event) {
      if(Event.key === "Enter") {
        const todotext = document.getElementById("newtodo").value
        if(todotext) {
          setTodos([...todos, {title: todotext, completed: false}])
          //document.getElementById("newtodo").value = ""
        }
      }
    })
  }, [todos])

  console.log(todos)

  return (
    <>
      <Typography variant="h2" component="h1">To Do</Typography> 
      <TextField id="newtodo" label="Ny todo-oppgave" variant="outlined" />
      <List>
        {todos.map((todo, index) => (
          todo.completed === false ?
          <ListItem>
            <ListItemIcon>
              <Checkbox checked={todo.completed} onChange={() => {updateTodo(index)}} />
            </ListItemIcon>
            <ListItemText primary={todo.title}/>
          </ListItem> : null
        )
        )}
      </List>
      <Typography variant="h3" component="h2">Completed</Typography>
      <List>
        {todos.map((todo, index) => (
          todo.completed === true ?
          <ListItem>
            <ListItemIcon>
              <Checkbox checked={todo.completed} onChange={() => {updateTodo(index)}} />
            </ListItemIcon>
            <ListItemText sx={{ textDecoration: "line-through" }} primary={todo.title}/>
          </ListItem> : null
        )
        )}
      </List>
    </>
  )
}

export default App
