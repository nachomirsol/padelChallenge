import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { useLogin } from './useLogin';
let storeRedux = {
	isLogged: false,
	user: null,
};
const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation(() => storeRedux);

jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
	useSelector: () => mockSelector(),
}));

describe('useLoginhook', () => {
	test('Should call handleSubmit', () => {
		const { result } = renderHook(() => useLogin(), {
			wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
		});

		act(() => {
			result.current.handleSubmit();
		});

		waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1));
	});

	test('Should call logout action', () => {
		const { result } = renderHook(() => useLogin(), {
			wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
		});

		act(() => {
			result.current.handleLogout();
		});

		expect(mockDispatch).toHaveBeenCalledTimes(1);
	});
});
