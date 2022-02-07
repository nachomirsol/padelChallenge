/** Libraries */
import axios from 'axios';
/** Constants */
import { API_UNSPLASH } from 'constants/apis';

const { BASE_URL, CLIENT_ID } = API_UNSPLASH;

export const getPhotoImages = async () => {
	return await axios.get(`${BASE_URL}/photos/?client_id=${CLIENT_ID}`);
};
