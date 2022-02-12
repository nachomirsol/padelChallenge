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


export type TodoAction = {
	type: string;
	payload: number;
};

export type TodoListAction = {
	type: string;
	payload: TodoItem[];
};

export type TodoActions = TodoAction | TodoListAction;