import {
	FILTER_PHOTO_LIST_FAIL,
	FILTER_PHOTO_LIST_REQUEST,
	FILTER_PHOTO_LIST_SUCCESS,
	LOAD_MORE_DATA_SUCCESS,
	PHOTO_LIST_FAIL,
	PHOTO_LIST_REQUEST,
	PHOTO_LIST_SUCCESS,
} from '../actionTypes';
import { PhotoActions, PhotoState } from '../types';

const initialState = { loading: false, error: false, photos: [] };

const photosReducer = (
	state = initialState,
	action: PhotoActions
): PhotoState => {
	switch (action.type) {
		case PHOTO_LIST_REQUEST:
			return { loading: true, error: false, photos: [] };

		case PHOTO_LIST_SUCCESS:
			return { loading: false, error: false, photos: action.payload };

		case PHOTO_LIST_FAIL:
			return { loading: false, error: true, photos: [] };

		case LOAD_MORE_DATA_SUCCESS: {
			return {
				loading: false,
				photos: [...state.photos, ...action.payload],
			};
		}

		case FILTER_PHOTO_LIST_REQUEST:
			return { loading: true, error: false, photos: [] };

		case FILTER_PHOTO_LIST_SUCCESS:
			return { loading: false, error: false, photos: action.payload };

		case FILTER_PHOTO_LIST_FAIL:
			return { loading: false, error: true, photos: [] };

		default:
			return state;
	}
};

export { photosReducer };
