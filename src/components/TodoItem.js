import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(
      toggleComplete({ id: id, completed: !completed })
    )
  }

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }))
  }

  return (
    <li className="item">
      <p className="item-text">
      {title}
      </p>
      <div className="item-tools">
        <input 
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxClick} 
          className={completed ? "item-checkbox done" : "item-checkbox"}
        />
        <button
          onClick={handleDeleteClick}
          className="item-delete"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoItem;