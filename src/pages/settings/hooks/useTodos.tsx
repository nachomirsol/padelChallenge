import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	deleteTodoItem,
	getTodoList,
	updateTodoItem,
} from 'store/todos/actions';

export const useTodos = () => {
	const dispatch = useDispatch();
	const { loading, todos, error } = useSelector((state) => state?.todos);
	useEffect(() => {
		dispatch(getTodoList(1));
	}, []);

	const updateItem = (id: number) => {
		dispatch(updateTodoItem(id));
	};

	const deleteItem = (id: number) => {
		dispatch(deleteTodoItem(id));
	};

	return {
		loading,
		todos,
		error,
		updateItem,
		deleteItem,
	};
};
