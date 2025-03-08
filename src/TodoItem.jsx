export function TodoItem({completed, id, title, handleCheckbox, handleDelete}) {
    return (
        <li>
            <label>
              <input type="checkbox" checked={completed} onClick={e => handleCheckbox(id, e.target.checked)}/>
              {title}
            </label>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}