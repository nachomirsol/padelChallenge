import { renderHook, act } from '@testing-library/react-hooks';

import { useDashboard } from '../hooks/useDashboard';

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
		const { result } = renderHook(() => useDashboard());

		expect(result.current.photos.length).toBe(storeRedux.photos.length);
	});

	test('It should call a valid action', () => {
		const { result } = renderHook(() => useDashboard());
		act(() => {
			result.current.getListPhotoImages(1);
		});

		expect(mockDispatch).toHaveBeenCalledTimes(2);
	});

	
});
