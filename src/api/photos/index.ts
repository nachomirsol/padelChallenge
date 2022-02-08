/** Libraries */
import axios from 'axios';
/** Constants */
import { API_UNSPLASH } from 'constants/apis';

const { BASE_URL, CLIENT_ID } = API_UNSPLASH;

export const getPhotos = () => {
	return axios.get(
		`${BASE_URL}/photos?page=1&per_page=30&client_id=${CLIENT_ID}`
	);
};

export const updatePhotoLikes = (id: string) => {
	return axios.post(`${BASE_URL}/photos/${id}/like?client_id=${CLIENT_ID}`);
};

export const searchPhotos = (query: string) => {
	return axios.get(
		`${BASE_URL}/search/photos?query=${query}&page=1&per_page=30&client_id=${CLIENT_ID}`
	);
};
