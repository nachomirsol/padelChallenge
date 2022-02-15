export type TodoState = {
	loading: boolean;
	error: boolean;
	todos: TodoItem[];
};

export type TodoItem = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export type TodoAction = {
	type: string;
	payload: number | TodoItem;
};

export type TodoListAction = {
	type: string;
	payload: TodoItem[];
};

export type TodoActions = TodoAction | TodoListAction;
