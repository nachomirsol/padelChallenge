import {
	FILTER_PHOTO_LIST,
	PHOTO_LIST_FAIL,
	PHOTO_LIST_REQUEST,
	PHOTO_LIST_SUCCESS,
} from '../actionTypes';

const defaultState = {
	photos: [],
};

const photosReducer = (state = defaultState, action: any): any => {
	switch (action.type) {
		case PHOTO_LIST_REQUEST:
			return { loading: true, error: false, photos: [] };

		case PHOTO_LIST_SUCCESS:
			return { loading: false, error: false, photos: action.payload };

		case PHOTO_LIST_FAIL:
			return { loading: false, error: true, photos: [] };

		case FILTER_PHOTO_LIST:
			return {
				...defaultState,
			};

		default:
			return state;
	}
};

export { photosReducer };
