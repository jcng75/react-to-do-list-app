import { useState } from "react";

export function TodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
  }
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="itemName">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} id="itemName" type="text" />
                <button className="btn">Add</button>
            </div>
        </form>
    )
}