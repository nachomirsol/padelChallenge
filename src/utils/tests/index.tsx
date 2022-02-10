import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from 'store/rootReducer';
import thunk from 'redux-thunk';

const wrapper = ({ children }: any) => {
	return (
		<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
			{children}
		</Provider>
	);
};

const renderWithRedux = (
	ui: any,
	{
		initialState,
		store = createStore(rootReducer, applyMiddleware(thunk)),
		...renderOptions
	}: any = {}
) => {
	const Wrapper = ({ children }: any) => {
		return <Provider store={store}>{children}</Provider>;
	};
	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { renderWithRedux, wrapper };
