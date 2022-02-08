/** Service */
import { getPhotoImages } from 'api/photos';
/** Action types */
import {
	FILTER_PHOTO_LIST,
	PHOTO_LIST_FAIL,
	PHOTO_LIST_REQUEST,
	PHOTO_LIST_SUCCESS,
} from '../actionTypes';

export const filterListPhotos = (query: string) => (dispatch: any) => {
	dispatch({
		type: FILTER_PHOTO_LIST,
		payload: query,
	});
};

export const getListPhotoImages = () => async (dispatch: any) => {
	try {
		dispatch({ type: PHOTO_LIST_REQUEST });

		const { data } = await getPhotoImages();

		dispatch({
			type: PHOTO_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PHOTO_LIST_FAIL,
			payload: 'error',
		});
	}
};
