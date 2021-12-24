import axios from "axios";

// create instance -> import this to use
const instance = axios.create({
	// baseURL: "http://localhost:5000",
	baseURL: "http://203.170.190.226:8080",
});

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance;
