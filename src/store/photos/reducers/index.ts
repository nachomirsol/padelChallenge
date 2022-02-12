import {
	FILTER_PHOTO_LIST_FAIL,
	FILTER_PHOTO_LIST_REQUEST,
	FILTER_PHOTO_LIST_SUCCESS,
	LOAD_MORE_DATA_SUCCESS,
	PHOTO_LIST_FAIL,
	PHOTO_LIST_REQUEST,
	PHOTO_LIST_SUCCESS,
	UPDATE_PHOTO_LIKES_SUCCESS,
} from '../actionTypes';

const initialState = { loading: false, error: false, photos: [] };

const setUpdateLike = (state: any, action: any) => {
	const indexOfPhotoToEdit = state.findIndex(
		(photo: any) => photo.id === action.payload.id
	);
	const photoList = [...state];
	photoList[indexOfPhotoToEdit] = action.payload;

	return photoList;
};

const photosReducer = (state = initialState, action: any): any => {
	switch (action.type) {
		case PHOTO_LIST_REQUEST:
			return { loading: true, error: false, photos: [] };

		case PHOTO_LIST_SUCCESS:
			return { loading: false, error: false, photos: action.payload };

		case PHOTO_LIST_FAIL:
			return { loading: false, error: true, photos: [] };

		case LOAD_MORE_DATA_SUCCESS: {
			return {
				photos: state.photos.concat(action.payload),
			};
		}

		case UPDATE_PHOTO_LIKES_SUCCESS:
			return setUpdateLike(state, action);

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
