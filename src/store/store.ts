import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export { store };
