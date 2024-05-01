import axios from 'axios';

export const fetchTodos = async () => {
	const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
	console.log('data', data);
	return data;
};
