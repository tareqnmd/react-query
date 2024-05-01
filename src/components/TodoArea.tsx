import AddTodo from './AddTodo';
import Todos from './Todos';

const TodoArea = () => {
	return (
		<main className="app-main">
			<nav>
				<strong>Todo List</strong>
                <span>Todo Count</span>
			</nav>
			<AddTodo />
			<Todos />
		</main>
	);
};

export default TodoArea;
