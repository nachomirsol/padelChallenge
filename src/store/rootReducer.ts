import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { photosReducer } from './photos/reducers';

export const rootReducer = combineReducers({
	user: userReducer,
	photos: photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
