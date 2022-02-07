/** Service */
import { getPhotoImages } from 'api/photos';
/** Action types */
import {
	PHOTO_LIST_FAIL,
	PHOTO_LIST_REQUEST,
	PHOTO_LIST_SUCCESS,
} from '../actionTypes';

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
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
