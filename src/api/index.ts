/** Libraries */
import axios from 'axios';
/** Constants */
import { API_UNSPLASH } from 'constants/apis';

const { BASE_URL, CLIENT_ID } = API_UNSPLASH;

export const apiClient = axios.create({
	baseURL: `${BASE_URL}/?client_id=${CLIENT_ID}`,
});
