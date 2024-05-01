export type TodoType = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export type AddTodoType = {
	title: string;
	completed: boolean;
	id: number;
};
