import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { getVisibleItems } from '../redux/selector'
import store from '../redux/store'

const TodoList = () => {
  let allItems = useSelector(getVisibleItems)

  return (
    <ul>
      {allItems.map((todo) => (
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