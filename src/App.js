import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CounterItems from './components/CounterItems';
import FilterItems from './components/FilterItems';

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