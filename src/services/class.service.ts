import http from "./http";
import Promisable from "./Promisable";
import { AppDispatch } from "redux/store";
import { classActions } from "redux/slices/class/classSlice";
import { log } from "./logger.service";

const url = "/class";

const ClassService = {
	addClass: async (data: any, dispatch?: AppDispatch) => {
		dispatch?.(classActions.setLoading(true));

		const { error, success }: any = await Promisable.asPromise(
			http.get(`${url}/addClass`, data)
		);

		log("success", success);
		// if (success) {
		// 	dispatch?.(classActions.setClasses(success.data));
		// 	return success;
		// }

		dispatch?.(classActions.setLoading(false));
		return error;
	},
};

export default ClassService;
