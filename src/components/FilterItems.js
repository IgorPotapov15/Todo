import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../redux/todoSlice'

const FilterItems = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.todos.filter)
  
  const handleChange = (type) => {
    dispatch(
      changeFilter({ filter: type })
    )
  }
  
  return (
    <div className="filter">
      <button disabled={filter === 'ALL' ? true : false} onClick={() => handleChange('ALL')} className="filter-button">All</button>
      <button disabled={filter === 'DONE' ? true : false} onClick={() => handleChange('DONE')} className="filter-button">Done</button>
      <button disabled={filter === 'UNDONE' ? true : false} onClick={() => handleChange('UNDONE')} className="filter-button">Undone</button>
    </div>
  )
}

export default FilterItems