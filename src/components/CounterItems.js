import { useSelector } from 'react-redux'

const CounterItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.items.filter((todo) => todo.completed === true)
  )

  const uncompletedTodo = useSelector((state) =>
    state.todos.items.filter((todo) => todo.completed === false)
  )

  return (
    <h4 className="counter">
      <p>Total Completed: {completedTodos.length}</p>
      <p>Total Uncompleted: {uncompletedTodo.length}</p>
    </h4>
  )
}

export default CounterItems;