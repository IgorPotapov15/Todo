import { useDispatch } from 'react-redux'
import { changeFilter } from '../redux/todoSlice'

const FilterItems = () => {
  const dispatch = useDispatch()
  
  const handleChange = (type) => {
    dispatch(
      changeFilter({ filter: type })
    )
  }

  return (
    <div className="filter">
      <button onClick={() => handleChange('ALL')} className="filter-button">All</button>
      <button onClick={() => handleChange('DONE')} className="filter-button">Done</button>
      <button onClick={() => handleChange('UNDONE')} className="filter-button">Undone</button>
    </div>
  )
}

export default FilterItems