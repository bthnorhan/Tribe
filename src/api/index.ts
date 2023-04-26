import axios from 'axios';

import { Constants } from '@/constants';

const api = axios.create({
	baseURL: Constants.API_URL,
	timeout: 3000,
});

export default api;
