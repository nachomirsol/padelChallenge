import { renderHook, act } from '@testing-library/react-hooks';

import { useTodos } from './useTodos';

let storeRedux = {
	loading: false,
	todos: [{ id: 1 }, { id: 2 }, { id: 3 }],
};
const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation(() => storeRedux);
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
	useSelector: () => mockSelector(),
}));

describe('useTodos hook', () => {
	test('Should get data from redux store', () => {
		const { result } = renderHook(() => useTodos());

		expect(result.current.todos.length).toBe(storeRedux.todos.length);
	});

	test('It should call a valid action', () => {
		const { result } = renderHook(() => useTodos());
		act(() => {
			result.current.getTodoList(1);
		});

		expect(mockDispatch).toHaveBeenCalledTimes(2);
	});

	test('It should call delete action', () => {
		const { result } = renderHook(() => useTodos());
		act(() => {
			result.current.deleteTodoItem(1);
		});
		expect(mockDispatch).toHaveBeenCalledTimes(3);
	});

	test('It should call update action', () => {
		const { result } = renderHook(() => useTodos());
		act(() => {
			result.current.updateItem(1);
		});
		expect(mockDispatch).toHaveBeenCalledTimes(5);
	});

	test('It should call add item action', () => {
		const { result } = renderHook(() => useTodos());
		act(() => {
			result.current.setIsModalOpen;
		});
		act(() => {
			result.current.saveItem();
		});
		expect(mockDispatch).toHaveBeenCalledTimes(6);
	});
});
