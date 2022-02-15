import {
	TODO_DELETE_ITEM,
	TODO_LIST_FAIL,
	TODO_LIST_REQUEST,
	TODO_LIST_SUCCESS,
	TODO_UPDATE_ITEM,
	TODO_ADD_ITEM,
} from '../actionTypes';
import { TodoActions, TodoItem, TodoState } from '../types';

const initialState: TodoState = {
	todos: [],
	loading: false,
	error: false,
};

const addItem = (state: TodoItem[], action: TodoActions): TodoItem[] => {
	const todoList = [...state, action.payload];

	return todoList;
};

const updateTodoItem = (state: TodoItem[], action: TodoActions): TodoItem[] => {
	const indexOfTodoItem = state.findIndex(
		(todoItem: TodoItem) => todoItem.id === action.payload
	);
	const todoList = [...state];
	todoList[indexOfTodoItem].completed = !todoList[indexOfTodoItem].completed;

	return todoList;
};

const deleteTodoItem = (state: TodoItem[], action: TodoActions): TodoItem[] => {
	const todoList = [...state];
	const todoListWithDeletedItem = todoList.filter(
		(item) => item.id !== action.payload
	);

	return todoListWithDeletedItem;
};

const todosReducer = (state: TodoState = initialState, action: TodoActions) => {
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
		case TODO_ADD_ITEM:
			return {
				todos: addItem(state.todos, action),
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
