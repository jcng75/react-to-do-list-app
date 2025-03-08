import { useEffect, useState } from "react"
import "./styles.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")

    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addTodo(newItem) {
    setTodos(currTodos => {
      return [...currTodos, { title: newItem, completed: false, id: crypto.randomUUID() }]
    })
  }

    function handleCheckbox(id, completed) {
        setTodos(currTodos => {
          return currTodos.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed }
            }
            return todo
          })
        })
    }

  function handleDelete(id) {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <TodoForm onSubmit={addTodo} />
    <h1 className="header"> Todo List</h1>
    <TodoList todos={todos} handleCheckbox={handleCheckbox} handleDelete={handleDelete}/>
    </>
  ) 
}