/** Libraries */
import axios from 'axios';
/** Constants */
import { API_UNSPLASH } from 'constants/apis';

const { BASE_URL, CLIENT_ID } = API_UNSPLASH;

export const getPhotoImages = () => {
	return axios.get(`${BASE_URL}/photos?page=2&client_id=${CLIENT_ID}`);
};
