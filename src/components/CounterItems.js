import React from 'react'
import { useSelector } from 'react-redux'

const CounterItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.items.filter((todo) => todo.completed === true)
  )

  return (
    <h4>
      Total Completed: {completedTodos.length}
    </h4>
  )
}

export default CounterItems;