import { createSelector } from 'reselect'

const getItems = state => state.todos.items
const getFilter = state => state.todos.filter

export const getVisibleItems = createSelector(
  [ getFilter, getItems ],
  (filter, items) => {
    switch (filter) {
      case 'ALL':
        return items
      case 'DONE':
        return items.filter(item => item.completed === true)
      case 'UNDONE':
        return items.filter(item => item.completed === false)
    }
  }
)