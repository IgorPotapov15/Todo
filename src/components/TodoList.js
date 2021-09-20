import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { selectAllItems, selectDone, selectUndone } from '../redux/selector'

const TodoList = () => {
  const todos = useSelector(selectAllItems)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          id={todo.id} 
          title={todo.title} 
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}

export default TodoList