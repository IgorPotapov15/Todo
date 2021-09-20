import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllItems, selectDone, selectUndone } from '../redux/selector'
import { changeSelector } from './TodoList'

const FilterItems = ({ setSelector }) => {
  return (
    <div>
      <button>All</button>
      <button>Done</button>
      <button>Undone</button>
    </div>
  )
}

export default FilterItems