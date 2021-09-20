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
    <li>
      {title}
      <input 
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxClick} 
      />
      <button
        onClick={handleDeleteClick}
      >
        [X]
      </button>
    </li>
  )
}

export default TodoItem;