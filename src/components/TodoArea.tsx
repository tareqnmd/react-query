import { useQuery } from 'react-query';
import { fetchTodos } from '../api/todo';
import AddTodo from './AddTodo';
import Todos from './Todos';

const TodoArea = () => {
	const { data } = useQuery('todos', fetchTodos);
	return (
		<main className="app-main">
			<nav>
				<strong>Todo List</strong>
				<span>Todo Count : {data?.length}</span>
			</nav>
			<AddTodo />
			<Todos />
		</main>
	);
};

export default TodoArea;
