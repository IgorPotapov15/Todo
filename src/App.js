import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CounterItems from './components/CounterItems';
import FilterItems from './components/FilterItems';

const App = () => {

	return (
		<main>
			<h1 className="main-heading">My Todo List</h1>
			<AddTodoForm />
      <FilterItems/>
			<TodoList/>
			<CounterItems />
		</main>
	);
};

export default App;