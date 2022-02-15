/**Libraries */
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { AnyAction, Dispatch } from 'redux';
/** Api */
import { getTodos } from 'api/todos';
/** Action types */
import {
	TODO_ADD_ITEM,
	TODO_DELETE_ITEM,
	TODO_LIST_FAIL,
	TODO_LIST_REQUEST,
	TODO_LIST_SUCCESS,
	TODO_UPDATE_ITEM,
} from '../actionTypes';
import { TodoActions, TodoItem } from '../types';

export const getTodoList = (
	userId: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: TODO_LIST_REQUEST });

			const { data } = await getTodos(userId);

			dispatch({
				type: TODO_LIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: TODO_LIST_FAIL,
				payload: 'error',
			});
		}
	};
};

export const addTodoItem = (item: TodoItem): TodoActions => {
	return {
		type: TODO_ADD_ITEM,
		payload: item,
	};
};

export const updateTodoItem = (id: number): TodoActions => {
	return {
		type: TODO_UPDATE_ITEM,
		payload: id,
	};
};

export const deleteTodoItem = (id: number): TodoActions => {
	return {
		type: TODO_DELETE_ITEM,
		payload: id,
	};
};
