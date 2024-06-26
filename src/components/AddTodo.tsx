import { ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTodo } from '../api/todo';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import SuccessMessage from './SuccessMessage';

const AddTodo = () => {
	const queryClient = useQueryClient();
	const [inputValue, setInputValue] = useState('');

	const { mutate, isLoading, isSuccess, isError } = useMutation(addTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries('todos');
		},
	});

	const addHandler = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate({
			userId: 1,
			id: Date.now(),
			title: inputValue,
			completed: false,
		});
	};

	return (
		<form
			onSubmit={addHandler}
			className="action-area"
		>
			<input
				required
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				className="add-btn"
				disabled={isLoading}
			>
				Add Todo
			</button>
			{isSuccess ? <SuccessMessage message="Successfully Added" /> : ''}
			{isError ? <ErrorMessage message="Error Found" /> : ''}
			{isLoading ? <LoadingMessage message="Loading" /> : ''}
		</form>
	);
};

export default AddTodo;
