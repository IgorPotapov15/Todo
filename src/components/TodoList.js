import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { getVisibleItems } from '../redux/selector'

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