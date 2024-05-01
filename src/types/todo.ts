export type TodoType = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export type AddTodoType = {
	userId: number;
	title: string;
	completed: boolean;
	id: number;
};
