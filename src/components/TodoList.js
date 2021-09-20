import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { selectAllItems, selectDone, selectUndone } from '../redux/selector'
import store from '../redux/store'

const TodoList = () => {
  const filter = store.getState();
  console.log(filter)
  console.log(filter)
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