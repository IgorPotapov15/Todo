import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllItems, selectDone, selectUndone } from '../redux/selector'
import { changeSelector } from './TodoList'
import { changeFilter } from '../redux/todoSlice'

const FilterItems = () => {
  const dispatch = useDispatch()

  const handleChange = (type) => {
    dispatch(
      changeFilter({ filter: type })
    )
  }

  return (
    <div>
      <button onClick={handleChange('ALL')}>All</button>
      <button onClick={handleChange('DONE')}>Done</button>
      <button onClick={handleChange('UNDONE')}>Undone</button>
    </div>
  )
}

export default FilterItems