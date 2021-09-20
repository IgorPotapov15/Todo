import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  filter: 'ALL',
  items: []
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {

    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
      }
      state.items.push(todo)
    },

    toggleComplete: (state, action) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload.id)
      state.items[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.items.filter((todo) => todo.id !== action.payload.id)
    },
  }
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;