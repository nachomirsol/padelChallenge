import { PHOTO_LIST_REQUEST, PHOTO_LIST_SUCCESS } from '../actionTypes';

const defaultState = {
	photos: [],
};

const photosReducer = (state = defaultState, action: any): any => {
	switch (action.type) {
		case PHOTO_LIST_REQUEST:
			return { loading: true, photos: [] };

		case PHOTO_LIST_SUCCESS:
			return { loading: false, photos: action.payload };

		default:
			return state;
	}
};

export { photosReducer };
