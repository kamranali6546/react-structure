import axios from "axios";
import { log } from "./logger.service";
import { environment } from "environment";

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

axios.defaults.baseURL = environment.API_END_URL;

axios.interceptors.request.use(
	function (config: any) {
		return {
			...config,
			cancelToken: source.token,
		};
	},
	function (error: any) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	(res: any) => {
		log("http response", res.config.url, res);
		return res;
	},
	(err: any) => {
		log("http err", err, err.message);

		if (err.message === "Network Error") throw err;

		const { code, message } = err.response.data;

		if (code === 401) {
			source.cancel(message);
			setTimeout(() => {
				window.location.assign("/");
				source = CancelToken.source();
			}, 300);
		}

		throw err;
	}
);

const http = {
	get: axios.get,
	put: axios.put,
	post: axios.post,
	delete: axios.delete,
	setJWT: () => {
		axios.defaults.headers.common["Authorization"] =
			localStorage.getItem("token") || "";
	},
	setMultiPart: () => {
		axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
	},
};

export default http;
