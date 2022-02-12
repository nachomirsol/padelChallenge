import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as types from '../actionTypes';
import { getListPhotoImages } from '../actions';
import { photosReducer } from '../reducers';
import { Photos } from '../types/index';
// Create axios mock
const axiosMock = new MockAdapter(axios);

// Mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const MOCKED_API_DATA = [
	{ id: 1, src: 'http://photo1.jpg', name: 'test 1', likes: 1 },
	{ id: 2, src: 'http://photo2.jpg', name: 'test 2', likes: 2 },
	{ id: 3, src: 'http://photo3.jpg', name: 'test 3', likes: 3 },
];

describe('TodoList Redux actions', () => {
	beforeEach(() => {
		axiosMock.reset();
	});

	it('Should fire PHOTO_LIST_REQUEST and PHOTO_LIST_SUCCESS in case of success', async () => {
		axiosMock
			.onGet(
				`https://api.unsplash.com/photos?page=1&per_page=30&client_id=${process.env.REACT_APP_API_ACCESS_KEY}`
			)
			.reply(200, MOCKED_API_DATA);

		const expectedActions = [
			{ type: 'PHOTO_LIST_REQUEST' },
			{ type: 'PHOTO_LIST_SUCCESS', payload: MOCKED_API_DATA },
		];
		const store = mockStore();

		await store.dispatch(getListPhotoImages(1));

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('Should fire PHOTO_LIST_REQUEST and PHOTO_LIST_FAIL in case of failure', async () => {
		axiosMock
			.onGet(
				`https://api.unsplash.com/photos?page=1&per_page=30&client_id=${process.env.REACT_APP_API_ACCESS_KEY}`
			)
			.networkError();

		const expectedActions = [
			{ type: 'PHOTO_LIST_REQUEST' },
			{ type: 'PHOTO_LIST_FAIL', payload: 'error' },
		];
		const store = mockStore();

		await store.dispatch(getListPhotoImages(1));

		expect(store.getActions()).toEqual(expectedActions);
	});
});

describe('Todos reducer', () => {
	const initialState = { loading: false, error: false, photos: [] };

	it('should return empty array as initial state', () => {
		expect(photosReducer(initialState, {})).toEqual(initialState);
	});

	it('Should return the array with the todo 3 removed', () => {
		const initialState = {
			photos: MOCKED_API_DATA,
			loading: false,
			error: false,
		};

		expect(initialState.photos).toHaveLength(3);

		const state = photosReducer(initialState, {
			type: types.PHOTO_LIST_SUCCESS,
			payload: MOCKED_API_DATA,
		});

		expect(state.photos).toHaveLength(3);
	});
});
