import { createSelector } from 'reselect'

export const selectAllItems = state => state.todos.items;

export const selectDone = createSelector(
  selectAllItems,
  allItems => allItems.filter(item => item.completed === true)
)

export const selectUndone = createSelector(
  selectAllItems,
  allItems => allItems.filter(item => item.completed === false)
)