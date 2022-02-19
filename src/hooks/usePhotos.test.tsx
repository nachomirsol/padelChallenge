import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'store/rootReducer';
import { waitFor, wrapper } from 'utils/tests';

import { usePhotos } from './usePhotos';

let storeRedux = {
	loading: false,
	photos: [{ id: '1' }, { id: '2' }, { id: '3' }],
};
const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation(() => storeRedux);
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
	useSelector: () => mockSelector(),
}));

describe('useDashboard hook', () => {
	test('Should get data from redux store', () => {
		const { result } = renderHook(() => usePhotos());

		waitFor(() =>
			expect(result.current.photos.length).toBe(storeRedux.photos.length)
		);
	});
});
