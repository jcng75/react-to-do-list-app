import "./styles.css"

export default function App() {
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
      <label htmlFor="itemName">New Item</label>
      <input id="itemName" type="text" />
      <button className="btn">Add</button>
      </div>
    </form>
    <h1 className="header"> Todo List</h1>
    <ul className="todo-list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      </ul>
    </>
  ) 
}