import {
	TODO_DELETE_ITEM,
	TODO_LIST_FAIL,
	TODO_LIST_REQUEST,
	TODO_LIST_SUCCESS,
	TODO_UPDATE_ITEM,
} from '../actionTypes';
import { TodoItem, TodoState } from '../types';

const initialState: TodoState = {
	todos: [],
	loading: false,
	error: false,
};

const updateTodoItem = (state: TodoItem[], action: any): TodoItem[] => {
	const indexOfTodoItem = state.findIndex(
		(todoItem: TodoItem) => todoItem.id === action.payload
	);
	const todoList = [...state];
	todoList[indexOfTodoItem].completed = !todoList[indexOfTodoItem].completed;

	return todoList;
};

const deleteTodoItem = (state: TodoItem[], action: any): TodoItem[] => {
	const todoList = [...state];
	const todoListWithDeletedItem = todoList.filter(
		(item) => item.id !== action.payload
	);

	return todoListWithDeletedItem;
};

const todosReducer = (state: TodoState = initialState, action: any) => {
	switch (action.type) {
		case TODO_LIST_REQUEST:
			return {
				todos: [],
				loading: true,
				error: false,
			};
		case TODO_LIST_SUCCESS:
			return {
				todos: action.payload,
				loading: false,
				error: false,
			};
		case TODO_LIST_FAIL:
			return {
				todos: action.payload,
				loading: false,
				error: true,
			};
		case TODO_UPDATE_ITEM:
			return {
				todos: updateTodoItem(state.todos, action),
			};
		case TODO_DELETE_ITEM:
			return {
				todos: deleteTodoItem(state.todos, action),
			};

		default:
			return state;
	}
};

export { todosReducer };
