import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CounterItems from './components/CounterItems';
import { useSelector } from 'react-redux'
import FilterItems from './components/FilterItems';
import { selectAllItems, selectDone, selectUndone } from './redux/selector'

const App = () => {

	return (
		<div>
			<h1>My Todo List</h1>
			<AddTodoForm />
      <FilterItems/>
			<TodoList/>
			<CounterItems />
		</div>
	);
};

export default App;