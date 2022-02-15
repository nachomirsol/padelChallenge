/** Libraries */
import axios from 'axios';
/** Constants */
import { API_JSONPLACEHOLDER } from 'constants/apis';

const { BASE_URL } = API_JSONPLACEHOLDER;

export const getTodos = (userId: number = 1) => {
	return axios.get(`${BASE_URL}/todos?userId=${userId}`);
};
