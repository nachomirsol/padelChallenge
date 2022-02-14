import { ReactElement, PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from 'store/rootReducer';
import thunk from 'redux-thunk';

const wrapper = ({ children }: PropsWithChildren<{}>) => {
	return (
		<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
			{children}
		</Provider>
	);
};

const renderWithRedux = (
	ui: ReactElement,
	{
		initialState,
		store = createStore(rootReducer, applyMiddleware(thunk)),
		...renderOptions
	}: any = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<{}>) => {
		return <Provider store={store}>{children}</Provider>;
	};
	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { renderWithRedux, wrapper };
