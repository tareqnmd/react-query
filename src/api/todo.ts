import { AddTodoType } from '../types/todo';
import { axiosInstance } from './instance';

export const fetchTodos = async () => {
	const { data } = await axiosInstance.get('/todos');
	return data;
};

export const addTodo = async (payload: AddTodoType) => {
	const { data } = await axiosInstance.post('/todos', payload);
	return data;
};
