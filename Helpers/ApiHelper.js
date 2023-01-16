const axios = require('axios').default;

module.exports = class ApiHelper {
	getRequest({ url }) {
		return axios.get(url).then(response => response);
	}

	postRequest({ url }) {
		return axios.post(url)
		  .then((response) => {
			return response;
		  }, (error) => {
			return error;
		});
	}
}