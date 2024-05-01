import { useQuery } from 'react-query';
import { fetchTodos } from '../api/todo';
import { TodoType } from '../types/todo';

const Todos = () => {
	const { data, isLoading, isError, isSuccess } = useQuery('todos', fetchTodos);
	if (isLoading) {
		return 'Loading...';
	} else if (isError) {
		return 'Error';
	} else if (isSuccess) {
		return (
			<ul className="todo-list">
				{data?.map((todo: TodoType) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		);
	}
};

export default Todos;
