import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as types from '../actionTypes';
import { getTodoList } from '../actions';
import { todosReducer } from '../reducers';
// Create axios mock
const axiosMock = new MockAdapter(axios);

// Mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const MOCKED_API_DATA = [
	{ id: 1, userId: 1, title: 'test 1', completed: false },
	{ id: 2, userId: 2, title: 'test 2', completed: true },
	{ id: 3, userId: 3, title: 'test 3', completed: true },
];

describe('TodoList Redux actions', () => {
	beforeEach(() => {
		axiosMock.reset();
	});

	it('Should fire TODO_LIST_REQUEST and TODO_LIST_SUCCESS in case of success', async () => {
		axiosMock
			.onGet(`https://jsonplaceholder.typicode.com/todos?userId=1`)
			.reply(200, MOCKED_API_DATA);

		const expectedActions = [
			{ type: 'TODO_LIST_REQUEST' },
			{ type: 'TODO_LIST_SUCCESS', payload: MOCKED_API_DATA },
		];
		const store = mockStore();

		await store.dispatch(getTodoList(1));

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('Should fire TODO_LIST_REQUEST and TODO_LIST_FAIL in case of Failure', async () => {
		axiosMock
			.onGet(`https://jsonplaceholder.typicode.com/todos?userId=1`)
			.networkError();

		const expectedActions = [
			{ type: 'TODO_LIST_REQUEST' },
			{ type: 'TODO_LIST_FAIL', payload: 'error' },
		];
		const store = mockStore();

		await store.dispatch(getTodoList(1));

		expect(store.getActions()).toEqual(expectedActions);
	});
});

describe('Todos reducer', () => {
	const initialState = {
		todos: [],
		loading: false,
		error: false,
	};

	it('should return empty array as initial state', () => {
		expect(todosReducer(initialState, {})).toEqual(initialState);
	});

	it('Should return the array with the todo 3 removed', () => {
		const initialState = {
			todos: MOCKED_API_DATA,
			loading: false,
			error: false,
		};

		expect(initialState.todos).toHaveLength(3);

		const state = todosReducer(initialState, {
			type: types.TODO_DELETE_ITEM,
			payload: 3,
		});

		expect(state.todos).toHaveLength(2);
	});

	it('Should return the array with the todo 2 completed status modified', () => {
		const initialState = {
			todos: MOCKED_API_DATA,
			loading: false,
			error: false,
		};

		expect(initialState.todos[1].completed).toBe(true);

		const state = todosReducer(initialState, {
			type: types.TODO_UPDATE_ITEM,
			payload: 2,
		});

		expect(initialState.todos[1].completed).toBe(false);
	});
});
