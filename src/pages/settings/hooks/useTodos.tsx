import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	deleteTodoItem,
	getTodoList,
	updateTodoItem,
	addTodoItem,
} from 'store/todos/actions';

const USER_ID = 1;

export const useTodos = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [itemName, setItemName] = useState('');
	const dispatch = useDispatch();
	const { loading, todos, error } = useSelector((state) => state?.todos);
	useEffect(() => {
		dispatch(getTodoList(USER_ID));
	}, []);

	const updateItem = (id: number) => {
		dispatch(updateTodoItem(id));
	};

	const deleteItem = (id: number) => {
		dispatch(deleteTodoItem(id));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setItemName(e.target.value);
	};

	const saveItem = () => {
		const lastTodoId = todos[todos.length - 1]?.id ?? 0;
		let item = {
			id: lastTodoId + 1,
			userId: USER_ID,
			completed: false,
			title: '',
		};
		if (itemName !== '') {
			item.title = itemName;
			dispatch(addTodoItem(item));
		}
	};

	return {
		loading,
		todos,
		error,
		itemName,
		isModalOpen,
		setIsModalOpen,
		handleChange,
		saveItem,
		updateItem,
		deleteItem,
		getTodoList,
	};
};
