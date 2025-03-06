import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    setTodos(currTodos => {
      return [...currTodos, { title: newItem, completed: false, id: crypto.randomUUID() }]
    })
    setNewItem("")
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
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
      <label htmlFor="itemName">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} id="itemName" type="text" />
      <button className="btn">Add</button>
      </div>
    </form>
    <h1 className="header"> Todo List</h1>
    <ul className="list">
      {todos.length === 0 && <li>No Items</li>}
      {todos.map(todo => {
        return <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} onClick={e => handleCheckbox(todo.id, e.target.completed)}/>
            {todo.title}
          </label>
          <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      })}
      </ul>
    </>
  ) 
}