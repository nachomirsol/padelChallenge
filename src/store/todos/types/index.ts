export type TodoState = {
	loading: boolean;
	error: boolean;
	todos: TodoItem[];
};

export type TodoItem = {
	userId: number;
	id: number;
	description: string;
	completed: boolean;
};
