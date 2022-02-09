/** Service */
import { getPhotos, searchPhotos, updatePhotoLikes } from 'api/photos';
/** Action types */
import {
	FILTER_PHOTO_LIST_FAIL,
	FILTER_PHOTO_LIST_REQUEST,
	FILTER_PHOTO_LIST_SUCCESS,
	LOAD_MORE_DATA_SUCCESS,
	PHOTO_LIST_FAIL,
	PHOTO_LIST_REQUEST,
	PHOTO_LIST_SUCCESS,
	UPDATE_PHOTO_LIKES_FAIL,
	UPDATE_PHOTO_LIKES_SUCCESS,
} from '../actionTypes';

export const getListPhotoImages = (page: number) => async (dispatch: any) => {
	try {
		dispatch({ type: PHOTO_LIST_REQUEST });

		const { data } = await getPhotos(page);

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

export const loadMoreData = (page: number) => async (dispatch: any) => {
	try {
		const { data } = await getPhotos(page);

		dispatch({
			type: LOAD_MORE_DATA_SUCCESS,
			payload: data,
		});
	} catch {
		dispatch({
			type: PHOTO_LIST_FAIL,
			payload: 'error',
		});
	}
};

export const updateLike = (id: string) => async (dispatch: any) => {
	try {
		await updatePhotoLikes(id);

		dispatch({
			type: UPDATE_PHOTO_LIKES_SUCCESS,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_PHOTO_LIKES_FAIL,
			payload: 'error updating like',
		});
	}
};

export const filterPhotos = (query: string) => async (dispatch: any) => {
	try {
		dispatch({ type: FILTER_PHOTO_LIST_REQUEST });

		const {
			data: { results },
		} = await searchPhotos(query);

		dispatch({
			type: FILTER_PHOTO_LIST_SUCCESS,
			payload: results,
		});
	} catch (error) {
		dispatch({
			type: FILTER_PHOTO_LIST_FAIL,
			payload: 'error',
		});
	}
};
