import { useQuery } from 'react-query';
import { fetchTodos } from '../api/todo';

const Todos = () => {
	// Access the client
	// const queryClient = useQueryClient();

	// Queries
	const query = useQuery('todos', fetchTodos);
	console.log('query', query);
	// // Mutations
	// const mutation = useMutation(postTodo, {
	// 	onSuccess: () => {
	// 		// Invalidate and refetch
	// 		queryClient.invalidateQueries('todos');
	// 	},
	// });

	return (
		<div>
			tcl
			{/* <ul>
				{query?.data?.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul> */}
			{/* <button
				onClick={() => {
					mutation.mutate({
						id: Date.now(),
						title: 'Do Laundry',
					});
				}}
			>
				Add Todo
			</button> */}
		</div>
	);
};

export default Todos;
