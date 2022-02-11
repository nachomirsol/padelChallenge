import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { photosReducer } from './photos/reducers';
import { todosReducer } from './todos/reducers';

export const rootReducer = combineReducers({
	user: userReducer,
	photos: photosReducer,
	todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
