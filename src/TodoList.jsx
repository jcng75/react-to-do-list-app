import { useState } from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({todos, handleCheckbox, handleDelete}) {

    return (
        <ul className="list">
            {todos.length === 0 && <li>No Items</li>}
            {todos.map(todo => {
              return <TodoItem id={todo.id} checked={todo.checked} title={todo.title} handleCheckbox={handleCheckbox} handleDelete={handleDelete}/> 
            })}
        </ul>
        )
}