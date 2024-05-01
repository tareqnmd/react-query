import { useQuery } from 'react-query';
import { fetchTodos } from '../api/todo';
import { TodoType } from '../types/todo';
import ErrorMessage from './ErrorMessage';
import Skeleton from './Skeleton';

const Todos = () => {
	const { data, isLoading, isError, isSuccess } = useQuery('todos', fetchTodos);
	if (isLoading) {
		return <Skeleton />;
	} else if (isError) {
		return <ErrorMessage message="Error Found!" />;
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
