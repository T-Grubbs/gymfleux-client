import axios from 'axios';

class RoutineService {
	constructor() {
		let service = axios.create({
			baseURL: 'http://localhost:5000/api',
			withCredentials: true
		});

		this.service = service;
	}

	create = (routines) => {
		return this.service.post('/routines', { routines }).then((response) => response.data);
	};
}
export default RoutineService;
