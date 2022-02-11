import { TodoItem } from 'store/todos/types';

export type TodoListTypes = {
	loading: boolean;
	todos: TodoItem[];
	updateItem: (id: number) => void;
	deleteItem: (id: number) => void;
};

export type TodoListItemTypes = {
	userId?: number;
	id: number;
	title?: string;
	completed: boolean;
};
