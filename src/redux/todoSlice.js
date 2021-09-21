import { createSlice, current } from "@reduxjs/toolkit"
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
      console.log(current(state), action);

    },

    toggleComplete: (state, action) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload.id)
      state.items[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      const items = current(state.items);
      const updatedItems = items.filter((todo) => todo.id !== action.payload.id)
      console.log(updatedItems, action.payload.id);
      state.items = updatedItems;
    },

    changeFilter: (state, action) => {
      state.filter = action.payload.filter
    }
  }
})

export const { addTodo, toggleComplete, deleteTodo, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;