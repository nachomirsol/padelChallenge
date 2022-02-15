import { renderHook, act } from '@testing-library/react-hooks';

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

		expect(result.current.photos.length).toBe(storeRedux.photos.length);
	});

	test('It should call a valid action', () => {
		const { result } = renderHook(() => usePhotos());
		act(() => {
			result.current.getListPhotoImages(1);
		});

		expect(mockDispatch).toHaveBeenCalledTimes(2);
	});

	test('It should call load more content action', () => {
		const { result } = renderHook(() => usePhotos());
		act(() => {
			result.current.loadMoreContent();
		});

		expect(mockDispatch).toHaveBeenCalledTimes(4);
	});
});
